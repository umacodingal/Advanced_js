function clickFunction() {
    let bg = document.getElementById('background');
    console.log(bg);
    let colors = ["red", "green", "blue", "yellow", "indigo", "brown", "rainbow"];

    const colorIndex = parseInt(Math.random() * colors.length);
    bg.style.backgroundColor = colors[colorIndex];
}