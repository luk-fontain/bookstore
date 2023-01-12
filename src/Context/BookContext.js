import React, { useState, createContext } from 'react'
export const BookContext = createContext();

export const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "Harry Potter",
            author: "JK Rowling"
        },
        {
            id: 2,
            title: "Lord of the rings",
            author: "JRR Tolkien"
        },
        {
            id: 3,
            title: "Infinite Jest",
            author: "David Foster Wallace"
        }
    ])
    return (
        <div>
            <BookContext.Provider value={[books, setBooks]} >
                {props.children}
            </ BookContext.Provider>
        </div>
    )
}
