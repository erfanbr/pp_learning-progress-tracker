
export default function Home() {
    return (
        <>
            <div>Main Part</div>
            <div>
                <button type="button" className="btn btn-primary">
                    Custom Primary Button
                </button>
                <button type="submit"
                        className="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4
                        focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                        dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Add new product
                </button>
                <button type="submit"
                        className=" m-1.5 text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4
                        focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                        dark:bg-erfan-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Erfans button
                </button>
            </div>
            {/*<div><CourseStatusBadge label={"DONE"} color={"yellow"}/></div>*/}

        </>
    )
        ;
}
