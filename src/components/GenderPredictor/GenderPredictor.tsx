import { useState } from "react";
const key = import.meta.env.VITE_GENDER_API_KEY;

interface GenderInfo {
  name: string;
  gender: "male" | "female";
  probability: number;
  country: string;
  remainingCredits: number;
};

export default function GenderPredictor() {
  const [info, setInfo] = useState<GenderInfo | null>(null);
  const [nameErrorMsg, setNameErrorMsg] = useState<string>("");
  const [errMessage, setErrMessage] = useState<string>("");

  const fetchGender = async (name:string) => {
    try {
        setErrMessage("");
        const res = await fetch(`https://api.genderapi.io/api/?key=${key}&name=${name}`);
        if (!res.ok) throw Error("Ошибка получения данных");
        const obj = await res.json();
        if (obj.name === "null") throw Error("К сожалению не удалось определить Ваш пол");
        setInfo({
          name: obj.name.charAt(0).toUpperCase() + obj.name.slice(1),
          gender: obj.gender,
          probability: obj.probability,
          country: obj.country,
          remainingCredits: obj.remaining_credits,
        });
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
        {info && !errMessage && !nameErrorMsg ? (
        <div>
            <p>
            {info.name}, ваш пол — {info.gender === "male" ? "мужской" : "женский"} с вероятностью {info.probability}%
            </p>
            <p>Страна: {info.country}</p>
            <p>Остаток кредитов: {info.remainingCredits}</p>
        </div>
        ):(
        <p>Введите имя для определения пола</p>
        )}
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
