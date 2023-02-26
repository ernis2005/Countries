import React, { FC } from "react";
import { Countries } from "../../../type/type";
import "./stylee.scss";
interface Person {
  data: Countries[];
}
const Cards: FC<Person> = ({ data }) => {
  const [filter, setFilter] = React.useState("");
  return (
    <>

      <div className="namder">
        <section>
          <div className="p-search">
            <div className="p-search__inner">

              <input className="p-search__input" onChange={(e) => setFilter(e.target.value)} type="text" placeholder="キーワードを入力"></input>
              <label className="p-search__placeholder">Поиск...</label>
              <div className="p-search__icon"><i className="gg-search"></i></div>
            </div>
          </div>
        </section>
        <div className="blocks">
          {data
            .filter((res) => {
              return filter.toLowerCase() === ""
                ? res
                : res.name.toLowerCase().includes(filter);
            })
            .map((res) => (
              <div key={res.id} className="map">
                <img src={res.flag} alt="" />
                <p>{res.name}</p>
                <p>Cтолица . {res.capital}</p>
              </div>
            ))}
        </div>

      </div>
    </>
  );
};

export default Cards;
