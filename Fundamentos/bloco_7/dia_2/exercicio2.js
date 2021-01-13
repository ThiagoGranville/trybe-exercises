const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTimeShift = (object, key, value) => object[key] = value;


addTimeShift(lesson2, 'turno', 'manhã');

console.log(lesson2);

const showObjectKeys = object => `As chaves são: ${Object.keys(object)}`;

console.log(showObjectKeys(lesson2));

const showObjectLength = object => `O objeto tem um tamanho de: ${Object.keys(object).length}`;

console.log(showObjectLength(lesson2));

const showObjectValues = (object) => `Esses são os valores do objeto: ${Object.values(object)}`;

console.log(showObjectValues(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

const allStudents = (object) => {
  let totalStudents = 0;

  const arrayLessons = Object.keys(object);

  for (index in arrayLessons) {
    totalStudents += object[arrayLessons[index]].numeroEstudantes;
  }

  return `O número de estudates total é: ${totalStudents}`
}

console.log(allStudents(allLessons));

const showValueFromObject = (object,number) => `O valor é: ${Object.values(object)[number]}`;

console.log(showValueFromObject(lesson1, 0));