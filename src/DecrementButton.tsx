import { decrementCountAtom } from "./atoms"
import { useAtom } from 'jotai';

export const DecrementButton = () => {
    const [,decrement]  = useAtom(decrementCountAtom)
    return (
        <div>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}