<template>
    <canvas :id="canvasId" :width="props.contentWidth" :height="props.contentHeight">
        Your browser does not support the canvas element.
    </canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dashboardProps, type OffsetColor } from "./dashboard"
import { useNS, useZIndex } from "vc-hooks"
import { isArray, getColor } from 'vc-utils';
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
const WIDTH = Number(props.width)
const SplitNumber = Number(props.splitNumber)
const SplitWidth = Number(props.splitWidth)
const INNER_RADIUS = Number(props.innerRadius)
const OUTER_RADIUS = Number(props.outerRadius)
const OUTER_WIDTH = Number(props.outerWidth)
const STEP = Number(props.step);

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
    ctx.lineWidth = size; //画笔粗细
    ctx.strokeStyle = strokeColor; //画笔颜色
    ctx.arc(x, y, radius, startAngle, endAngle, Boolean); //路径
    closePath && ctx.closePath(); //结束路径
    if (fillColor) {
        if (isArray(fillColor)) {
            drawColor(
                ctx,
                props.contentWidth / 2 - INNER_RADIUS,
                props.contentHeight - INNER_RADIUS,
                props.contentWidth / 2 + INNER_RADIUS,
                props.contentHeight,
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
};
// 刻度值
const drawText = (ctx, content, x, y) => {
    let splitStyle = {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'DINPro',
        textBaseline: 'Alphabetic',
        color: 'rgba(255, 255, 255, 0.8)',
        textAlign: 'center',
        ...props.splitStyle,
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
// 需要渲染角度
let valueAngle = (((VALUE / MAX_VALUE) * 180 + props.endAngle) * Math.PI) / 180;
// 初始进度
let step = Number(props.startStep);

//动画函数
const animate = (ctx) => {
    //执行平滑动画
    window.requestAnimationFrame(function () {
        //判断步子最终走多远的边界值，此值可以改
        if (stepAngle < valueAngle) {
            //该函数在边界内可以调用
            animate(ctx);
        }
    });
    //清空绘制内容
    ctx.clearRect(0, 0, props.contentWidth, props.contentHeight);
    //每次增加的步长，数值越大步子越大跑的越快，数值越小走的越慢
    if (step + 1 > VALUE && step < VALUE) {
        step = VALUE;
    } else {
        step += STEP; //可改
    }
    let stepAngle = (((step / MAX_VALUE) * 180 + props.endAngle) * Math.PI) / 180;
    //调用绘制形状函数，传入参数绘制对象，环形进度步长
    drawGauge(ctx, stepAngle, step);
};

const drawGauge = (ctx, stepAngle, step) => {
    //外圆背景
    drawCircle(
        ctx,
        props.contentWidth / 2,
        props.contentHeight,
        OUTER_RADIUS,
        startAngle,
        endAngle,
        false,
        OUTER_WIDTH,
        false,
        props.outerBackground
    );
    //内圆
    drawCircle(
        ctx,
        props.contentWidth / 2,
        props.contentHeight,
        INNER_RADIUS,
        startAngle,
        endAngle,
        false,
        0,
        true,
        'transparent',
        props.interBackground
    );
    // 刻度
    let total = MAX_VALUE;
    let r1 = OUTER_RADIUS - OUTER_WIDTH / 2 - 2; // 117
    let r2 = INNER_RADIUS + 2; //  112
    let r3 = INNER_RADIUS - OUTER_WIDTH / 2 - (r1 - r2) - 2; // 95
    let angles = (props.endAngle - props.startAngle) / (SplitNumber - 1);
    for (let i = 0; i < SplitNumber; i++) {
        let angle = (angles * i * Math.PI) / 180;
        let startX = props.contentWidth / 2 - Math.cos(angle) * r1;
        let startY = props.contentWidth / 2 - Math.sin(angle) * r1;
        let endX = props.contentWidth / 2 - Math.cos(angle) * r2;
        let endY = props.contentWidth / 2 - Math.sin(angle) * r2;
        let textX = props.contentWidth / 2 - Math.cos(angle) * r3;
        let textY = props.contentWidth / 2 - Math.sin(angle) * r3;
        ctx.beginPath();
        ctx.strokeStyle = props.splitColor;
        ctx.lineWidth = SplitWidth;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        drawText(ctx, (total / (SplitNumber - 1)) * i, textX, textY);
    }
    if (isArray(props.background)) {
        const colors = props.background as OffsetColor[]
        colors.forEach((v, i) => {
            let start =
                i === 0
                    ? startAngle
                    : ((Number(colors[i - 1]?.offset) * 180 + props.endAngle) * Math.PI) / 180;
            if (start < stepAngle) {
                // 进度条背景
                drawCircle(
                    ctx,
                    props.contentWidth / 2,
                    props.contentHeight,
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
            props.contentWidth / 2,
            props.contentHeight,
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
                    : ((Number(colors[i - 1].offset) * 180 + props.endAngle) * Math.PI) / 180;
            if (start < stepAngle) {
                // 进度条线
                drawCircle(
                    ctx,
                    props.contentWidth / 2,
                    props.contentHeight,
                    OUTER_RADIUS + OUTER_WIDTH / 2,
                    start,
                    stepAngle,
                    false,
                    WIDTH,
                    false,
                    v.color
                );
            }
        });
    } else {
        // 进度条线
        drawCircle(
            ctx,
            props.contentWidth / 2,
            props.contentHeight,
            OUTER_RADIUS + OUTER_WIDTH / 2,
            startAngle,
            stepAngle,
            false,
            WIDTH,
            false,
            props.color
        );
    }
    // 绘制标题文字
    let fontStyle = {
        fontSize: 32,
        fontWeight: 500,
        fontFamily: 'DINPro-Medium',
        textBaseline: 'Alphabetic',
        color: '',
        textAlign: 'center',
        top: 0,
        bottom: 25,
        left: 0,
        right: 0,
        unit: '',
        ...props.titleStyle,
    };
    ctx.save();
    ctx.font = `${fontStyle.fontWeight} ${fontStyle.fontSize}px ${fontStyle.fontFamily}`;
    if (isArray(props.color)) {
        const colors = props.color as OffsetColor[]
        colors.forEach((v) => {
            if (v.startStep && v.startStep < VALUE && v.endStep && VALUE <= v.endStep) {
                ctx.fillStyle = v.color;
            }
        });
    } else {
        ctx.fillStyle = fontStyle.color || props.color;
    }
    ctx.textAlign = fontStyle.textAlign;
    ctx.textBaseline = fontStyle.textBaseline;
    if (props.title) {
        ctx.fillText(
            props.title,
            fontStyle.left || props.contentWidth / 2 - fontStyle.right,
            fontStyle.top || props.contentHeight - fontStyle.bottom
        );
    } else {
        if (step <= VALUE) {
            ctx.fillText(
                step + fontStyle.unit,
                fontStyle.left || props.contentWidth / 2 - fontStyle.right,
                fontStyle.top || props.contentHeight - fontStyle.bottom
            );
        }
    }
    ctx.restore();
    if (props.subTitle) {
        // 绘制副标题文字
        let subFontStyle = {
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
            ...props.subTitleStyle,
        };
        ctx.font = `${subFontStyle.fontWeight} ${subFontStyle.fontSize}px ${subFontStyle.fontFamily}`;
        ctx.fillStyle = subFontStyle.color || props.color;
        ctx.textAlign = subFontStyle.textAlign;
        ctx.textBaseline = subFontStyle.textBaseline;
        ctx.fillText(
            props.subTitle,
            subFontStyle.left || props.contentWidth / 2 - subFontStyle.right,
            subFontStyle.top || props.contentHeight - subFontStyle.bottom
        );
    }
};

setIndex();
const canvasId = ref();
canvasId.value = props.id || 'dashboard' + getIndex();
onMounted(() => {
    let myCanvas = document.getElementById(canvasId.value) as HTMLCanvasElement; //获取画布节点
    let ctx = myCanvas.getContext('2d') as CanvasRenderingContext2D | null; //采用2d格式，并获取对象
    animate(ctx);
});

</script>