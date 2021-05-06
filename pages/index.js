import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from "../lib/posts";
import {HomeScreenBlogs} from "../components/HomeScreenBlogs";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p><strong>I hope you enjoy what I have to offer from reading my blog.</strong></p>
            </section>
            <HomeScreenBlogs allPostData={allPostsData} />
        </Layout>
    )
}