import Header from "pages/user/theme/header"
import { Outlet } from "react-router-dom"

export default defaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>

    );
}