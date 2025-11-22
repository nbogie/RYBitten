function setup() {
    createCanvas(800, 600);
    noLoop();
    console.log("Can access ryb2rgb? ", RYBitten.ryb2rgb);
    console.log("Can access cubes? ", RYBitten.cubes);
}

function draw() {
    background(rybForP5(0.8, 0.8, 0.8, "hayter"));

    const palette = [];
    for (let i = 0; i < 4; i++) {
        palette.push(randomColour("hayter"));
    }

    for (let i = 0; i < 15; i++) {
        fill(random(palette));
        noStroke();
        circle(random(width), random(height), random(50, 200));
    }
}

function randomColour(cubeName = "itter") {
    return rybForP5(Math.random(), Math.random(), Math.random(), cubeName);
}

function rybForP5(r, y, b, cubeName = "itten") {
    return color(
        RYBitten.ryb2rgb([r, y, b], RYBitten.cubes[cubeName]).map(
            (v) => v * 255
        )
    );
}

function mousePressed() {
    redraw();
}
