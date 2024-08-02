<template>
    <canvas :id="canvasId">
        Your browser does not support the canvas element.
    </canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dashboardProps } from "./dashboard"
import { useNS, useZIndex } from "vc-hooks"
import { isArray, getColor, isChinese, isEnglish } from 'vc-utils';
import type { OffsetColor, SubTextStyle, TextStyle, SplitStyle } from "@various-curious-ui/typings"
defineOptions({
    name: "VcDashboard",
    inheritAttrs: false
})

const _ref = ref()

const props = defineProps({
    ...dashboardProps
});

const { getIndex, setIndex } = useZIndex("dashboard")

const MAX_VALUE = Number(props.maxValue);
const VALUE = Number(props.value);
const SROKEWIDTH = Number(props.strokeWidth)
const SplitNumber = Number(props.splitNumber)
const SplitWidth = Number(props.splitWidth)
const INNER_RADIUS = Number(props.innerRadius)
const OUTER_RADIUS = Number(props.outerRadius)
const OUTER_WIDTH = Number(props.outerWidth)
const STEP = Number(props.step);
const RADIUS = Number(props.radius);
const WIDTH = RADIUS * 2;
const HEIGHT = RADIUS;
const ANGLES = props.endAngle - props.startAngle

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
    fillColor?: string | string[]
) => {
    ctx.beginPath(); //beginPath() 方法开始一条路径，或重置当前的路径。
    closePath && ctx.moveTo(x, y);
    ctx.lineWidth = size; //画笔粗细
    ctx.strokeStyle = strokeColor; //画笔颜色
    ctx.arc(x, y, radius, startAngle, endAngle, Boolean); //路径
    if (fillColor) {
        if (isArray(fillColor)) {
            drawColor(
                ctx,
                WIDTH - INNER_RADIUS,
                HEIGHT - INNER_RADIUS,
                WIDTH + INNER_RADIUS,
                HEIGHT,
                fillColor[0],
                fillColor[1]
            );
        } else {
            ctx.fillStyle = fillColor;
        }
        ctx.fill();
    } else {
        ctx.stroke(); //开始画
    }
    closePath && ctx.closePath(); //结束路径
};
// 刻度值
const drawText = (ctx, content, x, y) => {
    let splitStyle: SplitStyle = {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'DINPro',
        textBaseline: 'Alphabetic',
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        ...props.splitStyle as any,
    };
    ctx.font = `${splitStyle.fontWeight} ${splitStyle.fontSize}px ${splitStyle.fontFamily}`;
    ctx.fillStyle = splitStyle.color || props.color;
    ctx.textAlign = splitStyle.textAlign;
    ctx.textBaseline = splitStyle.textBaseline;
    ctx.fillText(`${content}`, x, y);
};

// 渐变色
const drawColor = (ctx, x1, y1, x2, y2, color1, color2) => {
    let gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
};

// 开始角度
let startAngle = ((props.startAngle + 180) * Math.PI) / 180;
// 结束角度
let endAngle = ((props.endAngle + 180) * Math.PI) / 180;
let angleStep = (endAngle - startAngle) / MAX_VALUE
// 初始进度
let step = 0;

//动画函数
const animate = (ctx) => {
    //执行平滑动画
    window.requestAnimationFrame(function () {
        //判断步子最终走多远的边界值，此值可以改
        if (step < VALUE) {
            //该函数在边界内可以调用
            animate(ctx);
        }
    });
    //清空绘制内容
    ctx.clearRect(0, 0, WIDTH, props.semicircle ? HEIGHT : HEIGHT * 2);
    //每次增加的步长，数值越大步子越大跑的越快，数值越小走的越慢
    if (step + 1 > VALUE && step < VALUE) {
        step = VALUE;
    } else if (VALUE !== 0) {
        step += STEP; //可改
    }
    let stepAngle = startAngle + angleStep * step;

    //调用绘制形状函数，传入参数绘制对象，环形进度步长
    drawGauge(ctx, stepAngle, step);
};

const drawGauge = (ctx, stepAngle, step) => {
    //外圆背景
    if (stepAngle < endAngle) {
        drawCircle(
            ctx,
            RADIUS,
            HEIGHT,
            OUTER_RADIUS,
            stepAngle,
            endAngle,
            false,
            OUTER_WIDTH,
            false,
            props.outerBackground
        );
    }
    //内圆
    drawCircle(
        ctx,
        RADIUS,
        HEIGHT,
        INNER_RADIUS,
        startAngle,
        endAngle,
        false,
        0,
        true,
        'transparent',
        props.interBackground
    );
    // 绘制刻度
    drawScale(ctx);
    // 绘制进度条
    if (step > 0) {
        if (isArray(props.background)) {
            const colors = props.background as OffsetColor[]
            colors.forEach((v, i) => {
                let start =
                    i === 0
                        ? startAngle
                        : Number(colors[i - 1]?.offset) * MAX_VALUE * angleStep + startAngle;
                if (start < stepAngle) {
                    // 进度条背景
                    drawCircle(
                        ctx,
                        RADIUS,
                        HEIGHT,
                        OUTER_RADIUS,
                        start,
                        stepAngle,
                        false,
                        OUTER_WIDTH,
                        false,
                        v.color
                    );
                }
            });
        } else {
            // 进度条背景
            drawCircle(
                ctx,
                RADIUS,
                HEIGHT,
                OUTER_RADIUS,
                startAngle,
                stepAngle,
                false,
                OUTER_WIDTH,
                false,
                props.background
            );
        }
        if (isArray(props.color)) {
            const colors = props.color as OffsetColor[]
            colors.forEach((v, i) => {
                v.startStep = i === 0 ? 0 : colors[i - 1].endStep;
                v.endStep = i === colors.length - 1 ? MAX_VALUE : Number(v.offset) * MAX_VALUE;
                let start =
                    i === 0
                        ? startAngle
                        : Number(colors[i - 1]?.offset) * MAX_VALUE * angleStep + startAngle;
                if (start < stepAngle) {
                    // 进度条线
                    drawCircle(
                        ctx,
                        RADIUS,
                        HEIGHT,
                        OUTER_RADIUS + OUTER_WIDTH / 2,
                        start,
                        stepAngle,
                        false,
                        SROKEWIDTH,
                        false,
                        v.color
                    );
                }
            });
        } else {
            // 进度条线
            drawCircle(
                ctx,
                RADIUS,
                HEIGHT,
                OUTER_RADIUS + OUTER_WIDTH / 2,
                startAngle,
                stepAngle,
                false,
                SROKEWIDTH,
                false,
                props.color
            );
        }
        // 绘制主标题
        drawTitle(ctx, step);
        // 绘制副标题
        drawSubTitle(ctx);
    }
};

