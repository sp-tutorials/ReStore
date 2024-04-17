From: https://www.udemy.com/course/learn-to-build-an-e-commerce-store-with-dotnet-react-redux  
Source code: https://github.com/TryCatchLearn/Restore/

run API with:

```bash
dotnet watch --non-interactive run --urls http://*:5000
```

# Setup

```bash
git init
dotnet new gitignore
git add . && git commit -m "Add README.md and .gitignore"
```

# Section 2: API Basics

## 2.6. Creating the .Net solution and API project

```bash
dotnet new list

dotnet new sln
dotnet new webapi -o API --use-controllers
dotnet sln add API
code . # open the project in Visual Studio Code
```

## 2.7. Adding VS Code extensions

VS Code extensions:

1. C#
2. C# Extensions
3. Material Icon Theme
4. NuGet Gallery
5. SQLite
6. Auto Rename Tag

`>reload` -> Developer: Reload Window

Required assets to build and debug are missing from 'ReStore'. Add them? `Yes`
(if this prompt disappears, then reload the window)

enable `File -> Auto Save`

## 2.8. What’s in the Web API template

Settings -> exclude -> `Files: Exclude` -> `Add Pattern:` -> `**/obj` & `**/bin`

## 2.12. Creating an Entity Framework Migration

```bash
dotnet tool install --global dotnet-ef
dotnet tool list -g
dotnet tool update --global dotnet-ef

dotnet ef migrations add InitialCreate -o Data/Migrations
dotnet ef database update
```

## 2.14. Using the Program.cs class to migrate and seed the data on app startup

```bash
dotnet ef database drop

dotnet watch --no-hot-reload
```

## 2.16. Using async methods when querying a database.

Extensions -> C# Extensions -> Extension Settings -> Csharpextensions ->
> Private Member Prefix -> `_`  
> [ ] Use This For Ctor Assignments

## 2.17. Saving our code into source control

```bash
dotnet new -l

dotnet new gitignore
```

## 2.18. Summary of section 2

In this section

* What is .Net?
* What is an API?
* Using the dotnet CLI
* What's in the project?
* Creating a basic Web API
* Using Entity Framework
* Using git for source control

# Section 3: React Basics

Libraries used alongside React:

* Material UI
* Axios
* Redux
* Forms (React-hook-form)
* React-Router

**Material UI v5**  
instead of `import { Container } from "@material-ui/core";`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
use `import { Container } from "@mui/material";`

## 3.20. Creating the react application

```bash
npm create vite@latest
```

## 3.27. Adding a Typescript interface for the product

https://www.google.com/search?q=json+to+ts

## 3.30. Adding the Material UI styling framework

