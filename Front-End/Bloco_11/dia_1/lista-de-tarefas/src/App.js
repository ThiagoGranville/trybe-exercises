
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Estudar React', 'Preencher o forms', 'Fazer a janta', 'Ir para o fechamento da aula'];

function App() {
  return (
    <ul>{tarefas.map(tarefa => task(tarefa))}</ul>
  );
}

export default App;
