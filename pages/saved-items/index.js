import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/saved-items.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        {/* <!-- Saved Items Section --> */}

        <section className={`${Styles.grocery_shop_container} pt-5 pb-md-5`} >
            <h4 className="mb-4">SAVED ITEMS</h4>
            <div className={`${Styles.order_table_container}`} >
                <div className={`${Styles.order_table_wrap}`} >
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Order number</th>
                                <th>Store</th>
                                <th>Date created</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className={`${Styles.order_product_wrap}`} >
                                    <div className={`${Styles.order_product_img}`} >
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.order_product_price}  text-left`} >
                                        <p className="m-0 mb-1">Golden Morn</p>
                                        <h5 className="m-0 mt-1">400</h5>
                                    </div>
                                </div>
                            </td>
                            <td>#12345678</td>
                            <td>Delight Stores</td>
                            <td>09-12-22</td>                            
                            <td>
                                <button className={`${Styles.saved_addcart} btn mx-1`} >Add to Cart</button>
                                <button className={`${Styles.saved_removecart} btn mx-1`} >Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={`${Styles.order_product_wrap}`} >
                                    <div className={`${Styles.order_product_img}`} >
                                        <img src="./images/flash-img2.png" alt="" />
                                    </div>
                                    <div className={`${Styles.order_product_price}  text-left`} >
                                        <p className="m-0 mb-1">Golden Morn</p>
                                        <h5 className="m-0 mt-1">400</h5>
                                    </div>
                                </div>
                            </td>
                            <td>#12345678</td>
                            <td>Delight Stores</td>
                            <td>09-12-22</td>                            
                            <td>
                                <button className={`${Styles.saved_addcart} btn mx-1`} >Add to Cart</button>
                                <button className={`${Styles.saved_removecart} btn mx-1`} >Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={`${Styles.order_product_wrap}`} >
                                    <div className={`${Styles.order_product_img}`} >
                                        <img src="./images/flash-img3.png" alt="" />
                                    </div>
                                    <div className={`${Styles.order_product_price}  text-left`} >
                                        <p className="m-0 mb-1">Golden Morn</p>
                                        <h5 className="m-0 mt-1">400</h5>
                                    </div>
                                </div>
                            </td>
                            <td>#12345678</td>
                            <td>Delight Stores</td>
                            <td>09-12-22</td>                            
                            <td>
                                <button className={`${Styles.saved_addcart} btn mx-1`} >Add to Cart</button>
                                <button className={`${Styles.saved_removecart} btn mx-1`} >Remove</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={`${Styles.order_product_wrap}`} >
                                    <div className={`${Styles.order_product_img}`} >
                                        <img src="./images/flash-img1.png" alt="" />
                                    </div>
                                    <div className={`${Styles.order_product_price}  text-left`} >
                                        <p className="m-0 mb-1">Golden Morn</p>
                                        <h5 className="m-0 mt-1">400</h5>
                                    </div>
                                </div>
                            </td>
                            <td>#12345678</td>
                            <td>Delight Stores</td>
                            <td>09-12-22</td>                            
                            <td>
                                <button className={`${Styles.saved_addcart} btn mx-1`} >Add to Cart</button>
                                <button className={`${Styles.saved_removecart} btn mx-1`} >Remove</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    
        <section className={`${Styles.grocery_shop_container}  py-5`} >
            <div className={`${Styles.flash_container}`} >
                <div className={`${Styles.similar_products}`} >
                    <div className={`${Styles.flash_head2}`} >
                        <h3 className="text-dark font-weight-bold">Recently Viewed</h3>
                    </div>
                </div>

                <div className={`${Styles.flash_carousel_body} py-3 `} >
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold `} >Category Name</p>
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
