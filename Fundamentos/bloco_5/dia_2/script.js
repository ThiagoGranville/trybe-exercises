h1Title = document.createElement('h1');
h1Title.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1Title);

mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse necessitatibus vitae hic quibusdam deleniti consectetur, totam quasi quae reprehenderit excepturi, blanditiis quod fugiat accusamus nulla, temporibus at cupiditate. Placeat, eveniet.';
centerContent.appendChild(paragraph);

leftContent = document.createElement('div');
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);

rightContent = document.createElement('div');
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
leftContent.appendChild(image);

