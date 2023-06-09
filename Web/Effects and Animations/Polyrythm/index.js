const paper = document.querySelector('#paper') , pen = paper.getContext('2d');

const draw = () => {
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;
  const arcRadius = length * 0.05,  angle =  Math.PI;
  const x = center.x + arcRadius * Math.cos(angle),
        y = center.y + arcRadius * Math.sin(angle);
  const start = {
    x: paper.width * 0.1,
    y: paper.height * 0.9
  }
  const center = {
    x: paper.width * 0.5,
    y: paper.height * 0.9
  }
  const end = {
    x: paper.width * 0.9,
    y: paper.height * 0.9
  }
  pen.strokeStyle = 'white';
  pen.lineWidth = 6;

  pen.beginPath();
  pen.moveTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();

  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.05, Math.pi , 2 * Math.pi);
  pen.stroke();

  pen.fillStyle = 'white';
  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.0065, 0 , 2 * Math.pi);
  pen.fill();

}
draw();