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