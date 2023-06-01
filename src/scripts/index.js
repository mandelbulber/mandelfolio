let video;
let playbackRateIndicator;
let videoDurationIndicator;
let currentTimeIndicator;
let timeline;;

$(document).ready(() => {
    video = document.getElementById('intro-video');
    playbackRateIndicator = document.getElementById('playbackRateIndicator');
    videoDurationIndicator = document.getElementById('duration');
    currentTimeIndicator = document.getElementById('currentTime');
    timeline = document.getElementById('timeline');
});

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function scrubBackVideo() {
    video.currentTime -= 5;
}

function scrubForwardVideo() {
    video.currentTime += 5;
}

function setPlaybackRate(rate) {
    video.playbackRate = rate;
    playbackRateIndicator.innerText = rate + 'x';
}

function setTime(factor) {
    video.currentTime = video.duration * factor;
}

function videoLoaded() {
    $(document).ready(() => {
        let durationRounded = Math.round(video.duration);
        videoDurationIndicator.innerText = parseInt(durationRounded / 60) + ':' + durationRounded % 60;
    });
}

function updateTimeText() {
    let currentTimeRounded = Math.round(video.currentTime);
    currentTimeIndicator.innerText = parseInt(currentTimeRounded / 60) + ':' + currentTimeRounded % 60;

    timeline.value = video.currentTime / video.duration;
}