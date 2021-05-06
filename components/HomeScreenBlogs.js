import Link from "next/link";
import Date from "./date";
import Image from "next/image";

export function HomeScreenBlogs({allPostData}) {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -m-12">
                    {/* Loop through all posts and display */}
                    {allPostData.map(({id, date, title, category, summary, color, image}) => (
                        <Link href={`/posts/${id}`} key={id}>
                            <div
                                className="px-12 pt-4 flex flex-col items-start border-b-2 border-gray-100 cursor-pointer">
                                    <span
                                        {/*Disgusting way to do this, however tailwind purges dynamic classnames
                                        so this is the work around. If we add more colors add then in here.... Puke */}
                                        className={`inline-block py-1 px-2 rounded                                        
                                        ${color === 'yellow' ? 'bg-yellow-50 text-yellow-500 ' 
                                            : color === 'blue' ? 'bg-blue-50 text-blue-500 ' 
                                                : color === "red" ? 'bg-red-50 text-red-500 ' 
                                                    : color === "green" ? 'bg-green-50 text-green-500 '
                                                        : ''
                                        }                                      
                                        text-xs font-medium tracking-widest`}>
                                        {category}
                                    </span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-1 mb-4">
                                    {title}
                                </h2>
                                {
                                    image && <Image src={image} alt={title} width={500} height={150}/>

                                }
                                <div>
                                    <Date dateString={date}/>
                                </div>
                                <p className="leading-relaxed mb-3">
                                    {summary}
                                </p>
                                <div className="flex items-center flex-wrap pb- mb-4 mt-auto w-full">
                                    <a>View Post</a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}