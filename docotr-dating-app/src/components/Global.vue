<template>

</template>

<script>
    const PATH = 'http://192.168.2.82:80/doctor-dating';
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

    export default {
        PATH,
        SESSION_KEY,
        COOKIE,
        URL_HELPER
    }
</script>

<style scoped>

</style>