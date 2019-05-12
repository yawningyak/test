function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const colors = ['red', 'yellow', 'orange', 'green', 'purple'];

const cssLinkElement = document.createElement('link');
cssLinkElement.setAttribute('rel', 'stylesheet');
cssLinkElement.setAttribute('type', 'text/css');
cssLinkElement.setAttribute('href', 'skittle_addon.css');
document.getElementsByTagName('head')[0].appendChild(cssLinkElement);

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