import axios from 'axios'
import Show from './components/Show';
import { useEffect, useState } from 'react';
import NoUserCard from './components/NoUserCard';
import Pagination from './components/Pagination';

const App = () => {

  const [pictureArr, setPictureArr] = useState([]);

  const getData = async () => {
    console.log("data called");
    const pictureList = await axios.get('https://picsum.photos/v2/list?page=2&limit=12');
    console.log(pictureList.data);
    const a = pictureList.data;  // .data to prictureList convert it into an array 
    // const copyArr = [...a];   // we need this line only when we modify the data 
    setPictureArr(a);
  }

  useEffect(() => {
    getData();
  }, [pictureArr])

  return (
    <div className='bg-black min-h-screen pl-2 pt-2 pr-0 mr-0 text-white  ' >
      {pictureArr.length === 0 ? <NoUserCard /> : <Show arr={pictureArr} />}
      <Pagination />
    </div>
  )
}

export default App;
