import axios from 'axios'
import Show from './components/Show';
import { useEffect, useState } from 'react';
import NoUserCard from './components/NoUserCard';
import Pagination from './components/Pagination';
import NoMorePages from './components/NoMorePages';

const App = () => {

  const [pictureArr, setPictureArr] = useState([]);
  const [index, setIndex] = useState(2);
  const getData = async () => {

    const pictureList = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);

    const a = pictureList.data;  // .data to prictureList convert it into an array 
    // const copyArr = [...a];   // we need this line only when we modify the data 
    setPictureArr(a);
  }

  useEffect(() => {
    getData();
  }, [index])

  const goPrev = () => {
    console.log("clicked prev");
    setIndex(index - 1);
  }
  const goNext = () => {
    console.log("clicked Next");
    setIndex(index + 1);
  }

  return (
    <div className='bg-black min-h-screen pl-2 pt-2 pr-0 mr-0 text-white  ' >
      <Pagination index={index} goPrev={goPrev} goNext={goNext} setPictureArr={setPictureArr} />
      {index <= 0 ? <NoMorePages /> : pictureArr.length === 0 ? <NoUserCard /> : <Show arr={pictureArr} />}
    </div>
  )
}

export default App;
