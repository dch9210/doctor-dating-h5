<template>
    <div style="padding: 68px 0px;">
        <h4 style="color: #fff;">本月数据统计</h4>
        <br>
        <div style="text-align: center;">
            <Row>
                <Col span="4" offset="1">
                    <div class="month-statctis-box">
                        <span class="month-statctis-box-title">23</span>
                        <span style="font-size: 9px;color: #eee;">接收预约(单)</span>
                    </div>
                </Col>
                <Col span="4" offset="2">
                    <div class="month-statctis-box">
                        <span class="month-statctis-box-title">1</span>
                        <span style="font-size: 9px;color: #eee;">取消预约(单)</span>
                    </div>
                </Col>
                <Col span="4" offset="2">
                    <div class="month-statctis-box">
                        <span class="month-statctis-box-title">99</span>
                        <span style="font-size: 9px;color: #eee;">新注册患者</span>
                    </div>
                </Col>
                <Col span="4" offset="2">
                    <div class="month-statctis-box">
                        <span class="month-statctis-box-title">99+</span>
                        <span style="font-size: 9px;color: #eee;">(单)</span>
                    </div>
                </Col>
            </Row>
        </div>

        <div style="margin-top: 80px;">
            <Row>
                <Col span="4" offset="1">
                    <div @click="$router.push({path: '/doctor/release/date'})">
                        <Icon type="ios-calendar-outline" :size="52"/>
                        <br>
                        <span style="color: #078DE3">发放预约</span>
                    </div>
                </Col>

                <Col span="4" offset="2">
                    <div @click="$router.push({path: '/doctor/release/date'})">
                        <Icon type="ios-calendar-outline" :size="52"/>
                        <br>
                        <span style="color: #078DE3">发放预约</span>
                    </div>
                </Col>

                <Col span="4" offset="2">
                    <div @click="$router.push({path: '/doctor/release/date'})">
                        <Icon type="ios-calendar-outline" :size="52"/>
                        <br>
                        <span style="color: #078DE3">发放预约</span>
                    </div>
                </Col>

                <Col span="4" offset="2">
                    <div @click="$router.push({path: '/doctor/release/date'})">
                        <Icon type="ios-calendar-outline" :size="52"/>
                        <br>
                        <span style="color: #078DE3">发放预约</span>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DoctorHome"
    }
</script>

<style scoped>
    .month-statctis-box {
        width: 76px;
        height: 76px;
        background: #95B0F5;
        border-radius: 10px 10px;
        padding-top: 5px;
    }

    .month-statctis-box-title {
        color: white;
        display: block;
        font-size: 29px;
    }
</style>