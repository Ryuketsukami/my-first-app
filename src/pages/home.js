import {ArticlesCluster} from "../components/articles-cluster";
import {PageTitle} from "../components/page-title";
import {useContext} from "react";
import {BlogContext} from "../providers/blog-provider";
import uuid4 from "uuid4";

export function Home() {

    const { posts, categories } = useContext(BlogContext);

    const title = {
            title: "Minimal blog template for creative expressions",
            content: "100% customisable and SEO-friendly blog template for personal and commercial purposes.",
            isHome: '👋Meet Personally'
        };

    return (
        <div>
            <PageTitle {...title} />
            <div className="bg-gray-100 dark:bg-black">
                <div>
                    {
                        categories.map(
                            (category) =>
                                // we filter it this way because we only want to show clusters for categories that aren't empty.
                                // This can be improved in the future by having the number of posts each category has inside its object in the categories array.
                                posts.filter(post => post.type === category.title).length ?
                                <ArticlesCluster key={uuid4()} section_name={category.title} section_meta_type={category.meta_type} section_list={
                                posts.filter(post => post.type === category.title)} /> : <></>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
