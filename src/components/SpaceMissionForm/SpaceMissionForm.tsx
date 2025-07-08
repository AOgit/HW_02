import { useState } from "react";
import style from "./SpaceMission.module.css"

export default function SpaceMissionForm() {
  const [name, setName] = useState<string>("");
  const [planet, setPlanet] = useState<string>("the edge of the universe");
  return (
    <div className={style.spaceMission}>
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
            <option value="the edge of the universe" selected disabled>-</option>
            <option value="Mars">Mars</option>
            <option value="Venus">Venus</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
        </select>
      </label>
    </div>
  );
}
