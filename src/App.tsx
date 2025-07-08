import './App.css';
import Card from './components/Card/Card';
import Greeting from './components/Greeting/Greeting'
import ThankYou from './components/ThankYou/ThankYou';
import catPicture from "./assets/cat.jpg";
import Goodbye from './components/Goodbye/Goodbye';
import ProfileCard from './components/ProfileCard/ProfileCard';
import {Counter} from './components/Counter/Counter';
import PersonalGreeting from './components/PersonalGreenting/PersonalGreeting';
import WeightCalculator from './components/WeightCalculator/WeightCalculator';
import SpaceMissionForm from './components/SpaceMissionForm/SpaceMissionForm';

function App() {
  return (
    <>

        <SpaceMissionForm />

        <WeightCalculator />

        <PersonalGreeting />

        <Counter />
        <Counter />

        <Goodbye />

        <ProfileCard 
        name="Эйс" 
        avatar="https://pbs.twimg.com/profile_images/378800000615328178/01c84f5cba77757bd10a5e6f75dbfd5b_400x400.jpeg"
        description="Является потомком «Эрнеста Вентуры Шеклтона» и «Жака Вентуры Кусто». Изначально проживал в Майами, работая частным детективом по поиску пропавших животных" 
        />

        <Greeting name={"Vasilii"} />
        <Greeting name={"Evgenii"} age={18}/>
        <ThankYou />
        {/* <Card url={"https://img.ixbt.site/live/images/original/31/96/01/2023/11/28/cc4a5af0af.jpg?w=877"} alt="Милый котик" /> */}
        <Card url={catPicture} alt="Милый котик" />
  
    </>
  )
}

export default App
