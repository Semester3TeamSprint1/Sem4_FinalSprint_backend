const books = [
  {
    "id": 1,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "publisher": "HarperOne",
    "publication": "Ebook"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "publisher": "Signet Classics",
    "publication": "Ebook"
  },
  {
    "id": 3,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Classic Fiction",
    "publisher": "Penguin Classics",
    "publication": "Ebook"
  },
  {
    "id": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic Fiction",
    "publisher": "Scribner",
    "publication": "Ebook"
  },
  {
    "id": 5,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "publisher": "Harper Perennial Modern Classics",
    "publication": "Ebook"
  },
  {
    "id": 6,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "publisher": "Mariner Books",
    "publication": "Paperback"
  },
  {
    "id": 7,
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "genre": "Fantasy",
    "publisher": "Scholastic",
    "publication": "Paperback"
  },
  {
    "id": 8,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Classic Fiction",
    "publisher": "Little, Brown and Company",
    "publication": "Paperback"
  },
  {
    "id": 9,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "publisher": "Mariner Books",
    "publication": "Paperback"
  },
  {
    "id": 10,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "genre": "Dystopian",
    "publisher": "Harper Perennial Modern Classics",
    "publication": "Paperback"
  },
  {
    "id": 11,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "genre": "Gothic Fiction",
    "publisher": "Penguin Classics",
    "publication": "Hardcover"
  },
  {
    "id": 12,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "genre": "Adventure",
    "publisher": "Penguin Classics",
    "publication": "Hardcover"
  },
  {
    "id": 13,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "genre": "Historical Fiction",
    "publisher": "Vintage Classics",
    "publication": "Hardcover"
  },
  {
    "id": 14,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "genre": "Gothic Fiction",
    "publisher": "Penguin Classics",
    "publication": "Hardcover"
  },
  {
    "id": 15,
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "genre": "Magical Realism",
    "publisher": "Harper Perennial Modern Classics",
    "publication": "Hardcover"
  },
  {
    "id": 16,
    "title": "The Name of the Wind",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy",
    "publisher": "DAW Books",
    "publication": "Hardcover"
  },
  {
    "id": 17,
    "title": "The Girl on the Train",
    "author": "Paula Hawkins",
    "genre": "Mystery",
    "publisher": "Riverhead Books",
    "publication": "Hardcover"
  },
  {
    "id": 18,
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "genre": "Mystery",
    "publisher": "Doubleday",
    "publication": "Hardcover"
  },
  {
    "id": 19,
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "genre": "Mystery",
    "publisher": "Crown Publishing Group",
    "publication": "Hardcover"
  },
  {
    "id": 20,
    "title": "The Road",
    "author": "Cormac McCarthy",
    "genre": "Dystopian",
    "publisher": "Knopf",
    "publication": "Hardcover"
  },
  {
    "id": 21,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "publisher": "HarperOne",
    "publication": "Audiobook"
  },
  {
    "id": 22,
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "publisher": "Signet Classics",
    "publication": "Audiobook"
  },
  {
    "id": 23,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Classic Fiction",
    "publisher": "Penguin Classics",
    "publication": "Audiobook"
  },
  {
    "id": 24,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic Fiction",
    "publisher": "Scribner",
    "publication": "Audiobook"
  },
  {
    "id": 25,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "publisher": "Harper Perennial Modern Classics",
    "publication": "Audiobook"
  },
  {
    "id": 26,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "publisher": "Mariner Books",
    "publication": "Audiobook"
  },
  {
    "id": 27,
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "genre": "Fantasy",
    "publisher": "Scholastic",
    "publication": "Audiobook"
  },
  {
    "id": 28,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Classic Fiction",
    "publisher": "Little, Brown and Company",
    "publication": "Audiobook"
  },
  {
    "id": 29,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "publisher": "Mariner Books",
    "publication": "Audiobook"
  },
  {
    "id": 30,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "genre": "Dystopian",
    "publisher": "Harper Perennial Modern Classics",
    "publication": "Audiobook"
  },
  {
    "id": 31,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "genre": "Gothic Fiction",
    "publisher": "Penguin Classics",
    "publication": "Audiobook"
  },
  {
    "id": 32,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "genre": "Adventure",
    "publisher": "Penguin Classics",
    "publication": "Audiobook"
  },
  {
    "id": 33,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "genre": "Historical Fiction",
    "publisher": "Vintage Classics",
    "publication": "Audiobook"
  },
  {
    "id": 34,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "genre": "Gothic Fiction",
    "publisher": "Penguin Classics",
    "publication": "Audiobook"
  },
  {
    "id": 35,
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "genre": "Magical Realism",
    "publisher": "Harper Perennial Modern Classics",
    "publication": "Audiobook"
  },
  {
    "id": 36,
    "title": "The Name of the Wind",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy",
    "publisher": "DAW Books",
    "publication": "Audiobook"
  },
  {
    "id": 37,
    "title": "The Girl on the Train",
    "author": "Paula Hawkins",
    "genre": "Mystery",
    "publisher": "Riverhead Books",
    "publication": "Audiobook"
  },
  {
    "id": 38,
    "title": "The Da Vinci Code",
    "author": "Dan Brown",
    "genre": "Mystery",
    "publisher": "Doubleday",
    "publication": "Audiobook"
  },
  {
    "id": 39,
    "title": "Gone Girl",
    "author": "Gillian Flynn",
    "genre": "Mystery",
    "publisher": "Crown Publishing Group",
    "publication": "Audiobook"
  },
  {
    "id": 40,
    "title": "The Road",
    "author": "Cormac McCarthy",
    "genre": "Dystopian",
    "publisher": "Knopf",
    "publication": "Audiobook"
  },
  {
    "id": 41,
    "title": "The Night Circus",
    "author": "Erin Morgenstern",
    "genre": "Fantasy",
    "publisher": "Doubleday",
    "publication": "Hardcover"
  },
  {
    "id": 42,
    "title": "The Handmaid's Tale",
    "author": "Margaret Atwood",
    "genre": "Dystopian",
    "publisher": "Anchor",
    "publication": "Paperback"
  },
  {
    "id": 43,
    "title": "The Hunger Games",
    "author": "Suzanne Collins",
    "genre": "Dystopian",
    "publisher": "Scholastic",
    "publication": "Hardcover"
  },
  {
    "id": 44,
    "title": "The Catch-22",
    "author": "Joseph Heller",
    "genre": "Satire",
    "publisher": "Simon & Schuster",
    "publication": "Paperback"
  },
  {
    "id": 45,
    "title": "The Book Thief",
    "author": "Markus Zusak",
    "genre": "Historical Fiction",
    "publisher": "Alfred A. Knopf",
    "publication": "Hardcover"
  },
  {
    "id": 46,
    "title": "The Maze Runner",
    "author": "James Dashner",
    "genre": "Dystopian",
    "publisher": "Delacorte Press",
    "publication": "Paperback"
  },
  {
    "id": 47,
    "title": "The Road Less Traveled",
    "author": "M. Scott Peck",
    "genre": "Psychology",
    "publisher": "Simon & Schuster",
    "publication": "Paperback"
  },
  {
    "id": 48,
    "title": "The Secret Garden",
    "author": "Frances Hodgson Burnett",
    "genre": "Children's Literature",
    "publisher": "Harper & Brothers",
    "publication": "Hardcover"
  },
  {
    "id": 49,
    "title": "Dune",
    "author": "Frank Herbert",
    "genre": "Science Fiction",
    "publisher": "Chilton Books",
    "publication": "Hardcover"
  },
  {
    "id": 50,
    "title": "The Color Purple",
    "author": "Alice Walker",
    "genre": "Historical Fiction",
    "publisher": "Harcourt Brace Jovanovich",
    "publication": "Paperback"
  },
  {
    "id": 51,
    "title": "The Martian",
    "author": "Andy Weir",
    "genre": "Science Fiction",
    "publisher": "Crown Publishing Group",
    "publication": "Hardcover"
  },
  {
    "id": 52,
    "title": "The Joy Luck Club",
    "author": "Amy Tan",
    "genre": "Fiction",
    "publisher": "G.P. Putnam's Sons",
    "publication": "Paperback"
  },
  {
    "id": 53,
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "genre": "Fiction",
    "publisher": "Riverhead Books",
    "publication": "Hardcover"
  },
  {
    "id": 54,
    "title": "The Time Traveler's Wife",
    "author": "Audrey Niffenegger",
    "genre": "Science Fiction",
    "publisher": "MacAdam/Cage",
    "publication": "Paperback"
  },
  {
    "id": 55,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "genre": "Gothic Fiction",
    "publisher": "Penguin Classics",
    "publication": "Hardcover"
  },
  {
    "id": 56,
    "title": "The Nightingale",
    "author": "Kristin Hannah",
    "genre": "Historical Fiction",
    "publisher": "St. Martin's Press",
    "publication": "Paperback"
  },
  {
    "id": 57,
    "title": "The Goldfinch",
    "author": "Donna Tartt",
    "genre": "Fiction",
    "publisher": "Little, Brown and Company",
    "publication": "Hardcover"
  },
  {
    "id": 58,
    "title": "The Immortal Life of Henrietta Lacks",
    "author": "Rebecca Skloot",
    "genre": "Non-Fiction",
    "publisher": "Crown Publishing Group",
    "publication": "Paperback"
  },
  {
    "id": 59,
    "title": "The Giver",
    "author": "Lois Lowry",
    "genre": "Dystopian",
    "publisher": "Houghton Mifflin",
    "publication": "Hardcover"
  },
  {
    "id": 60,
    "title": "The Shadow of the Wind",
    "author": "Carlos Ruiz Zafón",
    "genre": "Historical Fiction",
    "publisher": "Penguin Books",
    "publication": "Paperback"
  },
  {
    "id": 61,
    "title": "The Help",
    "author": "Kathryn Stockett",
    "genre": "Historical Fiction",
    "publisher": "Putnam",
    "publication": "Hardcover"
  },
  {
    "id": 62,
    "title": "The Glass Castle",
    "author": "Jeannette Walls",
    "genre": "Memoir",
    "publisher": "Scribner",
    "publication": "Paperback"
  },
  {
    "id": 63,
    "title": "The Name of the Rose",
    "author": "Umberto Eco",
    "genre": "Mystery",
    "publisher": "Harcourt Brace Jovanovich",
    "publication": "Hardcover"
  },
  {
    "id": 64,
    "title": "The Three Musketeers",
    "author": "Alexandre Dumas",
    "genre": "Adventure",
    "publisher": "Baudry's European Library",
    "publication": "Paperback"
  },
  {
    "id": 65,
    "title": "The Wind-Up Bird Chronicle",
    "author": "Haruki Murakami",
    "genre": "Magical Realism",
    "publisher": "Knopf",
    "publication": "Hardcover"
  },
  {
    "id": 66,
    "title": "The Brief Wondrous Life of Oscar Wao",
    "author": "Junot Díaz",
    "genre": "Fiction",
    "publisher": "Riverhead Books",
    "publication": "Paperback"
  },
  {
    "id": 67,
    "title": "The Shining",
    "author": "Stephen King",
    "genre": "Horror",
    "publisher": "Doubleday",
    "publication": "Hardcover"
  },
  {
    "id": 68,
    "title": "The Martian Chronicles",
    "author": "Ray Bradbury",
    "genre": "Science Fiction",
    "publisher": "Doubleday",
    "publication": "Paperback"
  },
  {
    "id": 69,
    "title": "The Night Watch",
    "author": "Sarah Waters",
    "genre": "Historical Fiction",
    "publisher": "Virago Press",
    "publication": "Hardcover"
  },
  {
    "id": 70,
    "title": "The Immortalists",
    "author": "Chloe Benjamin",
    "genre": "Fiction",
    "publisher": "G.P. Putnam's Sons",
    "publication": "Paperback"
  },
  {
    "id": 71,
    "title": "The Princess Bride",
    "author": "William Goldman",
    "genre": "Fantasy",
    "publisher": "Harcourt Brace Jovanovich",
    "publication": "Hardcover"
  },
  {
    "id": 72,
    "title": "The Girl with the Dragon Tattoo",
    "author": "Stieg Larsson",
    "genre": "Mystery",
    "publisher": "Norstedts Förlag",
    "publication": "Paperback"
  },
  {
    "id": 73,
    "title": "The Pillars of the Earth",
    "author": "Ken Follett",
    "genre": "Historical Fiction",
    "publisher": "Macmillan",
    "publication": "Hardcover"
  },
  {
    "id": 74,
    "title": "The Road",
    "author": "Cormac McCarthy",
    "genre": "Dystopian",
    "publisher": "Knopf",
    "publication": "Paperback"
  },
  {
    "id": 75,
    "title": "The Graveyard Book",
    "author": "Neil Gaiman",
    "genre": "Fantasy",
    "publisher": "HarperCollins",
    "publication": "Hardcover"
  },
  {
    "id": 76,
    "title": "The Martian",
    "author": "Andy Weir",
    "genre": "Science Fiction",
    "publisher": "Crown Publishing Group",
    "publication": "Paperback"
  },
  {
    "id": 77,
    "title": "The Joy Luck Club",
    "author": "Amy Tan",
    "genre": "Fiction",
    "publisher": "G.P. Putnam's Sons",
    "publication": "Hardcover"
  },
  {
    "id": 78,
    "title": "The Underground Railroad",
    "author": "Colson Whitehead",
    "genre": "Historical Fiction",
    "publisher": "Doubleday",
    "publication": "Paperback"
  },
  {
    "id": 79,
    "title": "The Catch-22",
    "author": "Joseph Heller",
    "genre": "Satire",
    "publisher": "Simon & Schuster",
    "publication": "Hardcover"
  },
  {
    "id": 80,
    "title": "The Night Circus",
    "author": "Erin Morgenstern",
    "genre": "Fantasy",
    "publisher": "Doubleday",
    "publication": "Paperback"
  },
  {
    "id": 81,
    "title": "The Sleeper and the Spindle",
    "author": "Neil Gaiman",
    "genre": "Fantasy",
    "publisher": "HarperCollins",
    "publication": "Ebook"
  },
  {
    "id": 82,
    "title": "Legion",
    "author": "Brandon Sanderson",
    "genre": "Science Fiction",
    "publisher": "Dragonsteel Entertainment",
    "publication": "Ebook"
  },
  {
    "id": 83,
    "title": "The Slow Regard of Silent Things",
    "author": "Patrick Rothfuss",
    "genre": "Fantasy",
    "publisher": "DAW Books",
    "publication": "Ebook"
  },
  {
    "id": 84,
    "title": "Becoming Steve Jobs",
    "author": "Brent Schlender and Rick Tetzeli",
    "genre": "Biography",
    "publisher": "Random House",
    "publication": "Ebook"
  },
  {
    "id": 85,
    "title": "The Martini Shot: A Novella and Stories",
    "author": "George Pelecanos",
    "genre": "Mystery/Crime",
    "publisher": "Little, Brown and Company",
    "publication": "Ebook"
  },
  {
    "id": 86,
    "title": "The Brief Wondrous Life of Oscar Wao (Short Story)",
    "author": "Junot Díaz",
    "genre": "Literary Fiction",
    "publisher": "Riverhead Books",
    "publication": "Ebook"
  },
  {
    "id": 87,
    "title": "In the Tall Grass",
    "author": "Stephen King and Joe Hill",
    "genre": "Horror",
    "publisher": "Scribner",
    "publication": "Ebook"
  },
  {
    "id": 88,
    "title": "The Murders in the Rue Morgue: The Dupin Tales",
    "author": "Edgar Allan Poe",
    "genre": "Mystery",
    "publisher": "Public Domain",
    "publication": "Ebook"
  },
  {
    "id": 89,
    "title": "Halloween Jack and the Devil's Gate",
    "author": "M. Todd Gallowglas",
    "genre": "Fantasy",
    "publisher": "Twilight Times Books",
    "publication": "Ebook"
  },
  {
    "id": 90,
    "title": "The Truth Is a Cave in the Black Mountains",
    "author": "Neil Gaiman",
    "genre": "Fantasy",
    "publisher": "William Morrow",
    "publication": "Ebook"
  },
  {
    "id": 91,
    "title": "The Martian",
    "author": "Andy Weir",
    "genre": "Science Fiction",
    "publisher": "Random House Audio",
    "publication": "Audiobook"
  },
  {
    "id": 92,
    "title": "Born a Crime: Stories from a South African Childhood",
    "author": "Trevor Noah",
    "genre": "Memoir",
    "publisher": "Audible Studios",
    "publication": "Audiobook"
  },
  {
    "id": 93,
    "title": "Harry Potter and the Sorcerer's Stone",
    "author": "J.K. Rowling",
    "genre": "Fantasy",
    "publisher": "Pottermore Publishing",
    "publication": "Audiobook"
  },
  {
    "id": 94,
    "title": "The Girl on the Train",
    "author": "Paula Hawkins",
    "genre": "Mystery/Thriller",
    "publisher": "Penguin Audio",
    "publication": "Audiobook"
  },
  {
    "id": 95,
    "title": "Bossypants",
    "author": "Tina Fey",
    "genre": "Memoir/Humor",
    "publisher": "Hachette Audio",
    "publication": "Audiobook"
  },
  {
    "id": 96,
    "title": "Becoming",
    "author": "Michelle Obama",
    "genre": "Memoir",
    "publisher": "Random House Audio",
    "publication": "Audiobook"
  },
  {
    "id": 97,
    "title": "Educated: A Memoir",
    "author": "Tara Westover",
    "genre": "Memoir",
    "publisher": "Random House Audio",
    "publication": "Audiobook"
  },
  {
    "id": 98,
    "title": "The Night Circus",
    "author": "Erin Morgenstern",
    "genre": "Fantasy",
    "publisher": "Random House Audio",
    "publication": "Audiobook"
  },
  {
    "id": 99,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "publisher": "HarperAudio",
    "publication": "Audiobook"
  },
  {
    "id": 100,
    "title": "Dune",
    "author": "Frank Herbert",
    "genre": "Science Fiction",
    "publisher": "Macmillan Audio",
    "publication": "Audiobook"
  },
  {
      "id": 101,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "publisher": "HarperCollins",
      "publication": "Paperback"
  },
  {
      "id": 102,
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "publisher": "Penguin Books",
      "publication": "Hardcover"
  },
  {
      "id": 103,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 104,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "publisher": "Scribner",
      "publication": "Audiobook"
  },
  {
      "id": 105,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "genre": "Adventure",
      "publisher": "Norton",
      "publication": "Paperback"
  },
  {
      "id": 106,
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "genre": "Science Fiction",
      "publisher": "HarperCollins",
      "publication": "Hardcover"
  },
  {
      "id": 107,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Coming-of-age",
      "publisher": "Little, Brown and Company",
      "publication": "Ebook"
  },
  {
      "id": 108,
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "genre": "Gothic",
      "publisher": "Penguin Classics",
      "publication": "Audiobook"
  },
  {
      "id": 109,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publisher": "Houghton Mifflin",
      "publication": "Paperback"
  },
  {
      "id": 110,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publisher": "Houghton Mifflin",
      "publication": "Hardcover"
  },
  {
      "id": 111,
      "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      "author": "C.S. Lewis",
      "genre": "Fantasy",
      "publisher": "HarperCollins",
      "publication": "Ebook"
  },
  {
      "id": 112,
      "title": "The Hunger Games",
      "author": "Suzanne Collins",
      "genre": "Dystopian",
      "publisher": "Scholastic",
      "publication": "Audiobook"
  },
  {
      "id": 113,
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "genre": "Fantasy",
      "publisher": "Scholastic",
      "publication": "Paperback"
  },
  {
      "id": 114,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": "Fiction",
      "publisher": "HarperOne",
      "publication": "Hardcover"
  },
  {
      "id": 115,
      "title": "Jane Eyre",
      "author": "Charlotte Brontë",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 116,
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "genre": "Dystopian",
      "publisher": "Simon & Schuster",
      "publication": "Audiobook"
  },
  {
      "id": 117,
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "genre": "Gothic",
      "publisher": "Penguin Classics",
      "publication": "Paperback"
  },
  {
      "id": 118,
      "title": "The Handmaid's Tale",
      "author": "Margaret Atwood",
      "genre": "Dystopian",
      "publisher": "Anchor",
      "publication": "Hardcover"
  },
  {
      "id": 119,
      "title": "The Shining",
      "author": "Stephen King",
      "genre": "Horror",
      "publisher": "Doubleday",
      "publication": "Ebook"
  },
  {
      "id": 120,
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "genre": "Science Fiction",
      "publisher": "Del Rey",
      "publication": "Audiobook"
  },
  {
      "id": 121,
      "title": "Gone with the Wind",
      "author": "Margaret Mitchell",
      "genre": "Historical Fiction",
      "publisher": "Scribner",
      "publication": "Paperback"
  },
  {
      "id": 122,
      "title": "Lord of the Flies",
      "author": "William Golding",
      "genre": "Adventure",
      "publisher": "Penguin",
      "publication": "Hardcover"
  },
  {
      "id": 123,
      "title": "A Tale of Two Cities",
      "author": "Charles Dickens",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 124,
      "title": "The Book Thief",
      "author": "Markus Zusak",
      "genre": "Historical Fiction",
      "publisher": "Alfred A. Knopf",
      "publication": "Audiobook"
  },
  {
      "id": 125,
      "title": "Dracula",
      "author": "Bram Stoker",
      "genre": "Gothic",
      "publisher": "Penguin Classics",
      "publication": "Paperback"
  },
  {
      "id": 126,
      "title": "The Giver",
      "author": "Lois Lowry",
      "genre": "Dystopian",
      "publisher": "HMH Books for Young Readers",
      "publication": "Hardcover"
  },
  {
      "id": 127,
      "title": "The Road",
      "author": "Cormac McCarthy",
      "genre": "Post-Apocalyptic",
      "publisher": "Vintage",
      "publication": "Ebook"
  },
  {
      "id": 128,
      "title": "The Count of Monte Cristo",
      "author": "Alexandre Dumas",
      "genre": "Adventure",
      "publisher": "Penguin Classics",
      "publication": "Audiobook"
  },
  {
      "id": 129,
      "title": "The Kite Runner",
      "author": "Khaled Hosseini",
      "genre": "Fiction",
      "publisher": "Riverhead Books",
      "publication": "Paperback"
  },
  {
      "id": 130,
      "title": "The Martian",
      "author": "Andy Weir",
      "genre": "Science Fiction",
      "publisher": "Crown Publishing Group",
      "publication": "Hardcover"
  },
  {
      "id": 131,
      "title": "A Game of Thrones",
      "author": "George R.R. Martin",
      "genre": "Fantasy",
      "publisher": "Bantam Books",
      "publication": "Ebook"
  },
  {
      "id": 132,
      "title": "The Old Man and the Sea",
      "author": "Ernest Hemingway",
      "genre": "Classic",
      "publisher": "Scribner",
      "publication": "Audiobook"
  },
  {
      "id": 133,
      "title": "The Night Circus",
      "author": "Erin Morgenstern",
      "genre": "Fantasy",
      "publisher": "Doubleday",
      "publication": "Paperback"
  },
  {
      "id": 134,
      "title": "The Secret Garden",
      "author": "Frances Hodgson Burnett",
      "genre": "Children's",
      "publisher": "Harper & Brothers",
      "publication": "Hardcover"
  },
  {
      "id": 135,
      "title": "The Color Purple",
      "author": "Alice Walker",
      "genre": "Fiction",
      "publisher": "Harcourt Brace Jovanovich",
      "publication": "Ebook"
  },
  {
      "id": 136,
      "title": "Slaughterhouse-Five",
      "author": "Kurt Vonnegut",
      "genre": "Science Fiction",
      "publisher": "Dial Press",
      "publication": "Audiobook"
  },
  {
      "id": 137,
      "title": "A Wrinkle in Time",
      "author": "Madeleine L'Engle",
      "genre": "Science Fiction",
      "publisher": "Farrar, Straus and Giroux",
      "publication": "Paperback"
  },
  {
      "id": 138,
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Hardcover"
  },
  {
      "id": 139,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "genre": "Magical Realism",
      "publisher": "Harper & Row",
      "publication": "Ebook"
  },
  {
      "id": 140,
      "title": "The Jungle Book",
      "author": "Rudyard Kipling",
      "genre": "Children's",
      "publisher": "Macmillan",
      "publication": "Audiobook"
  },
  {
      "id": 141,
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "genre": "Classic",
      "publisher": "Viking Press",
      "publication": "Paperback"
  },
  {
      "id": 142,
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "genre": "Mystery",
      "publisher": "Doubleday",
      "publication": "Hardcover"
  },
  {
      "id": 143,
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "genre": "Children's",
      "publisher": "Reynal & Hitchcock",
      "publication": "Ebook"
  },
  {
      "id": 144,
      "title": "Heart of Darkness",
      "author": "Joseph Conrad",
      "genre": "Classic",
      "publisher": "Blackwood's Magazine",
      "publication": "Audiobook"
  },
  {
      "id": 145,
      "title": "The Name of the Wind",
      "author": "Patrick Rothfuss",
      "genre": "Fantasy",
      "publisher": "DAW Books",
      "publication": "Paperback"
  },
  {
      "id": 146,
      "title": "The Princess Bride",
      "author": "William Goldman",
      "genre": "Fantasy",
      "publisher": "Harcourt Brace Jovanovich",
      "publication": "Hardcover"
  },
  {
      "id": 147,
      "title": "The Call of the Wild",
      "author": "Jack London",
      "genre": "Adventure",
      "publisher": "Macmillan",
      "publication": "Ebook"
  },
  {
      "id": 148,
      "title": "The Girl with the Dragon Tattoo",
      "author": "Stieg Larsson",
      "genre": "Mystery",
      "publisher": "Norstedts Förlag",
      "publication": "Audiobook"
  },
  {
      "id": 149,
      "title": "The Outsiders",
      "author": "S.E. Hinton",
      "genre": "Coming-of-age",
      "publisher": "Viking Press",
      "publication": "Paperback"
  },
  {
      "id": 150,
      "title": "The Odyssey",
      "author": "Homer",
      "genre": "Epic",
      "publisher": "Penguin Classics",
      "publication": "Hardcover"
  },
  {
      "id": 151,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publisher": "Houghton Mifflin",
      "publication": "Paperback"
  },
  {
      "id": 152,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Hardcover"
  },
  {
      "id": 153,
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "genre": "Gothic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 154,
      "title": "Nineteen Eighty-Four",
      "author": "George Orwell",
      "genre": "Dystopian",
      "publisher": "Penguin Books",
      "publication": "Audiobook"
  },
  {
      "id": 155,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Coming-of-age",
      "publisher": "Little, Brown and Company",
      "publication": "Paperback"
  },
  {
      "id": 156,
      "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      "author": "C.S. Lewis",
      "genre": "Fantasy",
      "publisher": "HarperCollins",
      "publication": "Hardcover"
  },
  {
      "id": 157,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "genre": "Fiction",
      "publisher": "HarperOne",
      "publication": "Ebook"
  },
  {
      "id": 158,
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "genre": "Classic",
      "publisher": "Viking Press",
      "publication": "Audiobook"
  },
  {
      "id": 159,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "genre": "Adventure",
      "publisher": "Norton",
      "publication": "Paperback"
  },
  {
      "id": 160,
      "title": "The Shining",
      "author": "Stephen King",
      "genre": "Horror",
      "publisher": "Doubleday",
      "publication": "Hardcover"
  },
  {
      "id": 161,
      "title": "The Hunger Games",
      "author": "Suzanne Collins",
      "genre": "Dystopian",
      "publisher": "Scholastic",
      "publication": "Ebook"
  },
  {
      "id": 162,
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "genre": "Children's",
      "publisher": "Reynal & Hitchcock",
      "publication": "Audiobook"
  },
  {
      "id": 163,
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "genre": "Mystery",
      "publisher": "Doubleday",
      "publication": "Paperback"
  },
  {
      "id": 164,
      "title": "The Road",
      "author": "Cormac McCarthy",
      "genre": "Post-Apocalyptic",
      "publisher": "Vintage",
      "publication": "Hardcover"
  },
  {
      "id": 165,
      "title": "Alice's Adventures in Wonderland",
      "author": "Lewis Carroll",
      "genre": "Children's",
      "publisher": "Macmillan",
      "publication": "Ebook"
  },
  {
      "id": 166,
      "title": "The Old Man and the Sea",
      "author": "Ernest Hemingway",
      "genre": "Classic",
      "publisher": "Scribner",
      "publication": "Audiobook"
  },
  {
      "id": 167,
      "title": "The Handmaid's Tale",
      "author": "Margaret Atwood",
      "genre": "Dystopian",
      "publisher": "Anchor",
      "publication": "Paperback"
  },
  {
      "id": 168,
      "title": "Wuthering Heights",
      "author": "Emily Brontë",
      "genre": "Gothic",
      "publisher": "Penguin Classics",
      "publication": "Hardcover"
  },
  {
      "id": 169,
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "genre": "Gothic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 170,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "genre": "Magical Realism",
      "publisher": "Harper & Row",
      "publication": "Audiobook"
  },
  {
      "id": 171,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "publisher": "Scribner",
      "publication": "Paperback"
  },
  {
      "id": 172,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "genre": "Fantasy",
      "publisher": "Houghton Mifflin",
      "publication": "Hardcover"
  },
  {
      "id": 173,
      "title": "Jane Eyre",
      "author": "Charlotte Brontë",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 174,
      "title": "The Outsiders",
      "author": "S.E. Hinton",
      "genre": "Coming-of-age",
      "publisher": "Viking Press",
      "publication": "Audiobook"
  },
  {
      "id": 175,
      "title": "The Giver",
      "author": "Lois Lowry",
      "genre": "Dystopian",
      "publisher": "HMH Books for Young Readers",
      "publication": "Paperback"
  },
  {
      "id": 176,
      "title": "The Name of the Wind",
      "author": "Patrick Rothfuss",
      "genre": "Fantasy",
      "publisher": "DAW Books",
      "publication": "Hardcover"
  },
  {
      "id": 177,
      "title": "Dracula",
      "author": "Bram Stoker",
      "genre": "Gothic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 178,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "publisher": "HarperCollins",
      "publication": "Audiobook"
  },
  {
      "id": 179,
      "title": "The Call of the Wild",
      "author": "Jack London",
      "genre": "Adventure",
      "publisher": "Macmillan",
      "publication": "Paperback"
  },
  {
      "id": 180,
      "title": "Slaughterhouse-Five",
      "author": "Kurt Vonnegut",
      "genre": "Science Fiction",
      "publisher": "Dial Press",
      "publication": "Hardcover"
  },
  {
      "id": 181,
      "title": "A Wrinkle in Time",
      "author": "Madeleine L'Engle",
      "genre": "Science Fiction",
      "publisher": "Farrar, Straus and Giroux",
      "publication": "Ebook"
  },
  {
      "id": 182,
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Audiobook"
  },
  {
      "id": 183,
      "title": "The Secret Garden",
      "author": "Frances Hodgson Burnett",
      "genre": "Children's",
      "publisher": "Harper & Brothers",
      "publication": "Paperback"
  },
  {
      "id": 184,
      "title": "The Stand",
      "author": "Stephen King",
      "genre": "Horror",
      "publisher": "Doubleday",
      "publication": "Hardcover"
  },
  {
      "id": 185,
      "title": "Gone with the Wind",
      "author": "Margaret Mitchell",
      "genre": "Historical Fiction",
      "publisher": "Scribner",
      "publication": "Ebook"
  },
  {
      "id": 186,
      "title": "The Jungle Book",
      "author": "Rudyard Kipling",
      "genre": "Children's",
      "publisher": "Macmillan",
      "publication": "Audiobook"
  },
  {
      "id": 187,
      "title": "A Game of Thrones",
      "author": "George R.R. Martin",
      "genre": "Fantasy",
      "publisher": "Bantam Books",
      "publication": "Paperback"
  },
  {
      "id": 188,
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "genre": "Dystopian",
      "publisher": "Simon & Schuster",
      "publication": "Hardcover"
  },
  {
      "id": 189,
      "title": "The Martian",
      "author": "Andy Weir",
      "genre": "Science Fiction",
      "publisher": "Crown Publishing Group",
      "publication": "Ebook"
  },
  {
      "id": 190,
      "title": "The Kite Runner",
      "author": "Khaled Hosseini",
      "genre": "Fiction",
      "publisher": "Riverhead Books",
      "publication": "Audiobook"
  },
  {
      "id": 191,
      "title": "Heart of Darkness",
      "author": "Joseph Conrad",
      "genre": "Classic",
      "publisher": "Blackwood's Magazine",
      "publication": "Paperback"
  },
  {
      "id": 192,
      "title": "The Count of Monte Cristo",
      "author": "Alexandre Dumas",
      "genre": "Adventure",
      "publisher": "Penguin Classics",
      "publication": "Hardcover"
  },
  {
      "id": 193,
      "title": "The Girl with the Dragon Tattoo",
      "author": "Stieg Larsson",
      "genre": "Mystery",
      "publisher": "Norstedts Förlag",
      "publication": "Ebook"
  },
  {
      "id": 194,
      "title": "The Night Circus",
      "author": "Erin Morgenstern",
      "genre": "Fantasy",
      "publisher": "Doubleday",
      "publication": "Audiobook"
  },
  {
      "id": 195,
      "title": "The Sun Also Rises",
      "author": "Ernest Hemingway",
      "genre": "Classic",
      "publisher": "Scribner",
      "publication": "Paperback"
  },
  {
      "id": 196,
      "title": "The Silence of the Lambs",
      "author": "Thomas Harris",
      "genre": "Thriller",
      "publisher": "St. Martin's Press",
      "publication": "Hardcover"
  },
  {
      "id": 197,
      "title": "A Tale of Two Cities",
      "author": "Charles Dickens",
      "genre": "Classic",
      "publisher": "Penguin Classics",
      "publication": "Ebook"
  },
  {
      "id": 198,
      "title": "The Odyssey",
      "author": "Homer",
      "genre": "Epic",
      "publisher": "Penguin Classics",
      "publication": "Audiobook"
  },
  {
      "id": 199,
      "title": "The Giver",
      "author": "Lois Lowry",
      "genre": "Dystopian",
      "publisher": "HMH Books for Young Readers",
      "publication": "Paperback"
  },
  {
      "id": 200,
      "title": "The Road",
      "author": "Cormac McCarthy",
      "genre": "Post-Apocalyptic",
      "publisher": "Vintage",
      "publication": "Ebook"
  },
 {
        "id": 201,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "genre": "Dystopian",
        "publisher": "HarperCollins",
        "publication": "Paperback"
    },
    {
        "id": 202,
        "title": "The Scarlet Letter",
        "author": "Nathaniel Hawthorne",
        "genre": "Classic",
        "publisher": "Penguin Classics",
        "publication": "Hardcover"
    },
    {
        "id": 203,
        "title": "The Secret Garden",
        "author": "Frances Hodgson Burnett",
        "genre": "Children's",
        "publisher": "Harper & Brothers",
        "publication": "Ebook"
    },
    {
        "id": 204,
        "title": "Dune",
        "author": "Frank Herbert",
        "genre": "Science Fiction",
        "publisher": "Ace Books",
        "publication": "Audiobook"
    },
    {
        "id": 205,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "genre": "Classic",
        "publisher": "Penguin Classics",
        "publication": "Paperback"
    },
    {
        "id": 206,
        "title": "The Hitchhiker's Guide to the Galaxy",
        "author": "Douglas Adams",
        "genre": "Science Fiction",
        "publisher": "Pan Books",
        "publication": "Hardcover"
    },
    {
        "id": 207,
        "title": "The Wind in the Willows",
        "author": "Kenneth Grahame",
        "genre": "Children's",
        "publisher": "Methuen & Co.",
        "publication": "Ebook"
    },
    {
        "id": 208,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "genre": "Gothic",
        "publisher": "Penguin Classics",
        "publication": "Audiobook"
    },
    {
        "id": 209,
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "genre": "Dystopian",
        "publisher": "Simon & Schuster",
        "publication": "Paperback"
    },
    {
        "id": 210,
        "title": "Wuthering Heights",
        "author": "Emily Brontë",
        "genre": "Gothic",
        "publisher": "Penguin Classics",
        "publication": "Hardcover"
    },
    {
        "id": 211,
        "title": "The Hunger Games",
        "author": "Suzanne Collins",
        "genre": "Dystopian",
        "publisher": "Scholastic",
        "publication": "Ebook"
    },
    {
        "id": 212,
        "title": "The Name of the Wind",
        "author": "Patrick Rothfuss",
        "genre": "Fantasy",
        "publisher": "DAW Books",
        "publication": "Audiobook"
    },
    {
        "id": 213,
        "title": "1984",
        "author": "George Orwell",
        "genre": "Dystopian",
        "publisher": "Penguin Books",
        "publication": "Paperback"
    },
    {
        "id": 214,
        "title": "The Lord of the Rings",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publisher": "Houghton Mifflin",
        "publication": "Hardcover"
    },
    {
        "id": 215,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "genre": "Fiction",
        "publisher": "HarperCollins",
        "publication": "Ebook"
    },
    {
        "id": 216,
        "title": "The Alchemist",
        "author": "Paulo Coelho",
        "genre": "Fiction",
        "publisher": "HarperOne",
        "publication": "Audiobook"
    },
    {
        "id": 217,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "genre": "Coming-of-age",
        "publisher": "Little, Brown and Company",
        "publication": "Paperback"
    },
    {
        "id": 218,
        "title": "A Clockwork Orange",
        "author": "Anthony Burgess",
        "genre": "Dystopian",
        "publisher": "W. W. Norton & Company",
        "publication": "Hardcover"
    },
    {
        "id": 219,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "genre": "Fantasy",
        "publisher": "Houghton Mifflin",
        "publication": "Ebook"
    },
    {
        "id": 220,
        "title": "The Stand",
        "author": "Stephen King",
        "genre": "Horror",
        "publisher": "Doubleday",
        "publication": "Audiobook"
    },
    {
        "id": 221,
        "title": "Alice's Adventures in Wonderland",
        "author": "Lewis Carroll",
        "genre": "Children's",
        "publisher": "Macmillan",
        "publication": "Paperback"
    },
    {
        "id": 222,
        "title": "The Road",
        "author": "Cormac McCarthy",
        "genre": "Post-Apocalyptic",
        "publisher": "Vintage",
        "publication": "Hardcover"
    },
    {
        "id": 223,
        "title": "The Martian Chronicles",
        "author": "Ray Bradbury",
        "genre": "Science Fiction",
        "publisher": "Doubleday",
        "publication": "Ebook"
    },
    {
        "id": 224,
        "title": "The Outsiders",
        "author": "S.E. Hinton",
        "genre": "Coming-of-age",
        "publisher": "Viking Press",
        "publication": "Audiobook"
    },
    {
        "id": 225,
        "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        "author": "C.S. Lewis",
        "genre": "Fantasy",
        "publisher": "HarperCollins",
        "publication": "Paperback"
    },
    {
        "id": 226,
        "title": "The Giver",
        "author": "Lois Lowry",
        "genre": "Dystopian",
        "publisher": "HMH Books for Young Readers",
        "publication": "Ebook"
    },
    {
        "id": 227,
        "title": "Lord of the Flies",
        "author": "William Golding",
        "genre": "Adventure",
        "publisher": "Penguin",
        "publication": "Audiobook"
    },
    {
        "id": 228,
        "title": "The Sun Also Rises",
        "author": "Ernest Hemingway",
        "genre": "Classic",
        "publisher": "Scribner",
        "publication": "Paperback"
    },
    {
        "id": 229,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "publisher": "Scribner",
        "publication": "Hardcover"
    },
    {
        "id": 230,
        "title": "The Odyssey",
        "author": "Homer",
        "genre": "Epic",
        "publisher": "Penguin Classics",
        "publication": "Ebook"
    },
    {
        "id": 231,
        "title": "The Call of the Wild",
        "author": "Jack London",
        "genre": "Adventure",
        "publisher": "Macmillan",
        "publication": "Audiobook"
    },
    {
        "id": 232,
        "title": "A Tale of Two Cities",
        "author": "Charles Dickens",
        "genre": "Classic",
        "publisher": "Penguin Classics",
        "publication": "Paperback"
    },
    {
        "id": 233,
        "title": "The Picture of Dorian Gray",
        "author": "Oscar Wilde",
        "genre": "Gothic",
        "publisher": "Penguin Classics",
        "publication": "Hardcover"
    },
    {
        "id": 234,
        "title": "Nineteen Eighty-Four",
        "author": "George Orwell",
        "genre": "Dystopian",
        "publisher": "Penguin Books",
        "publication": "Ebook"
    },
    {
        "id": 235,
        "title": "The Little Prince",
        "author": "Antoine de Saint-Exupéry",
        "genre": "Children's",
        "publisher": "Reynal & Hitchcock",
        "publication": "Audiobook"
    },
    {
        "id": 236,
        "title": "The Maze Runner",
        "author": "James Dashner",
        "genre": "Dystopian",
        "publisher": "Delacorte Press",
        "publication": "Paperback"
    },
    {
        "id": 237,
        "title": "The Shining",
        "author": "Stephen King",
        "genre": "Horror",
        "publisher": "Doubleday",
        "publication": "Hardcover"
    },
    {
        "id": 238,
        "title": "The Martian",
        "author": "Andy Weir",
        "genre": "Science Fiction",
        "publisher": "Crown Publishing Group",
        "publication": "Ebook"
    },
    {
        "id": 239,
        "title": "The Grapes of Wrath",
        "author": "John Steinbeck",
        "genre": "Classic",
        "publisher": "Viking Press",
        "publication": "Audiobook"
    },
    {
        "id": 240,
        "title": "A Wrinkle in Time",
        "author": "Madeleine L'Engle",
        "genre": "Science Fiction",
        "publisher": "Farrar, Straus and Giroux",
        "publication": "Paperback"
    },
    {
        "id": 241,
        "title": "The Night Circus",
        "author": "Erin Morgenstern",
        "genre": "Fantasy",
        "publisher": "Doubleday",
        "publication": "Hardcover"
    },
    {
        "id": 242,
        "title": "Educated: A Memoir",
        "author": "Tara Westover",
        "genre": "Memoir",
        "publisher": "Random House",
        "publication": "Paperback"
    },
    {
        "id": 243,
        "title": "Where the Crawdads Sing",
        "author": "Delia Owens",
        "genre": "Mystery",
        "publisher": "G.P. Putnam's Sons",
        "publication": "Hardcover"
    },
    {
        "id": 244,
        "title": "The Water Dancer",
        "author": "Ta-Nehisi Coates",
        "genre": "Historical Fiction",
        "publisher": "One World",
        "publication": "Ebook"
    },
    {
        "id": 245,
        "title": "The Underground Railroad",
        "author": "Colson Whitehead",
        "genre": "Historical Fiction",
        "publisher": "Doubleday",
        "publication": "Audiobook"
    },
    {
        "id": 246,
        "title": "Circe",
        "author": "Madeline Miller",
        "genre": "Fantasy",
        "publisher": "Little, Brown and Company",
        "publication": "Paperback"
    },
    {
        "id": 247,
        "title": "Becoming",
        "author": "Michelle Obama",
        "genre": "Memoir",
        "publisher": "Crown Publishing Group",
        "publication": "Hardcover"
    },
    {
        "id": 248,
        "title": "Normal People",
        "author": "Sally Rooney",
        "genre": "Fiction",
        "publisher": "Hogarth Press",
        "publication": "Ebook"
    },
    {
        "id": 249,
        "title": "The Testaments",
        "author": "Margaret Atwood",
        "genre": "Dystopian",
        "publisher": "Nan A. Talese",
        "publication": "Audiobook"
    },
    {
        "id": 250,
        "title": "The Goldfinch",
        "author": "Donna Tartt",
        "genre": "Fiction",
        "publisher": "Little, Brown and Company",
        "publication": "Paperback"
    },
    {
        "id": 251,
        "title": "Where the Forest Meets the Stars",
        "author": "Glendy Vanderah",
        "genre": "Fiction",
        "publisher": "Lake Union Publishing",
        "publication": "Hardcover"
    },
    {
        "id": 252,
        "title": "The Song of Achilles",
        "author": "Madeline Miller",
        "genre": "Historical Fiction",
        "publisher": "Bloomsbury",
        "publication": "Ebook"
    },
    {
        "id": 253,
        "title": "The Seven Husbands of Evelyn Hugo",
        "author": "Taylor Jenkins Reid",
        "genre": "Fiction",
        "publisher": "Atria Books",
        "publication": "Audiobook"
    },
    {
        "id": 254,
        "title": "A Promised Land",
        "author": "Barack Obama",
        "genre": "Memoir",
        "publisher": "Crown Publishing Group",
        "publication": "Hardcover"
    },
    {
        "id": 255,
        "title": "Where'd You Go, Bernadette",
        "author": "Maria Semple",
        "genre": "Fiction",
        "publisher": "Little, Brown and Company",
        "publication": "Paperback"
    },
    {
        "id": 256,
        "title": "The Nightingale",
        "author": "Kristin Hannah",
        "genre": "Historical Fiction",
        "publisher": "St. Martin's Press",
        "publication": "Ebook"
    },
    {
        "id": 257,
        "title": "Before We Were Strangers",
        "author": "Renee Carlino",
        "genre": "Romance",
        "publisher": "Atria Books",
        "publication": "Audiobook"
    },
    {
        "id": 258,
        "title": "The Dutch House",
        "author": "Ann Patchett",
        "genre": "Fiction",
        "publisher": "Harper",
        "publication": "Hardcover"
    },
    {
        "id": 259,
        "title": "The Silent Patient",
        "author": "Alex Michaelides",
        "genre": "Thriller",
        "publisher": "Celadon Books",
        "publication": "Paperback"
    },
    {
        "id": 260,
        "title": "Eleanor Oliphant Is Completely Fine",
        "author": "Gail Honeyman",
        "genre": "Fiction",
        "publisher": "Penguin Random House",
        "publication": "Ebook"
    },
    {
        "id": 261,
        "title": "The Starless Sea",
        "author": "Erin Morgenstern",
        "genre": "Fantasy",
        "publisher": "Doubleday",
        "publication": "Audiobook"
    },
    {
        "id": 262,
        "title": "The Tattooist of Auschwitz",
        "author": "Heather Morris",
        "genre": "Historical Fiction",
        "publisher": "Harper Paperbacks",
        "publication": "Hardcover"
    },
    {
        "id": 263,
        "title": "City of Girls",
        "author": "Elizabeth Gilbert",
        "genre": "Fiction",
        "publisher": "Riverhead Books",
        "publication": "Paperback"
    },
    {
        "id": 264,
        "title": "American Dirt",
        "author": "Jeanine Cummins",
        "genre": "Thriller",
        "publisher": "Flatiron Books",
        "publication": "Ebook"
    },
    {
        "id": 265,
        "title": "The Four Winds",
        "author": "Kristin Hannah",
        "genre": "Historical Fiction",
        "publisher": "St. Martin's Press",
        "publication": "Audiobook"
    },
    {
        "id": 266,
        "title": "The Glass Hotel",
        "author": "Emily St. John Mandel",
        "genre": "Fiction",
        "publisher": "Knopf",
        "publication": "Hardcover"
    },
    {
        "id": 267,
        "title": "A Little Life",
        "author": "Hanya Yanagihara",
        "genre": "Fiction",
        "publisher": "Doubleday",
        "publication": "Paperback"
    },
    {
        "id": 268,
        "title": "The Woman in the Window",
        "author": "A.J. Finn",
        "genre": "Thriller",
        "publisher": "William Morrow",
        "publication": "Ebook"
    },
    {
        "id": 269,
        "title": "The Night Watchman",
        "author": "Louise Erdrich",
        "genre": "Historical Fiction",
        "publisher": "Harper",
        "publication": "Audiobook"
    },
    {
        "id": 270,
        "title": "The Only Plane in the Sky: An Oral History of 9/11",
        "author": "Garrett M. Graff",
        "genre": "History",
        "publisher": "Avid Reader Press",
        "publication": "Hardcover"
    },
    {
        "id": 271,
        "title": "The Rose Code",
        "author": "Kate Quinn",
        "genre": "Historical Fiction",
        "publisher": "William Morrow",
        "publication": "Paperback"
    },
    {
        "id": 272,
        "title": "The Vanishing Half",
        "author": "Brit Bennett",
        "genre": "Fiction",
        "publisher": "Riverhead Books",
        "publication": "Ebook"
    },
    {
        "id": 273,
        "title": "The Lost Apothecary",
        "author": "Sarah Penner",
        "genre": "Historical Fiction",
        "publisher": "Park Row",
        "publication": "Audiobook"
    },
    {
        "id": 274,
        "title": "The Invisible Life of Addie LaRue",
        "author": "V.E. Schwab",
        "genre": "Fantasy",
        "publisher": "Tor Books",
        "publication": "Hardcover"
    },
    {
        "id": 275,
        "title": "The Last House on Needless Street",
        "author": "Catriona Ward",
        "genre": "Thriller",
        "publisher": "Viper",
        "publication": "Paperback"
    },
    {
        "id": 276,
        "title": "Such a Fun Age",
        "author": "Kiley Reid",
        "genre": "Fiction",
        "publisher": "G.P. Putnam's Sons",
        "publication": "Ebook"
    },
    {
        "id": 277,
        "title": "Anxious People",
        "author": "Fredrik Backman",
        "genre": "Fiction",
        "publisher": "Atria Books",
        "publication": "Audiobook"
    },
    {
        "id": 278,
        "title": "The Book of Longings",
        "author": "Sue Monk Kidd",
        "genre": "Historical Fiction",
        "publisher": "Viking",
        "publication": "Hardcover"
    },
    {
        "id": 279,
        "title": "The Whisper Man",
        "author": "Alex North",
        "genre": "Thriller",
        "publisher": "Celadon Books",
        "publication": "Paperback"
    },
    {
        "id": 280,
        "title": "Axiom's End",
        "author": "Lindsay Ellis",
        "genre": "Science Fiction",
        "publisher": "St. Martin's Press",
        "publication": "Ebook"
    },
    {
        "id": 281,
        "title": "The Vanishing Half",
        "author": "Brit Bennett",
        "genre": "Fiction",
        "publisher": "Riverhead Books",
        "publication": "Hardcover"
    },
    {
        "id": 282,
        "title": "Transcendent Kingdom",
        "author": "Yaa Gyasi",
        "genre": "Fiction",
        "publisher": "Knopf",
        "publication": "Hardcover"
    },
    {
        "id": 283,
        "title": "Hamnet",
        "author": "Maggie O'Farrell",
        "genre": "Historical Fiction",
        "publisher": "Knopf",
        "publication": "Hardcover"
    },
    {
        "id": 284,
        "title": "Mexican Gothic",
        "author": "Silvia Moreno-Garcia",
        "genre": "Horror",
        "publisher": "Del Rey",
        "publication": "Hardcover"
    },
    {
        "id": 285,
        "title": "The Midnight Library",
        "author": "Matt Haig",
        "genre": "Fiction",
        "publisher": "Viking",
        "publication": "Hardcover"
    },
    {
        "id": 286,
        "title": "The Invisible Life of Addie LaRue",
        "author": "V.E. Schwab",
        "genre": "Fantasy",
        "publisher": "Tor Books",
        "publication": "Hardcover"
    },
    {
        "id": 287,
        "title": "The Glass Hotel",
        "author": "Emily St. John Mandel",
        "genre": "Fiction",
        "publisher": "Knopf",
        "publication": "Hardcover"
    },
    {
        "id": 288,
        "title": "The Book of Longings",
        "author": "Sue Monk Kidd",
        "genre": "Historical Fiction",
        "publisher": "Viking",
        "publication": "Hardcover"
    },
    {
        "id": 289,
        "title": "The Pull of the Stars",
        "author": "Emma Donoghue",
        "genre": "Historical Fiction",
        "publisher": "Little, Brown and Company",
        "publication": "Hardcover"
    },
    {
        "id": 290,
        "title": "The Searcher",
        "author": "Tana French",
        "genre": "Mystery",
        "publisher": "Viking",
        "publication": "Hardcover"
    },
    {
        "id": 291,
        "title": "One by One",
        "author": "Ruth Ware",
        "genre": "Mystery",
        "publisher": "Gallery/Scout Press",
        "publication": "Hardcover"
    },
    {
        "id": 292,
        "title": "The Glass Hotel",
        "author": "Emily St. John Mandel",
        "genre": "Fiction",
        "publisher": "Knopf",
        "publication": "Hardcover"
    },
    {
        "id": 293,
        "title": "The Space Between Worlds",
        "author": "Micaiah Johnson",
        "genre": "Science Fiction",
        "publisher": "Crown Publishing Group",
        "publication": "Hardcover"
    },
    {
        "id": 294,
        "title": "The Girl with the Louding Voice",
        "author": "Abi Daré",
        "genre": "Fiction",
        "publisher": "Dutton",
        "publication": "Hardcover"
    },
    {
        "id": 295,
        "title": "The Death of Vivek Oji",
        "author": "Akwaeke Emezi",
        "genre": "Fiction",
        "publisher": "Riverhead Books",
        "publication": "Hardcover"
    },
    {
        "id": 296,
        "title": "Anxious People",
        "author": "Fredrik Backman",
        "genre": "Fiction",
        "publisher": "Atria Books",
        "publication": "Hardcover"
    },
    {
        "id": 297,
        "title": "Axiom's End",
        "author": "Lindsay Ellis",
        "genre": "Science Fiction",
        "publisher": "St. Martin's Press",
        "publication": "Hardcover"
    },
    {
        "id": 298,
        "title": "My Dark Vanessa",
        "author": "Kate Elizabeth Russell",
        "genre": "Fiction",
        "publisher": "William Morrow",
        "publication": "Hardcover"
    },
    {
        "id": 299,
        "title": "The Book of Two Ways",
        "author": "Jodi Picoult",
        "genre": "Fiction",
        "publisher": "Ballantine Books",
        "publication": "Hardcover"
    },
    {
        "id": 300,
        "title": "The Glass Hotel",
        "author": "Emily St. John Mandel",
        "genre": "Fiction",
        "publisher": "Knopf",
        "publication": "Hardcover"
    }

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