<template>
    <div>
        <div style="margin: 10px 0;">
        </div>
        <!--列表元素-->
        <div style="padding: 0 10px;" v-for="item in list">
            <div style="background: #ffffff;padding: 16px 16px;box-shadow: 3px 3px 2px #eee;border-left: 6px solid #3b9dec;border-radius: 3px 3px;">
                <Row style="text-align: left;">
                    <Col span="12">
                        <strong style="color: #C0C0C0;">{{new
                            Date(item.stime).Format('hh:mm')}} -
                            {{new Date(item.etime).Format('hh:mm')}}</strong>
                    </Col>
                    <Col span="12">
                        <div style="text-align: right;">
                            <span style="color: #2D8CF0;">暂无预约</span>
                        </div>
                    </Col>
                </Row>
                <br>
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">患者信息：</span>
                    </Col>
                    <Col span="18">
                        <div style="text-align: right;">
                            <span>-</span>
                        </div>
                    </Col>
                </Row>
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">放号地址：</span>
                    </Col>
                    <Col span="18">
                        <div style="text-align: right;">
                            <span>{{item.addr}}</span>
                        </div>
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
            return {}
        },
        methods: {},
        created() {

        }
    }
</script>

<style scoped>

</style>