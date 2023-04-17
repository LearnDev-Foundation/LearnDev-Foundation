/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NavBar, Blog, Footer } from "../../components";
import osi from "../../assets/osi.svg";
import landing from "../../assets/landing.svg";

import academy from "../../assets/academy.svg";
import arrow from "../../assets/arrow.svg";
import roadmap from "../../assets/roadmap.svg";
import blog from "../../assets/blog.svg";

import "./Home.scss";

const Home = () => {
	return (
		<div className='app__home'>
			<NavBar />
			<div className='app__home_landing'>
				<div className="app__home_landing_osi top">
					<img src={osi} alt="" />
					<p className='app__home_landing_osi-text' >Open Source Project</p>
				</div>
				<div className="app__home_landing_content">
					<div className="app__home_landing_content-text">
						<h1>Building a more inclusive tech industry through accessible, open source education</h1>
						<p>At LearnDev Foundation, we're dedicated to unlocking the potential of tech learners everywhere. Whether you're just starting out or looking to take your skills to the next level, we're here to support you on your learning journey.</p>
						<div className="app__home_landing_content-text_buttons">
							<a href="#" className="primary">Academy</a>
							<a href="#" className="secondary">Roadmaps</a>
						</div>
					</div>
					<img src={landing} className="app__home_landing_content-img" alt="" />
				</div>
				<div className="app__home_landing_osi bottom">
					<img src={osi} alt="" />
					<p className='app__home_landing_osi-text' >Open Source Project</p>
				</div>
			</div>
			<div className="app__home_cards">
				<div className="app__home_cards_card">
					<div className='app__home_cards_card-inner'>
						<img src={academy} alt="" />
						<div className="app__home_cards_card-inner-text">
							<h3>Academy</h3>
							<p>From beginner tutorials to more advanced courses, our academy offers a range of learning materials that are accessible to anyone, anywhere.</p>
						</div>
						<a href='#'><img src={arrow} alt="" /></a>
					</div>
				</div>
				<div className="app__home_cards_card center">
					<div className='app__home_cards_card-inner'>
						<img src={roadmap} alt="" />
						<div className="app__home_cards_card-inner-text">
							<h3>Roadmaps</h3>
							<p>With curated learning paths and career guides, we provide a clear roadmap to help you achieve your tech career goals.</p>
						</div>
						<a href='#'><img src={arrow} alt="" /></a>
					</div>
				</div>
				<div className="app__home_cards_card">
					<div className='app__home_cards_card-inner'>
						<img src={blog} alt="" />
						<div className="app__home_cards_card-inner-text">
							<h3>Blog</h3>
							<p>From thought-provoking articles on the latest trends in tech to in-depth interviews with industry experts, our blog offers a wealth of insights and inspiration.</p>
						</div>
						<a href="https://ldfhowto.vercel.app/s" target="_blank" rel="noopener noreferrer"><img src={arrow} alt="" /></a>
					</div>
				</div>
			</div>
			<Blog />
			<Footer />
		</div>
	);
};

export default Home;