import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const Navbar = () => {
    const [books] = useContext(BookContext)
    return (
        <div className="container bg-grey p-3">
            <h4> Anzahl von Büchern: {books.length} </h4>
        </div>
    )
}

export default Navbar

