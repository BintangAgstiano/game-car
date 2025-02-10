const canvas = document.querySelector('canvas');
const wCanvas = canvas.width = 300
const hCanvas = canvas.height = 500
const ctx = canvas.getContext('2d');
let xRedCar = 180
let isStatus = 'mundur'
let isStatus2 = 'mundur'
let carRed = document.querySelector('.car');
let colTimer = document.querySelector('.box-timer');
let yellow = document.querySelector('.yellowColor');
let green = document.querySelector('.green');
let red = document.querySelector('.red');
let km = document.querySelector('.km');
let score = document.querySelector('.score');
let colSound1 = document.querySelector('.col-sound1');
let colSound2 = document.querySelector('.col-sound2');
let tangan2 = document.querySelector('.tangan2');
let tangan1 = document.querySelector('.tangan1');
let btnplay = document.querySelector('.btn-play');
let popupScreen = document.querySelector('.popup-screen');
let btnRestart = document.querySelector('.btn-restart');
let btnPause = document.querySelector('.btn-pause');
let btnBack = document.querySelector('.btn-back');
let btnResumePause = document.querySelector('#btn-resume-pause');
let btnRestartPause = document.querySelector('#btn-restrat-pause');
let btnBackPause = document.querySelector('#btn-back-pause');
let popupPause = document.querySelector('.popup-pause');
let popupGameOver = document.querySelector('.popup-gameover');
let popupWinner = document.querySelector('.popup-winner');
let scoreWinner = document.querySelector('.score-winner');
let scoreGameOver = document.querySelector('.score-gameover');
let btnPlayagain = document.querySelector('#btn-playagain');
let btnPlayagainWinner = document.querySelector('#btn-playagain-winner');
let btnBackWinner = document.querySelector('#btn-back-winner');
let btnBackGameOver = document.querySelector('#btn-back-gameover');
let beb = document.querySelector('.beb');
let lose = document.querySelector('.lose');
let crash = document.querySelector('.crash');
let sound = document.querySelector('.sound');
let velocity=0
colSound1.addEventListener('click', function () {
    tangan2.style.display = 'none'
    tangan1.style.display = 'flex'
})
colSound2.addEventListener('click', function () {
    tangan1.style.display = 'none'
    tangan2.style.display = 'flex'
})
btnplay.addEventListener('click', function () {
    popupScreen.style.display = 'none'
    beb.play();
    beb.currentTime = 0
    isStatus2 = 'mundur'
    isStatus = 'mundur'
    xRedCar = 180;
    restartGame();
})
btnBackGameOver.addEventListener('click', function () {

    popupGameOver.style.display = 'none'
    popupScreen.style.display = 'flex'
})
colSound1.addEventListener('click', function () {
    sound.pause()
})
colSound2.addEventListener('click', function () {
    sound.play()
    sound.currentTime = 0
    sound.volume = 0.3
})
btnBackWinner.addEventListener('click', function () {

    popupWinner.style.display = 'none'
    popupScreen.style.display = 'flex'
})
btnPlayagain.addEventListener('click', function () {
    isStatus = 'mundur'
    xRedCar = 180

    restartGame();
    popupGameOver.style.display = 'none'
})
btnPlayagainWinner.addEventListener('click', function () {
    isWinner = false
    isStatus2 = 'mundur'
    isStatus = 'mundur'
    restartGame();
    popupWinner.style.display = 'none'

})

