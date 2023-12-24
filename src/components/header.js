import {useContext, useState} from "react";
import {XIcon} from "../icons/x-icon";
import {BurgerIcon} from "../icons/burger-icon";
import {NavHashLink as NavLink} from "react-router-hash-link";
import {AuthContext} from "../providers/auth-provider";
import {BlogContext} from "../providers/blog-provider";
import uuid4 from "uuid4";
import {ModeToggleButton} from "./mode-toggle-button";

export function Header() {
    const { user, signIn, signOut } = useContext(AuthContext);
    const { categories } = useContext(BlogContext);

    // Burger icon refers to the icon you see instead of the normal buttons, when using the mobile version.
    // The buttons themselves have not been implemented, but we can toggle the state of the icon.
    const [burgerOn, toggleBurger] = useState(false);
    let burger_icon = <BurgerIcon />;
    if (burgerOn){
        burger_icon = <XIcon />
    }
    const burgerClick = () => {
        toggleBurger(!burgerOn);
    }


    return (
        <nav className='flex flex-row dark:bg-black dark:text-gray-300 justify-between lg:pl-8 lg:pr-8 h-16 lg:h-14 pl-1 pr-1'>
            <h1 className="font-black text-xl pl-2 pt-4 md:text-3xl lg:text-2xl lg:pt-2 md:pt-3">
                <NavLink to="/" >
                    Personally™
                </NavLink>
            </h1>
            <div className="md:hidden pt-5 scale-150 pr-3">
                <button onClick={() => burgerClick()}>
                    {burger_icon}
                </button>
            </div>
            <div className="hidden md:block">
                <div className="flex flex-row">
                    <div className="lg:mr-16 lg:pt-3.5 mr-1 pt-2 space-x-5 md:text-xl md:pt-4">
                        {
                            categories.map( category =>
                                <NavLink to={`/categories/${category.meta_type}`}
                                         key={uuid4()}
                                         className={ ({isActive}) => isActive ?
                                             "text-transparent bg-clip-text bg-gradient-to-r from-title-red to-title-yellow\n" +
                                             "dark:from-blue-600 dark:via-purple-400 dark:to-blue-600" : "" }>
                                    {category.title}
                                </NavLink>
                            )
                        }
                        <NavLink
                            to="/posts"
                            className={ ({isActive}) => isActive ?
                                "text-transparent bg-clip-text bg-gradient-to-r from-title-red to-title-yellow\n" +
                                "dark:from-blue-600 dark:via-purple-400 dark:to-blue-600" : "" }>
                                Posts
                        </NavLink>
                    </div>
                    { user ?
                        <div>
                            <button
                                className='hidden md:block bg-red-700 text-white pt-2 pb-2 pr-3 pl-3 m-2 md:mt-3 lg:mt-2
                                    text-justify content-center rounded-md hover:text-gray-900 hover:bg-white
                                    hover:outline hover:outline-1 hover:outline-gray-900'
                                onClick={signOut}>
                                sign out
                            </button>
                        </div> :
                        <div>
                            <button
                                className='hidden md:block dark:bg-neutral-700 bg-gray-900 text-white pt-2 pb-2 pr-3 pl-3 m-2 md:mt-3 lg:mt-2
                                    text-justify content-center rounded-md hover:text-gray-900 hover:bg-white
                                    hover:outline hover:outline-1 hover:outline-gray-900'
                                onClick={signIn}>
                                sign in
                            </button>
                        </div>
                    }
                    <ModeToggleButton />
                </div>
            </div>
        </nav>
    );
}
