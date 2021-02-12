import React, { useState } from 'react';
import './LatestNews.css';
import { Form, Input } from 'reactstrap';
import {NavLink } from 'react-router-dom';

function PostSearch(props){
    const [activeIndex, setActiveIndex] = useState("search");
    let changePostsearch=()=>{
        let search=document.querySelector("#searchfeild").value;
        setActiveIndex(search);
    }
   return(
       <div>
            <Form className="d-flex">
                <Input type="search" placeholder="Search" name="text" id="searchfeild" className="form-control me-2" onChange={() => changePostsearch()}/>
                <NavLink to={`/catdescription/${activeIndex}`} style={{color:"#fff",backgroundColor:"#e6b045", border:"1px solid #e6b045",fontFamily:"Roboto+Mono", fontSize:"1.2rem"}} >Search</NavLink>
           </Form>
       </div>
   );
}
export default PostSearch;