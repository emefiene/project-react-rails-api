### Phase 4 Project, Flatiron School built with React.js and Rails.###

The focus of this project is building a Rails backend which will be used by a  React frontend that interacts with the database via the API.
This project uses React.js as frontend and rails as backend. 

This project is an ecommernce store, users are being authorized and authenticated in order to be granted access to site, users information are store in the database, cookies are used to track users information and password_digestion used to secure password.

A user is only able to perform the four CRUD actions on their data, another user is unauthorized to perform such on another user data.

Eligible and approved members are able to upload their productions to be purchased by other users.

This wonder application with great functionalities built using many to many relationship.


### Associations

 Productions -< Review >- Users
 Productions >- Member

### Features
* Home page/
* Productions Details page created dynamically "/patients/:id"
* Users Details page created dynamically "/patients/:id"
* Sign Up page '/users/new'
* View All Registered users '/users'
* Review page "/review/:patientId/post"
* Appointments page "/appointment"

### MVP ###
updating state using a setState function after receiving response from a 
* Get
* POST, 
* PATCH,
* DELETE request.
* One to many relationship
* Many to many relationship

### Requirements

Ruby 2.7.4
NodeJS (v16), and npm
Render account
Postgresql

### Building project
 bundle install
rails db:create
 npm install --prefix client
 When you're ready to start building your project, run:

 You can use the following commands to run the application:

rails s: run the backend on http://localhost:3000
npm start --prefix client: run the frontend on http://localhost:4000

### Credit
Amazon.com