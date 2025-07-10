import "./App.css";
// import Card from './components/Card/Card';
// import Greeting from './components/Greeting/Greeting'
// import ThankYou from './components/ThankYou/ThankYou';
// import catPicture from "./assets/cat.jpg";
// import Goodbye from './components/Goodbye/Goodbye';
// import ProfileCard from './components/ProfileCard/ProfileCard';
import { Counter } from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreenting/PersonalGreeting";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm";
import Demo from "./components/Demo";
import AgePredictor from "./components/AgePredictor/AgePredictor";
import GenderPredictor from "./components/GenderPredictor/GenderPredictor";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { MainLayout } from "./layout/MainLayout";
import { PonyLayout } from "./layout/PonyLayout";
import { routes } from "./constants/routes";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { PanelLayout } from "./layout/PanelLayout";
import UserInfo from "./pages/UserInfo/UserInfo";
import UserSettings from "./pages/UserSettings/UserSettings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={routes.CONTACT} element={<Contact />} />
            <Route path={routes.ABOUT} element={<About />} />
            <Route path='/user' element={<PanelLayout />} >
              <Route path={routes.USER_INFO} element={<UserInfo />} />
              <Route path={routes.USER_SETTINGS} element={<UserSettings />} /> 
            </Route>
            <Route path={routes.REGISTRATION} element={<Registration />} />
            <Route
              path={routes.GENDER_PREDICTOR}
              element={<GenderPredictor />}
            />
            <Route path={routes.AGE_PREDICTOR} element={<AgePredictor />} />
            <Route path={routes.DEMO} element={<Demo />} />
            <Route path={routes.SPACE_MISSION} element={<SpaceMissionForm />} />
            <Route
              path={routes.WEIGHT_CALCULATOR}
              element={<WeightCalculator />}
            />
            <Route
              path={routes.PERSONAL_GREETING}
              element={<PersonalGreeting />}
            />
            <Route path={routes.COUNTER} element={<Counter />} />
            <Route path={routes.NOT_FOUND} element={<NotFound />} />

            <Route path={routes.PONY} element={<PonyLayout />}>
              <Route path={routes.PONY_MY} element={<Counter />} />
              <Route path={routes.PONY_BUY} element={<Counter />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* 
        <Goodbye />


        <ProfileCard 
        name="Эйс" 
        avatar="https://pbs.twimg.com/profile_images/378800000615328178/01c84f5cba77757bd10a5e6f75dbfd5b_400x400.jpeg"
        description="Является потомком «Эрнеста Вентуры Шеклтона» и «Жака Вентуры Кусто». Изначально проживал в Майами, работая частным детективом по поиску пропавших животных" 
        />

        <Greeting name={"Vasilii"} />
        <Greeting name={"Evgenii"} age={18}/>
        <ThankYou />
         <Card url={"https://img.ixbt.site/live/images/original/31/96/01/2023/11/28/cc4a5af0af.jpg?w=877"} alt="Милый котик" /> 
        <Card url={catPicture} alt="Милый котик" /> */}
    </>
  );
}

export default App;
