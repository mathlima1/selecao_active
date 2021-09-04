import { createContext, useState } from 'react'

export const Questao2Context = createContext();

export function Questao2Provider({ children }) {
    const [texto, setTexto] = useState('')

    return (
        <Questao2Context.Provider value={{ texto, setTexto }}>
            {children}
        </Questao2Context.Provider>
    )
}