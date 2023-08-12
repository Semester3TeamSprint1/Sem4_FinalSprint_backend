const books = [
    {
        "id": 1,
        "title": "Harry Potter and the Sorcerer's Stone",
        "datePublished": "1997-06-26",
        "authors": [1],
        "genres": [4, 9],
        "bookPublisher": 1,
        "publications": [1, 2, 3, 4]
    },
    {
        "id": 2,
        "title": "A Game of Thrones",
        "datePublished": "1996-08-06",
        "authors": [2],
        "genres": [4, 5],
        "bookPublisher": 2,
        "publications": [1, 2, 3, 4]
    },
    {
        "id": 3,
        "title": "Twilight",
        "datePublished": "2005-10-05",
        "authors": [3],
        "genres": [3, 9],
        "bookPublisher": 3,
        "publications": [2, 4]
    },
    {
        "id": 4,
        "title": "The Da Vinci Code",
        "datePublished": "2003-03-18",
        "authors": [4],
        "genres": [1, 5],
        "bookPublisher": 4,
        "publications": [4]
    },
    {
        "id": 5,
        "title": "The Hunger Games",
        "datePublished": "2008-09-14",
        "authors": [5],
        "genres": [4, 9, 10],
        "bookPublisher": 5,
        "publications": [2, 4]
    },
    {
        "id": 6,
        "title": "The Fault in Our Stars",
        "datePublished": "2012-01-10",
        "authors": [6],
        "genres": [3, 9],
        "bookPublisher": 6,
        "publications": [3]
    },
    {
        "id": 7,
        "title": "American Gods",
        "datePublished": "2001-06-19",
        "authors": [7],
        "genres": [4, 7],
        "bookPublisher": 1,
        "publications": [3]
    },
    {
        "id": 8,
        "title": "Shatter Me",
        "datePublished": "2011-11-15",
        "authors": [8],
        "genres": [3, 9],
        "bookPublisher": 2,
        "publications": [3]
    },
    {
        "id": 9,
        "title": "The Hate U Give",
        "datePublished": "2017-02-28",
        "authors": [9],
        "genres": [9],
        "bookPublisher": 3,
        "publications": [1, 3]
    },
    {
        "id": 10,
        "title": "Miss Peregrine's Home for Peculiar Children",
        "datePublished": "2011-06-07",
        "authors": [10],
        "genres": [4, 9],
        "bookPublisher": 4,
        "publications": [1, 2, 3]
    },
    {
        "id": 11,
        "title": "Divergent",
        "datePublished": "2011-04-25",
        "authors": [11],
        "genres": [4, 9],
        "bookPublisher": 5,
        "publications": [2, 4]
    },
    {
        "id": 12,
        "title": "Fangirl",
        "datePublished": "2013-09-10",
        "authors": [12],
        "genres": [3, 9],
        "bookPublisher": 6,
        "publications": [1, 3]
    },
    {
        "id": 13,
        "title": "Shadow and Bone",
        "datePublished": "2012-06-05",
        "authors": [13],
        "genres": [4, 10],
        "bookPublisher": 1,
        "publications": [1]
    },
    {
        "id": 14,
        "title": "Legend",
        "datePublished": "2011-11-29",
        "authors": [14],
        "genres": [4, 9],
        "bookPublisher": 2,
        "publications": [1, 2, 3, 4]
    },
    {
        "id": 15,
        "title": "Red Rising",
        "datePublished": "2014-01-28",
        "authors": [15],
        "genres": [4, 8],
        "bookPublisher": 3,
        "publications": [1, 2, 3, 4]
    },
    {
        "id": 16,
        "title": "An Ember in the Ashes",
        "datePublished": "2015-04-28",
        "authors": [16],
        "genres": [4, 9],
        "bookPublisher": 4,
        "publications": [4]
    },
    {
        "id": 17,
        "title": "Nevernight",
        "datePublished": "2016-08-09",
        "authors": [17],
        "genres": [4, 7],
        "bookPublisher": 5,
        "publications": [2]
    },
    {
        "id": 18,
        "title": "A Darker Shade of Magic",
        "datePublished": "2015-02-24",
        "authors": [18],
        "genres": [4, 10],
        "bookPublisher": 6,
        "publications": [1]
    },
    {
        "id": 19,
        "title": "The Martian",
        "datePublished": "2011-09-27",
        "authors": [19],
        "genres": [2],
        "bookPublisher": 1,
        "publications": [1]
    },
    {
        "id": 20,
        "title": "Illuminae",
        "datePublished": "2015-10-20",
        "authors": [20],
        "genres": [2, 4],
        "bookPublisher": 2,
        "publications": [3]
    },
    {
        "id": 25,
        "title": "New Moon",
        "datePublished": "2006-09-06",
        "authors": [3],
        "genres": [3, 9],
        "bookPublisher": 3,
        "publications": [1]
    },
    {
        "id": 27,
        "title": "Angels & Demons",
        "datePublished": "2000-03-28",
        "authors": [4],
        "genres": [1, 5],
        "bookPublisher": 4,
        "publications": [1, 3, 4]
    },
    {
        "id": 29,
        "title": "Catching Fire",
        "datePublished": "2009-09-01",
        "authors": [5],
        "genres": [4, 9, 10],
        "bookPublisher": 5,
        "publications": [1, 2, 3, 4]
    },
    {
        "id": 31,
        "title": "Paper Towns",
        "datePublished": "2008-10-16",
        "authors": [6],
        "genres": [3, 9],
        "bookPublisher": 6,
        "publications": [3]
    },
    {
        "id": 34,
        "title": "Neverwhere",
        "datePublished": "1996-09-16",
        "authors": [7],
        "genres": [4, 7],
        "bookPublisher": 1,
        "publications": [3]
    },
    {
        "id": 36,
        "title": "Ignite Me",
        "datePublished": "2014-02-04",
        "authors": [8],
        "genres": [3, 9],
        "bookPublisher": 2,
        "publications": [4]
    },
    {
        "id": 37,
        "title": "On the Come Up",
        "datePublished": "2019-02-05",
        "authors": [9],
        "genres": [9],
        "bookPublisher": 3,
        "publications": [1]
    },
    {
        "id": 39,
        "title": "Hollow City",
        "datePublished": "2014-01-14",
        "authors": [10],
        "genres": [4, 9],
        "bookPublisher": 4,
        "publications": [2]
    },
    {
        "id": 40,
        "title": "Library of Souls",
        "datePublished": "2015-09-22",
        "authors": [10],
        "genres": [4, 9],
        "bookPublisher": 4,
        "publications": [2]
    }
];
function createBook(book) {
    pm.sendRequest({
        url: 'http://localhost:8080/book',
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(book)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Book created:', book);
        }
    });
}

for (let i = 0; i < books.length; i++) {
    createBook(books[i]);
}