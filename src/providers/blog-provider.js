import {createContext, useState} from "react";
import uuid4 from "uuid4";

// The two following lists represent the data we will have in our back-end.
const newHardCodedPosts = [
    {
        type: "Daily Digest",
        meta_type:'daily-digest',
        date: "AUGUST 13, 2021",
        creator_id: "1",
        post_id: "1",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        preview_content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        thumbnail_src: "https://c4.wallpaperflare.com/wallpaper/973/968/837/black-rock-shooter-anime-anime-girls-black-rock-shooter-series-wallpaper-preview.jpg",
        full_image: "https://c4.wallpaperflare.com/wallpaper/973/968/837/black-rock-shooter-anime-anime-girls-black-rock-shooter-series-wallpaper-preview.jpg",
        content: [
            {
                type:'text',
                data:"Lets say there is a lot of text here now, like a whole whole lot, what are we going to do? \n \n \n Lets say there is a lot of text here now, like a whole whole lot, what are we going to do?",
                id: uuid4()
            },
            {
                type:'src',
                data:"https://i.pinimg.com/564x/e1/26/9c/e1269c6cbea54deed50d9eb9b09bad79.jpg",
                alt:"Joe Mama",
                id: uuid4()
            },
            {
                type:'text',
                data:"This is another big paragraph, but of course I am too damn lazy to write a lot here, I could look it u the internet, but I am in the train and the internet is bad, also, I feel like random meaningless text here would make the app less impactful, not that there is going to be much impact from this app anyways.",
                id: uuid4()
            },
            {
                type:'title',
                data:"THIS IS A TITLE! YOU DID NOT EXPECT TO SEE A TITLE HERE! DID YOU?!",
                id: uuid4()
            },
            {
                type: 'text',
                data: "And now there is more text... this may seem a bit monotonous, but that's life, you know? you might have expected something a little bit more fulfilling from reading this horrendous text, but it is just a filler text, nothing more than something to fill this void of space, and to test the blog.",
                id: uuid4()
            },
        ],
    },
    {
        type: "Daily Digest",
        meta_type:'daily-digest',
        date: "AUGUST 13, 2021",
        creator_id: "2",
        post_id: "2",
        title: "10 Hilarious Cartoons That Depict Real-Life Problems of Programmers",
        preview_content: "Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.",
        thumbnail_src: "https://i.pinimg.com/originals/97/51/e1/9751e1815c3cbce81b592d4c49804258.jpg",
        full_image: "https://i.pinimg.com/originals/97/51/e1/9751e1815c3cbce81b592d4c49804258.jpg",
        content: [
            {
                type:'text',
                data:"Lets say there is a lot of text here now, like a whole whole lot, what are we going to do? \n \n \n Lets say there is a lot of text here now, like a whole whole lot, what are we going to do?",
                id: uuid4()
            },
            {
                type:'src',
                data:"https://i.pinimg.com/564x/e1/26/9c/e1269c6cbea54deed50d9eb9b09bad79.jpg",
                alt:"Joe Mama",
                id: uuid4()
            },
            {
                type:'text',
                data:"This is another big paragraph, but of course I am too damn lazy to write a lot here, I could look it u the internet, but I am in the train and the internet is bad, also, I feel like random meaningless text here would make the app less impactful, not that there is going to be much impact from this app anyways.",
                id: uuid4()
            },
            {
                type:'title',
                data:"THIS IS A TITLE! YOU DID NOT EXPECT TO SEE A TITLE HERE! DID YOU?!",
                id: uuid4()
            },
            {
                type: 'text',
                data: "And now there is more text... this may seem a bit monotonous, but that's life, you know? you might have expected something a little bit more fulfilling from reading this horrendous text, but it is just a filler text, nothing more than something to fill this void of space, and to test the blog.",
                id: uuid4()
            },
        ],
    },
    {
        type: "Design Tools",
        meta_type:'design-tools',
        date: "DECEMBER 11, 2023",
        creator_id: "1",
        post_id: "3",
        title: "Clickbait Title for you to click and waste your time!",
        preview_content: "This is the description of what you will find inside this link",
        thumbnail_src: "https://media.moddb.com/images/downloads/1/43/42959/7.jpg",
        full_image: "https://media.moddb.com/images/downloads/1/43/42959/7.jpg",
        content: [
            {
                type:'text',
                data:"Lets say there is a lot of text here now, like a whole whole lot, what are we going to do? \n \n \n Lets say there is a lot of text here now, like a whole whole lot, what are we going to do?",
                id: uuid4(),
            },
            {
                type:'src',
                data:"https://i.pinimg.com/564x/e1/26/9c/e1269c6cbea54deed50d9eb9b09bad79.jpg",
                alt:"Joe Mama",
                id: uuid4()
            },
            {
                type:'text',
                data:"This is another big paragraph, but of course I am too damn lazy to write a lot here, I could look it u the internet, but I am in the train and the internet is bad, also, I feel like random meaningless text here would make the app less impactful, not that there is going to be much impact from this app anyways.",
                id: uuid4()
            },
            {
                type:'title',
                data:"THIS IS A TITLE! YOU DID NOT EXPECT TO SEE A TITLE HERE! DID YOU?!",
                id: uuid4()
            },
            {
                type: 'text',
                data: "And now there is more text... this may seem a bit monotonous, but that's life, you know? you might have expected something a little bit more fulfilling from reading this horrendous text, but it is just a filler text, nothing more than something to fill this void of space, and to test the blog.",
                id: uuid4()
            },
        ],
    },
    {
        type: "Tutorials",
        meta_type:'tutorials',
        date: "DECEMBER 11, 2023",
        creator_id: "1",
        post_id: "13",
        title: "Clickbait Title for you to click and waste your time!",
        preview_content: "This is the description of what you will find inside this link",
        thumbnail_src: "https://c4.wallpaperflare.com/wallpaper/353/497/196/anime-made-in-abyss-made-in-abyss-mitty-made-in-abyss-wallpaper-preview.jpg",
        full_image: "https://c4.wallpaperflare.com/wallpaper/353/497/196/anime-made-in-abyss-made-in-abyss-mitty-made-in-abyss-wallpaper-preview.jpg",

        content: [
            {
                type:'text',
                data:"Lets say there is a lot of text here now, like a whole whole lot, what are we going to do? \n \n \n Lets say there is a lot of text here now, like a whole whole lot, what are we going to do?",
                id: uuid4()
            },
            {
                type:'src',
                data:"https://i.pinimg.com/564x/e1/26/9c/e1269c6cbea54deed50d9eb9b09bad79.jpg",
                alt:"Joe Mama",
                id: uuid4()
            },
            {
                type:'text',
                data:"This is another big paragraph, but of course I am too damn lazy to write a lot here, I could look it u the internet, but I am in the train and the internet is bad, also, I feel like random meaningless text here would make the app less impactful, not that there is going to be much impact from this app anyways.",
                id: uuid4()
            },
            {
                type:'title',
                data:"THIS IS A TITLE! YOU DID NOT EXPECT TO SEE A TITLE HERE! DID YOU?!",
                id: uuid4()
            },
            {
                type: 'text',
                data: "And now there is more text... this may seem a bit monotonous, but that's life, you know? you might have expected something a little bit more fulfilling from reading this horrendous text, but it is just a filler text, nothing more than something to fill this void of space, and to test the blog.",
                id: uuid4()
            },
        ],
    },

]

