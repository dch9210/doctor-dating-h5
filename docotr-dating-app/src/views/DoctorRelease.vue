<template>
    <div>
        <div style="text-align: left;padding-top: 25px;padding-left: 25px;">
            <router-link to="/doctor/home" style="color: black;">
                <Icon type="ios-arrow-dropleft" :size="30"/>
            </router-link>
        </div>
        <div style="text-align:center;background: #fff;border-radius: 20px 20px;margin-top: 28px;">
            <DatePicker @date-change="resetDatingPicker" :defYear="new Date().getFullYear()" :defMonth="new Date().getMonth() + 1"
                        :alive="releaseDateList" @date-click="goScheduEditPage"/>
        </div>
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
        },
        created() {
        }
    }
</script>

<style scoped>

</style>