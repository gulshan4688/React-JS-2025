import { useState } from "react";
import { useDispatch } from "react-redux"
import { setQuery } from "../Redux/features/seachSlice";

const SearchBar = () => {

    const [text, setText] = useState('');
    const disPatch = useDispatch();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        disPatch(setQuery(text));
        setText('');
    }
    return (
        <div>
            <form onSubmit={(e) => handleFormSubmit(e)} className="flex gap-5 p-10 bg-blue-300 text-shadow-amber-100" >
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
