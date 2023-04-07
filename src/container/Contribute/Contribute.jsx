/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NavBar, Footer } from "../../components";
import { Link } from "react-router-dom";

import "./Contribute.scss";

const Contribute = () => {
	return (
		<div className='app__contribute'>
			<NavBar />
			<div className="app__contribute_text">
				<div className="app__contribute_title">
					<h2>Contributors Guide</h2>
				</div>
				<div className="app__contribute_content">
					<p>Welcome to the LearnDev Foundation's Contributors Guide! We're glad that you're interested in contributing to our open-source platform. LearnDev Foundation is a non-profit organization dedicated to providing free and accessible educational resources to developers worldwide. Our platform consists of LearnDev Academy, LearnDev Roadmaps, and LearnDev's "HowTo" Blog amid other projects. To contribute to any of our projects check out our <a href="https://github.com/learndev-foundation">Github Profile</a></p>
					<p>We believe that collaboration is key to creating high-quality educational content that benefits everyone. That's why we encourage and welcome contributions from individuals and organizations alike. This guide will provide you with the information and guidelines you need to get started with contributing to our platform. Whether you're a seasoned developer or just getting started, there's a place for you in our community. So let's get started!</p>
					<p className="bold">Ground Rules</p>
					<p>At LearnDev Foundation, we believe in fostering a welcoming and inclusive community.As such, we expect all contributors to follow our code of conduct, which includes the following guidelines:</p>
					<ol>
						<li>Be respectful and inclusive: We welcome contributors from all backgrounds and perspectives. Therefore, we expect all contributors to be respectful and inclusive towards others, regardless of their race, gender, sexual orientation, age, or other personal characteristics.</li>
						<li>Use constructive communication: We encourage open and constructive communication among our contributors. Therefore, we expect all contributors to communicate in a respectful and constructive manner, and to avoid personal attacks, trolling, or other forms of disrespectful behavior.</li>
						<li>Respect the opinions of others: We value diversity of opinions and perspectives among our contributors. Therefore, we expect all contributors to be respectful of the opinions and viewpoints of others, even if they do not agree with them.</li>
						<li>Do not engage in harassment: We have zero tolerance for any form of harassment or discrimination. Therefore, we expect all contributors to refrain from engaging in any behavior that could be perceived as harassment, such as making offensive comments, displaying offensive images, or engaging in any other form of harassing behavior.</li>
						<li>Be responsible and accountable: We expect all contributors to take responsibility for their actions and to be accountable for their contributions. Therefore, we expect all contributors to adhere to our code of conduct, and to report any violations to the appropriate authorities</li>
					</ol>
					<p>You can read our full <Link to="/codeofconduct">Code of Conduct</Link>. Please take the time to read and understand our Code of Conduct before contributing to any of our projects.</p>
					<p className="bold">Your First Contribution?</p>
					<p>Unsure where to start contributing? You can start by looking through these beginner and help-wanted issues: This are issues that are labelled as <b>Good First Issue</b> and <b>Help Wanted</b>. These are issues that are not yet resolved and are waiting for your contribution and should not be to difficult to resolve.</p>
					<p><b>Working on your first pull request?</b> You can learn from this free series <a href="https://kcd.im/pull-request">How to Contribute to an Open Source Project on Github</a></p>
					<p>At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.</p>
					<p>If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.</p>
					<p className="bold">Contributing</p>
					<p>No matter how small your contribution is it is welcome. Examples of contribution welcome are:</p>
					<ul>
						<li>Spelling / grammar fixes</li>
						<li>Typo correction, white space and formatting changes</li>
						<li>Comment clean up</li>
						<li>Bug fixes that change default return values or error codes stored in constants</li>
						<li>Adding logging messages or debugging output</li>
						<li>Changes to 'metadata' files like Gemfile, .gitignore, build scripts, etc.</li>
						<li>Moving source files from one directory or package to another.</li>
						<li>New features / functionalities.</li>
					</ul>
					<p>To contribute to this project:</p>
					<ol>
						<li>Create ypur own fork of the code.</li>
						<li>Do your changes in your fork.</li>
						<li>If you like the change and think the project could use it, send a pull request.</li>
					</ol>
					<p className="bold">Writers</p>
					<p>To contribute a blog post to LearnDev's "HowTo" blog, you'll need to write a markdown file. Create a folder for your blog post and in this folder you would need to add three (3) files</p>
					<ol>
						<li>A ".md" file for your blog post. This file should have the title of your blog post.</li>
						<li>A ".md" file titled "README.md" which is a summary of your blog post and should contain the authors name and a link to your twitter profile.</li>
						<li>An image for your blog post.</li>
					</ol>
					<p>This folder should have the title of your blog post. And should be in the "posts" folder. <a href="https://github.com/LearnDev-Foundation/how-to-blog/blob/main/posts/sample" target="_blank" rel="noopener noreferrer">Here</a> is a sample submission.</p>
					<p className="bold">Reporting Bugs</p>
					<p>Any security issues should be submitted directly to <a href="mailto:learndevfoundation@gmail.com">learndevfoundation@gmail.com</a> In order to determine whether you are dealing with a security issue, ask yourself these two questions:</p>
					<ul>
						<li>Can I access something that's not mine, or something I shouldn't have access to?</li>
						<li>Can I disable something for other people?</li>
					</ul>
					<p>If the answer to either of those two questions are "yes", then you're probably dealing with a security issue. Note that even if you answer "no" to both questions, you may still be dealing with a security issue, so if you're unsure, just email us at <a href="mailto:learndevfoundation@gmail.com">learndevfoundation@gmail.com</a>.</p>
					<p>If you are sure your issue is not a security issue, then you can report it to the issue tracker.</p>
					<p className="bold">New Features</p>
					<p>If you find yourself wishing for a feature that doesn't exist in HowTo Guide, you are probably not alone. There are bound to be others out there with similar needs. Many of the features that HowTo Guide has today have been added because our users saw the need. Open an issue on our issues list on GitHub which describes the feature you would like to see, why you need it, and how it should work.</p>
					<p className="bold">Code Reviews</p>
					<p>Pull requests are reviewed by a group of people. The group of people is called the code review team. The code review team is responsible for ensuring that the code is well-written, well-commented, and well-tested. This review is done on a regular basis.</p>
					<p className='bold'>Our Pledge</p>
					<p>We pledge to the community that we will continue to improve HowTo Guide. We will continue to add new features, fix bugs, and improve the codebase. We will also continue to maintain the codebase and ensure that it is well-written, well-commented, and well-tested.</p>
					<p>To start contributing to a project of your choice, visit our <a href="https://github.com/learndev-foundation">Github Profile</a>.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contribute;