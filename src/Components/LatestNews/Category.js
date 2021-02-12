import React,{ Component } from "react";
import axios from "axios"
import './LatestNews.css';
import LatestPostCarousel from './LatestPostCarousel';
import PostSearch from './PostSearch';
import BlogCategorys from './BlogCategorys';
import Tags from './Tags';

class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            postdata:[],
            allitems:[],
            catdata:[],
            searchpost:[]
         };
         this.arr=[];
         this.postall=[];
    }
  
  componentDidMount(){
    //one route
    axios.get(`https://newsbdbackend.herokuapp.com/category/findoutcatname/${this.props.location.pathname.split('/')[2]}`)
    .then((res)=>{
        this.setState({
          searchpost:res.data.onecat
        });
    })
    .catch((err)=>{
       // console.log(err);
    })
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

  handlepostsearch =(search) =>{
      axios.get(`https://newsbdbackend.herokuapp.com/category/findoutcatname/${search}`)
      .then((res)=>{
          this.setState({
            searchpost:res.data.onecat
          });
      })
      .catch((err)=>{
          //console.log(err);
      })
  }
  componentDidUpdate(){
    //console.log(this.state);
  }

  render (){ 
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 px-md-5 px-lg-5 px-sm-2 py-5 ">
                         {
                             this.state.searchpost.map(el =>{
                                 return (
                                    <div style={{height:"100%",backgroundColor:"#222",padding:"3rem"}}>
                                        <div>
                                            <h1 style={{fontFamily:"Roboto Mono",color:"#e8af43",fontSize:"1.5rem",fontWeight:"700"}}>Thank you for searching</h1>
                                        </div>
                                        <div>
                                            <h3 style={{fontFamily:"Roboto Mono",color:"#fff",fontSize:"1.5rem",fontWeight:"700"}}>{el.catname}</h3>
                                            <h6 style={{color:"#fff",fontSize:"0.8rem"}}>{el.catdat}</h6>
                                            <p style={{fontFamily:"Lato",color:"#fff",fontSize:"1rem"}}>{el.catdes}</p>
                                        </div>
                                    </div>
                                 )
                             })
                         }
                    </div>  
                    <div className="col-sm-12 col-md-4 col-lg-4 px-sm-2 py-5">
                         <div className="postcarousel">
                             <h1 className="text-black ml-md-1 ml-lg-1">Latest News</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                              <LatestPostCarousel items={this.state.allitems.slice(0,3)}/>
                         </div>
                         <div className="searchpost my-2">
                             <h1 className="text-black ml-md-1 ml-lg-1">Blog Search</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                             <PostSearch handlepostsearch={this.handlepostsearch}/>
                         </div>
                         <div className="blogcategory my-2">
                             <h1 className="text-black ml-md-1 ml-lg-1">Blog Categorys</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                             <BlogCategorys items={this.state.allitems} catdata={this.state.catdata} arr={this.arr}/>
                             <div className="category-line"></div>
                         </div>
                         <div className="tagname my-2">
                             <h1 className="text-black ml-md-1 ml-lg-1" style={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"Roboto Mono",color:"#222"}}>Tags</h1>
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
export default Category;