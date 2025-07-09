import { useState } from "react";
import style from "./SpaceMission.module.css"
import Planet from "./Planet"

export function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  const [planet, setPlanet] = useState<string>("the edge of the universe");

  return (
    <div className={style.spaceMission}>
      {/* {fullName ? (<p>asfdsdf</p>) : (<p>rwooto</p>)} */}
      <h2>
        {name === ""
        ? "Please enter your name to begin your mission." 
        : `Astronaut ${name} is headed to ${planet}!`}
      </h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      <label>
        Planet:
        <select value={planet} onChange={(e) => setPlanet(e.target.value)} >
            <option defaultValue="the edge of the universe" disabled>-</option>
            <option value={Planet.MARS}>{Planet.MARS}</option>
            <option value={Planet.JUPITER}>{Planet.JUPITER}</option>
            <option value={Planet.SATURN}>{Planet.SATURN}</option>
            <option value={Planet.VENUS}>{Planet.VENUS}</option>
        </select>
      </label>
    </div>
  );
}
