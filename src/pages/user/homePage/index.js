import { memo } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import msi6 from './img/msi6.png'
import banphim from './img/banphim.png'
import chuot from './img/chuot.png'
import manhinh from './img/manhinh.png'
import rtxcard from './img/rtxcard.png'
import laptopmsi from './img/snapedit_1726145735754.png'
import laptopmsi1 from './img/laptopmsi1.png'
import pc from './img/pc.png'
import "./style.scss"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { AddShoppingCartOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { formatter } from 'utils/fomater';
import featProducts from './productsData'
const HomePage = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const sliderItems = [
        {
            bgImg: msi6,
            name: "Laptops Raider 18 HX A14V",
        },
        {
            bgImg: pc,
            name: "MPG Infinite X2 14th",
        },
        {
            bgImg: manhinh,
            name: "MAG 271QPX QD-OLED",
        },
        {
            bgImg: rtxcard,
            name: "GeForce RTX™ 4090 GAMING X TRIO 24G",
        },
        {
            bgImg: banphim,
            name: "VIGOR GK50 LOW PROFILE",
        },
        {
            bgImg: chuot,
            name: "CLUTCH GM41 LIGHTWEIGHT WIRELESS",
        },
    ];

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
                                    backgroundImage: `url(${item.img})`
                                }}>

                                <ul className='featured__item__pic__hover'>
                                    <li><RemoveRedEyeOutlined /></li>
                                    <li><AddShoppingCartOutlined /></li>
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
    }


    return (
        <>
            <div className='container container__slider'>
                <div className=''>
                    <p className='center-text'>Sản phẩm trưng bày siêu đắt tiền</p>
                    <div><Carousel responsive={responsive} className='slider'>

                        {
                            sliderItems.map((item, key) => (
                                <div className='slider__item' key={key} >
                                    <img src={item.bgImg} alt="Logo" />
                                    <p>{item.name}</p>
                                </div>
                            ))
                        }</Carousel>
                    </div>
                </div>

                <div className='container'>
                    <div className='featured'>
                        <div className='section_title'>
                            <h2>Sản Phẩm Nổi Bật</h2>
                        </div>
                        {renderFeaturedProducts(featProducts)}
                    </div>
                </div>

                <div className=''>
                    <h1>Tin Tức Công Nghệ</h1>
                    <div className='col-lg-34'>
                        <div className='end'>

                            <a><img src='https://file.hstatic.net/200000722513/file/uu_dai_soc_b6303389c3fb4f26b05bd368f3d61486.jpg' alt='' style={{ width: '340px', height: '200px' }} /></a>
                            <a><img src='https://file.hstatic.net/200000722513/article/gearvn-doi-honh-manh-dtcl-10_056bc7645eab44e3b56eade867753256_grande.jpg' alt='' style={{ width: '340px', height: '200px' }} /></a>
                            <a><img src='https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-vivobook-14-oled-m1405ya-km047w-slider_46dfc8f3a021418fb33af9be6052b315.png' alt='' style={{ width: '340px', height: '200px' }} /></a>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default memo(HomePage);