// 刻度
const SplitSpace = Number(props.splitSpace)
const drawScale = (ctx) => {
    let r1 = OUTER_RADIUS - OUTER_WIDTH / 2 - SplitSpace; // 117
    let r2 = INNER_RADIUS + SplitSpace; //  112
    let r3 = INNER_RADIUS - OUTER_WIDTH / 2 - (r1 - r2) - SplitSpace; // 95
    let angles = ANGLES / (SplitNumber - 1);
    for (let i = 0; i < SplitNumber; i++) {
        let angle = ((angles * i + props.startAngle) * Math.PI) / 180;
        let startX = RADIUS - Math.cos(angle) * r1;
        let startY = HEIGHT - Math.sin(angle) * r1;
        let endX = RADIUS - Math.cos(angle) * r2;
        let endY = HEIGHT - Math.sin(angle) * r2;
        let textX = RADIUS - Math.cos(angle) * r3;
        let textY = HEIGHT - Math.sin(angle) * r3;
        ctx.beginPath();
        ctx.strokeStyle = props.splitColor;
        ctx.lineWidth = SplitWidth;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        let showText = true
        if (ANGLES % 360 === 0 && i === 0) {
            showText = false
        }
        showText && drawText(ctx, (MAX_VALUE / (SplitNumber - 1)) * i, textX, textY);
    }
}

// 绘制主标题文字
const drawTitle = (ctx, step) => {
    let fontStyle: TextStyle = {
        fontSize: 32,
        fontWeight: 500,
        fontFamily: 'DINPro-Medium',
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
    ctx.font = `${fontStyle.fontWeight} ${fontStyle.fontSize}px ${fontStyle.fontFamily}`;
    let textColor = fontStyle.color;
    if (isArray(props.color)) {
        const colors = props.color as OffsetColor[]
        textColor = colors.find((v) => step && v.startStep < step && step <= v.endStep)?.color;
    } else {
        textColor = fontStyle.color || (props.color as string);
    }
    ctx.textAlign = fontStyle.textAlign;
    ctx.textBaseline = fontStyle.textBaseline;
    ctx.fillStyle = textColor;
    fontStyle.bottom = props.subTitle ? 25 : 5
    let title: string = props.title
    let postionBottom = props.middleTitle ? HEIGHT : (fontStyle.top || HEIGHT - fontStyle.bottom)

    if (!props.title && step <= VALUE) {
        title = step + fontStyle.unit
    }    
    title && middleText(ctx, title, fontStyle.left || RADIUS - fontStyle.right,
        postionBottom)
}

const drawSubTitle = (ctx) => {
    if (props.subTitle) {
        // 绘制副标题文字
        let subFontStyle: SubTextStyle = {
            fontSize: 12,
            fontWeight: 'normal',
            fontFamily: 'PingFang',
            textBaseline: 'Alphabetic',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            top: 0,
            bottom: 5,
            left: 0,
            right: 0,
            ...props.subTitleStyle as any,
        };
        ctx.font = `${subFontStyle.fontWeight} ${subFontStyle.fontSize}px ${subFontStyle.fontFamily}`;
        ctx.fillStyle = subFontStyle.color;
        ctx.textAlign = subFontStyle.textAlign;
        ctx.textBaseline = subFontStyle.textBaseline;

        let postionBottom = subFontStyle.top || HEIGHT - subFontStyle.bottom

        ctx.fillText(
            props.subTitle,
            subFontStyle.left || RADIUS - subFontStyle.right,
            postionBottom
        );
    }

}

// 设置文案垂直居中
const middleText = (ctx, text, x, y) => {    
    if (props.middleTitle) {
        const Descent = ctx.measureText(text).actualBoundingBoxDescent
        const Ascent = ctx.measureText(text).actualBoundingBoxAscent
        if (isEnglish(text)) {
            ctx.textBaseline = "baseline";
            const fix = Ascent - Descent;
            ctx.fillText(text, x, y + fix / 2);
        } else if (isChinese(text)) {
            ctx.textBaseline = "middle";
            const fix = Descent / 2;
            ctx.fillText(text, x, y + fix / 2);
        }
    } else {
        ctx.fillText(text, x, y);
    }
}

setIndex();
const canvasId = ref();
canvasId.value = props.id || 'dashboard' + getIndex();
onMounted(() => {
    let myCanvas = document.getElementById(canvasId.value) as HTMLCanvasElement; //获取画布节点
    myCanvas.width = WIDTH;
    myCanvas.height = props.semicircle ? RADIUS : WIDTH;
    let ctx = myCanvas.getContext('2d') as CanvasRenderingContext2D | null; //采用2d格式，并获取对象
    animate(ctx);
});

</script>