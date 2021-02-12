import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import './Comments.css';


const ViewComments= (props) =>{
   setTimeout(()=>{
    document.querySelector('.commentform').addEventListener('submit',e=>{
         e.preventDefault();
         const email=document.getElementById('exampleEmail').value;
         const name=document.getElementById('examplename').value;
         const comdesc=document.getElementById('exampledesc').value;
         const url='https://newsbdbackend.herokuapp.com/comments/addusercomments/';
         const data={
            email,
            name,
            comdesc
        };
        const res=axios.post(url,data)
        .then((result)=>{
            document.getElementById('exampleEmail').value="";
            document.getElementById('examplename').value="";
            document.getElementById('exampledesc').value="";
        }).catch((err)=>{
            
        })
    });
   },2000);


    return (
        <div className="bgcommentsection">
            <div className="container py-5 commentssection">
                <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                        {
                            props.comments.map((el,i)=>{
                                if(i <=2){
                                    return (
                                    <div className="row my-3" id={`secondcomrow${i}`}>
                                        <div className="col-2" style={{position:"relative"}}>
                                            <div className="commentsicon"><i class="fas fa-user-check"></i></div>
                                        </div>
                                            <div className="col-10">
                                                <div className="row usercomdesc" id={`secondcom${i}`}>
                                                    <div className="col-8 px-0">
                                                        <h5>{el.name}</h5>
                                                    </div>
                                                    <div className="col-4">
                                                        <p>{el.comdat.split('T')[0]}</p>
                                                    </div>
                                                    <p>{el.comdesc}</p>
                                                </div>
                                            </div>
                                    </div>
                                )
                                }
                            })
                        }
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="commentpost">
                        <h1 className="text-black ml-md-1 ml-lg-1">Post Your Comments</h1>
                        <div className="horizontal-line ml-md-1 ml-lg-1 my-2"></div>
                        <Form className="commentform">
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" required/>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="examplename">Name</Label>
                                    <Input type="text" name="name" id="examplename" placeholder="Name" required/>
                                </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampledesc">Desccription</Label>
                                <Input type="textarea" name="text" id="exampledesc" placeholder="Your Comments Here"/>
                        </FormGroup>
                            <Button className="text-white cmntbtn" style={{fontFamily:"Roboto Mono",backgroundColor:"#e78f12",border:"1px solid #e78f12",fontWeight:"bold"}}>Submit</Button>
                        </Form>
                        </div>
                </div>
                </div>
            </div>
        </div>  
    );
}
export default ViewComments;