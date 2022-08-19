import { decrementCountAtom } from "./atoms"
import { atom } from 'jotai';

const DecrementButton = () => {
    const [,decrement]  = atom(decrementCountAtom)
    return (
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}