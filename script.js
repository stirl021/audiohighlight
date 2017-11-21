var audio = document.getElementById('audiofile');

audio.addEventListener('loadeddata', clueThroughEvent, false);

function clueThroughEvent(e) {
	
	var text = e.target.textTracks[0].activeCues[0].text;
	console.log(text);
}

function clueWithoutEvent() {
	var audio = document.getElementById('audiofile');
	var text = audio.textTracks[0].activeCues[0].text;
	console.log(text);
}

clueWithoutEvent();

