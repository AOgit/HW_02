import { useState } from "react";

export default function GenderPredictor() {
    // Я бы завел только одну переменную-состояние message
    // зачем 5 раз подряд перезагружать компонент, верно?
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [probability, setProbability] = useState<number>();
  const [country, setCountry] = useState<string>("");
  const [credits, setCredits] = useState<number>();
  const [nameErrorMsg, setNameErrorMsg] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  const fetchGender = async (name: string) => {
    try {
      setErrMessage("");
      const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
      if (!res.ok) throw Error("Ошибка получения данных");
      const obj = await res.json();
      if (obj.name === "null") throw Error("К сожалению не удалось определить Ваш пол");
      setName(obj.name);
      setGender(obj.gender);
      setProbability(obj.probability);
      setCountry(obj.country);
      setCredits(obj.remaining_credits);
    } catch (err: unknown) {
      if (err instanceof Error) setErrMessage(err.message);
    }
  };

  const getInfo = () => {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    if (validate(nameInput.value)) {
      fetchGender(nameInput.value);
    }
  };

  function validate(name: string): boolean {
    if (name.length === 0) {
      setNameErrorMsg("Вы не ввели имя. Введите имя");
      return false;
    }
    setNameErrorMsg("");
    return true;
  }

  return (
    <div>
      <h2>GenderPredictor</h2>
      {errMessage ? <p>{errMessage}</p> : null}
      <p>
        {name && !errMessage && !nameErrorMsg ? (
          <p>
            {name.charAt(0).toUpperCase() + name.slice(1)}, ваш пол{" "}
            {gender === "male" ? "мужской" : "женский"} с вероятностью{" "}
            {probability} %
            <p>
              Страна: {country}, остаток кредитов: {credits}
            </p>
          </p>
        ) : (
          "Введите имя для определения пола"
        )}
      </p>
      <input type="text" id="name" />
      <p style={{ color: "red" }}>{nameErrorMsg}</p>
      <button
        type="button"
        onClick={getInfo}
        style={{ backgroundColor: "#ade6af", marginBottom: "10px" }}
      >
        Узнать пол
      </button>
    </div>
  );
}
