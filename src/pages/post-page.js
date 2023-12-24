import {PageTitle} from "../components/page-title";
import {CreatePostComponent} from "../components/create-post-component";
import {FilteredPosts} from "../components/filtered-posts";

export function PostPage() {

    const title = {
            title: "Post something cool!",
            content: "Post something cool in this page! make this blog look nice",
            isHome: ''
        };

    return (
        <div>
            <PageTitle {...title} />
            <div className="bg-gray-100 dark:bg-black">
                <FilteredPosts />
                <CreatePostComponent />
            </div>
        </div>
    );
}
