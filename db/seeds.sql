INSERT INTO users (first_name, last_name, password, email) VALUES
  ('John', 'Doe', 'password123', 'johndoe@example.com'),
  ('Jane', 'Smith', 'password456', 'janesmith@example.com'),
  ('Michael', 'Johnson', 'password789', 'michaeljohnson@example.com'),
  ('Sarah', 'Williams', 'password123', 'sarahwilliams@example.com'),
  ('David', 'Brown', 'password456', 'davidbrown@example.com'),
  ('Emily', 'Jones', 'password789', 'emilyjones@example.com'),
  ('Daniel', 'Taylor', 'password123', 'danieltaylor@example.com'),
  ('Olivia', 'Miller', 'password456', 'oliviamiller@example.com'),
  ('Matthew', 'Anderson', 'password789', 'matthewanderson@example.com'),
  ('Sophia', 'Thomas', 'password123', 'sophiathomas@example.com');

INSERT INTO products (product_name, description, src, price, discounted_price, sales_count, inventory_count, category) VALUES
  ('Bark Bites Dog Food', 'A wholesome blend of organic ingredients to keep your furry friends tail wagging. Packed with essential nutrients for optimal health.', 'https://tlcpetfood.com/wp-content/uploads/2022/01/TLCWholeLife_DogFood_site-1-333x450.png', 9.99, 7.99, 50, 25, 'food'),
   
  ('Pawsome Peanut Butter Treats', 'Irresistible peanut butter treats that will have your dog doing happy spins. Made with love and crunchy goodness.', 'https://i.etsystatic.com/10202447/r/il/48fb42/1795256471/il_fullxfull.1795256471_8zz7.jpg', 19.99, 15.99, 100, 12,'treats'),

  ('Cozy Canine Bed', 'A plush, memory foam bed for your furry companions sweet dreams. Soft, supportive, and perfect for naptime.', 'https://botcanada.com/wp-content/uploads/2021/07/web-rocky.jpg', 29.99, 25.99, 25, 10, 'supplies'),

  ('Squeaky Plush Toy Set', 'Keep your dog entertained with this trio of adorable squeaky toys. Guaranteed tail-wagging fun!', 'https://m.media-amazon.com/images/I/81g1-LjeOFL._AC_UF350,350_QL80_.jpg', 39.99, 29.99, 500, 50, 'toys'),

  ('Waggin Tail Dog Food', 'Premium kibble with real meat and veggies. Fuel your pups adventures with Waggin Tails nutritious formula.', 'https://tlcpetfood.com/wp-content/uploads/2022/01/TLCWholeLife_DogFood_site-1-333x450.png', 49.99, 12.99, 45, 750, 'food'),

  ('Gourmet Bacon Bites', 'Bacon lovers rejoice! These gourmet treats are bacon-flavored and paw-lickin good.', 'https://i.etsystatic.com/10202447/r/il/48fb42/1795256471/il_fullxfull.1795256471_8zz7.jpg', 59.99, 0, 50, 50, 'treats'),

  ('Doggy Adventure Backpack', 'Explore the great outdoors with your pup! This backpack is designed for comfort and style.', 'https://botcanada.com/wp-content/uploads/2021/07/web-rocky.jpg', 69.99, 0, 20, 190, 'supplies'),

  ('Tough Chew Rope Toy', 'Built to withstand even the most enthusiastic chewers. Keep those teeth healthy and jaws busy!', 'https://m.media-amazon.com/images/I/81g1-LjeOFL._AC_UF350,350_QL80_.jpg', 79.99, 0, 20, 190,'toys'),

  ('Salmon Sensation Dog Food', 'Omega-3-rich salmon for a shiny coat and happy heart. Your dog will dive into every bowl.', 'https://tlcpetfood.com/wp-content/uploads/2022/01/TLCWholeLife_DogFood_site-1-333x450.png', 89.99, 59.99, 9, 800, 'food'),

  ('Sweet Potato Crunchies', 'Grain-free, oven-baked sweet potato treats. Perfect for training or just because your dog deserves it!', 'https://i.etsystatic.com/10202447/r/il/48fb42/1795256471/il_fullxfull.1795256471_8zz7.jpg', 99.99, 0, 600, 69, 'treats');

INSERT INTO orders (user_id) VALUES
  (1),
  (2),
  (3),
  (4),
  (5),
  (6),
  (7),
  (8),
  (9),
  (10);

INSERT INTO order_items (order_id, product_id, quantity, total_price) VALUES
  (1, 1, 2, 19.98),
  (1, 2, 1, 19.99),
  (2, 3, 3, 89.97),
  (3, 1, 1, 9.99),
  (3, 2, 2, 39.98),
  (4, 4, 1, 39.99),
  (4, 5, 2, 99.98),
  (5, 6, 3, 179.97),
  (6, 7, 1, 69.99),
  (6, 8, 2, 159.98),
  (7, 9, 1, 89.99),
  (7, 10, 1, 99.99),
  (8, 1, 2, 19.98),
  (8, 3, 1, 29.99),
  (9, 5, 3, 149.97),
  (10, 2, 1, 19.99),
  (10, 4, 2, 79.98);