(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/img1.e9be7bf4.png"},function(e,a,t){e.exports=t.p+"static/media/img2.ec8e775a.png"},function(e,a,t){e.exports=t.p+"static/media/img3.402cd18c.png"},function(e,a,t){e.exports=t.p+"static/media/img4.fa61fdd6.png"},function(e,a,t){e.exports=t.p+"static/media/img5.24bc8582.png"},function(e,a,t){e.exports=t.p+"static/media/img6.a029a9a6.png"},function(e,a,t){e.exports=t.p+"static/media/img7.1f640f28.png"},function(e,a,t){e.exports=t.p+"static/media/img9.6182879d.png"},,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(14),r=t.n(c),s=(t(20),t(21),t(1)),m=t(2),o=t(4),l=t(3),u=t(5),g=t.n(u),d=t(6),p=t.n(d),h=t(7),f=t.n(h),b=t(8),v=t.n(b),k=t(9),E=t.n(k),w=t(10),y=t.n(w),A=t(11),N=t.n(A),j=t(12),O=t.n(j),x=[{id:1,name:"image1",pic:g.a},{id:2,name:"image2",pic:p.a},{id:3,name:"image3",pic:f.a},{id:4,name:"image4",pic:v.a},{id:5,name:"image5",pic:E.a},{id:6,name:"image6",pic:y.a},{id:7,name:"image7",pic:N.a},{id:8,name:"image8",pic:O.a},{id:1,name:"image1",pic:g.a},{id:2,name:"image2",pic:p.a},{id:3,name:"image3",pic:f.a},{id:4,name:"image4",pic:v.a},{id:5,name:"image5",pic:E.a},{id:6,name:"image6",pic:y.a},{id:7,name:"image7",pic:N.a},{id:8,name:"image8",pic:O.a}],B=(t(22),function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).images=[],e.handleClick=function(a){var t=a.target;if("match"!==t.getAttribute("check")){console.log(t,e.images[0]),t!==e.images[0]?(e.switch(t),e.images.push(t)):(e.switch(t),e.images=[]),e.images.length>2&&(e.checkName(e.images[0],e.images[1])?(e.images.shift(),e.images.shift()):(e.switch(e.images[0]),e.switch(e.images[1]),e.images.shift(),e.images.shift()));var n=document.getElementsByClassName("card-blank");if(n.length<1){console.log("allPictures.length",n.length);for(var i=document.getElementsByClassName("card"),c=0;c<i.length;c++)i[c].classList.add("card-blank"),i[c].setAttribute("check","false"),e.images=[]}}},e.checkName=function(e,a){return e.getAttribute("id")===a.getAttribute("id")&&(e.setAttribute("check","match"),a.setAttribute("check","match"),!0)},e.switch=function(e){"true"===e.getAttribute("check")?(e.setAttribute("check","false"),e.classList.add("card-blank")):(console.log("switch else"),e.setAttribute("check","true"),e.classList.remove("card-blank"))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"cards"},x.sort((function(){return Math.random()-.5})).map((function(a){return i.a.createElement("div",{className:"card card-blank",key:Math.random(),id:a.id,style:{background:"url(".concat(a.pic,")")},check:"false",onClick:e.handleClick})})))}}]),t}(i.a.Component)),C=(t(23),t(24),function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.turns,t=e.score;return i.a.createElement("div",{className:"navbar"},i.a.createElement("div",{className:"turns"},"Turns: ",a),i.a.createElement("div",{className:"score"},"Score: ",t))}}]),t}(i.a.Component)),G=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={BeginGame:!0,turns:0,score:0},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=(e.BeginGame,e.turns),t=e.score;return i.a.createElement("div",{className:"game"},i.a.createElement(C,{turns:a,score:t}),i.a.createElement("div",{className:"cards"},i.a.createElement(B,{BeginGame:this.handleBeginGame})))}}]),t}(i.a.Component);var L=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",null,i.a.createElement(G,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.f6e08491.chunk.js.map