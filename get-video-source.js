function f(w){
    try{
		var v = w.document.getElementsByTagName('video');
    	for(var i in v)
        	if(v[i].readyState > 0 && !v[i].paused){
            	prompt('Copy video source URL:', v[i].currentSrc);
            	return false
        	}
    } catch(e){}
    return true
}
if(f(window)){
    for(var c = 0; c < window.frames.length && f(window.frames[c]);)c++;
    if(c >= window.frames.length){
        var i = window.document.querySelector('iframe[allowfullscreen]');
        var t = "Can't detect currently playing video.";
        if(i && i.src && window.location.href != i.src) {
            if(confirm(t+' Retry inside iframe?')) window.location.href = i.src
        }
        else alert(t)
    }
}