btnPause.addEventListener('click', function () {
    clearInterval(interalUpdate)
    clearInterval(intervalCarMove)
    clearInterval(intervalCreateCar)
    clearInterval(intervalLine)
    popupPause.style.display = 'flex'
    carRed.style.animationPlayState = "paused"

})
btnBackPause.addEventListener('click', function () {
    popupPause.style.display = 'none'
    popupScreen.style.display = 'flex'

})
btnBack.addEventListener('click', function () {
    popupScreen.style.display = 'flex'
    clearInterval(interalUpdate)
    clearInterval(intervalCarMove)
    clearInterval(intervalCreateCar)
    clearInterval(intervalLine)
})
btnRestartPause.addEventListener('click', function () {
    popupPause.style.display = 'none'
    restartGame()
})
let scoreVar = 0
score.innerHTML = `${scoreVar.toString().padStart(8, '0')}`
const redCarImg = new Image()
setInterval(() => {
    if (isStatus == 'mundur') {

        redCarImg.src = 'redCarSmall.png'
    } else {
        redCarImg.src = 'boom.png'

    }
}, 10)
redCarImg.onload = () => {
    drawRedCar()
}
btnResumePause.addEventListener('click', function () {
    update()
    startIntervalCarMove()
    startIntervalCreateCar()
    startIntervalLine()
    popupPause.style.display = 'none'
    carRed.style.animationPlayState = "running"

})
btnRestart.addEventListener('click', function () {
    isStatus2 = 'maju'
    yRedCar = 400
    yDrawFinish = -50
    carRed.style.animationPlayState = "paused"

    scoreWinner.innerHTML = scoreVar.toString().padStart(8, '0')
    isStart = false

    clearInterval(interalUpdate)
    clearInterval(intervalCarMove)
    clearInterval(intervalCreateCar)
    clearInterval(intervalLine)
    statusMove = false
    statusStop = false
    isWinner = false
    isStatus2 = 'mundur'
    isStatus = 'mundur'


    restartGame()
})

function restartGame() {
    isStart = false
    setTimeout(() => {
        isStatus = 'mundur'
        isStatus2 = 'mundur'
    }, 4000);

    clearInterval(interalUpdate)
    clearInterval(intervalCarMove)
    clearInterval(intervalCreateCar)

    scoreVar = 0
    score.innerHTML = 0
    score.innerHTML = `${scoreVar.toString().padStart(8, '0')}`
    varKm = 0
    km.innerHTML = varKm
    arrCarsStart = [
        { img: blackCarImg, x: 90, y: 20, w: 30, h: 60 },
        { img: blueCarImg, x: 170, y: 100, w: 30, h: 60 },
        { img: greenCarImg, x: 90, y: 170, w: 30, h: 60 },
        { img: greyCarImg, x: 170, y: 250, w: 30, h: 60 },
        { img: whiteCarImg, x: 90, y: 350, w: 30, h: 60 },
    ]
    xRedCar = 180

    startCars = false
    cars = []
    arrLine = []
    colTimer.style.display = 'flex'
    yellow.style.backgroundColor = 'yellow'
    green.style.backgroundColor = 'rgb(0, 84, 0)'
    red.style.backgroundColor = 'rgb(100, 0, 0)'
    carRed.style.animation = 'none';
    carRed.offsetHeight
    carRed.style.top = "470px"
    carRed.style.animationPlayState = "running"
    setTimeout(() => {
        carRed.style.animation = 'gerak 50s forwards 4s';
    }, 0);
    main()

}

const blackCarImg = new Image()
blackCarImg.src = 'blackCarSmall.png'
const blueCarImg = new Image()
blueCarImg.src = 'blueCarSmall.png'
const greenCarImg = new Image()
greenCarImg.src = 'greenCarSmall.png'
const greyCarImg = new Image()
greyCarImg.src = 'greyCarSmall.png'
const whiteCarImg = new Image()
whiteCarImg.src = 'whiteCarSmall.png'

