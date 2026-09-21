import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import routes from "@routes/index";
import { RouteWrapper } from "@utils/index";
import GlassFilters from "@components/UI/GlassFilters";

import NotFound from "@pages/NotFound";
import Loader from "@pages/Loader";
import { useLoading } from "@stores/LoadingStore";

import "./all.scss";
import "./tailwind.css";

type RouteType = {
	path: string;
	element: React.JSX.Element;
	title?: string;
}

const App : React.FC = () => {
	const {loading, setLoading} = useLoading();

	const location = useLocation();

	useEffect(() => {
		const match = Object.values(routes).find((route: RouteType) => route.path === location.pathname);
		document.title = match?.title || "Pels";
	}, [location.pathname]);

	useEffect(() => {
		setLoading(true);

		const time = window.setTimeout(() => setLoading(false), 1000);

		return () => window.clearTimeout(time);
	}, [setLoading]);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
            <GlassFilters />
			
			<Routes>
				{Object.values(routes).map((route: RouteType) => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<RouteWrapper element={route.element} />}
						/>
					)
				})}

				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App;