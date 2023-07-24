# pw-tests

Simple tests using playwright for UI (https://saucedemo.com) and API (https://reqres.in)

## how to run locally

1. Copy the file `.env.example` and paste it to root folder of the project as `.env`, then specify all environmental variables (usernames and passwords are printed on the https://saucedemo.com page).
2. Run `npm ci` in the terminal.
3. Run `npx playwright install` to download browsers.
4. Run `npm run test` to run all of the testcases against all browsers. Other scripts you can ind in `package.json`

## github actions

Tests can be also run in pipeline, they are divided into two parts: UI tests and API tests. For UI tests you can select browser. Currently, the only trigger for tests is `workflow_dispatch`

## Tests description

### Api

#### Get users:

- Get a list of users
- Validate that the response code is `200`
- Print all users with odd ID numbers

#### Create user:

- Create a new user
- Validate that the response code is `201`
- Validate that the creation date is today

#### Update user:

- Update a user
- Validate that the response code is `200`
- Validate that the response body matches the request body where applicable. Do a recursive comparison if possible.

#### Delay:

- Write a parameterized validation with the values `0` and `3`
- Get a list of users passing a delay query parameter with the provided value for the validation
- Validate that the response time is no longer than `1` second

#### Get 10 single users:

- Use whatever asynchronous technique you prefer to get `10` single users
- Validate, asynchronously as well, that all response codes are `200s`

### UI

#### Order after removing one product:

- Log in as a `standard user`
- Find an item by name, then add it to the cart
- Find a second item by name, and add it to the cart as well
- Go to the cart
- Find an item by name, then remove it from the cart
- Validate in the Checkout Overview that:
  - It only contains the items that you want to purchase
  - The Item Total is right
- Finish the purchase
- Validate that the website confirms the order

#### Products sorting / az | za:

- Log in as a `standard user`
- Sort products by name
- Validate that the sorting is right

#### Products sorting / lohi | hilo:

- Log in as a `standard user`
- Sort products by price
- Validate that the sorting is right

#### User is logged in:

- Log in as a `locked_out_user`
- The validation should fail
- Add capabilities to your program so it can create reports with screenshots when something fails
