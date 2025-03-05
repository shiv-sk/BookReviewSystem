export default function Exp(){
    return(
        <div className="flex flex-col gap-6 p-4">
    {/* Book Information Section */}
    <div className="flex flex-col md:flex-row gap-6">
        {/* Book Cover */}
        <div className="w-full md:w-1/3">
            <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Book Cover"
                className="w-full rounded-lg"
            />
        </div>

        {/* Book Details */}
        <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold mb-2">Book Title</h1>
            <h4 className="text-lg text-gray-600 mb-4">By Author Name</h4>
            <p className="text-gray-700 mb-4">
                Description of the book goes here. This is a brief summary of what the book is about.
            </p>
            <p className="text-gray-600 mb-2"><strong>Genre:</strong> Fiction, Mystery</p>
            <p className="text-gray-600 mb-2"><strong>Published:</strong> 2023</p>
            <p className="text-gray-600"><strong>Average Rating:</strong> 4.2/5</p>
        </div>
    </div>

    {/* Review Input Section */}
    <div className="bg-gray-900 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Write a Review</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
                type="text"
                placeholder="Your review"
                className="w-full p-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <select
                className="w-full sm:w-1/3 p-2 border rounded focus:outline-none focus:border-blue-500"
            >
                <option disabled>Select rating</option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </div>
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Submit
        </button>
    </div>

    {/* Reviews Section */}
    <div className="space-y-4">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>

        {/* Single Review */}
        <div className="border-b pb-4">
            <div className="flex gap-3 mb-2">
                <img
                    src="https://i.pravatar.cc/42"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                />
                <div>
                    <p className="font-medium">Sophia Lee</p>
                    <p className="text-xs text-gray-500">Feb 16, 2025 at 5:00 PM</p>
                </div>
            </div>
            <p className="text-gray-700">
                Hooks have been a game changer for me. Thanks for breaking them down so clearly!
            </p>
            <p className="text-sm text-gray-600 mt-1"><strong>Rating:</strong> 4/5</p>
        </div>

        {/* Single Review */}
        <div className="border-b pb-4">
            <div className="flex gap-3 mb-2">
                <img
                    src="https://i.pravatar.cc/42"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                />
                <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">Jan 10, 2025 at 3:00 PM</p>
                </div>
            </div>
            <p className="text-gray-700">
                The book was good, but the ending felt rushed. I expected more from the author.
            </p>
            <p className="text-sm text-gray-600 mt-1"><strong>Rating:</strong> 3/5</p>
        </div>
    </div>
</div>
    )
}