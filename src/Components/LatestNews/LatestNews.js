import React,{ Component } from "react";
import axios from "axios"
import './LatestNews.css';
import { ListGroup, ListGroupItem,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import LatestPostCarousel from './LatestPostCarousel';
import PostSearch from './PostSearch';
import BlogCategorys from './BlogCategorys';
import Tags from './Tags';

class LatestNews extends Component{
    constructor(props){
        super(props);
        this.state={
            postdata:[],
            allitems:[],
            catdata:[],
            //searchpost:[]
         };
         this.arr=[];
         this.postall=[];
    }
  
  componentDidMount(){
    //one route
    axios.get(`https://newsbdbackend.herokuapp.com/post/showallpost/`)
    .then(response => {
        this.setState({
            allitems:response.data.postall
        })
    })
    .catch();

    //second route

    axios.get('https://newsbdbackend.herokuapp.com/category/allcatfindout/')
    .then(response => 
     this.setState({
         catdata:response.data.catdata
     }))
    .catch(); 
    //third route
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

  changeState =() => {
    axios.get(`https://newsbdbackend.herokuapp.com/post/showspecificcatpost/${this.props.location.pathname.split('/')[1]}`)
    .then(response => {
        this.setState({
            postdata:response.data.onepost
        })
    })
    .catch();
  }


  render (){ 
    let postarr=[]; 
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div class="col-sm-12 col-md-8 col-lg-8 px-md-5 px-lg-5 px-sm-2 py-5 ">
                        <Button className="bg-light my-3 text-dark" onClick={this.changeState}>Change News</Button>
                         {
                            this.state.postdata.map(el =>{
                                postarr=el.post_desc.split(" ",10);
                                if(this.state.postdata.length === 0){
                                    return "";
                                }
                                else if(this.state.postdata.length !== 0){
                                    return (
                                        <div> 
                                            <div className="thumnaila">
                                                <div className="thumnaila-img">
                                                    <img src={`https://newsbdbackend.herokuapp.com/image/postthumnail/${el.thumbnail}`} className="thumnail-img" alt="poor connection"/>
                                                    <h2 style={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"Roboto Mono",color:"#fff"}}>{el.category_name}</h2>
                                                </div>
                                            </div>
                                            <div className="thumnail-text">
                                                <h1 style={{color:"#e8af43"}}>{el.post_title}</h1>
                                                <p>{postarr.map((element,i)=><span>{`${element} `}</span>)}...</p>                
                                                <div className="row">
                                                    <div className="col-8">
                                                    <ListGroup horizontal>
                                                            <ListGroupItem tag="p"><i className="fas fa-calendar-week"></i> {el.post_date.split("T")[0]}</ListGroupItem>
                                                            <ListGroupItem tag="p"><i className="fas fa-user-alt"></i> {el.author_name}</ListGroupItem>
                                                    </ListGroup>
                                                    </div>
                                                    <div className="col-4">
                                                        <Link to={`/readmore/${el._id}`} color="success" className="btn" size="lg" style={{fontFamily:"Lato", fontSize:"1rem", color:"#222",fontWeight: 700}}>Read More<i className="fas fa-angle-double-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                         }
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
                             <PostSearch handlepostsearch={this.handlepostsearch}/>
                         </div>
                         <div className="blogcategory my-2">
                             <h1 className="ml-md-1 ml-lg-1" style={{color:"#e8af43"}}>Blog Categorys</h1>
                             <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                             <BlogCategorys items={this.state.allitems} catdata={this.state.catdata} arr={this.arr}/>
                             <div className="category-line"></div>
                         </div>
                         <div className="tagname my-2">
                             <h1 className="ml-md-1 ml-lg-1" style={{fontWeight:"bold",fontSize:"1.5rem",fontFamily:"Roboto Mono",color:"#e8af43"}}>Tags</h1>
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
export default LatestNews;