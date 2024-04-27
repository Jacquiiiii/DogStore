# The Dog Store 🐶

The Dog Store is a mock e-commerce application that sells dog supplies.

### Current functionality
- Users can view products, search for products, and filter products by category
- Users can register for an account
- Users can log in to an existing account
- Users can add products to cart
- Users can checkout cart and place order
- Coming soon:
   - Mock credit card payment processing
   - Testing with jest, cypress and storybook
   - GraphQL integration for database queries
   - Accessibility enhancements
   - Design revamp

### Tech stack:
- [Next.js](https://nextjs.org/) with [Typescript](https://www.typescriptlang.org/)
- [CSS modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [PostgreSQL](https://www.postgresql.org/)

### Packages used:
- [pg](https://www.npmjs.com/package/pg)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [react-dropdown](https://www.npmjs.com/package/react-dropdown)
- [Redux](https://redux.js.org/), [Redux Toolkit](https://redux-toolkit.js.org/), [Redux Persist](https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration)

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
- Icons are from [icons.veryicon](https://veryicon.com)
- Dog photos are from [unsplash](https://unsplash.com/photos)
