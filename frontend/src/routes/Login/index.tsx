import pages from "@pages/index";

export default {
    path: "/login",
    element: <pages.Auth mode="login" />,
    title: "Login | " + import.meta.env.VITE_APP_NAME
}