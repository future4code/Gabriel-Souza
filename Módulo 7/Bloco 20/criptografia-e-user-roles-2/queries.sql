   CREATE TABLE IF NOT EXISTS Auth_users (
      id VARCHAR(255) PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
   );

   DESCRIBE Auth_users;

   ALTER TABLE Auth_users ADD COLUMN role enum("admin", "normal") DEFAULT "normal";