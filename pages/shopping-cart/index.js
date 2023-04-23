import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/shopping-cart.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        {/* <!-- Saved Items Section --> */}

        <section className={`${Styles.grocery_shop_container} pt-5 pb-md-5`} >
            <h4 className="mb-4">Your Shopping Cart</h4>
            <div className={`${Styles.order_table_container}`} >
                <div className={`${Styles.order_table_wrap}`} >
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className={`${Styles.order_product_wrap}`} >
                                    <div className={`${Styles.order_product_img}`} >
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.order_product_price} text-left`} >
                                        <h5 className="m-0 mb-1">Golden Morn</h5>
                                        <h5 className="m-0 mt-1">400</h5>
                                        <h6 className="m-0 mt-1"><del className="font-weight-normal" >450</del></h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={`${Styles.count_wrap}`} >
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </td>
                            <td>
                                <h5>N400</h5>
                            </td>                           
                            <td>
                                <button className={`${Styles.saved_removecart} btn mx-1`} >Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={`${Styles.order_product_wrap}`} >
                                    <div className={`${Styles.order_product_img}`} >
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.order_product_price} text-left`} >
                                        <h5 className="m-0 mb-1">Nutella</h5>
                                        <h5 className="m-0 mt-1">400</h5>
                                        <h6 className="m-0 mt-1"><del className="font-weight-normal" >450</del></h6>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={`${Styles.count_wrap}`} >
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </td>
                            <td>
                                <h5>N400</h5>
                            </td>                           
                            <td>
                                <button className={`${Styles.saved_removecart} btn mx-1`} >Remove</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={`${Styles.cartpg_checkout_wrap}`} >
                <div className={`${Styles.cartpg_checkout}`} >
                    <h5 className="font-weight-bold">Subtotal <span className="float-right font-weight-normal">N800</span></h5>
                    <div className={`${Styles.cartpg_button}`} >
                        <button className="btn d-block w-100">Checkout Now</button>
                    </div>
                </div>
            </div>
        </section>
    
        <section className={`${Styles.grocery_shop_container} py-5`} >
            <div className={`${Styles.flash_container}`} >
                <div className={`${Styles.similar_products}`} >
                    <div className={`${Styles.flash_head2}`} >
                        <h3 className="text-dark font-weight-bold">Recently Viewed</h3>
                    </div>
                </div>

                <div className={`${Styles.flash_carousel_body} py-3`} >
                    <div className={`${Styles.flash_carousel_row}`} >
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Poland Spring</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p className={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.flash_carousel}`} >
                            <div className={`${Styles.flash_cart_wrap}`} >
                                <span><i className="bi bi-heart"></i></span>
                                <span><i className="bi bi-cart3"></i></span>
                            </div>
                            <div className={`${Styles.flash_carousel_img}`} >
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div className={`${Styles.flash_carousel_caption}`} >
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
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
