import React from 'react';
import { motion } from 'framer-motion';
import max from '../images/uzoo.jpg';
import pin from '../images/pin.svg';
import github from '../images/github.svg';

const SideBar = () => {
  let sidebarVariants = {
    initial: {
      x: '-10vw',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.5, type: 'spring' },
    },
  };
  const handleSentEmail = () => window.open('mailto:kbu715@naver.com');

  return (
    <motion.div
      className="sideBar_custom"
      variants={sidebarVariants}
      initial="initial"
      animate="visible"
    >
      <img src={max} alt="avatar" className="rounded-circle image_custom" />
      <h3 className="name">강바울</h3>
      <div className="title bg-gray side_item">FrontEnd Developer</div>

      {/* 이력서 다운로드 */}
      {/* <a href={resume} download="resume.pdf">
                <div className="cv side_item"><img src={tie} alt="resume" className='icon_small' /> download resume</div>
            </a> */}

      {/* SNS */}
      {/* <figure className='social_icons'>
                <a href="https://www.facebook.com/profile.php?id=100015327075818"><img src={facebook} alt="facebook" className='icon_small social_icon' /></a>
                <a href="https://www.instagram.com/_sumax__/"><img src={instagram} alt="instagram" className='icon_small social_icon' /></a>
            </figure> */}

      <div className="contact">
        <div className="location side_item">
          <img src={pin} alt="pin" className="icon_small  mr-1" /> 서울시 관악구
        </div>
        <a href="https://github.com/kbu715/">
          <div className="github side_item">
            {' '}
            <img
              src={github}
              alt="git"
              className="icon_small social_icon mr-1"
            />{' '}
            github{' '}
          </div>
        </a>
        <div className="email_id side_item"> kbu715@gmail.com </div>
        <div className="phone side_item"> 010-8901-7060 </div>
      </div>

      <div className="email side_item mt-6" onClick={handleSentEmail}>
        {' '}
        Email me{' '}
      </div>
      {/* <div className="mode"><button className='btn' onClick={changeMode}>mode</button></div> */}
    </motion.div>
  );
};

export default SideBar;
