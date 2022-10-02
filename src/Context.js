import React, { useState } from 'react'
import { createContext } from 'react'

export const Search = createContext();



function Context({children}) {
    const [search, setSearch] = useState("")
  return (
    <Search.Provider value={{search, setSearch}}>
    {children}
    </Search.Provider>
  )
}

export default Context