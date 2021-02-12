import React,{ Component } from "react";
import axios from "axios"
import './LatestNews.css';
import LatestPostCarousel from './LatestPostCarousel';
import PostSearch from './PostSearch';
import BlogCategorys from './BlogCategorys';
import Tags from './Tags';

class Readmorenews extends Component{
    constructor(props){
        super(props);
        this.state={
            postdata:[],
            postdataone:{},
            allitems:[],
            catdata:[],
         };
         this.arr=[];
         this.postall=[]
    }
  
  componentDidMount(){
    //one route
    axios.get(`https://newsbdbackend.herokuapp.com/post/showonecatpost/${this.props.location.pathname.split('/')[2]}`)
    .then(response => {
        console.log(response);
        this.setState({
            postdataone:response.data.onepost
        })
    })
    .catch();
    //second route
    axios.get(`https://newsbdbackend.herokuapp.com/post/showallpost/`)
    .then(response => {
        this.setState({
            allitems:response.data.postall
        })
    })
    .catch();
    //third route
    axios.get('https://newsbdbackend.herokuapp.com/category/allcatfindout/')
    .then(response => 
     this.setState({
         catdata:response.data.catdata
     }))
    .catch(); 
     //fourth route
     setTimeout(()=>{
        this.state.catdata.forEach((el,i) =>{
            axios.get(`https://newsbdbackend.herokuapp.com/post/catonefindoutname/${el.catname}`)
            .then(response =>{
                this.arr[i]=response.data.catdatalength
            })
            .catch(); 
         })
     },(2000))
  }

//   componentDidUpdate(){
//     console.log(this.state);
//     console.log(this.props.location.pathname.split('/')[2]);
//   }

  render (){ 
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 px-md-5 px-lg-5 px-sm-2 py-5 ">
                        <div> 
                            <h1 style={{color:"#e8af43",fontWeight:"bold",fontSize:"1.5rem",fontFamily:"Roboto Mono"}}>{this.state.postdataone.post_title}</h1>
                            <div className="thumnaila">
                                <div className="thumnaila-img">
                                    <img src={`https://newsbdbackend.herokuapp.com/image/postthumnail/${this.state.postdataone.thumbnail}`} className="thumnail-img" alt="poor connection"/>
                                    <h2 style={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"Roboto Mono",color:"#fff"}}>{this.state.postdataone.category_name}</h2>
                                </div>
                            </div>
                            <div className="thumnail-text">
                                <p>{`${this.state.postdataone.post_desc}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 px-sm-2 py-5">
                         <div className="postcarousel">
                             <h1 className="ml-md-1 ml-lg-1" style={{color:"#e8af43"}}>Latest News</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                              <LatestPostCarousel items={this.state.allitems.slice(0,3)}/>
                         </div>
                         <div className="searchpost my-2">
                             <h1 className="ml-md-1 ml-lg-1" style={{color:"#e8af43"}}>Blog Search</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                             <PostSearch />
                         </div>
                         <div className="blogcategory my-2">
                             <h1 className="ml-md-1 ml-lg-1" style={{color:"#e8af43"}}>Blog Categorys</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                             <BlogCategorys items={this.state.allitems} catdata={this.state.catdata} arr={this.arr}/>
                             <div className="category-line"></div>
                         </div>
                         <div className="tagname my-2">
                             <h1 className="text-black ml-md-1 ml-lg-1" style={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"Roboto Mono",color:"#e8af43"}}>Tags</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                             <Tags items={this.state.postdata}/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Readmorenews;