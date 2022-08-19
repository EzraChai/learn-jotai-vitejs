import { useAtom } from "jotai"
import { countAtom } from "./atoms";
import {DecrementButton} from "./DecrementButton"
import { IncrementButton } from './IncrementButton';
import { UppercaseInput } from "./UppercaseInput";

function App() {
  const [count] = useAtom(countAtom);

  return (
      <div className="App">
        <div>Let's learn Jotai!</div>
        {count}
        <IncrementButton/>
        <DecrementButton/>
        <UppercaseInput/>
    </div>
  )
}

export default App
