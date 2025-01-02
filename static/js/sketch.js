let walker;

class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2; // Starting point of the animation
    }

    show() {
        stroke(255); // Set dot color to white
        strokeWeight(10); // Make the point more visible
        point(this.x, this.y);
    }

    step() {
        let choice = random(1); // Random value between 0 and 1
        if (choice < 0.5) {
            // Move dot towards the mouse 50% of the time
            this.x += (mouseX - this.x) * 0.1; // Smoothly move towards mouse X
            this.y += (mouseY - this.y) * 0.1; // Smoothly move towards mouse Y
        } else {
            // Random movement the other 50% of the time
            let direction = floor(random(4)); // Choose one of four directions
            if (direction === 0) this.x++;
            if (direction === 1) this.x--;
            if (direction === 2) this.y++;
            if (direction === 3) this.y--;
        }
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    walker = new Walker();
    background(0, 102, 204); // Set background color (blue)
}

function draw() {
    walker.step();
    walker.show();
}

