import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Styles from '@/Styles/heroSideNav.module.css'
const inter = Inter({ subsets: ['latin'] })
export default function heroSideNav() {
  return (
    // <footer className={`${Styles.footer}`}>
    //     <p>This is my lovely footer</p>
    //     <p>Copywright 2023</p>
    // </footer>
    <>

        <div className={`${Styles.home_browse_wrap} mx-auto`} 
            data-toggle="collapse" 
            data-target="#collapseWidthExample" 
            aria-expanded="false" 
            aria-controls="collapseWidthExample">
            <p className={`${Styles.home_browse_cat} m-0`}>
                <button className={`${Styles.hero_toggler}`}>
                    <div className={`${Styles.hero_toggler_icon}`}></div>
                    <div className={`${Styles.hero_toggler_icon}`}></div>
                    <div className={`${Styles.hero_toggler_icon}`}></div>
                </button>
                Browse Categories 
                <span className="bi bi-chevron-down"></span>
            </p>                            
        </div>
        <div style={{minHeight: '120px'}}>
            <div className={`collapse show`} id="collapseWidthExample">
                <div className={`${Styles.sidenav_item_wrap} card card-body  px-2 mt-3 w-100`}>
                    <ul className={`${Styles.sidenav_item} list-group `}>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-cup-hot mr-3"></i>Beverages <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-droplet mr-3"></i>Table Water <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-cloud-fog mr-3"></i>Snacks <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-paint-bucket mr-3"></i>Perfumes <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-laptop mr-3"></i>Computers <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-phone mr-3"></i>Phones <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-apple mr-3"></i>Electronics/Appliances <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-folder mr-3"></i>Men's Clothes <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-folder-plus mr-3"></i>Women's Clothes <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-controller mr-3"></i>Games & Consoles <span className="bi bi-chevron-right"></span></a>
                        </li>
                        <li className="list-group-item border-0 pl-2">
                            <a className="d-block" href=""><i className="bi bi-gem mr-3"></i>Beauty/Self Care <span className="bi bi-chevron-right"></span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>
    
  )
}
