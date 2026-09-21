import { memo } from "react";

interface RouteWrapperProps {
    element: React.JSX.Element;
}

const RouteWrapper: React.FC<RouteWrapperProps> = memo(({element}) => {
    return element;
});

export default RouteWrapper;