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

## Components

Components are declared with the term **class** in front of it. The name of all components should be capitalized.

```
class Message extends React.Component {
  render(){
      return(
        <div>
          <h1>Hello Everyone</h1>
        </div>
      )
  }
}

ReactDOM.render(
  <Message />,
  document.getElementById('root')
);
```

## Props

aka properties. Kind of like parameters in programming. You can add as many props as you would like.

If you are passing in a number as a property, then it needs to be expressed as JSX (aka with the `{}`)

```
class Message extends React.Component {
  render() {
    console.log(this.props)
      return(
        <div>
          <h1 style={{color: this.props.color}}>
            {this.props.msg}
          </h1>
          <p>
            I'll check back in {this.props.minutes} minutes
          </p>
        </div>
      )
  }
}

ReactDOM.render(
  <Message color="blue" msg="how are you?" minutes={50}/>,
  document.getElementById('root')
);
```
### Example #2 Using

```
import React, { Component } from 'react'; // abstracting Component from React so you don't have to do React.Component
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component {
  render(){
    const {total, powder, backcountry, goal} = this.props //importing it from the props
    return(
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Days: {goal}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  document.getElementById('root')
);
```

## Custom Methods

```
import React, { Component } from 'react'; // abstracting Component from React so you don't have to do React.Component
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + '%'
  }
  calcGoalprogress = (total,goal) => {
    return this.getPercent(total/goal)
  }
  render(){
    const {total, powder, backcountry, goal} = this.props //importing it from the props
    return(
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calcGoalprogress(total,goal)}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  document.getElementById('root')
```

## Refactor of custom methods

```
import React, { Component } from 'react'; // abstracting Component from React so you don't have to do React.Component
import ReactDOM from 'react-dom';

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}

const  calcGoalprogress = (total,goal) => {
    return getPercent(total/goal)
}

const SkiDayCounter = ({total,powder, backcountry,goal}) => {
  return (
    <section>
      <div>
        <p>Total Days: {total}</p>
      </div>
      <div>
        <p>Powder Days: {powder}</p>
      </div>
      <div>
        <p>Backcountry Days: {backcountry}</p>
      </div>
      <div>
        <p>Goal Progress: {calcGoalprogress(total,goal)}</p>
      </div>
    </section>
  )
}
```
