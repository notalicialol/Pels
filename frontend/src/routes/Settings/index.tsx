import pages from "@pages/index";

export default {
    path: "/settings",
    element: <pages.Settings />,
    title: "Settings | " + import.meta.env.VITE_APP_NAME
}