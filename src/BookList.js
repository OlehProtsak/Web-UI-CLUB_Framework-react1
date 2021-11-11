import React from 'react'

function BookList(props) {
    const { img, title, author } = props;
    return (
        <article>
            <img src={img} width='250px' height='300px' />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>

    )
}

export default BookList
