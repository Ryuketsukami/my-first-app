import {createContext, useState} from "react";

const hardCodedUser = {username: "allan", role: 'admin', id: "1"};

// This is our Context for users and authentication
// In the future we will use uuid4 to create new users.
// Currently, we do not have back-end, so we are going to have a hardCoded user.
// Once we learn more about back-end I will have one of those Google log-in modals.
export const AuthContext = createContext(null)

export function AuthProvider ({children}){

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [canSignOut, setCanSignOut] = useState(true);

    // This is a placeholder function for singing-in as admin.
    // Since the id is set to 1, this user is also the writer of some posts
    // Each post can only be edited by the creator or an admin.
    // Currently, we only allow admins to make or delete posts though.
    const signIn = () => {
        localStorage.setItem('user', JSON.stringify(hardCodedUser));
        setUser(hardCodedUser);
    }

    const signOut = () => {
        if (canSignOut) {
            localStorage.removeItem('user');
            setUser(null);
        }

        if (!canSignOut && canSignOut !== undefined)
        {
            window.alert('Please finish editing to sign out!')
        }
    }

    const changeCanSignOutState = (state) =>{
        setCanSignOut(state);
    }

    const value = {
    user, signIn, signOut, changeCanSignOutState
    }

    return (
        <AuthContext.Provider value={value}>
        {children}
        </AuthContext.Provider>
    )

}