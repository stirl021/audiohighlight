var audioFile = document.getElementById('audiofile');
audiofile.textTracks[0].mode = "hidden";

var trackElement = document.getElementById('track');

audioFile.addEventListener('timeupdate', showTime, false);

function showTime(e) {
	
	console.log(e);
	var text = e.target.textTracks[0].activeCues[0].text;
	//var text = e.target.textTracks[0].cues[1].text
	trackElement.textContent = text;
}


audioFile.addEventListener('loadeddata', joinCues, false);

/*function getTrack(e) {
		
	console.log(e);
	cues = e.target.textTracks[0].cues.length;
	return cues;
}*/

function joinCues(e) {
	
	var cues = e.target.textTracks[0].cues
	
	console.log(typeof(cues));
  }

