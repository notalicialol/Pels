import pages  from "@pages/index";

export default {
    path: "/",
    element: <pages.Home />,
    title: import.meta.env.VITE_APP_NAME || "Pels"
}
