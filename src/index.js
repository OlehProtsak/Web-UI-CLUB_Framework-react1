import React from 'react';
import ReactDOM from 'react-dom';
import HomePageBar from './HomePageBar'
import MainHeader from './MainHeader';
import { books } from './books'
import './index.css'
import BookList from './BookList';
import Button from './Button'
import Footer from './Footer'



ReactDOM.render(
  <React.StrictMode>
    <div>
      <div className='container'>
        <HomePageBar />
        <br />
        <MainHeader />
        <section className='book-list'>
          {books.map((book) => {
            return (
              <BookList key={book.id} {...book} />
            )
          })}
        </section>
        <Button />
        <Footer />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

