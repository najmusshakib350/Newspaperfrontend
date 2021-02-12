import './LatestNews.css';

function BlogCategorys(props){
    return(
        <div className="row">
             {
                 props.catdata.map((el,i) =>{
                     return (
                         <div className="col-12">
                              <div className="row">
                                <div className="col-1">
                                  <i class="fa fa-check" aria-hidden="true"></i>
                                </div>
                                <div className="col-9">
                                    <h6 className="text-black" style={{fontWeight:"bold",fontSize:"1rem",fontFamily:"Roboto Mono",color:"#222"}}>{el.catname}</h6>
                                </div>
                                <div className="col-2">
                                       <h6 className="text-black">{props.arr[i]}</h6>
                                </div>
                              </div>
                         </div>
                     )
                 })
             }
        </div>
    );
}

export default BlogCategorys;