https://mui.com/material-ui/getting-started/installation/

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @fontsource/roboto
npm install @mui/icons-material
```

## 3.32. Installing and using React dev tools

https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## 3.38. Section 3 Summary

In this section

* What is React?
* Vite
* Material UI

# Section 4: React Router

## 4.39. Section 4 Introduction

In this section

* Installing and using React Router
* Adding axios

## 4.40. Setting up React Router

https://reactrouter.com/en/main

```bash
npm install react-router-dom
```

## 4.43. Fetching a product on component load

```bash
npm install axios
```

# Section 5: Error handling

In this section

* Error handling and exceptions
* Developer exception page
* Middleware
* Http response errors
* Client side Error handling
* Debugging

## 5.52. Adding toast notifications

```bash
npm install react-toastify
```

## 5.59. Setting up linting

`ESLint` VS Code extension

# Section 6: Adding the shopping cart feature

In this section

* Adding the Shopping cart/basket feature
* Where to store the basket?
* EF Relationships
* Shaping data
* Using React Context
* App initialisation

## 6.63. EF Relationships

```bash
dotnet ef migrations add BasketEntityAdded
dotnet ef migrations remove
```

## 6.70. Adding the axios methods for the basket

```bash
npm install @mui/lab @mui/material
```

# Section 7: Redux

In this section

* Redux
* React-Redux
* Redux Toolkit
* Redux Dev tools

Redux - Store

* Contains the app state
* One store per app
* Each store can have many 'reducers' or 'slices' of state

Redux - Provider

Redux flow  
Store -> Provider -> App -> Components -> Actions -> Reducers -> Store

Redux - Reducer

* A reducer is a function
* It takes the current state and an action and returns a new state result  
  `(state, action) => newState`

Redux Best Practices

* Do not mutate state
* Reducers must not have side effects
* Do not have non-serializable values in State or Actions (=> no class instances or functions inside state)
* Only 1 store per app

Redux Toolkit

* Simplifies Redux code
* Opinionated
* Good defaults for store setup
* Most commonly used Redux add-ons built in
* Less boilerplate

## 7.85. Installing and using Redux

https://redux.js.org/style-guide/

```bash
npm install redux react-redux
```

## 7.88. Using Redux Toolkit

```bash
npm install @reduxjs/toolkit
```

## 7.89. Using redux dev tools

https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

# Section 8: Paging, Sorting, Filtering

In this section

* Sorting
* Filtering
* Searching
* Paging

# Section 9: Identity

In this section

* Setting up ASP.NET Identity
* Using Entity Framework with Identity
* JWT Tokens
* Using forms in React
* Validating form input
* App initialisation
* Transferring anonymous basket to logged in user

What is ASP.NET Identity?

* Membership system for .Net
* Includes:
    * Password hashing
    * Password validation
    * User storage
    * Claims management
* Can use external providers also

Password hashing

## 9.124. Adding the entity configuration and migration

```bash
dotnet ef migrations add IdentityAdded
```

## 9.135. Adding React hook form

```bash
npm install react-hook-form
```

## 9.142. Adding the registration validators

https://regexlib.com/

# Section 10: Adding the checkout feature

In this section

* Creating Order Entities
* Creating re-usable text inputs
* Adding a multi step form for checkout
* Order submission
* Challenge

# 10.150. Refactoring identity to use an int

```bash
dotnet ef database drop # or just delete store.db
dotnet ef migrations add OrderEntityAdded -o Data/Migrations
```

# 10.159. Adding a validation library

```bash
npm install @hookform/resolvers yup
```

# Section 11: Payments

In this section

* Taking payments
* PCI Compliance
* Strong customer authentication
* Adding Stripe to the API and Client
* Webhooks
* Safe storage of secrets in the code

Payment Card Industry Data Security Standard (PCI DSS)

* Set of industry standards
* Designed to protect payment card data
* Increased protection for customers and reduced risk of data breaches involving personal card data

PCI Compliance

* Building and maintaining a secure network
* Protecting Cardholder data
* Maintaining a vulnerability management program
* Implementing strong access control measures
* Regularly monitor and test networks
* Maintain an information security policy

PCI non-compliance

* Monthly penalties ($5,000 to $100,000)
* Infringement consequences ($50 to $90 per cardholder)
* Compensation costs
* Legal action
* Damaged reputation
* Revenue loss
* Federal audits

Payment Card Processors (Stripe)

Strong Customer Authentication (SCA)

* EU Standards for authenticating online payments
    * Requires 2 of the following 3 elements:
        * Something the customer knows (PW/Pin)
        * Something the customer has (phone/HW token)
        * Something the customer is (biometric)
* Banks will decline payments that require SCA and do not meet this criteria

Without SCA - USA/Canada only

With SCA - Payment Intent

## 11.169. Setting up stripe

```bash
dotnet ef migrations add PaymentIntentAdded
```

## 11.173. Adding stripe to the client

```bash
npm install --save @stripe/react-stripe-js @stripe/stripe-js
```

## 11.180. Adding a webhook

https://docs.stripe.com/stripe-cli

```bash
docker run --network="host" --rm -it stripe/stripe-cli:latest --api-key $STRIPE_API_KEY 
docker run --network="host" --rm -it stripe/stripe-cli:latest --api-key $STRIPE_API_KEY listen -f http://localhost:5000/api/payments/webhook -e charge.succeeded
``` 

## 11.181. User secrets

https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets#secret-manager

```bash
# inside API/
dotnet user-secrets init
dotnet user-secrets set "KEY" "VALUE"
dotnet user-secrets list
```

# Section 12: Publishing

In this section

* Create a production build of the React app
* Host the react app on our API (Kestrel) server
* Switch Database server to PostGreSQL
* Setup and configure Heroku (actually an alternative to Heroku cuz it's no longer free)
* Deploy the app
* Troubleshoot app in production

## 12.184. Home page design

```bash
npm install react-slick @types/react-slick slick-carousel
```

## 12.185. Creating a react production build

https://vitejs.dev/guide/env-and-mode.html

```bash
npm run build
```

## 12.187. Switching to a production DB Server

https://learn.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli

```bash
docker run --name postgres -e POSTGRES_USER=appuser -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:latest
# inside API/ folder
rm -r store.db Data/Migrations/
dotnet ef migrations add PostgresIntial -o Data/Migrations
```

PostgreSQL extension from Chris Kolkman
