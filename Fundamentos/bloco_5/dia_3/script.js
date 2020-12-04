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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const days = document.querySelector('#days');

for (let day of dezDaysList) {
 const daysItem = document.createElement('li');
  daysItem.className = 'day'
  daysItem.innerText = day;

  if (day === 24 || day === 25 || day === 31) {
    daysItem.className += ' holiday'
  } 
  
  if (day === 4 || day === 11 || day === 18 || day === 25) {
    daysItem.className += ' friday'
  }

  days.appendChild(daysItem);
}

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

  holidayButton.addEventListener('click', function () {
    for (const holiday of holidays) {
      if (holiday.style.backgroundColor === 'orange') {
        holiday.style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holiday.style.backgroundColor = 'orange';
      }
    }
  });
}

createClickEventForHolidayButton();