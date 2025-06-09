import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { b as imageTwo, a as imageOne, t as third, i as imageThree, _ as _sfc_main$5 } from "./03-C4UTujI1.js";
import { _ as _export_sfc } from "../server.mjs";
import __nuxt_component_0 from "./index-DxlYqOiA.js";
import { _ as _sfc_main$6 } from "./Link-DjAt4iCU.js";
import { _ as _sfc_main$7 } from "./Tag-Cj_fbZ-B.js";
const _sfc_main$4 = {
  __name: "BorderedImage",
  __ssrInlineRender: true,
  props: {
    image: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        class: "shadow-[0_3px_0px_#000000] border-5 md:border-10 rounded-t-full block border-black transform",
        src: __props.image,
        alt: ""
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/BorderedImage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const decathlon = "" + __buildAssetsURL("decathlon.C3br4Ur8.svg");
const dekra = "" + __buildAssetsURL("dekra.Bn-iVcM0.svg");
const edf = "" + __buildAssetsURL("edf.Bx2SDkw3.svg");
const henriot = "" + __buildAssetsURL("henriot.COGUvVcz.svg");
const veuve = "" + __buildAssetsURL("veuve.BJPMaDKe.svg");
const _sfc_main$3 = {
  __name: "OurCustomers",
  __ssrInlineRender: true,
  setup(__props) {
    const customers = ref([
      {
        name: "",
        image: decathlon
      },
      {
        name: "",
        image: dekra
      },
      {
        name: "",
        image: edf
      },
      {
        name: "",
        image: henriot
      },
      {
        name: "",
        image: veuve
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex space-x-4 md:space-x-1 relative z-40 px-5" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(customers), (item, index) => {
        _push(`<div class=""><img class="w-40 md:w-2/3"${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)}></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/OurCustomers.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "HeroPrivatization",
  __ssrInlineRender: true,
  props: {
    generatedPage: Boolean,
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [__props.generatedPage ? "bg-light-black" : "bg bg-[#2a2929]", "overflow-hidden relative"]
      }, _attrs))} data-v-be7b6ebc>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        image: unref(imageTwo),
        class: "w-[120px] md:w-[250px] transform -rotate-30 absolute z-10 top-0 -left-16"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        image: unref(imageOne),
        class: "w-[120px] md:w-[250px] transform -rotate-30 absolute z-10 -right-16 bottom-12"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        image: unref(third),
        class: "w-[120px] md:w-[250px] transform rotate-30 absolute z-10 top-0 -right-16"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        image: unref(imageThree),
        class: "w-[120px] md:w-[250px] transform rotate-30 absolute z-10 -left-16 bottom-12"
      }, null, _parent));
      _push(`<div class="md:w-1/2 mx-auto relative z-20 py-20 space-y-12" data-v-be7b6ebc><div class="space-y-4" data-v-be7b6ebc>`);
      if (!__props.generatedPage) {
        _push(`<h2 class="text-2xl md:text-3xl text-white font-bold text-center" data-v-be7b6ebc>${ssrInterpolate(__props.data.title)}</h2>`);
      } else {
        _push(`<h2 class="text-xl md:text-3xl text-white font-bold text-center leading-loose font-poppins" data-v-be7b6ebc><span class="bg-clay-orange rounded-full px-4" data-v-be7b6ebc>Privatiser</span> un <span class="bg-clay-orange rounded-full px-4" data-v-be7b6ebc>food truck</span> pour un évènement <span class="text-nowrap leading-loose" data-v-be7b6ebc>${__props.data.title ?? ""}</span></h2>`);
      }
      _push(`<span class="text-white block font-poppins text-center" data-v-be7b6ebc> Smash burgers, frites maison &amp; gourmandises sucrées au menu !</span><p class="text-white block font-poppins text-center" data-v-be7b6ebc>${ssrInterpolate(__props.data.description)}</p>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div><div class="space-y-10" data-v-be7b6ebc><div class="flex justify-center" data-v-be7b6ebc><a${ssrRenderAttr("href", __props.data.link.to)} class="bg-white text-center max-w-80 hover:-rotate-6 block transition-all transform px-3 py-2 rounded text-sm border-2" data-v-be7b6ebc>${ssrInterpolate(__props.data.link.text)}</a></div><div class="space-y-4" data-v-be7b6ebc><h2 class="text-2xl text-white font-bold text-center" data-v-be7b6ebc> Ils nous font déjà confiance </h2><span class="text-white block font-poppins text-center" data-v-be7b6ebc>Nos clients </span>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privatization/HeroPrivatization.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeroPrivatization = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-be7b6ebc"]]);
const _sfc_main$1 = {
  __name: "Domains",
  __ssrInlineRender: true,
  props: {
    link: Object
  },
  setup(__props) {
    const domains = ref([
      { name: "festival", icon: "mingcute:music-line" },
      { name: "Évènement Sportif", icon: "streamline:ball" },
      { name: "mariage", icon: "hugeicons:wedding" },
      { name: "soirée", icon: "emojione-monotone:clinking-glasses" },
      { name: "séminaire", icon: "typcn:mortar-board" },
      { name: "afterwork", icon: "emojione-monotone:cocktail-glass" },
      { name: "salon", icon: "uit:bag" },
      { name: "brunch", icon: "fluent-mdl2:coffee-script" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige px-5 md:px-28 py-20 space-y-10 relative" }, _attrs))}><div class=""><div class="absolute left-2 md:left-28 -top-10 z-40 bg-sunbeam py-6 w-fit text-center rounded-2xl p-3 border-t border-l border-4 border-red"><h2 class="text-azure text-xl lg:text-3xl font-bold">70 +</h2><span class="text-azure text-xs leading-3">Évènements par an</span></div><div class="absolute hidden sm:block right-2 md:right-28 -top-10 z-40 bg-sunbeam w-fit text-center rounded-2xl p-3 border-t border-l border-4 border-red"><h2 class="text-azure text-xl lg:text-3xl font-bold">85 %</h2><span class="text-azure text-xs leading-3">de nos clients réservent à nouveau <br> Preuve que le goût ça marque ! </span></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-10"><!--[-->`);
      ssrRenderList(unref(domains), (item, index) => {
        _push(`<div class="space-y-2 flex flex-col items-center justify-center"><div class="${ssrRenderClass([[0, 2, 5, 7].includes(index) ? "bg-orange" : "bg-red", "w-fit flex justify-center items-center p-4 border-t-2 border-l-2 border-4 text-white border-blue rounded-full"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: item.icon,
          class: "text-3xl text-white"
        }, null, _parent));
        _push(`</div><h3 class="capitalize text-center">${ssrInterpolate(item.name)}</h3></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center items-center"><span class="border-t w-full h-0.5 border-gray-500"></span><a href="/la-privatisation" class="bg-white text-xs hover:-rotate-2 text-nowrap text-center w-fit block transition-all transform px-3 py-3 rounded md:text-sm border-t border-l border-4 border-black">${ssrInterpolate(__props.link.text)}</a><span class="border-t w-full h-0.5 border-gray-500"></span></div><div class="md:flex justify-center md:space-x-10 space-y-6 md:space-y-0 md:px-10"><div class="md:w-1/2 space-y-4"><h3>Prestation 100% personnalisée</h3><p class="font-poppins"> Pour chaque événement, nos services sont adaptés en fonction de vos besoins. Formules, recettes, horaires de services et tarifs sont modulables. Contactez-nous pour en savoir plus et faire de votre événement un moment unique ! </p>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        text: "Contactez-nous",
        to: "/contact",
        isolateClass: "w-fit text-base  border-blue text-white bg-red hover:bg-orange"
      }, null, _parent));
      _push(`</div><div class="md:w-1/2 space-y-4"><h3>Conditions de Réservation</h3><ul class="font-poppins"><li>→ A partir de 50 repas.</li><li> → Pensez que nous sommes sollicités et que nous n’avons que très peu de créneau </li><li>→ Aimez les produits bons &amp; généreux ! ❤️</li></ul>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        text: "Réservez le Foodtruck",
        isolateClass: "w-fit text-base border-blue text-white bg-orange hover:bg-red",
        to: "/la-privatisation"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Domains.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "WrapperPrivatisation",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative transition-all duration-700" }, _attrs))} data-v-976916b6><div class="bg py-8 transform md:flex justify-between px-5 items-center" data-v-976916b6><div class="space-y-4 py-4" data-v-976916b6>`);
      _push(ssrRenderComponent(_sfc_main$7, {
        text: "toute la semaine",
        class: "bg-red text-sm w-fit mx-auto"
      }, null, _parent));
      _push(`<p class="text-white mt-2 font-poppins" data-v-976916b6> Privatisation du food truck pour déjeuner, goûter ou dîner (ou tout à la fois !) </p><h4 class="text-white font-poppins font-bold text-2xl" data-v-976916b6> Dès 50 gourmands, on débarque chez vous </h4><div class="md:flex items-center space-x-2 mt-2" data-v-976916b6><span class="font-poppins text-white text-xl" data-v-976916b6> Déplacement dans le 42 &amp; 69 </span><span class="bg-light-black text-xl font-permanent rounded-full px-3 py-1 text-white" data-v-976916b6> Service à <span class="text-blue" data-v-976916b6>D</span><span class="text-white" data-v-976916b6>O</span><span class="text-red" data-v-976916b6>MICILE</span></span></div></div><div data-v-976916b6><a href="/contact" class="bg-white hover:-rotate-6 w-fit block transition-all transform px-3 py-2 rounded text-base border-2 font-poppins font-bold" data-v-976916b6> Demander un devis </a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privatization/WrapperPrivatisation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WrapperPrivatisation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-976916b6"]]);
export {
  HeroPrivatization as H,
  WrapperPrivatisation as W,
  _sfc_main$1 as _
};
//# sourceMappingURL=WrapperPrivatisation-CKUru9xe.js.map
