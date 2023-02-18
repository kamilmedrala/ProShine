(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6,8,17],{294:function(t,e,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("2cc8f878",content,!0,{sourceMap:!1})},295:function(t,e,r){"use strict";r.r(e);var n=r(299),l=r(293),o={name:"Appear",setup:function(){var t=Object(l.ref)(null);return{target:t,targetIsVisible:Object(n.useElementVisibility)(t)}}},c=r(13),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"target",staticClass:"w-full transition transform duration-700",class:{"opacity-0 md:translate-y-5":!t.targetIsVisible}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,r){"use strict";r.r(e);var n={name:"HeaderSection",props:{title:{type:String,required:!0},h1:{type:Boolean,required:!1}},methods:{beforeEnter:function(t){console.log("before")},enter:function(){console.log("entered")}}},l=(r(297),r(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",[r("div",{staticClass:"w-full"},[t.h1?r("h1",{staticClass:"relative header-text text-[50px] md:text-[90px] tracking-widest uppercase italic transition leading-normal"},[t._v("\n      "+t._s(t.title)+"\n    ")]):r("h2",{staticClass:"relative header-text text-[42px] md:text-[64px] tracking-widest font-normal uppercase italic transition leading-normal"},[t._v("\n      "+t._s(t.title)+"\n\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,r){"use strict";r(294)},298:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,"h1.header-text,h2.header-text{-webkit-text-stroke:.5px #fff;-webkit-text-fill-color:transparent}",""]),n.locals={},t.exports=n},310:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("8167adb6",content,!0,{sourceMap:!1})},323:function(t,e,r){"use strict";r(310)},324:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,"img.loading~span[data-v-f32de206]{opacity:0}.before-load[data-v-f32de206], .before-load div[data-v-f32de206]{width:100%}",""]),n.locals={},t.exports=n},329:function(t,e,r){"use strict";r.r(e);r(67);var n={name:"TilesGallery",props:{data:Array},data:function(){return{modalActive:!1,modalImgUrl:""}},methods:{removeLoadingStyle:function(t,e){var r;(t.target.classList.remove("loading"),"number"==typeof e)&&(null===(r=this.$refs.images[e])||void 0===r||r.classList.remove("before-load"))},modalOpen:function(t){this.modalActive=!0,this.modalImgUrl=t},modalClose:function(t){if("IMG"!=t.target.nodeName){this.modalActive=!1,this.$refs.modal.querySelector("img").classList.add("loading");var e=this;setTimeout((function(){e.modalImgUrl=""}),300)}}}},l=(r(323),r(13)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative z-10"},[r("div",{staticClass:"flex flex-wrap gap-2 fade-right transition duration-200"},t._l(t.data,(function(image,e){return r("div",{key:e,ref:"images",refInFor:!0,staticClass:"shrink-0 before-load flex-grow h-[150px] sm:h-[230px] md:h-[300px] lg:h-[370px] xl:h-[450px]"},[r("nuxt-picture",{staticClass:"h-full cursor-pointer flex group overflow-hidden",attrs:{src:image.full_image_url,fit:"cover",sizes:"100px xs:150px sm:200px md:400px lg:800px",imgAttrs:{class:"loading object-cover h-full w-auto flex-grow group-hover:scale-[101%] transition duration-300"}},on:{click:function(e){return t.modalOpen(image.full_image_url)},load:function(r){return t.removeLoadingStyle(r,e)}}})],1)})),0),t._v(" "),r("div",{ref:"modal",staticClass:"fixed inset-0 bg-gray-dark/70 px-6 md:px-10 pt-24 pb-10 transition duration-300",class:[t.modalActive?"opacity-1 backdrop-blur-md blur-fix":"opacity-0 pointer-events-none"],on:{click:function(e){return t.modalClose(e)}}},[r("div",{staticClass:"h-full flex justify-center items-center"},[r("div",{staticClass:"relative h-full"},[r("img",{staticClass:"loading h-full object-contain transition duration-300",attrs:{src:t.modalImgUrl,loading:"lazy"},on:{load:function(e){return t.removeLoadingStyle(e)}}}),t._v(" "),r("span",{staticClass:"absolute top-0 -right-5 md:-right-10 w-10 h-10 pl-2 text-white text-3xl cursor-pointer transition"},[t._v("X")])])])])])}),[],!1,null,"f32de206",null);e.default=component.exports},343:function(t,e,r){"use strict";r.r(e);var n=r(7),l=(r(44),r(296)),o=r(295),c=r(329),d={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.store,e.next=3,r.$get("https://api.kamilmedrala.thecamels.eu/wp-json/wp/v2/pages/214?acf_format=standard").then((function(t){n.commit("setAcfData",{response:t.acf,location:"galleryPage"})}));case 3:case"end":return e.stop()}}),e)})))()},name:"GalleryPage",components:{HeaderSection:l.default,Appear:o.default,TilesGallery:c.default},data:function(){return{pageData:this.$store.getters.gallerypageData}}},f=r(13),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:" relative pt-20 px-[5%] mx-auto lg:container overflow-hidden"},[r("HeaderSection",{staticClass:"fade-left transition duration-200",attrs:{title:"Galeria",h1:!0}})],1),t._v(" "),r("div",{staticClass:"px-[5%] mx-auto lg:container mb-20 md:mb-[150px]"},[r("TilesGallery",{attrs:{data:t.pageData.photo_gallery.gallery_page_content[0]}})],1),t._v(" "),r("Appear",{staticClass:"mb-20 md:mb-[150px]"},[r("SectionCta")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderSection:r(296).default,TilesGallery:r(329).default,SectionCta:r(318).default,Appear:r(295).default})}}]);