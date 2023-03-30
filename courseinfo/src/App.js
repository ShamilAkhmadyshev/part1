


// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Hello {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

const Hello = (props) => {
  const bornYear = () => {
    const now = new Date().getFullYear();
    return now - props.age
  }
  return (

    <div><p>Hello {props.name}, you are {props.age} years old</p>
      <p>Your day of birth is {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const name = 'Shamil';
  const age = 23;
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      },],
  };

  const Part1 = (props) => {
    return (<div>
      <p>{props.part1} {props.exercises1}</p>
    </div>)
  }
  const Part2 = (props) => {
    return (<div>
      <p>{props.part2} {props.exercises2}</p>
    </div>)
  }
  const Part3 = (props) => {
    return (<div>
      <p>{props.part3} {props.exercises3}</p>
    </div>)
  }
  const Header = (props) => { return (<h1>{props.course}</h1>) };
  const Content = () => {
    return (<div>
      <Part1 part1={course.parts[0].name} exercises1={course.parts[0].exercises} />
      <Part2 part2={course.parts[1].name} exercises2={course.parts[1].exercises} />
      <Part3 part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
    </div>)
  };
  const Total = (props) => {
    return (<div>
      Number of exercises {(props.exercises1) + (props.exercises2) + (props.exercises3)}
    </div>)
  }
  return (
    <>
      <Header course={course.name} />
      <Content />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
      <Hello name={name} age={age} />
      <Hello name="Sofia" age={21} />
    </>
  );
}

export default App;


const arr = [1, 9, 144, 15];
arr.push(20);
console.log(arr);
const newArr = arr.concat(32);
console.log(newArr);

const map = newArr.map(Math.sqrt);
console.log(map);
console.log(15 * 15);
const li = newArr.map(value => '<li>' + value + '</li>');
console.log(li);

map.forEach(value => console.log(value));

const a = [1, 2, 3, 4, 5];
const [first, second, ...rest] = a;
console.log(first, second);
console.log(rest);

const map2 = a.map(e => e * 2);
console.log(map2);

const array = {
  name: 'Babish',
  age: 55,
  education: "Bc",
  occupation: "prezident",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  addition: function (a, b) {
    const add = a + b;
    console.log(add);
  },
}

console.log(array);
array.greet();
array.growOlder = function () {
  this.age += 1;
}
console.log(array.age);
array.growOlder();
console.log(array.age);
array.addition(1, 5);
const whatAdd = array.addition;
whatAdd(10, 33);
const newName = array.greet.bind(array);
newName();


class Preson {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} old`);
  }
}
const Shamil = new Preson("Shamil", 23);
const Sofia = new Preson("Sofia", 21);
Shamil.greet();
Sofia.greet();