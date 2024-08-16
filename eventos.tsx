import React, { useState } from 'react';
import './App.css';
const EventHandlingExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputNameValue, setInputNameValue] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);
  // Função para manipular mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(event.target.value);
  };
  // Função para manipular cliques no botão
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <div>
      <img src='vite.svg' className='animacao'></img>
      <h1>Exemplo de Manipulação de Eventos</h1>
      <div>
        <label htmlFor='inputField'>Digite algo: </label>
        <input
          placeholder='Digite algo'
          type='text'
          id='inputField'
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Você digitou: {inputValue}</p>
      </div>
      <div>
      <label htmlFor='inputNameField'>Digite nome: </label>
        <input
          placeholder='Digite nome'
          type='text'
          id='inputNameField'
          value={inputNameValue}
          onChange={handleInputNameChange}
        />
        <p>Seu nome: {inputNameValue}</p>
      </div>
      <div>
        <button onClick={handleButtonClick}>
          Clique aqui
        </button>
        <p>O botão foi clicado {clickCount} vezes</p>
      </div>
    </div>
  );
};
function App() {
  return (
    <div className='App'>
      <EventHandlingExample />
    </div>
  );
}
export default App;
