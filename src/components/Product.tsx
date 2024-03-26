import React, { useState } from 'react';
import './Product.css';
import img1 from '../access/c829a1d405c7ae99f7d6.jpg'
import img2 from '../access/a243c18cb99e12c04b8f.jpg'
interface ProductItem {
    bgImg: string;
    title: string;
    link: string;
    desc: string;
}

const Product: React.FC = () => {
    const [products, setProducts] = useState<ProductItem[]>([
        {
            bgImg: img1,
            title: 'Link GitHub:',
            link: 'https://github.com/hoangpham1707/schedule-a-medical',
            desc: ` Dự án nhằm mục đích xây dựng một trang web đặt lịch khám bệnh. Trang
            web bao gồm các chức năng quản trị cơ bản như quản lý người dùng, bác sĩ,
            bệnh nhân, phòng khám và lịch khám bệnh. Đối với người dùng, có một số tính
            năng: xem thông tin, bác sĩ, phòng khám, lịch khám và có thể đặt lịch khám
            bằng cách gửi email để xác nhận. Website hỗ trợ chuyển đổi ngôn ngữ: tiếng
            Anh và tiếng Việt.`
        },
        {
            bgImg: img2,
            title: 'Link GitHub:',
            link: 'https://github.com/hoangpham1707/e-commerce',
            desc: `Dự án gồm 7 người xây dựng một trang thương mại điện tử bán một số đồ
            như giày, balo, điện thoại,... Website có các chức năng cơ bản của 1 trang mua
            bán cùng với đó tích hợp thêm chức năng thanh toán và gợi ý sản phẩm`
        }
    ]);

    return (
        <div className='products-container'>
            {products.map((item, index) => (
                <div className='product-item' key={index}>
                    <div className='bg-img' style={{ backgroundImage: `url(${item.bgImg})` }}></div>
                    <div className='link-git'>
                        <div className='title'>{item.title}</div>
                        <div className='link'><a href={item.link} target='_blank' rel='noopener noreferrer'>{item.link}</a></div>
                    </div>
                    <div className='desc'>
                        {item.desc}
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Product;
