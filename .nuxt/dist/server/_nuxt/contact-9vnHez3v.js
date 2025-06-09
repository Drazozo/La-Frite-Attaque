import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./Contact-By2xOtDz.js";
import { mergeProps, useSSRContext } from "vue";
import { _ as _sfc_main$2 } from "./Tag-Cj_fbZ-B.js";
import { W as Wrapper } from "./Wrapper-ncY2BV-9.js";
import { u as useHead } from "./v3-CVz4KKeU.js";
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
import "./Button-kovZ79jb.js";
import "./Link-DjAt4iCU.js";
import "./locationStore-ChZVS-tN.js";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {
  __name: "HeroContact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-black pt-20 md:pt-32 pb-56 relative" }, _attrs))}><div class="px-5 md:px-28 space-y-4 lg:w-1/2 relative">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        text: "Fait avec ❤️",
        class: "absolute rotate-8 left-5 md:left-28 -top-10 text-sm bg-green"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        text: "Sucré / Salé",
        class: "absolute right-0 md:right-1/4 -top-12 text-sm bg-clay-orange"
      }, null, _parent));
      _push(`<h2 class="sr-only"> Contact et privatisation du food truck La Frite Attaque </h2><h3 class="text-white text-xl md:text-2xl">Food Truck ou Traiteur ?</h3><p class="text-white text-base font-poppins"> Envie de privatiser notre food truck pour un mariage, un anniversaire, une soirée d’entreprise ou un festival ? <br> Vous avez goûté nos smash burgers ou nos kürtős et vous voulez partager votre avis ? <br> Besoin de plus d’infos sur notre carte ou nos formules traiteur ? Écrivez-nous, appelez-nous, on vous répond avec plaisir ! </p></div><div class="absolute w-full lg:w-2/3 flex lg:left-1/2 transform lg:-translate-x-1/2 z-40 -bottom-20">`);
      _push(ssrRenderComponent(Wrapper, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contact/HeroContact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Contact – La Frite Attaque | Une question, une privatisation ?",
      meta: [
        {
          name: "description",
          content: "Besoin d’un food truck pour un événement ? Contactez La Frite Attaque pour une privatisation (mariage, pro, festival), nos horaires, emplacements ou infos gourmandes. Réponse rapide garantie !"
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preload", href: "/favicon.png", as: "image" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<h1 class="sr-only"> Contact – Food truck La Frite Attaque à Roanne et en Auvergne Rhône-Alpes </h1><main class="pt-20 bg-beige-light">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-9vnHez3v.js.map
