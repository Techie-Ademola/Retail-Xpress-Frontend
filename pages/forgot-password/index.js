import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/forgot-password.module.css'

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
                    <a href="" className="mr-0 mr-sm-3 mr-md-0">Create Account</a>
                </div>
            </div>
            <div className={`${Styles.login_form_wrapper}`} >
                <form action="" method="get">
                    <h4>Forgot Password?</h4>
                    <div className={`${Styles.user_box}`} >
                        <input type="email" required placeholder="Email Address" />
                    </div>
                    <div className={`${Styles.user_box}`} >
                        <input type="submit" value="Reset Password" />
                    </div>
                </form>
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
