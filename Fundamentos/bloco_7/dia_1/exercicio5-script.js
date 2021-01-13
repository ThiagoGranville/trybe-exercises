function countClicks() {
  const button = document.querySelector('#clickButton');
  let clickCount = 0;

  button.addEventListener('click', () => {
    const countInput = document.querySelector('#countInput');
    clickCount += 1;
    console.log(countInput);
    countInput.value = `Contagem de clicks: ${clickCount}`
   
  })
}

countClicks()