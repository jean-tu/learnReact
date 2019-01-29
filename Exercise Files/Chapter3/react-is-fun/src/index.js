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

// class SkiDayCounter extends Component {
//   getPercent = decimal => {
//     return decimal * 100 + '%'
//   }
//   calcGoalprogress = (total,goal) => {
//     return this.getPercent(total/goal)
//   }
//   render(){
//     const {total, powder, backcountry, goal} = this.props //importing it from the props
//     return(
//
//     )
//   }
// }

ReactDOM.render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  document.getElementById('root')
);

// class Message extends React.Component {
//   render() {
//     console.log(this.props)
//       return(
//         <div>
//           <h1 style={{color: this.props.color}}>
//             {this.props.msg}
//           </h1>
//           <p>
//             I'll check back in {this.props.minutes} minutes
//           </p>
//         </div>
//       )
//   }
// }
//
// ReactDOM.render(
//   <Message color="blue" msg="how are you?" minutes={50}/>,
//   document.getElementById('root')
// );
