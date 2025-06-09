import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Link-DjAt4iCU.js";
import { _ as _sfc_main$3 } from "./Tag-Cj_fbZ-B.js";
import { _ as _sfc_main$5, a as _sfc_main$7 } from "./WhyUs-DaWUSyPO.js";
import { F as Faq } from "./Faq-BGH3-OVl.js";
import { _ as _sfc_main$9 } from "./Contact-By2xOtDz.js";
import { _ as _sfc_main$6 } from "./Location-BnB0Z_ns.js";
import { S as ScrollText } from "./ScrollText-DxofIJwR.js";
import { _ as _sfc_main$8 } from "./Testimonials-D9S0LmCD.js";
import { _ as _sfc_main$4 } from "./Button-kovZ79jb.js";
import { u as useHead } from "./v3-CVz4KKeU.js";
import "./Product-izlnkNt6.js";
import "./index-DxlYqOiA.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/hookable/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/unctx/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/radix3/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/defu/dist/defu.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/ufo/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/klona/dist/index.mjs";
import "pinia";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/perfect-debounce/dist/index.mjs";
import "./locationStore-ChZVS-tN.js";
import "gsap";
import "gsap/ScrollTrigger.js";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0$1 = "" + __buildAssetsURL("frites-maisons.BGR8K9V9.jpg");
const _imports_1 = "" + __buildAssetsURL("frites-maisons-2.C9pytQ88.jpg");
const _imports_0 = "" + __buildAssetsURL("presentation.DTd2SNKg.webp");
const _sfc_main$1 = {
  __name: "HeroCarte",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-[#070035] h-fit relative flex flex-col md:flex-row w-full rounded-3xl md:rounded-[50px] overflow-visible",
        "data-aos": "fade-up",
        "data-aos-duration": "1000"
      }, _attrs))}><h1 class="sr-only"> Commander au food truck La Frite Attaque : smash burgers, frites fraîches et douceurs maison en Auvergne Rhône-Alpes </h1><div class="basis-1/2 flex flex-col justify-between p-4 md:p-10 space-y-6" data-aos="fade-right" data-aos-delay="200"><h2 class="flex flex-col font-bold uppercase text-2xl md:text-3xl leading-tight"><span class="text-beige">Préparez-vous à</span><span class="text-orange"> faire danser vos papilles !</span></h2><p class="text-beige leading-relaxed"> Chez <strong>La Frite Attaque</strong>, tout est fait avec ❤️ : tomates tranchées minute, patates fraîches du jour, et nos pâtes à <em>kürtős</em> &amp; <em>bubble waffles</em> sont 100% maison. <br> Vous composez, on régale ! </p>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        text: "📲 Commander avant 11h (midi) ou 18h (soir)",
        isolateClass: "transition hover:scale-105 hover:shadow-md duration-300 w-fit text-xs text-white md:text-sm text-center border-red"
      }, null, _parent));
      _push(`<ul class="text-beige font-poppins space-y-3 list-disc list-inside"><li> Choisissez ce qui vous fait saliver (burgers, frites, desserts…). </li><li> Commandez sur notre plateforme de commande, choissisez l&#39;heure de retrait, payez et c&#39;est prêt ! </li><li> Passez en priorité au food truck : c’est chaud, c’est prêt, c’est pour vous ! </li></ul></div><div class="basis-1/2 flex justify-end p-2" data-aos="fade-left" data-aos-delay="400"><img class="w-full md:w-4/5 max-h-[400px] md:max-h-[5050px] object-cover rounded-3xl md:rounded-[50px] transition-transform duration-400 hover:scale-105"${ssrRenderAttr("src", _imports_0)} alt="Produits faits maison et préparés minute au food truck La Frite Attaque"></div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        text: "Bon app’ les gourmands !",
        class: "absolute -rotate-8 transform left-1/2 -translate-x-1/2 -bottom-5 px-5 md:text-xl bg-clay-orange"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carte/HeroCarte.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "la-carte",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "La Carte | Burgers, Frites Maison & Douceurs – La Frite Attaque Food Truck",
      meta: [
        {
          name: "description",
          content: "Découvrez la carte gourmande de La Frite Attaque : burgers artisanaux, frites maison et desserts irrésistibles. À déguster partout en Rhône-Alpes !"
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    });
    const products = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="sr-only"> Carte Printemps 2025 – Smash burgers, frites maison et douceurs sucrées </h1><div class="bg-beige pt-10 px-5 lg:px-28">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="bg-beige pt-20"><h2 class="text-outline px-5 text-3xl text-center text-white"> Notre proposition salée <br> Printemps 2025 </h2><p class="mt-2 px-5 text-base md:w-1/2 mx-auto font-poppins text-center"><br> Bienvenue chez La Frite Attaque ! Parcourez notre carte alléchante composée de burgers artisanaux, de frites maison dorées à souhait et de desserts gourmands. Notre food truck sillonne la région Rhône-Alpes pour vous régaler.<br><br></p></div><div class="bg-beige-light py-12">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "Notre proposition chaude",
        class: "w-fit mx-auto"
      }, null, _parent));
      _push(`<h2 class="text-outline text-3xl text-center text-white mt-3">Burger</h2><div class="px-5 md:px-28 mt-5">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        categoryName: "Burger",
        categoryProducts: unref(products)["Burger"]
      }, null, _parent));
      _push(`</div></div><div class="bg-beige py-10">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "Accompagnement",
        class: "w-fit mx-auto"
      }, null, _parent));
      _push(`<div class="flex flex-col lg:flex-row gap-y-5 items-center px-5 lg:px-44 xl:px-60 mt-5"><div class="lg:w-2/3"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_0$1)} alt="Frites maison"></div><div class="mx-auto"><h2 class="text-outline text-3xl text-center text-white"> Frites Maison </h2><p class="mt-4 text-base font-poppins text-center"> Appréciez nos délicieuses frites maison croustillantes : les patates sont lavées, coupées, blanchies puis frites en direct. </p><div class="flex justify-center space-x-4 mt-4"><div class="flex flex-col items-center space-y-1.5"><span class="bg-red font-permanent text-white py-1 px-4 rounded-full">60g</span><span class="font-poppins font-bold">2.00€ </span></div><div class="flex flex-col items-center space-y-1.5"><span class="bg-red font-permanent text-white py-1 px-4 rounded-full">100g</span><span class="font-poppins font-bold">2.50€ </span></div><div class="flex flex-col items-center space-y-1.5"><span class="bg-red font-permanent text-white py-1 px-4 rounded-full">250g</span><span class="font-poppins font-bold">3.50€ </span></div><div class="flex flex-col items-center space-y-1.5"><span class="bg-red font-permanent text-white py-1 px-4 rounded-full">400g</span><span class="font-poppins font-bold">5.00€ </span></div></div></div><div class="lg:w-2/3"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_1)} alt="Frites maison"></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(ScrollText, { fill: false }, null, _parent));
      _push(`<div class="bg-beige-light py-12">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "Rafraîchissement",
        class: "w-fit mx-auto"
      }, null, _parent));
      _push(`<h2 class="text-outline text-3xl text-center text-white mt-3">Boissons fraîches</h2><div class="px-5 md:px-28 mt-5">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        categoryName: "Boissons",
        categoryProducts: unref(products)["Boissons"]
      }, null, _parent));
      _push(`</div></div><div class="bg-beige py-12">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "Une douceur pour finir",
        class: "w-fit mx-auto"
      }, null, _parent));
      _push(`<h2 class="text-outline text-3xl text-center text-white mt-3">Desserts</h2><div class="px-5 md:px-28 mt-5">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        categoryName: "Dessert",
        categoryProducts: unref(products)["Dessert"]
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(Faq, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/la-carte.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=la-carte-BU8JbWzL.js.map
