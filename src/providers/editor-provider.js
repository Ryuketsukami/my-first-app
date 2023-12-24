import {createContext, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {BlogContext} from "./blog-provider";

export const EditorContext = createContext(null)


// Provider in charge of the editor state
// We will create a currentContent variable to work on, instead of working on top of our original content (as in content of the post).
// The reason for that is for the case where the user wants to cancel the edit, we will want to retrieve the initial state.
export function EditorProvider({children}) {

    const { id } = useParams();
    const { posts } = useContext(BlogContext);
    const [ post, setPost ] = useState(posts.find(element => element.post_id === id));

    const [editing, setEditingState] = useState(false);
    const [cancelled, setCancelledState] = useState(false);

    useEffect(() => {
        setPost(posts.find(element => element.post_id === id));
    }, [posts, id]);


    const setEditing = (statement) => {
        setEditingState(statement);
    }

    const setCancelled = (statement) => {
        setCancelledState(statement);
    }

    const [currentContent, setCurrentContent] = useState(JSON.parse(JSON.stringify(post.content)));

    useEffect(() => {
        setCurrentContent(JSON.parse(JSON.stringify(post.content)));
    }, [post.content]);

    const addContent = (component) => {
        setCurrentContent([...currentContent, {...component}]);
    }

    const setContents = (content) => {
        setCurrentContent([...content]);
    }

    const editContentById = (component, target_id) => {
        setCurrentContent(currentContent.map(element => element.id === target_id ? component : element ));
    }

    const removeContentById = (target_id) =>{
        setCurrentContent(currentContent.filter(content => content?.id !== target_id));
    }

    const resetContents = () => {
        setContents(JSON.parse(JSON.stringify(post?.content)));
    }


    const value = {setEditing, setCancelled, editing, cancelled, addContent, setContents, editContentById, removeContentById, resetContents, currentContent};

    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    );
}