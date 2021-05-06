import Layout from "../../components/layout";
import {getAllPostsIds, getPostsData} from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from '../../styles/utils.module.css'
import ReactMarkdown from 'react-markdown';
import Image from "next/image";
import BlogLayout from "../../components/blogLayout";

const renderers = {
    // convert normal JSX image to Next JS <Image />
    img: image => {
        return <Image src={image.src} alt={image.alt} height={400} width={600} />
    },
    // The markdown adds everything inside p tags.
    // We can't have an image inside a p tag
    // The below checks for a p tag with nested image and returns only the Next js <Image />
    p: paragraph => {
        const { node } = paragraph;
        if (node.children[0].type === "element" && node.children[0].tagName === 'img') {
            const image = node.children[0].properties
            return <Image src={image.src} alt={image.alt} height={400} width={600} />
        }
        return <p>{paragraph.children}</p>;
    },
}

export async function getStaticProps({params}) {
    const postData = await getPostsData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostsIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({postData}) {
    return (
        <>
            <BlogLayout date={postData.date}>
                <Head >
                    <title>
                        {postData.title}
                    </title>
                </Head>
                <article className="prose prose-lg">
                    <h1 className={utilStyles.headingXl}>
                        {postData.title}
                    </h1>
                    <ReactMarkdown children={postData.content} components={renderers} />
                </article>

            </BlogLayout>

        </>
    )
}