import { useAtom } from "jotai"
import { incrementCountAtom } from "./atoms";

function App() {
  const [count, increment] = useAtom(incrementCountAtom);

  return (
    <div className="App">
      <div className="">Let's learn Jotai!</div>
      {count}
      <button onClick={increment}>Add</button>
    </div>
  )
}

export default App
