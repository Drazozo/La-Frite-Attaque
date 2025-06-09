import { ref, mergeProps, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Button-kovZ79jb.js";
import { _ as _sfc_main$3 } from "./Link-DjAt4iCU.js";
import { _ as _export_sfc } from "../server.mjs";
import { u as useLocationStore } from "./locationStore-ChZVS-tN.js";
const _sfc_main$1 = {
  __name: "Carte",
  __ssrInlineRender: true,
  props: {
    location: Object
  },
  setup(__props) {
    const mapRef = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "mapRef",
        ref: mapRef,
        class: "w-full h-full rounded-xl border"
      }, _attrs))} data-v-48d1e083></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/location/Carte.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Carte = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-48d1e083"]]);
const _sfc_main = {
  __name: "Location",
  __ssrInlineRender: true,
  setup(__props) {
    const locationStore = useLocationStore();
    const location = computed(() => locationStore.location);
    function timeUntil(startTime) {
      const now = /* @__PURE__ */ new Date();
      const [hours, minutes] = startTime.split(":").map(Number);
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
      const diffMs = start - now;
      if (diffMs <= 0) return "0min";
      const totalMinutes = Math.floor(diffMs / 6e4);
      const h = Math.floor(totalMinutes / 60);
      const m = totalMinutes % 60;
      return h > 0 ? `${h}h${m.toString().padStart(2, "0")}` : `${m}min`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige-light px-5 lg:px-28 py-10 lg:py-20" }, _attrs))}><div class="flex justify-center">`);
      _push(ssrRenderComponent(_sfc_main$2, { text: "Emplacement" }, null, _parent));
      _push(`</div><div class="space-y-4 mt-5"><h2 class="text-outline text-3xl lg:text-4xl text-white text-center"> Où trouver notre <br> foodtruck aujourd’hui ? </h2><p class="text-gray-800 text-center font-poppins lg:w-2/3 mx-auto"> L’avantage du food-truck, c’est qu’on cherche à être toujours au plus proche de nos clients, et que tout le monde puisse passer à l’attaque de nos frites : on se déplace, en street foood ! <br> Le reste du temps, l’événementiel nous fait voyager aux quatre coins de la région lyonnaise. </p></div>`);
      if (location.value) {
        _push(`<div class="lg:flex mt-10 gap-5 space-y-4 lg:space-y-0"><div class="lg:w-2/5 px-4 py-5 lg:py-10 border-t border-l border-4 border-blue rounded-xl relative">`);
        if ((_a = location.value) == null ? void 0 : _a.time_start) {
          _push(`<div class="absolute top-4 right-4 bg-red text-white text-xs px-3 py-1 rounded-full shadow-md font-poppins"> ⏱ Plus que <span class="font-bold text-black">${ssrInterpolate(timeUntil(location.value.time_start))}</span> à attendre </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pb-3 border-b border-black space-y-4">`);
        _push(ssrRenderComponent(_sfc_main$3, {
          text: location.value.city,
          isolateClass: "w-fit text-white border-blue text-base bg-red",
          class: "w-fit block"
        }, null, _parent));
        _push(`<span class="block text-sm">${ssrInterpolate(location.value.adresse)}</span></div><div class="py-3 border-b border-black space-y-4"><div><h4 class="text-sm">${location.value.text_top_time ?? ""}</h4><span class="text-sm font-poppins text-gray-800">${ssrInterpolate(location.value.time_start.slice(0, 5))} - ${ssrInterpolate(location.value.time_end.slice(0, 5))}</span></div><div><h4 class="text-sm">Commande</h4><span class="text-sm font-poppins text-gray-800">${location.value.commande ?? ""}</span></div></div><div class="py-3"><div><a class="text-red underline text-sm"${ssrRenderAttr("href", location.value.link_itinerary)}> Itineraire -&gt; </a></div></div></div><div class="w-full border-t border-l border-4 border-blue rounded-xl">`);
        _push(ssrRenderComponent(Carte, { location: location.value }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Location.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Location-BnB0Z_ns.js.map
