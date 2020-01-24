import React,{Component} from 'react';
import Firebase from 'firebase';
import config from '../config';
import Cookies from 'universal-cookie';
import CardList from '../CardList';

const cookies = new Cookies();
const signOut=(e)=>{
    cookies.remove("auth");
    cookies.remove("user_id");
    window.location.replace("http://localhost:3000/");
}

class UserPage extends Component{
    
    constructor(){
        super()
        this.state={
            username:'',
            urls:[]
        }
        Firebase.initializeApp(config);
    }
    componentDidMount(){
        let ref=Firebase.database().ref("/"+this.props.match.params.id);
        ref.on("value",snapshot=>{
            snapshot.forEach(url=>{
                console.log(url.val().media_url);
                this.setState({
                    urls:[...this.state.urls,url.val()]
                })
            })
            // console.group(state);
        });
    }
    render(){
        console.log(this.state.urls)
        return(
            <div>
                <div className="banner">
                    <button onClick={signOut} className="btn btn-primary btn-lg pull-right" style={{float:"right",marginRight:"40px",marginTop:"40px"}}>Home</button>
                </div>
                <CardList feeds={this.state.urls}/>
            </div>
        )
    }
}
export default UserPage;