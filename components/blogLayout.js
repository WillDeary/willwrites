import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Date from "./date";
import styles from "./layout.module.css";
import Link from "next/link";
import Footer from "./footer";

const name = 'William Deary'
export const siteTitle = 'Will Writes'

export default function BlogLayout({ children, date, readTime }) {
    return (
        <>
        <section className="text-gray-600 body-font">
            <div className="container px-4 py-16 mx-auto flex flex-col">
                <div className="lg:w-5/6 mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/6 text-center sm:pr-8 sm:py-8">
                            <Link href={"/"}>
                                <div className="cursor-pointer">
                                    <div
                                        className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <Image
                                            priority
                                            src="/images/me_pp.jpg"
                                            className={utilStyles.borderCircle}
                                            height={144}
                                            width={144}
                                            alt={name}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">By {name}</h2>
                                        <div className="w-3/4 h-1 bg-indigo-500 rounded mt-2 mb-4">

                                        </div>
                                        <div>
                                            {/*    Can put witty comment here*/}
                                            <Date dateString={date} />
                                            <p><small>{readTime} min read</small></p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div
                            className="sm:w-5/6 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            {/*Here is the blog text*/}
                            {children}
                            <div className={styles.backToHome}>
                                <Link href="/">
                                    <a>← Back to home</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <Footer />
        </>
    )
}