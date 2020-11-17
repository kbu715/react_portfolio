import React from 'react';
import Card from './card';

import { motion } from 'framer-motion';

import algo from '../icons/algo.svg';
import api from '../icons/api.svg';
import repair from '../icons/repair.svg';
import computer from '../icons/computer.svg';
import ux from '../icons/ux.svg';
import puzzle from '../icons/puzzle.svg';

const About = () => {
  const aboutVariants = {
    initial: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.7,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="content_section"
      variants={aboutVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="description">
        안녕하세요. 신입 개발자 박진우입니다.
        <br />
        프론트엔드와 백엔드를 아우르는 자바스크립트 개발자가 되려고 노력하고
        있습니다.
      </div>
      <div className="data_section">
        <div className="container">
          <p className="sub_heading">What I offer</p>
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <Card
                icon={computer}
                title="Frontend Development"
                body={[
                  'I can built a beautiful and scalable SPA using ',
                  <strong>HTML,CSS</strong>,
                  ' and ',
                  <strong>React.js</strong>,
                ]}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <Card
                icon={repair}
                title="Backend  Development"
                body={[
                  'handle database, server, api using ',
                  <strong> Node.js </strong>,
                  ' and ',
                  <strong> MongoDB </strong>,
                ]}
              />
            </div>
            {/* <div className="col-sm-12 col-lg-6">
              <Card
                icon={api}
                title="API Development"
                body={[
                  'develop robust REST API using ',
                  <strong> django-rest-api </strong>,
                ]}
              />
            </div> */}
            {/* <div className="col-sm-12 col-lg-6">
              <Card
                icon={algo}
                title="Algo and DS"
                body={[
                  'a daily problem solver in ',
                  <strong>HackerRank</strong>,
                  ' and ',
                  <strong>Leetcode</strong>,
                ]}
              />
            </div> */}
            <div className="col-sm-12 col-lg-6">
              <Card
                icon={ux}
                title="UI/UX developer"
                body={[
                  'minimalistic user interface designer using ',
                  <strong>MATERIAL-UI</strong>,
                  ' and ',
                  <strong>Ant Design</strong>,
                ]}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <Card
                icon={puzzle}
                title="Education"
                body={[
                  ' 비트교육센터 수료 ',
                  <strong>Frontend 개발자 양성과정</strong>,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
