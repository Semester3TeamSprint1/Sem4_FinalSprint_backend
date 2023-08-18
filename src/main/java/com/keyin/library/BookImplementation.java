package com.keyin.library;

import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.document.Field;
import org.apache.lucene.document.StringField;
import org.apache.lucene.document.TextField;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.IndexWriter;
import org.apache.lucene.index.IndexWriterConfig;
import org.apache.lucene.queryparser.classic.ParseException;
import org.apache.lucene.queryparser.classic.QueryParser;
import org.apache.lucene.search.IndexSearcher;
import org.apache.lucene.search.Query;
import org.apache.lucene.search.ScoreDoc;
import org.apache.lucene.search.TopDocs;
import org.apache.lucene.store.Directory;
import org.apache.lucene.store.RAMDirectory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

@Service
public class BookImplementation implements BookService {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getById(Long id) {
        return bookRepository.getById(id);
    }
/*
    @Override
    public List<Book> getByTitle(String title) {
        List<Book> books = bookRepository.findAll();
        List<Book> searchResults = new ArrayList<>();

        StandardAnalyzer analyzer = new StandardAnalyzer();
        Directory index = new RAMDirectory();
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        IndexWriter writer;

        try {
            writer = new IndexWriter(index, config);

            for (Book book : books) {
                Document doc = new Document();
                doc.add(new TextField("title", book.getTitle(), Field.Store.YES));
                writer.addDocument(doc);
            }

            writer.close();

            Query query = new QueryParser("title", analyzer).parse(title + "~1");
            DirectoryReader reader = DirectoryReader.open(index);
            IndexSearcher searcher = new IndexSearcher(reader);
            TopDocs docs = searcher.search(query, books.size());

            for (ScoreDoc scoreDoc : docs.scoreDocs) {
                Document doc = searcher.doc(scoreDoc.doc);
                String foundTitle = doc.get("title");
                Book foundBook = findBookByTitle(foundTitle);
                if (foundBook != null) {
                    searchResults.add(foundBook);
                }
            }

        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

        return searchResults;
    }

 */
@Override
public List<Book> getByTitle(String title) {
    List<Book> books = bookRepository.findAll();
    List<Book> searchResults = new ArrayList<>();
    Set<Long> addedBookIds = new HashSet<>(); // Set to track added book IDs

    StandardAnalyzer analyzer = new StandardAnalyzer();
    Directory index = new RAMDirectory();
    IndexWriterConfig config = new IndexWriterConfig(analyzer);
    IndexWriter writer;

    try {
        writer = new IndexWriter(index, config);

        for (Book book : books) {
            Document doc = new Document();
            doc.add(new StringField("id", String.valueOf(book.getId()), Field.Store.YES)); // Add book ID to the index
            doc.add(new TextField("title", book.getTitle(), Field.Store.YES));
            writer.addDocument(doc);
        }

        writer.close();

        Query query = new QueryParser("title", analyzer).parse(title + "~1");
        DirectoryReader reader = DirectoryReader.open(index);
        IndexSearcher searcher = new IndexSearcher(reader);
        int numHits;
        if (books.size() < 1){
            numHits = 1;
        } else {
            numHits = books.size();
        }
        TopDocs docs = searcher.search(query, numHits);

        for (ScoreDoc scoreDoc : docs.scoreDocs) {
            Document doc = searcher.doc(scoreDoc.doc);
            long foundBookId = Long.parseLong(doc.get("id")); // Get the book ID from the index
            if (!addedBookIds.contains(foundBookId)) { // Check if the book ID has already been added
                Book foundBook = findBookByTitle(doc.get("title"));
                if (foundBook != null) {
                    searchResults.add(foundBook);
                    addedBookIds.add(foundBookId); // Add the book ID to the set
                }
            }
        }

    } catch (IOException | ParseException e) {
        e.printStackTrace();
    }

    return searchResults;
}

    private Book findBookByTitle(String title) {
        List<Book> books = bookRepository.findByTitle(title);

        if (!books.isEmpty()) {
            return books.get(0);
        } else {
            return null;
        }
    }




    @Override
    public List<Book> getByAuthor(String author) {
        List<Book> books = bookRepository.findAll();
        List<Book> searchResults = new ArrayList<>();

        StandardAnalyzer analyzer = new StandardAnalyzer();
        Directory index = new RAMDirectory();
        IndexWriterConfig config = new IndexWriterConfig(analyzer);
        IndexWriter writer;

        try {
            writer = new IndexWriter(index, config);

            for (Book book : books) {
                Document doc = new Document();
                doc.add(new TextField("author", book.getAuthor(), Field.Store.YES));
                writer.addDocument(doc);
            }

            writer.close();

            Query query = new QueryParser("author", analyzer).parse(author + "~1");
            DirectoryReader reader = DirectoryReader.open(index);
            IndexSearcher searcher = new IndexSearcher(reader);
            int numHits;
            if (books.size() < 1){
                numHits = 1;
            } else {
                numHits = books.size();
            }
            TopDocs docs = searcher.search(query, numHits);

            for (ScoreDoc scoreDoc : docs.scoreDocs) {
                Document doc = searcher.doc(scoreDoc.doc);
                String foundAuthor = doc.get("author");
                List<Book> foundBooks = findBookByAuthor(foundAuthor); // Change method name
                if (!foundBooks.isEmpty()) {
                    searchResults.addAll(foundBooks);
                }
            }

        } catch (IOException | ParseException e) {
            e.printStackTrace();
        }

        return searchResults;
    }

    public List<Book> findBookByAuthor(String author) {
        // Implement the logic to find and return a list of Book objects based on author name
        // You can replace this with your actual implementation or call the appropriate repository method.
        return bookRepository.findByAuthor(author);
    }
    public List<Book> findBooksByTitle(String title){
        return bookRepository.findByTitle(title);
    }

    @Override
    public List<Book> getByGenre(String genre) {
        return bookRepository.findByGenre(genre);
    }

    @Override
    public List<Book> getByPublisher(String publisher) {
        return bookRepository.findByPublisher(publisher);
    }

    @Override
    public List<Book> getByPublication(String publication) {
        return bookRepository.findByPublication(publication);
    }

    @Override
    public Book updateBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void deleteBooksByAuthor(String author) {

    }

    @Override
    public void deleteBooksByGenre(String genre) {

    }

    @Override
    public void deleteBooksByPublisher(String publisher) {

    }
}