const hardCodedCategories =[
    {
        title: "Daily Digest",
        meta_type: "daily-digest",
        content: "A description of the respective category goes right here. Be as expressive as possible, but in brief.",
    },
    {
        title: "Design Tools",
        meta_type: "design-tools",
        content: "A description of the respective category goes right here. Be as expressive as possible, but in brief.",
    },
    {
        title: "Tutorials",
        meta_type: "tutorials",
        content: "A description of the respective category goes right here. Be as expressive as possible, but in brief.",
    },
]

export const BlogContext = createContext(null)

export function BlogProvider({children}) {
    const [posts, setPosts] = useState(newHardCodedPosts);
    const [categories, setCategories] = useState(hardCodedCategories);


    // This is more or less how I would implement the fetching, just editing each post a bit before adding it to the 'posts' state.
    // Since I didn't find in any of the assignment sheets that we had to fetch from the internet, I left this commented out.
    // I know you said to not leave unused code or commented out unused functions,
    // But I just want to show that I didn't fetch out of choice and not because I didn't know how.
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => setPosts(json))
    // }, [])

    const addNewPost = (post) => {
        setPosts([...posts, post]);
    }

    const replacePostWithEdited = (edited_post) => {
        setPosts(
            posts.map(post => post.post_id === edited_post.post_id ? edited_post : post)
        );
    }

    const removePostById = (target_id) => {
        setPosts(posts.filter(post => post.post_id !== target_id));
    }

    // We are adding this in case an admin wants to add a category in the future.
    // We might want to make one for removing categories too. but that one has to check the posts before doing so.
    const addNewCategory = (category) => {
        setCategories([...categories, category]);
    }

    const value = {posts, categories, addNewPost, replacePostWithEdited, removePostById, addNewCategory};

    return (
        <BlogContext.Provider value={value}>
            {children}
        </BlogContext.Provider>
    );
}