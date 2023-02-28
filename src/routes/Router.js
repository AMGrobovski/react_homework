import { Route, Routes } from "react-router-dom";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import { ROUTE_NAMES } from "./routeNames";


const Router = () => {
	return <Routes>
		<Route path={ROUTE_NAMES.HOME} element={<div>Home Page</div>} />
		<Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
	</Routes>
};


export default Router;