webpackJsonp([0],[,,function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=o(3),i=n(s),r=o(7),l=n(r);console.log(i.default.version),new i.default({el:"#app-wrap",render:function(e){return e(l.default)}})},,,,,function(e,t,o){"use strict";function n(e){o(8)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(10),i=o.n(s),r=o(26),l=o(0),a=n,c=l(i.a,r.a,!1,a,null,null);t.default=c.exports},function(e,t){},,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(11),s=function(e){return e&&e.__esModule?e:{default:e}}(n),i={hex:"#194d33",hsl:{h:150,s:.5,l:.2,a:1},hsv:{h:150,s:.66,v:.3,a:1},rgba:{r:25,g:77,b:51,a:1},a:1};t.default={components:{"chrome-picker":s.default},data:function(){return{colors:i,isPickingColor:!1}},computed:{bgc:function(){return this.colors.hex},buttonText:function(){return this.isPickingColor?"Choose Color":"Pick a Color"},buttonColor:function(){return this.colors.hex?this.colors.hex:"#CCCCCC"},buttonTextColor:function(){return this.colors.hsl.l>.4?"#000000":"#FFFFFF"}},methods:{togglePicker:function(){this.isPickingColor=!this.isPickingColor},onOk:function(){console.log("ok")},onCancel:function(){console.log("cancel")},updateValue:function(e){this.colors=e}},created:function(){}}},function(e,t,o){"use strict";function n(e){o(12)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(13),i=o.n(s),r=o(25),l=o(0),a=n,c=l(i.a,r.a,!1,a,null,null);t.default=c.exports},function(e,t){},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(14),i=n(s),r=o(16),l=n(r),a=o(21),c=n(a);t.default={name:"Chrome",mixins:[i.default],props:{disableAlpha:{type:Boolean,default:!0}},components:{saturation:l.default,hue:c.default},data:function(){return{fields:["hex","rgba","hsla"],fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,o=e.s,n=e.l;return{h:t.toFixed(),s:(100*o).toFixed()+"%",l:(100*n).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},watch:{colors:function(e){e.a<1&&0===this.fieldsIndex&&(this.fieldsIndex=1)}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)}}}},function(e,t,o){"use strict";function n(e,t){var o,n=e&&e.a;!(o=e&&e.hsl?(0,i.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,i.default)(e.hex):(0,i.default)(e))||void 0!==o._a&&null!==o._a||o.setAlpha(n||1);var s=o.toHsl(),r=o.toHsv();return 0===s.s&&(r.h=s.h=e.h||e.hsl&&e.hsl.h||t||0),r.v<.0164&&(r.h=e.h||e.hsv&&e.hsv.h||0,r.s=e.s||e.hsv&&e.hsv.s||0),s.l<.01&&(s.h=e.h||e.hsl&&e.hsl.h||0,s.s=e.s||e.hsl&&e.hsl.s||0),{hsl:s,hex:o.toHexString().toUpperCase(),rgba:o.toRgb(),hsv:r,oldHue:e.h||t||s.h,source:e.source,a:e.a||o.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(15),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={props:["value"],data:function(){return{val:n(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=n(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=n(e,t||this.oldHue)},isValidHex:function(e){return(0,i.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],o=0,n=0,s=0;s<t.length;s++){var i=t[s];e[i]&&(o++,isNaN(e[i])||n++)}if(o===n)return e}}}},,function(e,t,o){"use strict";function n(e){o(17)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(18),i=o.n(s),r=o(20),l=o(0),a=n,c=l(i.a,r.a,!1,a,null,null);t.default=c.exports},function(e,t){},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(19),s=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,s.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var o=this.$refs.container,n=o.clientWidth,s=o.clientHeight,i=o.getBoundingClientRect().left+window.pageXOffset,r=o.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),a=e.pageY||(e.touches?e.touches[0].pageY:0),c=l-i,u=a-r;c<0?c=0:c>n?c=n:u<0?u=0:u>s&&(u=s);var h=c/n,d=-u/s+1;d=d>0?d:0,d=d>1?1:d,this.throttle(this.onChange,{h:this.colors.hsv.h,s:h,v:d,a:this.colors.hsv.a,source:"hsva"})},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},,function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},on:{mousedown:e.handleMouseDown}},[o("div",{staticClass:"vc-saturation--white"}),e._v(" "),o("div",{staticClass:"vc-saturation--black"}),e._v(" "),o("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[o("div",{staticClass:"vc-saturation-circle"})])])},s=[],i={render:n,staticRenderFns:s};t.a=i},function(e,t,o){"use strict";function n(e){o(22)}Object.defineProperty(t,"__esModule",{value:!0});var s=o(23),i=o.n(s),r=o(24),l=o(0),a=n,c=l(i.a,r.a,!1,a,null,null);t.default=c.exports},function(e,t){},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var o,n,s=this.$refs.container,i=s.clientWidth,r=s.clientHeight,l=s.getBoundingClientRect().left+window.pageXOffset,a=s.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),h=c-l,d=u-a;"vertical"===this.direction?(d<0?o=360:d>r?o=0:(n=-100*d/r+100,o=360*n/100),this.colors.hsl.h!==o&&this.$emit("change",{h:o,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(h<0?o=0:h>i?o=360:(n=100*h/i,o=360*n/100),this.colors.hsl.h!==o&&this.$emit("change",{h:o,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:["vc-hue",e.directionClass]},[o("div",{ref:"container",staticClass:"vc-hue-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[o("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft}},[o("div",{staticClass:"vc-hue-picker"})])])])},s=[],i={render:n,staticRenderFns:s};t.a=i},function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""]},[o("div",{staticClass:"vc-chrome-saturation-wrap"},[o("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),o("div",{staticClass:"vc-chrome-body"},[o("div",{staticClass:"vc-chrome-controls"},[o("div",{staticClass:"vc-chrome-sliders"},[o("div",{staticClass:"vc-chrome-hue-wrap"},[o("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])])])])},s=[],i={render:n,staticRenderFns:s};t.a=i},function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("a",{staticClass:"github-fork-ribbon",attrs:{href:"https://github.com/xiaokaike/vue-color",title:"Fork me on GitHub"}},[e._v("Fork me on GitHub")]),e._v(" "),o("div",{staticClass:"header-container"},[o("div",{staticClass:"header-bg",style:{"background-color":e.bgc}}),e._v(" "),o("header",{staticClass:"header"},[e._m(0),e._v(" "),o("div",{staticClass:"demo-item"},[o("button",{staticClass:"color-button",style:{"background-color":e.buttonColor,color:e.buttonTextColor},attrs:{type:"button"},on:{click:e.togglePicker}},[e._v(e._s(e.buttonText))]),e._v(" "),e.isPickingColor?o("chrome-picker",{attrs:{value:e.colors},on:{input:e.updateValue}}):e._e(),e._v(" "),o("h6",[e._v("Chrome")]),e._v(" "),o("h4",[e._v(e._s(e.colors))])],1)])])])},s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"intro-wrap"},[o("div",{staticClass:"intro"},[o("h1",[e._v("Vue-color")]),e._v(" "),o("p",[e._v("Just the modified Chrome picker")])])])}],i={render:n,staticRenderFns:s};t.a=i}],[2]);
//# sourceMappingURL=app.869f02700aac8d45018c.js.map