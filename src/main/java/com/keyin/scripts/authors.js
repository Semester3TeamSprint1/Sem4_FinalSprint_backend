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