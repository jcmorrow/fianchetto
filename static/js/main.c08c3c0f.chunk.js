(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),s=(a(16),a(9)),o=a(1),l=a(2),u=a(4),h=a(3),p=a(5),d=a(6),m=a.n(d),f=(a(19),function e(t,a,n){Object(o.a)(this,e),this.time=void 0,this.correct=void 0,this.space=void 0,this.correct=t,this.space=a,this.time=n}),b=function e(t,a,n){var r=this;Object(o.a)(this,e),this.rank=void 0,this.file=void 0,this.color=void 0,this.sameAs=function(e){return null!==e&&e.rank===r.rank&&e.file===r.file},this.asString=function(){return"".concat(r.file).concat(r.rank)},this.file=t,this.rank=a,this.color=n},v=["a","b","c","d","e","f","g","h"],g=function(e,t){var a=e%8;return t&&(a=7-a),v[a]},E=function(e,t){return t?Math.floor(e/8)+1:8-Math.floor(e/8)},k=function(e,t){return E(e,!1)%2===0?e%2===0?"white":"black":e%2===0?"black":"white"},j=function(){var e=Math.floor(64*Math.random());return new b(g(e,!1),E(e,!1),k(e,!1))},O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).flipBoard=function(){a.setState({flipped:!a.state.flipped,board:a.createBoard(!a.state.flipped)})},a.createBoard=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Array(64).fill(void 0).map(function(t,n){return a.createSpace(n,e)})},a.createSpace=function(e,t){return new b(g(e,t),E(e,t),k(e,t))},a.onClickSpace=function(e){a.props.chooseSpace(e)},a.toggleLabels=function(){a.setState({labels:!a.state.labels})},a.state={board:a.createBoard(),flipped:!1,labels:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.highlighted,a=this.state,n=a.board,c=a.labels;return r.a.createElement("div",null,r.a.createElement("div",{className:"board"},new Array(8).fill(void 0).map(function(a,i){return r.a.createElement("div",{className:"rank",key:i},new Array(8).fill(void 0).map(function(a,s){var o=n[8*i+s];return r.a.createElement("div",{className:"space ".concat(o.color," ").concat(t.get(o.asString())||""),key:s,onClick:function(){return e.onClickSpace(o)}},c?o.asString():"")}))})),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{onClick:this.flipBoard},"Flip Board"),r.a.createElement("button",{onClick:this.toggleLabels},"Toggle Labels")))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"results"},r.a.createElement("tbody",null,r.a.createElement("tr",{className:"result"},r.a.createElement("th",null,"Space"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Result")),this.props.results.map(function(e){return r.a.createElement("tr",{className:"result"},r.a.createElement("td",null,e.space.file,e.space.rank),r.a.createElement("td",null,e.time),r.a.createElement("td",null,e.correct?"Correct":"Wrong"))})))}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"instruction"},this.props.space.file,this.props.space.rank)}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).chooseSpace=function(e){var t=e.sameAs(a.state.space),n=m()(),r=new Map;r.set(a.state.space.asString(),t?"green":"red"),a.setState({highlighted:r,timeLastAssigned:n,results:[new f(t,a.state.space,n.diff(a.state.timeLastAssigned)/1e3)].concat(Object(s.a)(a.state.results)),space:j()})},a.state={highlighted:new Map,results:[],space:j(),timeLastAssigned:m()()},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"left"},r.a.createElement(S,{space:this.state.space}),r.a.createElement(O,{highlighted:this.state.highlighted,chooseSpace:this.chooseSpace})),r.a.createElement("div",{className:"right"},r.a.createElement(w,{results:this.state.results})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c08c3c0f.chunk.js.map