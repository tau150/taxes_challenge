# Taxes challenge


<br><br>

## First Step

First, you have to create a login form that allows a user to access the application.

Once logged in, the application will show a dashboard with a list of active user taxes. The information of these taxes will be obtained from a fake API built with json-server or similar. https://github.com/typicode/json-server

```js
endpoint: /taxes

{
 "taxes":  [
  {
   "id":  "1",
   "name":  "Tax Season 2021",
   "year": "2021",
  },
  {
   "id":  "2",
   "name":  "Tax Season 2020",
   "year": "2020",
  },
 ]
}
```

The information obtained from the API (store) must be managed by React Query, we use React Query for managing the asynchronous data, so it required.


<br><br>

## Second Step

```js
/taxes/{id}/form
{
 "inputFields":  [
  {
   "id":  "name",
   "label":  "Name",
   "placeholder":  "Your first name",
   "type":  "text",
   "maxLength":  20
  },
  {
   "id":  "surname",
   "label":  "Surname",
   "placeholder":  "Your last name",
   "type":  "text",
   "maxLength":  40
  },
  {
   "id":  "age",
   "label":  "Age",
   "placeholder":  "Your age",
   "type":  "number",
  }
 ]
}
```

Here, a dynamic form should be rendered based on the inputs defined in the JSON response.

Remember that some fields may have validations in their keys (maxLength for the text inputs) and they can increase or change in the future.

<br><br>

## Third step  (These medals should go from bronce to gold)

When the inputs are completed and the user clicks on submit button a POST request to /taxes/{id}/form with the values of the form will be made.

A list of submissions should be created in the store for that specific tax.

Note: It will be submissions lists for the different taxes.

All submissions by mapping them so we can see the key/value pairs introduced by the user.

Would be a screen where will be showed the taxes submissions and where the user can filter by tax year, name, surname and age


```js
Tax: 2021
  Submission 1
   Name: Bruce
   Surname: Wayne
   Age: 26
  Submission 2
   Name: Clark
   Surname: Kent
   Age: 22
```

And last but not least, it would be great if you added one or two tests to check for render stability or proper mapping of values ⭐️. We use jest and react-testing-library to testing.

Easy and simple no? So we are done! 🚀!

<br><br>

## Solution:

<br><br>

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