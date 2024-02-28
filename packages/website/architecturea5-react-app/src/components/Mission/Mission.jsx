export default function Mission(props) {
    return (
        <div className="border-red px-4 bg-gray-200 w-80 rounded-lg">
            <div className="flex flex-wrap justify-center items-center">
                <img src={props.url} className="w-full h-52 object-cover object-center rounded-lg my-4" alt="Mission" />
                <div className="content">
                    <h2 className="text-xl font-bold text-center mb-4">{props.title}</h2>
                    <p className="m-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum doloribus suscipit pariatur quibusdam?</p>
                    <div className="flex justify-center">
                        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">See details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}