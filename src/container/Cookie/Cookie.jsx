import React from 'react';
import { NavBar, Footer } from '../../components';

import "./Cookie.scss"

const Cookie = () => {
  return (
    <div className='app__cookie'>
        <NavBar />
        <div className="app__cookie_text">
            <div className="app__cookie_title">
                <h2>Cookie Policy</h2>
            </div>
            <div className="app__cookie_content">
                <p>Our Cookie Policy explains what cookies are, how we use cookies, how third-parties we may partner with may use cookies on the Service, your choices regarding cookies and further information about cookies.</p>
                <p className='bold'>What Cookies Are</p>
                <p>Cookies are small text files that are placed on your device when you visit a website. They are commonly used to improve your user experience, for example, by remembering your preferences or login details.</p>
                <p>Cookies can be classified into two categories: session cookies and persistent cookies. Session cookies are temporary and are deleted when you close your browser. Persistent cookies, on the other hand, remain on your device until they expire or you delete them.</p>
                <p>Cookies can also be categorized based on their purpose. Some common types of cookies include:</p>
                <p>- Essential cookies: These cookies are necessary for the website to function properly, for example, by allowing you to navigate through the pages and use certain features.</p>
                <p>- Analytics cookies: These cookies are used to collect information about how visitors use the website, such as which pages they visit most often and if they receive error messages. This information helps us to improve the website and your user experience.</p>
                <p>- Advertising cookies: These cookies are used to deliver advertisements that are relevant to you and your interests. They are often used by third-party advertising networks.</p>
                <p>- Social media cookies: These cookies allow you to share content from the website on social media platforms or to log in using your social media account.</p>
                <p>At LearnDev Foundation, we use cookies to improve your user experience and to collect information about how you use our website. We do not use cookies to collect any personally identifiable information.</p>
                <p className="bold">The Types of Cookies Used on the Websites</p>
                <p>At LearnDev Foundation, we use a variety of cookies on our website, including:</p>
                <p>- Essential cookies: These cookies are necessary for the website to function properly. They enable you to navigate through the pages and use certain features, such as accessing secure areas of the website.</p>
                <p>- Analytics cookies: These cookies are used to collect information about how visitors use our website. This information helps us to improve the website and your user experience. We use Google Analytics to collect this information.</p>
                <p>- Third-party cookies: Some pages on our website may contain content from third-party websites, such as YouTube videos or social media widgets. These third-party websites may also use cookies to collect information about you. Please refer to their respective privacy policies for more information.</p>
                <p>By using our website, you consent to the use of these cookies in accordance with this Cookie Policy.</p>
                <p className="bold">How Cookies are Used and What Data is Collected</p>
                <p>At LearnDev Foundation, we use cookies to improve your user experience and to collect information about how you use our website. The information we collect through cookies may include your IP address, browser type and version, the pages you visit on our website, the time and date of your visit, and other similar information.</p>
                <p>We use analytics cookies to collect information about how visitors use our website, such as which pages they visit most often and if they receive error messages. This information helps us to improve the website and your user experience.</p>
                <p>We do not use cookies to collect any personally identifiable information.</p>
                <p>Please note that third-party websites, such as social media platforms, may also collect information about you through cookies when you interact with our website. We have no control over these cookies and recommend that you review their respective privacy policies for more information.</p>
                <p>By using our website, you consent to the use of cookies in accordance with this Cookie Policy. If you do not wish to accept cookies, you may disable them in your browser settings. However, please note that disabling cookies may affect your user experience on our website.</p>
                <p className="bold">Third-party Cookies</p>
                <p>In addition to the cookies we use on our website, we may also use third-party cookies for various purposes, such as to display advertisements and to analyze user behavior on our website.</p>
                <p>We use third-party services, such as Google Analytics, to help us understand how our website is being used and to improve its functionality. These third-party services may also use cookies to collect information about your use of our website.</p>
                <p>We have no control over the cookies used by third-party websites, and we do not have access to or control over any information that they may collect. We recommend that you review the respective privacy policies of these third-party websites for more information about their use of cookies and the information they collect.</p>
                <p>You can choose to opt out of third-party cookies by adjusting your browser settings or by using the opt-out tools provided by the respective third-party services. However, please note that opting out of third-party cookies may affect your user experience on our website and may limit your access to certain features or functionality.</p>
                <p>By using our website, you consent to the use of third-party cookies in accordance with this Cookie Policy.</p>
                <p className="bold">How Users Can Control Cookies</p>
                <p>You can control the use of cookies on our website by adjusting your browser settings. Most web browsers automatically accept cookies, but you can modify your browser settings to reject cookies or to alert you when a cookie is being placed on your device.</p>
                <p>Please note that if you choose to reject cookies or disable them, some features of our website may not be available to you or may not function properly.</p>
                <p>You can also opt out of third-party cookies by adjusting your browser settings or by using the opt-out tools provided by the respective third-party services.</p>
                <p>Additionally, you may be able to control the use of cookies through your mobile device settings. Please refer to your device's user manual or documentation for instructions on how to control cookies on your device.</p>
                <p>For more information on how to control cookies, please visit <a href='https://www.aboutcookies.org' target="_blank">www.aboutcookies.org</a> or <a href='https://www.allaboutcookies.org' target="_blank">www.allaboutcookies.org</a>.</p>
                <p>Please note that LearnDev Foundation is not responsible for the content of external websites or the accuracy of information contained on these websites.</p>
                <p>If you have any questions about this Cookie Policy or the use of cookies on our website, please contact us at <a href='mailto:learndevfoundation@gmail.com'>learndevfoundation@gmail.com</a>.</p>
                <p className="bold">Changes to the Cookie Policy</p>
                <p>We reserve the right to amend this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. If we make any material changes to the way we use cookies or the information we collect through cookies, we will update this Cookie Policy accordingly and post the updated policy on our website.</p>
                <p>We encourage you to check this page periodically for any changes. Your continued use of our website after any such changes have been posted indicates your acceptance of the revised Cookie Policy.</p>
                <p>If you have any questions about this Cookie Policy or the use of cookies on our website, please contact us at <a href='mailto:learndevfoundation@gmail.com'>learndevfoundation@gmail.com</a>.</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cookie;