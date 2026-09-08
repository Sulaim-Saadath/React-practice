function List() {
  const fruit = [
    { id: 1, name: "Orange", calories: 20 },
    { id: 2, name: "Banane", calories: 50 },
    { id: 3, name: "Apple", calories: 90 },
  ];
//   const listFruits = fruit.map((fr) => (
//     <li key={fr.id}>
//       {fr.name} <b>Calories: {fr.calories}</b>
//     </li>
//   ));
//   const checkFruits = fruit.filter((fruit) => fruit.calories < 60);
//   const listFruits1 = checkFruits.map((fr) => (
//     <li key={fr.id}>
//       {fr.name} <b>Calories: {fr.calories}</b>
//     </li>
//   ));
  return (
    <>
      <ol>
        {fruit.map((fr) => {
            return (
                <>
                <li>{fr.name}-<b></b></li>
                </>
            )
        })}
      </ol>
    </>
  );
}
export default List;
