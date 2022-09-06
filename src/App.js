import './App.css';
import React, {useState} from 'react'

function App() {
  const [chores, setChores] = useState([
    { name: "Hoover"},
    { name: "Go For Walk"},
    { name: "Wash Dishes"},
    { name: "Eat Food"},
    { name: "Get Shopping"}
  ])

  const choreNodes = chores.map((chore, index) => {
    return(
        <li key={index}><span>{chore.name}</span></li>
    )
}) 
const [listItem, setListItem] = useState("");

const handleChoreInput = (chore) => { 
  setListItem(chore.target.value)
}
const saveListItem = (chore) => { 
  chore.preventDefault();
  const copyChore = [...chores]
  copyChore.push({name: listItem, isPurchased: false})
  setChores(copyChore)
  setListItem("")
}
  return (
    <div className='todo'>
      <ul>
        {choreNodes}
      </ul>
      <form onSubmit={saveListItem}>
        <label htmlFor="new-chore">Add a new chore:</label>   
        <input id="new-chore" type="text" value={listItem} onChange={handleChoreInput} height="50" width="40" />                
        <input type="submit" value="Add Chore" /> 
              
      </form>
    </div>
  );
}

export default App;
