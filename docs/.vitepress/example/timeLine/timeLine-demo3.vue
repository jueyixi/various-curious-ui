<template>
    <demo>
        <vc-time-line :dataSource="list" :multiple="false" />
    </demo>
</template>
<script setup lang="ts">
defineOptions({
    name: "timeLine-demo3"
})

const list = [
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
