<template>
    <div>
        <div>
            <div>
                <strong>快速选择</strong>
                <!--<Row v-for="i in range(0, Math.ceil(item.list.length / 3))">
                    <Col :xs="{ span: 7, offset: 1 }" :lg="{ span: 7, offset: 1 }"
                         v-for="(time, index) in item.list.slice(i*3, i*3+3)">
                        <Tag checkable color="success" :checked="isChecked(time.value)">{{time.label}}</Tag>
                    </Col>
                </Row>-->
                <br>
            </div>
            <div>
                <TimePicker format="HH:mm" type="timerange" placement="bottom-end" placeholder="时间段选择" size="large"></TimePicker>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TimeTable",
        props: {
            alive: {
                type: Array,
                // 当为数组类型设置默认值时必须使用数组返回
                default: function () {
                    return [];
                }
            }
        },
        data() {
            return {
                group: [
                    {
                        label: '上午',
                        list: [
                            {
                                label: '8:00 - 9:00',
                                value: '8:00 - 9:00'
                            },
                            {
                                label: '9:00 - 10:00',
                                value: '9:00 - 10:00'
                            },
                            {
                                label: '10:00 - 11:00',
                                value: '10:00 - 11:00'
                            },
                            {
                                label: '11:00 - 12:00',
                                value: '11:00 - 12:00'
                            }
                        ]
                    },
                    {
                        label: '下午',
                        list: [
                            {
                                label: '14:00 - 15:00',
                                value: '14:00 - 15:00'
                            },
                            {
                                label: '15:00 - 16:00',
                                value: '15:00 - 16:00'
                            },
                            {
                                label: '16:00 - 17:00',
                                value: '16:00 - 17:00'
                            },
                            {
                                label: '17:00 - 18:00',
                                value: '17:00 - 18:00'
                            },
                            {
                                label: '18:00 - 19:00',
                                value: '18:00 - 19:00'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            range: (start, end) => new Array(end - start).fill(start).map((el, i) => start + i),
            isChecked(time) {
                for (var i in this.alive) {
                    var d = this.alive[i];
                    if (d == time)
                        return true;
                }
                return false;
            }
        }
    }
</script>

<style scoped>

</style>