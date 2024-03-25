# The Dog Store 🐶

The Dog Store is a mock e-commerce application that sells dog supplies.

### Current functionality
- Users can view and filter products
- Users can register for an account
- Users can log in to an existing account
- Coming soon: Checkout functionality and testing

### Tech stack:
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [CSS modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [PostgreSQL](https://www.postgresql.org/)

### Packages used:
- [pg](https://www.npmjs.com/package/pg)
- [bcrypt](https://www.npmjs.com/package/bcrypt)

### Getting started:
- Clone this repository
- Install dependencies: `npm install`
- Set up a development PostgreSQL database via [psql](https://www.postgresql.org/docs/current/app-psql.html#:~:text=psql):
  - `CREATE DATABASE database_name;`
  - `CREATE USER user WITH PASSWORD 'password';`
  - `\i db/schema.sql;`
  - `\i db/seeds.sql;`
- Create a .env.local file and add relevant secrets (refer to .env.local.example for template)
- Start the app: `npm run dev`

### Acknowledgements:
- Icons are from [icons.veryicon](https://icons.veryicon.com)
- Dog photos are from [unsplash](https://unsplash.com/photos)