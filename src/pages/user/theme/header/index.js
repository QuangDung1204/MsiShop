import { memo, useState } from 'react';
import './style.scss';


import { AccountCircleOutlined, ArticleOutlined, HeadsetMicOutlined, HomeRepairServiceOutlined, LoyaltyOutlined, NotificationsActiveOutlined, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Marquee from './auto-text';
import msilogo from './img/msilogo.png'
import { formatter } from 'utils/fomater';
import { ROUTER } from 'utils/router';
import SearchBar from './SearchBar/SearchBar';
import ListIcon from '@mui/icons-material/List';
import Slideshow from './Slideshow';
import ImageList from './ImageList/ImageList';

const Header = () => {



    const [menus, setMenus] = useState([
        {
            name: "Trang Chủ",
            path: ROUTER.USER.HOME,
        },
        {
            name: "Sản Phẩm",
            path: ROUTER.USER.PRODUCTS,
            isShowSubMenus: false,
            child: [
                {
                    name: "Máy Tính Xách Tay",
                    path: "",
                },
                {
                    name: "Máy Tính Để Bàn",
                    path: "",
                },
                {
                    name: "Thiết Bị Gaming",
                    path: "",
                },
                {
                    name: "NetWorking",
                    path: "",
                },
            ]
        },
        {
            name: "Chăm Sóc Khách Hàng",
            path: ROUTER.USER.HOME,
        }
    ])

    return (
        <>
            <div className='header_top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <Marquee />
                        </div>
                        <div className='col-6 header_top_right'>
                            <ul class='header-icons'>
                                <Link to={""}>
                                    <li><LoyaltyOutlined class="icon" />
                                    </li>
                                </Link><span>Kuyến mãi</span>
                                <Link to={""}>
                                    <li><ArticleOutlined class="icon" />
                                    </li>
                                </Link><span>Tin Công Nghệ</span>
                                <Link to={""}>
                                    <li><HomeRepairServiceOutlined class="icon" />
                                    </li>
                                </Link><span>Tư vấn</span>
                                <Link to={""}>
                                    <li><HeadsetMicOutlined class="icon" />
                                    </li>
                                </Link><span>Hotline: 0865274818</span>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>
                        <a className="logo-container">
                            <img src={msilogo} alt="Logo" style={{ width: '60px', height: '60px' }} />
                            <span className='msishop-text'>MsiShop</span>
                        </a>
                    </div>
                    <div className='col-xl-6'>
                        <SearchBar />

                        <nav className='header__menu'>
                            <ul >
                                {
                                    menus?.map((menu, menuKey) => (
                                        <li key={menuKey} className={menuKey === 0 ? 'active' : ""}>
                                            <Link to={menu?.path}>{menu?.name}</Link>
                                            {
                                                menu.child && (
                                                    <ul className='header__menu_drop'>
                                                        {
                                                            menu.child.map((childItem, childKey) => (
                                                                <li key={'${menuKey}-${childKey}'}>
                                                                    <Link to={childItem.path}>{childItem.name}</Link>
                                                                </li>
                                                            ))
                                                        }

                                                    </ul>
                                                )
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className='col-xl-9'>
                        <div className='header_cart'>
                            <div className='header_cart_prince'>
                                <span>{formatter(20000000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="/Cart">
                                        <ShoppingCart />
                                    </Link>
                                    <span>3</span>
                                </li>

                                <div class="icons">
                                    <NotificationsActiveOutlined />
                                </div>

                                <Link to={""} className=''>
                                    <li><AccountCircleOutlined class="icon_login" />
                                    </li>
                                </Link><span>Đăng nhập</span>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container ' >
                <div className='row product_list'>
                    <div className='col-lg-4 product_list__alll'>
                        <div className='product_list__all'>
                            <ListIcon />
                            Sản Phẩm Của MSI
                        </div>
                        <ul>
                            <li><Link to={"#"}>LapTop</Link></li>
                            <li><Link to={"#"}>PC</Link></li>
                            <li><Link to={"#"}>Màn Hình Máy Tính</Link></li>
                            <li><Link to={"#"}>Gaming-Gear</Link></li>
                            <li><Link to={"#"}>Linh kiện máy tính</Link></li>
                            <li><Link to={"#"}>Phụ kiện máy tính</Link></li>

                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <Slideshow />
                    </div>
                    <div className='col-lg-4'>
                        <ImageList />
                    </div>
                </div>
            </div>
        </>


    );
};

export default memo(Header);