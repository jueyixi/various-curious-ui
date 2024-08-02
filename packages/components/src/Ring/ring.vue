<template>
    <canvas :class="[ringNS.namespace]" :id="canvasId" :width="RADIUS * 2" :height="RADIUS * 2">
        Your browser does not support the canvas element.
    </canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { ringProps } from "./ring"
import { useNS, useZIndex } from "vc-hooks"
import { isArray, getColor } from 'vc-utils';
import type { SubTextStyle, TextStyle } from "@various-curious-ui/typings"

defineOptions({
    name: "VcRing",
    inheritAttrs: false
})

const _ref = ref()

const props = defineProps({
    ...ringProps
});

const ringNS = useNS('ring');

const { getIndex, setIndex } = useZIndex("ring")

const MAX_VALUE = Number(props.maxValue);
const VALUE = Number(props.value);
const RADIUS = Number(props.radius);
const SROKEWIDTH = Number(props.strokeWidth)
const INNER_RADIUS = Number(props.innerRadius)
const PERCENT = Number(props.percent || 0)
let step = Number(props.step);

// 渐变色
const drawColor = (ctx, color1, color2) => {
    let gradient = ctx.createLinearGradient(
        RADIUS,
        0,
        RADIUS,
        RADIUS * 2
    );
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.strokeStyle = gradient;
};
// 画圆:  Canvas对象：ctx  圆心坐标: (x, y)  半径: radius  起始角度: startAngle 结束角度: endAngle 是否逆时针旋转: false 代表顺时针旋转  画笔尺寸  是否闭合  画笔颜色  填充颜色
const drawCircle = (
    ctx,
    x,
    y,
    radius,
    startAngle,
    endAngle,
    Boolean,
    size,
    closePath,
    strokeColor,
    fillColor?: string
) => {
    ctx.beginPath(); //beginPath() 方法开始一条路径，或重置当前的路径。
    ctx.lineCap = VALUE === MAX_VALUE ? '' : props.lineCap;
    ctx.lineWidth = size; //画笔粗细
    ctx.strokeStyle = strokeColor; //画笔颜色
    ctx.arc(x, y, radius, startAngle, endAngle, Boolean); //路径
    closePath && ctx.closePath(); //结束路径
    if (fillColor) {
        ctx.fillStyle = fillColor;
        ctx.fill();
    } else {
        if (isArray(strokeColor)) {
            drawColor(ctx, strokeColor[0], strokeColor[1]);
        }
        ctx.stroke(); //开始画
    }
};

let num = Number(props.startStep);
let colorArr = [];

const setColor = computed(() => {
    return (value: Array<string>) => {
        if (isArray(props.color)) {
            return value
        } else {
            return props.color
        }
    }
})

// 普通形式
const init = (ctx) => {
    draw(ctx);
    drawText(ctx);
    drawSubText(ctx);
};

//动画形式
const animate = (ctx) => {
    window.requestAnimationFrame(() => {
        if (num <= VALUE) {
            animate(ctx);
        }
    });
    draw(ctx, num);
    drawText(ctx);
    drawSubText(ctx);
    if (num < VALUE && num + 1 > VALUE) {
        num = VALUE;
    } else {
        num += step;
    }
};

// 绘制（底圆、内嵌圆、渐变圆）
const draw = (ctx, num?: number) => {
    ctx.clearRect(0, 0, RADIUS * 2, RADIUS * 2);
    drawCircle(
        ctx,
        RADIUS,
        RADIUS,
        RADIUS - SROKEWIDTH / 2,
        0,
        2 * Math.PI,
        false,
        SROKEWIDTH,
        true,
        props.background
    );
    if (VALUE) {
        const currentValue = num || VALUE;
        const value = num ? -Math.PI / 2 + ((2 * num) / 100) * Math.PI : Math.PI / 2;
        if (currentValue <= MAX_VALUE / 2) {
            drawCircle(
                ctx,
                RADIUS,
                RADIUS,
                RADIUS - SROKEWIDTH / 2,
                -Math.PI / 2,
                -Math.PI / 2 + ((2 * currentValue) / 100) * Math.PI,
                false,
                SROKEWIDTH,
                false,
                setColor.value([props.color[0], colorArr[num ? MAX_VALUE / 2 : VALUE]])
            );
        } else {
            drawCircle(
                ctx,
                RADIUS,
                RADIUS,
                RADIUS - SROKEWIDTH / 2,
                -Math.PI / 2,
                value,
                false,
                SROKEWIDTH,
                false,
                setColor.value([props.color[0], colorArr[MAX_VALUE / 2]])
            );
            drawCircle(
                ctx,
                RADIUS,
                RADIUS,
                RADIUS - SROKEWIDTH / 2,
                -Math.PI / 2 + 1 * Math.PI,
                -Math.PI / 2 + ((2 * currentValue) / 100) * Math.PI,
                false,
                SROKEWIDTH,
                false,
                setColor.value([props.color[1], colorArr[MAX_VALUE / 2]])
            );
        }
    }
    if (props.innerRadius) {
        drawCircle(
            ctx,
            RADIUS,
            RADIUS,
            RADIUS - SROKEWIDTH - INNER_RADIUS / 2,
            0,
            Math.PI * 2,
            false,
            INNER_RADIUS,
            true,
            props.innerBackground
        );
    }
};

const canvasId = ref("");
setIndex();
canvasId.value = props.id || 'ring' + getIndex();
onMounted(() => {
    let myCanvas = document.getElementById(canvasId.value) as HTMLCanvasElement; //获取画布节点
    let ctx = myCanvas.getContext('2d') as CanvasRenderingContext2D | null; //采用2d格式，并获取对象
    if (isArray(props.color)) {
        colorArr = getColor(props.color[0], props.color[1], MAX_VALUE);
    }
    props.animate ? animate(ctx) : init(ctx);
});

// 绘制文字
let textWidth1 = 0;
let textWidth2 = 0;
let textWidth3 = 0;

const fontStyle: TextStyle = {
    fontSize: 24,
    fontWeight: 500,
    textBaseline: 'Alphabetic',
    color: '',
    textAlign: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    unit: '',
    ...props.titleStyle as any,
};

// 绘制标题文字
const drawText = (ctx) => {
    ctx.save();
    ctx.font = `${fontStyle.fontWeight} ${fontStyle.fontSize}px ${fontStyle.fontFamily}`;
    ctx.fillStyle = fontStyle.color || '#000';
    ctx.textAlign = fontStyle.textAlign;
    ctx.textBaseline = fontStyle.textBaseline;
    let value: any = props.animate
        ? num.toFixed(PERCENT)
        : VALUE.toFixed(PERCENT);
    if (props.percent && props.format && value == props.value) {
        value = value / 1;
    }
    if (props.title) {
        textWidth1 = ctx.measureText(props.title)?.width || 0;
    } else {
        if (props.animate) {
            if (num <= VALUE) {
                textWidth2 = ctx.measureText(value + fontStyle.unit)?.width || 0;
            }
        } else {
            textWidth2 = ctx.measureText(value + fontStyle.unit)?.width || 0;
        }
    }
    value += fontStyle.unit;
    let defaultLeft = props.animate
        ? RADIUS - textWidth3 / 2
        : RADIUS - textWidth3 / 2 - 5;
    if (props.title) {
        defaultLeft += 5;
    }
    ctx.fillText(
        props.title || value,
        fontStyle.left || (fontStyle.right && RADIUS - fontStyle.right) || defaultLeft,
        fontStyle.top ||
        (fontStyle.bottom && RADIUS * 2 - fontStyle.bottom) ||
        RADIUS + subFontStyle.fontSize / 2 + 3
    );
    ctx.restore();
};

// 副标题样式表
const subFontStyle: SubTextStyle = {
    fontSize: 12,
    fontWeight: 'normal',
    textBaseline: 'Alphabetic',
    color: '',
    textAlign: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    ...props.subTitleStyle as any,
};

// 绘制副标题文字
const drawSubText = (ctx) => {
    if (props.subTitle) {
        ctx.font = `${subFontStyle.fontWeight} ${subFontStyle.fontSize}px ${subFontStyle.fontFamily}`;
        ctx.fillStyle = subFontStyle.color || '#000';
        ctx.textAlign = subFontStyle.textAlign;
        ctx.textBaseline = subFontStyle.textBaseline;
        textWidth3 = ctx.measureText(props.subTitle)?.width || 0;
        let width = textWidth1 / 2 || textWidth2 / 2;
        ctx.fillText(
            props.subTitle,
            subFontStyle.left ||
            (subFontStyle.right && RADIUS - subFontStyle.right) ||
            RADIUS + width,
            subFontStyle.top ||
            (subFontStyle.bottom && RADIUS * 2 - subFontStyle.bottom) ||
            RADIUS + subFontStyle.fontSize / 2 + 2
        );
    }
};

</script>