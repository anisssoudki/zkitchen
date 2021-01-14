import React from 'react';
import  './Header.css'
const Header = () => {

  function scrollWin() {
    window.scrollBy(0, 500);
  }
    return (
<div>
<div class="topnav">
  <a  href="#home">Home</a>
  
  
  <a target="_" href="https://learn.co/generous-composition-0394/resume">Resume</a>
  <a target="_" href="https://www.linkedin.com/in/aniss-soudki-0479781b2/">linkedin</a>
  <a target="_" href="https://github.com/anisssoudki">Github</a>
  <a target="_" href="https://learn.co/blog">Twitter</a>
  
</div>

</div>
    ) 



    
}

export default Header
