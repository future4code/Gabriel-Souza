   CREATE TABLE IF NOT EXISTS Cookenu_Users (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role ENUM ("normal", "admin") DEFAULT "normal"
   );

   CREATE TABLE IF NOT EXISTS Cookenu_Recipes (
      id VARCHAR(255) PRIMARY KEY,
      title VARCHAR(255) UNIQUE NOT NULL,
      description TEXT NOT NULL,
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