import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
  <div className="credits">
    <h4>Developed by Madeleine Young</h4>
  </div>
  <div className="socials">
    <button className="facebook">
      <img src='src/assets/Facebook.png' alt="facebook logo"/>
    </button>
    <button className="twitter">
      <img src="src/assets/Twitter.png" alt="twitter logo"/>
    </button>
    <button className="instagram">
      <img src="src/assets/Instagram.png" alt="instagram logo"/>
    </button>
    <button className="linkedin">
      <img src="src/assets/LinkedIn.png" alt="linkedin logo"/>
    </button>
    <button className="youtube">
      <img src="src/assets/YouTube.png" alt="youtube logo"/>
    </button>
  </div>
</div>
  )
}

export default Footer