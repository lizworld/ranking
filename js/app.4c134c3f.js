(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0661":function(t,e,n){"use strict";n("7c79")},"3ae4":function(t,e,n){"use strict";n("694d")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Tab")],1)},o=[],i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"container"}},[e("h2",[t._v("영화 랭킹")]),e("p",[t._v("재밌는 영화만 모아모아 추천합니다!")]),e("ul",{staticClass:"menu"},t._l(t.tabs,(function(n,r){return e("li",{key:r,class:{active:r==t.crt},on:{click:function(e){return t.detail(r)}}},[e("div",{staticClass:"rank_wrap"},[e("span",{staticClass:"small"},[t._v("Ranking")]),e("span",{staticClass:"rank"},[t._v(" "+t._s(r+1))])]),e("div",{staticClass:"title"},[t._v(" "+t._s(n.title)+" ")])])})),0),t._l(t.tabs,(function(n,r){return e("div",{key:r},[t.crt==r?e("div",{staticClass:"content"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n.poster,alt:""}})]),e("ul",{staticClass:"content_list"},[e("li",[t._v("개봉일 : "+t._s(n.open))]),e("li",[t._v("평점 : "+t._s(n.grade))]),e("li",[t._v(t._s(n.level))]),e("li",[t._v(t._s(n.content))])])]):t._e()])}))],2)},s=[],l=[{title:"범죄도시3",poster:"https://t1.daumcdn.net/movie/b05fec37909f3c46d8ada73ba1d2bc2f8868e869",open:"2023.05.31",grade:6.3,level:"15세 이상 관람가",content:"대체불가 괴물형사 마석도, 서울 광수대로 발탁!  베트남 납치 살해범 검거 후 7년 뒤,마석도(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다. "},{title:"플래시",poster:"https://t1.daumcdn.net/movie/947a0d62f2772aa0f5c73b86b631779ef1183879",open:"2023.06.14",grade:8.6,level:"12세 이상 관람가",content:"시공간이 붕괴된 세계,       차원이 다른 히어로가 온다!      빛보다 빠른 스피드, 물체 투과, 전기 방출, 자체 회복, 천재적인 두뇌까지"},{title:"트랜스포머: 비스트의 서막",poster:"https://t1.daumcdn.net/movie/69b2d6ef76c2c5b37b0641b187d1efd7f0636e41",open:"2023.06.06",grade:7.5,level:"12세 이상 관람가",content:"전 우주의 행성을 집어삼키는 절대자, ‘유니크론’의 부하 스커지는 ‘테러콘’들을 이끌고 지구에 당도한다.      그에 맞서기 위해 지구에 정체를 숨기고 있던 트랜스포머 오토봇 군단이 모습을 드러내고 "}],c={data(){return{tabs:l,crt:0,open:!1}},methods:{detail(t){this.crt=t}}},u=c,p=(n("3ae4"),n("2877")),d=Object(p["a"])(u,i,s,!1,null,null,null),f=d.exports,v={name:"App",components:{Tab:f}},b=v,_=(n("0661"),Object(p["a"])(b,a,o,!1,null,null,null)),h=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:t=>t(h)}).$mount("#app")},"694d":function(t,e,n){},"7c79":function(t,e,n){}});
//# sourceMappingURL=app.4c134c3f.js.map