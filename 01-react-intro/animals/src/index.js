import React from 'react';
import ReactDOM from 'react-dom/client';

const animals = [
  { name: 'Cat', emoji: '🐱', isMammal: true, color: 'black', id: 1 },
  { name: 'Dog', emoji: '🐶', isMammal: true, color: 'brown', id: 2 },
  { name: 'Snake', emoji: '🐍', isMammal: false, color: 'green', id: 3 },
  { name: 'Pig', emoji: '🐷', isMammal: true, color: 'pink', id: 4 },
  { name: 'Rabbit', emoji: '🐰', isMammal: true, color: 'white', id: 5 },
]

const AnimalItem = ({ animal }) => (
  <tr>
    <td>{animal.name}</td>
    <td>{animal.emoji}</td>
    <td>{animal.isMammal ? 'Yes' : 'No'}</td>
    <td>{animal.color}</td>
  </tr>
);

const List = ({ animals }) => {
  const [list, setList] = React.useState(animals) // [], {}

  React.useEffect(() => {
    setTimeout(() => {
      const newAnimal = { name: 'Tiger', emoji: '🐯', isMammal: true, color: 'orange', id: 6 }

      setList([...list, newAnimal])
      console.log(newAnimal)
    }, 1000)
  }, [list])

  return (
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Emoji</th>
        <th>Is Mammal</th>
        <th>Color</th>
      </tr>
      </thead>
      <tbody>
      {list.map((animal) => <AnimalItem key={animal.id} animal={animal} />)}
      </tbody>
    </table>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <h1>Hello, world!</h1>

    <List animals={animals} />
  </>
);
