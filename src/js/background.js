const video = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4"];

const chosenVideo = video[Math.floor(Math.random() * video.length)];
const bgVideo = document.querySelector(".bg_video");
const bgVideoSrc = document.querySelector(".bg_video source");


bgVideoSrc.src = `src/video/${chosenVideo}`;
bgVideo.appendChild(bgVideoSrc);




// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `src/video/${chosenImage}`;

// document.body.appendChild(bgImage);