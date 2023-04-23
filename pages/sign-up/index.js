import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/sign-up.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        <main className={`${Styles.wrapper_container}`} >
            <div className={`${Styles.login_pg_wrapper}`} >
                <div className={`${Styles.login_pg_nav} mt-3`} >
                    <div className={`${Styles.login_logo}`} >
                        <img className="img-fluid img-responsive" src="./images/logo_1.png" alt="" />
                    </div>
                    <div className={`${Styles.login_create_account}`} >
                        <a href="" className="mr-0 mr-sm-3 mr-md-0">Login</a>
                    </div>
                </div>
                <div className="row" style={{marginTop: '8em'}}>
                    <div className="col-lg-6">
                        <div className={`${Styles.login_form_wrapper}`} >
                            <form action="" method="get">
                                <h4>Create Account</h4>
                                <div className={`${Styles.user_box}`} >
                                    <div className={`${Styles.input_group} input-group mb-3 mt-3`} >
                                        <i className="bi bi-chevron-down"></i>
                                        <select className="custom-select" id="inputGroupSelect04">
                                        <option selected>Lagos</option>
                                        <option value="1">Ikorodu</option>
                                        <option value="2">Ikeja</option>
                                        <option value="3">Ajejunle</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={`${Styles.user_box}`} >
                                    <i className="bi bi-person-lines-fill"></i>
                                    <input type="text" required placeholder="Full Name" />
                                </div>
                                <div className={`${Styles.user_box}`} >
                                    <i className="bi bi-envelope-fill"></i>
                                    <input type="email" required placeholder="Email Address" />
                                </div>
                                <div className={`${Styles.user_box}`} >
                                    <i className="bi bi-pencil-square"></i>
                                    <input type="password" required placeholder="Password" />
                                </div>
                                <div className={`${Styles.user_box}`} >
                                    <i className="bi bi-pencil-square"></i>
                                    <input type="password" required placeholder="Confirm Password" />
                                </div>
                                <div className={`${Styles.user_box}`} >
                                    <input type="submit" value="Sign up" />
                                </div>
                            </form>
                            <p className="text-muted">By signing up, you agree to our <a href=""><b>Terms</b></a>, <a href=""><b>Data Policy</b></a> and <a href=""><b>Cookies Policy</b></a>.</p>
                        </div>
                    </div>
                    <div className={`${Styles.signup_our_offers} col-lg-6 mt-5 mt-lg-0`} >
                        <div className={`${Styles.our_offers_container}`} >
                            <div className={`${Styles.offers_wrap}`} >
                                <div className={`${Styles.offer_icon}`} >
                                    <i className="bi bi-headset"></i>
                                </div>
                                <div className={`${Styles.offer_text}`} >
                                    <h5>Online Support 24/7</h5>
                                    <p>Get round-the-clock support from our team</p>
                                </div>
                            </div>
                            <div className={`${Styles.offers_wrap}`} >
                                <div className={`${Styles.offer_icon}`} >
                                    <i className="bi bi-headset"></i>
                                </div>
                                <div className={`${Styles.offer_text}`} >
                                    <h5>Massive Discount</h5>
                                    <p>Up to 50% discount on all products</p>
                                </div>
                            </div>
                            <div className={`${Styles.offers_wrap}`} >
                                <div className={`${Styles.offer_icon}`} >
                                    <i className="bi bi-headset"></i>
                                </div>
                                <div className={`${Styles.offer_text}`} >
                                    <h5>Money Return</h5>
                                    <p>Money back guarantee in 7 days</p>
                                </div>
                            </div>
                            <div className={`${Styles.offers_wrap}`} >
                                <div className={`${Styles.offer_icon}`} >
                                    <i className="bi bi-headset"></i>
                                </div>
                                <div className={`${Styles.offer_text}`} >
                                    <h5>Secure Payment System</h5>
                                    <p>Our payment system keeps your data protected</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.login_footer_terms}`} >
                    <p><a className="text-muted" href="">Privacy Policy</a></p>
                    <p><a className="text-muted" href="">Terms and Conditions</a></p>
                </div>
            </div>
        </main>

    </>
  )
}
