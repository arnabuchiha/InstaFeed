import React, { Component } from 'react'
import Axios from 'axios';
import {Redirect} from 'react-router'
import Cookies from 'universal-cookie';

import InstagramLogin from "react-instagram-oauth";
function onLogin(){
  
}
const cookies = new Cookies();
class Login extends Component{
  state={
    access_token:"",
    user_id:""
  }
  
  componentDidMount(){
    
    const id=this.props.match.params.id;
    // console.log(id)
    if(id!=="error"){
      const formData=new FormData();
      formData.append("client_id","606162323513468");
      formData.append("client_secret","3fa0dc9ddd7c97bcca188589ca8699b5");
      formData.append("code",id);
      formData.append("grant_type","authorization_code");
      formData.append("redirect_uri","https://getauthcode.herokuapp.com/");
      
      fetch('https://cors-anywhere.herokuapp.com/https://api.instagram.com/oauth/access_token',{
        method:'POST',
        body:formData
      }).then((res)=>res.json())
      .then(data=>{
        console.log(data.access_token);
        console.log(data.user_id)
        if(data.access_token===undefined){
          //Cookie setting stuff  
          console.log("wallah")        
        }
        else{
          cookies.set('auth',data.access_token,{ path: '/' });
          cookies.set('user_id',data.user_id,{ path: '/' });
          this.setState({
            access_token:data.access_token,
            user_id:data.user_id
          })
        }
      })
      .catch((err) => {
          console.log(err)
      });
    }

  }
  render(){
    const authHandler = (err, data) => {
      console.log(err, data);
    };
    if(cookies.get('auth')!==undefined){
      return <Redirect to={{
        pathname:"/Home",
        state:{
          access_token:cookies.get('auth'),
          user_id:cookies.get('user_id')
        }
      }}/>
    }
    else
    return(
      <div >
        <div className="bgimage">
        <div className="demo">
          <div className="login">
            <div className="login__check"></div>
            <h1 className="quote">INSTAFEED</h1>
            <div className="insta-default">
              <a href="https://www.instagram.com/oauth/authorize?app_id=606162323513468&redirect_uri=https://getauthcode.herokuapp.com/&scope=user_profile&response_type=code" className="insta-default">Log in with Instagram <i className="fa fa-instagram"></i></a>
            </div>
            {/* <button className="insta-default" onClick={()=>{window.location.href=''}}>LOGIN</button> */}
            </div>
        </div>
        </div>
    </div>
    )
  }
}

export default Login;