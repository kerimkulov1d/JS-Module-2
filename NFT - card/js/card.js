const html = document.querySelector('*');
html.style.cssText = `
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const body = document.querySelector('body');
body.style.cssText = `
  background-color: hsl(217, 54%, 11%);
  font-family: 'Outfit', sans-serif;
  color: hsl(215, 51%, 70%);
  font-weight: 300;
  line-height: 1.6;
  `;

const wrapper = document.createElement('div');
wrapper.id = 'wrapper';
body.appendChild(wrapper);
wrapper.style.cssText = `
  background-color: hsl(216, 50%, 16%);
  width: 300px;
  margin: 3rem auto;
  border-radius: 15px;
  padding: 1.5rem 1.6rem 2rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5);
  `;

const imageContainer = document.createElement('div');
imageContainer.className = 'image-container';
wrapper.appendChild(imageContainer);
imageContainer.style.cssText = `
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  `;

const mainImage = document.createElement('img');
mainImage.className = 'main-image';
imageContainer.appendChild(mainImage);
mainImage.src = './images/image-equilibrium.jpg';
mainImage.style.cssText = `
  display: block;
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  `;

const overlay = document.createElement('div');
overlay.className = 'overlay';
imageContainer.appendChild(overlay);
overlay.style.cssText = `
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: hsl(178, 100%, 50%);
  border-radius: 10px;
  `;

const view = document.createElement('img');
view.className = 'view';
view.src = './images/icon-view.svg';
imageContainer.appendChild(view);
view.style.cssText = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: none;
  `;

const textContainer = document.createElement('div');
textContainer.className = 'text-container';
wrapper.appendChild(textContainer);

const title = document.createElement('h2');
title.className = 'title';
title.innerText = 'Equilibrium #3429';
textContainer.appendChild(title);
title.style.cssText = `
  color: hsl(0, 0%, 100%);
  margin: 1.4rem 0 0.75rem;
  font-size: 1.4rem;
  font-weight: 400;
`;

const description = document.createElement('p');
description.className = 'description';
description.innerText = 'Our Equilibrium collection promotes balance and calm.';
textContainer.appendChild(description);
description.style.cssText = `
  font-size: 1.1rem;
  letter-spacing: 0.015em;
  margin-bottom: 1rem;
  font-weight: 300;
`;

const ethInfo = document.createElement('div');
ethInfo.className = 'eth-info';
textContainer.appendChild(ethInfo);
ethInfo.style.cssText = `
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1.4rem;
`;

const info1 = document.createElement('div');
info1.className = 'info';
ethInfo.appendChild(info1);
info1.style.cssText = `
  display: flex;
  align-items: center;
`;

const icon1 = document.createElement('img');
icon1.className = 'icon';
icon1.src = './images/icon-ethereum.svg';
info1.appendChild(icon1);
icon1.style.cssText = `
  margin-right: 0.5rem;
`;

const eth = document.createElement('span');
eth.className = 'eth';
eth.innerText = '0.041 ETH';
info1.appendChild(eth);
eth.style.cssText = `
  color: hsl(178, 100%, 50%);
  font-weight: 600;
`;

const info2 = document.createElement('div');
info2.className = 'info';
ethInfo.appendChild(info2);
info2.style.cssText = `
  display: flex;
  align-items: center;
`;

const icon2 = document.createElement('img');
icon2.className = 'icon';
icon2.src = './images/icon-clock.svg';
info2.appendChild(icon2);
icon2.style.cssText = `
  margin-right: 0.5rem;
`;

const span = document.createElement('span');
span.innerText = '3 days left';
info2.appendChild(span);

const creatorInfo = document.createElement('div');
creatorInfo.className = 'creator-info';
textContainer.appendChild(creatorInfo);
creatorInfo.style.cssText = `
  display: flex;
  border-top: 1px solid hsl(215, 32%, 27%);
  padding-top: 1rem;
  align-items: center;
`;

const avatar = document.createElement('img');
avatar.className = 'avatar';
avatar.src = './images/image-avatar.png';
creatorInfo.appendChild(avatar);
avatar.style.cssText = `
  border: 1px solid hsl(0, 0%, 100%);
  border-radius: 50%;
  width: 2rem;
  height: auto;
  margin-right: 1rem;
`;

const creatorText = document.createElement('p');
creatorText.className = 'creator-text';
creatorText.innerText = 'Creation of ';
creatorInfo.appendChild(creatorText);
creatorText.style.cssText = `
  font-weight: 300;
`;

const creatorName = document.createElement('span');
creatorName.className = 'creator-name';
creatorName.innerText = 'Jules Wyvern';
creatorText.appendChild(creatorName);
creatorName.style.cssText = `
  color: hsl(0, 0%, 100%);
`;

alert('Я оцениваю свою работу на 110 баллов');
