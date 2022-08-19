import { useAtom } from 'jotai';
import { incrementCountAtom } from './atoms';

export const IncrementButton  = () => {
    const [,increment] = useAtom(incrementCountAtom)
    return (
        <div>
            <button onClick={increment}>Increment</button>
        </div>
    )
}