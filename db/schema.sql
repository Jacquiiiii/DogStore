DROP TABLE IF EXISTS dogstore_order_items;
DROP TABLE IF EXISTS dogstore_orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS dogstore_users;

CREATE TABLE dogstore_users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  description TEXT,
  src TEXT,
  price DECIMAL(10, 2) NOT NULL,
  discounted_price DECIMAL(10, 2) DEFAULT 0,
  sales_count INT DEFAULT 0,
  inventory_count INT DEFAULT 0,
  category VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dogstore_orders (
  id SERIAL PRIMARY KEY,
  dogstore_user_id INTEGER REFERENCES dogstore_users(id) NULL,
  customer_first_name VARCHAR(100) NOT NULL,
  customer_last_name VARCHAR(100) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_address VARCHAR(255) NOT NULL,
  credit_card_number INTEGER NOT NULL,
  credit_card_expiry VARCHAR(5) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dogstore_order_items (
  dogstore_order_id INTEGER REFERENCES dogstore_orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL
);