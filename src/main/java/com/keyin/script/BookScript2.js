const books = [
  {"id": 1, "title": "The Alchemist", "author": "Paulo Coelho", "genre": "Fiction", "publisher": "HarperOne", "publication": "Ebook"},
  {"id": 2, "title": "1984", "author": "George Orwell", "genre": "Dystopian", "publisher": "Signet Classics", "publication": "Ebook"},
  {"id": 3, "title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 4, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Classic Fiction", "publisher": "Scribner", "publication": "Ebook"},
  {"id": 5, "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Fiction", "publisher": "Harper Perennial Modern Classics", "publication": "Ebook"},
  {"id": 6, "title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Fantasy", "publisher": "Mariner Books", "publication": "Paperback"},
  {"id": 7, "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling", "genre": "Fantasy", "publisher": "Scholastic", "publication": "Paperback"},
  {"id": 8, "title": "The Catcher in the Rye", "author": "J.D. Salinger", "genre": "Classic Fiction", "publisher": "Little, Brown and Company", "publication": "Paperback"},
  {"id": 9, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", "genre": "Fantasy", "publisher": "Houghton Mifflin Harcourt", "publication": "Hardcover"},
  {"id": 10, "title": "Brave New World", "author": "Aldous Huxley", "genre": "Dystopian", "publisher": "HarperCollins", "publication": "Hardcover"},
  {"id": 11, "title": "Moby-Dick", "author": "Herman Melville", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 12, "title": "The Adventures of Sherlock Holmes", "author": "Arthur Conan Doyle", "genre": "Mystery", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 13, "title": "Fahrenheit 451", "author": "Ray Bradbury", "genre": "Dystopian", "publisher": "Simon & Schuster", "publication": "Hardcover"},
  {"id": 14, "title": "Jane Eyre", "author": "Charlotte Bronte", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 15, "title": "War and Peace", "author": "Leo Tolstoy", "genre": "Historical Fiction", "publisher": "Vintage Classics", "publication": "Hardcover"},
  {"id": 16, "title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 17, "title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez", "genre": "Magical Realism", "publisher": "Harper Perennial Modern Classics", "publication": "Hardcover"},
  {"id": 18, "title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 19, "title": "Don Quixote", "author": "Miguel de Cervantes", "genre": "Classic Fiction", "publisher": "Vintage Classics", "publication": "Hardcover"},
  {"id": 20, "title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "genre": "Psychological Fiction", "publisher": "Vintage Classics", "publication": "Hardcover"},
  {"id": 21, "title": "Anna Karenina", "author": "Leo Tolstoy", "genre": "Classic Fiction", "publisher": "Vintage Classics", "publication": "Hardcover"},
  {"id": 22, "title": "The Brothers Karamazov", "author": "Fyodor Dostoevsky", "genre": "Classic Fiction", "publisher": "Vintage Classics", "publication": "Hardcover"},
  {"id": 23, "title": "Frankenstein", "author": "Mary Shelley", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 24, "title": "The Odyssey", "author": "Homer", "genre": "Epic Poetry", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 25, "title": "Les Miserables", "author": "Victor Hugo", "genre": "Historical Fiction", "publisher": "Vintage Classics", "publication": "Hardcover"},
  {"id": 26, "title": "The Count of Monte Cristo", "author": "Alexandre Dumas", "genre": "Adventure", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 27, "title": "Wuthering Heights", "author": "Emily Bronte", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 28, "title": "The Iliad", "author": "Homer", "genre": "Epic Poetry", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 29, "title": "Dracula", "author": "Bram Stoker", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 30, "title": "The Divine Comedy", "author": "Dante Alighieri", "genre": "Epic Poetry", "publisher": "Penguin Classics", "publication": "Hardcover"},
  {"id": 31, "title": "The Alchemist", "author": "Paulo Coelho", "genre": "Fiction", "publisher": "HarperOne", "publication": "Audiobooks"},
  {"id": 32, "title": "1984", "author": "George Orwell", "genre": "Dystopian", "publisher": "Signet Classics", "publication": "Audiobooks"},
  {"id": 33, "title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 34, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "genre": "Classic Fiction", "publisher": "Scribner", "publication": "Audiobooks"},
  {"id": 35, "title": "To Kill a Mockingbird", "author": "Harper Lee", "genre": "Fiction", "publisher": "Harper Perennial Modern Classics", "publication": "Audiobooks"},
  {"id": 36, "title": "The Hobbit", "author": "J.R.R. Tolkien", "genre": "Fantasy", "publisher": "Mariner Books", "publication": "Audiobooks"},
  {"id": 37, "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling", "genre": "Fantasy", "publisher": "Scholastic", "publication": "Audiobooks"},
  {"id": 38, "title": "The Catcher in the Rye", "author": "J.D. Salinger", "genre": "Classic Fiction", "publisher": "Little, Brown and Company", "publication": "Audiobooks"},
  {"id": 39, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien", "genre": "Fantasy", "publisher": "Houghton Mifflin Harcourt", "publication": "Audiobooks"},
  {"id": 40, "title": "Brave New World", "author": "Aldous Huxley", "genre": "Dystopian", "publisher": "HarperCollins", "publication": "Audiobooks"},
  {"id": 41, "title": "Moby-Dick", "author": "Herman Melville", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 42, "title": "The Adventures of Sherlock Holmes", "author": "Arthur Conan Doyle", "genre": "Mystery", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 43, "title": "Fahrenheit 451", "author": "Ray Bradbury", "genre": "Dystopian", "publisher": "Simon & Schuster", "publication": "Audiobooks"},
  {"id": 44, "title": "Jane Eyre", "author": "Charlotte Bronte", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 45, "title": "War and Peace", "author": "Leo Tolstoy", "genre": "Historical Fiction", "publisher": "Vintage Classics", "publication": "Audiobooks"},
  {"id": 46, "title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 47, "title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez", "genre": "Magical Realism", "publisher": "Harper Perennial Modern Classics", "publication": "Audiobooks"},
  {"id": 48, "title": "Don Quixote", "author": "Miguel de Cervantes", "genre": "Classic Fiction", "publisher": "Vintage Classics", "publication": "Audiobooks"},
  {"id": 49, "title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "genre": "Psychological Fiction", "publisher": "Vintage Classics", "publication": "Audiobooks"},
  {"id": 50, "title": "Anna Karenina", "author": "Leo Tolstoy", "genre": "Classic Fiction", "publisher": "Vintage Classics", "publication": "Audiobooks"},
  {"id": 51, "title": "The Brothers Karamazov", "author": "Fyodor Dostoevsky", "genre": "Classic Fiction", "publisher": "Vintage Classics", "publication": "Audiobooks"},
  {"id": 52, "title": "Frankenstein", "author": "Mary Shelley", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 53, "title": "The Odyssey", "author": "Homer", "genre": "Epic Poetry", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 54, "title": "Les Miserables", "author": "Victor Hugo", "genre": "Historical Fiction", "publisher": "Vintage Classics", "publication": "Audiobooks"},
  {"id": 55, "title": "The Count of Monte Cristo", "author": "Alexandre Dumas", "genre": "Adventure", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 56, "title": "Wuthering Heights", "author": "Emily Bronte", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 57, "title": "Dracula", "author": "Bram Stoker", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 58, "title": "The Divine Comedy", "author": "Dante Alighieri", "genre": "Epic Poetry", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 59, "title": "Great Expectations", "author": "Charles Dickens", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 60, "title": "The Scarlet Letter", "author": "Nathaniel Hawthorne", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 61, "title": "Walden", "author": "Henry David Thoreau", "genre": "Philosophy", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 62, "title": "The Adventures of Huckleberry Finn", "author": "Mark Twain", "genre": "Adventure", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 63, "title": "The Grapes of Wrath", "author": "John Steinbeck", "genre": "Historical Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 64, "title": "Sense and Sensibility", "author": "Jane Austen", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 65, "title": "Heart of Darkness", "author": "Joseph Conrad", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 66, "title": "A Tale of Two Cities", "author": "Charles Dickens", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 67, "title": "The Picture of Dorian Gray", "author": "Oscar Wilde", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 68, "title": "The Metamorphosis", "author": "Franz Kafka", "genre": "Absurdist Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 69, "title": "Little Women", "author": "Louisa May Alcott", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 70, "title": "Alice's Adventures in Wonderland", "author": "Lewis Carroll", "genre": "Fantasy", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 71, "title": "The Strange Case of Dr. Jekyll and Mr. Hyde", "author": "Robert Louis Stevenson", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 72, "title": "The Call of the Wild", "author": "Jack London", "genre": "Adventure", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 73, "title": "Wuthering Heights", "author": "Emily Bronte", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 74, "title": "Dracula", "author": "Bram Stoker", "genre": "Gothic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 75, "title": "The Divine Comedy", "author": "Dante Alighieri", "genre": "Epic Poetry", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 76, "title": "Great Expectations", "author": "Charles Dickens", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 77, "title": "The Scarlet Letter", "author": "Nathaniel Hawthorne", "genre": "Classic Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 78, "title": "Walden", "author": "Henry David Thoreau", "genre": "Philosophy", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 79, "title": "The Adventures of Huckleberry Finn", "author": "Mark Twain", "genre": "Adventure", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 80, "title": "The Grapes of Wrath", "author": "John Steinbeck", "genre": "Historical Fiction", "publisher": "Penguin Classics", "publication": "Audiobooks"},
  {"id": 81, "title": "Where the Wild Things Are", "author": "Maurice Sendak", "genre": "Children's Fiction", "publisher": "HarperCollins", "publication": "Paperback"},
  {"id": 82, "title": "Charlotte's Web", "author": "E.B. White", "genre": "Children's Fiction", "publisher": "HarperCollins", "publication": "Paperback"},
  {"id": 83, "title": "Matilda", "author": "Roald Dahl", "genre": "Children's Fiction", "publisher": "Puffin Books", "publication": "Paperback"},
  {"id": 84, "title": "The Lion, the Witch and the Wardrobe", "author": "C.S. Lewis", "genre": "Children's Fantasy", "publisher": "HarperCollins", "publication": "Paperback"},
  {"id": 85, "title": "Harry Potter and the Philosopher's Stone", "author": "J.K. Rowling", "genre": "Children's Fantasy", "publisher": "Bloomsbury", "publication": "Paperback"},
  {"id": 86, "title": "Green Eggs and Ham", "author": "Dr. Seuss", "genre": "Children's Fiction", "publisher": "Random House Books for Young Readers", "publication": "Paperback"},
  {"id": 87, "title": "The Very Hungry Caterpillar", "author": "Eric Carle", "genre": "Children's Fiction", "publisher": "Philomel Books", "publication": "Paperback"},
  {"id": 88, "title": "Goodnight Moon", "author": "Margaret Wise Brown", "genre": "Children's Fiction", "publisher": "HarperFestival", "publication": "Paperback"},
  {"id": 89, "title": "Curious George", "author": "H.A. Rey", "genre": "Children's Fiction", "publisher": "HMH Books for Young Readers", "publication": "Paperback"},
  {"id": 90, "title": "The Cat in the Hat", "author": "Dr. Seuss", "genre": "Children's Fiction", "publisher": "Random House Books for Young Readers", "publication": "Paperback"},
  {"id": 91, "title": "Alice's Adventures in Wonderland", "author": "Lewis Carroll", "genre": "Children's Fantasy", "publisher": "Puffin Books", "publication": "Paperback"},
  {"id": 92, "title": "The Wind in the Willows", "author": "Kenneth Grahame", "genre": "Children's Fiction", "publisher": "Penguin Classics", "publication": "Paperback"},
  {"id": 93, "title": "James and the Giant Peach", "author": "Roald Dahl", "genre": "Children's Fiction", "publisher": "Puffin Books", "publication": "Paperback"},
  {"id": 94, "title": "Peter Pan", "author": "J.M. Barrie", "genre": "Children's Fantasy", "publisher": "Penguin Classics", "publication": "Paperback"},
  {"id": 95, "title": "The Velveteen Rabbit", "author": "Margery Williams", "genre": "Children's Fiction", "publisher": "Doubleday Books for Young Readers", "publication": "Paperback"},
  {"id": 96, "title": "Winnie-the-Pooh", "author": "A.A. Milne", "genre": "Children's Fiction", "publisher": "Puffin Books", "publication": "Paperback"},
  {"id": 97, "title": "The Secret Garden", "author": "Frances Hodgson Burnett", "genre": "Children's Fiction", "publisher": "Penguin Classics", "publication": "Paperback"},
  {"id": 98, "title": "The Tale of Peter Rabbit", "author": "Beatrix Potter", "genre": "Children's Fiction", "publisher": "Frederick Warne & Co.", "publication": "Paperback"},
  {"id": 99, "title": "Corduroy", "author": "Don Freeman", "genre": "Children's Fiction", "publisher": "Puffin Books", "publication": "Paperback"},
  {"id": 100, "title": "Where the Sidewalk Ends", "author": "Shel Silverstein", "genre": "Children's Poetry", "publisher": "HarperCollins", "publication": "Paperback"},
  {"id": 101, "title": "Outlander", "author": "Diana Gabaldon", "genre": "Romance", "publisher": "Dell", "publication": "Ebook"},
  {"id": 102, "title": "The Notebook", "author": "Nicholas Sparks", "genre": "Romance", "publisher": "Grand Central Publishing", "publication": "Ebook"},
  {"id": 103, "title": "Twilight", "author": "Stephenie Meyer", "genre": "Romance", "publisher": "Little, Brown and Company", "publication": "Ebook"},
  {"id": 104, "title": "Gone with the Wind", "author": "Margaret Mitchell", "genre": "Romance", "publisher": "Scribner", "publication": "Ebook"},
  {"id": 105, "title": "The Shining", "author": "Stephen King", "genre": "Horror", "publisher": "Doubleday", "publication": "Ebook"},
  {"id": 106, "title": "Dracula", "author": "Bram Stoker", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 107, "title": "Rebecca", "author": "Daphne du Maurier", "genre": "Horror", "publisher": "HarperCollins", "publication": "Ebook"},
  {"id": 108, "title": "Penny Dreadfuls: Sensational Tales of Terror", "author": "Various", "genre": "Horror", "publisher": "Skyhorse", "publication": "Ebook"},
  {"id": 109, "title": "Wuthering Heights", "author": "Emily Bronte", "genre": "Romance", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 110, "title": "Carmilla", "author": "Joseph Sheridan Le Fanu", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 111, "title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Romance", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 112, "title": "The Haunting of Hill House", "author": "Shirley Jackson", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 113, "title": "The Thorn Birds", "author": "Colleen McCullough", "genre": "Romance", "publisher": "Avon", "publication": "Ebook"},
  {"id": 114, "title": "Psycho", "author": "Robert Bloch", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 115, "title": "The Time Traveler's Wife", "author": "Audrey Niffenegger", "genre": "Romance", "publisher": "Harvest Books", "publication": "Ebook"},
  {"id": 116, "title": "Frankenstein", "author": "Mary Shelley", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 117, "title": "Wicked: The Life and Times of the Wicked Witch of the West", "author": "Gregory Maguire", "genre": "Fantasy", "publisher": "HarperCollins", "publication": "Ebook"},
  {"id": 118, "title": "The Silent Patient", "author": "Alex Michaelides", "genre": "Thriller", "publisher": "Celadon Books", "publication": "Ebook"},
  {"id": 119, "title": "The Girl on the Train", "author": "Paula Hawkins", "genre": "Mystery", "publisher": "Riverhead Books", "publication": "Ebook"},
  {"id": 120, "title": "Ghost Story", "author": "Peter Straub", "genre": "Horror", "publisher": "Penguin Books", "publication": "Ebook"},
  {"id": 121, "title": "The Time Traveler's Wife", "author": "Audrey Niffenegger", "genre": "Romance", "publisher": "Harvest Books", "publication": "Ebook"},
  {"id": 122, "title": "The Lovely Bones", "author": "Alice Sebold", "genre": "Drama", "publisher": "Back Bay Books", "publication": "Ebook"},
  {"id": 123, "title": "The Girl with the Dragon Tattoo", "author": "Stieg Larsson", "genre": "Mystery", "publisher": "Knopf", "publication": "Ebook"},
  {"id": 124, "title": "The Haunting of Hill House", "author": "Shirley Jackson", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 125, "title": "The Notebook", "author": "Nicholas Sparks", "genre": "Romance", "publisher": "Grand Central Publishing", "publication": "Ebook"},
  {"id": 126, "title": "The Silence of the Lambs", "author": "Thomas Harris", "genre": "Thriller", "publisher": "St. Martin's Press", "publication": "Ebook"},
  {"id": 127, "title": "Carmilla", "author": "Joseph Sheridan Le Fanu", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 128, "title": "Interview with the Vampire", "author": "Anne Rice", "genre": "Horror", "publisher": "Ballantine Books", "publication": "Ebook"},
  {"id": 129, "title": "The Thorn Birds", "author": "Colleen McCullough", "genre": "Romance", "publisher": "Avon", "publication": "Ebook"},
  {"id": 130, "title": "Misery", "author": "Stephen King", "genre": "Horror", "publisher": "Penguin Books", "publication": "Ebook"},
  {"id": 131, "title": "Pride and Prejudice", "author": "Jane Austen", "genre": "Romance", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 132, "title": "Dracula", "author": "Bram Stoker", "genre": "Horror", "publisher": "Penguin Classics", "publication": "Ebook"},
  {"id": 133, "title": "It", "author": "Stephen King", "genre": "Horror", "publisher": "Viking Press", "publication": "Ebook"},
  {"id": 134, "title": "The Girl on the Train", "author": "Paula Hawkins", "genre": "Mystery", "publisher": "Riverhead Books", "publication": "Ebook"},
  {"id": 135, "title": "Gone with the Wind", "author": "Margaret Mitchell", "genre": "Romance", "publisher": "Scribner", "publication": "Ebook"},
  {"id": 136, "title": "Outlander", "author": "Diana Gabaldon", "genre": "Romance", "publisher": "Dell", "publication": "Ebook"},
  {"id": 137, "title": "Misery", "author": "Stephen King", "genre": "Horror", "publisher": "Penguin Books", "publication": "Ebook"},
  {"id": 138, "title": "The Silence of the Lambs", "author": "Thomas Harris", "genre": "Thriller", "publisher": "St. Martin's Press", "publication": "Ebook"},
  {"id": 139, "title": "Interview with the Vampire", "author": "Anne Rice", "genre": "Horror", "publisher": "Ballantine Books", "publication": "Ebook"},
  {"id": 140, "title": "It", "author": "Stephen King", "genre": "Horror", "publisher": "Viking Press", "publication": "Ebook"}
]

for (var i = 0; i < books.length; i++) {
    pm.sendRequest({
        url: 'http://localhost:8080/books/add', // Update with your API endpoint
        method: 'POST',
        header: { // Use 'headers' instead of 'header'
            'Content-Type': 'application/json'
        },
        body: {
            mode: 'raw',
            raw: JSON.stringify(books[i])
        }
    }, function (err, response) {
        console.log(response.json());
    });
}