let startCars = false
let yRedCar = 400
function drawRedCar() {
    if (isStatus == 'mundur') {

        ctx.drawImage(redCarImg, xRedCar, yRedCar, 30, 60);
    } else {
        ctx.drawImage(redCarImg, xRedCar, yRedCar, 60, 60);

    }
}
let arrCarsStart = [
    { img: blackCarImg, x: 90, y: 20, w: 30, h: 60 },
    { img: blueCarImg, x: 170, y: 100, w: 30, h: 60 },
    { img: greenCarImg, x: 90, y: 170, w: 30, h: 60 },
    { img: greyCarImg, x: 170, y: 250, w: 30, h: 60 },
    { img: whiteCarImg, x: 90, y: 350, w: 30, h: 60 },
]
function carsStart() {
    ctx.beginPath();
    arrCarsStart.forEach(car => {
        ctx.drawImage(car.img, car.x, car.y, car.w, car.h);
        if (startCars) {
            car.y -= 10
        }
    });
}
let intervalCreateCar
let cars = []
function drawCars() {

    ctx.beginPath();
    cars.forEach(car => {
        ctx.drawImage(car.imgCar, car.x, car.y, car.w, car.h)
        if (isStatus == 'mundur' && isStatus2 != 'maju') {
            car.y += 5
        }
        if (isStatus == 'maju' || isStatus2 == 'maju') {
            car.y -= 5
        }
    })
    console.log(cars);
}
function startIntervalCreateCar() {
    intervalCreateCar = setInterval(() => {


        const carsImg = new Image()
        let srcRand = Math.floor(Math.random() * 5);
        console.log(srcRand);
        if (srcRand == 0) {
            carsImg.src = 'blackCarSmall.png'
        }
        if (srcRand == 1) {
            carsImg.src = 'blueCarSmall.png'
        }
        if (srcRand == 2) {
            carsImg.src = 'greenCarSmall.png'
        }
        if (srcRand == 3) {
            carsImg.src = 'greyCarSmall.png'
        }
        if (srcRand == 4) {
            carsImg.src = 'whiteCarSmall.png'
        }
        carsImg.onload = () => {
            let xRand = Math.floor(30 + Math.random() * 200);
            cars.push({ imgCar: carsImg, x: xRand, y: -100, w: 30, h: 60 });
            drawCars()
        };
    }, 1000);
}

let carStartInterval

function drawLinePinggir() {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 2; j++) {
            ctx.fillStyle = 'white'
            ctx.rect(j * 293, i * 51, 7, 47);
            ctx.fill()
        }

    }
}
let yDrawFinish = -50
function drawLineFinish() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 30; j++) {
            ctx.beginPath();
            if ((i + j) % 2 == 0) {

                ctx.fillStyle = 'black'
            } else {
                ctx.fillStyle = 'white'

            }
            ctx.rect(j * 10, yDrawFinish + i * 10, 10, 10);
            ctx.fill()

        }

    }

}
let intervalLine;
let arrLine = [];
function startIntervalLine() {
    intervalLine = setInterval(() => {
        let height = Math.floor(30 + Math.random() * 40);
        arrLine.push({ y: -100, h: height })
    }, 200);
}

function drawLineMid() {
    ctx.beginPath()
    arrLine.forEach(line => {
        ctx.fillStyle = 'white'
        ctx.rect(150, line.y, 6, line.h);
        ctx.fill()
        if (isStatus == 'mundur' && isStatus2 == 'mundur') {

            line.y += 10
        }

    })
}
let varKm = 0
km.innerHTML = varKm
let intervalKM
let isStart = false

