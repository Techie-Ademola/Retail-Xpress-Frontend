import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import Link from 'next/link'
// // import * as allComponents from 'react-bootstrap';
import Styles from '@/Styles/Navbar.module.css'

import { useEffect } from 'react';
import { useState } from 'react'
import Link from 'next/link'
import { Dropdown } from 'react-bootstrap';

function Navbar() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navbar = document.querySelector('.home_header');
      const body = document.querySelector('body'); // Add this line to select the body element

      window.addEventListener('scroll', () => {
        if (window.scrollY > 450) {
          navbar.classList.add('scrolled');
          body.classList.add('bodyjerk'); // Add this line to add the class to the body element

        } else {
          navbar.classList.remove('scrolled');
          body.classList.remove('bodyjerk'); // Add this line to remove the class from the body element

        }
      });
      let toggle = document.querySelector('.navbar_toggler');
      let navbarList = document.querySelector('.navbar_nav');
      let iconToggler = document.querySelector('.navbar_toggler');

      toggle.onclick = function() {
          navbarList.classList.toggle('activate')
          iconToggler.classList.toggle('activateIcon')
      }
    }

  }, [])

  const [dropdownVisibleAcct, setDropdownVisibleAcct] = useState(false);
  const toggleAcct = () => {
    setDropdownVisibleAcct(!dropdownVisibleAcct);
  };

  const [dropdownCart, setDropdownCart] = useState(false);
  const toggleCart = () => {
    setDropdownCart(!dropdownCart);
  };

  return (

    <div>

      {/* <!-- Headline News Section --> */}

      <section className={`${Styles.headline_news} alert alert-default border-0 rounded-0 alert-dismissible fade show mb-0`}>
          <div className={`${Styles.headline_news_content} container-fluid`}>
              <div className={`${Styles.headline1}`}>
                  <p><span className={`${Styles.mega_phone} bi-megaphone `}></span> <span className="d-none d-md-inline"> Big News! </span> We're excited to announce a brand new product.</p>
              </div>
              <div className={`${Styles.headline2}`}>
                  <Link href="" className="d-none d-md-inline">Learn more</Link>
                  <button type="button" data-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></button>
              </div>
          </div>
      </section>



      {/* <!-- Navbar Section --> */}

      <header className={`${Styles.home_header} home_header`}>
          <nav className={`${Styles.home_header_nav} navbar navbar-expand-lg navbar-light`}>
              <div className={`${Styles.nav_toggle_wrap}`}>
                  <button  className={`${Styles.navbar_toggler} navbar_toggler navbar-toggler`} type="button" aria-expanded="false" aria-label="Toggle navigation">
                      <div className={`${Styles.toggler_icon} toggler-icon`}></div>
                      <div className={`${Styles.toggler_icon} toggler-icon`}></div>
                      <div className={`${Styles.toggler_icon} toggler-icon`}></div>
                    </button>
                    <Link className="navbar-brand" href="/">
                        <Image src="/images/logo_1.png" alt="" width={190} height={40} />
                    </Link>
              </div>

              <div className={`${Styles.navlist_wrapper} ml-auto `} id="navbarSupportedContent">
                  <form className={`${Styles.search_input_form} form-inline d-none d-lg-block ml-auto`} >
                      <div className={`${Styles.search_input_wrap} input-group `}>
                          <input type="text" className="form-control" placeholder="Search product, brands, categories..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                          <span className={`${Styles.nav_search_button} input-group-text `} id="basic-addon2"><i className="bi bi-search"></i></span>
                          </div>
                      </div>
                  </form>
                        
                <ul className={`${Styles.navbar_nav} navbar_nav navbar-nav ` }>
                  <li className={`${Styles.nav_item} nav-item`}>
                    <Link className={`${Styles.nav_link} nav-link `} href="/blog">Blog</Link>
                  </li>
                  <li className={`${Styles.nav_item} nav-item`}>
                    <Link className={`${Styles.nav_link} nav-link `} href="/about-us">About us</Link>
                  </li>
                  <li className={`${Styles.nav_item} nav-item`}>
                    <Link className={`${Styles.nav_link} nav-link `} href="/vendors">Vendors Dashboard</Link>
                  </li>
                </ul>
              </div>
                      
              <form className={`${Styles.search_input_form_sec} form-inline d-block d-lg-none ml-auto`}>
                  <div className={`${Styles.search_input_cont}`} >
                      <div className={`${Styles.search_input_wrap} ${Styles.search_input_wrap_sec} input-group`} >
                          <input type="text" className="form-control" placeholder="Search product, brands, categories..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                          <span className={`${Styles.nav_search_button} input-group-text `}  id="basic-addon2"><i className="bi bi-search"></i></span>
                          </div>
                      </div>
                  </div>
              </form>

              <div className={`${Styles.nav_cart_wrapper}`} >
                <Link href=""><span className="bi-heart"></span></Link>
                {/* <Link href=""><span className="bi-cart3"></span></Link> */}
                <Dropdown show={dropdownCart} onClick={toggleCart}>
                  <Dropdown.Toggle variant="white" className={`${Styles.Dropdown}`}>
                    <span className={`${Styles.nav_user_icon} bi-cart3 `}></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{height: 'fit-content', width: 'fit-content', background: 'transparent', padding: '0', marginTop: '10px', border: 'transparent', borderRadius: '0px'}}>
                    <div className={`${Styles.checkout_nav_dropdown} mt-0 rounded-0`} >
                      <div className={`${Styles.checkout_nav_ind} mb-4`} >
                        <div className={`${Styles.checkout_nav_img}`} >
                            Image
                        </div>
                        <div className={`${Styles.checkout_nav_detail}`} >
                            <p className="m-0 font-weight-bold">Michael Joseph</p>
                            <p className="m-0 font-weight-bold">070xxxxxxxx</p>
                        </div>
                      </div>
                      <p className={`${Styles.checkout_nav_detail} font-weight-bold my-1`} ><Link href="/order">Orders</Link></p>
                      <p className={`${Styles.checkout_nav_detail} font-weight-bold my-1`} >Pending reviews</p>
                      <p className={`${Styles.checkout_nav_detail} font-weight-bold my-1`} ><Link href="/saved-items">Saved items</Link></p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown show={dropdownVisibleAcct} onClick={toggleAcct}>
                  <Dropdown.Toggle variant="white" className={`${Styles.Dropdown}`}>
                    <span className={`${Styles.nav_user_icon} bi-person-circle `}></span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={`${Styles.user_profile_wrap}`}>
                  <div>
                    <div className={`${Styles.user_profile}`}>
                      <div className={`${Styles.user_profile_img}`}>
                        Image
                      </div>
                      <div className={`${Styles.user_profile_detail} pt-3`}>
                        <h5 className='m-0'>Account</h5>
                        <p className='m-0'>Create account</p>
                      </div>
                    </div>
                    <div className={`${Styles.user_profile_link_wrap} mt-4`}>
                      <div>
                        <Link className={`${Styles.user_profile_link}`} href="/sign-up" passHref>Sign up</Link>
                      </div>
                        <Link className={`${Styles.user_profile_link} px-3`} href="/login" passHref><i className="bi bi-box-arrow-in-right"></i></Link>
                    </div>
                  </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
          </nav>
      </header>
    </div>
  );
}

export default Navbar;







// const Navbar = () => {
//   // const [showNav, setShowNav] = useState(false)

//   // const toggleNav = () => {
//   //   setShowNav(!showNav)
//   // }

//   const navbar = document.querySelector('.home_header');

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//       navbar.classList.add('scrolled');
//     } else {
//       navbar.classList.remove('scrolled');
//     }
//   });

//   const [dropdownVisibleAcct, setDropdownVisibleAcct] = useState(false);
//   const toggleAcct = () => {
//     setDropdownVisibleAcct(!dropdownVisibleAcct);
//   };

//   const [dropdownCart, setDropdownCart] = useState(false);
//   const toggleCart = () => {
//     setDropdownCart(!dropdownCart);
//   };
  
//   return (

    
//   )
// }

// export default Navbar

