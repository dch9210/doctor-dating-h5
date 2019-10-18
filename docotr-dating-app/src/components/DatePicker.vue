<template>
    <div style="padding: 1em 0">
        <!--日期显示和月份切换-->
        <br>
        <br>
        <div>
            <Row>
                <Col :xs="{ span: 3, offset: 1 }" :lg="{ span: 3, offset: 1  }">
                    <Icon type="md-arrow-round-back" :size="24"/>
                </Col>
                <Col :xs="{ span: 16 }" :lg="{ span: 16}">
                    <strong style="font-size: 18px;">{{year}} - {{month}}</strong>
                </Col>
                <Col :xs="{ span: 3}" :lg="{ span: 3 }">
                    <Icon type="md-arrow-round-forward" :size="24"/>
                </Col>
            </Row>
        </div>
        <br>
        <!--星期展示-->
        <div>
            <Row>
                <Col :xs="{ span: 2, offset: 2 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">一</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">二</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">三</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">四</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">五</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">六</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">日</span></Col>
            </Row>
        </div>
        <br>
        <!--日历展示-->
        <div>
            <Row v-for="i in range(0, calendar.length)/7">
                <Col :xs="{ span: 2, offset: 2 }" :lg="{ span: 2, offset: 1 }"><span class="day-text">一</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="day-text">二</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="day-text">三</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="day-text">四</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="day-text">五</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="day-text">六</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="day-text">日</span></Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import Global from '@/components/Global.vue'

    export default {
        name: "DatePicker",
        props: {},
        data() {
            return {
                year: 2019,
                month: 10,
                calendar: [],
            }
        },
        methods: {
            range: (start, end) => new Array(end - start).fill(start).map((el, i) => start + i),
            initCalendar() {
                this.$http.get(Global.PATH + '/common/calendar?year=' + this.year + '&month=' + this.month).then((resp) => {
                    if (resp.body.code) {
                        this.$Message.error(resp.body.msg);
                    } else {
                        this.calendar = resp.body;
                        var gap = new Date(calendar[0]).getDay() - 1;
                        for (var i = 0; i < gap; i++) {
                            this.calendar.push('');
                        }
                        this.calendar.forEach((date, index) => {
                            if (date != '') {
                                date = new Date(date);
                                this.calendar[index] = date;
                            }
                            // console.log(date.getFullYear())
                            // console.log(date.getMonth())
                            // console.log(date.getDate())
                        })
                    }
                }, (error) => {
                    this.$Message.error(error);
                });
            }
        },
        created() {
            this.initCalendar()
        }
    }
</script>

<style scoped>
    .wendy-text {
        font-size: 16px;
        color: darkgray;
        font-weight: bold;
    }

    .day-text {
        font-size: 18px;
        color: black;
    }
</style>