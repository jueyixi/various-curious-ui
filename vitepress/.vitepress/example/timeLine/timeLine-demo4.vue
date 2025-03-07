<template>
    <demo>
        <vc-time-line :dataSource="list" :defaultConfig="defaultConfig" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "timeLine-demo4"
})

const defaultConfig = {
    pointColor: "rgba(37, 201, 64, 1)",
    pointWidth: 12,
    pointHeight: 12,
    lineWidth: "auto",
    // selected: false,
    // showPopper: false,
}

const list = [
    {
        year: 2020,
        list: [
            {
                date: "2020-01-05",
                desc: "2020-01-05",
                selected: true
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
                    color: "red"
                }
            },
            {
                date: "2021-04-05",
                desc: "2021-04-05",
                showPopper: true
            },
            {
                date: "2021-10-05",
                desc: "2021-10-05",
                disabled: true,
                showPopper: true,
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
</script>
