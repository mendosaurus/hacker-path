(this["webpackJsonphacker-path"]=this["webpackJsonphacker-path"]||[]).push([[0],{51:function(e,t,a){e.exports=a(85)},56:function(e,t,a){},58:function(e,t,a){},83:function(e,t,a){e.exports=a.p+"static/media/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.bfd98721.jpg"},85:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(23),s=a.n(r),c=(a(56),a(57),a(58),a(3)),i=a(4),u=a(6),l=a(5),p=a(7),h=a(10),m=a.n(h),d=function(e){for(var t=Math.round(e.children),a="",o=1;o<=5;o++)a+=t<o?"\u2606":"\u2605";return n.a.createElement("p",{className:"rating-stars"},a)},g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("button",{onClick:this.props.submit,type:"button"},this.props.info)}}]),t}(o.Component),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).refreshPage=function(){window.location.reload(!1)},a.handleSaveQuote=function(e){console.log("save!"),e.preventDefault(),a.setState({imageUrl:"".concat(a.props.quote.author),quote:"".concat(a.props.quote.en),author:"".concat(a.props.quote.author),rating:"".concat(a.props.quote.rating)},(function(){var e=a.state;console.log(e),m.a.post("https://ironrest.herokuapp.com/quotes",e).then((function(e){return console.log(e)}))}))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.quote),n.a.createElement("blockquote",{className:"blockquote text-light"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 text-center p-5"},n.a.createElement("button",{value:"Refresh Page",onClick:this.refreshPage},"Gimme More")),n.a.createElement("div",{className:"col-sm-12 p-2"},n.a.createElement("p",{className:"p-3"},this.props.quote.en),n.a.createElement("footer",{className:"blockquote-footer"},this.props.quote.author),n.a.createElement(d,null,this.props.quote.rating),n.a.createElement(g,{submit:function(t){return e.handleSaveQuote(t)},info:"Save"}))))}}]),t}(o.Component),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={randomQuote:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://programming-quotes-api.herokuapp.com/quotes/random").then((function(t){console.log(t.data),e.setState({randomQuote:t.data})})),console.log(this.state)}},{key:"render",value:function(){return console.log(this.state.randomQuote),n.a.createElement(f,{quote:this.state.randomQuote})}}]),t}(o.Component),b=a(21),E=a(20),j=a(88),O=a(89),k=a(47),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).toggleNavbar=e.toggleNavbar.bind(Object(b.a)(e)),e.closeNavbar=e.closeNavbar.bind(Object(b.a)(e)),e.state={collapsed:!0},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"closeNavbar",value:function(){!0!==this.state.collapsed&&this.toggleNavbar()}},{key:"render",value:function(){return n.a.createElement(j.a,{expand:"lg",className:"background-dark",fixed:"top"},">",n.a.createElement(j.a.Brand,{href:"/hacker-path/"},n.a.createElement("strong",{className:"font-orange"},"5 SECONDS OF KNOWLEDGE")),n.a.createElement(j.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:this.toggleNavbar}),n.a.createElement(j.a.Collapse,{id:"responsive-navbar-nav",isOpen:!this.state.collapsed},n.a.createElement(O.a,{className:"mr-auto"},n.a.createElement(k.a,null,n.a.createElement(E.b,{to:"/quotes/",className:"nav-link text-light",onClick:this.closeNavbar},"Search Quotes")),n.a.createElement(k.a,null,n.a.createElement(E.b,{to:"/saved-quotes/",className:"nav-link text-light",onClick:this.closeNavbar},"Saved Quotes")))))}}]),t}(o.Component),N=a(50),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).getAuthorImage=function(){e.props.author&&(console.log(e.props.author),m.a.get("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=".concat(e.props.author.split(" ").join("%20"),"\n          &format=json&prop=pageimages&pithumbsize=500")).then((function(t){e.setState({authors:t.data.query})})))},e.state={authors:[],imageUrl:{name:"url"}},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAuthorImage()}},{key:"render",value:function(){if(this.state.authors&&this.state.authors.pages&&Object.keys(this.state.authors.pages)[0]&&this.state.authors.pages[Object.keys(this.state.authors.pages)[0]].thumbnail){this.props.author!==this.state.authors.normalized[0].to&&this.getAuthorImage();return n.a.createElement("img",{className:"img-thumbnail",src:this.state.authors.pages[Object.keys(this.state.authors.pages)[0]].thumbnail.source,style:{height:"200px"},alt:""})}return n.a.createElement("img",{src:a(83),className:"img-thumbnail",style:{height:"200px"},alt:""})}}]),t}(o.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).handleSaveQuote=function(t){t.preventDefault(),e.setState({imageUrl:"".concat(e.props.quote.author),quote:"".concat(e.props.quote.en),author:"".concat(e.props.quote.author),rating:"".concat(e.props.quote.rating)},(function(){var t=e.state;m.a.post("https://ironrest.herokuapp.com/quotes",t).then((function(e){return console.log(e)}))}))},e.state={imageUrl:"",quote:"",author:"",rating:""},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("blockquote",{className:"blockquote text-light bg-dark p-3 rounded"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3 text-center"},n.a.createElement(y,{author:this.props.quote.author})),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("p",{className:"p-3"},this.props.quote.en),n.a.createElement("footer",{className:"blockquote-footer"},this.props.quote.author),n.a.createElement(d,null,this.props.quote.rating),n.a.createElement(g,{submit:function(t){return e.handleSaveQuote(t)},info:"Save"}))))}}]),t}(o.Component),Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"container"},n.a.createElement("div",{className:"form-groups"},n.a.createElement("div",{className:"field has-addons"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"form-control",name:"search",type:"search",placeholder:"Search programmer",onChange:this.props.searchInput})))))}}]),t}(o.Component),S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).buildUrl=function(t){for(var a="",o=0;o<50;o++)a+=t[o].author+"|";var n="https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=".concat(a.slice(0,-1),"&format=json&prop=pageimages&pithumbsize=500");m.a.get(n).then((function(t){var a=[];for(var o in t.data.query.pages)a.push(t.data.query.pages[o]);e.setState({images:a})})).catch((function(e){return console.log(e)}))},e.searchInput=function(t){var a=t.target.value,o=[],n=e.state.quotes.filter((function(t,n){if(t.author.toLowerCase().includes(a.toLowerCase()))return o.push(e.state.images[n]),t}));e.setState({filteredQuotes:n})},e.getImages=function(){e.state.images.map((function(e){m.a.get("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&titles=".concat(e.title.split(" ").join("%20"),"\n            &format=json&prop=pageimages&pithumbsize=500")).then((function(e){return console.log(e)}))}))},e.state={quotes:[],filteredQuotes:[],images:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://programming-quotes-api.herokuapp.com/quotes").then((function(t){var a=Object.values(t.data.reduce((function(e,t){return Object.assign(e,Object(N.a)({},t.author,t))}),{}));e.setState({quotes:a,filteredQuotes:a}),e.buildUrl(a)}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"container p-2"},n.a.createElement(Q,{searchInput:function(t){return e.searchInput(t)},className:"input"})),n.a.createElement("div",{className:"container"},this.state.filteredQuotes.map((function(e,t){return n.a.createElement(w,{quote:e,key:t})}))))}}]),t}(o.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).handleRemoveQuote=function(e){console.log("remove!"),e.preventDefault(),m.a.delete("https://ironrest.herokuapp.com/quotes/".concat(a.props.quote._id)).then(a.props.delete())},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("blockquote",{className:"blockquote text-light bg-dark p-3 rounded"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3 text-center"},n.a.createElement(y,{author:this.props.quote.author,image:this.props.image})),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement("p",{className:"p-3"},this.props.quote.quote),n.a.createElement("footer",{className:"blockquote-footer"},this.props.quote.author),n.a.createElement(d,null,this.props.quote.rating),n.a.createElement(g,{submit:function(t){return e.handleRemoveQuote(t)},info:"Remove"}))))}}]),t}(o.Component),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).deleteQuote=function(t){var a=e.state.savedQuotes.filter((function(e){return e._id!==t}));console.log(t),console.log(a),e.setState({savedQuotes:a})},e.state={savedQuotes:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://ironrest.herokuapp.com/quotes").then((function(t){console.log(e.state),console.log(t.data),e.setState({savedQuotes:t.data})}))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"container"},this.state.savedQuotes.map((function(t,a){return n.a.createElement(C,{quote:t,delete:function(){return e.deleteQuote(t._id)},key:a})}))))}}]),t}(o.Component),D=a(17);a(84);var I=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(q,null),n.a.createElement(D.c,null,n.a.createElement(D.a,{exact:!0,path:"/",component:v}),n.a.createElement(D.a,{exact:!0,path:"/quotes",component:S}),n.a.createElement(D.a,{exact:!0,path:"/saved-quotes",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(E.a,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.19040a4a.chunk.js.map