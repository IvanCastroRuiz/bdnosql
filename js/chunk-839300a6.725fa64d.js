(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-839300a6"],{"18b6":function(t,i,a){"use strict";a("32c9")},"32c9":function(t,i,a){},5997:function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"accesibilidad"},[e("div",{staticClass:"accesibilidad__menu"},[t._m(0),e("div",{staticClass:"accesibilidad__menu__content"},[e("div",{staticClass:"accesibilidad__menu__item",on:{click:function(i){return t.contraste()}}},[e("i",{staticClass:"fas fa-adjust"}),e("span",[t._v("Contraste")])]),e("div",{staticClass:"accesibilidad__menu__item",on:{click:function(i){return t.aumentarLetra()}}},[e("img",{attrs:{src:a("6d0a")}}),e("span",[t._v("Aumentar letra")])]),e("div",{staticClass:"accesibilidad__menu__item",on:{click:function(i){return t.reducirLetra()}}},[e("img",{attrs:{src:a("ba62")}}),e("span",[t._v("Reducir letra")])])])])])},s=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"accesibilidad__menu__header"},[a("div",{staticClass:"accesibilidad__menu__item"},[a("i",{staticClass:"fas fa-universal-access"}),a("span",{staticClass:"h5 mb-0"},[t._v("Accesibilidad")])])])}],c={name:"Accesibilidad",data:function(){return{fontSize:16}},methods:{contraste:function(){var t=document.querySelector("html"),i="html-constraste-activo";console.log(t),t.classList.contains(i)?t.classList.remove(i):t.classList.add(i)},aumentarLetra:function(){var t=document.querySelector("body");this.fontSize>=22||(this.fontSize+=2,t.style.fontSize=this.fontSize+"px")},reducirLetra:function(){var t=document.querySelector("body");this.fontSize<=16||(this.fontSize-=2,t.style.fontSize=this.fontSize+"px")}}},n=c,r=(a("18b6"),a("2877")),o=Object(r["a"])(n,e,s,!1,null,"e1c081da",null);i["default"]=o.exports},"6d0a":function(t,i,a){t.exports=a.p+"img/aumentar.f8cfa8f5.svg"},ba62:function(t,i,a){t.exports=a.p+"img/reducir.954d7777.svg"}}]);
//# sourceMappingURL=chunk-839300a6.725fa64d.js.map