import { useState } from 'react'

export default function useToggleHook( comp, visibility = false) {

 const [display, setdisplay] = useState( ()=> visibility);

    return [ visibility ? comp: null, ()=> setdisplay( v => !v)]
}
