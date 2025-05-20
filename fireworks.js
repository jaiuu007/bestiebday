const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let isFireworksActive = false; // Track if fireworks should keep going

class Firework {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.particles = [];

        for (let i = 0; i < 120; i++) { // Increase particle count for bigger display
            this.particles.push({
                x: this.x,
                y: this.y,
                speed: Math.random() * 8 + 4, // Increased speed
                angle: Math.random() * Math.PI * 2,
                alpha: 1
            });
        }
    }

    update() {
        this.particles.forEach((p) => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.alpha -= 0.02;
        });

        this.particles = this.particles.filter((p) => p.alpha > 0);
    }

    draw() {
        this.particles.forEach((p) => {
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2); // Increased size of particles
            ctx.fill();
        });
    }
}

function triggerFireworks(event) {
    event.preventDefault(); // Stop page redirection
    isFireworksActive = true; // Activate continuous fireworks

    function createFirework() {
        if (!isFireworksActive) return; // Stop if deactivated

        fireworks.push(new Firework(
            Math.random() * canvas.width,
            Math.random() * canvas.height * 0.7,
            getRandomColor()
        ));

        setTimeout(createFirework, Math.random() * 1000 + 500); // Randomize intervals
    }

    createFirework(); // Start continuous fireworks
}

function animateFireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((firework, index) => {
        firework.update();
        firework.draw();

        if (firework.particles.length === 0) {
            fireworks.splice(index, 1);
        }
    });

    requestAnimationFrame(animateFireworks);
}

animateFireworks(); // Keep updating fireworks animation

function getRandomColor() {
    const colors = ["#ff0000", "#ff9900", "#ffff00", "#00ff00", "#0099ff", "#6600ff", "#ff00ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}
