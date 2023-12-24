import {ArticleCard} from "./article-card";
import uuid4 from "uuid4";
import { NavHashLink as Link } from 'react-router-hash-link';


export function ArticlesCluster(props) {
    const {section_name, section_list, section_meta_type} = props;
    return (
        <div className="lg:pr-56 lg:pl-56 pt-16 md:pr-8 md:pl-8 pl-4 pr-4">
            <div className="flex flex-row justify-between">
                <h1 className="lg:text-xl md:text-sm text-xl font-bold text-gray-800 dark:text-gray-300">{section_name}</h1>
                <Link to={`/categories/${section_meta_type}#`} className="bg-white dark:bg-neutral-700 dark:text-neutral-400
                 dark:hover:bg-neutral-900 p-1.5 pr-2.5 pl-2.5 outline outline-1 outline-gray-200 rounded-md
                    hover:bg-gray-800 hover:text-white hover:outline-gray-800
                ">
                    <p className="font-medium md:text-xs text-lg">View all</p>
                </Link>
            </div>
            <div className="flex flex-col space-y-4 pt-8 pb-12">
                {
                    section_list.map((element) => <ArticleCard key={uuid4()} selection={element} />)
                }
            </div>
        </div>
    );
}