let interalUpdate
let isWinner = false
function update() {
    interalUpdate = setInterval(() => {
        ctx.clearRect(0, 0, wCanvas, hCanvas)
        drawLineMid();
        drawLinePinggir();
        drawLineFinish();

        carsStart()

        if (isStatus2 == 'maju') {
            carRed.style.animationPlayState = "paused"

        }
        drawCars()
        cars.forEach(car => {


            if (car.y > (400 - 50) && car.y < (400 + 50) && xRedCar < car.x + 23 && xRedCar + 24 > car.x  ) {
                crash.play();
                crash.currentTime = 0
                varKm = 0;
                km.innerHTML = varKm;
                clearInterval(intervalKM)
                gameOver()
            } else if (xRedCar <= 0){
                crash.currentTime = 0
xRedCar=1
                crash.play();
                varKm = 0;
                km.innerHTML = varKm;
                clearInterval(intervalKM)
                gameOver()
                
            
            } else if (xRedCar + 30 > wCanvas - 30){
                crash.currentTime = 0

                crash.play();
xRedCar=wCanvas-60

                varKm = 0;
                km.innerHTML = varKm;
                clearInterval(intervalKM)
                gameOver()
            }
            if (car.y + 60 > 400 && car.y + 60 < 410) {
                if (isStatus == 'mundur' && isStatus2 == 'mundur') {
                    scoreVar += 1
                    score.innerHTML = `${scoreVar.toString().padStart(8, '0')}`
                }

            }
        })

        if (isStatus == 'maju') {
            clearInterval(intervalCarMove);
        }

        if (statusMove) {

            if (yDrawFinish < 350) {
                yDrawFinish += 4

            }
            if (yRedCar > 250) {
                yRedCar -= 2
            }
            if (yRedCar == 250) {
                isWinner = true

                {

                    winner()
                }
                // statusMove = false;
                // isStatus2='mundur'
            }
        }
        drawRedCar()

    }, 20);
}
function winner() {
    isStatus2 = 'maju'
    yRedCar = 400
    yDrawFinish = -50
    carRed.style.animationPlayState = "paused"

    scoreWinner.innerHTML = scoreVar.toString().padStart(8, '0')
    isStart = false

    clearInterval(interalUpdate)
    clearInterval(intervalCarMove)
    clearInterval(intervalCreateCar)
    clearInterval(intervalLine)
    popupWinner.style.display = 'flex'
    statusMove = false
    statusStop = false
}
let tabrak = false
function gameOver() {
    isStatus = 'maju'
    carRed.style.animationPlayState = "paused"
   
    setTimeout(() => {
        tabrak = true
        if (tabrak) {
            crash.pause() 
            lose.play();
            lose.currentTime = 0
            xRedCar = 150
            isStatus = 'mundur'
            scoreGameOver.innerHTML = scoreVar.toString().padStart(8, '0')
            isStart = false

            clearInterval(interalUpdate)
            clearInterval(intervalCarMove)
            clearInterval(intervalCreateCar)
            clearInterval(intervalLine)
            popupGameOver.style.display = 'flex'
        }
    }, 1000);
}
function updateCarRed(e) {
    if (isStart && isStatus2 == 'mundur') {

        if (isStatus == 'mundur') {

            if (e.key == 'ArrowLeft') {
                velocity = -5;
                isMoving = true;

            }
            if (e.key == 'ArrowRight') {
                velocity = 5;
                isMoving = true;

            }
        }
    }
}
setInterval(() => {
    if (isMoving) {
        xRedCar += velocity;
        velocity *= 0.7; 
    }


}, 10);
let intervalCarMove
let statusMove = false
let statusStop = false
function startIntervalCarMove() {
    intervalCarMove = setInterval(() => {
        statusMove = true
        statusStop = true
    }, 40000);
}

function main() {
    beb.play();
    beb.currentTime = 1
    beb.volume = 1
    drawLinePinggir()
    drawLineMid()
    setTimeout(() => {
        startCars = true

    }, 3000);
    setTimeout(() => {
        isStart = true
        startIntervalLine()

    }, 4000);
    update()
    isStatus = 'mundur'
    setTimeout(() => {

        if (isStatus == 'mundur') {

            intervalKM = setInterval(() => {

                varKm += 1
                km.innerHTML = varKm
                if (varKm > 14) {

                    clearInterval(intervalKM)
                }

            }, 100);
        }
    }, 4000);
    document.addEventListener('keydown', updateCarRed)
    drawRedCar()
    carsStart()
    startIntervalCarMove()
    setTimeout(() => {

        startIntervalCreateCar()
    }, 4000);
    setTimeout(() => {
        green.style.backgroundColor = 'green'
        yellow.style.backgroundColor = 'rgb(88, 88, 0) '

    }, 1000);
    setTimeout(() => {
        green.style.backgroundColor = 'rgb(0, 84, 0)'
        yellow.style.backgroundColor = 'rgb(88, 88, 0) '
        red.style.backgroundColor = 'red'

    }, 2000);
    setTimeout(() => {
        colTimer.style.display = 'none'




    }, 3000);
}
// main();