var audioFile = document.getElementById('audiofile');
audiofile.textTracks[0].mode = "showing";

var trackElement = document.getElementById('track');

audioFile.addEventListener('timeupdate', showTime, false);

function showTime(e) {
	
	var text = e.target.textTracks[0].activeCues[0].text
	trackElement.textContent = text;
}

function getTrack() {
	var audio = document.getElementById('audiofile');
	return audio.textTracks[0];
}

function joinCues() {
	var cues = getTrack().cues;
	var sentence = [];

	console.log(cues);
	console.log(Object.entries(cues));
}

joinCues();