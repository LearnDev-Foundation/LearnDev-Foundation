import React from 'react';
import { NavBar, Blog, Footer } from '../../components';

import './About.scss';

const About = () => {
  return (
    <div className='app__about'>
        <NavBar />
        <div className="app__about_text">
            <div className="app__about_title">
                <h2>About Us</h2>
            </div>
            <div className="app__about_content">
                <p>Welcome to LearnDev Foundation, an open-source platform that provides high-quality educational resources for developers of all levels. Our mission is to make education accessible to everyone and help individuals gain the skills they need to succeed in today's tech industry.</p>
                <p>At LearnDev Foundation, we believe that learning should be fun and engaging. That's why we offer a variety of courses and resources that cater to different learning styles. Our courses cover a wide range of topics, including web development, programming languages, software architecture, testing, cybersecurity, and more. Each course is designed to be interactive and hands-on, with a focus on real-world applications.</p>
                <p>Our courses are created and reviewed by a team of experienced developers and educators who are passionate about helping others learn. We also welcome contributions from the community and encourage individuals to get involved in creating and improving our courses. If you're interested in contributing, please visit our GitHub repositories <a href="https://github.com/LearnDev-Foundation">here</a>.</p>
                <p>At LearnDev Foundation, we believe that learning is a lifelong journey, and we want to support our students every step of the way. Our team is always available to answer your questions and provide guidance and feedback. We also offer an online community where you can connect with other students, share ideas, ask questions, and collaborate on projects.</p>
                <p>We are committed to providing a supportive and inclusive learning environment for all of our shttps://github.com/LearnDev-Foundationtudents. We welcome individuals from diverse backgrounds and strive to create an environment where everyone feels valued and respected.</p>
                <p>If you have any questions or feedback about our courses, policies, or community, please don't hesitate to reach out to us at <a href="mailto:learndevfoundation@gmail.com">learndevfoundation@gmail.com</a>. We value your feedback and are always looking for ways to improve.</p>
                <p>Thank you for choosing LearnDev Foundation as your educational resource. We are excited to help you on your journey to becoming a successful developer.</p>
            </div>
        </div>
        <Blog />
        <Footer />
    </div>
  )
}

export default About;