import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from 'axios';

const AxiosEx = () => {
    const [bookArray, setBookArray] = useState([]);

    const fetchBooks = async () => {
        const options = {
            method: 'GET',
            url: 'https://hapi-books.p.rapidapi.com/month/2024/3',
            headers: {
                'x-rapidapi-key': 'c3bfc57163mshe3e68b1a54ea4adp147dabjsn29dc6b3ea246',
                'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            setBookArray(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useLayoutEffect(() => {
        console.log("Use layout Effect")
    }, [])
    useEffect(() => {
        // fetchBooks();
        console.log("Use Effect");
    }, [])
    return (
        <>
            <div>
                <h1 className='text-2xl text-bold text-center'> Books </h1>
                <div className='flex flex-wrap justify-center'>
                    {
                        bookArray.map((book, index) => (
                            <div className='w-1/4 m-2 p-2 bg-gray-200 rounded-md' key={index}>
                                <p> Book Name : {book.name} </p>
                                <img src={book.cover} alt="" width={200} height={200} />
                                <p> Rating: {book.rating} </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AxiosEx