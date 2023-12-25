import {ArticleCard} from "../components/article-card";
import {PageTitle} from "../components/page-title";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import uuid4 from "uuid4";

export function CategoryPage() {

    const { posts, categories } = useContext(BlogContext);

    const { category_meta_type } = useParams();

    const current_category = categories.find(category => category.meta_type === category_meta_type);

    const [renderedPostsNumber, setRenderedPostsNumber] = useState(3);

    const moreArticlesClickHandler = () => {
        if (renderedPostsNumber < posts.length){
            setRenderedPostsNumber(renderedPostsNumber+3);
        }
    }

    useEffect(() => {


    }, []);

    return (
        <div>
            <PageTitle {...current_category} />
            <div className="bg-gray-100 dark:bg-black lg:pr-56 lg:pl-56 pt-16 md:pr-8 md:pl-8 pr-8 pl-8 pb-16">
                <div className=" flex flex-col justify-center space-y-4 pb-16 items-center">
                    {
                        posts
                            .filter(post => post.meta_type === category_meta_type)
                            .slice(0,renderedPostsNumber)
                            .map((element) => <ArticleCard key={uuid4()} selection={element} />)

                    }
                </div>
                {
                    renderedPostsNumber < posts.length &&
                    <button
                        onClick={moreArticlesClickHandler}
                        className="bg-white p-1.5 pr-2.5 pl-2.5 outline outline-1 outline-gray-200 rounded-md
                        hover:bg-gray-800 hover:text-white hover:outline-gray-800 font-medium dark:hover:bg-neutral-900 dark:bg-neutral-700 dark:text-neutral-400">
                        <p>
                            More article
                        </p>
                    </button>
                }
            </div>
        </div>
    );
}