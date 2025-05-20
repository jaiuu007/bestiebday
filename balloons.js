const canvas = document.getElementById("balloonCanvas");
const ctx = canvas.getContext("2d");

const balloons = [];
const balloonCount = 4; // Total 4 colors of balloons

// Balloons data with positions and speeds
const balloonData = [
    { color: "#FF5733", x: 0, y: Math.random() * canvas.height, speed: 2 },
    { color: "#33FF57", x: 0, y: Math.random() * canvas.height, speed: 2.5 },
    { color: "#3398FF", x: 0, y: Math.random() * canvas.height, speed: 3 },
    { color: "#FF33FF", x: 0, y: Math.random() * canvas.height, speed: 2.8 }
];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create balloon objects
balloonData.forEach((data) => {
    const balloon = {
        color: data.color,
        x: data.x,
        y: data.y,
        speed: data.speed
    };
    balloons.push(balloon);
});

// Update and draw balloons
function animateBalloons() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move and draw each balloon
    balloons.forEach((balloon) => {
        balloon.x += balloon.speed; // Balloon moves horizontally

        // Reset balloon position to left once it goes off screen
        if (balloon.x > canvas.width) {
            balloon.x = -50; // Start from off-screen on the left
            balloon.y = Math.random() * canvas.height; // Random vertical position
        }

        ctx.beginPath();
        ctx.arc(balloon.x, balloon.y, 40, 0, Math.PI * 2);
        ctx.fillStyle = balloon.color;
        ctx.fill();
    });

    requestAnimationFrame(animateBalloons); // Continuous animation
}

animateBalloons(); // Start animation
