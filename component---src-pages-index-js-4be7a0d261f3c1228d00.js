webpackJsonp([35783957827783],{106:function(e,t){"use strict";var l={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,o=u&&u(Object);e.exports=function e(t,d,s){if("string"!=typeof d){if(o){var f=u(d);f&&f!==o&&e(t,f,s)}var m=r(d);c&&(m=m.concat(c(d)));for(var p=0;p<m.length;++p){var h=m[p];if(!(l[h]||a[h]||s&&s[h])){var g=i(d,h);try{n(t,h,g)}catch(e){}}}return t}return t}},41:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var l={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(l[a]=e[a]);return l}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},c=l(2),i=a(c),u=l(7),o=a(u),d=function(e,t){var l=e.children,a=e.color,c=e.size,u=e.style,o=e.width,d=e.height,s=n(e,["children","color","size","style","width","height"]),f=t.reactIconBase,m=void 0===f?{}:f,p=c||m.size||"1em";return i.default.createElement("svg",r({children:l,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:d||p,width:o||p},m,s,{style:r({verticalAlign:"middle",color:a||m.color},m.style||{},u)}))};d.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number]),width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),style:o.default.object},d.contextTypes={reactIconBase:o.default.shape(d.propTypes)},t.default=d,e.exports=t.default},541:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},r=l(2),c=a(r),i=l(41),u=a(i),o=function(e){return c.default.createElement(u.default,n({viewBox:"0 0 40 40"},e),c.default.createElement("g",null,c.default.createElement("path",{d:"m40 15.8v17.8q0 1.4-1 2.5t-2.6 1h-32.8q-1.5 0-2.6-1t-1-2.5v-17.8q1 1.1 2.3 2 8 5.5 11 7.7 1.3 0.9 2.1 1.5t2.1 1 2.5 0.6h0q1.2 0 2.5-0.6t2.1-1 2.1-1.5q3.7-2.8 11.1-7.7 1.2-0.9 2.2-1.9z m0-6.5q0 1.7-1.1 3.4t-2.7 2.7q-8.4 5.8-10.5 7.3-0.2 0.1-0.9 0.6t-1.2 0.9-1.2 0.7-1.3 0.6-1.1 0.2h0q-0.5 0-1.1-0.2t-1.3-0.6-1.2-0.7-1.2-0.9-0.9-0.6q-2.1-1.5-5.9-4.1t-4.6-3.2q-1.3-0.9-2.6-2.6t-1.2-3q0-1.8 0.9-2.9t2.7-1.2h32.8q1.5 0 2.5 1.1t1.1 2.5z"})))};t.default=o,e.exports=t.default},234:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(2),r=a(n),c=l(66),i=a(c),u=function(e){return r.default.createElement("li",null,r.default.createElement(i.default,{to:e.link},r.default.createElement("div",{className:"card"},r.default.createElement("div",{className:"image"},r.default.createElement("img",{src:e.image,alt:"Title image for project"})),r.default.createElement("div",{className:"card-content"},r.default.createElement("h3",{className:"card-title"},e.title),r.default.createElement("p",null,e.description)))))};t.default=u,e.exports=t.default},583:function(e,t,l){e.exports=l.p+"static/gears.624e178f.jpg"},584:function(e,t,l){e.exports=l.p+"static/git.4bf78b29.png"},237:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=l(2),r=a(n),c=l(66),i=a(c),u=l(234),o=a(u),d=l(583),s=a(d),f=l(584),m=(a(f),l(541)),p=a(m),h=function(){return r.default.createElement("main",{id:"main"},r.default.createElement("div",{id:"showcase",className:"grid"},r.default.createElement("div",{className:"content-wrap"},r.default.createElement("h2",null,"Hi, my name is David. I am a Full Stack Web Developer living in Fort Worth, TX."),r.default.createElement("a",{href:"#section-c",className:"button"},"Read More"))),r.default.createElement("section",{id:"section-a",className:"grid"},r.default.createElement("ul",null,r.default.createElement(o.default,{image:s.default,title:"test title card",description:"an amendment to be, yes an amendment to be",link:"#"}),r.default.createElement(o.default,{image:s.default,title:"test numero dos",description:"i'll need to figure out how to iterate an array of these",link:"#"}),r.default.createElement(o.default,{image:s.default,title:"test numero tres",description:"i'll need to figure out how to iterate an array of these",link:"#"}))),r.default.createElement("section",{id:"section-b",className:"grid"},r.default.createElement("div",{className:"content-wrap"},r.default.createElement("h2",{className:"content-title"},"Technical Blog"),r.default.createElement("p",null,"This section will be a link to the technical blog"),r.default.createElement("p",null,"Perhaps an excerpt of the latest post?"),r.default.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eligendi eaque ducimus, quisquam fuga animi placeat nesciunt ea voluptatum, aliquam eveniet. Voluptates harum consectetur reprehenderit."))),r.default.createElement("section",{id:"section-c",className:"grid"},r.default.createElement("div",{className:"content-wrap"},r.default.createElement("h2",{className:"content-title"},"About Me"),r.default.createElement("div",{className:"content-text"},r.default.createElement("p",null,"I'm a full-stack web developer using using Ruby on Rails, JavaScript, and ReactJS. I studied web development at"," ",r.default.createElement("a",{href:"https://flatironschool.com/"},"Flatiron School")," through their Online Immersive Bootcamp. Prior to this, I was a retail store manager for Barnes & Noble Education."),r.default.createElement("p",null,'I enjoy building things. Woodworking is a hobby of mine, and one of my favorite aspects of web development is having a product at the end of a project and being able to say "I built that". You can check out some of them ',r.default.createElement(i.default,{to:"/portfolio/"},"here."))))),r.default.createElement("section",{id:"section-d",className:"grid"},r.default.createElement("div",{className:"box"},r.default.createElement("h2",{className:"content-title"},"Tools and Frameworks"),r.default.createElement("ul",{className:"tools"},r.default.createElement("li",null,"Ruby on Rails"),r.default.createElement("li",null,"Sinatra"),r.default.createElement("li",null,"RSpec"),r.default.createElement("li",null,"Mocha"),r.default.createElement("li",null,"PostgreSQL"),r.default.createElement("li",null,"jQuery"),r.default.createElement("li",null,"React"),r.default.createElement("li",null,"Redux"),r.default.createElement("li",null,"GatsbyJS"),r.default.createElement("li",null,"Heroku"),r.default.createElement("li",null,"Git"),r.default.createElement("li",null,"CSS"),r.default.createElement("li",null,"Webpack"),r.default.createElement("li",null,"Yarn"),r.default.createElement("li",null,"npm"),r.default.createElement("li",null,"PostCSS"))),r.default.createElement("div",{className:"box"},r.default.createElement("h2",{className:"content-title"},"Contact"),r.default.createElement("a",{href:"mailto:dschlaud@gmail.com",target:"_top"},r.default.createElement(p.default,{size:25})," dschlaud@gmail.com")," ")))};t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-4be7a0d261f3c1228d00.js.map