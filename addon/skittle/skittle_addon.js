function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const colors = ['red', 'yellow', 'orange', 'green', 'purple'];

const groupDivElement = document.createElement('div');
groupDivElement.setAttribute('class', 'skittle');
for (let i = 0; i < 20; i++) {
  const spanElement = document.createElement('span');
  spanElement.setAttribute('class', colors[getRandomInt(colors.length)]);
  const delay = `${getRandomInt(60)}.${getRandomInt(100)}s`;
  spanElement.style['animation-delay'] = delay;
  spanElement.style['animation-delay'] = delay;
  spanElement.style.top = '0';
  spanElement.style.opacity = '0';
  spanElement.style.left = `${getRandomInt(100)}vw`;
  groupDivElement.appendChild(spanElement);
}
document.getElementsByTagName('body')[0].appendChild(groupDivElement);

const styleElement = document.createElement('style');
styleElement.innerText = `
.skittle {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 500;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0);
}

.skittle span {
    position: absolute;
    list-style: none;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
    animation-name: falling;
}

.skittle span:after {
    font-size: 12px;
    display: block;
    content: 's';
    color: #EEE;
    margin-top: 3px;
    text-align: center;
}

@-webkit-keyframes falling {
    0% {
        opacity: 1;
        transform: translateY(0vh) rotateZ(0deg);
    }
    20% {
        opacity: 1;
        transform: translateY(95vh) rotateZ(360deg);
    }
    100% {
        opacity: 1;
        transform: translateY(95vh) rotateZ(360deg);
    }
}

.red {
    background-color: #c0043f;
}

.orange {
    background-color: #e64808;
}

.yellow {
    background-color: #f1be02;
}

.green {
    background-color: #048207;
}

.purple {
    background-color: #441349;
}
`;
document.getElementsByTagName('head')[0].appendChild(styleElement);
