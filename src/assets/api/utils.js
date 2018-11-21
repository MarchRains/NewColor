export default {
    /**
     * 获取 url 参数
    **/
    getUrlParams() {
        var
        params = location.search,
        data = {},
        temp;
        if (!params) return false;
        params = params.slice(1).split('&');
        for (var i in params) {
            temp = params[i].split('=');
            data[temp[0]] = temp[1];
        }
        return data;
    },
    /**
     * 判断 url 参数中是否有指定参数
    **/
    hasUrlParams(key) {
        return this.getUrlParams().hasOwnProperty(key);
    }
}