<template>
    <demo>
        <vc-time-line :dataSource="list" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "timeLine-demo1"
})

const list = [
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
</script>
