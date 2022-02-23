import {createContext} from 'react'

const itemContext = createContext({
    name:[],
    setName: () => {}
})

export default itemContext