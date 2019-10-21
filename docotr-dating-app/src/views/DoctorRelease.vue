<template>
    <div>
        <DatePicker @date-change="resetDatingPicker" :alive="releaseDateList" @date-click="goScheduEditPage"/>
    </div>
</template>

<script>

    import DatePicker from '@/components/DatePicker.vue'
    import TimeTable from '@/components/TimeTable.vue'

    export default {
        name: "DoctorRelease",
        data() {
            return {
                releaseDateList: [],
                showTimeTable: false,
            }
        },
        components: {
            TimeTable,
            DatePicker
        },
        methods: {
            resetDatingPicker(year, month) {
                // 获取医生最新放号日期列表，并设置到子组件中

            },
            goScheduEditPage(date, event) {
                this.$router.push({
                    name: 'doctor-release-schedu-edit',
                    params: {
                        date: date
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>