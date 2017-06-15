-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors

-- Get just the name and birth year of all authors

-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year > 1715;

-- Get all authors born in the USA
SELECT * FROM authors WHERE nationality ='United States of America';

-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = 1985;

-- Get all books published before 1989
SELECT * FROM books WHERE publication_date < 1989;

-- Get just the title of all books.
SELECT title FROM books;

-- Get just the year that 'A Dance with Dragons' was published
  -- Cry when you realize how long it's been

  SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * FROM books WHERE title ILIKE '% the %' OR title Ilike 'the%' OR title Ilike '%the';

-- Add yourself as an author
INSERT INTO authors (name, nationality, birth_year) VALUES ('Yeni', 'Colombia', 1994);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books 
(
  title, 
  publication_date, 
  author_id
  ) 
VALUES 
('whatever, something else', 1999, 9),
 ('Some other book', 2000, 10);

-- Update one of your books to have a new title
UPDATE books SET title = 'Another Book' WHERE title = 'Some Other Book';
SELECT * FROM books WHERE author_id = 9;
--then, we can update the book safely using an ID
UPDATE books SET title = 'Another Book' WHERE author_id = 72;

-- Delete your books
DELETE FROM books WHERE author_id = 9;

-- Delete your author entry
DELETE FROM authors WHERE id = 9;
