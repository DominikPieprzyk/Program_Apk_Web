var hihatSound;
var clap;
var boom;
var kick;
var openhat;
var ride;
var snare;
var tink;
var tom;
var channel1 = [];
appStart();
function appStart() {
    document.body.addEventListener('keypress', onKeyDown);
    var btnChannel1Play = document.querySelector('#btnChannel1');
    btnChannel1Play.addEventListener('click', onPlayChanell1);
    getSounds();
}
function onPlayChanell1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function getSounds() {
    hihatSound = document.querySelector('[data-sound="hihat"]');
    clap = document.querySelector('[data-sound="clap"]');
    boom = document.querySelector('[data-sound="boom"]');
    kick = document.querySelector('[data-sound="kick"]');
    openhat = document.querySelector('[data-sound="openhat"]');
    ride = document.querySelector('[data-sound="ride"]');
    snare = document.querySelector('[data-sound="snare"]');
    tink = document.querySelector('[data-sound="tink"]');
    tom = document.querySelector('[data-sound="tom"]');
}
function onKeyDown(ev) {
    console.log(ev);
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time }); // skrocona notacja key: value
    playSound(key);
    console.log(channel1);
}
function playSound(key) {
    // const keyboardKey = hihatSound.dataset.key
    switch (key) {
        case 'q':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'w':
            clap.currentTime = 0;
            clap.play();
            break;
        case 'e':
            boom.currentTime = 0;
            boom.play();
            break;
        case 'r':
            kick.currentTime = 0;
            kick.play();
            break;
        case 't':
            openhat.currentTime = 0;
            openhat.play();
            break;
        case 'a':
            ride.currentTime = 0;
            ride.play();
            break;
        case 's':
            snare.currentTime = 0;
            snare.play();
            break;
        case 'd':
            tink.currentTime = 0;
            tink.play();
            break;
        case 'f':
            tom.currentTime = 0;
            tom.play();
            break;
    }
}
