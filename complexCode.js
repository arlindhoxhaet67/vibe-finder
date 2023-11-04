/* 
   Filename: complexCode.js
   This code is a complex implementation of a social media application.
   It includes features such as user authentication, posting content, following/unfollowing users, and more.
   Note: This is a simplified and conceptual representation, not a production-ready code.
*/

// User class to represent users in the application
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.followers = [];
    this.posts = [];
  }

  post(content) {
    const newPost = new Post(content);
    this.posts.push(newPost);
  }

  follow(user) {
    if (!this.followers.includes(user)) {
      this.followers.push(user);
    }
  }

  unfollow(user) {
    const index = this.followers.indexOf(user);
    if (index !== -1) {
      this.followers.splice(index, 1);
    }
  }
}

// Post class to represent individual posts
class Post {
  constructor(content) {
    this.content = content;
    this.likes = 0;
  }

  like() {
    this.likes++;
  }

  unlike() {
    if (this.likes > 0) {
      this.likes--;
    }
  }
}

// Application class to manage the social media application
class SocialMediaApp {
  constructor() {
    this.users = [];
    this.currentUser = null;
  }

  registerUser(username, password) {
    const newUser = new User(username, password);
    this.users.push(newUser);
  }

  loginUser(username, password) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      this.currentUser = user;
      console.log(`Logged in as ${username}`);
    } else {
      console.log("Invalid username or password");
    }
  }

  logoutUser() {
    this.currentUser = null;
    console.log("Logged out");
  }
}

// Sample usage
const app = new SocialMediaApp();
app.registerUser("user1", "pass123");
app.registerUser("user2", "pass456");
app.loginUser("user1", "pass123");

if (app.currentUser) {
  app.currentUser.post("Hello, everyone!");
  app.currentUser.post("I'm new here!");

  const user2 = app.users.find((user) => user.username === "user2");
  app.currentUser.follow(user2);
  app.currentUser.post("Followed user2 - awesome posts!");

  user2.like();

  app.currentUser.unfollow(user2);
  app.currentUser.post("Unfollowed user2 - boring posts!");

  app.logoutUser();
}
