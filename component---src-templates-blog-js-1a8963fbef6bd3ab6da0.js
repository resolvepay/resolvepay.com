(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"1c7f":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=r(t("q1tI")),l=r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var n=function(e){var a=e.breakLabel,t=e.breakClassName,l=e.breakLinkClassName,r=e.onClick,n=t||"break";return i.default.createElement("li",{className:n},i.default.createElement("a",{className:l,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};n.propTypes={breakLabel:l.default.oneOfType([l.default.string,l.default.node]),breakClassName:l.default.string,breakLinkClassName:l.default.string,onClick:l.default.func.isRequired},a.default=n},"3LHp":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=r(t("q1tI")),l=r(t("17x9"));function r(e){return e&&e.__esModule?e:{default:e}}var n=function(e){var a=e.pageClassName,t=e.pageLinkClassName,l=e.onClick,r=e.href,n=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),o=null;return e.selected&&(o="page",n=e.ariaLabel||"Page "+e.page+" is your current page",a=void 0!==a?a+" "+e.activeClassName:e.activeClassName,void 0!==t?void 0!==e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),i.default.createElement("li",{className:a},i.default.createElement("a",{onClick:l,role:"button",className:t,href:r,tabIndex:"0","aria-label":n,"aria-current":o,onKeyPress:l},e.page))};n.propTypes={onClick:l.default.func.isRequired,selected:l.default.bool.isRequired,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,extraAriaContext:l.default.string,href:l.default.string,ariaLabel:l.default.string,page:l.default.number.isRequired},a.default=n},c851:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",(function(){return x})),t.d(a,"default",(function(){return C}));var i=t("MX0m"),l=t.n(i),r=t("q1tI"),n=t.n(r),o=t("Wbzz"),s=t("+7A0"),c=t("LvDl"),d=t("7oih"),m=t("VUD3"),u=t("8o2o"),g=t("werx"),p=t.n(g),b=t("WlAH"),f=function(e){var a=e.pageCount,t=(e.perPage,e.onPageChange),i=Object(u.a)(e,["pageCount","perPage","onPageChange"]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,Object.assign({},i,{containerClassName:"pagination",pageCount:a,pageRangeDisplayed:2,marginPagesDisplayed:2,breakLabel:"...",onPageChange:t})),n.a.createElement(l.a,{id:"916388682",dynamic:[b.c.mobileMax]},[".pagination{padding:0;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:50%;max-width:350px;margin:0 auto;list-style:none;}",".pagination li{cursor:pointer;margin:8px;}",".pagination .disabled{opacity:0.5 !important;}",".pagination li:not(:first-child),.pagination li:not(:last-child){opacity:0.5;}",".pagination li.selected,.pagination li.next,.pagination li.previous{opacity:1;}","@media (max-width:"+b.c.mobileMax+"px){.pagination{width:100%;}}"]))},h=t("JwsL"),y=t("xGbm"),x="363369851";function k(e){var a=e.post;return n.a.createElement("article",null,n.a.createElement("div",{className:"blog-image",style:{backgroundImage:"url("+a.feature_image.fluid.src+")"}},n.a.createElement(o.Link,{to:"/blog/post/"+a.slug,className:"blog-link"})),n.a.createElement("div",{className:"blog-content with-image"},n.a.createElement(o.Link,{to:"/blog/post/"+a.slug,className:"blog-link"},a.tag&&n.a.createElement("div",{className:"blog-tag"},a.tag),n.a.createElement("h3",{className:"blog-title"},a.title),n.a.createElement("p",null,a.summary)),n.a.createElement("ul",{className:"blog-card-meta"},n.a.createElement("li",null,Object(y.a)(a.published_at,"monthDayShortComma")))))}function v(e){var a=e.post,t=void 0===a?{}:a;return n.a.createElement("article",null,n.a.createElement("div",{className:"blog-image",style:{backgroundImage:"url("+t.feature_image.fluid.src+")"}},n.a.createElement(o.Link,{to:"/blog/post/"+t.slug,className:"blog-link"})),n.a.createElement("div",{className:"blog-content with-image"},n.a.createElement(o.Link,{to:"/blog/post/"+t.slug,className:"blog-link"},t.tag&&n.a.createElement("div",{className:"blog-tag"},t.tag),n.a.createElement("h3",{className:"blog-title"},t.title),n.a.createElement("p",null,t.summary_long)),n.a.createElement("ul",{className:"blog-card-meta"},n.a.createElement("li",null,Object(y.a)(t.published_at,"monthDayShortComma")))))}function C(e){var a=e.data,t=e.pageContext,i=t.page,r=t.pageCount,u=t.limit;return n.a.createElement(d.a,null,n.a.createElement(s.GatsbySeo,{title:"Blog"}),n.a.createElement(m.a,null,n.a.createElement("section",{className:l.a.dynamic([["2396696161",[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]]])+" blog-grid"},n.a.createElement("div",{className:l.a.dynamic([["2396696161",[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]]])+" row"},n.a.createElement("div",{className:l.a.dynamic([["2396696161",[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]]])+" main intro-card"},n.a.createElement(v,{post:a.posts.edges[0].node}))),n.a.createElement("div",{className:l.a.dynamic([["2396696161",[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]]])+" blog-section-sublabel"},n.a.createElement("h4",{className:l.a.dynamic([["2396696161",[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]]])+" blog-sublabel"},"LATEST POSTS")),Object(c.chunk)(a.posts.edges.slice(1),3).map((function(e,a){return n.a.createElement("div",{key:a,className:l.a.dynamic([["2396696161",[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]]])+" row row-3-cols"},e.map((function(e){return n.a.createElement("div",{key:e.node.slug,className:l.a.dynamic([["2396696161",[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]]])+" blog-card"},n.a.createElement(k,{post:e.node}))})))}))),n.a.createElement(f,{initialPage:i,pageCount:r,perPage:u,onPageChange:function(e){var a=e.selected;a!==i&&Object(o.navigate)(0===a?"/blog":"/blog/"+(a+1))},hrefBuilder:function(e){return 1===e?"/blog":"/blog/"+e}})),n.a.createElement(h.a,{darkSkin:!0}),n.a.createElement(l.a,{id:"2396696161",dynamic:[b.a.darkSlateBlue,b.b.gilroy,b.b.gilroy,b.a.primary,b.a.primary,b.a.baliHai,b.a.baliHai,b.a.primary,b.a.primary]},[".blog-index-title{color:"+b.a.darkSlateBlue+";font-family:"+b.b.gilroy+";font-size:44px;font-weight:600;line-height:75px;}",".blog-grid{margin-top:3rem;}",".blog-grid .row{margin-bottom:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".blog-grid .row .blog-card.main{width:100%;margin:0;}",".blog-grid .row-3-cols .blog-card{margin:0 2%;width:30.66667%;}",".blog-grid .row-3-cols .blog-card:first-child{margin-left:0;}",".blog-grid .row-3-cols .blog-card:last-child{margin-right:0;}",".blog-card{box-shadow:0 2px 5px rgba(0,0,0,0.1);background:#fff;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;}",".blog-card:hover{box-shadow:0 2px 10px rgba(0,0,0,0.2);-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);}",".main{width:100%;}",".main article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".main .blog-image{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:400px;}",".main .blog-card-meta{position:absolute;bottom:0;font-size:1rem;}",".main .blog-content{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:45%;position:relative;padding:2rem 2rem 1.5rem 2rem;}",".main .blog-content p{font-size:1.1rem;line-height:1.35;margin-bottom:1.5rem;}",".main .blog-content .blog-title{font-size:2.25rem;margin-bottom:1rem;font-family:"+b.b.gilroy+";}",".main .blog-content.with-image{padding-top:0;}",".blog-image{overflow:hidden;width:100%;height:200px;position:relative;background-size:cover;}",".blog-image img{width:100%;position:absolute;top:-100%;left:0;right:0;bottom:-100%;margin:auto;}",".blog-link{display:block;color:"+b.a.primary+";-webkit-text-decoration:none;text-decoration:none;}",".blog-link:hover{color:"+b.a.primary+";}",".blog-tag{text-transform:uppercase;color:"+b.a.baliHai+";font-size:0.8rem;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;margin-bottom:0.2rem;font-weight:600;}",".blog-card-meta{list-style:none;padding:0;margin:0;color:"+b.a.baliHai+";font-size:80%;}",".blog-card-meta a{color:"+b.a.primary+";}",".blog-card-meta li{display:inline-block;margin-right:0.5rem;}",".blog-card-meta li::after{content:'';position:absolute;right:-16px;top:50%;margin:-1px 5px 0;width:4px;height:4px;border-radius:2px;background-color:#eee;}",".blog-content{padding:2rem 2rem 1.5rem 2rem;}",".blog-content p{line-height:1.35;margin-bottom:1.5rem;}",".blog-content.with-image{padding-top:1.5rem;}",".blog-content .blog-title{font-family:$font-headings;font-size:1.5rem;margin-top:0.3rem;}",".blog-section-sublabel{-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;position:relative;overflow:hidden;}",".blog-sublabel{color:lighten("+b.a.primary+",60%);}",".blog-sublabel::after{content:' ';position:absolute;top:50%;left:160px;background:lighten($color-text-body,70%);width:100%;height:1px;}","@media (max-width:991px){.main{width:100%;}.main article{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.main .blog-image{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:300px;width:100%;}.main .blog-content{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;padding:2rem 0rem 1.5rem 0;}.main .blog-content .blog-title{font-size:2.25rem;}.main .blog-content.with-image{padding-top:2rem;}}","@media (max-width:991px){.blog-card{width:100%;}.blog-grid .row-3-cols .blog-card{margin:0 0 2rem 0;width:100%;}.blog-grid .row{margin-bottom:0rem;}}"]))}},kzof:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),l=t("q1tI"),r=c(l),n=c(t("17x9")),o=c(t("3LHp")),s=c(t("1c7f"));function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,i=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<i-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var i=t.state.selected;t.handlePageSelected(i<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,i=a.pageRangeDisplayed,l=a.pageCount,n=a.marginPagesDisplayed,o=a.breakLabel,c=a.breakClassName,d=a.breakLinkClassName,m=t.state.selected;if(l<=i)for(var u=0;u<l;u++)e.push(t.getPageElement(u));else{var g=i/2,p=i-g;m>l-i/2?g=i-(p=l-m):m<i/2&&(p=i-(g=m));var b=void 0,f=void 0,h=void 0,y=function(e){return t.getPageElement(e)};for(b=0;b<l;b++)(f=b+1)<=n||f>l-n||b>=m-g&&b<=m+p?e.push(y(b)):o&&e[e.length-1]!==h&&(h=r.default.createElement(s.default,{key:b,breakLabel:o,breakClassName:c,breakLinkClassName:d,onClick:t.handleBreakClick.bind(null,b)}),e.push(h))}return e};var i=void 0;return i=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:i},t}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),i(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,i=e.extraAriaContext;void 0===a||t||this.callCallback(a),i&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,i=e+a.pageRangeDisplayed;return i>=t?t-1:i}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,i=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<i)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,i=t.pageClassName,l=t.pageLinkClassName,n=t.activeClassName,s=t.activeLinkClassName,c=t.extraAriaContext;return r.default.createElement(o.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:i,pageLinkClassName:l,activeClassName:n,activeLinkClassName:s,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,i=e.nextClassName,l=e.pageCount,n=e.containerClassName,o=e.previousLinkClassName,s=e.previousLabel,c=e.nextLinkClassName,d=e.nextLabel,m=this.state.selected,u=t+(0===m?" "+a:""),g=i+(m===l-1?" "+a:""),p=0===m?"true":"false",b=m===l-1?"true":"false";return r.default.createElement("ul",{className:n},r.default.createElement("li",{className:u},r.default.createElement("a",{onClick:this.handlePreviousPage,className:o,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":p},s)),this.pagination(),r.default.createElement("li",{className:g},r.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":b},d)))}}]),a}(l.Component);d.propTypes={pageCount:n.default.number.isRequired,pageRangeDisplayed:n.default.number.isRequired,marginPagesDisplayed:n.default.number.isRequired,previousLabel:n.default.node,nextLabel:n.default.node,breakLabel:n.default.oneOfType([n.default.string,n.default.node]),hrefBuilder:n.default.func,onPageChange:n.default.func,initialPage:n.default.number,forcePage:n.default.number,disableInitialCallback:n.default.bool,containerClassName:n.default.string,pageClassName:n.default.string,pageLinkClassName:n.default.string,activeClassName:n.default.string,activeLinkClassName:n.default.string,previousClassName:n.default.string,nextClassName:n.default.string,previousLinkClassName:n.default.string,nextLinkClassName:n.default.string,disabledClassName:n.default.string,breakClassName:n.default.string,breakLinkClassName:n.default.string,extraAriaContext:n.default.string,ariaLabelBuilder:n.default.func},d.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=d},werx:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i,l=t("kzof"),r=(i=l)&&i.__esModule?i:{default:i};a.default=r.default}}]);
//# sourceMappingURL=component---src-templates-blog-js-1a8963fbef6bd3ab6da0.js.map