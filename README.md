# Web App - YelpCamp
YelpCamp is a Node.js web application with RESTful routing project
from the Udemy course -  
[The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/course/the-web-developer-bootcamp/)  
![pic](https://user-images.githubusercontent.com/46241467/79216145-5fa21880-7e55-11ea-8855-fe0d2153ea21.jpg)

## Live Demo
 To see the app in action, go to [Yelp Camp Shir Demo](https://yelpcampyelp.herokuapp.com/)

## Features

#### Authentication
User signup/login with username and password.

#### Authorization
One cannot create new posts or comments without being authenticated.
One cannot edit or delete existing posts and comments created by other users.

#### Functionalities of campground posts and comments
Create, view, edit and delete posts and comments.

#### Flash messages responding to users’ interaction with the app

#### Responsive web design

## Built with
#### Front-end
[Google Fonts](https://fonts.google.com/)  
[Font Awesome](https://fontawesome.com/)  
[Bootstrap 4](https://getbootstrap.com/docs/4.1/getting-started/introduction/)  

#### Back-end
[express](https://expressjs.com/) - *Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.*  
[mongoDB](https://www.mongodb.com/) - *MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.*  
[mongoose](https://mongoosejs.com/) - *Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.*  
[ejs](https://ejs.co/) - *E in EJS is for Embedded, EJS is the simple template which allows developers to create the HTML page with plain JavaScript. Ejs provide fast compilation and rendering and include both server and browser support.*  
[passport](http://www.passportjs.org/) - *Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.*  
[passport-local](https://www.npmjs.com/package/passport-local) - *The local authentication strategy authenticates users using a username and password. The strategy requires a verify callback, which accepts these credentials and calls done providing a user.*    
[passport-local-mongoose](https://www.npmjs.com/package/passport-local-mongoose) - *Passport-Local Mongoose is a Mongoose plugin that simplifies building username and password login with Passport.*  
[body-parser](https://www.npmjs.com/package/body-parser) - *the body-parser is intended to handle HTTP POST request in Express.js. body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.*   
[express-session](https://www.npmjs.com/package/express-session) - *Sessions store user data when accessing and browsing application. Allows applications to store state.*    
[method-override](https://www.npmjs.com/package/method-override) - *Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.*  
[connect-flash](https://www.npmjs.com/package/connect-flash) - *The flash is a special area of the session used for storing messages. Messages are written to the flash and cleared after being displayed to the user.*  
[dotenv]()


#### Deployment
[Heroku](https://id.heroku.com/login)
