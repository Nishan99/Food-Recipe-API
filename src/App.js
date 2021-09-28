import React, { useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./components/img/hamburger.png";

function App() {
  const [item, setItem] = useState("");
  const [datas, setDatas] = useState([]);
  const api_id = "cfe92bbc";
  const api_key = "e6390857a82e08e5c2591b273ef5a4fd";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=${api_id}&app_key=${api_key}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    apiSearch();
  };

  const apiSearch = async () => {
    const datas = await fetch(`${url}`);
    let val = await datas.json();
    setDatas(val.hits);
    console.log(val.hits);
  };
  return (
    <div className="App">
      <div className='heading-container'>
        <h2 className='mx-3'>Food Recipe App food</h2>
        <div className="heading-img-container">
          <img src={Logo} className="heading-logo img-fluid" />
        </div>
      </div>
      <form className='search-form'onSubmit={(e) => handleSubmit(e)}>
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          placeholder="enter your receipe"
        />
        <button type="submit" className='btn-search-form'><i class="btn-search fas fa-search"></i></button>
      </form>
      <main className="food-container container">
        {datas.map((item) => {
          return <Recipe item={item} />;
        })}
      </main>
    </div>
  );
}

export default App;
