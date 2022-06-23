   CREATE TABLE IF NOT EXISTS Cookenu_Users (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(6) NOT NULL
   );

   CREATE TABLE IF NOT EXISTS Cookenu_Revenues (
      id VARCHAR(255) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      author_id VARCHAR(255),
      FOREIGN KEY (author_id) REFERENCES Cookenu_Users (id)
   );

   CREATE TABLE IF NOT EXISTS Cookenu_Follow_Users (
         id VARCHAR(255) PRIMARY KEY, 
         user_id VARCHAR(255) NOT NULL,
         friend_id VARCHAR(255) NOT NULL,
         FOREIGN KEY (user_id) REFERENCES labook_users (id)
   );