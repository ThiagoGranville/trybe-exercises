function populateSelectWithStates() {
  const estados = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goías',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraíma',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins',
  ];

  for (let index = 0; index < estados.length; index += 1) {
    const selectEstados = document.querySelector('#state-field');
    const optionEstado = document.createElement('option');

    optionEstado.textContent = estados[index];
    selectEstados.appendChild(optionEstado);
  }
}

populateSelectWithStates();

function verifyStartDate() {
  const startDateField = document.querySelector('#start-date');

  const startDate = startDateField.value;

  let validate = false;

  const day = parseInt(startDate.slice(0, 2));
  const month = parseInt(startDate.slice(3, 5));
  const year = parseInt(startDate.slice(6, 10));

  if (
    startDate[2] === '/' &&
    startDate[5] === '/' &&
    day > 0 &&
    day <= 31 &&
    month > 0 &&
    month <= 12 &&
    year > 0
  ) {
    validate = true;
  }

  return validate;
}

function sendResume() {
  const sendButton = document.querySelector('#sendButton');

  sendButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (verifyStartDate()) {
      alert('Ok!');
    }
  })
}

sendResume();