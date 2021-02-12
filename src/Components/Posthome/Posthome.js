import './Posthome.css';
function PostHome(){
    return (
        <div className="posthome">
            <div class="container">
                <div className="row text-center">
                    <div className="col-12">
                        <div>
                            <h1 className="text-white" style={{fontFamily:"Lato", fontSize:"2rem"}}>Blog Page</h1>
                            <h6><span style={{color:"#cf6e3a",fontFamily:"Lato", fontSize:"1rem",fontWeight: 700}}>Home<i className="fas fa-angle-double-right"></i></span><span style={{color:"#fff",fontFamily:"Lato", fontSize:"1rem",fontWeight: 700}}> Blog</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostHome;