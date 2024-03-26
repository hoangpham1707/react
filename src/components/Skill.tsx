import React from 'react';
import nodejs from '../access/tải xuống.png'
import js from '../access/js.png'
import mongo from '../access/mg.png'
import react from '../access/react.png'
import sql from '../access/sql.png'
import './Skill.css'
const Skill: React.FC = () => {
    const skills = [
        { title: 'Nodejs', img: nodejs },
        { title: 'Javascript', img: js },
        { title: 'ReactJs', img: react },
        { title: 'MongoDB', img: mongo },
        { title: 'SQL', img: sql },
    ]

    return (
        <div className='skill-container'>
            {skills && skills.length > 0 &&
                skills.map((item, index) => {
                    return (
                        <div className='skill-detail' key={index}>
                            <img src={item.img}></img>
                            <div className='title'>{item.title}</div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Skill;
