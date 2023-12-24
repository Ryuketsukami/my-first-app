import {useContext, useEffect, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import {useForm} from "react-hook-form";
import {ArticleCard} from "./article-card";
import uuid4 from "uuid4";

export function FilteredPosts() {
    const { posts } = useContext(BlogContext);

    const [ filteredPosts, setFilteredPosts ] = useState([...posts]);

    const { register, watch } = useForm();

    const watchFilter = watch('filter-input');

    useEffect(() => {
        setFilteredPosts(posts.filter(post =>
            post?.preview_content.toLowerCase().includes(watchFilter?.toLowerCase()) ||
            post?.title.toLowerCase().includes(watchFilter?.toLowerCase())));

    }, [watchFilter, posts]);

    return (
        <div className="bg-gray-100 pb-28 pt-28 dark:bg-black">
            <div className="lg:pr-28 lg:pl-28 md:pr-16 md:pl-16 pl-6 pr-6 flex flex-col justify-center space-y-10">
                <input
                    {...register('filter-input', {

                    })}
                    placeholder="Filter posts here!"
                    className="outline outline-1 outline-gray-900 p-2 rounded-md md:mr-8 md:ml-8 lg:mr-36 lg:ml-36 dark:bg-neutral-400 dark:placeholder:text-neutral-600"
                />
                <div className="lg:pr-36 lg:pl-36 md:pl-8 md:pr-8 flex flex-col justify-center space-y-10">
                    {
                        filteredPosts.length ?
                        filteredPosts.map( post => <ArticleCard key={uuid4()} selection={post} />)
                            :
                            <div className="font-medium text-xl text-red-600">
                                <h1>
                                    Nothing matches your search criteria!
                                </h1>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
}

