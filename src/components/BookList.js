import React, { useContext } from 'react';
import { BookContext } from '../Context/BookContext';
import Book from './Book';

const BookList = () => {
    const [books] = useContext(BookContext);

    return (
        <div>
            
            {books.map((item, index) =>
                <Book title={item.title}
                    key={index}
                    author={item.author} />
            )}
        </div>
    )
}

export default BookList