import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Tag-Cj_fbZ-B.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "Wrapper",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full relative transition-all duration-700" }, _attrs))} data-v-e17346ba><div class="bg py-8 transform flex flex-col items-center" data-v-e17346ba>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        text: "privatisation",
        class: "bg-red text-sm w-fit mx-auto"
      }, null, _parent));
      _push(`<p class="text-white mt-2 font-poppins text-center" data-v-e17346ba> 2025 est déjà lancé ! Pensez à 2026 ! </p><h4 class="text-white font-poppins text-center text-xl" data-v-e17346ba> Auvergne Rhônes Alpes </h4><div class="flex items-center space-x-2 mt-2" data-v-e17346ba><span class="bold uppercase text-white text-xl" data-v-e17346ba>Truck</span><span class="bg-light-black text-2xl font-permanent rounded-full px-3 py-1" data-v-e17346ba><span class="text-blue" data-v-e17346ba>DISP</span><span class="text-white" data-v-e17346ba>ONI</span><span class="text-red" data-v-e17346ba>BLE</span></span></div><div class="mt-5" data-v-e17346ba><a href="/privatiser" class="bg-white hover:-rotate-6 block transition-all transform px-3 py-2 rounded text-sm border-2" data-v-e17346ba>Privatiser</a></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Wrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Wrapper = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e17346ba"]]);
export {
  Wrapper as W
};
//# sourceMappingURL=Wrapper-ncY2BV-9.js.map
