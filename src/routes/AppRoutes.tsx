
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import AgePredictor from "../components/AgePredictor/AgePredictor";
import { Counter } from "../components/Counter/Counter";
import Demo from "../components/Demo";
import GenderPredictor from "../components/GenderPredictor/GenderPredictor";
import PersonalGreeting from "../components/PersonalGreenting/PersonalGreeting";
import SpaceMissionForm from "../components/SpaceMissionForm";
import WeightCalculator from "../components/WeightCalculator/WeightCalculator";
import { MainLayout } from "../layout/MainLayout";
import { PanelLayout } from "../layout/PanelLayout";
import { PonyLayout } from "../layout/PonyLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import UserInfo from "../pages/UserInfo/UserInfo";
import UserSettings from "../pages/UserSettings/UserSettings";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import UserList from "../pages/UserList/UserList";
import { UserPage } from "../pages/UserPage/UserPage";
import Login from "../pages/Login/Login";
import { CreateProduct } from "../pages/CreateProduct/CreateProduct";

export default function AppRoutes() {
  return (
         <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={routes.CONTACT} element={<Contact />} />
            <Route path={routes.ABOUT} element={<About />} />
            <Route path={routes.PRODUCTS} element={<ProductsList />} />  
            <Route path={routes.PRODUCTS_CREATE} element={<CreateProduct />} />  
            <Route path={"/products/:id"} element={<ProductPage />} />
            <Route path={"/users"} element={<UserList />} />  
            <Route path={"/users/:id"} element={<UserPage />} />
            <Route path='/user' element={<PanelLayout />} >
              <Route path={routes.USER_INFO} element={<UserInfo />} />
              <Route path={routes.USER_SETTINGS} element={<UserSettings />} /> 
            </Route>
            <Route path={routes.REGISTRATION} element={<Registration />} />
            <Route path={"/login"} element={<Login />} />
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
  )
}
