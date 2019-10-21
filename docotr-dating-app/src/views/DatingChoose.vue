<template>
    <div>
        <DatePicker @date-change="resetDatingPicker" :alive="releaseDateList" />
    </div>
</template>

<script>

    import DatePicker from '@/components/DatePicker.vue'

    export default {
        name: "DatingChoose",
        data() {
            return {
                releaseDateList: [],
            }
        },
        components: {
            DatePicker
        },
        methods: {
            resetDatingPicker(year, month) {
                // 获取医生最新放号日期列表，并设置到子组件中

            }
        }
    }
</script>

<style scoped>

</style>