<template>
    <div style="min-height: 700px;">
        <div style="padding: 3em 2em;">
            <Row>
                <Col span="12">
                    <div style="text-align:center;background: #fff;width: 150px;border-radius: 10px 10px;" @click="$router.push({path: '/doctor/release/date'})">
                        <img src="../assets/schedu_manage.jpg" style="width: inherit;border-radius: 10px 10px 0 0;">
                        <br>
                        <strong>放号管理</strong>
                    </div>
                </Col>
                <Col span="12"></Col>
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

</style>