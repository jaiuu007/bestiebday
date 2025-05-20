// Function to open the gift and show the message
function openScrollPage() {
    // document.querySelector(".gift-box").style.display = "none";
    // document.getElementById("message").style.display = "block";
    window.location.href = "scroll-letter.html";
}

// Music Controls
let music = document.getElementById("birthdayMusic");
let playButton = document.getElementById("playMusicBtn");

window.addEventListener("load", () => {
    setTimeout(() => {
        music.play().then(() => {
            playButton.innerText = "⏸ Pause Music";
        }).catch(error => {
            console.log("Autoplay blocked: User must interact with the page first.");
        });
    }, 1000); // Delay to allow content to load before playing
});

function toggleMusic() {
    if (music.paused) {
        music.play();
        playButton.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        playButton.innerText = "🎵 Play Music";
    }
}

// Auto-play music when the page loads (some browsers block autoplay)
window.addEventListener("load", () => {
    setTimeout(() => {
        music.play().catch(error => {
            console.log("Autoplay blocked: User must interact with the page first.");
        });
    }, 1000);
});





