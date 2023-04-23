import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Styles from '@/Styles/blog.module.css'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
        
        <section class={`${Styles.blog_sect_container} pb-5`} >
            <div class={`${Styles.product_details_hero_wrap}`} >
                <div class={`${Styles.blog_hero_wrap} row  mb-5 mt-4`} >
                    <div class="col-md-6 pr-lg-5">
                        <div class={`${Styles.blog_pg_img}`} >
                            <img class="img-fluid img-responsive" src="./images/blog_img1.png" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6 pl-lg-5">
                        <div class={`${Styles.blog_pg_content}`} >
                            <p class="font-weight-bold mt-3 mt-md-0">DANIELA METZ</p>
                            <h1>English breakfast tea with tasty donut desserts</h1>
                            <p class="text-muted mt-lg-5">Feb 12, 2020 · 11 min read</p>
                        </div>
                    </div>
                </div>
                <div class={`${Styles.blog_hero_wrap} row  my-5`} >
                    <div class="col-md-6 pr-lg-5">
                        <div class={`${Styles.blog_pg_img}`} >
                            <img class="img-fluid img-responsive" src="./images/blog_img2.png" alt="" />
                        </div>
                    </div>
                    <div class="col-md-6 pl-lg-5">
                        <div class={`${Styles.blog_pg_content}`} >
                            <p class="font-weight-bold mt-3 mt-md-0">DANIELA METZ</p>
                            <h1>English breakfast tea with tasty donut desserts</h1>
                            <p class="text-muted mt-lg-5">Feb 12, 2020 · 11 min read</p>
                        </div>
                    </div>
                </div>

                <div class={`${Styles.main_blog} text-center pt-md-5`} >
                    <h1 class="font-weight-bold">From the Blog</h1>
                    <p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.</p>
                </div>
                <div class="row mt-5 py-lg-5 ">
                    <div class="col-md-4 px-lg-4">
                        <div class={`${Styles.blog_cards} card my-3 my-md-0 `} >
                            <img src="./images/blogcard_img1.jpeg" class={`${Styles.blog_cards_topimg} card-img-top `} alt="..." />
                            <div class={`${Styles.blog_cards_body} card-body `} >
                                <div class="card-text">Article</div>
                              <h4 class="card-title my-3">Boost your conversion rate</h4>
                              <p class="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                            </div>
                            <div class={`${Styles.blog_sender_wrap}`} >
                                <div class={`${Styles.blog_sender_img}`} >
                                    <img src="./images/blogSender_img.jpeg" alt="" />
                                </div>
                                <div class={`${Styles.blog_sender_detail}`} >
                                    <h6 class="m-0 mb-1">Roel Aufderehar</h6>
                                    <p class="text-muted m-0 mt-1">Mar 16, 2020 · 6 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 px-lg-4">
                        <div class={`${Styles.blog_cards} card my-3 my-md-0 `} >
                            <img src="./images/blogcard_img2.jpeg" class={`${Styles.blog_cards_topimg} card-img-top`} alt="..." />
                            <div class={`${Styles.blog_cards_body} card-body `} >
                                <div class="card-text">Video</div>
                              <h4 class="card-title my-3">How to use search engine optimization to drive sales</h4>
                              <p class="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>
                            </div>
                            <div class={`${Styles.blog_sender_wrap}`} >
                                <div class={`${Styles.blog_sender_img}`} >
                                    <img src="./images/blogSender_img2.jpeg" alt="" />
                                </div>
                                <div class={`${Styles.blog_sender_detail}`} >
                                    <h6 class="m-0 mb-1">Brenna Goyette</h6>
                                    <p class="text-muted m-0 mt-1">Mar 10, 2020 · 4 min read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 px-lg-4">
                        <div class={`${Styles.blog_cards} card my-3 my-md-0 `} >
                            <img src="./images/blogcard_img3.jpeg" class={`${Styles.blog_cards_topimg} card-img-top`} alt="..." />
                            <div class={`${Styles.blog_cards_body} card-body `} >
                                <div class="card-text">Case Study</div>
                              <h4 class="card-title my-3">Improve your customer experience</h4>
                              <p class="card-text text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                            </div>
                            <div class={`${Styles.blog_sender_wrap}`} >
                                <div class={`${Styles.blog_sender_img}`} >
                                    <img src="./images/blogSender_img3.jpeg" alt="" />
                                </div>
                                <div class={`${Styles.blog_sender_detail}`} >
                                    <h6 class="m-0 mb-1">Daniela Metz</h6>
                                    <p class="text-muted m-0 mt-1">Feb 12, 2020 · 11 min read</p>
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
