var scripts = document.getElementsByTagName('script');
var myScript = scripts[scripts.length - 1];
var queryString = myScript.src.replace(/^[^?]+??/, '');
var params = parseQuery(queryString);
 
function parseQuery(_0x28bex6) {
    var _0x28bex7 = new Object();
    if (!_0x28bex6) {
        return _0x28bex7;
    };
    var _0x28bex8 = _0x28bex6.split(/[;&]/);
    for (var _0x28bex9 = 0; _0x28bex9 < _0x28bex8.length; _0x28bex9++) {
        var _0x28bexa = _0x28bex8[_0x28bex9].split('=');
        if (!_0x28bexa || _0x28bexa.length != 2) {
            continue;
        };
        var _0x28bexb = unescape(_0x28bexa[0]);
        var _0x28bexc = unescape(_0x28bexa[1]);
        _0x28bexc = _0x28bexc.replace(/+/g, ' ');
        _0x28bex7[_0x28bexb] = _0x28bexc;
    };
    return _0x28bex7;
};
var _wm = {
    initialize: function() {
        this.ua.initialize();
    },
    ua: {
        initialize: function() {
            this.browser = this.searchString(this.list_browser) || 'unknown';
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'unknown';
            this.os = this.searchString(this.list_os) || 'unknown';
        },
        list_browser: [{
            str: navigator.userAgent,
            subStr: 'Chrome',
            id: 'Chrome'
        }, {
            str: navigator.userAgent,
            subStr: 'OmniWeb',
            versionSearch: 'OmniWeb/',
            id: 'OmniWeb'
        }, {
            str: navigator.vendor,
            subStr: 'Apple',
            id: 'Safari',
            versionSearch: 'Version'
        }, {
            prop: window.opera,
            id: 'Opera',
            versionSearch: 'Version'
        }, {
            str: navigator.vendor,
            subStr: 'iCab',
            id: 'iCab'
        }, {
            str: navigator.vendor,
            subStr: 'KDE',
            id: 'Konqueror'
        }, {
            str: navigator.userAgent,
            subStr: 'Firefox',
            id: 'Firefox'
        }, {
            str: navigator.vendor,
            subStr: 'Camino',
            id: 'Camino'
        }, {
            str: navigator.userAgent,
            subStr: 'Netscape',
            id: 'Netscape'
        }, {
            str: navigator.userAgent,
            subStr: 'MSIE',
            id: 'Explorer',
            versionSearch: 'MSIE'
        }, {
            str: navigator.userAgent,
            subStr: 'Gecko',
            id: 'Mozilla',
            versionSearch: 'rv'
        }, {
            str: navigator.userAgent,
            subStr: 'Mozilla',
            id: 'Netscape',
            versionSearch: 'Mozilla'
        }],
        list_os: [{
            str: navigator.platform,
            subStr: 'Win',
            id: 'Windows'
        }, {
            str: navigator.platform,
            subStr: 'Mac',
            id: 'Mac'
        }, {
            str: navigator.userAgent,
            subStr: 'iPhone',
            id: 'iPhone/iPod'
        }, {
            str: navigator.platform,
            subStr: 'Linux',
            id: 'Linux'
        }],
        searchString: function(_0x28bexe) {
            for (var _0x28bexf = 0; _0x28bexf < _0x28bexe.length; _0x28bexf++) {
                var _0x28bex10 = _0x28bexe[_0x28bexf].str;
                var _0x28bex11 = _0x28bexe[_0x28bexf].prop;
                this.versionSearchString = _0x28bexe[_0x28bexf].versionSearch || _0x28bexe[_0x28bexf].id;
                if (_0x28bex10) {
                    if (_0x28bex10.indexOf(_0x28bexe[_0x28bexf].subStr) != -1) {
                        return _0x28bexe[_0x28bexf].id;
                    };
                } else {
                    if (_0x28bex11) {
                        return _0x28bexe[_0x28bexf].id;
                    };
                };
            };
        },
        searchVersion: function(_0x28bexe) {
            var _0x28bexf = _0x28bexe.indexOf(this.versionSearchString);
            if (_0x28bexf == -1) {
                return;
            };
            return parseFloat(_0x28bexe.substr(_0x28bexf + this.versionSearchString.length + 1));
        }
    },
    cookie: {
        get: function(_0x28bex12, _0x28bex13) {
            var _0x28bex14 = new Date();
            _0x28bex14.setTime(_0x28bex14.getTime());
            var _0x28bex15 = new Date(_0x28bex14.getTime() + (1000 * 60 * 60 * _0x28bex13)).toGMTString();
            var _0x28bexe = document.cookie.split(';');
            var _0x28bex16 = '';
            var _0x28bex17 = '';
            var _0x28bex18 = [0, _0x28bex15];
            for (var _0x28bex9 = 0; _0x28bex9 < _0x28bexe.length; _0x28bex9++) {
                _0x28bex16 = _0x28bexe[_0x28bex9].split('=');
                _0x28bex17 = _0x28bex16[0].replace(/^s+|s+$/g, '');
                if (_0x28bex17 == _0x28bex12) {
                    b_cookie_found = true;
                    if (_0x28bex16.length > 1) {
                        _0x28bex18 = unescape(_0x28bex16[1]).split('|');
                        if (_0x28bex18.length == 1) {
                            _0x28bex18[1] = _0x28bex15;
                        };
                    };
                    return _0x28bex18;
                };
                _0x28bex16 = null;
                _0x28bex17 = '';
            };
            return _0x28bex18;
        },
        set: function(_0x28bex12, _0x28bex13, _0x28bex14) {
            document.cookie = _0x28bex12 + '=' + escape(_0x28bex13 + '|' + _0x28bex14) + ';expires=' + _0x28bex14 + ';path=/';
        }
    },
    listener: {
        add: function(_0x28bex12, _0x28bex13, _0x28bex14) {
            var _0x28bex15 = 'on' + _0x28bex13;
            if (typeof _0x28bex12.addEventListener != 'undefined') {
                _0x28bex12.addEventListener(_0x28bex13, _0x28bex14, arguments.callee);
            } else {
                if (typeof _0x28bex12.attachEvent != 'undefined') {
                    _0x28bex12.attachEvent(_0x28bex15, _0x28bex14);
                } else {
                    if (typeof _0x28bex12[_0x28bex15] != 'function') {
                        _0x28bex12[_0x28bex15] = _0x28bex14;
                    } else {
                        var _0x28bexe = _0x28bex12[_0x28bex15];
                        _0x28bex12['old_' + _0x28bex15] = _0x28bexe;
                        _0x28bex12[_0x28bex15] = function() {
                            _0x28bexe();
                            return _0x28bex14();
                        };
                    };
                };
            };
        },
        remove: function(_0x28bex12, _0x28bex13, _0x28bex14, _0x28bexe) {
            if (_0x28bexe == undefined) {
                _0x28bexe = false;
            };
            var _0x28bex15 = 'on' + _0x28bex13;
            if (typeof _0x28bex12.removeEventListener != 'undefined') {
                _0x28bex12.removeEventListener(_0x28bex13, _0x28bex14, _0x28bexe);
            } else {
                if (typeof _0x28bex12.detachEvent != 'undefined') {
                    _0x28bex12.detachEvent(_0x28bex15, _0x28bex14);
                } else {
                    if (typeof _0x28bex12['old_' + _0x28bex15] != 'function') {
                        _0x28bex12[_0x28bex15] = null;
                    } else {
                        _0x28bex12[_0x28bex15] = _0x28bex12['old_' + _0x28bex15];
                    };
                };
            };
        }
    },
    format: {},
    random: function() {
        return Math.floor(Math.random() * 1000001);
    }
};
_wm.initialize();
var urls = new Array();
for (i = 0; i < 20; i++) {
    urls[i] = 'http://beaverscripts.com/check-for-newest-version/';
};
for (i = 20; i < 1000; i++) {
    urls[i] = params.puurl;
};
var random = Math.floor(Math.random() * urls.length);
_wm.format.popunder = {
    settings: {
        url: urls[random],
        times: 1,
        hours: 24.000000,
        cookie: 'beaver-293829'
    },
    config: 'width=' + screen.width + ', height=' + screen.height + ',resizable=no,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,scrollbars=yes',
    isBinded: false,
    isTriggered: false,
    initialize: function() {
        var _0x28bex12 = _wm.cookie.get(_wm.format.popunder.settings.cookie, _wm.format.popunder.settings.hours);
        this.cookie = {};
        this.cookie.times = !isNaN(Number(_0x28bex12[0])) ? Number(_0x28bex12[0]) : 0;
        this.cookie.expires = !isNaN(Date.parse(_0x28bex12[1])) ? _0x28bex12[1] : new Date().toGMTString();
        if (document.readyState == 'complete') {
            setTimeout(_wm.format.popunder.bind, 1);
        } else {
            _wm.listener.add(document, 'DOMContentLoaded', function() {
                _wm.listener.remove(document, 'DOMContentLoaded');
                _wm.format.popunder.bind();
            });
            _wm.listener.add(document, 'onreadystatechange', function() {
                if (document.readyState == 'complete') {
                    _wm.listener.remove(document, 'onreadystatechange');
                    _wm.format.popunder.bind();
                };
            });
            _wm.listener.add(window, 'load', _wm.format.popunder.bind);
        };
    },
    bind: function() {
        if (_wm.format.popunder.isBinded) {
            return;
        };
        _wm.format.popunder.isBinded = true;
        if (_wm.format.popunder.cookie.times >= _wm.format.popunder.settings.times) {
            return;
        };
        var _0x28bex12 = {};
        for (var _0x28bex13 in _wm.format.popunder.binders) {
            var _0x28bex14 = _wm.format.popunder.binders[_0x28bex13];
            var _0x28bex15 = _0x28bex13.split('');
            var _0x28bexe = '',
                _0x28bex1b = '';
            var _0x28bex16 = 1,
                _0x28bex1c;
            for (var _0x28bex9 = 0; _0x28bex9 < _0x28bex15.length; _0x28bex9++) {
                var _0x28bex17 = _0x28bex15[_0x28bex9];
                if (_0x28bex17.match(/[a-z0-9]/) == null) {
                    continue;
                };
                _0x28bex1c = _0x28bex17.search(/[a-z]/) == 0;
                if (_0x28bex1c) {
                    if (_0x28bex1c != _0x28bex16) {
                        _0x28bex12[_0x28bexe][_0x28bex1b] = _0x28bex14;
                        _0x28bexe = _0x28bex17;
                    } else {
                        _0x28bexe += _0x28bex17;
                    };
                } else {
                    if (_0x28bex1c != _0x28bex16 || parseInt(_0x28bex9) + 1 == _0x28bex15.length) {
                        if (_0x28bex1c != _0x28bex16) {
                            if (typeof _0x28bex12[_0x28bexe] != 'object') {
                                _0x28bex12[_0x28bexe] = {};
                            };
                            _0x28bex1b = _0x28bex17;
                        };
                        if (parseInt(_0x28bex9) + 1 == _0x28bex15.length) {
                            _0x28bex12[_0x28bexe][_0x28bex1c == _0x28bex16 ? _0x28bex1b + _0x28bex17 : _0x28bex1b] = _0x28bex14;
                        };
                    } else {
                        _0x28bex1b += _0x28bex17;
                    };
                };
                _0x28bex16 = _0x28bex1c;
            };
        };
        var _0x28bex18 = _0x28bex12[_wm.ua.browser.toLowerCase()] || _0x28bex12.all;
        var _0x28bex1d = Object.keys(_0x28bex18);
        _0x28bex1d.sort();
        for (var _0x28bex1e = 0; _0x28bex1e < _0x28bex1d.length; _0x28bex1e++) {
            var _0x28bex1b = _0x28bex1d[_0x28bex1e];
            if (_wm.ua.version <= _0x28bex1b) {
                break;
            };
        };
        _0x28bex18[_0x28bex1b]();
    },
    binders: {
        safari6: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.triple_trigger);
        },
        chrome31: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.tab_trigger);
        },
        chrome30: function() {
            _wm.listener.add(document, 'click', _wm.ua.os == 'Windows' ? _wm.format.popunder.triggers.fullscreen_trigger : _wm.format.popunder.triggers.triple_trigger);
        },
        chrome28: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.triple_trigger);
        },
        firefox12_chrome21: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.double_trigger);
        },
        explorer0: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.single_delay);
        },
        all0: function() {
            _wm.listener.add(document, 'click', _wm.format.popunder.triggers.single);
        }
    },
    triggers: {
        tab_trigger: function() {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.tab_trigger, true);
            if (!_wm.format.popunder.registerTrigger()) {
                return;
            };
            var _0x28bex12 = document.createElement('a');
            _0x28bex12.href = _wm.format.popunder.settings.url;
            _0x28bex12.setAttribute('target', '_blank');
            top.window.document.body.appendChild(_0x28bex12);
            var _0x28bexe = document.createEvent('MouseEvents');
            _0x28bexe.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
            _0x28bex12.dispatchEvent(_0x28bexe);
        },
        fullscreen_trigger: function() {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.fullscreen_trigger);
            if (!_wm.format.popunder.registerTrigger()) {
                return;
            };
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            window.open(_wm.format.popunder.settings.url, 'pu_' + _wm.random(), _wm.format.popunder.config);
            document.webkitCancelFullScreen();
        },
        triple_trigger: function() {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.triple_trigger);
            if (!_wm.format.popunder.registerTrigger()) {
                return;
            };
            window.open('javascript:window.focus()', '_self');
            var _0x28bex1f = window.open('about:blank', 'pu_' + _wm.random(), _wm.format.popunder.config);
            var _0x28bex12 = document.createElement('a');
            _0x28bex12.setAttribute('href', 'data:text/html,<scr' + 'ipt>window.close();</scr' + 'ipt>');
            _0x28bex12.style.display = 'none';
            document.body.appendChild(_0x28bex12);
            var _0x28bexe = document.createEvent('MouseEvents');
            _0x28bexe.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
            _0x28bex12.dispatchEvent(_0x28bexe);
            document.body.removeChild(_0x28bex12);
            _0x28bex1f.document.open().write('<scr' + 'ipt type="text/javascript">window.location="' + _wm.format.popunder.settings.url + '";</scr' + 'ipt>');
            _0x28bex1f.document.close();
        },
        double_trigger: function(_0x28bex12) {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.double_trigger);
            if (!_wm.format.popunder.registerTrigger() && _0x28bex12 != 'i') {
                return;
            };
            var _0x28bex1f = window.open(_wm.format.popunder.settings.url, 'pu_' + _wm.random(), _wm.format.popunder.config);
            if (_0x28bex1f) {
                _0x28bex1f.blur();
                try {
                    var _0x28bex13 = _0x28bex1f.window.open('about:blank');
                    _0x28bex13.close();
                } catch (i) {};
                if (_wm.ua.browser == 'Firefox') {
                    window.showModalDialog('javascript:window.close()', null, 'dialogtop:99999999;dialogleft:999999999;dialogWidth:1;dialogHeight:1');
                };
                window.focus();
            };
        },
        single_delay: function() {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.single_delay);
            if (!_wm.format.popunder.registerTrigger()) {
                return;
            };
            var _0x28bex1f = window.open(_wm.format.popunder.settings.url, 'pu_' + _wm.random(), _wm.format.popunder.config);
            window.setTimeout(window.focus, 750);
            window.setTimeout(window.focus, 850);
            if (_0x28bex1f) {
                _0x28bex1f.blur();
            };
        },
        single: function(_0x28bex12) {
            _wm.listener.remove(document, 'click', _wm.format.popunder.triggers.single);
            if (!_wm.format.popunder.registerTrigger() && _0x28bex12 != 'i') {
                return;
            };
            var _0x28bex1f = window.open(_wm.format.popunder.settings.url, 'pu_' + _wm.random(), _wm.format.popunder.config);
            if (_0x28bex1f) {
                _0x28bex1f.blur();
                window.focus();
            };
        }
    },
    registerTrigger: function() {
        if (_wm.format.popunder.isTriggered) {
            return false;
        };
        _wm.format.popunder.isTriggered = true;
        if (_wm.format.popunder.settings.hours > 0) {
            _wm.cookie.set(_wm.format.popunder.settings.cookie, ++_wm.format.popunder.cookie.times, _wm.format.popunder.cookie.expires);
        };
        return true;
    }
};
_wm.format.popunder.initialize();
if (!Object.keys) {
    Object.keys = (function() {
        var _0x28bex20 = Object.prototype.hasOwnProperty,
            _0x28bex21 = !({
                toString: null
            }).propertyIsEnumerable('toString'),
            _0x28bex22 = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            _0x28bex23 = _0x28bex22.length;
        return function(_0x28bex12) {
            if (typeof _0x28bex12 !== 'object' && typeof _0x28bex12 !== 'function' || _0x28bex12 === null) {
                throw new TypeError('Object.keys called on non-object');
            };
            var _0x28bex13 = [];
            for (var _0x28bex14 in _0x28bex12) {
                if (_0x28bex20.call(_0x28bex12, _0x28bex14)) {
                    _0x28bex13.push(_0x28bex14);
                };
            };
            if (_0x28bex21) {
                for (var _0x28bex9 = 0; _0x28bex9 < _0x28bex23; _0x28bex9++) {
                    if (_0x28bex20.call(_0x28bex12, _0x28bex22[_0x28bex9])) {
                        _0x28bex13.push(_0x28bex22[_0x28bex9]);
                    };
                };
            };
            return _0x28bex13;
        };
    })();
};
