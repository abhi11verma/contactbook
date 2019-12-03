## Learning React - Hardway
We will be building a complex CRUD Singlepage application - "Contact Book"

Front End : React<br>
Back End : php

###Creating the project

We will need a toolchain to initialize the react project, React Team recommends multiple options, here we will stick to a basic [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app contactbook`

This will create a project named `contactbook` with a basic react page.

### Start the App

Run the following command in the contactbook root folder
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## Contepts

React is a javascript library that you can use to create components, which are like custom, reusable HTML elements, to quickly and efficiently build user interfaces. React also streamlines how data is stored and handled, using state and props.


![Basic Structure](images/basic-structure.png?raw=true "Basic Structure")


#### File-folder structure

After creating the project you will see a structure like this

![File Folder Structure] ()

- package.json : App configuration related information, name, version, scripts that can be run.

- public/index.html : This is the main html file which has a div with id = "root" . This provides react app a div container to run (inject) the app created.

- src : Folder where all the react code relies

- src/index.js : Entry point of the application. This file inject the app created in the root div container of the index.html using ReactDOM.

`ReactDOM.render(<App />, document.getElementById('root'));`

ReactDOM is a virtual DOM which is used to render the app and its component. Basically the app is running inside the root container under a virtualDOM provided by React.<br> React is responsible to create, update, mentain the DOM based on the components.

#### JSX
#### Components
-  Simple (functional) - stateLess components
- Class (classBased) stateFull components

#### Props
- parentToChild Prop passing


#### Pure Component

#### Router
#### Higher Order Components

### Redux

`npm install redux react-redux`

- Why
- Steps

### Middleware
### Redux-Saga

`npm install redux-saga`

### Redux-thunk

`npm install redux-thunk`

### API Call

`npm install axios`

### For Design library - ant

`npm install antd`
