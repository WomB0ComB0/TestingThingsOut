const canvasId = "app";
const app = document.getElementById("app") as HTMLCanvasElement;
if (app === null){
  throw new Error(`Could not find canvas ${canvasId}`);
}
app.width = 800;
app.height = 600;
const ctx = app.getContext("2d");
if (ctx === null){
  throw new Error(`Could not get context from canvas ${canvasId}`);
}
ctx.fillStyle = "red";
ctx.fillRect(0, 0, app.width, app.height);
console.log(ctx);