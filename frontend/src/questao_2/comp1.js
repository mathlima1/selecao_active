import { useContext } from "react";
import { Questao2Context } from './Contexts/Questao2Context'

function Comp1() {
  const { texto } = useContext(Questao2Context)

  return (
    <div>
      {texto ? texto : "Digite para alterar"}
    </div>

  );
}

export default Comp1;
