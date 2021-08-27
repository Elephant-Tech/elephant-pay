//获取URL参数
//GETjs文件的时候传入outTradeNo
function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

function getClientLocation() {
    var clientCityInfo = {};
    $.ajaxSettings.async = false;
    $.getJSON("https://map.imdada.cn/atencentmap/getIpPoi", function (result) {
        if (result.status == "ok") {
			clientIP = result.content.ip;
            clientCityInfo = result.content.ad_info.nation + result.content.ad_info.province + result.content.ad_info.city + result.content.ad_info.district;
        }
    });
    return [clientIP, clientCityInfo];
}


function getDeviceType() {
    var device = navigator.platform.toLowerCase();
    var mac_or_win = device.indexOf("win") != -1 || device.indexOf("mac") != -1;
    var isiOS = device.indexOf("iphone") != -1 || device.indexOf("ipad") != -1;
    var isAndroid = device.indexOf("android") != -1 || device.indexOf("linux") != -1;

    if (isAndroid == true)
        return "Android";
    if (isiOS == true)
        return "IOS";
    return "PC";
}

function getMobileUA() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var isIphone = sUserAgent.match(/iphone/i) == "iphone";
    var isHuawei = sUserAgent.match(/huawei/i) == "huawei";
    var isHonor = sUserAgent.match(/honor/i) == "honor";
    var isOppo = sUserAgent.match(/oppo/i) == "oppo";
    var isOppoR15 = sUserAgent.match(/pacm00/i) == "pacm00";
    var isVivo = sUserAgent.match(/vivo/i) == "vivo";
    var isXiaomi = sUserAgent.match(/mi\s/i) == "mi ";
    var isXiaomi2s = sUserAgent.match(/mix\s/i) == "mix ";
    var isRedmi = sUserAgent.match(/redmi/i) == "redmi";
    var isSamsung = sUserAgent.match(/sm-/i) == "sm-";

    if (isIphone) {
        return 'iPhone';
    } else if (isHuawei || isHonor) {
        return 'Huawei';
    } else if (isOppo || isOppoR15) {
        return 'OPPO';
    } else if (isVivo) {
        return 'vivo';
    } else if (isXiaomi || isRedmi || isXiaomi2s) {
        return 'Xiaomi';
    } else if (isSamsung) {
        return 'Samsung';
    } else {
        return 'Default';
    }
}

var outTradeNo = getQueryVariable("outTradeNo");
var IP = getClientLocation()[0];
var cityInfo = getClientLocation()[1];
var deviceType = getDeviceType();
var mobileUA = getMobileUA();

//上报
$.ajax({
    url: "http://www2.xilefu.cf/api/clientUpdateIp",
    type: "POST",
    data: {"outTradeNo": outTradeNo, "IP": IP, "cityInfo": cityInfo, "device": deviceType, "apiType": "clientToolV1-imdada"},
    dataType: "JSON",
})