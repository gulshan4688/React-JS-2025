import { useState } from "react";
import { useDispatch } from "react-redux"

const SearchBar = () => {

    const [text, setText] = useState('Iron Man 💝');
    const disPatch = useDispatch();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log("form submitted with ", text);
        disPatch(setQuery(text));
        setText('');
    }
    return (
        <div>
            <form onSubmit={(e) => handleFormSubmit(e)} className="flex gap-5 p-10 bg-blue-950 " >
                <input
                    value={text}
                    onChange={(text) => {
                        setText(text.target.value);
                    }}
                    required
                    className="border-2 px-4 py-2 text-xl w-full rounded outline-none "
                    type="text"
                    placeholder="search" />
                <button className="active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none "  >search</button>
            </form>
        </div>
    )
}

export default SearchBar
