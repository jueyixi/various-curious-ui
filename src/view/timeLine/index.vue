<template>
    <div class="timeLine">
        <div class="timeLine-item">
            <p>基础时间轴</p>
            <vc-time-line :scrollbar="{always:true}" :dataSource="list1" />
        </div>
        <div class="timeLine-item">
            <p>禁止点击</p>
            <vc-time-line :scrollbar="{ native: true }" :dataSource="list2" :disabled="true" />
        </div>
        <div class="timeLine-item">
            <p>单次点击</p>
            <vc-time-line :dataSource="list3" :multiple="false" />
        </div>
        <div class="timeLine-item">
            <p>自定义配置</p>
            <vc-time-line :dataSource="list4" :defaultConfig="defaultConfig" />
        </div>
        <div class="timeLine-item">
            <p>自定义分割样式</p>
            <vc-time-line height="160" :dataSource="list5" :multiple="false" :split="split" />
        </div>
    </div>
</template>

<script setup lang="ts">

const list1 = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
                showPopper: true,
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
                showPopper: true,
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
                pointStyle: {
                    color: "rgba(169, 61, 246, 1)"
                },
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
                showPopper: true,
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
                showPopper: true,
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
]
const list2 = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
                showPopper: true,
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
                showPopper: true,
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
                pointStyle: {
                    color: "rgba(169, 61, 246, 1)"
                },
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
                showPopper: true,
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
                showPopper: true,
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
                pointStyle: {
                    color: "rgba(37, 201, 64, 1)"
                },
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
                pointStyle: {
                    color: "rgba(255, 42, 42, 1)"
                },
            },
        ],
    },
]

const list3 = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
            },
        ],
    },
]

const defaultConfig = {
    pointColor: "rgba(37, 201, 64, 1)",
    pointWidth: 12,
    pointHeight: 12,
    lineWidth:"auto",
    // selected: false,
    // showPopper: false,
}

const list4 = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
                selected:true
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
                pointStyle: {
                    width: 8,
                    height: 8,
                    color:"red"
                }
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
                showPopper:true
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
                disabled: true,
                showPopper:true,
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
                disabled: true
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
            },
        ],
    },
]

const split = {
    gap:'10px',
    title: {
        color: "rgba(169, 61, 246, 0.5)",
        fontSize:"30",
        format: (val: any) => val.year
    },
    line: {
        color: "rgba(169, 61, 246, 0.3)",
        height: '18',
        width:2
    }
}

const list5 = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
            },
        ],
    },
    {
        year: 2021,
        list: [
            {
                date: "2021-01-05",
                desc: "2021-01-05",
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
            },
        ],
    },
    {
        year: 2022,
        list: [
            {
                date: "2022-02-05",
                desc: "2022-02-05",
            },
            {
                date: "2022-08-05",
                desc: "2022-08-05",
            },
            {
                date: "2022-11-05",
                desc: "2022-11-05",
            },
        ],
    },
    {
        year: 2023,
        list: [
            {
                date: "2023-06-05",
                desc: "2023-06-05",
            },
            {
                date: "2023-08-05",
                desc: "2023-08-05",
            },
            {
                date: "2023-10-05",
                desc: "2023-10-05",
            },
            {
                date: "2023-12-05",
                desc: "2023-12-05",
            },
        ],
    },
    {
        year: 2024,
        list: [
            {
                date: "2024-04-05",
                desc: "2024-04-05",
            },
        ],
    },
]
</script>

<style scoped lang="less">
.timeLine{
    width: 100%;
    &-item{
        padding:15px 10px;
        p{
            margin-bottom: 10px;
        }
    }
}
</style>