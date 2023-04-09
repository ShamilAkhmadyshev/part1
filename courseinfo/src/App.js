



const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }
  const Header = (props) => (<> {props.course.name} </>)


  // const Part = (props) => (<>{props.part} {props.exercises}</>)
  const Content = (props) => (<>
    <p>{props.course.parts[0].name} {props.course.parts[0].exercises}</p>
    <p>{props.course.parts[1].name} {props.course.parts[1].exercises}</p>
    <p>{props.course.parts[2].name} {props.course.parts[2].exercises}</p>
  </>
  )
  const Total = (props) => (<>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</>)
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
}

export default App;