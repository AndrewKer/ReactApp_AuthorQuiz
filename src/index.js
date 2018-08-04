import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';

const authors = [
    {
        name: 'Author 1',
        imageUrl: 'images/authors/author1.jpg',
        imageSource: '',
        books: ['Author Book 1']
    },
    {
        name: 'Author 2',
        imageUrl: 'images/authors/author2.jpg',
        imageSource: '',
        books: ['Author Book 2']
    },
    {
        name: 'Author 3',
        imageUrl: 'images/authors/author3.jpg',
        imageSource: '',
        books: ['Author Book 3']
    },
    {
        name: 'Author 4',
        imageUrl: 'images/authors/author4.jpg',
        imageSource: '',
        books: ['Author Book 4']
    },
    {
        name: 'Author 5',
        imageUrl: 'images/authors/author5.jpg',
        imageSource: '',
        books: ['Author Book 5']
    },
];

function getTurnData(authors) {
    const allBooks = authors.reduce(function (p,c,i) {
        return p.concat(c.books);
    },[]);
    const fourRandomBooks = shuffle(allBooks).slice(0,4);
    const answer = sample(fourRandomBooks);

    return {
        books:fourRandomBooks,
        author: authors.find((author) => 
            author.books.some((title) =>
                title === answer))
    }

};

const state = {
    turnData: getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
