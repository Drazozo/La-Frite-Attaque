import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { H as HeroPrivatization, _ as _sfc_main$1, W as WrapperPrivatisation } from "./WrapperPrivatisation-CKUru9xe.js";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./WhyUs-DaWUSyPO.js";
import { _ as _sfc_main$5 } from "./Testimonials-D9S0LmCD.js";
import { F as Faq } from "./Faq-BGH3-OVl.js";
import { _ as _sfc_main$6 } from "./Contact-By2xOtDz.js";
import { _ as _sfc_main$2 } from "./Link-DjAt4iCU.js";
import { u as useHead } from "./v3-CVz4KKeU.js";
import "./03-C4UTujI1.js";
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
import "./Tag-Cj_fbZ-B.js";
import "./Product-izlnkNt6.js";
import "gsap";
import "gsap/ScrollTrigger.js";
import "./Button-kovZ79jb.js";
import "./locationStore-ChZVS-tN.js";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "la-carte-privatisation",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Carte & Privatisation – La Frite Attaque | Food Truck en Rhône-Alpes",
      meta: [
        {
          name: "description",
          content: "Découvrez la carte gourmande de La Frite Attaque et privatisez notre food truck pour vos événements en Rhône-Alpes. Smash burgers, frites maison, kürtős et bubble waffles au menu !"
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    });
    const data = ref({
      title: `Découvrons la carte traiteur Lyon, Roanne...`,
      description: `Faites de votre événement en Auvergne Rhône-Alpes une célébration gourmande avec la privatisation du food truck La Frite Attaque. Smash burgers, crêpes, bubble waffles et convivialité au rendez-vous.`,
      link: {
        text: "DECOUVREZ NOTRE FACILITE DE PRIVATISATION",
        to: "/la-privatisation"
      }
    });
    const link = ref({
      text: "RESERVER LE TRAITEUR / FOOD TRUCK",
      to: "/la-privatisation"
    });
    const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    const products = ref({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="sr-only"> Carte &amp; Privatisation – Food Truck La Frite Attaque à Lyon, Roanne, Rhône-Alpes </h1>`);
      _push(ssrRenderComponent(HeroPrivatization, { data: unref(data) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { link: unref(link) }, null, _parent));
      _push(`<main class="bg-light-black px-5 py-10 md:px-28 md:py-16">`);
      _push(ssrRenderComponent(WrapperPrivatisation, null, null, _parent));
      _push(`</main><div class="px-5 md:px-28 pt-10 pb-20 bg-beige">`);
      if (unref(products) && Object.keys(unref(products)).length) {
        _push(`<div class="flex justify-center md:space-x-3 space-x-6 overflow-x-scroll md:overflow-x-hidden py-2"><!--[-->`);
        ssrRenderList(unref(products), (categoryProducts, categoryName) => {
          _push(`<div>`);
          _push(ssrRenderComponent(_sfc_main$2, {
            text: categoryName,
            to: `#${slugify(categoryName)}`,
            isolateClass: "text-sm md:text-base text-nowrap text-azure border-orange"
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(products) && Object.keys(unref(products)).length) {
        _push(`<div class="mt-5"><!--[-->`);
        ssrRenderList(unref(products), (categoryProducts, categoryName) => {
          _push(`<div${ssrRenderAttr("id", slugify(categoryName))} class="flex flex-col">`);
          _push(ssrRenderComponent(_sfc_main$3, {
            categoryName,
            categoryProducts
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(Faq, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/la-carte-privatisation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=la-carte-privatisation-scJ1n-UO.js.map
