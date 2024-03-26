import React, { useState } from 'react';
import './Des.css';

const Des: React.FC = () => {
    const [info, setInfo] = useState({
        name: 'Hoàng',
        age: '23',
        address: 'Hà Đông, Hà nội',
        gender: 'Nam',
        school: 'PTIT',
        hobby: 'Thích xem phim, chơi thể thao',
        product: 'Sản phẩm'
    });
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInfo({
            ...info,
            [name]: value
        });
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className='about-container'>
            <div className='detail'>
                <div className='item'>
                    <label htmlFor='name'>Họ và tên:</label>
                    {isEditing ? (
                        <input type='text' name='name' value={info.name} onChange={handleInputChange} />
                    ) : (
                        <div>{info.name}</div>
                    )}
                </div>
                <div className='item'>
                    <label htmlFor='age'>Tuổi:</label>
                    {isEditing ? (
                        <input type='text' name='age' value={info.age} onChange={handleInputChange} />
                    ) : (
                        <div>{info.age}</div>
                    )}
                </div>
                <div className='item'>
                    <label htmlFor='address'>Địa chỉ:</label>
                    {isEditing ? (
                        <input type='text' name='address' value={info.address} onChange={handleInputChange} />
                    ) : (
                        <div>{info.address}</div>
                    )}
                </div>
                <div className='item'>
                    <label htmlFor='gender'>Giới tính:</label>
                    {isEditing ? (
                        <input type='text' name='gender' value={info.gender} onChange={handleInputChange} />
                    ) : (
                        <div>{info.gender}</div>
                    )}
                </div>
                <div className='item'>
                    <label htmlFor='school'>Trường:</label>
                    {isEditing ? (
                        <input type='text' name='school' value={info.school} onChange={handleInputChange} />
                    ) : (
                        <div>{info.school}</div>
                    )}
                </div>
                <div className='item'>
                    <label htmlFor='hobby'>Sở thích:</label>
                    {isEditing ? (
                        <input type='text' name='hobby' value={info.hobby} onChange={handleInputChange} />
                    ) : (
                        <div>{info.hobby}</div>
                    )}
                </div>
                <div className='item'>
                    <label htmlFor='product'>Sản phẩm:</label>

                    <a href='/product' target='_self'>{info.product}</a>

                </div>
                <button className='edit-button' onClick={handleEditClick}>
                    {isEditing ? 'Lưu' : 'Sửa'}
                </button>
            </div>
        </div>
    );
};

export default Des;
