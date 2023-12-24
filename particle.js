export let particles = [];

export function spawnParticles(amount){
    for (let i = 0; i < amount; i++) {
        particles[i] = new Particle(random(width), random(height));
    }
}

export class Particle {
    #x;
    #y;
    #vel;
    #acel;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        this.#vel = createVector(0, 0);
        this.#acel = createVector(0, 0);
    }
    
    tick(holdingMouse){
        if (holdingMouse) {
            let vec = new createVector(mouseX - this.#x, mouseY - this.#y);
            this.#acel = vec.normalize();
            let dist = vec.mag();
            if (dist != 0) this.#acel = this.#acel.div(dist);
            else this.#acel = createVector(0, 0);
            this.#vel = this.#vel.add(this.#acel);
        }

        this.#vel = this.#vel.div(1.01);

        if (this.#x <= 0 || this.#x >= width) this.#vel.x *= -0.95 * random(0.1, 1);
        if (this.#y <= 0 || this.#y >= height) this.#vel.y *= -0.95 * random(0.1, 1);


        this.#x += this.#vel.x;
        this.#y += this.#vel.y;

        this.#x = constrain(this.#x, 0, width);
        this.#y = constrain(this.#y, 0, height);
    }

    render(){
        let red = map(this.#vel.mag(), 0, 10, 150, 255);
        let green = map(this.#vel.mag(), 0, 15, 100, 255);
        let blue = map(this.#vel.mag(), 0, 10, 150, 255);
        stroke(red, green, blue);
        strokeWeight(4);
        point(this.#x, this.#y);
    }
}