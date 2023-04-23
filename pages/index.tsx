import Image from 'next/image'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Styles from '@/Styles/index-page.module.css'
// import { Navbar } from 'react-bootstrap'
// import * as allComponents from 'react-bootstrap';
// import { useState } from 'react';
// import { Dropdown } from 'react-bootstrap';


// const [dropdownVisible, setDropdownVisible] = useState(false);
// const toggleDropdown = () => {
//   setDropdownVisible(!dropdownVisible);
// };
import { useEffect } from 'react';
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap';

export default function Home() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            let toggle = document.querySelector('.home_browse_wrap');
            let navbarList = document.querySelector('.sideNav');
    
            toggle.onclick = function() {
                navbarList.classList.toggle('show')
            }

            let sideNav_dropRight = document.querySelector('.sidenav-dropright');
            let dropBtn = document.querySelector('.dropright-btn');

            dropBtn.onclick = function() {
                sideNav_dropRight.classList.toggle('view')
            }
        }


    
      }, []);

  return (
    <>
    <main className={`${Styles.wrapper_container} flex min-h-screen flex-col items-center justify-between p-24`}>
      {/* <Navbar/> */}
        {/* <allComponents.Container>
          <allComponents.Row>
              <allComponents.Col> 
                Column One
              </allComponents.Col>
              <allComponents.Col> 
                Column Two
              </allComponents.Col>
          </allComponents.Row>
        </allComponents.Container> */}
      {/* <Footer/> */}

      {/* <div className="row">
        <div className={`${Styles.}`} "col-md-4 bg-warning">1</div>
        <div className={`${Styles.}`} "col-md-4 bg-danger">2</div>
        <div className={`${Styles.}`} "col-md-4 bg-primary">3</div>
      </div> */}

      <section className={`${Styles.hero_home_section} py-5`} >
          <div className="row">
              <div className="col-lg-3 p-0 d-none d-lg-block">
              {/* <Dropdown>
                <Dropdown.Toggle variant="light" className={`${Styles.home_browse_wrap} mx-auto`}>
                  <p className={`${Styles.home_browse_cat} m-0`}>
                      <button className={`${Styles.hero_toggler}`}>
                          <div className={`${Styles.hero_toggler_icon}`}></div>
                          <div className={`${Styles.hero_toggler_icon}`}></div>
                          <div className={`${Styles.hero_toggler_icon}`}></div>
                      </button>
                      Browse Categories 
                      <span className="bi bi-chevron-down"></span>
                  </p>                
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minHeight: '120px'}}>

                  <div className={`collapse show`} id="collapseWidthExample">
                      <div className={`${Styles.sidenav_item_wrap} card card-body  px-2 mt-3 w-100`}>
                          <ul className={`${Styles.sidenav_item} list-group `}>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-cup-hot mr-3"></i>Beverages <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-droplet mr-3"></i>Table Water <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-cloud-fog mr-3"></i>Snacks <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-paint-bucket mr-3"></i>Perfumes <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-laptop mr-3"></i>Computers <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-phone mr-3"></i>Phones <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-apple mr-3"></i>Electronics/Appliances <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-folder mr-3"></i>Men's Clothes <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-folder-plus mr-3"></i>Women's Clothes <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-controller mr-3"></i>Games & Consoles <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                              <li className="list-group-item border-0 pl-2">
                                  <Link className="d-block" href="" passHref><Dropdown.Item><i className="bi bi-gem mr-3"></i>Beauty/Self Care <span className="bi bi-chevron-right"></span></Dropdown.Item></Link>
                              </li>
                          </ul>
                      </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown> */}
                  {/* <Link href="#" passHref>
                    <Dropdown.Item>Action</Dropdown.Item>
                  </Link>
                  <Link href="#" passHref>
                    <Dropdown.Item>Another action</Dropdown.Item>
                  </Link>
                  <Link href="#" passHref>
                    <Dropdown.Item>Something else here</Dropdown.Item>
                  </Link> */}

                    <div className={`${Styles.home_browse_wrap} home_browse_wrap mx-auto`} >
                        <p className={`${Styles.home_browse_cat} m-0`}>
                            <button className={`${Styles.hero_toggler}`}>
                                <div className={`${Styles.hero_toggler_icon}`}></div>
                                <div className={`${Styles.hero_toggler_icon}`}></div>
                                <div className={`${Styles.hero_toggler_icon}`}></div>
                            </button>
                            Browse Categories 
                            <span className="bi bi-chevron-down"></span>
                        </p>                               
                    </div>
                    <div style={{minHeight: '120px'}}>
                        <div className={` show sideNav`}>
                            <div className={`${Styles.sidenav_item_wrap} card card-body  px-2 mt-3 w-100`}>
                                <ul className={`${Styles.sidenav_item} list-group `}>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block dropright-btn" href="" passHref><i className="bi bi-cup-hot mr-3"></i>Beverages <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <div className={`${Styles.sidenav_dropright} sidenav-dropright`}>
                                            <div className="row">
                                                <div className="col-5">
                                                    <p>BEVERAGES</p>
                                                    <ul>
                                                        <li><a href="">Water</a></li>
                                                        <li><a href="">Coffee</a></li>
                                                        <li><a href="">Beer</a></li>
                                                        <li><a href="">Soft Drinks</a></li>
                                                        <li><a href="">Wines</a></li>
                                                        <li><a href="">Energy Drinks</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-5">
                                                    <p>BRANDS</p>
                                                    <ul>
                                                        <li><a href="">Nestle</a></li>
                                                        <li><a href="">Nestle</a></li>
                                                        <li><a href="">Nestle</a></li>
                                                        <li><a href="">Nestle</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-droplet mr-3"></i>Table Water <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-cloud-fog mr-3"></i>Snacks <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-paint-bucket mr-3"></i>Perfumes <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-laptop mr-3"></i>Computers <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-phone mr-3"></i>Phones <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-apple mr-3"></i>Electronics/Appliances <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-folder mr-3"></i>Men's Clothes <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-folder-plus mr-3"></i>Women's Clothes <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-controller mr-3"></i>Games & Consoles <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                    <li className="list-group-item border-0 pl-2">
                                        <Link className="d-block" href="" passHref><i className="bi bi-gem mr-3"></i>Beauty/Self Care <span className="bi bi-chevron-right"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
              </div>

              <div className="col-lg-9 pr-0">
                  <div id="carouselExampleCaptions" className={`${Styles.hero_carousel} carousel slide `} data-ride="carousel">
                      <ol className={`${Styles.carousel_indicators} carousel-indicators  mt-5`} >
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className={`${Styles.active}`}></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1" className={`${Styles.active}`}></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2" className={`${Styles.active}`}></li>
                      </ol>
                      <div className="carousel-inner mb-5 mb-md-0">
                        <div className={`${Styles.carousel_item} carousel-item  pb-5 active`}>
                          <img src="/images/hero-slider1.png" className="d-block ml-auto mr-5" style={{width: '400px'}} alt="..." />
                          <div className={`${Styles.carousel_caption} carousel-caption `}>
                            <p><small className="text-dark">EXCLUSIVE OFFER <span className="text-dark font-weight-bold p-2 rounded-pill">-40% OFF</span></small></p>
                            <h1>Grocery full of <br /> Inspiration</h1>
                            <p>Only this week. Don't miss .......</p>
                            <div className="mt-4 mt-md-5">
                              <Link href="" className={`${Styles.hero_shop_btn}`} >Shop Now</Link>
                            </div>
                          </div>
                        </div>
                        <div className={`${Styles.carousel_item} carousel-item  pb-5`}>
                          <img src="/images/hero-slider2.png" className="d-block w-50 ml-auto" alt="..." />
                          <div className={`${Styles.carousel_caption} carousel-caption `}>
                              <p><small className="text-dark">EXCLUSIVE OFFER <span className="text-dark font-weight-bold p-2 rounded-pill">-40% OFF</span></small></p>
                              <h1>Poland Spring <br /> Table Water</h1>
                              <p>Only this week. Don't miss .......</p>
                              <div className="mt-4 mt-md-5">
                                  <Link href="" className={`${Styles.hero_shop_btn}`}>Shop Now</Link>
                              </div>
                          </div>
                        </div>
                        <div className={`${Styles.carousel_item} carousel-item  pb-5`}>
                          <img src="/images/hero-slider1.png" className="d-block ml-auto mr-5" style={{width: '400px'}} alt="..." />
                          <div className={`${Styles.carousel_caption} carousel-caption `}>
                              <p><small className="text-dark">EXCLUSIVE OFFER <span className="text-dark font-weight-bold p-2 rounded-pill">-40% OFF</span></small></p>
                              <h1>Grocery full of <br /> Inspiration</h1>
                              <p>Only this week. Don't miss .......</p>
                              <div className="mt-4 mt-md-5">
                                  <Link href="" className={`${Styles.hero_shop_btn}`} >Shop Now</Link>
                              </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- <button className={`${Styles.}`} "carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span className={`${Styles.}`} "carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className={`${Styles.}`} "sr-only">Previous</span>
                      </button>
                      <button className={`${Styles.}`} "carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span className={`${Styles.}`} "carousel-control-next-icon" aria-hidden="true"></span>
                        <span className={`${Styles.}`} "sr-only">Next</span>
                      </button> --> */}
                    </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.home_flash_container} py-5`}>
            <div className={`${Styles.flash_container}`}>
                <div className={`${Styles.flash_container_head}`}>
                    <div className={`${Styles.flash_head1} d-none d-lg-inline`}></div>
                    <div className={`${Styles.flash_head2}`}>
                        <h2 className="text-white">Flash Sales <span>10</span><span>28</span><span>54</span></h2>
                    </div>
                    <div className={`${Styles.flash_head3} d-none d-md-inline`}>
                        <Link href="/flash-sales">View more</Link>
                    </div>
                </div>

                <div className={`${Styles.flash_carousel_body} py-3  mt-5`}>
                    <div className={`${Styles.flash_carousel_row} `}>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`}>
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`}>
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`}>
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Poland Spring</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <section className={`${Styles.deal_sect_container} py-5 my-5`}>
          <div className={`${Styles.deal_sect_wrap}`}>
              <div className={`${Styles.deal_sect} row`} >
                  <div className={`${Styles.deal_sect_img} col-md-4 px-0 `}>
                      <img className="img-fluid img-responsive w-100" src="./images/offer_sect_img.png" alt="" />
                  </div>
                  <div className={`${Styles.deal_sect_caption_wrap} col-md-8 px-0 px-md-3 px-lg-5  mt-5 mt-md-0`}>
                      <p className="mt-0"><span className={`${Styles.deal_tag}`}>Deal of the Day</span></p>
                      <h1 className="font-weight-bold">Thermocool Water <br /> Dispenser</h1>
                      <h1 className="font-weight-bold text-danger">N1200 <small className="text-muted font-weight-bold" style={{fontSize: '22px', verticalAlign: 'middle'}}><del className='font-weight-lighter'>N1500</del></small></h1>
                      <p className="text-muted"><small>STAINLESS STEEL HOT WATER TANK that is corrosion resistant and ensures better hygiene. Stainless steel is naturally resistant to corrosion from fresh water resulting in a much longer service life.</small></p>
                      <p className="m-0"><span className="font-weight-bold">Sold: <b>15</b></span> <span className="font-weight-bold float-right">Available: <b>85</b></span></p>
                      <div className={`${Styles.sold_progress} progress `}>
                          <div className={`${Styles.progress_bar} progress-bar`} style={{width: '15%'}}></div>
                      </div>
                      <p className="mt-5 font-weight-bold"><small className="font-weight-bold">Offer ends in</small></p>
                      <div className={`${Styles.offer_time}`}>
                          <div className={`${Styles.offer_period}`}><p className="m-0 mb-1">10</p><small>Hours</small></div>
                          <div className={`${Styles.offer_colon}`}>:</div>
                          <div className={`${Styles.offer_period}`}><p className="m-0 mb-1">28</p><small>Minutes</small></div>
                          <div className={`${Styles.offer_colon}`}>:</div>
                          <div className={`${Styles.offer_period}`}><p className="m-0 mb-1">54</p><small>Seconds</small></div>
                      </div>
                      <p className={`${Styles.offer_buy} mt-5`}><Link className="btn" href="">Buy Now</Link></p>
                  </div>
              </div>
          </div>
      </section>
      
      <section className={`${Styles.top_cat_wrapper} py-5`}>
          <div className={`${Styles.top_cat_container}`}>
              <div className={`${Styles.top_cat_head}`}>
                  <h2 className="text-white mb-0">Top Categories</h2>
              </div>

              <div className={`${Styles.top_cat_body} py-3  mt-4`}>
                  <div className={`${Styles.top_cat_row}`}>
                      <div className={`${Styles.top_categories}`}>
                          <Link href="">
                              <div className={`${Styles.top_categories_img}`}>
                                  <img className="w-100" src="./images/phone-img.png" alt="" />
                              </div>
                              <h4>Phones</h4>
                          </Link>
                      </div>
                      <div className={`${Styles.top_categories}`}>
                          <Link href="">
                              <div className={`${Styles.top_categories_img}`}>
                                  <img className="w-100" src="./images/phone-img.png" alt="" />
                              </div>
                              <h4>Groceries</h4>
                          </Link>
                      </div>
                      <div className={`${Styles.top_categories}`}>
                          <Link href="">
                              <div className={`${Styles.top_categories_img}`}>
                                  <img className="w-100" src="./images/phone-img.png" alt="" />
                              </div>
                              <h4>Fashion</h4>
                          </Link>
                      </div>
                      <div className={`${Styles.top_categories}`}>
                          <Link href="">
                              <div className={`${Styles.top_categories_img}`}>
                                  <img className="w-100" src="./images/phone-img.png" alt="" />
                              </div>
                              <h4>Appliances</h4>
                          </Link>
                      </div>
                      <div className={`${Styles.top_categories}`}>
                          <Link href="">
                              <div className={`${Styles.top_categories_img}`}>
                                  <img className="w-100" src="./images/phone-img.png" alt="" />
                              </div>
                              <h4>Electronics</h4>
                          </Link>
                      </div>
                      <div className={`${Styles.top_categories}`}>
                          <Link href="">
                              <div className={`${Styles.top_categories_img}`}>
                                  <img className="w-100" src="./images/phone-img.png" alt="" />
                              </div>
                              <h4>Gadgets</h4>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.discount_sect_wrapper} w-100 py-5`}>
          <div className={`${Styles.discount_sect_wrap}`}>
              <div className={`${Styles.discount_sect_container} d-flex `}>
                  <div className="col-6">
                      <div className={`${Styles.off_section}`}>
                          <div className="d-flex">
                              <div className={`${Styles.discount_sect_detail}`}>
                                  <h1 className="text-danger font-weight-bold m-0">50% <br/> <span>off</span></h1>
                                  <p className="font-weight-bold mt-5">Buy More... Save More.</p>
                              </div>
                              <div className={`${Styles.discount_sect_img}`}>
                                  <img className="float-right" src="./images/offsect_img1.png" alt="" />
                              </div>
                          </div>
                          <Link href="" className={`${Styles.discount_sect_button}`}><span className="bi bi-chevron-right"></span></Link>
                      </div>
                  </div>
                  <div className="col-6">
                      <div className={`${Styles.delivery_section}`}>
                          <div className="d-flex">
                              <div className={`${Styles.discount_sect_detail}`}>
                                  <h1 className="text-white font-weight-bold m-0">Door <br/> Delivery</h1>
                                  <p className="text-white mt-5">Buy some product and get a free delivery as a tip</p>
                              </div>
                              <div className={`${Styles.delivery_sect_img}`}>
                                  <img className="float-right" src="./images/offsect_img2.png" alt="" />
                              </div>
                          </div>
                          <Link href="" className={`${Styles.discount_sect_button}`}><span className="bi bi-chevron-right"></span></Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.grocery_shop_container} pt-0 pt-md-5 pb-5 `}>
          <div className={`${Styles.flash_container}`}>
              <div className={`${Styles.flash_container_head}`}>
                  <div className={`${Styles.flash_head2}`}>
                      <h3>Grocery Shop</h3>
                  </div>
                  <div className={`${Styles.flash_head3} d-none d-md-inline`}>
                      <Link href="">View more</Link>
                  </div>
              </div>

              <div className={`${Styles.flash_carousel_body} py-3  mt-3`}>
                  <div className={`${Styles.flash_carousel_row}`}>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Poland Spring</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className={`${Styles.flash_carousel_body} py-3 mt-3 d-none d-md-block`}>
                  <div className={`${Styles.flash_carousel_row}`}>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Poland Spring</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.grocery_shop_container} pt-0 pt-md-5 pb-5 `}>
          <div className={`${Styles.flash_container}`}>
              <div className={`${Styles.flash_container_head}`}>
                  <div className={`${Styles.flash_head2}`}>
                      <h3>Personal Care</h3>
                  </div>
                  <div className={`${Styles.flash_head3} d-none d-md-inline`}>
                      <Link href="">View more</Link>
                  </div>
              </div>

              <div className={`${Styles.flash_carousel_body} py-3  mt-3`}>
                  <div className={`${Styles.flash_carousel_row}`}>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Poland Spring</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.grocery_shop_container} pt-0 pt-md-5 pb-5 `}>
          <div className={`${Styles.flash_container}`}>
              <div className={`${Styles.flash_container_head}`}>
                  <div className={`${Styles.flash_head2}`}>
                      <h3>Baby Product</h3>
                  </div>
                  <div className={`${Styles.flash_head3} d-none d-md-inline`}>
                      <Link href="">View more</Link>
                  </div>
              </div>

              <div className={`${Styles.flash_carousel_body} py-3  mt-3`}>
                  <div className={`${Styles.flash_carousel_row}`}>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Poland Spring</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.grocery_shop_container} pt-0 pt-md-5 pb-5 `}>
          <div className={`${Styles.flash_container}`}>
              <div className={`${Styles.flash_container_head}`}>
                  <div className={`${Styles.flash_head2}`}>
                      <h3>Fashion</h3>
                  </div>
                  <div className={`${Styles.flash_head3} d-none d-md-inline`}>
                      <Link href="">View more</Link>
                  </div>
              </div>

              <div className={`${Styles.flash_carousel_body} py-3  mt-3`}>
                  <div className={`${Styles.flash_carousel_row}`}>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Poland Spring</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img2.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Golden Morn</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/flash-img3.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                      <div className={`${Styles.flash_carousel}`}>
                          <div className={`${Styles.flash_cart_wrap}`}>
                              <span><i className="bi bi-heart"></i></span>
                              <span><i className="bi bi-cart3"></i></span>
                          </div>
                          <div className={`${Styles.flash_carousel_img}`}>
                              <img src="./images/hero-slider1.png" alt="" />
                          </div>
                          <div className={`${Styles.flash_carousel_caption}`}>
                              <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                              <div className={`${Styles.flash_price}`}>
                                  <p className={`${Styles.category_title} m-1 font-weight-bold`}>Nutella</p>
                                  <p className={`${Styles.category_new_price} m-1 font-weight-bold `}>₦400</p>
                                  <p className={`${Styles.category_prev_price} m-1`}>₦450</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.grocery_shop_container} pt-0 pt-md-5 pb-5 `}>
          <div className={`${Styles.official_store_wrap} px-3 py-4 p-md-4`}>
              <h3 className="mb-4">Official Store</h3>
              <div className="row">
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6 my-2 px-3">
                      <div className="row">
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_one}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_1.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_two}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_2.png" alt="" />
                                </div>
                              </a>
                          </div>
                          <div className="col-4 px-2">
                              <a href="">
                                <div className={`${Styles.store_product} ${Styles.good_three}`}>
                                  <img className="img-fluid img-responsive" src="./images/unil_3.png" alt="" />
                                </div>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section className={`${Styles.grocery_shop_container} pt-0 pt-md-5 pb-5 `}>
          <div id="carouselExampleCaptions2" className="carousel slide pt-5" data-ride="carousel">
              <ol className={`${Styles.comment_carousel_indicators} carousel-indicators `}>
                <li data-target="#carouselExampleCaptions2" data-slide-to="0" className={`${Styles.active}`}></li>
                <li data-target="#carouselExampleCaptions2" data-slide-to="1" className={`${Styles.active}`}></li>
                <li data-target="#carouselExampleCaptions2" data-slide-to="2" className={`${Styles.active}`}></li>
              </ol>
              <div className={`${Styles.support_sect_wrap} carousel-inner`}  style={{fontSize: '18px'}}>
                <div className={`${Styles.support_sect} active carousel-item`}>  
                  <div className={`${Styles.support_sect_holder} d-flex`}>
                      <div className="w-100 pr-md-4">
                          <h2 className="font-weight-bold mb-4">Online Support</h2>

                          <p>I recently had an issue with a product I purchased on this site, but the customer support team was very helpful in resolving the problem. They were quick to respond to my inquiry and ensured I was satisfied with my purchase.</p>
                          <div className={`${Styles.user_comment_proflie}  mt-5`}>
                              <img src="./images/profile_img1.jpeg" alt="" />
                              <p>Judith Black</p>
                          </div>
                      </div>
                      <div className="w-100 pl-md-4">
                          <h2 className="font-weight-bold mb-4">Money Return</h2>

                          <p>I bought a gadget that didn't meet my expectations. I returned it, and the process was simple and fast. I got my money back in less than a week.</p>
                          <div className={`${Styles.user_comment_proflie}  mt-5`}>
                              <img src="./images/profile_img2.jpeg" alt="" />
                              <p>Joseph Rodriguez</p>
                          </div>
                      </div>
                  </div>
                </div>

                <div className={`${Styles.support_sect} carousel-item `} >
                  <div className={`${Styles.support_sect_holder} d-flex`}>
                      <div className="w-100 pr-md-4">
                          <h2 className="font-weight-bold mb-4">Online Support</h2>

                          <p>I recently had an issue with a product I purchased on this site, but the customer support team was very helpful in resolving the problem. They were quick to respond to my inquiry and ensured I was satisfied with my purchase.</p>
                          <div className={`${Styles.user_comment_proflie}  mt-5`}>
                              <img src="./images/profile_img1.jpeg" alt="" />
                              <p>Judith Black</p>
                          </div>
                      </div>
                      <div className="w-100 pl-md-4">
                          <h2 className="font-weight-bold mb-4">Money Return</h2>

                          <p>I bought a gadget that didn't meet my expectations. I returned it, and the process was simple and fast. I got my money back in less than a week.</p>
                          <div className={`${Styles.user_comment_proflie}  mt-5`}>
                              <img src="./images/profile_img2.jpeg" alt="" />
                              <p>Joseph Rodriguez</p>
                          </div>
                      </div>
                  </div>
                </div>
                <div className={`${Styles.support_sect} carousel-item `}>
                  <div className={`${Styles.support_sect_holder} d-flex`}>
                      <div className="w-100 pr-md-4">
                          <h2 className="font-weight-bold mb-4">Online Support</h2>

                          <p>I recently had an issue with a product I purchased on this site, but the customer support team was very helpful in resolving the problem. They were quick to respond to my inquiry and ensured I was satisfied with my purchase.</p>
                          <div className={`${Styles.user_comment_proflie}  mt-5`}>
                              <img src="./images/profile_img1.jpeg" alt="" />
                              <p>Judith Black</p>
                          </div>
                      </div>
                      <div className="w-100 pl-md-4">
                          <h2 className="font-weight-bold mb-4">Money Return</h2>

                          <p>I bought a gadget that didn't meet my expectations. I returned it, and the process was simple and fast. I got my money back in less than a week.</p>
                          <div className={`${Styles.user_comment_proflie}  mt-5`}>
                              <img src="./images/profile_img2.jpeg" alt="" />
                              <p>Joseph Rodriguez</p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </button>
          </div> 
      </section>

    </main>
    </>
  )
}
