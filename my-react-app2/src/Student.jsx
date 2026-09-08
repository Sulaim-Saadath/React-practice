function Student(props) {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Student:{props.isStudent ? "Yes" : "No"}</h3>
    </>
  );
}
export default Student;
