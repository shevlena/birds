const keys = [...document.querySelectorAll('.birds')]
console.log(keys);

let audio;
const playSound = (keyPlayNow) => {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = new Audio(`./sounds/${keyPlayNow}.mp3`)
    audio.play()
}

keys.forEach((key, i) => {
    console.log(key);
    console.log(i);
    key.dataset.index = i + 1;
    key.addEventListener('click', (e) => {
        console.log(e);
        const specificKey = e.target.dataset.index;
        console.log(specificKey);
        playSound(specificKey)
    })
})