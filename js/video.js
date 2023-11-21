var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
});

document.addEventListener("DOMContentLoaded", function () {
	// 3. Play Button: click on this button the video starts to play
	document.getElementById("play").addEventListener("click", function () {
		video.play();
	});

	// 4. Pause Button: click on this button the video pauses
	document.getElementById("pause").addEventListener("click", function () {
		video.pause();
	});

	// 5. Slow Down Button: Slow the current video speed by 10% each time the button is clicked
	document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate -= 0.1;
		console.log("New video speed:", video.playbackRate);
	});

	// 6. Speed Up Button: Increase the current video speed each time the button is clicked
	document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate += 0.1;
		console.log("New video speed:", video.playbackRate);
	});

	// 7. Skip Ahead Button: Advance the current video by 10 seconds
	document.getElementById("skip").addEventListener("click", function () {
		video.currentTime += 10;
		console.log("Current video location:", video.currentTime);
	});

	// 8. Mute Button: Mute/unmute the video and update the text in the button
	document.getElementById("mute").addEventListener("click", function () {
		video.muted = !video.muted;
		const muteButton = document.getElementById("mute");
		muteButton.textContent = video.muted ? "Unmute" : "Mute";
	});

	// 9. Volume slider: Change the volume based on the slider and update the volume information
	const volumeSlider = document.getElementById("slider");
	const volumeDisplay = document.getElementById("volume");

	volumeSlider.addEventListener("input", function () {
	video.volume = volumeSlider.value / 100;
	volumeDisplay.textContent = `${volumeSlider.value}%`;
	});

	// 10. Old Button: Utilize the existing oldSchool class on the video element
	document.getElementById("vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
	});

	// 11. Original Button: Remove the oldSchool class from the video
	document.getElementById("orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
	});
});