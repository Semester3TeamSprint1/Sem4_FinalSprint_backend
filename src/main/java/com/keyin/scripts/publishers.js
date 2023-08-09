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