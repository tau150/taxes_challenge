# Taxdown challenge

### Tech Stack:

- React
- Vite
- Chackra UI
- React query
- Vitest
- React testing library
- PLaywright
- Typescript
- ESlint
- Json server
- React hook forms


### Approach

#### UI
I choose chakra because gives me basic components and is easy to customize, I didn't want to spend to much time creating basic components from scratch.

#### Testing
I made unit testing over cross components and utils, and because I wanted to try Playweright for the the first time, I applied some e2e test over main pages and flows.

#### Server
The server is simulated with json server, there are two files, db.json, db-test.json, this last it will be used just for e2e testing.

#### Auth
Because I wanted to simulate a login and I didn't have enough time to make a real one, once you log in with some of the users present in db.json file, the user will be persisted in the local storage until is deleted.

#### Forms
In one section I had to tackle dinamyc forms, so react-hooks-form it was helpfull to avoid to write a lot of logic over validations. When I included this library, the login form was already developed with validation hanldling without the library, so I decided to keep it in thar way.


### Run Locally

For run the app
```bash
npm run install
npm run serve
npm run dev
```

For unit tests

```bash
npm run test
npm run test:update (for update snapshots)
```

For e2e tests

```bash
npm run test:e2e or npm run test:e2e-ui
```