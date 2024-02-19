# Campflix - Lukman Rambe

This is a project for Campaign Technical Assignment. A website to list all TV Shows from an API.

## Technical Assignment Details ##

### Instructions ###

1. Please create your own repository and invite this email bony@vocagame.com whydn@vocagame.com.
2. Use ReactJS, Next.js, Redux Toolkit, and Tailwind CSS to build a web application.
3. Implement session management using cookies.
4. Commit your changes and push them to your branch when you are done.
5. Provide a brief explanation of your implementation choices and instructions on how to run the project in the README.md file.

### Requirements ###

Login Page
1. Create a login page with fields for users to enter their credentials.
2. Validate the form inputs using a suitable method and display appropriate error messages for invalid inputs.
3. Upon successful login, store the user's session in encrypted cookies set to expire in 1 minute.
4. Store the user's data in the Redux store upon successful login.
5. After successful login, use next/router to redirect the user to their profile page.

Register Page
1. Create a registration page with fields for users to create a new account.
2. Validate the form inputs using a suitable method and display appropriate error messages for invalid inputs.
3. Upon successful registration, store the user's session in encrypted cookies.
4. Store the user's data in the Redux store upon successful registration.
5. After successful registration, use next/router to redirect the user to the login page.

Profile Page
1. Create a profile page that displays user information retrieved from the Redux store.
2. Use next/router to ensure the profile page is only accessible to authenticated users, redirecting unauthenticated users to the
login page as needed.

Session Management
1. Implement session management using cookies to store user sessions. Cookies should be encrypted when being saved and
decrypted when retrieved.
2. Use the encrypted cookies to authenticate subsequent requests to protected routes.
3. Redirect unauthenticated users to the login page if they try to access a protected route, using next/router .
4. When a user's session cookie expires, use next/router to redirect them to the login page.
ReactJS + Next.js
1. Use ReactJS and Next.js to build the frontend of the website.
2. Use next/router for handling all routing.
3. Use Redux Toolkit for state management, making sure to update the state appropriately upon user login and registration
Flow
1. Upon first accessing the web application, display the registration page.
2. After successful registration, display the login page.
3. After successful login, display the profile page, populated with user information retrieved from the Redux store.
4. When a user's session cookie expires, redirect them to the login page.

Styling
Style all pages using Tailwind CSS for a consistent and attractive UI.
Make sure that all the components are responsive and provide a good user experience across different screen sizes.
Check the application on various devices to ensure its responsiveness.

Interface
Please kindly note that the user is able to switch the landing theme from light to dark. You are free to decide the light and dark
colors.

### Additional Guidelines ###
Write clean, maintainable, and modular code.
Implement responsive design principles to ensure the website is mobile-friendly.
Feel free to use any additional libraries or tools you deem necessary.
Provide clear instructions on how to run the project in the README.md file.

## Getting Started

To run this example, simply do:

```sh
npm install
npm run dev
```

## IDE setup

VSCode is highly preferred. Please ensure you have installed these extensions:

- Prettier

## Useful Commands

```sh
#to run in dev mode
npm run dev

#to run in qa or production env. Expect to run this in docker
npm run start
```
