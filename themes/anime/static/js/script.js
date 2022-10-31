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

var arc = getUrlParam('arc',null);
var med = getUrlParam('med',null);
var kur = getUrlParam('kur',null);
var kusif = getUrlParam('kusif',null);

var bmed = getUrlParam('bmed',null);
var barc = getUrlParam('barc',null);
var bkus = getUrlParam('bkus',null);
var bkusr = getUrlParam('bkusr',null);
var bdro = getUrlParam('bdro',null);
var bgoo = getUrlParam('bgoo',null);

var encryptarc = decodeURIComponent(arc);

var directm = "<meta http-equiv='refresh' content='0; url=https://batchs.herokuapp.com/index.php?med="+ bmed +"'>";
var directg = "<meta http-equiv='refresh' content='0; url=https://drive.google.com/uc?export=download&confirm=t&id="+ bgoo +"'>";
var directa = "<meta http-equiv='refresh' content='0; url=https://archive.org/download/"+ barc +".rar'>";
var directk = "<meta http-equiv='refresh' content='0; url=https://kusagiri.eu.org/"+ bkus +".zip'>";
var directkr = "<meta http-equiv='refresh' content='0; url=https://kusagiri.eu.org/"+ bkusr +".rar'>";
var directd = "<meta http-equiv='refresh' content='0; url=https://www.dropbox.com/s/dl/"+ bdro +"'>";

var kstream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://archive.org/download/"+ encryptarc +".mp4' type='video/mp4'></Video>";
var k2stream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://batchs.herokuapp.com/index.php?med="+ med +"' type='video/mp4'></Video>";
var k3stream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://batchs.herokuapp.com/index.php?kur="+ kur +".mp4' type='video/mp4'></Video>";
var k4stream = "<iframe class='p-a' id='plyr' referrerpolicy='no-referrer' frameborder='0' allowfullscreen src='https://batchs.herokuapp.com/iframe.php?url=https://128.199.84.142/"+ kusif +"'></iframe>";