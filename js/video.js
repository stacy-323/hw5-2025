
// Turn off autoplay and loop
var video = document.getElementById("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video=this.document.querySelector("#player1")
    video.loop=false;
	console.log("loop is set to" + video.loop)
    video.autoplay=false;
	console.log("autoplay is set to" + video.autoplay)
});

// Play the video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

// Pause Video
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
})

// Update the volumne information
let volSlider = document.getElementById("slider");
let volLabel = document.getElementById("volume");
volLabel.textContent = volSlider.value + "%";

function updateVolSlider() {
	volLabel.textContent = volSlider.value + "%";
}

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
let slower = document.getElementById("slower");
slower.addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.9;
	console.log(video.playbackRate);
})

// Increase the current video speed each time the button is clicked and log the new speed to the console. Change it by an amount proportional to the slow down. CHECK THIS!! If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
let faster = document.getElementById("faster");
faster.addEventListener("click", function() {
	video.playbackRate = video.playbackRate/0.9;
	console.log(video.playbackRate);
})

// Advance the current video by 10 seconds. If the video length has been exceeded go back to the start of the video - no farther. Log the current location of the video.
let skip = document.getElementById("skip");
skip.addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log(video.currentTime)
})

// Mute / Unmute
let mute_button = document.getElementById("mute");
mute_button.addEventListener("click", function() {
	if (video.muted) {
		mute_button.textContent = "Mute";
		video.muted = false;
		console.log("Video unmuted");
	} else {
		video.muted = true;
		mute_button.textContent = "Unmute";
		console.log("Video now muted");
	}
})

// Change the volume based on the slider and update the volume information.
volSlider.addEventListener("input", function() {
	video.volume = volSlider.value / 100;
	updateVolSlider();
})

// Utilize the existing old School class on the video element
document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
})

// Remove the old School class from the video.
document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
})