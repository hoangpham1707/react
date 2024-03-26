import React, { useState } from 'react';
import logo from '../access/logo.png';
import './School.css';

const School: React.FC = () => {
    const [description, setDescription] = useState<string>(`Học viện Công nghệ Bưu chính Viễn thông (Posts and Telecommunications Institute of Technology) là một tổ chức Nghiên cứu - Giáo dục Đào tạo với thế mạnh về Nghiên cứu và đào tạo Đại học, sau Đại học trong lĩnh vực Công nghệ Thông tin và Truyền thông, xếp hạng thứ 17 các đại học hàng đầu Việt Nam. Học viện là cơ sở đào tạo công lập trực thuộc Bộ Thông tin và Truyền thông.
    Trường được thành lập năm 1953 với tên gọi trường Đại học Bưu điện – Vô tuyến điện. Ngày 11 tháng 7 năm 1997, sau khi hợp nhất bốn đơn vị: Viện Khoa học Kỹ thuật Bưu điện, Viện Kinh tế Bưu điện, Trung tâm Đào tạo Bưu chính - Viễn thông 1 và Trung tâm Đào tạo Bưu chính - Viễn thông 2, trường đổi tên thành Học viện Công nghệ Bưu chính Viễn thông.`);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [tempDescription, setTempDescription] = useState<string>('');

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTempDescription(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setTempDescription(description);
    };

    const handleSaveClick = () => {
        setDescription(tempDescription);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };

    return (
        <div className='school'>
            <div className='name'>
                <img src={logo} alt='School Logo'></img>
            </div>
            <div className='description'>
                <h2>Mô tả:</h2>
                {isEditing ? (
                    <>
                        <textarea value={tempDescription} onChange={handleDescriptionChange}></textarea>
                        <button className='save-button' onClick={handleSaveClick}>Lưu</button>
                        <button className='cannel-button' onClick={handleCancelClick}>Hủy</button>
                    </>
                ) : (
                    <>
                        <p>{description}</p>
                        <button className='edit-button' onClick={handleEditClick}>Sửa</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default School;
