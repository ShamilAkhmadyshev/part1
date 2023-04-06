
import { useState } from "react";

// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

// const Hello = ({ name, age }) => {


//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div><p>Hello {name}, you are {age} years old</p>
//       <p>Your day of birth is {bornYear()}</p>
//     </div>
//   )
// }

const Buttons = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = props => <div>{props.value}</div>
const App = (props) => {
  // const name = 'Shamil';
  // const age = 23;
  // const course = {
  //   name: "Half Stack application development",
  //   parts: [
  //     {
  //       name: "Fundamentals of React",
  //       exercises: 10
  //     },
  //     {
  //       name: "Using props to pass data",
  //       exercises: 7
  //     },
  //     {
  //       name: "State of a component",
  //       exercises: 14
  //     },],
  // };

  // const Part1 = (props) => {
  //   return (<div>
  //     <p>{props.part1} {props.exercises1}</p>
  //   </div>)
  // }
  // const Part2 = (props) => {
  //   return (<div>
  //     <p>{props.part2} {props.exercises2}</p>
  //   </div>)
  // }
  // const Part3 = (props) => {
  //   return (<div>
  //     <p>{props.part3} {props.exercises3}</p>
  //   </div>)
  // }
  // const Header = (props) => { return (<h1>{props.course}</h1>) };
  // const Content = () => {
  //   return (<div>
  //     <Part1 part1={course.parts[0].name} exercises1={course.parts[0].exercises} />
  //     <Part2 part2={course.parts[1].name} exercises2={course.parts[1].exercises} />
  //     <Part3 part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
  //   </div>)
  // };
  // const Total = (props) => {
  //   return (<div>
  //     Number of exercises {(props.exercises1) + (props.exercises2) + (props.exercises3)}
  //   </div>)
  // }
  // const [counter, setCounter] = useState(0);
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0,
  // });
  // const handleLeftClick = () => {
  //   setClicks({
  //     ...clicks, left: clicks.left + 1,
  //   });
  // }


  // const handleRightClick = () => {
  //   setClicks({
  //     ...clicks,
  //     right: clicks.right + 1,
  //   });
  // }



  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAllClicks] = useState([]);


  // const handleLeftClick = () => {
  //   setAllClicks(allClicks.concat("L"));
  //   const updatedLeft = left + 1;
  //   setLeft(updatedLeft)

  // }
  // const handleRightClick = () => {
  //   setAllClicks(allClicks.concat("R"));
  //   const updatedRight = right + 1;
  //   setRight(updatedRight);

  // }

  // const Button = ({ handleClick, text }) => (
  //   <button onClick={handleClick}>{text}</button>
  // )


  // const History = (props) => {
  //   if (props.allClicks.length === 0) {
  //     return (
  //       <div >
  //         Press any button above
  //       </div>
  //     )
  //   } else
  //     return (
  //       <div >
  //         Button press history: {props.allClicks.join(' ')}
  //       </div>
  //     )
  // }

  // const block = {
  //   display: 'block',
  // }




  const [value, setValue] = useState(10);

  // const hello = (who) => () => { console.log(`Hello ${who}`) };
  const setToValue = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  }
  // const one = () => () => {
  //   setToValue(1000);
  //   hello("world");
  // }
  // const two = () => () => {
  //   setToValue(0);
  //   hello("react");
  // }
  // const three = () => () => {
  //   setToValue(value + 1);
  //   hello("function");
  // }

  // setTimeout(() => setCounter(counter + 1), 1000)

  // const handleClick = () => {
  //   console.log("click");
  // }
  // const Display = ({ counter }) => <>{counter}</>

  // const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
  // const minusSetCounter = () => setCounter(counter - 1);
  // const clearSetCounter = () => setCounter(0);
  // const addSetCounter = () => setCounter(counter + 1)



  return (
    <>
      <Display value={value} />
      <Buttons handleClick={setToValue(1000)} text='thousand' />
      <Buttons handleClick={setToValue(0)} text='Zero' />
      <Buttons handleClick={setToValue(value + 1)} text='Incriment' />

      {/*     
      {left}
      <Button handleClick={handleLeftClick} text="Left" />
      <Button handleClick={handleRightClick} text="Right" />

      {right}
      <History allClicks={allClicks} /> */}


      {/* <Header course={course.name} />
      <Content />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
      <Hello name={name} age={age} />
     />
       */}
      {/* <Display counter={counter} />
      <Button text="Plus one" handleClick={addSetCounter} />
      <Button text="Clear" handleClick={clearSetCounter} />
      <Button text="Minus one" handleClick={minusSetCounter} /> */}
      {/* <button onClick={addSetCounter}>
        Click me
      </button>
      <button onClick={funcSetCounter}>
        Clear
      </button> */}
      {/* <Hello name age />
        <Hello name="Sofia" age={21} />
        <button className="buttoncounter" onClick={() => setCounter(counter + 1)}>Click me</button> */}

    </>
  );
}

export default App;


// const arr = [1, 9, 144, 15];
// arr.push(20);
// console.log(arr);
// const newArr = arr.concat(32);
// console.log(newArr);

// const doubleArr = newArr.map((num) => num ** 2);
// console.log(doubleArr);
// const li = newArr.map(value => '<li>' + value + '</li>');
// console.log(li);

// map.forEach(value => console.log(value));

// const a = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = a;
// console.log(first, second);
// console.log(rest);

// const map2 = a.map(e => e * 2);
// console.log(map2);

// const array = {
//   name: 'Babish',
//   age: 55,
//   education: "Bc",
//   occupation: "prezident",
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   addition: function (a, b) {
//     const add = a + b;
//     console.log(add);
//   },
// }

// console.log(array);
// array.greet();
// array.growOlder = function () {
//   this.age += 1;
// }
// console.log(array.age);
// array.growOlder();
// console.log(array.age);
// array.addition(1, 5);
// const whatAdd = array.addition;
// whatAdd(10, 33);
// const newName = array.greet.bind(array);
// newName();


// class Preson {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   greet() {
//     console.log(`Hello, my name is ${this.name}, I'm ${this.age} old`);
//   }
// }
// const Shamil = new Preson("Shamil", 23);
// const Sofia = new Preson("Sofia", 21);
// Shamil.greet();
// Sofia.greet();