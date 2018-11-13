const HOST = process.env.NODE_ENV === 'production'
  ? 'https://www.outage-app.herokuapp.com'
  : 'http://localhost:3000';

export default HOST;