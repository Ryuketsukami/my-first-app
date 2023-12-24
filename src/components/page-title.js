export function PageTitle({title, content, isHome}) {

    return (
        <div className="bg-white dark:bg-black flex flex-col justify-center from-gray-50 via-white to-white bg-gradient-to-b
        dark:from-neutral-900 dark:via-neutral-800 dark:to-black dark:bg-gradient-to-b
        ">
            <div className='pt-20 pb-20 lg:ml-60 lg:mr-60 md:pr-14 md:pl-14 pl-6 pr-6'>
                {isHome &&
                    <button className="mb-8 text-xs font-medium bg-gray-100 p-2 rounded-3xl dark:bg-neutral-700 dark:text-neutral-300">
                        {isHome}
                    </button>}
                <h1 className="md:text-5xl text-4xl font-bold pb-4 text-transparent bg-clip-text bg-gradient-to-r from-title-red to-title-yellow
                     dark:from-blue-600 dark:via-purple-400 dark:to-blue-600
                ">
                    {title}
                </h1>
                <p className="pt-0 md:pr-24 md:pl-24 bg-clip-text text-gray-600 md:text-lg text-2xl dark:text-neutral-400">
                    {content}
                </p>
            </div>
        </div>
    );
}