function randomIframe(obj){
var ends = new Array();
ends[0] = "http://www.gotechn.com/2017/01/static-route.html";
ends[1] = "http://www.gotechn.com/2017/01/codepen.html";
ends[2] = "http://www.gotechn.com/2017/01/whatsapp-2017.html";
ends[3] = "http://www.gotechn.com/2017/01/backdoor.html";
ends[4] = "http://www.gotechn.com/2017/01/razer-ces-2017.html";
ends[5] = "http://www.gotechn.com/2017/01/cisco-network-ccna-ipv6-75.html";
ends[6] = "http://www.gotechn.com/2017/01/gif.html";
ends[7] = "http://www.gotechn.com/2017/01/learn-java.html";
ends[8] = "http://www.gotechn.com/2017/01/unity.html";
ends[9] = "http://www.gotechn.com/2016/12/blog-post_30.html";
ends[10] = "http://www.gotechn.com/2016/12/usb-raptor-portable.html";
ends[11] = "http://www.gotechn.com/2016/12/blog-post.html";
ends[12] = "http://www.gotechn.com/2016/12/big-data.html";
ends[13] = "http://www.gotechn.com/2016/11/skylake-x.html";
ends[14] = "http://www.gotechn.com/2016/10/pro-evolution-soccer-2017-cpy.html";
ends[15] = "http://www.gotechn.com/2016/10/ssd-western-digital.html";
ends[16] = "http://www.gotechn.com/2016/10/game-hackers.html";
ends[17] = "http://www.gotechn.com/2016/10/blog-post.html";
ends[18] = "http://www.gotechn.com/2016/10/vpn-ssh.html";
ends[19] = "http://www.gotechn.com/2016/09/xkeyscore-nsa.html";

var i = Math.round(Math.random()*ends.length-1);

obj.location.replace(ends[i]);

}