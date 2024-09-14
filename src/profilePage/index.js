import { memo } from 'react'
import './style.scss'
import backgroundMsi from './imgs/backgroundMSI.png'
const ProfilePage = () => {
    return (
        <>
            <div className="background-container" >
                <img src={backgroundMsi} alt='' style={{ width: '100%', height: '690px', objectFit: 'cover' }} />
                <div className="overlay-text">Liên hệ MSI</div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-6 setup'>
                        <div>
                            <img src='https://asset.msi.com/resize/picture/global/wallpaper/nb14th-30-3840-2160.jpg/550.png' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='setup-text'>
                            <h1>Trung tâm chăm sóc khách hàng</h1>
                            <ul>
                                Giờ hoạt động của trung tâm chăm sóc khách hàng:

                                <li>
                                    Dịch vụ hỗ trợ 24h (Star Assist 24h)
                                </li>
                            </ul>
                            <p>Nếu cần được liên hệ lại để tư vấn, Quý khách vui lòng gọi số điện thoại dưới đây. Trong vòng 2 giờ làm việc, MSI sẽ liên hệ để hỗ trợ. </p>
                            <button className='cach1'>Hotline: 0865274818</button>
                        </div>
                    </div>
                </div>
                <div className='row'>

                    <div className='col-6'>
                        <div className='setup-text2'>
                            <h1>Quan tâm và tìm hiểu thêm về mẫu laotop yêu thích của bạn.</h1>
                            <p className='cach2'>Bạn đã tìm được chiếc laptop ưng ý? </p>
                            <p className='cach2'>Vậy thì đừng chần chờ gì nữa hay tới Msi ngay</p>
                        </div>
                    </div>
                    <div className='col-6 setup'>
                        <div>
                            <img src='https://asset.msi.com/resize/picture/global/wallpaper/nb14th-30-3840-2160.jpg/550.png' />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 setup'>
                        <div>
                            <img src='https://asset.msi.com/resize/picture/global/wallpaper/nb14th-1-3840-2160.jpg/550.png' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='setup-text3'>
                            <h1>CÔNG TY TNHH DỊCH VỤ TIN HỌC FPT</h1>
                            <h3>Trụ sở văn phòng</h3>
                            <p className='cach'>Địa chỉ: Số 194/3 Nguyễn Trọng Tuyển, P.8, Q.Phú Nhuận, Tp. HCM</p>
                            <p className='cach'>ĐT (Sửa chữa) : 028.7300. 0911</p>
                            <p className='cach'>Giờ làm việc: Mon – Fri, 08:00 – 12: 00; and 13: 00-17:00 Sat 08:00 - 12:00</p>
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
};

export default memo(ProfilePage);
