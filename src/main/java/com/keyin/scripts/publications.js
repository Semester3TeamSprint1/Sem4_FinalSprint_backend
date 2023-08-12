const publications = [
    {
        "id": 1,
        "type": "Hardcover"
    },
    {
        "id": 2,
        "type": "Paperback"
    },
    {
        "id": 3,
        "type": "Audiobook"
    },
    {
        "id": 4,
        "type": "Ebook"
    }
];

// Function to send a POST request for a single platform
function createPublication(publication) {
    pm.sendRequest({
        url: 'http://localhost:8080/publications', // Replace this with your API endpoint for creating publications
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(publication)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Publication created:', publication);
        }
    });
}

// Loop through the publications array and call createPublication for each one
for (let i = 0; i < publications.length; i++) {
    createPublication(publications[i]);
}

//TODO: This is the second list.
const publications = [
    {
        "id": 1,
        "type": "Hardcover",
        "books": [1, 10, 18, 19, 25, 27, 29, 34, 37]
    },
    {
        "id": 2,
        "type": "Paperback",
        "books": [2, 5, 10, 11, 14, 15, 29, 39, 40]
    },
    {
        "id": 3,
        "type": "Audiobook",
        "books": [3, 6, 7, 8, 13, 15, 17, 20, 31]
    },
    {
        "id": 4,
        "type": "Ebook",
        "books": [4, 5, 8, 9, 10, 11, 14, 15, 16, 18, 25, 27, 29, 36, 39, 40]
    }
];

// Function to send a POST request for a single platform
function createPublication(publication) {
    pm.sendRequest({
        url: 'http://localhost:8080/publication', // Replace this with your API endpoint for creating publications
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(publication)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Publication created:', publication);
        }
    });
}

// Loop through the publications array and call createPublication for each one
for (let i = 0; i < publications.length; i++) {
    createPublication(publications[i]);
}