
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import { ROUTER } from "./utils/router";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./profilePage";
import ShoppingCart from "profilePage/shoppingCart";
import ListProductss from "profilePage/listProductss";
import LoginUser from "profilePage/loginUser";
import ProductDetailPage from "profilePage/productDetailPage";

const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTER.USER.CART,
            component: <ShoppingCart />
        },
        {
            path: ROUTER.USER.PRODUCTS,
            component: <ListProductss />
        },
        {
            path: `${ROUTER.USER.DETAIL}/:id`,
            component: <ProductDetailPage />
        },
        {
            path: ROUTER.USER.LOGIN,
            component: <LoginUser />
        },

    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouter.map((item, key) =>
                    (
                        <Route key={key} path={item.path} element={item.component} />
                    )
                    )
                }
            </Routes>
        </MasterLayout>

    )
}

const RouterCustom = () => {
    return renderUserRouter();
}

export default RouterCustom;