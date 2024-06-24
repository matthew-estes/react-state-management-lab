import { useState } from "react";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  function handleAddFighter(fighter) {
    if (fighter.price > money) {
      console.log("Not enough money");
    } else {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setZombieFighters(
        zombieFighters.filter((selected) => selected !== fighter)
      );
    }
  }

  function handleRemoveFighter(fighter) {
    setTeam(team.filter((teamMember) => teamMember !== fighter));
    setMoney(money + fighter.price);
    setZombieFighters([...zombieFighters, fighter]);
  }

  const totalStrength = team.reduce(
    (total, fighter) => total + fighter.strength,
    0
  );
  const totalAgility = team.reduce(
    (total, fighter) => total + fighter.agility,
    0
  );

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: ${money} </h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team</h3>
      <div class="team">
      {team.length === 0 ? (
        <li>Pick some team members!</li>
      ) : (
        team.map((fighter, index) => (
          <li key={index}>
            <li>
              <img src={fighter.img} alt={fighter.name} width="100px"/>
            </li>
            <li>{fighter.name}</li>
            <li>Price:  {fighter.price}</li>
            <li>Strength:{fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
        ))
      )}
       </div>
      <h3>Fighters</h3>
      <div class="fighters">
      {zombieFighters.map((fighter, index) => (
        <li key={index}>
          <li>
            <img src={fighter.img} alt={fighter.name} width="100px"/>
          </li>
          <li>{fighter.name}</li>
          <li>Price: {fighter.price}</li>
          <li>Strength: {fighter.strength}</li>
          <li>Agility: {fighter.agility}</li>
          
          <button onClick={() => handleAddFighter(fighter)}>Add</button>
        </li>
      ))}
      </div>
    </>
  );
}

export default App;
