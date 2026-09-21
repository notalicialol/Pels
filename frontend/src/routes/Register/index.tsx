import pages from "@pages/index";

export default {
    path: "/register",
    element: <pages.Auth mode="register" />,
    title: "Register | " + import.meta.env.VITE_APP_NAME || "Register | Pels"
}