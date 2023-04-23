import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/about-us.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        <section className={`${Styles.about_sect_container} py-5 mt-lg-4`} >
            <div className={`${Styles.about_pg_wrap}`} >
                <div className="row mb-5 pb-3">
                    <div className="col-md-6 my-lg-4 my-md-0">
                        <div className={`${Styles.about_hero_content}`} >
                            <h1>Market your product on <span>Retail Xpress</span></h1>
                            <p className="mt-4">Buy, sell, monitor your business performance, and gain access to insights designed to help grow your business.</p>
                            <a className={`${Styles.create_acct_btn} btn mt-lg-5 `}  href="">Create Account</a>
                        </div>
                    </div>
                    <div className="col-md-6 my-4 my-md-0">
                        <div className={`${Styles.about_hero_img} h-100`} >
                            <img className="img-fluid img-responsive w-100 h-100" src="./images/about_img1.png" alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="row mb-lg-5 pb-3">
                    <div className="col-md-6 my-4 my-md-0">
                        <div className={`${Styles.about_hero_img} h-100`} >
                            <img className="img-fluid img-responsive w-100 h-100" src="./images/about_img2.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 my-4 my-md-0">
                        <div className={`${Styles.about_hero_content2}`} >
                            <h1>Up to <span>50% discount</span> on all your favorite products</h1>
                            <p className="mt-4">We love discounts, who doesn't? Shopping for the best deals can be time-consuming, so we've made it easy for you to find everything you need in one place. From household items to fashion to the latest tech products, we are committed to providing you with the lowest prices possible on all your favorite products.</p>
                            <div className={`${Styles.service_wrap}  d-flex mt-4`} >
                                <div className={`${Styles.service} w-100`} >
                                    <h2 className="m-0 font-weight-bold">24/7</h2>
                                    <p className="m-0">Service</p>
                                </div>
                                <div className={`${Styles.service} w-100`} >
                                    <h2 className="m-0 font-weight-bold">99.9%</h2>
                                    <p className="m-0">Online Payment</p>
                                </div>
                                <div className={`${Styles.service} w-100`} >
                                    <h2 className="m-0 font-weight-bold">100k+</h2>
                                    <p className="m-0">Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className={`${Styles.about_sect_container} ${Styles.colored} py-lg-5 mt-lg-4`} >
            <div className={`${Styles.different_sect} pt-5`} >
                <h1 className="font-weight-bold">What Makes us Different</h1>
                <div className="row mt-5">
                    <div className="col-lg-7">
                        <p className="text-muted">Retail Xpress is Africa’s first retail SaaS platform for brands owners and their customers. Our platform is powered by technology to provide it's users with a smooth and seamless shopping experience. Our goal is to provide our consumers with unbeatable prices for their everyday items at their convenience while helping our sellers reach deeper markets and grow their businesses.</p>
                    </div>
                </div>
            </div>

            <div className={`${Styles.different_sect} py-5`} >
                <div className="row my-5">
                    <div className="col-lg-6">
                        <h2 className="font-weight-bold">Need help?</h2>
                        <p className="text-muted">Are you having trouble placing an order or navigating our website? <br /> Our team is here to assist you every step of the way, from selecting the perfect product to completing your purchase. Reach out to our customer service team by filling out the contact form or giving us a call.</p>
                        <div>
                            <a className={`${Styles.create_acct_btn} btn mt-lg-5 `}  href="">Contact us</a>
                        </div>
                    </div>
                    <div className="col-lg-6 position-relative">
                        <div className={`${Styles.dot_bg}`} ></div>
                        <div className={`${Styles.testimonial_wrap} my-5 mt-lg-0`} >
                            <h4 className="px-lg-5 px-3 pb-4">Testimonial</h4>
                            <p className="px-lg-5 px-3">
                                <i className="bi bi-quote"></i>
                                I recently had an issue with a product I purchased on this site, but the customer support team was very helpful in resolving the problem. They were quick to respond to my inquiry and ensured I was satisfied with my purchase.
                            </p>
                            <div className={`${Styles.testimonial_wrap_footer} mt-5`} >
                                <div className={`${Styles.testimonial_wrap_img}`} >
                                    <img src="./images/testimonial_img1.jpeg" alt="" />
                                </div>
                                <div className={`${Styles.testimonial_wrap_content} ml-4 pl-5`} >
                                    <p className="text-white m-0 ml-2">Judith Black <small>CEO at Workcation</small></p>
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
