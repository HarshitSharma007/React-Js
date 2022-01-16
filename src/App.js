import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import Selector from './components/Seclector';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setppp] = useState(10);
  const [search,setSearch]=useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setPosts2(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);
const handleChange=(e)=>{
  setSearch(e.target.value)
}
const filterResults=()=>{
  
  const t=(posts.filter((elem)=>{
    if(elem.title.includes(search)){
      return true;
    }
    else{ return false;}
  }))
  setPosts2(t);

}
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts2.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className=' mb-3 text-center'>This is your blog feed
      
      
           
             
             
            </h1>
            <div className="header">
            <span className="search" >
            <button onClick={filterResults} >
           <SearchIcon />
           </button>  

            <input type ="text" onChange={handleChange}/>
            </span>
            <Selector  setppp={setppp}/>
            </div>
            
            
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts2.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;




