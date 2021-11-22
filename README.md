# React authentication & authorization demo

This project demonstrates the use of JSON Web Tokens together with an API to perform signup and login operations together with React Router to handle views, which are only available for logged in users.

## Context and state versions
There are two versions in this demo. In branch `master` there is the version using Context to store and share the JSON Web Token. In branch `authstatebased` is a simpler version, which uses root component state to store the JWT and regular props to share it to child components. 

## API counterpart
The API application in this repository https://github.com/lassehav-oamk/api-authentications-demos is used as a counterpart for this React client. Both the react client and api application must be running. Check that there is not a port conflict (both in 3000 for example) and make sure the port is correctly set for this React application in the `Constants.json` file. 

## How to start
This is create-react-app based demo project, so you can start the development server by `npm run start` command. 
