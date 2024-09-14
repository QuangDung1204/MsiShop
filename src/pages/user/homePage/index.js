import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import msi6 from "./img/msi6.png";
import banphim from "./img/banphim.png";
import manhinh from "./img/manhinh.png";
import rtxcard from "./img/rtxcard.png";
import pc from "./img/pc.png";
import "./style.scss";
import Layout from "Layout";
const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const sliderItems = [
    {
      bgImg: msi6,
      name: "Laptops Raider 18 HX A14V",
      details: "CPU: Core i9-14900HX, RAM: 32GB, Storage: SSD 2TB, ",
    },
    {
      bgImg: pc,
      name: "MPG Infinite X2 14th",
      details: "CPU: Core™ i9 14900KF, GeForce RTX™ 4090",
    },
    {
      bgImg: manhinh,
      name: "MAG 271QPX QD-OLED",
      details: "Resolution: 2560x1440, Refresh Rate: 360Hz",
    },
    {
      bgImg: rtxcard,
      name: "GeForce RTX™ 4090 GAMING X TRIO 24G",
      details: "Memory: 24GB GDDR6X, CUDA Cores: 10496",
    },
    {
      bgImg: banphim,
      name: "VIGOR GK50 LOW PROFILE",
      details: "Switch: Kailh Low Profile, Backlight: RGB",
    },
  ];

  return (
    <Layout>
      <div className="container container__slider">
        <div className="">
          <p className="center-text">Sản phẩm trưng bày siêu đắt tiền</p>
          <div>
            <Carousel responsive={responsive} className="slider">
              {sliderItems.map((item, key) => (
                <div className="slider__item" key={key}>
                  <img src={item.bgImg} alt={item.name} />
                  <p className="product-name">{item.name}</p>
                  <div className="product-details">
                    <p>{item.details}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="">
          <h1>Tin Tức Công Nghệ</h1>
          <div className="col-lg-34">
            <div className="end">
              <a>
                <img
                  src="https://file.hstatic.net/200000722513/file/uu_dai_soc_b6303389c3fb4f26b05bd368f3d61486.jpg"
                  alt=""
                  style={{ width: "340px", height: "200px" }}
                />
              </a>
              <a>
                <img
                  src="https://file.hstatic.net/200000722513/article/gearvn-doi-honh-manh-dtcl-10_056bc7645eab44e3b56eade867753256_grande.jpg"
                  alt=""
                  style={{ width: "340px", height: "200px" }}
                />
              </a>
              <a>
                <img
                  src="https://file.hstatic.net/200000722513/file/gearvn-laptop-asus-vivobook-14-oled-m1405ya-km047w-slider_46dfc8f3a021418fb33af9be6052b315.png"
                  alt=""
                  style={{ width: "340px", height: "200px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(HomePage);
