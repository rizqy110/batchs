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

var timeleft2 = 20;
var downloadTimer2 = setInterval(function(){
  if(timeleft2 <= 0){
    clearInterval(downloadTimer2);
    document.getElementById("countdown2").innerHTML = "<a class='c-r' href='//drive.google.com/uc?export=download&confirm=t&id="+ bgoo +"'>Link Download</a>";
  } else {
    document.getElementById("countdown2").innerHTML = timeleft2 +" Proses membuat link download...";
  }
  timeleft2 -= 1;
}, 1000);

var timeleft3 = 20;
var downloadTimer3 = setInterval(function(){
  if(timeleft3 <= 0){
    clearInterval(downloadTimer3);
    document.getElementById("countdown3").innerHTML = "<a class='c-r' href='https://rr-anime.000webhostapp.com/index.php?med="+ bmed +"'>Link Download</a>";
  } else {
    document.getElementById("countdown3").innerHTML = timeleft3 +" Proses membuat link download...";
  }
  timeleft3 -= 1;
}, 1000);

var timeleft4 = 20;
var downloadTimer4 = setInterval(function(){
  if(timeleft4 <= 0){
    clearInterval(downloadTimer4);
    document.getElementById("countdown4").innerHTML = "<a class='c-r' href='https://archive.org/download/"+ barc +".rar'>Link Download</a>";
  } else {
    document.getElementById("countdown4").innerHTML = timeleft4 +" Proses membuat link download...";
  }
  timeleft4 -= 1;
}, 1000);

var timeleft5 = 20;
var downloadTimer5 = setInterval(function(){
  if(timeleft5 <= 0){
    clearInterval(downloadTimer5);
    document.getElementById("countdown5").innerHTML = "<a class='c-r' href='https://archive.org/download/"+ barcz +".zip'>Link Download</a>";
  } else {
    document.getElementById("countdown5").innerHTML = timeleft5 +" Proses membuat link download...";
  }
  timeleft5 -= 1;
}, 1000);

var timeleft6 = 20;
var downloadTimer6 = setInterval(function(){
  if(timeleft6 <= 0){
    clearInterval(downloadTimer6);
    document.getElementById("countdown6").innerHTML = "<a class='c-r' href='https://kusagiri.eu.org/0:/Anm/"+ bkus +".zip'>Link Download</a>";
  } else {
    document.getElementById("countdown6").innerHTML = timeleft6 +" Proses membuat link download...";
  }
  timeleft6 -= 1;
}, 1000);

var timeleft7 = 20;
var downloadTimer7 = setInterval(function(){
  if(timeleft7 <= 0){
    clearInterval(downloadTimer7);
    document.getElementById("countdown7").innerHTML = "<a class='c-r' href='https://kusagiri.eu.org/0:/Anm/"+ bkusr +".rar'>Link Download</a>";
  } else {
    document.getElementById("countdown7").innerHTML = timeleft7 +" Proses membuat link download...";
  }
  timeleft7 -= 1;
}, 1000);

var timeleft8 = 20;
var downloadTimer8 = setInterval(function(){
  if(timeleft8 <= 0){
    clearInterval(downloadTimer8);
    document.getElementById("countdown8").innerHTML = "<a class='c-r' href='https://www.dropbox.com/s/dl/"+ dro +"'>Link Download</a>";
  } else {
    document.getElementById("countdown8").innerHTML = timeleft8 +" Proses membuat link download...";
  }
  timeleft8 -= 1;
}, 1000);

var arc = getUrlParam('arc',null);
var lh3 = getUrlParam('lh3',null);

var bgoo = getUrlParam('bgoo',null);
var bmed = getUrlParam('bmed',null);
var barc = getUrlParam('barc',null);
var barcz = getUrlParam('barcz',null);
var bkus = getUrlParam('bkus',null);
var bkusr = getUrlParam('bkusr',null);
var bdro = getUrlParam('bdro',null);

var directg = "<b class='d-f fs-15 ai-c jc-c' id='countdown2'></b>";
var directm = "<b class='d-f fs-15 ai-c jc-c' id='countdown3'></b>";
var directa = "<b class='d-f fs-15 ai-c jc-c' id='countdown4'></b>";
var directaz = "<b class='d-f fs-15 ai-c jc-c' id='countdown5'></b>";
var directk = "<b class='d-f fs-15 ai-c jc-c' id='countdown6'></b>";
var directkr = "<b class='d-f fs-15 ai-c jc-c' id='countdown7'></b>";
var directd = "<b class='d-f fs-15 ai-c jc-c' id='countdown8'></b>";

var kstream = "<video id='plyr' class='p-a' autoplay='' controls='' playsinline='' webkit-playsinline='' src='https://archive.org/download/"+ arc +".mp4' type='video/mp4'></Video>";
var lh3stream = "<video id='plyr' class='p-a' autoplay='' controls='' playsinline='' webkit-playsinline='' src='https://lh3.googleusercontent.com/pw/"+ lh3 +"' type='video/mp4'></Video>";