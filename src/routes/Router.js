import { Route, Routes } from "react-router-dom";
import CounterContainer from "../pages/Counter/containers/CounterContainer";
import CounterListContainer from "../pages/CounterList/containers/CounterListContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";
import HomePageContainer from "../pages/HomePage/containers/HomePageContainer";
import ListsContainer from "../pages/Lists/containers/ListsContainer";
import { ROUTE_NAMES } from "./routeNames";


const Router = () => {
	return <Routes>
		<Route path={ROUTE_NAMES.HOME} element={<HomePageContainer />} />
		<Route path={ROUTE_NAMES.COUNTER} element={<CounterContainer />} />
		<Route path={ROUTE_NAMES.FUNCTIONAL_COUNTER} element={<FunctionalCounterContainer />} />
		<Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
		<Route path={ROUTE_NAMES.COUNTER_LIST} element={<CounterListContainer />} />
	</Routes>
};


export default Router;