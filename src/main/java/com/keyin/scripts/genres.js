const genres = [
    {
        "id": 1,
        "type": "Mystery"
    },
    {
        "id": 2,
        "type": "Science Fiction"
    },
    {
        "id": 3,
        "type": "Romance"
    },
    {
        "id": 4,
        "type": "Fantasy"
    },
    {
        "id": 5,
        "type": "Thriller"
    },
    {
        "id": 6,
        "type": "Historical Fiction"
    },
    {
        "id": 7,
        "type": "Horror"
    },
    {
        "id": 8,
        "type": "Adventure"
    },
    {
        "id": 9,
        "type": "Young Adult"
    },
    {
        "id": 10,
        "type": "Dystopian"
    }
    ,
    {
        "id": 11,
        "type": "Comedy"
    },
    {
        "id": 12,
        "type": "Crime"
    },
    {
        "id": 13,
        "type": "Biography"
    },
    {
        "id": 14,
        "type": "Self-Help"
    },
    {
        "id": 15,
        "type": "Science"
    },
    {
        "id": 16,
        "type": "Non-Fiction"
    },
    {
        "id": 17,
        "type": "Cooking"
    },
    {
        "id": 18,
        "type": "Travel"
    },
    {
        "id": 19,
        "type": "Poetry"
    },
    {
        "id": 20,
        "type": "Graphic Novel"
    }
];

function createGenre(genre) {
    pm.sendRequest({
        url: 'http://localhost:8080/genre', // Replace this with your API endpoint for creating publications
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(genre)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Genre created:', genre);
        }
    });
}

// Loop through the genres array and call createGenre for each one
for (let i = 0; i < genres.length; i++) {
    createGenre(genres[i]);
}

//TODO: This is the second list.
const genres = [
    {
        "id": 1,
        "type": "Mystery",
        "books": [4, 27]
    },
    {
        "id": 2,
        "type": "Science Fiction",
        "books": [19, 20]
    },
    {
        "id": 3,
        "type": "Romance",
        "books": [3, 6, 31]
    },
    {
        "id": 4,
        "type": "Fantasy",
        "books": [1, 2, 5, 7, 13, 14, 15, 16, 17, 18, 39, 40]
    },
    {
        "id": 5,
        "type": "Thriller",
        "books": [4, 27]
    },
    {
        "id": 6,
        "type": "Historical Fiction",
        "books": [1, 7, 13, 34]
    },
    {
        "id": 7,
        "type": "Horror",
        "books": [7, 17]
    },
    {
        "id": 8,
        "type": "Adventure",
        "books": [14, 15]
    },
    {
        "id": 9,
        "type": "Young Adult",
        "books": [1, 3, 5, 6, 8, 11, 12, 14, 15, 16, 18, 27, 29, 31, 36, 37, 39, 40]
    },
    {
        "id": 10,
        "type": "Dystopian",
        "books": [5, 13, 18, 39, 40]
    },
    {
        "id": 11,
        "type": "Comedy",
        "books": []
    },
    {
        "id": 12,
        "type": "Crime",
        "books": []
    },
    {
        "id": 13,
        "type": "Biography",
        "books": [9]
    },
    {
        "id": 14,
        "type": "Self-Help",
        "books": []
    },
    {
        "id": 15,
        "type": "Science",
        "books": []
    },
    {
        "id": 16,
        "type": "Non-Fiction",
        "books": []
    },
    {
        "id": 17,
        "type": "Cooking",
        "books": []
    },
    {
        "id": 18,
        "type": "Travel",
        "books": []
    },
    {
        "id": 19,
        "type": "Poetry",
        "books": []
    },
    {
        "id": 20,
        "type": "Graphic Novel",
        "books": []
    }
];

function createGenre(genre) {
    pm.sendRequest({
        url: 'http://localhost:8080/genre', // Replace this with your API endpoint for creating publications
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(genre)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Genre created:', genre);
        }
    });
}

// Loop through the genres array and call createGenre for each one
for (let i = 0; i < genres.length; i++) {
    createGenre(genres[i]);
}