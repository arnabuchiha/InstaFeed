(this.webpackJsonptask=this.webpackJsonptask||[]).push([[0],{44:function(e,t,a){e.exports=a(87)},49:function(e,t,a){},75:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(40),r=a.n(c),s=(a(49),a(11)),i=a(12),l=a(14),u=a(13),m=a(15),h=a(43),p=a(9),d=(a(50),a(19));a(67);var f=new d.a,g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={access_token:"",user_id:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;if("error"!==t){var a=new FormData;a.append("client_id","606162323513468"),a.append("client_secret","3fa0dc9ddd7c97bcca188589ca8699b5"),a.append("code",t),a.append("grant_type","authorization_code"),a.append("redirect_uri","https://getauthcode.herokuapp.com/"),fetch("https://cors-anywhere.herokuapp.com/https://api.instagram.com/oauth/access_token",{method:"POST",body:a}).then((function(e){return e.json()})).then((function(t){console.log(t.access_token),console.log(t.user_id),void 0===t.access_token?console.log("wallah"):(f.set("auth",t.access_token,{path:"/"}),f.set("user_id",t.user_id,{path:"/"}),e.setState({access_token:t.access_token,user_id:t.user_id}))})).catch((function(e){console.log(e)}))}}},{key:"render",value:function(){return void 0!==f.get("auth")?o.a.createElement(p.a,{to:{pathname:"/Home",state:{access_token:f.get("auth"),user_id:f.get("user_id")}}}):o.a.createElement("div",null,o.a.createElement("div",{className:"bgimage"},o.a.createElement("div",{className:"demo"},o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"login__check"}),o.a.createElement("h1",{className:"quote"},"INSTAFEED"),o.a.createElement("div",{className:"insta-default"},o.a.createElement("a",{href:"https://www.instagram.com/oauth/authorize?app_id=606162323513468&redirect_uri=https://getauthcode.herokuapp.com/&scope=user_profile&response_type=code",className:"insta-default"},"Log in with Instagram ",o.a.createElement("i",{className:"fa fa-instagram"})))))))}}]),t}(n.Component),b=(a(75),a(76),a(25)),v=a(18),_=a.n(v),E=function(e){e.id,e.caption;var t=e.url;return o.a.createElement("div",{className:"gallery-item"},o.a.createElement("img",{className:"gallery-image",alt:"robots",src:t}))},k=function(e){var t=e.feeds,a=t.map((function(e,a){return o.a.createElement(E,{key:a,caption:t[a].caption,url:t[a].media_url})}));return o.a.createElement("div",{className:"gallery"},a)},y={apiKey:"AIzaSyBuJLJriIhButPyy23i4m-86hPX0olBSVU",authDomain:"socialid-2635e.firebaseapp.com",databaseURL:"https://socialid-2635e.firebaseio.com",projectId:"socialid-2635e",storageBucket:"socialid-2635e.appspot.com",messagingSenderId:"351410421087",appId:"1:351410421087:web:5af105d130aadb62c88aea",measurementId:"G-TSFEHLH89F"},j=new d.a,w=function(e){j.remove("auth"),j.remove("user_id"),window.location.replace("http://localhost:3000")},O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).writeUserData=function(e){_.a.database().ref("/").set(e),console.log("DATA SAVED")},_.a.initializeApp(y),e.state={username:"",urls:[]},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.writeUserData("hello");var t="https://graph.instagram.com/"+j.get("user_id")+"?fields=username&access_token="+j.get("auth");fetch(t,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.writeUserData(t.username),e.setState({username:t.username})})).catch((function(e){console.log(e),alert("Reload Once to fix")}));var a="https://graph.instagram.com/"+j.get("user_id")+"/media?access_token="+j.get("auth");fetch(a,{method:"get"}).then((function(e){return e.json()})).then((function(t){console.log(t.data),t.data.map((function(t){var a="https://graph.instagram.com/"+t.id+"/?fields=media_url,caption&access_token="+j.get("auth");fetch(a,{method:"get"}).then((function(e){return e.json()})).then((function(t){e.setState({urls:[].concat(Object(b.a)(e.state.urls),[t])}),_.a.database().ref("/"+e.state.username).push(t)}))}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(this.state.urls),o.a.createElement("div",null,o.a.createElement("div",{className:"banner"},o.a.createElement("button",{onClick:w,className:"btn btn-primary btn-lg pull-right",style:{float:"right",marginRight:"40px",marginTop:"40px"}},"Sign Out")),o.a.createElement(k,{feeds:this.state.urls}))}}]),t}(n.Component),N=new d.a,S=function(e){N.remove("auth"),N.remove("user_id"),window.location.replace("http://localhost:3000/")},D=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={username:"",urls:[]},_.a.initializeApp(y),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.database().ref("/"+this.props.match.params.id).on("value",(function(t){t.forEach((function(t){console.log(t.val().media_url),e.setState({urls:[].concat(Object(b.a)(e.state.urls),[t.val()])})}))}))}},{key:"render",value:function(){return console.log(this.state.urls),o.a.createElement("div",null,o.a.createElement("div",{className:"banner"},o.a.createElement("button",{onClick:S,className:"btn btn-primary btn-lg pull-right",style:{float:"right",marginRight:"40px",marginTop:"40px"}},"Home")),o.a.createElement(k,{feeds:this.state.urls}))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(p.b,{exact:!0,path:"/code/:id",component:g}),o.a.createElement(p.b,{exact:!0,path:"/",component:g}),o.a.createElement(p.b,{exact:!0,path:"/Home",component:O}),o.a.createElement(p.b,{exact:!0,path:"/user/:id",component:D}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.a425799d.chunk.js.map