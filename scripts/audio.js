var toggle = document.getElementById("onoffswitch");
var audio = document.getElementsByTagName('audio')[0];
audio.currentTime = 10;
toggle.onclick = function(event){
    var t = this.checked === true;
    document.getElementById(this.value)[t ? "play": "pause"]();
}
    
    