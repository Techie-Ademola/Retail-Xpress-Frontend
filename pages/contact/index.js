import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/contact.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        {/* <!-- Saved Items Section --> */}

        <section className={`${Styles.grocery_shop_container} pt-5 pb-md-5`} >
            <div className={`${Styles.contactpg_wrap}`} >
                <h5 className="mb-3">CONTACT US</h5>
                <div className="row">
                    <div className="col-lg-5">
                        <div className={`${Styles.contact_handle_wrap} p-md-5 p-3`} >
                            <div className={`${Styles.contact_handle} py-5`} >
                                <h2 className="font-weight-bold">Looking for something?</h2>
                                <p className="m-0">Do you have a complaint, question or an enquiry? Kindly drop us a message and we will respond as soon as possible</p>
                                <p className="m-0 mt-4">742 Evergreen Terrace</p>
                                <p className="m-0">Springfield, OR 12345</p>
                                <p className={`${Styles.phone_sect} m-0 mt-4`} ><i className="bi bi-telephone"></i> <span>+1 (555) 123-4567</span></p>
                                <p className={`${Styles.phone_sect} m-0`} ><i className="bi bi-envelope"></i> <span>support@example.com</span></p>
                                <p className={`${Styles.contact_icon} mt-4`} >
                                    <a href=""><span className="bi bi-facebook"></span></a>
                                    <a href=""><span className="bi bi-instagram"></span></a>
                                    <a href=""><span className="bi bi-twitter"></span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className={`${Styles.contact_input_wrap} p-md-5 p-3`} >
                            <div className={`${Styles.contact_handle} py-5`} >
                                <form>
                                    <div className="form-group">
                                      <input type="text" className="form-control" id="name" required placeholder="Full name" />
                                    </div>
                                    <div className="form-group">
                                      <input type="email" className="form-control" id="email" required placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                      <input type="tel" className="form-control" id="tel" required placeholder="Phone" />
                                    </div>
                                    <div className="form-group">
                                      <textarea className="form-control" id="message" required placeholder="Message" rows="4"></textarea>
                                    </div>
                                    <button type="submit" className="btn px-4">Submit</button>
                                  </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
