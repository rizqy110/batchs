function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var kwf = getUrlParam('kwf',null);
var kwf2 = getUrlParam('kwf2',null);
var gog = getUrlParam('gog',null);

var encryptkwf = decodeURIComponent(kwf);
var encryptkwf2 = decodeURIComponent(kwf2);

var gstream = "<iframe class='p-a' id='plyr' referrerpolicy='no-referrer' src='https://rr-avideo.herokuapp.com/apigogo.php?id="+ gog +"' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true' scrolling='no' marginheight='0' marginwidth='0'></iframe>";

var kstream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://s1.primuscdn.xyz/anime/"+ kwf +".mp4' type='video/mp4'></Video>";
var k2stream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://s2.primuscdn.xyz/anime/"+ kwf2 +".mp4' type='video/mp4'></Video>";