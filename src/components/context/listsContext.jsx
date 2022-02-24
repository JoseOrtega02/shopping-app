import {createContext} from 'react';

const listContext = createContext({
    list: [],
    setList:() => {}
})

export default listContext;