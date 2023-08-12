const publishers = [
  {
    "id": 1,
    "name": "Penguin Random House"
  },
  {
    "id": 2,
    "name": "HarperCollins Publishers"
  },
  {
    "id": 3,
    "name": "Simon & Schuster"
  },
  {
    "id": 4,
    "name": "Macmillan Publishers"
  },
  {
    "id": 5,
    "name": "Hachette Book Group"
  },
  {
    "id": 6,
    "name": "Scholastic Corporation"
  },
  {
    "id": 7,
    "name": "Wiley"
  },
  {
    "id": 8,
    "name": "Oxford University Press"
  },
  {
    "id": 9,
    "name": "Pearson"
  },
  {
    "id": 10,
    "name": "Bloomsbury Publishing"
  },
  {
    "id": 11,
    "name": "Harlequin"
  },
  {
    "id": 12,
    "name": "Houghton Mifflin Harcourt"
  },
  {
    "id": 13,
    "name": "SAGE Publications"
  },
  {
    "id": 14,
    "name": "Cambridge University Press"
  },
  {
    "id": 15,
    "name": "Alfred A. Knopf"
  },
  {
    "id": 16,
    "name": "Farrar, Straus and Giroux"
  },
  {
    "id": 17,
    "name": "Princeton University Press"
  },
  {
    "id": 18,
    "name": "Hogan Press"
  },
  {
    "id": 19,
    "name": "Puffin Books"
  },
  {
    "id": 20,
    "name": "Chronicle Books"
  }
  // Add more publishers as needed
];

function createPublisher(publisher) {
    pm.sendRequest({
        url: 'http://localhost:8080/publisher', // Replace this with your API endpoint for creating publications
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(publisher)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Publisher created:', publisher);
        }
    });
}

// Loop through the publishers array and call createPublisher for each one
for (let i = 0; i < publishers.length; i++) {
    createPublisher(publishers[i]);
}

//TODO: This is the second list.
const publishers = [
  {
    "id": 1,
    "name": "Penguin Random House",
    "books": [
      1, 7, 13, 14, 15, 19, 34
    ]
  },
  {
    "id": 2,
    "name": "HarperCollins Publishers",
    "books": [
      2, 8, 20, 29, 36
    ]
  },
  {
    "id": 3,
    "name": "Simon & Schuster",
    "books": [
      3, 9, 25, 37
    ]
  },
  {
    "id": 4,
    "name": "Macmillan Publishers",
    "books": [
      4, 10, 18, 39, 40
    ]
  },
  {
    "id": 5,
    "name": "Hachette Book Group",
    "books": [
      5, 11, 17
    ]
  },
  {
    "id": 6,
    "name": "Scholastic Corporation",
    "books": [
      6, 12
    ]
  },
  {
    "id": 7,
    "name": "Wiley",
    "books": [
      16
    ]
  },
  // ... Add more publishers as needed
];

function createPublisher(publisher) {
    pm.sendRequest({
        url: 'http://localhost:8080/publisher', // Replace this with your API endpoint for creating publications
        method: 'POST',
        header: [
        { key: 'Content-Type', value: 'application/json' }
    ],
        body: {
            mode: 'raw',
            raw: JSON.stringify(publisher)
        }
    }, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log('Publisher created:', publisher);
        }
    });
}

// Loop through the publishers array and call createPublisher for each one
for (let i = 0; i < publishers.length; i++) {
    createPublisher(publishers[i]);
}
