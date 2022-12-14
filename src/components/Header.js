// import React from "react";
// import "./Header.css";
// import {BiSearch} from "react-icons/bi";

// function Header() {
//   return (
//     <div className="header-container">
//       <div className="header">
//         <div className="header-logo">
//           <img src="./01.png" />
//         </div>

//         <div className="header-body">
//           <div className="searchbar">
//             <BiSearch className="search-icon" />
//             <input
//               placeholder="Search anything"              
//             />
//           </div>
//           <div className="account">
//             <img src="https://i.pinimg.com/originals/f0/4d/30/f04d30d27c1503883b6a563ff88ebe7a.jpg" />
//             <div className="account-holder">
//                 <h4>Subhampreet</h4>
//                 <p>@subhampreet</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;






import React from 'react'
import './Header.css'
import {AiFillCreditCard} from 'react-icons/ai'
import {  DiGithubBadge} from "react-icons/di";
function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <div className='header-logo'>
        Xpensr 
        <div className='logo-icon'>
        <AiFillCreditCard />
        </div> 
        
        </div>  
        <div className='header-button'>
          <a href='https://github.com/ShubhangiSinghal18' 
          target='_blank' 
          rel='noopener no referer' className='anchor-tag'>
              <DiGithubBadge className='button-icon'/>
          

              Star

          </a>
        </div>
      
      </div>
    </div>
  )
}

export default Header

