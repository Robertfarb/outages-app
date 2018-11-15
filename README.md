## Outages App for Edison Southern California

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Text Editor
* Node.js Installed
* Mlab account to create a Mongo database


### Installing

1) Clone repository from github
2) Create a database on Mlab and copy the connection string
    * [mlab](https://mlab.com/)
    * `connection string e.g.` mongodb://dbuser:dbpassword@ds159993.mlab.com:59993/your-db-name
3) create a `keys.js` file in the /config path and copy paste the below code
```js
module.exports = {
  mongoURI: 'Your mongo Connection String Here',
  secretOrKey: 'secret'
}
```
4) run `npm install`
5) run `npm run dev` to start backend and frontend servers
6) navigate to http://localhost:3000 to view the application

## Built With

* [Node.JS](https://nodejs.org/en/) - JavaScript Runtime used
* [Express.js](https://expressjs.com/) - The web framework used
* [MongoDB](https://www.mongodb.com/) - Used to Store data
* [React.js](https://reactjs.org/) - Frontend Library Used

## Authors

* **Robert Farb** - *Initial work* - [Outages App](https://github.com/Robertfarb/outages-app)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License
