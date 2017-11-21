var audio = document.getElementById('audiofile');

audio.addEventListener('loadeddata', clueThroughEvent, false);

function clueThroughEvent(e) {
	
	var text = e.target.textTracks[0].activeCues[0].text;

	console.log('clue through event: ' +text); // Peppa -> OK
}

function clueWithoutEvent() {

	var audio = document.getElementById('audiofile');
	var text = audio.textTracks[0].activeCues[0].text;

	console.log('clue without event: ' +text);  //Uncaught TypeError: Cannot read property '0' of null
}

clueWithoutEvent();

