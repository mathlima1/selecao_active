import { useState } from "react";

function Questao3() {
  const [valor, setValor] = useState('')
  return (
    <div>
      <h1>Questão 3</h1>
      <input value={sessionStorage.getItem('@questao-3/valor')} onChange={event => {
        setValor(event.target.value);
        sessionStorage.setItem('@questao-3/valor', event.target.value);
      }
      } />
    </div>
  );
}

export default Questao3;
