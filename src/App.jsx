import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { restCountries } from "./store/Api";
import { REGIONS } from "./region";
import Region from "./components/Cards/Regions/Region";
import Cards from "./components/Cards/Card/Cards";
const App = () => {
  const { Countriess, error, status } = useSelector(
    (state) => state.Countriesname
  );
  const [region, setRegion] = useState("Oceania");
  console.log(Countriess);
  const dispatch = useDispatch();
  let addRegion = (name) => {
    setRegion(name);
    dispatch(restCountries(region));
  };
  useEffect(() => {
    dispatch(restCountries(region));
  }, [dispatch]);
  return (
    <div className="App">
      <h2>{region}</h2>
      <div className="REGIONS">
        {REGIONS.map((res, i) => {
          return (
            <Region
              key={i}
              onClick={() => addRegion(res.title)}
              id={res.id}
              title={res.title}
            />
          );
        })}
      </div>
      {status === "logding" && <h2> logding</h2>}
      {error && <h2>erorr :{error}</h2>}
     <Cards data={Countriess}/>
    </div>
  );
};

export default App;
