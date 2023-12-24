export function ArticleTitle({title, date, type}) {

    return (
        <div className="bg-white flex flex-col justify-center from-gray-50 via-white to-white bg-gradient-to-b
        dark:from-neutral-900 dark:via-neutral-800 dark:to-black dark:bg-gradient-to-b
        ">
            <div className='pt-20 pb-20 lg:ml-60 lg:mr-60 md:pr-14 md:pl-14 pl-6 pr-6'>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-title-red to-title-yellow
                     dark:from-blue-600 dark:via-purple-400 dark:to-blue-600 md:text-5xl text-4xl font-bold pb-4">{title}</h1>
                <div className="flex flex-row justify-center">
                <p className="pt-0 pr-1 bg-clip-text text-gray-600 text-sm font-medium">{date}</p>
                <p className="pt-0 bg-clip-text text-gray-600 text-sm"> • </p>
                <p className="pt-0 pl-1 bg-clip-text text-gray-600 text-sm font-bold">{type}</p>
                </div>
            </div>
        </div>
    );
}
// pr-24 pl-24