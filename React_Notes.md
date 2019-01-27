# Learn React Notes 

Website: [https://reactjs.org/](https://reactjs.org/)

It's a JavaScript library that is made for User interface. It's supposed to be able to help Single page applications. The High-speed virtual DOM (Document Object Model) reloads by itself. 

**Functional Programming** - using functions rather than object oriented programming 

**Immuatability** - we would be creating duplicates of an object and replacing them rather than trying to mutate the original 

**DOM** - Document Object Model, refers to the API that the page elements need and helps them change if something needs to be modified. 

JavaScript Objects are faster than DOM objects. React Virtual DOM is a JS object. It never reads from the real DOM and only writes if there are changes that need to happen. 

JSX - JavaScript as XML 

## Getting started 

You will need Node. 

#### Update Node.js 

* `sudo npm cache clean -f` - clears npm cache 
* `sudo npm install -g n`
* `sudo n stable` - will download the latest version

To set up a bare bones project, you can use the "create-react-app" Github repo 

`sudo npm install -g create-react-app`

To use it to create an app, you just type `create-react-app <projectname>` in the directory path that you want to create a new project.  

* Enter the folder that has the project name 
* Type `npm start` and it will launch the app 