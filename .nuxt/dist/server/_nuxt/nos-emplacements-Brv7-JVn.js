import { mergeProps, useSSRContext, ref, resolveComponent, withCtx, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Location-BnB0Z_ns.js";
import { _ as _sfc_main$3 } from "./Contact-By2xOtDz.js";
import { F as Faq } from "./Faq-BGH3-OVl.js";
import { u as useHead } from "./v3-CVz4KKeU.js";
import "./Button-kovZ79jb.js";
import "./Link-DjAt4iCU.js";
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
import "@iconify/vue";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/klona/dist/index.mjs";
import "pinia";
import "./locationStore-ChZVS-tN.js";
import "./index-DxlYqOiA.js";
import "@iconify/utils/lib/css/icon";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/perfect-debounce/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = {
  __name: "BigEvent",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white border-t border-l border-6 border-blue rounded-xl md:rounded-3xl px-4 md:px-6 py-4" }, _attrs))}><div class="space-y-3"><h2 class="cursor-default bg-red text-center mx-3 text-base rounded-full px-4 py-2 text-white border-t border-l border-4 border-blue">${ssrInterpolate(__props.data.date)} à ${ssrInterpolate(__props.data.city)}</h2><h2 class="cursor-default bg-beige text-center text-lg rounded-2xl px-4 py-2 text-azure border-t border-l border-5 border-red">${ssrInterpolate(__props.data.event_name)}</h2><p class="font-poppins text-sm md:text-gray-500">${__props.data.event_description ?? ""}</p></div><div class="py-3 border-b border-black space-y-4"><div><h4 class="text-sm">Prix et réservation de l&#39;évènement</h4><span class="font-poppins text-sm md:text-gray-500">${__props.data.event_price ?? ""}</span></div><div><span class="text-sm font-poppins text-gray-800">${__props.data.commande ?? ""}</span></div></div><div class="py-3 border-t border-azure"><div class="md:flex gap-2 justify-between"><span class="text-sm block">${ssrInterpolate(__props.data.adresse)}</span><a class="text-red underline text-sm text-nowrap"${ssrRenderAttr("href", __props.data.link_itinerary)}>Itineraire -&gt;</a></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/location/BigEvent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nos-emplacements",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Nos Emplacements – La Frite Attaque | Où trouver notre food truck ?",
      meta: [
        {
          name: "description",
          content: "Retrouvez La Frite Attaque près de chez vous ! Consultez nos emplacements en Rhône-Alpes pour déguster nos burgers et frites maisons."
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    });
    const bigsEvents = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_center = resolveComponent("center");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<br><br>`);
      _push(ssrRenderComponent(_component_center, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Le planning est en cours de construction.</h1>`);
          } else {
            return [
              createVNode("h1", null, "Le planning est en cours de construction.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><br><br><div class="bg-beige py-10 px-5 lg:px-28"><h2 class="text-outline text-white text-2xl md:text-3xl text-center"> On atout d&#39;un grand ! </h2><h2 class="text-outline text-white text-2xl md:text-3xl text-center mt-2"> On particicpe à des <span class="bg-black uppercase px-2 text-lg md:text-3xl rounded text-nowrap">biiiigs events!</span></h2><p class="font-poppins text-sm text-center mt-4"> ** Notre gamme de produit peut être adaptés lors des évènements en fonction des organisations. ** </p><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-6"><!--[-->`);
      ssrRenderList(unref(bigsEvents), (item, index) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          data: item,
          key: index
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(Faq, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/nos-emplacements.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=nos-emplacements-Brv7-JVn.js.map
