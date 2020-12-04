h1Title = document.createElement('h1');
h1Title.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1Title);

mainContent = document.createElement('div');
mainContent.className = 'main-content';
document.body.appendChild(mainContent);

centerContent = document.createElement('div');
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);