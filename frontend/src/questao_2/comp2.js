import { useContext } from "react";
import { Questao2Context } from './Contexts/Questao2Context'

function Comp2() {
  const { texto, setTexto } = useContext(Questao2Context)

  return (
    <div>
      <input value={texto} onChange={event => setTexto(event.target.value)} />
    </div>
  );
}

export default Comp2;
