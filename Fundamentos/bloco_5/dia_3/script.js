function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();


function renderDaysOnCalendar() {
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.querySelector('#days');
  for (let day of dezDaysList) {
    const daysItem = document.createElement('li');
    daysItem.className = 'day';
    daysItem.innerText = day;

    if (day === 24 || day === 25 || day === 31) {
      daysItem.className += ' holiday';
    }

    if (day === 4 || day === 11 || day === 18 || day === 25) {
      daysItem.className += ' friday';
    }

    days.appendChild(daysItem);
  }
}

renderDaysOnCalendar();

function createHolidayButton (string) {
const holidayButton = document.createElement('button');
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday';

const buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(holidayButton);
}

createHolidayButton('Feriados');

function createClickEventForHolidayButton() {
  const holidayButton = document.querySelector('#btn-holiday');
  const holidays = document.querySelectorAll('.holiday');

  holidayButton.addEventListener('click', function() {
    for (let holiday of holidays) {
      if (holiday.style.backgroundColor === 'orange') {
        holiday.style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday.style.backgroundColor = 'orange';
      }
    }
  });
}

createClickEventForHolidayButton();

function createFridayButton(string) {
  const fridayButton = document.createElement('button');
  fridayButton.innerText = string;
  fridayButton.id = 'btn-friday';

  const buttonContainer = document.querySelector('.buttons-container');
  buttonContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

function createClickEventForFridayButton() {
  const fridayButton = document.querySelector('#btn-friday');
  const fridays = document.querySelectorAll('.friday');
  const fridaysValue = [];
 
  fridayButton.addEventListener('click', function () {
    for (let index = 0; index < fridays.length; index += 1) {
      fridaysValue.push(fridays[index].innerText);
      if (fridays[index].innerText !== 'SEXTOU!') {
        fridays[index].innerText = 'SEXTOU!';
      } else {
        fridays[index].innerText = fridaysValue[index];
      }
    }
  });
}

createClickEventForFridayButton();

function dayMouseOverZoom () {
  const days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  })
}

dayMouseOverZoom();

function dayMouseOut() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  });
}

dayMouseOut();

function addNewAssignment(string) {
  const myTasks = document.querySelector('.my-tasks');
  const task = document.createElement('span');

  task.innerText = string;
  myTasks.appendChild(task);
}

addNewAssignment("Cozinhar");

function addColorLegend(color) {
  const myTasks = document.querySelector('.my-tasks');
  const colorLegend = document.createElement('div');
  colorLegend.className = 'task';

  colorLegend.style.backgroundColor = color;
  myTasks.appendChild(colorLegend);
} 

addColorLegend("cyan");