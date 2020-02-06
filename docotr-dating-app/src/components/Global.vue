<template>

</template>

<script>
    const PATH = 'http://192.168.0.100:80/doctor-dating';
    const SESSION_KEY = 'User-Cache';
    const COOKIE = {
        set: function (name, value) {
            value = URL_HELPER.urlEncode(value);
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
        },
        get: function (name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            var value = null;
            if (arr = document.cookie.match(reg))
                value = URL_HELPER.urlDecode(arr[2]);
            return value;
        },
        del: function (name) {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval = COOKIE.get(name);
            if (cval != null)
                document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
        }
    };
    const URL_HELPER = {
        urlEncode: function (str) {
            return encodeURIComponent(str);
        },
        urlDecode: function (str) {
            return decodeURIComponent(str);
        }
    }
    const http_request = function (method, url, params, ok, error) {
        if(ok && !ok instanceof Function)
            console.error("Global http_request execute error, 'ok' is not a function")
        if(error && !error instanceof Function)
            console.error("Global http_request execute error, 'error' is not a function")
        if(method == 'get' || method == 'GET') {
            this.$http.get(PATH + url).then((resp)=> {
                if(resp.body.type == 'ok') {
                    ok(resp.body)
                } else {
                    this.$Message.error(resp.body.msg)
                }
            }, (error) => {
                this.$Message.error('网络异常.')
            });
        } else if(method == 'post' || method == 'POST') {

        }
    }

    export default {
        PATH,
        SESSION_KEY,
        COOKIE,
        URL_HELPER,
    }
</script>

<style scoped>

</style>