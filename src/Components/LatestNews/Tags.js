import './LatestNews.css';

function Tags(props){
    console.log(props);
    return(
        <div className="d-flex tagp">
            {
                props.items.map((el,i) =>{
                    return <div className="text-white px-2 py-2 mx-1" style={{display:"flex",flexWrap: "wrap",flexDirection: "column"}}>{el.tags.split(",").map((el,i)=><span  className="bg-dark px-3 py-3 mb-3" style={{fontWeight:"bold",fontSize:"1rem",fontFamily:"Lato"}}>{`${el} `}</span>)}</div>
                })
            }
        </div>
    );
}
export default Tags;