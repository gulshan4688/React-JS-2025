
const Show = ({ arr }) => {
    return (
        <div className='flex flex-wrap gap-y-4 ml-7 mt-3 w-900px ' >
            {
                arr.map((elem, idx) => {
                    return (
                        <div key={idx} className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300
                                                   mr-3 ">
                            <img
                                src={elem.download_url}
                                alt={elem.author}
                                className="w-85 h-56 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">{elem.author}</h2>
                                <p className="text-sm text-gray-500 mt-1">
                                    ID: {elem.id}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {elem.width} × {elem.height}
                                </p>
                                <a
                                    href={elem.url}
                                    target="_blank"
                                    className="inline-block mt-3 px-3 py-2 text-sm rounded-xl bg-black text-white hover:bg-gray-800 transition-colors">
                                    View Source
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Show