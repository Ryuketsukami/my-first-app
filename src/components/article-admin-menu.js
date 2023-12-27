import {Fragment, useContext} from "react";
import {AuthContext} from "../providers/auth-provider";
import {EditorContext} from "../providers/editor-provider";

export function ArticleAdminMenu({current_creator_id, handleCancelClick, handleEditClick}) {
    const { user } = useContext(AuthContext);

    const { editing } = useContext(EditorContext);

    const creator_id = current_creator_id

    return (
        <div className="bottom-0 sticky">
            {
                ((user?.id === creator_id && creator_id !== undefined) || user?.role === 'admin') && (
                    <footer className="">
                        <div className="h-16 bg-white dark:bg-neutral-800 flex-row flex justify-end outline outline-1 outline-gray-900 mr-4 ml-4 rounded-t-lg mt-4 mb-4 pr-4 pl-4">
                            {editing ? (
                                <>
                                    <input type="submit" className="text-white bg-green-600 cursor-pointer rounded-lg mt-3 mb-3 pr-4 pl-4" value="Save" />
                                    <button onClick={handleCancelClick} className="text-white bg-red-800 rounded-lg ml-4 mt-3 mb-3 pr-4 pl-4">
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <button onClick={handleEditClick} className="bg-gray-900 dark:bg-neutral-700 mr-4 ml-4 rounded-lg mt-3 mb-3 pr-4 pl-4 outline outline-1 outline-gray-900 text-white">
                                    Edit
                                </button>
                            )}
                        </div>
                    </footer>
                )
            }
        </div>
    );
}
