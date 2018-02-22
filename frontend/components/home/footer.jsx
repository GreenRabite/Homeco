import React from 'react';

const Footer = () => (
  <div className='footer'>
    <div className='footer-main'>
      <ul className='footer-list'>
        <li>About
          <ul>
            <li><i className="fas fa-code-branch"></i><a href='https://github.com/GreenRabite/Homeco'>About Homeco</a></li>
            <li>About Develop Team</li>
          </ul>
        </li>
        <li>Team Member
          <ul>
            <li><i className="fab fa-github"></i><a href='https://github.com/GreenRabite'>Andy Luo</a></li>
            <li><i className="fab fa-github"></i><a href='https://github.com/LuuuFan'>Lu Fan</a></li>
            <li><i className="fab fa-github"></i><a href='https://github.com/learnor'>Zhipeng Wen</a></li>
          </ul>
        </li>
        <li>Discover
          <ul>
            <li><a href='https://greenrabite.github.io/'>Andy's Profile</a></li>
            <li><a href='https://captr.herokuapp.com/#/'>Andy's Project</a></li>
            <li><a href='https://celp.herokuapp.com/#/'>Lu's Project</a></li>
            <li><a href='https://robinhold.herokuapp.com/'>Zhipent's Project</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div>
      <p>Copyright &copy; 2018-2018 Homeco Team</p>
    </div>
  </div>
);

export default Footer;
