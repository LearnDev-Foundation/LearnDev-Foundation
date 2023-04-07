/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { NavBar, Footer } from "../../components";
import { Link } from "react-router-dom";

import "./Terms.scss";

const Terms = () => {
	return (
		<div className='app__terms'>
			<NavBar />
			<div className="app__terms_text">
				<div className="app__terms_title">
					<h2>Terms of Service</h2>
				</div>
				<div className="app__terms_content">
					<p className="bold">Acceptance of Terms</p>
					<p>Welcome to LearnDev Foundation, an open source platform consisting of LearnDev Academy, LearnDev Roadmaps, and LearnDev's "HowTo" Blog. By accessing or using any of our websites, services, or content (collectively referred to as "Services"), you agree to be bound by these Terms of Service ("Terms"). Please read these Terms carefully before using our Services.</p>
					<p>If you do not agree to these Terms, you may not access or use our Services. By accessing or using our Services, you signify your acceptance of these Terms and your agreement to be bound by them. These Terms may be updated from time to time, and your continued use of our Services after any such updates constitutes your acceptance of the revised Terms.</p>
					<p className="bold">Description of Services</p>
					<p>LearnDev Foundation provides a variety of services to its users, including LearnDev Academy, LearnDev Roadmaps, and LearnDev's "HowTo" Blog. LearnDev Academy provides online courses and training programs to users on various topics such as web development, programming languages, software architecture, testing, cybersecurity, and more. LearnDev Roadmaps provides users with a clear and concise path to achieve their learning goals by providing a comprehensive roadmap on what courses or training programs they should take to reach their desired level of expertise. LearnDev's "HowTo" Blog provides users with educational content, tips, and guides on various topics related to web development, programming languages, software architecture, testing, cybersecurity, and more.</p>
					<p>The services provided by LearnDev Foundation are intended to be used for educational and informational purposes only. The information provided through our services is not intended to be a substitute for professional advice, and LearnDev Foundation is not responsible for any actions taken based on the information provided through our services.</p>
					<p>LearnDev Foundation reserves the right to modify, suspend or discontinue any of its services, in whole or in part, at any time and without notice to its users. LearnDev Foundation may also add new services or features to its existing services, which will be subject to these Terms of Service.</p>
					<p className="bold">User Conduct</p>
					<p>By using any of the services provided by LearnDev Foundation, you agree to comply with the following guidelines for user conduct:</p>
					<ol>
						<li>You must use the services in a lawful manner, and comply with all applicable laws and regulations.</li>
						<li>You must not use the services to infringe upon the rights of others, including but not limited to their intellectual property rights or privacy rights.</li>
						<li>You must not use the services to harass, defame, or discriminate against others based on their race, gender, sexual orientation, religion, or any other characteristic protected by law.</li>
						<li>You must not use the services to distribute spam, malware, or other malicious software.</li>
						<li>You must not interfere with the proper functioning of the services, including but not limited to attempts to access unauthorized areas of the platform, or attempting to disrupt or overload the servers.</li>
						<li>You must not impersonate any other person or entity or misrepresent your affiliation with any person or entity.</li>
						<li>You must not use any automated means to access the services or extract data from them, except as expressly permitted by LearnDev Foundation.</li>
						<li>You must respect the intellectual property rights of LearnDev Foundation and other users, including but not limited to copyrights, trademarks, and patents.</li>
					</ol>
					<p>LearnDev Foundation reserves the right to suspend or terminate the account of any user who violates these guidelines or otherwise engages in behavior that LearnDev Foundation deems to be inappropriate or harmful to its platform or users.</p>
					<p className="bold">Intellectual Property</p>
					<p>The content and materials made available through LearnDev Foundation's services, including but not limited to the LearnDev Academy, LearnDev Roadmaps, and LearnDev's HowTo Blog, are protected by applicable copyright, trademark, and other intellectual property laws. All intellectual property rights in the content and materials are owned by LearnDev Foundation, unless otherwise indicated.</p>
					<p>LearnDev Foundation is committed to open source principles, and the code and other software assets made available through its services are generally licensed under the BSD-3-Clause open source license. By using LearnDev Foundation's services, you acknowledge and agree that all software code, designs, and other technical resources made available through its services are subject to the terms of the applicable open source license(s), and that your use of the software code and other resources is subject to compliance with those terms.</p>
					<p>You acknowledge and agree that you will not use any of LearnDev Foundation's content, materials, or services for any purpose that is unlawful or prohibited by these Terms of Service. You may not copy, reproduce, distribute, or create derivative works from any of the content or materials made available through LearnDev Foundation's services without the prior written consent of LearnDev Foundation, except to the extent permitted by applicable open source licenses.</p>
					<p className="bold">Privacy</p>
					<p>LearnDev Foundation respects the privacy of its users and is committed to protecting their personal information. Our privacy policy explains how we collect, use, and protect the personal information of our users. By using our services, you agree to our <Link to="/privacy">privacy policy</Link>.</p>
					<p className="bold">Termination</p>
					<p>LearnDev Foundation reserves the right to terminate a user's access to any or all of the services offered by the platform at any time and without prior notice or explanation, including, but not limited to, cases where a user breaches any provision of the Terms of Service. Upon termination, the user's right to use the services will immediately cease. All provisions of the Terms of Service that by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
					<p>In the event of termination, the user must immediately cease using the services and agree not to access the platform again without prior written consent from LearnDev Foundation. The user also agrees that LearnDev Foundation shall not be liable to them or any third party for any termination of their access to the services offered by the platform.</p>
					<p className="bold">Limitation of Liablity</p>
					<p>By using our services, users agree to release LearnDev Foundation from any liability and hold us harmless for any claims, damages, or losses arising from the use of our services.</p>
					<p>In no event shall LearnDev Foundation or its affiliates, employees, directors, or agents be liable for any direct, indirect, incidental, special, consequential, or exemplary damages (including, without limitation, damages for loss of business profits, business interruption, loss of data or information, or other pecuniary loss) arising out of or in connection with the use of our services, whether based on contract, tort, strict liability, or any other legal theory.</p>
					<p>LearnDev Foundation makes no warranty or representation of any kind, whether express or implied, with respect to our services, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
					<p>By using our services, users agree to indemnify and hold LearnDev Foundation and its affiliates, employees, directors, and agents harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of their use of our services, their violation of these Terms of Service, or their violation of any rights of another person or entity.</p>
					<p className="bold">Changes to the Terms of Service</p>
					<p>LearnDev Foundation reserves the right to modify or replace these Terms of Service at any time. It is your responsibility to check these Terms of Service periodically for changes. Your continued use of the LearnDev Foundation services following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
					<p>LearnDev Foundation may also, in the future, offer new services and/or features through the website (including the LearnDev Academy, LearnDev Roadmaps, and the LearnDev HowTo Blog). Such new features and/or services shall be subject to the terms and conditions of these Terms of Service.</p>
					<p>If you do not agree with the modified Terms of Service, your only remedy is to discontinue using the LearnDev Foundation services.</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Terms;