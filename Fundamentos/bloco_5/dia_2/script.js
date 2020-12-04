const h1Title = document.createElement('h1');
h1Title.innerText = 'Exercício 5.2 - JavaScript DOM';
h1Title.className = 'title'
document.body.appendChild(h1Title);

const mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

const centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

const paragraph = document.createElement('p');
paragraph.innerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vitae hic quibusdam deleniti consectetur, totam quasi quae reprehenderit excepturi, blanditiis quod fugiat accusamus nulla, temporibus at cupiditate. Placeat, eveniet.';
centerContent.appendChild(paragraph);

const leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

const rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);

const list = document.createElement('ul');

const numeros = {
  1: 'Um',
  2: 'Dois',
  3: 'Três',
  4: 'Quatro',
  5: 'Cinco',
  6: 'Seis',
  7: 'Sete',
  8: 'Oito',
  9: 'Nove',
  10: 'Dez',
};

for (let numero in numeros) {
  const listItem = document.createElement('li');
  listItem.innerText = numeros[numero];
  list.appendChild(listItem);
}
rightContent.appendChild(list);

for (let index = 0; index < 3; index += 1) {
  const h3Subtitulo = document.createElement('h3');
  h3Subtitulo.className = 'description'
  mainContent.appendChild(h3Subtitulo);
}

mainContent.removeChild(leftContent);

rightContent.style.marginRight = 'auto';