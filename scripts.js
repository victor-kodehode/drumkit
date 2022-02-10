let audio = [
    new Audio("audio/clap.wav"),
    new Audio("audio/hihat.wav"),
    new Audio("audio/kick.wav"),
    new Audio("audio/openhat.wav"),
    new Audio("audio/ride.wav"),
    new Audio("audio/snare.wav"),
    new Audio("audio/tink.wav"),
    new Audio("audio/tom.wav")
];
let drums = document.getElementsByClassName("drum");
for(let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click",()=>drumsFn(i));
}
function drumsFn(i) {
    if(audio.length < drums.length) {
        return 0;
    }
    audio[i].load();
    audio[i].play();
}