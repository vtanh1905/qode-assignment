-- Add rows to the images table
INSERT INTO app.images (id, url)
VALUES
  (1, 'https://example.com/image1.jpg'),
  (2, 'https://example.com/image2.jpg');

-- Add rows to the comments table
INSERT INTO app.comments (image_id, name, message)
VALUES
  (1, 'John', 'Great image!'),
  (1, 'Alex', 'Oh my god. Great image!'),
  (1, 'Jane', 'Nice work!'),
  (2, 'Alex', 'Beautiful picture!');