<template>
    <div>
        <div style="margin: 10px 0;">
        </div>
        <!--列表元素-->
        <div style="padding: 0 10px;" v-for="item in list">
            <div style="height: 34px;background: rgb(26, 44, 120);color: #ffffff;line-height: 34px;border-top-left-radius: 10px;border-top-right-radius: 10px;">
                <Row>
                    <Col span="6">
                        <span>患者信息：</span>
                    </Col>
                    <Col span="5">
                        暂无预约
                    </Col>
                    <Col span="5">
                        &nbsp;
                    </Col>
                    <Col span="5">&nbsp;</Col>
                    <Col span="3">
                        <Icon type="ios-call" :size="22"/>
                    </Col>
                </Row>
            </div>
            <div style="background: #ffffff;padding: 10px 10px">
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">预约地点：</span>
                    </Col>
                    <Col span="18">
                        <strong>{{item.addr}}</strong>
                    </Col>
                </Row>
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">预约时间：</span>
                    </Col>
                    <Col span="18">
                        <strong>{{new Date(item.stime).Format('yyyy-MM-dd')}} {{new Date(item.stime).Format('hh:mm')}} - {{new Date(item.etime).Format('hh:mm')}}</strong>
                    </Col>
                </Row>
                <Divider />
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">备注：</span>
                    </Col>
                    <Col span="18">
                        <p>
                            打得好i的后卫i的话哇偶啊第五大和瓦河
                            大大伟大
                            达瓦达瓦达瓦我的娃达娃啊
                            达娃大
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ScheduList",
        props: {
            list: {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        data() {
            return {

            }
        },
        methods: {

        },
        created() {

        }
    }
</script>

<style scoped>

</style>