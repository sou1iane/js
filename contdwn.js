document.getElementById("skipbtn").disabled = true;
 var seconds;
    var temp;
    function countdown() {
        seconds = document.getElementById('stimer').innerHTML;
        seconds = parseInt(seconds, 13);
        if (seconds == 1) {
            temp = document.getElementById('skipbtn');
            temp.disabled = false;
            temp.innerHTML = "Skip Ads";
            return;
        }
        seconds--;
        temp = document.getElementById('stimer');
        temp.innerHTML = seconds;
        timeoutMyOswego = setTimeout(countdown, 1500);
    }
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("/?&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("00");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function geturl() {
window.open (atob(getQueryVariable("s")),"_blank")
}
setTimeout(function(){ countdown(); }, 2000);
