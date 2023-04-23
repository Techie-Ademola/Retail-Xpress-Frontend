import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/flash-sales.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        <section className={`${Styles.flash_hero_wrapper} mt-5`}>
            <div className={`${Styles.flash_hero_container}`} >
                <h1 className="text-white font-weight-bold">FLASH SALES</h1>
                <p className="text-white">Everyday deal you don't want to miss</p>
            </div>
        </section>

        <section className={`${Styles.top_cat_wrapper}  py-5`} >
            <div className={`${Styles.top_cat_container}`} >
                <div className={`${Styles.top_cat_head}`} >
                    <h2 className="text-dark text-center mt-4 mb-0">Flash Sales Categories</h2>
                </div>

                <div className={`${Styles.top_cat_body} py-3  mt-4`}>
                    <div className={`${Styles.top_cat_row}`} >
                        <div className={`${Styles.top_categories}`} >
                            <a href="">
                                <div className={`${Styles.top_categories_img}`} >
                                    <img className="w-100" src="./images/phone-img.png" alt="" />
                                </div>
                                <h4>Phones</h4>
                            </a>
                        </div>
                        <div className={`${Styles.top_categories}`} >
                            <a href="">
                                <div className={`${Styles.top_categories_img}`} >
                                    <img className="w-100" src="./images/phone-img.png" alt="" />
                                </div>
                                <h4>Groceries</h4>
                            </a>
                        </div>
                        <div className={`${Styles.top_categories}`} >
                            <a href="">
                                <div className={`${Styles.top_categories_img}`} >
                                    <img className="w-100" src="./images/phone-img.png" alt="" />
                                </div>
                                <h4>Fashion</h4>
                            </a>
                        </div>
                        <div className={`${Styles.top_categories}`} >
                            <a href="">
                                <div className={`${Styles.top_categories_img}`} >
                                    <img className="w-100" src="./images/phone-img.png" alt="" />
                                </div>
                                <h4>Appliances</h4>
                            </a>
                        </div>
                        <div className={`${Styles.top_categories}`} >
                            <a href="">
                                <div className={`${Styles.top_categories_img}`} >
                                    <img className="w-100" src="./images/phone-img.png" alt="" />
                                </div>
                                <h4>Electronics</h4>
                            </a>
                        </div>
                        <div className={`${Styles.top_categories}`} >
                            <a href="">
                                <div className={`${Styles.top_categories_img}`} >
                                    <img className="w-100" src="./images/phone-img.png" alt="" />
                                </div>
                                <h4>Gadgets</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={`${Styles.grocery_shop_container} py-5`} >
            <div className="row">
                <div className="col-lg-3 d-none d-lg-block">
                    <aside className={`${Styles.aside_wrapper}`} >
                        <h5 className="font-weight-bold"><i class="bi bi-filter"></i> FILTERS</h5>
                        <div className={`${Styles.aside_wrap}`}>
                            <p className="m-0 mt-5 font-weight-bold">Sort by</p>
                            <select className={`${Styles.aside_select}`}>
                                <option selected value="">Popular</option>
                                <option>Most sorted</option>
                                <option>Newest product</option>
                                <option>Lowest price</option>
                            </select> 
                        </div> 
                        <div className={`${Styles.aside_wrap}`}>
                            <p className="m-0 mt-5 font-weight-bold">Category</p>
                            <select className={`${Styles.aside_select}`}>
                                <option selected value="">Popular</option>
                                <option>Most sorted</option>
                                <option>Newest product</option>
                                <option>Lowest price</option>
                            </select> 
                        </div>        
                        <div className={`${Styles.aside_wrap}`}>
                            <p className="m-0 mt-5 font-weight-bold">Price</p>
                            <div className={`${Styles.flexed} d-flex`} >
                                <span className="d-block rounded">minimum</span>
                                <span className="d-block rounded mx-3">maximum</span>
                            </div> 
                        </div>
                        <div className={`${Styles.aside_wrap}`}>
                            <p className="m-0 mt-5 font-weight-bold">Brands</p>
                            <p>
                                <input type="checkbox" name="nestle" id="nestle" />&nbsp;&nbsp;
                                <label for="nestle">Nestle</label>
                            </p>
                            <p>
                                <input type="checkbox" name="cadbury" id="cadbury" />&nbsp;&nbsp;
                                <label for="cadbury">Cadbury</label>
                            </p>
                            <p>
                                <input type="checkbox" name="cway" id="cway" />&nbsp;&nbsp;
                                <label for="cway">Cway</label>
                            </p>
                            <p>
                                <input type="checkbox" name="nestle1" id="nestle1" />&nbsp;&nbsp;
                                <label for="nestle1">Nestle</label>
                            </p>
                            <p>
                                <input type="checkbox" name="nestle2" id="nestle2" />&nbsp;&nbsp;
                                <label for="nestle2">Nestle</label>
                            </p>
                        </div>
                        <div className={`${Styles.aside_wrap}`}>
                            <p>Tags</p>
                            <p>
                                <input type="checkbox" name="discount" id="discount" />&nbsp;&nbsp;
                                <label for="discount">#50% off</label>
                            </p>
                            <p>
                                <input type="checkbox" name="discount" id="discount" />&nbsp;&nbsp;
                                <label for="discount">#Free delivery</label>
                            </p>
                            <p>
                                <input type="checkbox" name="discount" id="discount" />&nbsp;&nbsp;
                                <label for="discount">#20% off</label>
                            </p>
                        </div>                                  
                    </aside>
                </div>
                <div className="col-lg-9">
                    <div className={`${Styles.cat_timer_wrap}`} >
                        <ul>
                            <li>Time left: <span>00:30:24</span></li>
                            <li>12 Dec, 10:53am</li>
                            <li>12 Dec, 10:53am</li>
                            <li>12 Dec, 10:53am</li>
                            <li>12 Dec, 10:53am</li>
                            <li>12 Dec, 10:53am</li>
                            <li>12 Dec, 10:53am</li>
                        </ul>
                    </div>
                    <div className={`${Styles.flash_container}`}>
        
                        <div className={`${Styles.flash_carousel_body} py-3  mt-3`}>
                            <div className={`${Styles.flash_carousel_row}`} >
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Poland Spring</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className={`${Styles.flash_carousel_body} py-3  mt-3 d-none d-md-block`}>
                            <div className={`${Styles.flash_carousel_row}`} >
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Poland Spring</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className={`${Styles.flash_carousel_body} py-3  mt-3`}>
                            <div className={`${Styles.flash_carousel_row}`} >
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Poland Spring</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className={`${Styles.flash_carousel_body} py-3  mt-3 d-none d-md-block`}>
                            <div className={`${Styles.flash_carousel_row}`} >
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Poland Spring</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${Styles.flash_carousel}`}>
                                    <div className={`${Styles.flash_cart_wrap}`} >
                                        <span><i className="bi bi-heart"></i></span>
                                        <span><i className="bi bi-cart3"></i></span>
                                    </div>
                                    <div className={`${Styles.flash_carousel_img}`}>
                                        <img src="./images/hero-slider1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.flash_carousel_caption}`} >
                                        <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                        <div className={`${Styles.flash_price}`} >
                                            <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                            <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                            <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    
        <section className={`${Styles.grocery_shop_container} py-5`} >
            <div className={`${Styles.flash_container}`}>
                <div className={`${Styles.flash_container_head}`} >
                    <div className={`${Styles.flash_head2}`} >
                        <h3>Recently Viewed</h3>
                    </div>
                </div>

                <div className={`${Styles.flash_carousel_body} py-3  mt-4`}>
                    <div className={`${Styles.flash_carousel_row}`} >
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Poland Spring</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`}>
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`}>
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `}>Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
