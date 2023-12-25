import {ArticleCard} from "./article-card";

export function RecommendedArticles(props) {
    const {recommended_list} = props;
    return (
        <div className="lg:pr-56 lg:pl-56 pt-16 md:pr-8 md:pl-8 pr-8 pl-8 bg-gray-100 dark:bg-neutral-950">
            <div className="flex flex-row justify-between item">
                <h1 className="text-xl font-bold text-gray-800 dark:text-neutral-500">Recommended articles</h1>
            </div>
            <div className="flex flex-col space-y-4 pt-8 pb-16 items-center">
                <ArticleCard selection={recommended_list[1]} />
                <ArticleCard selection={recommended_list[2]} />
                <ArticleCard selection={recommended_list[3]} />
            </div>
        </div>
    );
}