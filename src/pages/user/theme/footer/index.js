import { memo } from 'react'
import './style.scss';
import { Instagram } from '@mui/icons-material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
    return (<footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='footer__about'>
                        <h1 className='footer__about__logo'>MSI</h1>
                        <ul>
                            <li>Giới Thiệu</li>
                            <li>Tuyển Dụng</li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-3'>
                    <div className='footer__about'>
                        <h1 className='footer__about__logo'>Chính Sách</h1>
                        <ul>
                            <li>Chính Sách Bảo Hành</li>
                            <li>Chính Sách Thanh Toán</li>
                            <li>Chính Sách Giao Hàng</li>
                            <li>Chính Sách Bảo Mật</li>
                        </ul>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div className='footer__about'>
                        <h1 className='footer__about__logo'>Thông Tin</h1>
                        <ul>
                            <li>Tin Tức Từ MSI</li>
                            <li>Đội Game</li>
                            <li>VIDEO</li>
                            <li>Diễn Đàn</li>
                        </ul>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div className='footer__about'>
                        <h1 className='footer__about__logo'>Hỗ Trợ</h1>
                        <ul>
                            <li>Mua Hàng: 0865274818</li>
                            <li>Bảo Hành: 0865274818</li>
                            <li>Khiếu Nại: 0865274818</li>
                            <li>Email: dung12042004@gmail.com</li>
                        </ul>
                    </div>

                </div>
                <div className='col-lg-3'>
                    <div className='footer__about'>
                        <h1 className='footer__about__logo'>Thanh Toán</h1>
                        <a>
                            <img src='https://theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=6088' alt='' class='small-image' />
                        </a>
                        <a>
                            <img src='https://theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=6088' alt='' class='small-image' />
                        </a>
                        <a>
                            <img src='https://theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=6088' alt='' class='small-image' />
                        </a>
                        <a>
                            <img src='https://theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=6088' alt='' class='small-image' />
                        </a>
                    </div>

                </div>
            </div>
            <div>
                Kết Nối Với Chúng Tôi
                <div>
                    <FacebookOutlinedIcon />
                    <Instagram />
                    <YouTubeIcon />
                    <XIcon />
                </div>

            </div>
        </div>
        <div>
            <hr class="horizontal-line" />
            <div className='footer_end'>
                <img src='https://storage-asset.msi.com/frontend/imgs/logo-footer.png' />
                Copyright © 2024 Micro-Star INT'L CO., LTD. All rights reserved.
            </div>
        </div>
    </footer>
    );
};

export default memo(Footer);