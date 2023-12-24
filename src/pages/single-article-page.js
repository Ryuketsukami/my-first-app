import {RecommendedArticles} from "../components/recommended-articles";
import {ArticleTitle} from "../components/article-title";
import {ArticleBody} from "../components/article-body";
import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {BlogContext} from "../providers/blog-provider";
import {EditorProvider} from "../providers/editor-provider";
import {FormProvider} from "../providers/form-provider";


export function SingleArticlePage() {

    // Fetch the id of the current article from the route, we will need it in order to fetch the actual article.
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    // Fetch all posts and isolate the current article, so we can pass its data to the next components.
    const { posts } = useContext(BlogContext);
    const post = posts.find((post) => post.post_id === id);

    return (
        <FormProvider>
            <EditorProvider>
                <div className="bg-gray-100">
                    <ArticleTitle title={post.title} date={post.date} type={post.type}/>
                    <div>
                        <ArticleBody post={post} />
                    </div>
                    <RecommendedArticles recommended_list={posts}/>
                </div>
            </EditorProvider>
        </FormProvider>
    );
}
