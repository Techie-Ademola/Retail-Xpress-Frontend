import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Styles from '@/Styles/Footer.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    // <footer className={`${Styles.footer}`}>
    //     <p>This is my lovely footer</p>
    //     <p>Copywright 2023</p>
    // </footer>


    <footer className={`${Styles.grocery_shop_container} ${Styles.footer}`}>
        <div className={`${Styles.foot_container}`}>
            <div className="row pt-5">
                <div className="col-12 col-md-5">
                    <h4 className={`${Styles.title}`}>CATEGORIES</h4>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li><a href="">Beverages</a></li>
                                <li><a href="">Table Water</a></li>
                                <li><a href="">Snacks</a></li>
                                <li><a href="">Perfumes</a></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><a href="">Computers</a></li>
                                <li><a href="">Phones</a></li>
                                <li><a href="">Electronics</a></li>
                                <li><a href="">Fashion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-2">
                    <h4 className={`${Styles.title} mt-4 mt-md-0`}>COMPANY</h4>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Partners</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md-2">
                    <h4 className={`${Styles.title} mt-4 mt-md-0`}>LEGAL</h4>
                    <ul>
                        <li><a href="">Claim </a></li>
                        <li><a href="">Privacy</a></li>
                        <li><a href="">Terms</a></li>
                    </ul>
                </div>
                <div className="col-12 col-md-3">
                    <h4 className={`${Styles.title} pl-md-5  mt-4 mt-md-0`} >LANGUAGE & CURRENCY</h4>
                    <ul className="mt-4 d-flex d-md-block ml-md-auto" style={{width: 'fit-content', maxWidth: '90%'}}>
                        <li className="px-2 px-md-0">
                            <select className={`${Styles.footer_lang_select} my-2`}>
                                <option selected value="">English</option>
                                <option>Francais</option>
                                <option>German</option>
                                <option>Chinese</option>
                                <option>Hindi</option>
                                <option>Francais</option>
                            </select>
                        </li>
                        <li className="px-2 px-md-0">
                            <select className={`${Styles.footer_lang_select} my-2`}>
                                <option selected value="">USD</option>
                                <option>NGN</option>
                                <option>EUR</option>
                                <option>TRON</option>
                                <option>ETH</option>
                                <option>BITCOIN</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`${Styles.newsletter_wrap} row  py-4`} >
                <div className={`${Styles.letter_content} col-md-6`} >
                    <p className="m-2 text-muted font-weight-bold" style={{textTransform: 'uppercase'}}>Subscribe to our newsletter</p>
                    <p className="m-2 mt-3 text-light">The latest news, articles, and resources, sent to your inbox weekly.</p>
                </div>
                <div className={`${Styles.letter_submit} col-md-6  mt-4 mt-md-0`}>
                    <form action="" className="d-lg-flex ml-md-auto">
                        <input className="mr-md-4" type="email" placeholder="Enter your email" required />
                        <button className="btn " type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="row py-3 pt-4">
                <div className="col-md-6">
                    <p className="m-2 text-muted">© 2020 Workflow, Inc. All rights reserved.</p>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                    <div className={`${Styles.footer_icons} ml-md-auto`} >
                        <a href="" className={`${Styles.facebook}`} ><span className="bi bi-facebook"></span></a>
                        <a href="" className={`${Styles.instagram}`}><span className="bi bi-instagram"></span></a>
                        <a href="" className={`${Styles.twitter}`}><span className="bi bi-twitter"></span></a>
                        <a href="" className={`${Styles.github}`}><span className="bi bi-github"></span></a>
                        <a href="" className={`${Styles.dribbble}`}><span className="bi bi-dribbble"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
