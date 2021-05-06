import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <ImageComponent />
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}

const ImageComponent = () => (
    <Image src="/images/me_pp.jpg"
           height={165}
           width={144}
           alt="William (me)"
    />
)