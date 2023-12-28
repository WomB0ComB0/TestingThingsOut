document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const flagsLeft = document.querySelector('#flags-left')
  const result = document.querySelector('#result')
  let width = 10
  let bombAmount = 20
  let flags = 0
  let squares = []
  let isGameOver = false
  var clickSound = new Audio('./Music/click.mp3'); 
  var bombSound = new Audio('./Music/bomb.mp3');
  var winSound = new Audio('./Music/win.mp3');
  var flagSound = new Audio('./Music/flag.mp3');

  function createBoard() { //create Board
    flagsLeft.innerHTML = bombAmount
    const bombsArray = Array(bombAmount).fill('bomb') //create array with bombs
    const emptyArray = Array(width * width - bombAmount).fill('valid')
    const gameArray = emptyArray.concat(bombsArray)
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5)
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.classList.add(shuffledArray[i])
      grid.appendChild(square)
      squares.push(square)
      square.addEventListener('click', function (e) { //normal click
        click(square)
      })
      square.oncontextmenu = function (e) { //ctrl and left click
        e.preventDefault()
        addFlag(square)
      }
    }
    for (let i = 0; i < squares.length; i++) { //add numbers
      let total = 0
      const isLeftEdge = (i % width === 0)
      const isRightEdge = (i % width === width - 1)
      if (squares[i].classList.contains('valid')) {
        if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total++
        if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++
        if (i > 10 && squares[i - width].classList.contains('bomb')) total++
        if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total++
        if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total++
        if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total++
        if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains('bomb')) total++
        if (i < 89 && squares[i + width].classList.contains('bomb')) total++
        squares[i].setAttribute('data', total)
      }
    }
  }
  createBoard()
  function addFlag(square) { //add Flag with right click
    if (isGameOver) return
    if (!square.classList.contains('checked') && (flags < bombAmount)) {
      if (!square.classList.contains('flag')) {
        flagSound.play();
        square.classList.add('flag')
        square.innerHTML = ' 🚩'
        flags++
        flagsLeft.innerHTML = bombAmount - flags
        checkForWin()
      } else {
        flagSound.play();
        square.classList.remove('flag')
        square.innerHTML = ''
        flags--
        flagsLeft.innerHTML = bombAmount - flags
      }
    }
  }
  function click(square) { //click on square actions
    let currentId = square.id
    if (isGameOver) return
    if (square.classList.contains('checked') || square.classList.contains('flag')) return
    if (square.classList.contains('bomb')) {
      bombSound.play();
      gameOver(square)
    } else {
      let total = square.getAttribute('data')
      if (total != 0) {
        square.classList.add('checked')
        clickSound.play();
        if (total == 1) square.classList.add('one')
        if (total == 2) square.classList.add('two')
        if (total == 3) square.classList.add('three')
        if (total == 4) square.classList.add('four')
        square.innerHTML = total
        return
      }
      checkSquare(square, currentId)
    }
    square.classList.add('checked')
  }
  //check neighboring squares once square is clicked
  function checkSquare(square, currentId) {
    const isLeftEdge = (currentId % width === 0)
    const isRightEdge = (currentId % width === width - 1)
    setTimeout(() => {
      if (currentId > 0 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 9 && !isRightEdge) {
        const newId = squares[parseInt(currentId) + 1 - width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 10) {
        const newId = squares[parseInt(currentId - width)].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId > 11 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1 - width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 98 && !isRightEdge) {
        const newId = squares[parseInt(currentId) + 1].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 90 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1 + width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 88 && !isRightEdge) {
        const newId = squares[parseInt(currentId) + 1 + width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
      if (currentId < 89) {
        const newId = squares[parseInt(currentId) + width].id
        const newSquare = document.getElementById(newId)
        click(newSquare)
      }
    }, 10)
  }
  function gameOver(square) { // Game Over
    result.innerHTML = 'BOOM! Game Over!'
    isGameOver = true
    squares.forEach(square => { //show ALL the bombs
      if (square.classList.contains('bomb')) {
        square.innerHTML = '💣'
        square.classList.remove('bomb')
        square.classList.add('checked')
      }
    })
  }
  function checkForWin() { //check for win
    let matches = 0
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
        matches++
      }
      if (matches === bombAmount) {
        winSound.play();
        ConfettiGenerator();
        result.innerHTML = 'YOU WIN!'
        isGameOver = true
      }
    }
  }
})
// https://codepen.io/bananascript/pen/EyZeWm?editors=0110
function ConfettiGenerator() { // Confetti Animation
  var random = Math.random // Globals
    , cos = Math.cos
    , sin = Math.sin
    , PI = Math.PI
    , PI2 = PI * 2
    , timer = undefined
    , frame = undefined
    , confetti = [];
  var particles = 10
    , spread = 40
    , sizeMin = 3
    , sizeMax = 12 - sizeMin
    , eccentricity = 10
    , deviation = 100
    , dxThetaMin = -.1
    , dxThetaMax = -dxThetaMin - dxThetaMin
    , dyMin = .13
    , dyMax = .18
    , dThetaMin = .4
    , dThetaMax = .7 - dThetaMin;

  var colorThemes = [ // Color Themes
    function () {
      return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
    }, function () {
      var black = 200 * random() | 0; return color(200, black, black);
    }, function () {
      var black = 200 * random() | 0; return color(black, 200, black);
    }, function () {
      var black = 200 * random() | 0; return color(black, black, 200);
    }, function () {
      return color(200, 100, 200 * random() | 0);
    }, function () {
      return color(200 * random() | 0, 200, 200);
    }, function () {
      var black = 256 * random() | 0; return color(black, black, black);
    }, function () {
      return colorThemes[random() < .5 ? 1 : 2]();
    }, function () {
      return colorThemes[random() < .5 ? 3 : 5]();
    }, function () {
      return colorThemes[random() < .5 ? 2 : 4]();
    }
  ];
  function color(r, g, b) { // Utility
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
  function interpolation(a, b, t) { // Cosine interpolation
    return (1 - cos(PI * t)) / 2 * (b - a) + a;
  }
  // Create a 1D Maximal Poisson Disc over [0, 1]
  var radius = 1 / eccentricity, radius2 = radius + radius;
  function createPoisson() {
    // domain is the set of points which are still available to pick from
    // D = union{ [d_i, d_i+1] | i is even }
    var domain = [radius, 1 - radius], measure = 1 - radius2, spline = [0, 1];
    while (measure) {
      var dart = measure * random(), i, l, interval, a, b, c, d;
      // Find where dart lies
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
        a = domain[i], b = domain[i + 1], interval = b - a;
        if (dart < measure + interval) {
          spline.push(dart += a - measure);
          break;
        }
        measure += interval;
      }
      c = dart - radius, d = dart + radius;
      // Update the domain
      for (i = domain.length - 1; i > 0; i -= 2) {
        l = i - 1, a = domain[l], b = domain[i];
        // c---d          c---d  Do nothing
        //   c-----d  c-----d    Move interior
        //   c--------------d    Delete interval
        //         c--d          Split interval
        //       a------b
        if (a >= c && a < d)
          if (b > d) domain[l] = d; // Move interior (Left case)
          else domain.splice(l, 2); // Delete interval
        else if (a < c && b > c)
          if (b <= d) domain[i] = c; // Move interior (Right case)
          else domain.splice(i, 0, c, d); // Split interval
      }
      // Re-measure the domain
      for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
        measure += domain[i + 1] - domain[i];
    }
    return spline.sort();
  }
  // Create the overarching container
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '0';
  container.style.overflow = 'visible';
  container.style.zIndex = '9999';
  // Confetto constructor
  function Confetto(theme) {
    this.frame = 0;
    this.outer = document.createElement('div');
    this.inner = document.createElement('div');
    this.outer.appendChild(this.inner);

    var outerStyle = this.outer.style, innerStyle = this.inner.style;
    outerStyle.position = 'absolute';
    outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
    outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
    innerStyle.width = '100%';
    innerStyle.height = '100%';
    innerStyle.backgroundColor = theme();

    outerStyle.perspective = '50px';
    outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
    this.axis = 'rotate3D(' +
      cos(360 * random()) + ',' +
      cos(360 * random()) + ',0,';
    this.theta = 360 * random();
    this.dTheta = dThetaMin + dThetaMax * random();
    innerStyle.transform = this.axis + this.theta + 'deg)';

    this.x = window.innerWidth * random();
    this.y = -deviation;
    this.dx = sin(dxThetaMin + dxThetaMax * random());
    this.dy = dyMin + dyMax * random();
    outerStyle.left = this.x + 'px';
    outerStyle.top = this.y + 'px';

    // Create the periodic spline
    this.splineX = createPoisson();
    this.splineY = [];
    for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
      this.splineY[i] = deviation * random();
    this.splineY[0] = this.splineY[l] = deviation * random();

    this.update = function (height, delta) {
      this.frame += delta;
      this.x += this.dx * delta;
      this.y += this.dy * delta;
      this.theta += this.dTheta * delta;

      // Compute spline and convert to polar
      var phi = this.frame % 7777 / 7777, i = 0, j = 1;
      while (phi >= this.splineX[j]) i = j++;
      var rho = interpolation(
        this.splineY[i],
        this.splineY[j],
        (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
      );
      phi *= PI2;

      outerStyle.left = this.x + rho * cos(phi) + 'px';
      outerStyle.top = this.y + rho * sin(phi) + 'px';
      innerStyle.transform = this.axis + this.theta + 'deg)';
      return this.y > height + deviation;
    };
  }
  function poof() {
    if (!frame) {
      // Append the container
      document.body.appendChild(container);
      // Add confetti
      var theme = colorThemes[0]
        , count = 0;
      (function addConfetto() {
        var confetto = new Confetto(theme);
        confetti.push(confetto);
        container.appendChild(confetto.outer);
        timer = setTimeout(addConfetto, spread * random());
      })(0);
      // Start the loop
      var prev = undefined;
      requestAnimationFrame(function loop(timestamp) {
        var delta = prev ? timestamp - prev : 0;
        prev = timestamp;
        var height = window.innerHeight;
        for (var i = confetti.length - 1; i >= 0; --i) {
          if (confetti[i].update(height, delta)) {
            container.removeChild(confetti[i].outer);
            confetti.splice(i, 1);
          }
        }
        if (timer || confetti.length)
          return frame = requestAnimationFrame(loop);
        // Cleanup
        document.body.removeChild(container);
        frame = undefined;
      });
    }
  }
  poof();
};