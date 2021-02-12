import { Component } from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import PostHome from './../Posthome/Posthome';
import LatestNews from './../LatestNews/LatestNews';
import ViewComments from './../Comments/ViewComments';
import Readmorenews from './../LatestNews/Readmorenews';
import Category from './../LatestNews/Category';
import './Main.css'

class Main extends Component{
    state={
        catdata:[],
        comments:[]
    }
   componentDidMount(){
        //one route
        axios.get('https://newsbdbackend.herokuapp.com/category/allcatfindout/')
        .then(response => 
         this.setState({
             catdata:response.data.catdata
         }))
        .catch();
        //second route
        axios.get(`https://newsbdbackend.herokuapp.com/comments/viewuserallcomments/`)
        .then(response => {
            this.setState({
                comments:response.data.commentsall
            })
        })
        .catch();
    }

    render(){
        let routes =(
            <Switch>
                 <Route exact path="/" component={LatestNews} />
                 <Route exact path="/:id" component={LatestNews} />
                 <Route exact path="/readmore/:id" component={Readmorenews} />
                 <Route exact path="/catdescription/:id" component={Category} />
            </Switch>
         )
        return (
            <div> 
                 <Header categoryitems={this.state.catdata}/>
                 <PostHome />
                 {routes}
                 <ViewComments comments={this.state.comments}/>
                 <Footer />
            </div>
        );
    }
}
export default Main;