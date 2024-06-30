-- Add rows to the images table
INSERT INTO app.images (url)
VALUES
  ('https://vtanh1905-qode-assignment.s3.ap-southeast-1.amazonaws.com/images/412a4c52-15ee-4278-8c42-354770fda559.jpg'),
  ('https://vtanh1905-qode-assignment.s3.ap-southeast-1.amazonaws.com/images/5d59a20f-6155-40b7-9e01-13aee9235cdf.jpg');

-- Add rows to the comments table
INSERT INTO app.comments (image_id, name, message)
VALUES
  (1, 'John', 'Great image!'),
  (1, 'Alex', 'Oh my god. Great image!'),
  (1, 'Jane', 'Nice work!'),
  (2, 'Alex', 'Beautiful picture!');