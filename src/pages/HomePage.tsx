import React, { useState } from 'react';
import './HomePage.css';
import School from '../components/School';
import Skill from '../components/Skill';
import profile from '../access/a243c18cb99e12c04b8f.jpg';
import Des from '../components/Des';;

interface HomePageProps { }
const HomePage: React.FC<HomePageProps> = () => {
    const [activeTab, setActiveTab] = useState<string>('about');

    const handleClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='content-left'>
                <img className='img-left' src={profile} alt="Profile"></img>
                <div className='profile-detail'>
                    <div className={activeTab === 'about' ? 'tab active' : 'tab'} onClick={() => handleClick('about')}>About</div>
                    <div className={activeTab === 'school' ? 'tab active' : 'tab'} onClick={() => handleClick('school')}>Education</div>
                    <div className={activeTab === 'skill' ? 'tab active' : 'tab'} onClick={() => handleClick('skill')}>Skill</div>
                </div>
            </div>
            <div className='content-right'>
                {activeTab === 'about' && <Des />}
                {activeTab === 'school' && <School />}
                {activeTab === 'skill' && <Skill />}
            </div>
        </>
    )
}

export default HomePage;
