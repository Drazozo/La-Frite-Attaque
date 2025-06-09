import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-CsDNPJQ0.js";
import { Icon } from "@iconify/vue";
import { u as useLocationStore } from "./locationStore-ChZVS-tN.js";
import { _ as _export_sfc } from "../server.mjs";
import "pinia";
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
const _sfc_main = {
  __name: "landing",
  __ssrInlineRender: true,
  setup(__props) {
    const location = useLocationStore().location;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-beige-light text-black px-5 py-8 flex flex-col items-center space-y-10 relative overflow-x-hidden" }, _attrs))} data-v-bab9832c><h1 class="sr-only" data-v-bab9832c>La Frite Attaque – Emplacement du jour &amp; infos pratiques</h1><img${ssrRenderAttr("src", _imports_0)} alt="La Frite Attaque" class="w-40 fade-in" data-v-bab9832c><div class="text-center space-y-2 fade-in delay-200" data-v-bab9832c><h2 class="text-2xl font-bold" data-v-bab9832c>La Frite Attaque</h2><p class="text-sm font-poppins" data-v-bab9832c>Découvrez notre univers salé comme sucré</p><div class="flex justify-center space-x-4 mt-2" data-v-bab9832c><a href="https://www.facebook.com/lafriteattaque" target="_blank" data-v-bab9832c>`);
      _push(ssrRenderComponent(unref(Icon), {
        name: "mdi:facebook",
        class: "text-orange text-2xl"
      }, null, _parent));
      _push(`</a><a href="https://www.instagram.com/lafriteattaque" target="_blank" data-v-bab9832c>`);
      _push(ssrRenderComponent(unref(Icon), {
        name: "mdi:instagram",
        class: "text-orange text-2xl"
      }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/company/lafriteattaque" target="_blank" data-v-bab9832c>`);
      _push(ssrRenderComponent(unref(Icon), {
        name: "mdi:linkedin",
        class: "text-orange text-2xl"
      }, null, _parent));
      _push(`</a></div></div>`);
      if (unref(location)) {
        _push(`<div class="bg-white border-4 border-blue rounded-xl p-5 shadow-md w-full max-w-md fade-in delay-400" data-v-bab9832c><div class="flex items-center justify-between mb-2" data-v-bab9832c><span class="bg-red text-white px-3 py-1 rounded-full text-xs font-bold" data-v-bab9832c>Aujourd’hui</span><span class="bg-orange text-white px-2 py-1 text-xs rounded-full" data-v-bab9832c>${ssrInterpolate(unref(location).city)}</span></div><h2 class="font-bold" data-v-bab9832c>📍 ${ssrInterpolate(unref(location).adresse)}</h2><p class="text-sm mt-2" data-v-bab9832c>${unref(location).text_top_time ?? ""}</p><p class="text-sm font-poppins" data-v-bab9832c>${ssrInterpolate(unref(location).time_start.slice(0, 5))} – ${ssrInterpolate(unref(location).time_end.slice(0, 5))}</p><p class="text-sm mt-2" data-v-bab9832c>${unref(location).commande ?? ""}</p><a${ssrRenderAttr("href", unref(location).link_itinerary)} target="_blank" class="text-sm underline text-blue mt-2 block" data-v-bab9832c>📍 Itinéraire →</a></div>`);
      } else {
        _push(`<div class="text-center text-sm text-gray-600 fade-in delay-400" data-v-bab9832c> Aucun emplacement prévu aujourd’hui. Revenez bientôt ! 🍟 </div>`);
      }
      _push(`<div class="space-y-4 w-full max-w-md fade-in delay-600" data-v-bab9832c><h3 class="text-sm font-bold bg-red text-white px-3 py-1 rounded-full inline-block" data-v-bab9832c>Notre truck du quotidien</h3><ul class="space-y-2" data-v-bab9832c><li data-v-bab9832c><a class="btn-link" href="/nos-emplacements" data-v-bab9832c>📅 Où on frit(e) les prochains jours ?</a></li><li data-v-bab9832c><a class="btn-link" href="/avis" data-v-bab9832c>💬 Laissez une note qui nous chauffe !</a></li><li data-v-bab9832c><a class="btn-link" href="/la-carte" data-v-bab9832c>🍔 On mange quoi de bon ?</a></li><li data-v-bab9832c><a class="btn-link" href="/kurtos" data-v-bab9832c>🍩 Papoter autour d’un kürtős ?</a></li></ul><h3 class="text-sm font-bold bg-orange text-white px-3 py-1 rounded-full inline-block mt-6" data-v-bab9832c>Privatisation &amp; Événements</h3><ul class="space-y-2" data-v-bab9832c><li data-v-bab9832c><a class="btn-link" href="/la-privatisation" data-v-bab9832c>🎉 Découvrir la privatisation</a></li><li data-v-bab9832c><a class="btn-link" href="/la-carte#privatisation" data-v-bab9832c>📜 La carte traiteur</a></li><li data-v-bab9832c><a class="btn-link" href="/contact" data-v-bab9832c>✉️ Faire une demande de devis</a></li></ul></div><a href="tel:06 56 66 59 81" class="fixed bottom-3 left-1/2 -translate-x-1/2 bg-red text-white px-6 py-3 rounded-full shadow-lg text-sm font-bold z-50" data-v-bab9832c> 📞 Appeler nous maintenant </a></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/landing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const landing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bab9832c"]]);
export {
  landing as default
};
//# sourceMappingURL=landing-DNVi6a7i.js.map
