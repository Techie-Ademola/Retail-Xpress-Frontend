import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/product-details.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        <section class={`${Styles.grocery_shop_container} py-5`} >
            <div class={`${Styles.product_details_hero_wrap}`} >
                <div class="row">
                    <div class="col-lg-8">
                        <div class={`${Styles.product_category_wrap}`} >
                            <div class="row">
                                <div class="col-md-6">
                                    <div class={`${Styles.product_cat_img}`} >
                                        <img src="./images/purchase_sect1.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class={`${Styles.product_cat_content} mt-5 mt-md-0`} >
                                        <h3 class="text-primary"><i class="bi bi-heart" style={{marginLeft: "92%"}}></i></h3>
                                        <p class="mt-3"><span><i class="bi-dot"></i> Category Name</span></p>
                                        <h3 class="mt-4">Tree Top (Fruit + Water)</h3>
                                        <h6 class="mt-3">Brand: Brand Name</h6>
                                        <h1 class="text-danger font-weight-bold">N1200 <small class="text-secondary"><del>N1500</del></small></h1>
                                        <div class={`${Styles.counter}`} >
                                            <button type="button">-</button>
                                            <span id="count_el">1</span>
                                            <button type="button">+</button>
                                        </div>
                                        <div class={`${Styles.checkout_wrap} mt-5`} >
                                            <a href="" class={`${Styles.product_checkout}`} >Checkout</a>
                                            <a href="" class={`${Styles.add_cart}`} >Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class={`${Styles.product_category_wrap} h-100`} >
                            <div class={`${Styles.product_cat_content} px-3`} >
                                <p><span><i class="bi-dot"></i> Description</span></p>
                                <p class="mt-4">
                                    <small class="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.</small>
                                </p>
                                <div class={`${Styles.product_location} mt-5`} >
                                    <h6>CHOOSE YOUR LOCATION</h6>

                                    <div class={`${Styles.input_group} input-group mb-3 mt-3`} >
                                        <i class="bi bi-chevron-down"></i>
                                        <select class="custom-select" id="inputGroupSelect04">
                                          <option selected>Lagos</option>
                                          <option value="1">Ikorodu</option>
                                          <option value="2">Ikeja</option>
                                          <option value="3">Ajejunle</option>
                                        </select>
                                    </div>
                                    <div class={`${Styles.input_group} input-group mb-3`} >
                                        <i class="bi bi-chevron-down"></i>
                                        <select class="custom-select" id="inputGroupSelect04">
                                          <option selected>Lekki Ajah</option>
                                          <option value="1">Ikorodu</option>
                                          <option value="2">Ikeja</option>
                                          <option value="3">Ajejunle</option>
                                        </select>
                                    </div>
                                    <div class={`${Styles.input_group} input-group mb-3`} >
                                        <i class="bi bi-chevron-down"></i>
                                        <select class="custom-select" id="inputGroupSelect04">
                                          <option selected>Pick up Store</option>
                                          <option value="1">Ikorodu</option>
                                          <option value="2">Ikeja</option>
                                          <option value="3">Ajejunle</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <section class={`${Styles.grocery_shop_container} py-5`} >
            <div class={`${Styles.flash_container}`} >
                <div class={`${Styles.similar_products}`} >
                    <div class={`${Styles.flash_head2}`} >
                        <h3 class="text-dark">Similar Products</h3>
                    </div>
                </div>

                <div class={`${Styles.flash_carousel_body} py-3`} >
                    <div class={`${Styles.flash_carousel_row}`} >
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Poland Spring</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img1.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img2.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Golden Morn</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/flash-img3.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
                                </div>
                            </div>
                        </div>
                        <div class={`${Styles.flash_carousel}`} >
                            <div class={`${Styles.flash_cart_wrap}`} >
                                <span><i class="bi bi-heart"></i></span>
                                <span><i class="bi bi-cart3"></i></span>
                            </div>
                            <div class={`${Styles.flash_carousel_img}`} >
                                <img src="./images/hero-slider1.png" alt="" />
                            </div>
                            <div class={`${Styles.flash_carousel_caption}`} >
                                <p class={`${Styles.category_name} m-0 mt-2 font-weight-bold`} >Category Name</p>
                                <div class={`${Styles.flash_price}`} >
                                    <p class={`${Styles.category_title} m-1 font-weight-bold`} >Nutella</p>
                                    <p class={`${Styles.category_new_price} m-1 font-weight-bold`} >₦400</p>
                                    <p class={`${Styles.category_prev_price} m-1`} >₦450</p>
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
