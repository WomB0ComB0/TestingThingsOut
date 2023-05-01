const BOARD_ROWS  = 32;
const BOARD_COLS  = BOARD_ROWS;
const canvasId = "app";
const app = document.getElementById("app");
if (app === null) {
    throw new Error(`Could not find canvas ${canvasId}`);
}
app.width = 800;
app.height = 800;
const ctx = app.getContext("2d");
if (ctx === null) {
    throw new Error(`Could not get context from canvas ${canvasId}`);
}

app.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const cellX = Math.floor(x / CELL_WIDTH);
    const cellY = Math.floor(y / CELL_HEIGHT);
    console.log(`Clicked on cell ${cellX}, ${cellY}`);
});
ctx.fillStyle = "#202020";
ctx.fillRect(0, 0, app.width, app.height);

const CELL_WIDTH = app.width / BOARD_COLS;
const CELL_HEIGHT = app.width / BOARD_ROWS;

ctx.fillStyle = "red";
for (let i = 0; i <  CELL_WIDTH; i++){
    const x = i * CELL_WIDTH;
    const y = i * CELL_HEIGHT;
    ctx.fillRect(x, y, CELL_WIDTH, CELL_HEIGHT);
}