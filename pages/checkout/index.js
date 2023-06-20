import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/checkout.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        <section className={`${Styles.checkout_sect_container} py-5`}>
            <div className={`${Styles.product_details_hero_wrap}`} >
                <div className="row">
                    <div className="col-lg-8">
                        <h5 className="font-weight-bold mb-4">CHECKOUT</h5>
                        <p className={`${Styles.checkout_number} text-muted m-0 mt-5`} >01</p>
                        <h5 className="font-weight-bold">Personal details</h5>
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="text" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="text" placeholder="Last name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="tel" placeholder="Phone number" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className={`${Styles.checkout_number} text-muted m-0 mt-5`} >02</p>
                        <h5 className="font-weight-bold">Delivery details</h5>
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-10">
                                <h5 className="font-weight-bold">Delivery Address</h5>
                                <div className="row">
                                    <div className="col-12">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="text" placeholder="First name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="tel" placeholder="Phone number" />
                                        </div>
                                    </div>
                                </div>

                                <h5 className="font-weight-bold">Delivery Method</h5>
                                <div className="row">
                                    <div className="col-lg-6 my-3">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <div className={`${Styles.delivery_method_card} card py-4 px-2`} >
                                                <div className="row">
                                                    <div className={`${Styles.delivery_method} col-2 `} >
                                                        <i className="bi bi-cloud-fog"></i>
                                                    </div>
                                                    <div className={`${Styles.delivery_method} col-6 `} >
                                                        <div>
                                                            <p className="m-0 font-weight-bold text-dark">Door Delivery</p>
                                                            <p className="m-0 text-muted"><small>Delivery: <span>Today</span></small></p>
                                                        </div>
                                                    </div>
                                                    <div className={`${Styles.delivery_method} col-4 `} >
                                                        <p className="m-0 text-muted">N700 <input type="radio" name="" id="" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 my-3">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <div className={`${Styles.delivery_method_card} card py-4 px-2`} >
                                                <div className="row">
                                                    <div className={`${Styles.delivery_method} col-2 `} >
                                                        <i className="bi bi-cloud-fog"></i>
                                                    </div>
                                                    <div className={`${Styles.delivery_method} col-6 `} >
                                                        <div>
                                                            <p className="m-0 font-weight-bold text-dark">Collect in Store</p>
                                                            <p className="m-0 text-muted"><small>Delivery: <span>Today</span></small></p>
                                                        </div>
                                                    </div>
                                                    <div className={`${Styles.delivery_method} col-4 `} >
                                                        <p className="m-0 text-muted">Free <input type="radio" name="" id="" /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <p className={`${Styles.checkout_number} text-muted m-0 mt-5`} >03</p>
                        <h5 className="font-weight-bold">Payment Method</h5>
                        <div className="row">
                            <div className="col-lg-2">
                            </div>
                            <div className="col-lg-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className={`${Styles.user_box}`} >
                                            <div className={`${Styles.input_group} input-group mb-3 mt-3`} >
                                                <i className="bi bi-chevron-down"></i>
                                                <select className="custom-select font-weight-bold" id="inputGroupSelect04">
                                                  <option selected>Paypal</option>
                                                  <option value="1">Bitcoin</option>
                                                  <option value="2">Tron</option>
                                                  <option value="3">Ethereum</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${Styles.user_box}`} >
                                            <div className={`${Styles.input_group2} input-group mb-3 mt-3`} >
                                                <i className="bi bi-chevron-down"></i>
                                                <select className="custom-select font-weight-bold" id="inputGroupSelect04">
                                                  <option selected>Credit or debit card</option>
                                                  <option value="1">Bank Transfer</option>
                                                  <option value="2">USSD Transfer</option>
                                                  <option value="3">Deposit</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className={`${Styles.personal_detail_input}`} >
                                            <input className="form-control py-4 my-3" type="number" placeholder="Card number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className={`${Styles.personal_detail_input}`} >
                                                    <input className="form-control py-4 my-3" type="number" placeholder="Expiry date" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className={`${Styles.personal_detail_input}`} >
                                                    <input className="form-control py-4 my-3" type="number" placeholder="CVV" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-5 mt-lg-0">
                        <h5 className="font-weight-bold mb-4">ORDER SUMMARY</h5>
                        <div className={`${Styles.order_sum_wrap}`} >
                            <div className={`${Styles.order_sum_container} mb-5`} >
                                <div className={`${Styles.order_sum_img}`} >
                                    <img src="./images/flash-img2.png" alt="" />
                                </div>
                                <div className={`${Styles.order_sum_content}`} >
                                    <h5 className=" mt-3">Golden Morn</h5>
                                    <div className={`${Styles.count_sect}`} >
                                        <div className={`${Styles.count_wrap}`} >
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <div className={`${Styles.count_total}`} >
                                            <h5>N400</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                            <div className={`${Styles.order_sum_container} mb-5`} >
                                <div className={`${Styles.order_sum_img}`} >
                                    <img src="./images/flash-img1.png" alt="" />
                                </div>
                                <div className={`${Styles.order_sum_content}`} >
                                    <h5 className=" mt-3">Nutella</h5>
                                    <div className={`${Styles.count_sect}`} >
                                        <div className={`${Styles.count_wrap}`} >
                                            <button>-</button>
                                            <span>1</span>
                                            <button>+</button>
                                        </div>
                                        <div className={`${Styles.count_total}`} >
                                            <h5>N400</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${Styles.sub_total_wrap}`} >
                                <div className={`${Styles.sub_total} mb-2`} >
                                    <h6 className="text-muted">Subtotal</h6>
                                    <h5>N800</h5>
                                </div>
                                <div className={`${Styles.sub_total} mb-4`} >
                                    <h6 className="text-muted">Delivery Cost</h6>
                                    <h5>+ N20</h5>
                                </div>
                                <div className={`${Styles.sub_total} mb-2`} >
                                    <h6 className="text-muted">Total</h6>
                                    <h5>N1000</h5>
                                </div>
                                <div className={`${Styles.sub_total_btn}`} >
                                    <Link href="" className="btn">Checkout</Link>
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
