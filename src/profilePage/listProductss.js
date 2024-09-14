import { AddShoppingCartOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import featProducts from 'pages/user/homePage/productsData';
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { formatter } from 'utils/fomater';
import { toast } from 'react-toastify';
import ShoppingCart from './shoppingCart';
import { ROUTER } from 'utils/router';

const ListProduct = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(savedCartItems);
    }, []);

    const handleAddToCart = (product) => {
        setCartItems((prevItems) => {
            const isItemInCart = prevItems.find(item => item.id === product.id);

            if (isItemInCart) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });

        toast.success(`${product.name} đã được thêm vào giỏ hàng!`, {
            position: "top-right"
        });
    };

    const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);

            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(
                    <div className='col-lg-34' key={j}>
                        <div className='featured__item'>
                            <div className='featured__item__pic'
                                style={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: '300px'
                                }}>

                                <ul className='featured__item__pic__hover'>
                                    <li>
                                        <Link to={`${ROUTER.USER.DETAIL}/${featProducts.id}`}>
                                            <RemoveRedEyeOutlined />
                                        </Link>
                                    </li>

                                    <li onClick={() => handleAddToCart(item)}>
                                        <AddShoppingCartOutlined />
                                    </li>
                                </ul>
                            </div>
                            <div className='featured__item__text'>
                                <h6>
                                    <Link to="">{item.name}</Link>
                                </h6>
                                <h5>
                                    {formatter(item.price)}
                                </h5>
                            </div>

                        </div>
                    </div>
                );
            });
            tabPanels.push(tabPanel);
        });

        return (
            <Tabs>
                <TabList>{tabList}</TabList>
                {
                    tabPanels.map((item, key) => (
                        <TabPanel key={key}>
                            <div className='row'>
                                {item}
                            </div>
                        </TabPanel>
                    ))
                }
            </Tabs>
        );
    };

    return (
        <div className='container'>
            <div className='featured'>
                <div className='section_title'>
                    <h2>Các Sản Phẩm Nổi Bật</h2>
                </div>
                {renderFeaturedProducts(featProducts)}
            </div>
            <ShoppingCart cartItems={cartItems} />
        </div>
    );
};

export default memo(ListProduct);
