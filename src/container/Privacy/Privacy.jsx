import React from 'react';
import { NavBar, Footer } from '../../components';
import { Link } from 'react-router-dom';

import "./Privacy.scss"

const Privacy = () => {
  return (
    <div className='app__privacy'>
        <NavBar />
        <div className="app__privacy_text">
            <div className="app__privacy_title">
                <h2>Privacy Policy</h2>
            </div>
            <div className="app__privacy_content">
                <p>At LearnDev Foundation, we are committed to protecting the privacy of our users and customers. This Privacy Policy outlines how we collect, use, and protect personal information that is collected from our users.</p>
                <p className="bold">Information We Collect</p>
                <p>At LearnDev Foundation, we may collect personal information when you use our website, sign up for our courses, contact us, or contribute to our repositories. The information we collect may include your name, email address, GitHub profile, LinkedIn profile, Twitter profile, and other information you choose to provide to us.</p>
                <p>When you sign up for our courses or contribute to our repositories, we may collect additional information, such as your level of expertise or programming languages you're familiar with, to help us provide a more personalized experience for you.</p>
                <p>Please note that we may also collect information automatically through the use of cookies or similar technologies. You can find more information about our use of cookies in our <Link to="/cookie">Cookie Policy</Link>.</p>
                <p>We take the privacy and security of your personal information seriously and will only collect and use it in accordance with applicable laws and regulations.</p>
                <p className="bold">How We Use Information</p>
                <p>At LearnDev Foundation, we use the personal information we collect to provide our services to you. This may include sending newsletters, personalizing website content, and improving our website and services. Additionally, we may use your information to communicate with you about our services, promotions, and other updates.</p>
                <p>If you contribute to our repositories, we may use your GitHub or other profile information to recognize and attribute your contributions. We may also use the information collected to monitor and improve the quality of our repositories.</p>
                <p>Please note that we will only use your personal information for the purposes for which it was collected, and we will only retain your information for as long as necessary to fulfill those purposes or as required by law.</p>
                <p>If we intend to use your personal information for any other purposes not specified in this Privacy Policy, we will obtain your consent before doing so.</p>
                <p className="bold">How We Share Information</p>
                <p>At LearnDev Foundation, we respect your privacy and will not sell, rent, or otherwise disclose your personal information to third parties for their own marketing purposes.</p>
                <p>However, there may be certain circumstances where we may need to share your personal information with third parties to provide our services or to comply with legal obligations. For example, we may share your information with:</p>
                <p>- Service providers: We may share your information with third-party service providers who perform services on our behalf, such as hosting our website, processing payments, or sending email newsletters. These service providers are only authorized to use your information as necessary to provide the requested services to us and are required to keep your information confidential.</p>
                <p>- Legal requirements: We may be required to disclose your personal information to law enforcement agencies, courts, or other government authorities in response to a valid subpoena, court order, or other legal process.</p>
                <p>Please note that we will not share your personal information with any third party that is not already publicly available, such as your public GitHub, LinkedIn or Twitter profiles.</p>
                <p>We may also share aggregated and de-identified information, which cannot be used to identify you personally, with third parties for research, analytics, or other purposes.</p>
                <p>If we intend to share your personal information for any other purposes not specified in this Privacy Policy, we will obtain your consent before doing so.</p>
                <p className="bold">Security Measures</p>
                <p>At LearnDev Foundation, we take the security and protection of your personal information seriously. We use reasonable and appropriate technical, administrative, and physical measures to safeguard your information against loss, theft, unauthorized access, disclosure, alteration, and destruction.</p>
                <p>We use secure encryption technologies and firewalls to protect your information during transmission and storage. We also limit access to your personal information to authorized personnel who need to know the information in order to provide our services to you.</p>
                <p>However, please note that no security measures can provide 100% protection against all security threats. While we strive to protect your personal information to the best of our abilities, we cannot guarantee the security of your information and cannot be held responsible for unauthorized access to your personal information that is beyond our control.</p>
                <p>In the event of a security breach that affects your personal information, we will promptly notify you and take appropriate steps to minimize the impact of the breach and prevent future incidents.</p>
                <p>If you have any concerns or questions about the security of your personal information, please don't hesitate to contact us at <a href='mailto:learndevfoundation@gmail.com'>learndevfoundation@gmail.com</a>.</p>
                <p className="bold">User Rights</p>
                <p>As a user of LearnDev Foundation, you have certain rights with respect to your personal information. These include:</p>
                <p>- Access: You have the right to access and obtain a copy of your personal information that we have collected and processed.</p>
                <p>- Correction: You have the right to request that any inaccurate or incomplete personal information we have about you be corrected.</p>
                <p>- Erasure: You have the right to request that we delete your personal information in certain circumstances, such as when the information is no longer necessary for the purposes for which it was collected or when you withdraw your consent.</p>
                <p>- Restriction: You have the right to request that we restrict the processing of your personal information in certain circumstances, such as when you contest the accuracy of the information or when the processing is unlawful.</p>
                <p>- Portability: You have the right to receive your personal information in a structured, commonly used, and machine-readable format and to transmit that information to another controller, where technically feasible.</p>
                <p>To exercise any of these rights, please contact us at learndevfoundation@gmail.com. We will respond to your request as soon as possible and no later than one month from the date of your request.</p>
                <p>Please note that we may need to verify your identity before processing your request, and that we may not be able to fulfill your request if doing so would infringe on the rights of others or if we are legally obligated to retain your information.</p>
                <p>If you have any questions or concerns about your rights or how your personal information is being processed, please contact us at the email address above.</p>
                <p className="bold">Legal Requirements</p>
                <p>LearnDev Foundation may be required to disclose your personal information if we believe in good faith that such disclosure is necessary to comply with a legal obligation, protect our rights or interests, or to prevent or investigate fraud, illegal activity, or security breaches.</p>
                <p>We may also disclose your personal information to a third party in the event of a merger, acquisition, or other corporate restructuring.</p>
                <p>In all cases where we are required to disclose your personal information, we will make every effort to notify you before doing so, unless we are prohibited from doing so by law or by a court order.</p>
                <p>We may also disclose aggregate or de-identified information about our users for marketing, advertising, research, or other purposes, provided that such information cannot be used to identify any individual user.</p>
                <p>Please note that this Privacy Policy applies only to information collected by LearnDev Foundation and not to information collected by third-party websites or services that may be linked to or from our website. We are not responsible for the privacy practices of those third-party websites or services and encourage you to read the privacy policies of any third-party website or service before providing your personal information to them.</p>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href='mailto:learndevfoundation@gmail.com'>learndevfoundation@gmail.com</a>.</p>
                <p className="bold">Updates to the Privacy Policy</p>
                <p>LearnDev Foundation reserves the right to update or modify this Privacy Policy at any time and without prior notice. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your personal information.</p>
                <p>If we make any material changes to this Privacy Policy, we will notify you by posting the updated Privacy Policy on our website or by sending an email to the email address you provided to us.</p>
                <p>Your continued use of the LearnDev Foundation website or services following any changes to this Privacy Policy constitutes your acceptance of those changes.</p>
                <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <a href='mailto:learndevfoundation@gmail.com'>learndevfoundation@gmail.com</a>.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Privacy;