import React, { useEffect, useState } from 'react'

const APIEx = () => {
    const [postArray, setPostArray] = useState([]);

    useEffect(() => {
        // fetch code
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const array = await response.json();
            setPostArray(array);
            console.log(array);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <h3> My Posts </h3>
        <table>
            <thead>
                <tr>
                    <th> User ID </th>
                    <th> Id </th>
                    <th> Title </th>
                    <th> Body </th>
                </tr>
            </thead>
            <tbody>
                {
                    postArray.length > 0 ? (
                        postArray.map((post, index) => (
                            <tr key={index}>
                                <td> { post.userId } </td>
                                <td> { post.id } </td>
                                <td> { post.title } </td>
                                <td> { post.body } </td>
                            </tr>
                        ))
                    ) : (
                    <p> No Data Found </p>
                    )
                }
            </tbody>
        </table>
    </>
  )
}

export default APIEx