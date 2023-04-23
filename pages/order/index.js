import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/order.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        <section className={`${Styles.grocery_shop_container} py-5`} >
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className={`${Styles.order_nav_item} nav-item `}  role="presentation">
                  <button className="nav-link pb-3 active" id="pills-open-orders" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">OPEN ORDERS (<span>4</span>)
                    <div className={`ind1`} ></div>
                </button>
                </li>
                <li className={`${Styles.order_nav_item} nav-item `}  role="presentation">
                  <button className="nav-link pb-3" id="pills-closed-orders" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">CLOSED ORDERS
                    <div className={`ind2`} ></div>
                  </button>
                </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
                <div className={`${Styles.order_table_container} tab-pane fade show active `}  id="pills-home" role="tabpanel" aria-labelledby="pills-open-orders">
                    <div className={`${Styles.order_table_wrap}`} >
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Order number</th>
                                <th>Store</th>
                                <th>Date created</th>
                                <th>Current Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img1.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} mt-3`} ><span><i className="bi-dot"></i> Awaiting Delivery</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img2.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} mt-3`} ><span><i className="bi-dot"></i> Awaiting Pickup</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img3.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} ${Styles.success} mt-3`} ><span><i className="bi-dot"></i> Completed</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img2.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} ${Styles.success} mt-3`} ><span><i className="bi-dot"></i> Completed</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img1.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} mt-3`} ><span><i className="bi-dot"></i> Awaiting Delivery</span></p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={`${Styles.order_table_container} tab-pane fade`} id="pills-profile" role="tabpanel" aria-labelledby="pills-closed-orders">
                    <div className={`${Styles.order_table_wrap}`} >
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Order number</th>
                                <th>Store</th>
                                <th>Date created</th>
                                <th>Current Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img1.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} ${Styles.cancelled} mt-3`} ><span><i className="bi-dot"></i> Cancelled</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img2.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} ${Styles.cancelled} mt-3`} ><span><i className="bi-dot"></i> Cancelled</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img3.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} ${Styles.cancelled} mt-3`} ><span><i className="bi-dot"></i> Cancelled</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img2.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} ${Styles.cancelled} mt-3`} ><span><i className="bi-dot"></i> Cancelled</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className={`${Styles.order_product_wrap}`} >
                                        <div className={`${Styles.order_product_img}`} >
                                            <img src="./images/flash-img1.png" alt="" />
                                        </div>
                                        <div className={`${Styles.order_product_price} text-left`} >
                                            <p className="m-0 mb-1">Golden Morn</p>
                                            <h5 className="m-0 mt-1">400</h5>
                                        </div>
                                    </div>
                                </td>
                                <td>#12345678</td>
                                <td>Delight Stores</td>
                                <td>09-12-22</td>                            
                                <td>
                                    <p className={`${Styles.order_status} ${Styles.cancelled} mt-3`} ><span><i className="bi-dot"></i> Failed Delivery</span></p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    
        <section className={`${Styles.grocery_shop_container} py-5`} >
            <div className={`${Styles.flash_container}`} >
                <div className={`${Styles.similar_products}`} >
                    <div className={`${Styles.flash_head2}`} >
                        <h3 className="text-dark">Recently Viewed</h3>
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
                                <p className={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div className={`${Styles.flash_price}`} >
                                    <p className={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
                                    <p className={`${Styles.category_new_price} m-1 font-weight-bold `} >₦400</p>
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
