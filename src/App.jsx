import RandomPokemon from './RandomPokemon';
import Greeter from './Greeter';
import Die from "./Die";
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import './App.css';

function App() {
  return (
    <div>
      <RandomPokemon />
      <Heading color="magenta" text="welcome!" fontSize="20px" />
      <Heading color="teal" text="Bye!" fontsize="48" />

      <Die numSides={20} />
      <Die numSides={5} />
      <Die numSides={6} />

      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ListPicker values={[1, 2, 3]} />

      <Greeter person="Bill" />
      <Greeter person="Ted" from="Colt" />
      <Greeter from="Elton" />

      <ColorList colors={["red", "pink", "purple", "teal", "black", "green"]} />
      <ColorList colors={["magenta", "olive", "orangered", "slategrey"]} />

      <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍌" val2="🍒" val3="🍌" />
    </div>
  );
}

export default App;
