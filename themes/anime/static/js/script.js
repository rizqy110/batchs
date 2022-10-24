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
var bmed = getUrlParam('bmed',null);
var barc = getUrlParam('barc',null);
var bkus = getUrlParam('bkus',null);
var bdro = getUrlParam('bdro',null);

var encryptarc = decodeURIComponent(arc);

var directm = "<meta http-equiv='refresh' content='0; url=http://4vacation.pages.dev/?met=?med="+ bmed +"'>";
var directa = "<meta http-equiv='refresh' content='0; url=http://4vacation.pages.dev/?met=?arc="+ barc +"'>";
var directk = "<meta http-equiv='refresh' content='0; url=http://4vacation.pages.dev/?met=?kus="+ bkus +"'>";
var directd = "<meta http-equiv='refresh' content='0; url=http://4vacation.pages.dev/?met=?dro="+ bdro +"'>";

var kstream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://archive.org/download/"+ encryptarc +".mp4' type='video/mp4'></Video>";
var k2stream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://batchs.herokuapp.com/index.php?med="+ med +"' type='video/mp4'></Video>";