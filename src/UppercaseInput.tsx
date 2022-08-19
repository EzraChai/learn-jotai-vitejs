import { useAtom } from 'jotai';
import { textAtom, uppercaseTextAtom } from './text-atoms';
export const UppercaseInput = () => {

    const [text,setText] = useAtom(textAtom)
    const [uppercaseText] = useAtom(uppercaseTextAtom)

    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <br />
            {uppercaseText}
        </>
    )
}