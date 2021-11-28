import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  list-style: none;

  &:hover{
    cursor: pointer;
  };
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {

    state = {
      tarefas: [{
        id: Date.now(), 
        texto: "",
        completa: false,
      }],

      inputValue: "",

      filtro: ""
    };

    componentDidMount() {

      const usuarioLS =  localStorage.getItem("input") || "";
      const pegaChaveTexto = JSON.parse(localStorage.getItem("texto")) || [];
  
      this.setState({inputValue: usuarioLS, tarefas:pegaChaveTexto});
    };

  componentDidUpdate(prevProps, prevState) {

    const novaTarefaCriada = {
      id: Date.now(), 
      texto: "",
      completa: false,
    };

    const copiaNovaTarefa = [... this.state.tarefas, novaTarefaCriada];
    localStorage.setItem("texto", JSON.stringify(copiaNovaTarefa));

    if (prevState.inputValue !== this.state.inputValue) {
      localStorage.setItem("input", this.state.inputValue);
       };

   };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  };

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(), 
      texto: this.state.inputValue, 
      completa: false,
    };

    const copiaDaListaTarefas = [ ...this.state.tarefas ];

    copiaDaListaTarefas.push(novaTarefa);

   this.setState({tarefas: copiaDaListaTarefas});

  };

  selectTarefa = (id) => {

    const listaId = this.state.tarefas.map((novoId) => {
      const copia = {
        ...novoId,
        completa: !novoId.completa
      };
    
        if(id === novoId.id){
          return copia
        } else {
          return novoId
        };
    });

    this.setState({tarefas: listaId});
  };

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value});
  };

  render() {

    const listaFiltrada = this.state.tarefas.filter(tarefa => {

      switch (this.state.filtro) {

        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true

        };
    });

    return (

      <div className="App">

        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>

        <br/>

        <InputsContainer>

          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>

        </InputsContainer>

        <TarefaList>

          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}

        </TarefaList>

      </div>
    )
  }
}

export default App
