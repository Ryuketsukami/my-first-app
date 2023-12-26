import { HashLink as Link } from "react-router-hash-link";
import {useContext} from "react";
import {AuthContext} from "../providers/auth-provider";
import {BlogContext} from "../providers/blog-provider";

export function ArticleCard({selection, disabled, deleteDisabled}) {

    const { user } = useContext(AuthContext);
    const { removePostById } = useContext(BlogContext);

    const handleDelete = () => {
        const result = window.confirm('Are you sure you want to delete this post?');
        if(result){
            removePostById(selection.post_id);
        }

    }

    // In case the link of the img is wrong, broken or unavailable we will show to the user a default template.
    // In the future we should make this template a picture that tells the user that their link is broken.
    const addDefaultSrc = (event) =>{
        event.target.src = 'https://i.imgur.com/yd01iL2.jpeg';
    }

    // The title and content of the cards may be weird when hidden
    return (
        <div className="flex flex-col max-w-5xl w-full">
            <Link style={{pointerEvents: disabled ? 'none' : '' }} to={`/posts/${selection.post_id}#`}>
                <div className="hidden md:block">
                    <div className='bg-white dark:bg-neutral-700 pt-4 pb-4 pr-0 pl-0 rounded-2xl flex justify-between'>
                        <div className="text-left flex-wrap pl-6 w-full sm:w-6/12">
                            <p className="pt-3 lg:text-xs text-gray-500 dark:text-gray-500 font-medium">{selection.date}</p>
                            <p className="lg:text-xl text-sm text-gray-800 dark:text-gray-200 font-bold pt-5 mr-0 pb-2 overflow-x-hidden text-ellipsis">{selection.title}</p>
                            <p className="text-gray-500 dark:text-gray-400 mr-0 overflow-x-hidden text-ellipsis">{selection.preview_content}</p>
                        </div>
                        <div className="pr-4 pl-4">
                            <img onError={addDefaultSrc} src={selection.thumbnail_src} alt='thumbnail' className="max-h-48" />
                        </div>
                    </div>
                </div>
                <div className="md:hidden">
                    <div className='bg-white dark:bg-neutral-700 pt-2 pr-0 pl-0 rounded-2xl flex justify-center flex-col '>
                        <div className="text-left flex-wrap pl-6 pr-6 pb-3">
                            <p className="pt-3 text-xl text-gray-500 font-medium ">{selection.date}</p>
                            <p className="text-2xl text-gray-800 dark:text-gray-200 font-bold pt-5 mr-0 pb-3 max-w-sm overflow-x-hidden text-ellipsis">{selection.title}</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <img onError={addDefaultSrc} className="h-80" src={selection.thumbnail_src} alt='thumbnail' />
                        </div>
                    </div>
                </div>
            </Link>

            {
                (user?.role === 'admin' && !disabled && !deleteDisabled) &&
                <button onClick={handleDelete} className='pl-1.5 pr-1.5 bg-red-700 rounded-lg items-center pb-2.5 pt-2 text-gray-200 outline outline-1 outline-gray-900'>
                    Delete Post
                </button>
            }
        </div>
    );
}

