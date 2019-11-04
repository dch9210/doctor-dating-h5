<template>
    <div>
        <div style="padding: 20px 20px;background: white;">
            <Row>
                <Col :xs="{ span: 2 }" :lg="{ span: 2, offset: 1  }">
                    <router-link to="/doctor/home" style="color: black;">
                        <Icon type="md-arrow-back" :size="30"/>
                    </router-link>
                </Col>
                <Col :xs="{ span: 22, offset: 0 }" :lg="{ span: 22, offset: 0  }">
                    <strong style="line-height: 30px;margin-right: 30px;">
                        放号管理
                    </strong>
                </Col>
            </Row>
        </div>
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