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