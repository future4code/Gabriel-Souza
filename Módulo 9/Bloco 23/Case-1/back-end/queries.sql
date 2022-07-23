   CREATE TABLE IF NOT EXISTS Products (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      price DECIMAL(9,2) NOT NULL,
      qty_stock INT NOT NULL
   );

   CREATE TABLE IF NOT EXISTS Purchases (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      total_price DECIMAL(9,2) NOT NULL,
      chosen_quantity INT NOT NULL DEFAULT 1,
      scheduled_date DATE NOT NULL,
      id_product VARCHAR(255) NOT NULL
   );

     CREATE TABLE IF NOT EXISTS Accumulated_list_buys (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) UNIQUE NOT NULL,
      price DECIMAL(9,2) NOT NULL,
      qty_stock INT NOT NULL
   );