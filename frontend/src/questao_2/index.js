import Comp1 from './comp1'
import Comp2 from './comp2'
import { Questao2Provider } from './Contexts/Questao2Context'

function Questao2() {
  return (
    <Questao2Provider>
      <h1>Questão 2</h1>
      <Comp1 />
      <Comp2 />
    </Questao2Provider>
  );
}

export default Questao2;
