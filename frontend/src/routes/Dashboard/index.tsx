import pages from "@pages/index";

export default {
    path: "/dashboard",
    element: <pages.Dashboard />,
    title: "Dashboard | " + import.meta.env.VITE_APP_NAME || "Dashboard | Pels"
}