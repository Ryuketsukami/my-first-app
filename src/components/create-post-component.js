import {useContext, useEffect, useRef, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import {AuthContext} from "../providers/auth-provider";
import {ArticleCard} from "./article-card";
import uuid4 from "uuid4";
import {useNavigate} from "react-router-dom";


// This component is in charge of posting a new post and previewing the post card live while making it.
// Since I am re-rendering the preview with each change, I didn't see a need to use useForm, as 'watch' functionality wouldn't improve performance in this case I think.
// Moreover, in regard to the mandatory assignment of required field with custom message, I will do it within the content-types/title-content.
export function CreatePostComponent() {

    const { categories, addNewPost } = useContext(BlogContext);
    const {user} = useContext(AuthContext);

    const srcInputRef = useRef(null);
    const [uniqueId] = useState(uuid4());

    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [typeValue, setTypeValue] = useState('Daily Digest');
    const [urlValue, setUrlValue] = useState('');

    const [submitted, setSubmitted] = useState(false)
    const navigate = useNavigate();

    const onSubmitData = (event) => {
        event.preventDefault();
        const newPost = {
            type:typeValue,
            meta_type: typeValue.toLowerCase().split(' ').join('-'),
            date:getDate(),
            creator_id: user.id,
            post_id: uniqueId,
            title:titleValue,
            preview_content:contentValue,
            thumbnail_src:urlValue,
            full_image:urlValue,
            content: [
                {
                    type:'text',
                    data:contentValue,
                    id:uuid4()
                },
                {
                    type:'src',
                    data:"https://i.pinimg.com/564x/e1/26/9c/e1269c6cbea54deed50d9eb9b09bad79.jpg",
                    alt:"template image",
                    id:uuid4()
                },
                {
                    type:'title',
                    data:"Title here! Feel free to edit this title or remove it!",
                    id:uuid4()
                },
                {
                    type:'text',
                    data:"Here you can write more text and give life to your cool post!",
                    id:uuid4()
                },
            ]
        }
        addNewPost(newPost);

        setSubmitted(true);
    }

    useEffect(() => {
        if (submitted){
            navigate(`/posts/${uniqueId}#`);
        }
    }, [submitted, navigate, uniqueId]);

    const onTitleChange = (event) => {
        setTitleValue(event.target.value);
    }

    const onContentChange = (event) => {
        setContentValue(event.target.value);
    }

    const onTypeChange = (event) => {
        setTypeValue(event.target.value);
    }

    const onUrlChange = (event) => {

        // We will only start showing a picture to the user if it meets certain criteria based on the regex.
        // This regex is not perfect and can be circumvented, therefore we have a function to take care of it in case it fails.
        // That function lies within the article-card
        const urlImageRegex = /(https?:\/\/.*\.(?:png|jpg|webp))/i;
        if(urlImageRegex.test(srcInputRef?.current?.value)){
            setUrlValue(event.target.value);
        }
    }

    // These following two constants are in charge of the preview of the article card per re-render.
    // We need to re-render the card every time we do any change in the form because we want to see how it would look.
    const selection ={
        date: getDate(),
        title: titleValue,
        preview_content: contentValue,
        thumbnail_src: urlValue,
        post_id: -1,
    }
    const previewCard = <ArticleCard disabled={true} selection={selection} />


    return (
        <div>
            {user ? (
                <div className="bg-gradient-to-r from-title-red to-title-yellow
                     dark:from-blue-600 dark:via-purple-400 dark:to-blue-600 lg:pr-96 lg:pl-96 pt-10 pb-10">
                    <form onSubmit={onSubmitData} className="flex flex-col justify-center space-y-10 items-center ">
                        <select onChange={onTypeChange} className="w-36 h-8 outline outline-2 outline-gray-900" id="type" name="type">
                            {
                                categories.map(category => <option key={uuid4()} value={category.meta_type}>{category.title}</option>)
                            }
                        </select>
                        <textarea required onChange={onTitleChange} className="p-3 bg-white h-28 w-96 outline outline-2 outline-gray-900" id="title" name="title" placeholder="title" maxLength="100" />
                        <textarea required onChange={onContentChange} className="p-3 pt-2 h-64 w-96 outline outline-2 outline-gray-900 whitespace-normal" id="preview_content" name="preview_content" placeholder="post card text" maxLength="250" />
                        <input required onChange={onUrlChange} className="p-3 outline outline-2 w-96 outline-gray-900" id="thumbnail_src" name="thumbnail_src" placeholder="thumbnail url" type="url" ref={srcInputRef} />
                        {previewCard}
                        <input className="w-20 h-12 bg-gray-900 text-white pt-2 pb-2 pr-3 pl-3 m-2 rounded-md cursor-pointer
                                            hover:text-gray-900 hover:bg-white hover:outline hover:outline-1 hover:outline-gray-900"
                               value="Create!"
                               type="submit"/>
                    </form>
                </div>

            ) : (
                <div>
                    <h1 className="font-bold text-4xl pb-28 text-red-700">
                        To create a post, please sign in at the top!
                    </h1>
                </div>

            )}

        </div>
    );
}

// When making a post, we want to have the date the post was created at, both as meta-data and also to show the users.
function getDate(){
    let currentDate = new Date();

    const monthNames = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL',
        'MAY', 'JUNE', 'JULY', 'AUGUST',
        'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const monthName = monthNames[monthIndex];

    return monthName + ' ' + day + ', ' + year;
}

