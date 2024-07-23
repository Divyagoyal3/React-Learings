// // import logo from './logo.svg';
// import "./App.css";



// export default App;
// src/App.js
import React from 'react';
import Item from './components/item';
import ItemDate from './components/itemDate';
import Card from './components/card';
const App = () => {
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];
 const itemname ="name";
  return (
    <Card><div className="app">
    <h1>Items List</h1>
    <div className="items-container">
      {items.map(item => (
        // props are properties
        <Item key={item.id} name={item.name} price={item.price} />
      ))}
      <item name={itemname}></item>
      <ItemDate day="24" month="March" year="2029"></ItemDate><br></br>
      <ItemDate day = "30" month="jan" year="2012"></ItemDate>
    </div>
  </div>
  </Card>
    
  );
};

export default App;
