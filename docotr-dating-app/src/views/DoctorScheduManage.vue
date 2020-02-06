<template>
    <div>
        <div style="text-align: left;padding-top: 25px;padding-left: 25px;">
            <router-link to="/doctor/release/date" style="color: black;">
                <Icon type="ios-arrow-dropleft" :size="30"/>
            </router-link>
            <strong style="font-size: 16px;color: white;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{date.Format("yyyy年MM月d日 - 放预约号")}}
            </strong>
            <span style="float: right;margin-right: 30px;" @click="showScheduEdit">
                <Icon type="ios-create" :size="30"/>
            </span>
        </div>
        <!--已放号信息列表,可点击进入编辑-->
        <div style="min-height: 700px;margin-top: 28px;background: #FCFCFD;border-radius: 20px 20px;">
            <br>
            <ScheduList :list="scheduList"/>
        </div>

        <!--放号编辑对话框-->
        <Modal v-model="scheduCreate.open" fullscreen title="新增放号" @on-ok="createDoctorSchedu">
            <div>
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">放号地址：</span>
                    </Col>
                    <Col span="18">
                        <Input v-model="scheduCreate.addr" type="textarea" :rows="5" placeholder="请填写放号地址..."/>
                    </Col>
                </Row>
                <br>
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">开始时间：</span>
                    </Col>
                    <Col span="18">
                        <TimePicker format="HH:mm" placeholder="选择开始时间" style="width: 100%"
                                    v-model="scheduCreate.stime"></TimePicker>
                    </Col>
                </Row>
                <br>
                <Row style="text-align: left;">
                    <Col span="6">
                        <span style="color: gray;">截止时间：</span>
                    </Col>
                    <Col span="18">
                        <TimePicker format="HH:mm" placeholder="选择截止时间" style="width: 100%"
                                    v-model="scheduCreate.etime"></TimePicker>
                    </Col>
                </Row>
            </div>
        </Modal>
    </div>
</template>

<script>
    import Global from "../components/Global";
    import ScheduList from "../components/ScheduList";

    export default {
        name: "DoctorScheduManage",
        components: {ScheduList},
        data() {
            return {
                date: null,
                scheduCreate: {
                    open: false,
                    addr: '',
                    stime: '',
                    etime: '',
                },
                scheduList: []
            }
        },
        methods: {
            showScheduEdit() {
                this.scheduCreate = {
                    open: true,
                    addr: '',
                    stime: '',
                    etime: '',
                };
            },
            createDoctorSchedu() {
                var _this = this;
                var user = JSON.parse(Global.COOKIE.get(Global.SESSION_KEY));
                // 转换时间为日期
                var stime = new Date(this.date.getTime());
                stime.setHours(this.scheduCreate.stime.split(":")[0]);
                stime.setMinutes(this.scheduCreate.stime.split(":")[1]);
                this.scheduCreate.stime = stime;
                var etime = new Date(this.date.getTime());
                etime.setHours(this.scheduCreate.etime.split(":")[0]);
                etime.setMinutes(this.scheduCreate.etime.split(":")[1]);
                this.scheduCreate.etime = etime;
                this.$http.post(Global.PATH + '/doctor/' + user.id + '/realse/schedu', this.scheduCreate).then((resp) => {
                    if (resp.body.code) {
                        this.$Message.error(resp.body.msg);
                    } else {
                        this.$Message.success({
                            content: '放号成功！',
                            duration: 1.5,
                            onClose: function () {
                                _this.getScheduList()
                            }
                        });
                    }
                }, (error) => {
                    this.$Message.error(error.body.error);
                });
            },
            getScheduList() {
                console.log(Global.COOKIE.get(Global.SESSION_KEY))
                var user = JSON.parse(Global.COOKIE.get(Global.SESSION_KEY));
                this.$http.post(Global.PATH + '/doctor/' + user.id + '/realse/schedu/list', {
                    queryDate: this.date
                }).then((resp) => {
                    if (resp.body.code) {
                        this.$Message.error(resp.body.msg);
                    } else {
                        this.scheduList = resp.body;
                    }
                }, (error) => {
                    this.$Message.error(error.body.error);
                });
            }
        },
        created() {
            this.date = this.$route.params.date;
            this.getScheduList()
        }
    }
</script>

<style scoped>

</style>