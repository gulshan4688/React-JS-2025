const NoUserCard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="max-w-sm w-full mx-4 bg-white/70 backdrop-blur-sm border border-gray-100 
                      shadow-md rounded-2xl p-6 text-center">

                <h2 className="text-lg font-semibold text-gray-800">
                    No user available
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Click Get Data  to fetch data.
                </p>
            </div>
        </div>
    );
};

export default NoUserCard;
