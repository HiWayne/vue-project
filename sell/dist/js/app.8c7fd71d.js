(function(t){function s(s){for(var i,n,o=s[0],c=s[1],l=s[2],u=0,p=[];u<o.length;u++)n=o[u],a[n]&&p.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(s);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,s=0;s<r.length;s++){for(var e=r[s],i=!0,o=1;o<e.length;o++){var c=e[o];0!==a[c]&&(i=!1)}i&&(r.splice(s--,1),t=n(n.s=e[0]))}return t}var i={},a={app:0},r=[];function n(s){if(i[s])return i[s].exports;var e=i[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=i,n.d=function(t,s,e){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var i in t)n.d(e,i,function(s){return t[s]}.bind(null,i));return e},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var l=0;l<o.length;l++)s(o[l]);var d=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"0621":function(t,s,e){"use strict";var i=e("f685"),a=e.n(i);a.a},"09f5":function(t,s,e){},1718:function(t,s,e){"use strict";var i=e("de0c"),a=e.n(i);a.a},"1d1b":function(t,s,e){"use strict";var i=e("be40"),a=e.n(i);a.a},"2b1a":function(t,s,e){"use strict";var i=e("9a03"),a=e.n(i);a.a},"2c5d":function(t,s,e){},"2ca9":function(t,s,e){"use strict";var i=e("6a96"),a=e.n(i);a.a},4544:function(t,s,e){},"4b11":function(t,s,e){"use strict";var i=e("af1b"),a=e.n(i);a.a},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),a=e("bc3a"),r=e.n(a),n=e("8c4f"),o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menu",staticClass:"menu-wrapper"},[e("ul",{staticClass:"menu-list"},t._l(t.goods,function(s,i){return e("li",{key:i,staticClass:"menu-item border-1px",class:{on:i===t.leftIndex},on:{click:function(s){return t.scrollto(i,s)}}},[e("span",{staticClass:"menu-name"},[-1!==s.type?e("span",{staticClass:"icon",class:t.classMap[s.type]}):t._e(),t._v(t._s(s.name)+"\n        ")])])}),0)]),e("div",{ref:"food",staticClass:"foods-wrapper"},[e("div",{staticClass:"food-scroll-wrapper"},t._l(t.goods,function(s,i){return e("div",{key:i,ref:"fooditem",refInFor:!0},[e("div",{staticClass:"food-menu"},[t._v(t._s(s.name))]),e("ul",{staticClass:"food-list"},t._l(s.foods,function(s,i){return e("li",{key:i,staticClass:"food-item border-1px on",on:{click:function(e){return t.selectFood(s)}}},[e("div",{staticClass:"food-icon"},[e("img",{attrs:{src:s.icon}})]),e("div",{staticClass:"food-detail"},[e("div",{staticClass:"food-select-wrapper"},[e("h1",{staticClass:"food-name"},[t._v(t._s(s.name))]),s.description?e("div",{staticClass:"food-description"},[t._v(t._s(s.description))]):t._e(),e("div",{staticClass:"food-data"},[e("span",{staticClass:"food-sell"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",{staticClass:"food-rating"},[t._v("好评率"+t._s(s.rating)+"%")])])]),e("div",{staticClass:"food-price"},[e("span",{staticClass:"current-price"},[t._v("￥"+t._s(s.price))]),s.oldPrice?e("del",{staticClass:"old-price"},[t._v("￥"+t._s(s.oldPrice))]):t._e(),e("cartcontrol",{staticClass:"select",attrs:{food:s,selectfoods:t.selectfoods},on:{drop:t.drop}})],1)])])}),0)])}),0)]),e("food",{attrs:{food:t.selectedFood,show:t.show,selectfoods:t.selectfoods,shopcartComponent:t.shopcartComponent},on:{detailclose:t.selectFood}})],1)},c=[],l=e("1fba"),d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"select"},[e("transition",{attrs:{name:"buttonmove"}},[t.food.count?e("i",{staticClass:"icon-remove_circle_outline",on:{click:function(s){return s.stopPropagation(),t.removefood(t.food,s)}}}):t._e()]),t.food.count?e("span",{staticClass:"count"},[t._v(t._s(t.food.count))]):t._e(),e("i",{staticClass:"icon-add_circle",on:{click:function(s){s.stopPropagation(),t.addfood(t.food,s),t.$emit("drop",s)}}})],1)},u=[],p={props:{food:{type:Object,required:!0},selectfoods:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{addfood:function(t,s){s._constructed&&(t.count?t.count++:(this.$set(t,"count",1),this.selectfoods.push(t)))},removefood:function(t,s){s._constructed&&t.count&&(t.count--,t.count||this.selectfoods.forEach(function(s,e,i){s!==t||i.splice(e,1)}))}}},f=p,h=(e("b5fd"),e("2877")),v=Object(h["a"])(f,d,u,!1,null,"1cf33dca",null),g=v.exports,m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-scroll-wrapper"},[e("div",{staticClass:"close",on:{click:function(s){return t.$emit("detailclose")}}},[e("i",{staticClass:"icon-arrow_lift"})]),e("div",{staticClass:"food-image"},[e("img",{staticClass:"image",attrs:{src:t.food.image}})]),e("div",{staticClass:"food-content"},[e("div",{staticClass:"food-name"},[t._v(t._s(t.food.name))]),e("div",{staticClass:"food-data"},[e("span",{staticClass:"food-sell"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),e("span",{staticClass:"food-rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),e("div",{staticClass:"food-price"},[e("span",{staticClass:"new-price"},[t._v("￥"+t._s(t.food.price))]),t.food.oldPrice?e("del",{staticClass:"old-price"},[t._v("￥"+t._s(t.food.oldPrice))]):t._e(),e("div",{staticClass:"shopcart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"emptycart",on:{click:function(s){return t.addfood(t.food,s)}}},[t._v("加入购物车")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count,expression:"food.count"}]},[e("cartcontrol",{ref:"shopcart",attrs:{food:t.food,selectfoods:t.selectfoods},on:{drop:t.drop}})],1)],1)])]),e("div",{staticClass:"board"}),e("div",{staticClass:"food-description"},[e("h1",{staticClass:"description-title"},[t._v("商品介绍")]),e("p",{staticClass:"description-content"},[t._v(t._s(t.food.info))])]),e("ratinglist",{attrs:{food:t.food}}),e("div",{staticClass:"ratings-detail"},[e("ul",{staticClass:"ratings-list"},t._l(t.ratingList,function(s,i){return e("li",{key:i,staticClass:"ratings-item border-1px"},[e("div",{staticClass:"ratings-user"},[e("div",{staticClass:"ratings-time"},[e("inputtime",{attrs:{"rate-time":s.rateTime}})],1),e("div",{staticClass:"user-data"},[e("span",{staticClass:"user-name"},[t._v(t._s(s.username))]),e("span",{staticClass:"user-avatar"},[e("img",{attrs:{src:s.avatar}})])])]),e("div",{staticClass:"ratings-content"},[e("span",{staticClass:"rating-type"},[e("iconthumb",{attrs:{"rate-type":s.rateType}})],1),e("span",{staticClass:"rating-text"},[t._v(t._s(s.text))])])])}),0)])],1)])])},C=[],_=(e("6b54"),e("06db"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratinglist"},[e("div",{staticClass:"border"}),e("div",{staticClass:"rating-wrapper"},[e("div",{staticClass:"food-ratings border-1px"},[e("h1",{staticClass:"ratings-title"},[t._v("商品评价")]),t.food.ratings?e("div",{staticClass:"rating-sort"},[e("div",{staticClass:"common all",class:{active:"all"===t.ratingType},on:{click:t.showAll}},[e("span",{staticClass:"text"},[t._v("全部")]),e("span",{staticClass:"number"},[t._v(t._s(t.food.ratings.length))])]),e("div",{staticClass:"common recommend",class:{active:"recommend"===t.ratingType},on:{click:t.showRecommend}},[e("span",{staticClass:"text"},[t._v(t._s(t.text.recommend))]),e("span",{staticClass:"number"},[t._v(t._s(t.recommend))])]),e("div",{staticClass:"common disgusting",class:{active:"disgusting"===t.ratingType},on:{click:t.showDisgusting}},[e("span",{staticClass:"text"},[t._v(t._s(t.text.disgusting))]),e("span",{staticClass:"number"},[t._v(t._s(t.disgusting))])])]):t._e()]),e("div",{staticClass:"ratings-select"},[e("div",{staticClass:"ratings-select-content"},[e("span",{staticClass:"check-icon",class:{checked:!0===t.checked},on:{click:t.showContent}},[e("i",{staticClass:"icon-check_circle"})]),e("span",{staticClass:"check-text",class:{checked:!0===t.checked}},[t._v("只看有内容的评价")])])])])])}),w=[],b=new i["a"],y="all",x="recommend",k="disgusting",$={props:{food:{type:Object,required:!0},text:{type:Object,default:function(){return{recommend:"推荐",disgusting:"吐槽"}}}},data:function(){return{ratingList:[],tempCheckedList:[],checked:!1,ratingType:y}},watch:{food:function(){this.tempCheckedList=this.food.ratings,this.ratingList=this.food.ratings}},mounted:function(){this.food.ratings&&(this.tempCheckedList=this.food.ratings,this.ratingList=this.food.ratings)},methods:{showAll:function(){this.ratingType=y,this.ratingList=this.food.ratings,this.tempCheckedList=this.ratingList,this._showContent(),b.$emit("changeratingtype",this.ratingList)},showRecommend:function(){this.ratingType=x,this.ratingList=this.food.ratings.filter(function(t){return 0===t.rateType}),this.tempCheckedList=this.ratingList,this._showContent(),b.$emit("changeratingtype",this.ratingList)},showDisgusting:function(){this.ratingType=k,this.ratingList=this.food.ratings.filter(function(t){return 1===t.rateType}),this.tempCheckedList=this.ratingList,this._showContent(),b.$emit("changeratingtype",this.ratingList)},_showContent:function(){this.checked&&(this.ratingList=this.ratingList.filter(function(t){return!0===!!t.text}))},showContent:function(){this.checked=!this.checked,this.checked?this.ratingList=this.ratingList.filter(function(t){return!0===!!t.text}):this.ratingList=this.tempCheckedList,b.$emit("changeratingtype",this.ratingList)}},computed:{recommend:function(){for(var t=this.food.ratings.length,s=0,e=0;e<t;e++){var i=this.food.ratings[e];0===i.rateType&&s++}return s},disgusting:function(){for(var t=this.food.ratings.length,s=0,e=0;e<t;e++){var i=this.food.ratings[e];1===i.rateType&&s++}return s}},components:{Bus:b}},T=$,O=(e("1718"),Object(h["a"])(T,_,w,!1,null,"535ea654",null)),S=O.exports,j=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"rating-time"},[t._v(t._s(t._f("formatDate")(t.rateTime)))])},L=[];e("c5f6"),e("3b2b"),e("a481");function E(t,s){if("string"!==typeof s)throw new TypeError('The param fmt : "'.concat(s,' is not string"'));/(y+)/.test(s)&&(s=s.replace(RegExp.$1,t.getFullYear()+"").substr(4-RegExp.$1.length));var e={"M+":t.getMonth()+1+"","d+":t.getDate()+"","h+":t.getHours()+"","m+":t.getMinutes()+"","s+":t.getSeconds()+""};for(var i in e)new RegExp("(".concat(i,")")).test(s)&&(s=s.replace(RegExp.$1,1===RegExp.$1.length?e[i]:M(e[i])));return s}function M(t){"string"!==typeof t&&(t=t.toString());var s="00"+t;return s.substr(t.length)}var P={props:{rateTime:{type:Number,required:!0}},filters:{formatDate:function(t){var s=new Date(t);return E(s,"yyyy-MM-dd hh:mm")}}},q=P,N=(e("a632"),Object(h["a"])(q,j,L,!1,null,"13b3ebe4",null)),D=N.exports,A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return void 0!==t.rateType?e("i",{class:t.classMap[t.rateType]}):t._e()},F=[],R={props:{rateType:{type:Number,required:!0}},created:function(){this.classMap=["icon-thumb_up","icon-thumb_down"]}},H=R,z=(e("5d93"),Object(h["a"])(H,A,F,!1,null,"5ed8469d",null)),B=z.exports,Y={props:{food:{type:Object,required:!0},show:{type:Boolean,default:function(){return!1}},selectfoods:{type:Array,required:!0},shopcartComponent:{type:Object,required:!0}},data:function(){return{ratingList:[]}},mounted:function(){var t=this;this.scroll||(this.scroll=new l["a"](this.$refs.food,{click:!0})),b.$on("changeratingtype",function(s){t.ratingList=s})},watch:{food:function(){var t=this;this.ratingList=this.food.ratings,this.$nextTick(function(){t.scroll.refresh()})}},methods:{addfood:function(t,s){s._constructed&&(this.$refs.shopcart.addfood(t,s),this.drop(s))},drop:function(t){event._constructed&&this.shopcartComponent.dropball(t)}},computed:{year:function(){return function(t){var s=new Date(t);return s.getFullYear()}},month:function(){return function(t){var s=new Date(t),e=s.getMonth()+1;return e=1===e.toString().length?"0"+e.toString():e.toString(),e}},day:function(){return function(t){var s=new Date(t),e=s.getDate();return e=1===e.toString().length?"0"+e.toString():e.toString(),e}},hour:function(){return function(t){var s=new Date(t),e=s.getHours();return e=1===e.toString().length?"0"+e.toString():e.toString(),e}},minute:function(){return function(t){var s=new Date(t),e=s.getHours();return e=1===e.toString().length?"0"+e.toString():e.toString(),e}}},components:{cartcontrol:g,ratinglist:S,Bus:b,inputtime:D,iconthumb:B}},I=Y,J=(e("2b1a"),Object(h["a"])(I,m,C,!1,null,"1fbc4a20",null)),X=J.exports,U=0,G={props:{seller:{type:Object,required:!0},selectfoods:{type:Array,required:!0},shopcartComponent:{type:Object,required:!0}},data:function(){return{goods:[],classMap:["decrease","discount","special","invoice","guarantee"],heightArray:[],currentHeight:0,selectedFood:{},show:!1}},created:function(){var t=this;this.$http.get("/api/goods").then(function(s){s.data.errno===U?t.goods=s.data.data:new Error}).catch(function(t){console.log(t)})},mounted:function(){var t=this;this.scrollMenu=new l["a"](this.$refs.menu,{click:!0}),this.scrollFood=new l["a"](this.$refs.food,{click:!0,probeType:3}),this.scrollFood.on("scroll",function(s){t.currentHeight=Math.abs(s.y)})},computed:{leftIndex:function(){for(var t=0;t<this.heightArray.length;t++)if(this.heightArray[t+1]&&this.currentHeight>=this.heightArray[t]&&this.currentHeight<this.heightArray[t+1])return t;return 0}},watch:{goods:function(){var t=this;this.$nextTick(function(){var s=t.$refs.fooditem,e=0;t.heightArray.push(0);for(var i=0;i<s.length;i++)e+=s[i].clientHeight,t.heightArray.push(e)})}},methods:{scrollto:function(t,s){if(s._constructed){var e=this.$refs.fooditem,i=e[t];this.scrollFood.scrollToElement(i,400)}},drop:function(t){this.shopcartComponent.dropball(t)},selectFood:function(t){t&&(this.selectedFood=t),this.show=!this.show}},components:{cartcontrol:g,food:X}},K=G,Q=(e("87bd"),Object(h["a"])(K,o,c,!1,null,"78344ad9",null)),V=Q.exports,W=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-scroll-wrapper"},[e("div",{staticClass:"score-data"},[e("div",{staticClass:"score-left border-1px"},[e("div",{staticClass:"score"},[t._v(t._s(t.seller.score))]),e("div",{staticClass:"score-decription"},[t._v("综合评分")]),e("div",{staticClass:"rankRate"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),e("div",{staticClass:"score-right"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"score-text"},[t._v("服务态度")]),e("star",{attrs:{score:t.seller.serviceScore,size:36,margin:6}}),e("span",{staticClass:"score-number"},[t._v(t._s(t.seller.serviceScore))])],1),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"score-text"},[t._v("商品评分")]),e("star",{attrs:{score:t.seller.foodScore,size:36,margin:6}}),e("span",{staticClass:"score-number"},[t._v(t._s(t.seller.foodScore))])],1),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"score-text"},[t._v("送达时间")]),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),e("ratinglist",{attrs:{food:t.ratings,text:{recommend:"满意",disgusting:"不满意"}}}),e("div",{staticClass:"ratings-list-wrapper"},[e("ul",{staticClass:"ratings-list"},t._l(t.ratingsList,function(s,i){return e("li",{key:i,staticClass:"ratings-item border-1px"},[e("div",{staticClass:"user-avatar"},[e("img",{attrs:{src:s.avatar}})]),e("div",{staticClass:"rating-data-wrapper"},[e("div",{staticClass:"rating-data"},[e("div",{staticClass:"username-and-time"},[e("div",{staticClass:"username"},[t._v(t._s(s.username))]),e("div",{staticClass:"usertime"},[e("inputtime",{attrs:{"rate-time":s.rateTime}})],1)]),e("div",{staticClass:"score-and-deliverytime"},[e("div",{staticClass:"score"},[e("star",{attrs:{score:s.score,size:36,margin:3}})],1),s.deliveryTime?e("div",{staticClass:"deliverytime"},[t._v("\n                  "+t._s(s.deliveryTime)+"分钟送达\n                ")]):t._e()])]),e("div",{staticClass:"rating-text"},[t._v(t._s(s.text))]),e("div",{staticClass:"recommend-wrapper"},[e("div",{staticClass:"iconthumb"},[e("iconthumb",{attrs:{"rate-type":s.rateType}})],1),e("div",{staticClass:"recommend"},[e("ul",{staticClass:"recommend-list"},t._l(s.recommend,function(s,i){return e("li",{key:i,staticClass:"recommend-item"},[t._v("\n                    "+t._s(s)+"\n                  ")])}),0)])])])])}),0)])],1)])},Z=[],tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star"},t._l(t.stars,function(s,i){return e("span",{key:i,class:[s+t.size,"margin"+t.margin]})}),0)},st=[],et=5,it="on",at="off",rt="half",nt={props:{score:{type:Number,requierd:!0},size:{type:Number,required:!0},margin:{type:Number}},computed:{stars:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!==0,i=Math.floor(s),a=0;a<i;a++)t.push(it);e&&t.push(rt);while(t.length<et)t.push(at);return t}}},ot=nt,ct=(e("4b11"),Object(h["a"])(ot,tt,st,!1,null,"4d12225d",null)),lt=ct.exports,dt={props:{seller:{type:Object,required:!0},ratings:{type:Object,required:!0}},data:function(){return{ratingsList:[]}},watch:{ratings:function(){var t=this;this.ratingsList=this.ratings.ratings,this.$nextTick(function(){t.scroll.refresh()})}},mounted:function(){var t=this;this.ratings.ratings&&(this.ratingsList=this.ratings.ratings),this.scroll||(this.scroll=new l["a"](this.$refs.ratings,{click:!0})),b.$on("changeratingtype",function(s){t.ratingsList=s})},components:{star:lt,ratinglist:S,inputtime:D,Bus:b,iconthumb:B}},ut=dt,pt=(e("1d1b"),Object(h["a"])(ut,W,Z,!1,null,"61609a22",null)),ft=pt.exports,ht=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerScroll",staticClass:"seller"},[e("div",{staticClass:"sellerScroll"},[e("div",{staticClass:"seller-data"},[e("div",{staticClass:"seller-data-content"},[e("div",{staticClass:"seller-data-content-up border-1px"},[e("div",{staticClass:"seller-data-left"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"seller-star"},[e("star",{attrs:{score:t.seller.score,size:36,margin:5}}),t.ratings.ratings?e("span",{staticClass:"ratings-length"},[t._v("("+t._s(t.ratings.ratings.length)+")")]):t._e(),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1)]),e("div",{staticClass:"seller-data-right"},[e("div",{staticClass:"favorite",class:{select:t.favorite},on:{click:function(s){return t.selectFavorite(s)}}},[e("i",{staticClass:"icon-favorite"})]),e("div",{staticClass:"favorite-text"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.favorite,expression:"!favorite"}],staticClass:"nofavorite"},[t._v("收藏")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.favorite,expression:"favorite"}]},[t._v("已收藏")])])])]),e("div",{staticClass:"seller-data-content-down"},[e("div",{staticClass:"content-down-left"},[e("div",{staticClass:"data-content-title"},[t._v("起送价")]),e("div",{staticClass:"data-content-detail"},[t._v(t._s(t.seller.minPrice)),e("span",[t._v("元")])])]),e("div",{staticClass:"content-down-center"},[e("div",{staticClass:"data-content-title"},[t._v("商家配送")]),e("div",{staticClass:"data-content-detail"},[t._v(t._s(t.seller.deliveryPrice)),e("span",[t._v("元")])])]),e("div",{staticClass:"content-down-right"},[e("div",{staticClass:"data-content-title"},[t._v("平均配送时间")]),e("div",{staticClass:"data-content-detail"},[t._v(t._s(t.seller.deliveryTime)),e("span",[t._v("分钟")])])])])]),e("div",{staticClass:"border"})]),e("div",{staticClass:"seller-bulletin"},[e("div",{staticClass:"seller-bulletin-content"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),e("p",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t.seller.supports?e("ul",{staticClass:"supports-list"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"supports-item border-1px"},[e("span",{staticClass:"support-icon",class:t.classMap[s.type]}),e("span",{staticClass:"support-description"},[t._v(t._s(s.description))])])}),0):t._e()]),e("div",{staticClass:"border"})]),e("div",{staticClass:"seller-pictures"},[e("div",{staticClass:"seller-pictures-content"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),e("div",{ref:"picturesScroll",staticClass:"pics-content"},[e("div",{staticClass:"pics-scroll-wrapper"},[t.seller.pics?e("ul",{staticClass:"pics-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pics-item"},[e("img",{staticClass:"pic",attrs:{src:t}})])}),0):t._e()])])]),e("div",{staticClass:"border"})]),e("div",{staticClass:"seller-information"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),e("ul",{staticClass:"infos-list"},t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"infos-item"},[t._v(t._s(s))])}),0)])])])},vt=[],gt=e("f499"),mt=e.n(gt);function Ct(t,s,e){if(void 0!==t){var i=window.localStorage.__seller__;if(i){if(i=JSON.parse(i),i[t])return i[t][s]=e,window.localStorage.__seller__=mt()(i)}else i={};i[t]={},i[t][s]=e,window.localStorage.__seller__=mt()(i)}}function _t(t,s,e){if(void 0!==t){var i=window.localStorage.__seller__;return i?(i=JSON.parse(i),i[t]&&i[t][s]||e):e}}var wt={props:{seller:{type:Object,required:!0},ratings:{type:Object,required:!0}},data:function(){var t=this;return{favorite:function(){return _t(t.seller.id,"favorite",!1)}()}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},mounted:function(){this.scrollY&&this.scrollX||(this.scrollY=new l["a"](this.$refs.sellerScroll,{click:!0}),this.scrollX=new l["a"](this.$refs.picturesScroll,{scrollX:!0,scrollY:!1}))},methods:{selectFavorite:function(t){t._constructed&&(this.favorite=!this.favorite,Ct(this.seller.id,"favorite",this.favorite))}},components:{star:lt}},bt=wt,yt=(e("9aa2"),Object(h["a"])(bt,ht,vt,!1,null,"35585358",null)),xt=yt.exports;i["a"].use(n["a"]);var kt=new n["a"]({mode:"history",base:"/",linkExactActiveClass:"active",routes:[{path:"/",name:"goods",component:V,meta:{keepAlive:!0}},{path:"/ratings",name:"ratings",component:ft},{path:"/seller",name:"seller",component:xt}]}),$t=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("vheader",{attrs:{seller:t.seller}}),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/"}},[t._v("商品")])],1),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评价")])],1),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"seller"}},[t._v("商家")])],1)]),e("keep-alive",[e("router-view",{attrs:{seller:t.seller,ratings:t.ratings,selectfoods:t.selectfoods,"shopcart-component":t.shopcartComponent}})],1),e("shopcart",{ref:"shopcart",attrs:{seller:t.seller,selectfoods:t.selectfoods}})],1)},Tt=[],Ot=e("5176"),St=e.n(Ot);e("28a5"),e("4917"),e("386d");function jt(){var t=window.location.search;t=decodeURIComponent(t);var s={},e=/[?&][^?&]+=[^&]+/g,i=t.match(e);return i&&i.forEach(function(t){var e=t.substr(1).split("="),i=e[0],a=e[1];s[i]=a}),s}var Lt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t.seller.supports?e("div",{staticClass:"count",on:{click:t.showDetail}},[e("span",{staticClass:"count-support"},[t._v(t._s(t.seller.supports.length)+"个")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-icon"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),e("div",{staticClass:"bgimg"},[e("img",{attrs:{width:"100%",src:t.seller.avatar}})]),e("transition",{attrs:{name:"show-detail"},on:{enter:t.enter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("div",{staticClass:"detail-name"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{score:t.seller.score,size:48}})],1),e("div",{staticClass:"title-wrapper"},[e("vtitle",{attrs:{title:"优惠信息"}})],1),e("ul",{staticClass:"supports-list"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"supports-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])}),0),e("div",{staticClass:"title-wrapper"},[e("vtitle",{attrs:{title:"商家公告"}})],1),e("p",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:t.showDetail}})])])])],1)},Et=[],Mt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("span",{staticClass:"left-line"}),e("span",{staticClass:"title-name"},[t._v(t._s(t.title))]),e("span",{staticClass:"right-line"})])},Pt=[],qt={props:{title:{type:String,required:!0}}},Nt=qt,Dt=(e("d889"),Object(h["a"])(Nt,Mt,Pt,!1,null,"faaa6612",null)),At=Dt.exports,Ft={data:function(){return{classMap:["decrease","discount","special","invoice","guarantee"],show:!1}},props:{seller:{type:Object}},methods:{showDetail:function(){this.show=!this.show},enter:function(t){t.scrollTop=0}},components:{star:lt,vtitle:At}},Rt=Ft,Ht=(e("0621"),Object(h["a"])(Rt,Lt,Et,!1,null,"657ee3cb",null)),zt=Ht.exports,Bt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content-left",on:{click:t.showlist}},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.foodcount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.foodcount>0},attrs:{id:"shop-icon"}})]),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("transition",{key:i,on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner"})])])}),1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.foodcount,expression:"foodcount"}],staticClass:"foodcount"},[t._v(t._s(t.foodcount))])]),e("div",{staticClass:"price",class:{highlight:t.foodcount>0}},[t._v("￥"+t._s(t.totalprice))]),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.seller.deliveryPrice)+"元")])]),e("div",{staticClass:"content-right",on:{click:t.pay}},[t.foodcount?t.totalprice<t.seller.minPrice?e("div",{staticClass:"pay"},[t._v("还差￥"+t._s(t.seller.minPrice-t.totalprice)+"起送")]):t.totalprice>=t.seller.minPrice?e("div",{staticClass:"topay"},[t._v("结算")]):t._e():e("div",{staticClass:"pay"},[t._v("￥"+t._s(t.seller.minPrice)+"起送")])]),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showshoplist,expression:"showshoplist"}],staticClass:"shoplist"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"shopcart-title"},[t._v("购物车")]),e("span",{staticClass:"empty",on:{click:t.emptylist}},[t._v("清空")])]),e("div",{ref:"shopcartContent",staticClass:"shopcart-content"},[e("ul",{staticClass:"content-list"},t._l(t.selectfoods,function(s){return e("li",{key:s.name,staticClass:"content-item border-1px"},[e("span",{staticClass:"food-name"},[t._v(t._s(s.name))]),e("cartcontrol",{staticClass:"select",attrs:{food:s,selectfoods:t.selectfoods},on:{drop:t.dropball}}),e("span",{staticClass:"food-price"},[t._v("￥"+t._s(s.price*s.count))])],1)}),0)])])]),e("transition",{attrs:{name:"mask"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showshoplist,expression:"showshoplist"}],staticClass:"list-mask",on:{click:t.showlist}})])],1)},Yt=[],It={props:{seller:{type:Object,required:!0},selectfoods:{type:Array,default:function(){return[]}}},data:function(){return{showshoplist:!1,balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropballs:[]}},mounted:function(){new l["a"](this.$refs.shopcartContent,{click:!0})},computed:{totalprice:function(){var t=0;return this.selectfoods.forEach(function(s){t+=s.price*s.count}),t},foodcount:function(){var t=0;return this.selectfoods.forEach(function(s){t+=s.count}),t}},methods:{showlist:function(){this.selectfoods.length&&(this.showshoplist=!this.showshoplist)},dropball:function(t){var s=this,e=t.currentTarget;this.$nextTick(function(){for(var t=s.balls.length,i=0;i<t;i++){var a=s.balls[i];if(!a.show)return a.show=!0,a.el=e,void s.dropballs.push(a)}})},beforeEnter:function(t){var s=this.dropballs.length;s--;var e=this.dropballs[s],i=e.el.getBoundingClientRect(),a=window.innerHeight,r=i.left-32,n=-(a-i.top-38);t.style.display="",t.style.transform="translate3d(".concat(r,"px, 0, 0)");var o=t.children[0];o.style.transform="translate3d(0, ".concat(n,"px, 0)"),t.style.transition="all 0.4s linear",o.style.transition="all 0.4s cubic-bezier(.64,-0.38,.83,.67)"},enter:function(t){t.offsetHeight;var s=t.children[0];t.style.transform="translate3d(0, 0, 0)",s.style.transform="translate3d(0, 0, 0)"},afterEnter:function(t){var s=this.dropballs.shift();s.show=!1,t.style.display="none"},emptylist:function(){for(var t=this.selectfoods.length,s=t-1;s>=0;s--)this.selectfoods[s].count=0,this.selectfoods.splice(s,1)},pay:function(){this.totalprice<this.seller.minPrice||(alert("支付".concat(this.totalprice,"元")),this.emptylist())}},watch:{selectfoods:function(t){t.length||(this.showshoplist=!1)}},components:{cartcontrol:g}},Jt=It,Xt=(e("2ca9"),Object(h["a"])(Jt,Bt,Yt,!1,null,"602f8a4c",null)),Ut=Xt.exports,Gt=0,Kt={data:function(){return{seller:{id:function(){var t=jt();return t.id}()},ratings:{},selectfoods:[],shopcartComponent:{}}},created:function(){var t=this;this.$http.get("/api/seller?id="+this.seller.id).then(function(s){s.data.errno===Gt?t.seller=St()({},t.seller,s.data.data):new Error}).catch(function(t){console.log(t)}),this.$http.get("/api/ratings").then(function(s){if(s.data.errno!==Gt)throw new Error;t.$set(t.ratings,"ratings",s.data.data)}).catch(function(t){console.log(t)})},mounted:function(){this.shopcartComponent=this.$refs.shopcart},components:{vheader:zt,shopcart:Ut}},Qt=Kt,Vt=(e("7faf"),Object(h["a"])(Qt,$t,Tt,!1,null,null,null)),Wt=Vt.exports;e("f867");i["a"].prototype.$http=r.a,i["a"].config.productionTip=!1,new i["a"]({router:kt,render:function(t){return t(Wt)}}).$mount("#app")},"5d93":function(t,s,e){"use strict";var i=e("09f5"),a=e.n(i);a.a},"609b":function(t,s,e){},"6a96":function(t,s,e){},"783c":function(t,s,e){},"7faf":function(t,s,e){"use strict";var i=e("8fba"),a=e.n(i);a.a},"87bd":function(t,s,e){"use strict";var i=e("4544"),a=e.n(i);a.a},"8fba":function(t,s,e){},"9a03":function(t,s,e){},"9aa2":function(t,s,e){"use strict";var i=e("609b"),a=e.n(i);a.a},a632:function(t,s,e){"use strict";var i=e("2c5d"),a=e.n(i);a.a},af1b:function(t,s,e){},b5fd:function(t,s,e){"use strict";var i=e("783c"),a=e.n(i);a.a},be40:function(t,s,e){},d889:function(t,s,e){"use strict";var i=e("ed30"),a=e.n(i);a.a},de0c:function(t,s,e){},ed30:function(t,s,e){},f685:function(t,s,e){},f867:function(t,s,e){}});