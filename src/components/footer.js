import {memo} from 'react';

export const Footer = memo( function Footer() {

    const device = 'desktop'

    if (device === 'desktop'){
        return (
            <div className="dark:bg-neutral-900">
                <div className="hidden md:block">
                    <div className=" justify-center flex flex-col overflow-x-hidden dark:divide-y dark:divide-neutral-500">
                        <div className="pt-10 pb-12 lg:ml-96 lg:mr-96">
                            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-title-red to-title-yellow
                                dark:from-blue-600 dark:via-purple-400 dark:to-blue-600 pb-4 text-2xl font-bold">
                                Personally Newsletter
                            </h1>
                            <p className="text-gray-600 mr-14 ml-14 text-center dark:text-neutral-300">
                                A bi-weekly newsletter of design inspiration, resources and anything related to career development
                            </p>
                            <form className="pt-6 flex flex-row justify-center">
                                <input className="pl-4 outline outline-1 outline-gray-300 rounded-l-md h-10 w-60 text-xs
                                    placeholder:text-xs dark:placeholder:text-black"
                                       placeholder="Email address" />
                                <button className="bg-gray-900 dark:bg-neutral-700 text-white text-xs h-10 outline outline-1 outline-gray-900 w-28 rounded-r-md">Subscribe</button>
                            </form>
                        </div>
                        <hr className="dark:hidden" />
                        <div className="pt-10 pb-10">
                            <p className="text-xs dark:text-neutral-500">Copyright 2023 - Me</p>
                        </div>
                    </div>
                </div>
                <div className="md:hidden dark:divide-y dark:divide-neutral-500">
                    <div className="pt-10 pb-10 lg:ml-96 lg:mr-96 flex flex-col justify-center">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-title-red to-title-yellow
                     dark:from-blue-600 dark:via-purple-400 dark:to-blue-600 pb-4 text-2xl font-bold">Personally Newsletter</h1>
                        <p className="text-gray-600 mr-14 ml-14 text-center font-medium text-sm dark:text-neutral-300">
                            A bi-weekly newsletter of design inspiration, resources and anything related to career development
                        </p>
                        <form className=" pt-6 flex flex-col justify-center pl-4 pr-4 space-y-3">
                            <input className="pl-4 pt-4 pb-4 outline outline-1 outline-gray-300 rounded-md text-xs
                                    placeholder:text-xs"
                                   placeholder="Email address" />
                            <button className="pt-4 pb-4 bg-gray-900 dark:bg-neutral-700 text-white text-xs outline outline-1 outline-gray-900 rounded-md">Subscribe</button>
                        </form>
                    </div>
                    <hr className="dark:hidden" />
                    <div className="pt-5 pb-5">
                        <p className="text-xs dark:text-neutral-500">Copyright 2023 - Me</p>
                    </div>
                </div>
            </div>
        );
    }

})