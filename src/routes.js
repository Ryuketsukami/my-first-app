import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {Home} from "./pages/home";
import {CategoryPage} from "./pages/category-page";
import {PostPage} from "./pages/post-page";
import React from "react";
import {SingleArticlePage} from "./pages/single-article-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/categories/:category_meta_type",
                element: <CategoryPage />,
            },
            {
                path: "/posts",
                element: <PostPage />
            },
            {
                path:"/posts/:id",
                element: <SingleArticlePage />
            },
        ]
    }]
)