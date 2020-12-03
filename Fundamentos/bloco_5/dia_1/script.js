/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
*/

//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeText() {
       let paragraph = document.getElementsByTagName('p')[1];
       paragraph.innerText = 'Me vejo trabalhando com o que gosto e fazendo as pessoas a minha volta felizes.';
}
changeText();
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeMainRectangleColor() {
       let mainRectangle = document.getElementsByClassName('main-content')[0];
       mainRectangle.style.backgroundColor = 'rgb(76,164,109)';
}
changeMainRectangleColor();
//  Crie uma função que mude a cor do quadrado vermelho para branco.
function changeCenterRectangleColor() {
       let centerRectangle = document.getElementsByClassName('center-content')[0];
       centerRectangle.style.backgroundColor = 'white';
}
changeCenterRectangleColor();
//  Crie uma função que corrija o texto da tag <h1>.
function changeMainTitleText() {
  let mainTitle = document.getElementsByClassName('title')[0];
  mainTitle.innerText = 'Exercício 5.1 - JavaScript';
}
changeMainTitleText();
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function changeTextToUpperCase() {
       let defaultText = document.getElementsByTagName('p')[0];
       defaultText.innerText = defaultText.innerText.toUpperCase();
}
changeTextToUpperCase();
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showParagraphsOnConsole() {
       let paragraphs = document.getElementsByTagName('p');
       for(let index = 0; index < paragraphs.length; index += 1){
              console.log(paragraphs[index].innerText);
       }
}
showParagraphsOnConsole();
       
