(this.webpackJsonpblogme=this.webpackJsonpblogme||[]).push([[0],{15:function(e,t,n){e.exports={Container:"Post_Container__j8amJ",Title:"Post_Title__1h0Jz",Content:"Post_Content__HNm10"}},173:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(17),o=n.n(i),r=(n(73),n(14)),l=n(53),j=n(54),d=n(13),u=n(67),b=n(66),h=n(4),x=n(7),O=n.n(x),p=n(55),g=n.n(p),m=function(e){return Object(c.jsx)("a",{href:e.link,style:{color:e.color,backgroundColor:e.bgcolor},className:g.a.Button,onClick:e.clicked,children:e.text})},v=n(56),f=n.n(v),_=function(e){return Object(c.jsx)("div",{className:f.a.delete,onClick:e.clicked,children:"X"})},N=n(57),D=n.n(N).a.create({baseURL:"https://blog-me-567ca-default-rtdb.europe-west1.firebasedatabase.app/"}),k=function(e){var t=e.jsondata,n=Object(a.useState)(0),s=Object(h.a)(n,2),i=s[0],o=s[1],r=Object(a.useState)(3),l=Object(h.a)(r,2),j=l[0],d=l[1],u=Object(a.useState)(!1),b=Object(h.a)(u,2),x=b[0],p=b[1],g=Object(a.useState)(""),v=Object(h.a)(g,2),f=v[0],N=v[1],k=Object(a.useState)(null),C=Object(h.a)(k,2),P=C[0],S=C[1],y=t.slice(i,j).sort((function(e,t){return e.date>t.date?-1:t.date>e.date?1:0})).map((function(t,n){return Object(c.jsxs)("div",{className:O.a.Posts,onClick:function(){return e.clickedBlog(n+i)},children:[Object(c.jsx)(_,{clicked:function(){p(!0),S(t.eachId)}}),x&&P===t.eachId?Object(c.jsxs)("form",{className:O.a.DeleteForm,onSubmit:function(){return F(t.eachId)},children:[Object(c.jsx)("input",{type:"password",placeholder:"Delete Password",value:f,onChange:function(e){return N(e.target.value)}}),Object(c.jsx)("button",{className:O.a.Button,children:"Delete Post"})]}):null,Object(c.jsx)("div",{className:O.a.Title,children:Object(c.jsx)("h3",{children:t.title})}),Object(c.jsxs)("p",{children:[t.content.slice(0,120),"..."]}),Object(c.jsx)("div",{className:O.a.Author,children:Object(c.jsx)("p",{children:t.author})}),Object(c.jsx)("div",{className:O.a.Dates,children:Object(c.jsx)("p",{children:t.date})})]},n)})),F=function(t){"delete-post123"===f?(D.delete("/final-posts/"+t+".json"),e.update(!0),p(!1)):alert("Incorrect Delete Password. Try again!")},B=function(e,n,c){var a,s;e<=0&&"prev"===c?(a=0,s=3):n>=t.length&&"next"===c||e===t.length-3&&"next"===c?(a=e,s=n):"next"===c?(a=e+=3,s=n+=3):"prev"===c?(a=e-=3,s=n-=3):alert("error!"),o(a),d(s)};return Object(c.jsxs)("div",{className:O.a.List,children:[Object(c.jsx)("div",{className:O.a.Header,children:Object(c.jsx)("h1",{children:"Previous Posts"})}),y,Object(c.jsxs)("div",{className:O.a.PostBtns,children:[Object(c.jsx)("p",{children:"Page ".concat(parseInt(j/3)," / ").concat(Math.ceil(t.length/3))}),Object(c.jsx)(m,{text:"Previous",clicked:function(){return B(i,j,"prev")},color:"#EFC9AF",bgcolor:"#1F8AC0"}),Object(c.jsx)(m,{text:"Next",clicked:function(){return B(i,j,"next")},color:"#EFC9AF",bgcolor:"#1F8AC0"})]})]})},C=n(15),P=n.n(C),S=n(58),y=n.n(S),F=function(e){var t,n=e.curpost;return Object(c.jsxs)("div",{className:P.a.Container,children:[n.isImage?Object(c.jsx)("img",{src:n.image,alt:"image"+n.author}):null,Object(c.jsx)("div",{className:P.a.Title,children:Object(c.jsx)("h1",{children:n.title})}),Object(c.jsx)("div",{className:P.a.Author,children:Object(c.jsx)("p",{children:n.author})}),Object(c.jsx)("div",{className:P.a.Date,children:Object(c.jsx)("p",{children:n.date})}),Object(c.jsx)("div",{className:P.a.Content,children:(t=n.content,Object(c.jsx)(y.a,{children:t}))})]})},B=n.p+"static/media/logo.9d48d124.png",w=n(59),A=n.n(w),U=n(60),H=n.n(U),z=function(e){return Object(c.jsx)("a",{href:e.link,className:H.a.Button,onClick:e.clicked,style:{color:e.color,backgroundColor:e.bgcolor},children:e.text})},I=function(e){return Object(c.jsxs)("div",{className:A.a.Logo,children:[Object(c.jsx)("img",{src:B,alt:"logo"}),Object(c.jsx)(z,{link:"#new-form",text:"New Post",color:"#104C91",bgcolor:"#EFC9AF"})]})},L=n(6),T=n.n(L),E=n(61),M=n.n(E),R=n(62),q=n.n(R),J=function(){return Object(c.jsx)("div",{className:q.a.loader,children:"Loading..."})},X=n(63),V=n.n(X),W=function(e){var t=Object(a.useState)(""),n=Object(h.a)(t,2),i=n[0],o=n[1],l=Object(a.useState)(""),j=Object(h.a)(l,2),d=j[0],u=j[1],b=Object(a.useState)(""),x=Object(h.a)(b,2),O=x[0],p=x[1],g=Object(a.useState)(!1),m=Object(h.a)(g,2),v=m[0],f=m[1],_=Object(a.useState)(!1),N=Object(h.a)(_,2),k=N[0],C=N[1],P=Object(a.useState)([]),S=Object(h.a)(P,2),y=S[0],F=S[1],B=Object(a.useState)(!1),w=Object(h.a)(B,2),A=w[0],U=w[1],H=Object(a.useState)(!1),I=Object(h.a)(H,2),L=I[0],T=I[1],E=Object(a.useState)("Max file size: 5mb, accepted: jpg, jpeg, png, gif"),R=Object(h.a)(E,2),q=R[0],X=R[1];return Object(c.jsx)(s.a.Fragment,{children:v?Object(c.jsx)(J,{}):Object(c.jsx)("div",{id:"new-form",children:Object(c.jsxs)("div",{className:M.a.Form,children:[Object(c.jsx)("h1",{children:"New Post"}),A?Object(c.jsx)("p",{style:{fontSize:"1.2rem",color:"maroon"},children:"Thanks for posting! Please see your post above"}):null,k?Object(c.jsx)("p",{style:{color:"red"},children:"Please dont leave any fields blank!"}):null,Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Author Name"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{id:"textinput",name:"textinput",type:"text",value:i,onChange:function(e){return o(e.target.value)},required:!0})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Blog Title"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{id:"textinput",name:"textinput",type:"text",value:d,onChange:function(e){return u(e.target.value)},required:!0})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"Blog Content"}),Object(c.jsxs)("p",{children:["This text box uses markdown. Check ",Object(c.jsx)("a",{target:"_blank",href:"https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf",children:"this link"})," for more information."]}),Object(c.jsx)("div",{children:Object(c.jsx)("textarea",{id:"textarea",name:"textarea",value:O,onChange:function(e){return p(e.target.value)},required:!0})})]}),Object(c.jsxs)("div",{style:{margin:"10px 200px"},children:[Object(c.jsx)("label",{children:"Add a photo"}),Object(c.jsx)(V.a,Object(r.a)(Object(r.a)({},e),{},{withIcon:!0,onChange:function(e){var t=new FileReader;t.readAsDataURL(e[0]);t.onloadend=function(n){F(t.result),X(e[0].name),T(!0)}},imgExtension:[".jpg",".jpeg",".gif",".png",".gif"],maxFileSize:5242880,fileContainerStyle:{backgroundColor:"#EFC9AF",color:"#104C91"},label:q,singleImage:!0,labelStyles:{fontSize:"1rem"}}))]}),Object(c.jsx)("div",{children:Object(c.jsx)(z,{text:"Post Blog",clicked:function(){f(!0);var t=new Date,n=t.getFullYear(),c=t.getMonth()+1,a=t.getDate(),s="".concat(a,"/").concat(c,"/").concat(n),r={title:d,author:i,content:O,date:s,image:y,isImage:L};""!==r.title&&""!==r.author&&""!==r.content?D.post("/test-blog-post.json",r).then((function(t){console.log("Success"),e.update(!0),f(!1),C(!1),U(!0),X("Max file size: 5mb, accepted: jpg, jpeg, png, gif"),o(""),u(""),p(""),F([]),T(!1)})).catch((function(e){alert(e)})):(f(!1),C(!0))},color:"#104C91",bgcolor:"#EFC9AF"})})]})]})})})},Y=n(64),Z=n.n(Y),K=function(){return Object(c.jsx)("div",{className:Z.a.footer,children:Object(c.jsx)("p",{children:"Created by Damon Roberts."})})},Q=n(65),G=n.n(Q),$=function(e){return Object(c.jsxs)("div",{className:G.a.Null,children:[Object(c.jsx)("h1",{style:{fontSize:e.size},children:e.header}),Object(c.jsx)("p",{children:e.paragraph})]})},ee=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={chosen:null,data:null,spinner:!1,shouldUpdate:!1},e.clickedBlog=e.clickedBlog.bind(Object(d.a)(e)),e.getData=e.getData.bind(Object(d.a)(e)),e.changeUpdate=e.changeUpdate.bind(Object(d.a)(e)),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(){if(this.state.shouldUpdate){for(var e=1;e<3;e++)this.getData();console.log("updated!"),this.changeUpdate(!1)}}},{key:"getData",value:function(){var e=this;this.setState({spinner:!0});var t=[];D.get("/final-posts.json").then((function(e){for(var n in e.data)t.push(Object(r.a)(Object(r.a)({},e.data[n]),{},{eachId:n}))})).then((function(){0!==t.length?e.setState({data:t,chosen:t[0],spinner:!1}):e.setState({data:null,chosen:null,spinner:!1})})).catch((function(t){e.setState({spinner:!1}),alert(t)}))}},{key:"clickedBlog",value:function(e){var t=this.state.data.find((function(t,n){return e===n}));this.setState({chosen:t})}},{key:"changeUpdate",value:function(e){this.setState({shouldUpdate:e})}},{key:"render",value:function(){var e=this.state.spinner,t=Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("div",{className:T.a.Div1,children:Object(c.jsx)(I,{})}),Object(c.jsx)("div",{className:T.a.Div2,children:e?Object(c.jsx)(J,{}):Object(c.jsx)($,{header:"Currently no posts to show!",paragraph:"Please add a post below",size:"4rem"})}),Object(c.jsx)("div",{className:T.a.Div3,children:e?Object(c.jsx)(J,{}):Object(c.jsx)($,{header:"Previous Posts",paragraph:"No posts yet",size:"3rem"})}),Object(c.jsx)("div",{className:T.a.Div4,children:Object(c.jsx)(W,{update:this.changeUpdate})}),Object(c.jsx)("div",{className:T.a.Div5,children:Object(c.jsx)(K,{})})]});return null!==this.state.data&&(t=Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("div",{className:T.a.Div1,children:Object(c.jsx)(I,{})}),Object(c.jsx)("div",{className:T.a.Div2,children:e?Object(c.jsx)(J,{}):Object(c.jsx)(F,{curpost:this.state.chosen})}),Object(c.jsx)("div",{className:T.a.Div3,children:e?Object(c.jsx)(J,{}):Object(c.jsx)(k,{jsondata:this.state.data,clickedBlog:this.clickedBlog,update:this.changeUpdate})}),Object(c.jsx)("div",{className:T.a.Div4,children:Object(c.jsx)(W,{update:this.changeUpdate})}),Object(c.jsx)("div",{className:T.a.Div5,children:Object(c.jsx)(K,{})})]})),Object(c.jsx)("div",{className:T.a.Container,children:t})}}]),n}(a.Component);var te=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(ee,{})})};o.a.render(Object(c.jsx)(te,{}),document.getElementById("root"))},55:function(e,t,n){e.exports={Button:"Small-Btn_Button__3hSX2"}},56:function(e,t,n){e.exports={delete:"Delete_delete__1kUr2"}},59:function(e,t,n){e.exports={Logo:"Logo_Logo__yqy_8"}},6:function(e,t,n){e.exports={Container:"Home_Container__1m5fH",Div1:"Home_Div1__Fg-5D",Div2:"Home_Div2__fREV_",Div3:"Home_Div3__2O5Ma",Div4:"Home_Div4__R_LDH",Div5:"Home_Div5__ZxaSj"}},60:function(e,t,n){e.exports={Button:"Btn_Button__3okrS"}},61:function(e,t,n){e.exports={Form:"Form_Form__1M8j1"}},62:function(e,t,n){e.exports={loader:"spinner_loader__2Qt0c",load1:"spinner_load1__r1WgO"}},64:function(e,t,n){e.exports={footer:"footer_footer__ccZ9e"}},65:function(e,t,n){e.exports={Null:"np1_Null__2beR9"}},7:function(e,t,n){e.exports={List:"Posts_List__J-OH8",Header:"Posts_Header__3fu_z",Posts:"Posts_Posts__1WzNp",Title:"Posts_Title__2e5Cm",Author:"Posts_Author__1Chgn",Dates:"Posts_Dates__p7XNk",PostBtns:"Posts_PostBtns__1NYxq",DeleteForm:"Posts_DeleteForm__c0EpV",Button:"Posts_Button__3Kx9P"}},73:function(e,t,n){}},[[173,1,2]]]);
//# sourceMappingURL=main.69a77774.chunk.js.map