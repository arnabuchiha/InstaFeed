import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Firebase from 'firebase'
import CardList from './CardList';
import config from './config';
// import Instafeed from 'instafeed.js'
const cookies = new Cookies();
const signOut=(e)=>{
    cookies.remove("auth");
    cookies.remove("user_id");
    window.location.replace("https://socialid-2635e.firebaseapp.com/");
}
const encode=(str)=>{
    return str.split(".").join(",")
}
class Home extends Component{
    constructor(){
        super()
        Firebase.initializeApp(config);
        this.state={
            username:'',
            urls:[]
        }
    }
    writeUserData = (data) => {
        Firebase.database()
          .ref("/")
          .child(data);
        console.log("DATA SAVED");
      };
    componentDidMount(){
        this.writeUserData("hello")
        const urlx=[];
        const usernameurl=`https://graph.instagram.com/`+cookies.get("user_id")+"?fields=username&access_token="+cookies.get("auth");
        fetch(usernameurl,{
            method:'get'
        }).then((res)=>res.json())
        .then(data=>{
            const username=encode(data.username);
            // this.writeUserData(username)
            // Firebase.database()
            // .ref("/")
            // .push(data.username);
            this.setState({
                username:username
            })
        }).catch(err=>{
            console.log(err)
            alert("Reload Once to fix")
        })
        const url=`https://graph.instagram.com/`+cookies.get("user_id")+"/media?access_token="+cookies.get("auth");
        fetch(url,{
            method:'get'
        }).then((res)=>res.json())
        .then(data=>{
            console.log(data.data)
            
            data.data.map(id=>{
                const mediaUrl=`https://graph.instagram.com/`+id.id+`/?fields=media_url,caption&access_token=`+cookies.get("auth");
                fetch(mediaUrl,{
                    method:'get'
                }).then((r)=>r.json())
                .then(rdata=>{
                    this.setState({
                        urls:[...this.state.urls,rdata]
                    })
                    Firebase.database()
                    .ref("/")
                    .child(this.state.username)
                    .child(rdata.id)
                    .set(rdata)
                    
                })

            })          
            
        }).catch(err=>{
            console.log(err)
            
        });
        
    }
    
    render(){
        // console.log(cookies.get('auth'));
        console.log(this.state.urls)
        return(
            <div>
                <div className="banner">
                    <button onClick={signOut}className="btn btn-primary btn-lg pull-right" style={{float:"right",marginRight:"40px",marginTop:"40px"}}>Sign Out</button>
                </div>
                <CardList feeds={this.state.urls}/>
            </div>
        )
    }
}
export default Home;