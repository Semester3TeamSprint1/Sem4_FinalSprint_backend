const authors = [
  {
    "id": 1,
    "name": "J.K. Rowling",
    "dob": "1965-07-31"
  },
  {
    "id": 2,
    "name": "George R.R. Martin",
    "dob": "1948-09-20"
  },
  {
    "id": 3,
    "name": "Stephenie Meyer",
    "dob": "1973-12-24"
  },
  {
    "id": 4,
    "name": "Dan Brown",
    "dob": "1964-06-22"
  },
  {
    "id": 5,
    "name": "Suzanne Collins",
    "dob": "1962-08-10"
  },
  {
    "id": 6,
    "name": "John Green",
    "dob": "1977-08-24"
  },
  {
    "id": 7,
    "name": "Neil Gaiman",
    "dob": "1960-11-10"
  },
  {
    "id": 8,
    "name": "Tahereh Mafi",
    "dob": "1988-03-16"
  },
  {
    "id": 9,
    "name": "Angie Thomas",
    "dob": "1988-09-20"
  },
  {
    "id": 10,
    "name": "Ransom Riggs",
    "dob": "1979-02-03"
  },
  {
    "id": 11,
    "name": "Veronica Roth",
    "dob": "1988-08-19"
  },
  {
    "id": 12,
    "name": "Rainbow Rowell",
    "dob": "1973-02-24"
  },
  {
    "id": 13,
    "name": "Leigh Bardugo",
    "dob": "1975-04-06"
  },
  {
    "id": 14,
    "name": "Marie Lu",
    "dob": "1984-07-11"
  },
  {
    "id": 15,
    "name": "Pierce Brown",
    "dob": "1988-01-28"
  },
  {
    "id": 16,
    "name": "Sabaa Tahir",
    "dob": "1983-06-01"
  },
  {
    "id": 17,
    "name": "Jay Kristoff",
    "dob": "1973-11-11"
  },
  {
    "id": 18,
    "name": "V.E. Schwab",
    "dob": "1977-07-07"
  },
  {
    "id": 19,
    "name": "Andy Weir",
    "dob": "1972-06-16"
  },
  {
    "id": 20,
    "name": "Amie Kaufman",
    "dob": "1986-01-20"
  }
];

function createAuthor(author) {
    pm.sendRequest({
        url: 'http://localhost:8080/author', // Replace this with your API endpoint for creating publications
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(author)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Author created:', author);
        }
    });
}

// Loop through the authors array and call createAuthor for each one
for (let i = 0; i < authors.length; i++) {
    createAuthor(authors[i]);
}

//TODO: This is the second list.
const authors = [
  {
    "id": 1,
    "name": "J.K. Rowling",
    "dob": "1965-07-31",
    "books": [1, 19, 27] // IDs of books authored by J.K. Rowling
  },
  {
    "id": 2,
    "name": "George R.R. Martin",
    "dob": "1948-09-20",
    "books": [2, 39, 40] // IDs of books authored by George R.R. Martin
  },
  {
    "id": 3,
    "name": "Stephenie Meyer",
    "dob": "1973-12-24",
    "books": [3, 25] // IDs of books authored by Stephenie Meyer
  },
  {
    "id": 4,
    "name": "Dan Brown",
    "dob": "1964-06-22",
    "books": [4, 27] // IDs of books authored by Dan Brown
  },
  {
    "id": 5,
    "name": "Suzanne Collins",
    "dob": "1962-08-10",
    "books": [5, 29] // IDs of books authored by Suzanne Collins
  },
  {
    "id": 6,
    "name": "John Green",
    "dob": "1977-08-24",
    "books": [6, 31] // IDs of books authored by John Green
  },
  {
    "id": 7,
    "name": "Neil Gaiman",
    "dob": "1960-11-10",
    "books": [7, 34] // IDs of books authored by Neil Gaiman
  },
  {
    "id": 8,
    "name": "Tahereh Mafi",
    "dob": "1988-03-16",
    "books": [8, 36] // IDs of books authored by Tahereh Mafi
  },
  {
    "id": 9,
    "name": "Angie Thomas",
    "dob": "1988-09-20",
    "books": [9, 37] // IDs of books authored by Angie Thomas
  },
  {
    "id": 10,
    "name": "Ransom Riggs",
    "dob": "1979-02-03",
    "books": [10, 39, 40] // IDs of books authored by Ransom Riggs
  },
  {
    "id": 11,
    "name": "Veronica Roth",
    "dob": "1988-08-19",
    "books": [11] // IDs of books authored by Veronica Roth
  },
  {
    "id": 12,
    "name": "Rainbow Rowell",
    "dob": "1973-02-24",
    "books": [12] // IDs of books authored by Rainbow Rowell
  },
  {
    "id": 13,
    "name": "Leigh Bardugo",
    "dob": "1975-04-06",
    "books": [13] // IDs of books authored by Leigh Bardugo
  },
  {
    "id": 14,
    "name": "Marie Lu",
    "dob": "1984-07-11",
    "books": [14] // IDs of books authored by Marie Lu
  },
  {
    "id": 15,
    "name": "Pierce Brown",
    "dob": "1988-01-28",
    "books": [15] // IDs of books authored by Pierce Brown
  },
  {
    "id": 16,
    "name": "Sabaa Tahir",
    "dob": "1983-06-01",
    "books": [16] // IDs of books authored by Sabaa Tahir
  },
  {
    "id": 17,
    "name": "Jay Kristoff",
    "dob": "1973-11-11",
    "books": [17] // IDs of books authored by Jay Kristoff
  },
  {
    "id": 18,
    "name": "V.E. Schwab",
    "dob": "1977-07-07",
    "books": [18] // IDs of books authored by V.E. Schwab
  },
  {
    "id": 19,
    "name": "Andy Weir",
    "dob": "1972-06-16",
    "books": [19] // IDs of books authored by Andy Weir
  },
  {
    "id": 20,
    "name": "Amie Kaufman",
    "dob": "1986-01-20",
    "books": [20] // IDs of books authored by Amie Kaufman
  }
];
];

function createAuthor(author) {
    pm.sendRequest({
        url: 'http://localhost:8080/author',
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(author)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Author created:', author);
        }
    });
}

for (let i = 0; i < authors.length; i++) {
    createAuthor(authors[i]);
}