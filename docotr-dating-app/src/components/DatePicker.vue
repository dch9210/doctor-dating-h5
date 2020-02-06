<template>
    <div style="padding: 1em 0">
        <!--日期显示和月份切换-->
        <br>
        <br>
        <div>
            <Row>
                <Col span="3" offset="2">
                    <a style="display: block;border-radius: 5px 5px;border: 1px solid #2D8CF0" @click="decMonth">
                        <!--<Icon type="md-arrow-round-back" :size="24"/>-->
                        上一月
                    </a>
                </Col>
                <Col span="14">
                    <strong style="font-size: 16px;line-height: 16px;">{{year}} 年 {{month}} 月 </strong>
                </Col>
                <Col span="3" offset="0">
                    <a style="display: block;border-radius: 5px 5px;border: 1px solid #2D8CF0" @click="addMonth">
                        <!--<Icon type="md-arrow-round-forward" :size="24"/>-->
                        下一月
                    </a>
                </Col>
            </Row>
        </div>
        <br>
        <br>
        <!--星期展示-->
        <div>
            <Row>
                <Col :xs="{ span: 1}" :lg="{ span: 1 }"><span class="wendy-text">&nbsp;</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">周一</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">周二</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">周三</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">周四</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">周五</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">周六</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"><span class="wendy-text">周日</span></Col>
            </Row>
        </div>
        <br>
        <!--日历展示-->
        <div v-for="i in range(0, Math.ceil(calendar.length / 7))">
            <Row>
                <Col :xs="{ span: 1}" :lg="{ span: 1 }"><span class="wendy-text">&nbsp;</span></Col>
                <Col :xs="{ span: 2, offset: 1 }" :lg="{ span: 2, offset: 1 }"
                     v-for="(item, index) in calendar.slice(i*7, i*7+7)">
                    <span class="day-text" v-if="item == 'empty'">&nbsp;</span>
                    <span class="day-text" v-if="item != 'empty'" @click="onDateClick(item, $event)"
                          :class="{'disable': !canEdit(item)}">{{item.getDate()}}</span>
                </Col>
            </Row>
            <br>
        </div>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
</template>

<script>
    import Global from '@/components/Global.vue'

    export default {
        name: "DatePicker",
        props: {
            alive: {
                type: Array,
                // 当为数组类型设置默认值时必须使用数组返回
                default: function () {
                    return [];
                }
            },
            defYear: Number,
            defMonth: Number
        },
        data() {
            return {
                year: 2019,
                month: 10,
                calendar: [],
                spinShow: false
            }
        },
        methods: {
            range: (start, end) => new Array(end - start).fill(start).map((el, i) => start + i),
            initCalendar() {
                this.spinShow = true;
                this.$http.get(Global.PATH + '/common/calendar?year=' + this.year + '&month=' + this.month).then((resp) => {
                    this.spinShow = false;
                    if (resp.body.code) {
                        this.$Message.error(resp.body.msg);
                    } else {
                        this.calendar = resp.body;
                        this.calendar.forEach((date, index) => {
                            date = new Date(date);
                            this.calendar[index] = date;
                        })
                        if (this.calendar.length > 0) {
                            var gap = this.calendar[0].getDay();
                            if (gap == 0)
                                gap = 7;
                            if (gap != 1) {
                                for (var i in this.range(0, gap - 1)) {
                                    this.calendar.unshift('empty');
                                }
                            }
                        }
                    }
                }, (error) => {
                    this.$Message.error(error.body.error);
                    this.spinShow = false;
                });
            },
            canEdit(date) {
                for (var i in this.alive) {
                    var d = this.alive[i];
                    if (d.Format('yyyyMMdd') == date.Format('yyyyMMdd'))
                        return true;
                }
                return false;
            },
            addMonth() {
                if (this.month == 12) {
                    this.year += 1;
                    this.month = 1;
                } else
                    this.month += 1;
                // 留接口给父组件初始化alive日期范围
                var rs = this.$emit('date-change', this.year, this.month);
                this.initCalendar();
            },
            decMonth() {
                if (this.month == 1) {
                    this.year -= 1;
                    this.month = 12;
                } else
                    this.month -= 1;
                var rs = this.$emit('date-change', this.year, this.month);
                this.initCalendar();
            },
            onDateClick(date, event) {
                this.$emit('date-click', date, event);
            }
        },
        created() {
            // 默认日期加载
            if (this.defYear) {
                this.year = this.defYear;
            }
            if (this.defMonth) {
                this.month = this.defMonth;
            }
            // 初始化日历结构
            this.initCalendar()
        }
    }
</script>

<style scoped>
    .wendy-text {
        font-size: 14px;
        color: darkgray;
        /*font-weight: bold;*/
    }

    .day-text {
        font-size: 22px;
        color: black;
    }

    .disable {
        color: darkgray !important;
    }

</style>