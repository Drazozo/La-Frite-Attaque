import { shallowRef, computed, defineComponent, h, ref, mergeProps, unref, useSSRContext, withCtx, createVNode } from "vue";
import { u as useNuxtApp, _ as _export_sfc, a as __nuxt_component_1 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-CsDNPJQ0.js";
import __nuxt_component_0$1 from "./index-DxlYqOiA.js";
import { _ as _sfc_main$4 } from "./Link-DjAt4iCU.js";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-BcLrQlDX.js";
import { u as useLocationStore } from "./locationStore-ChZVS-tN.js";
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
import "@iconify/utils/lib/css/icon";
import "./v3-CVz4KKeU.js";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/@unhead/vue/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/perfect-debounce/dist/index.mjs";
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = shallowRef(0);
  const isLoading = shallowRef(false);
  const error = shallowRef(false);
  const start = (opts2 = {}) => {
    error.value = false;
    set(0, opts2);
  };
  function set(at = 0, opts2 = {}) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish({ force: opts2.force });
    }
    progress.value = at < 0 ? 0 : at;
    opts2.force ? 0 : throttle;
    {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator || (nuxtApp._loadingIndicator = createLoadingIndicator(opts));
  return indicator;
}
const __nuxt_component_0 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    hideDelay: {
      type: Number,
      default: 500
    },
    resetDelay: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      hideDelay: props.hideDelay,
      resetDelay: props.resetDelay,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main$3 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const menuLinks = ref([
      { text: "accueil", to: "/" },
      { text: "la carte", to: "/la-carte" },
      { text: "la privatisation", to: "/la-privatisation" },
      { text: "nos emplacements", to: "/nos-emplacements" }
    ]);
    const { $socials } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-28 py-2 bg-beige flex justify-between items-center" }, _attrs))}><div><a href="/"><img class="w-3/5 object-cover"${ssrRenderAttr("src", _imports_0)} alt=""></a></div><div class=""><ul class="flex space-x-6"><!--[-->`);
      ssrRenderList(unref(menuLinks), (link, index) => {
        _push(`<li><a class="capitalize text-sm transition-all duration-500 hover:text-red"${ssrRenderAttr("href", link.to)}>${ssrInterpolate(link.text)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="flex items-center space-x-10"><div class="flex space-x-3 items-center"><a class="transform transition duration-500 hover:-rotate-3 hover:border-b-10 text-sm py-2.5 px-4 border-x-5 border-t-5 border-b-8 rounded-xl block border-black" href="/contact"> Contact </a>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "Commander",
        isolateClass: "hidden w-fit text-base bg-red hover:bg-orange"
      }, null, _parent));
      _push(`</div><div><ul class="flex space-x-2"><!--[-->`);
      ssrRenderList(unref($socials), (social, index) => {
        _push(`<li class="transform transition duration-500 hover:bg-red size-10 aspect-square text-white bg-orange rounded-full"><a class="text-xl flex items-center justify-center w-full h-full"${ssrRenderAttr("href", social.to)} target="_blank">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: social.icon
        }, null, _parent));
        _push(`</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "MobileHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const isActive = ref(false);
    const menuLinks = ref([
      { text: "accueil", to: "/" },
      { text: "la carte", to: "/la-carte" },
      { text: "la privatisation", to: "/la-privatisation" },
      { text: "nos emplacements", to: "/nos-emplacements" },
      { text: "contact", to: "/contact" }
    ]);
    const { $socials } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-2 bg-beige relative" }, _attrs))}><div class="px-5 top-0 flex justify-between items-center w-full">`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-1/2 object-cover"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-1/2 object-cover",
                src: _imports_0,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="cursor-pointer">`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-5xl",
        name: "iwwa:menu"
      }, null, _parent));
      _push(`</div></div>`);
      if (unref(isActive)) {
        _push(`<div class="py-5 px-5 top-0 fixed z-50 bg-beige w-full h-screen"><div class="top-0 flex justify-end items-center w-full"><div class="cursor-pointer">`);
        _push(ssrRenderComponent(_component_Icon, {
          class: "text-5xl",
          name: "material-symbols-light:close"
        }, null, _parent));
        _push(`</div></div><div class="pt-10"><ul class="flex flex-col space-y-3"><!--[-->`);
        ssrRenderList(unref(menuLinks), (link, index) => {
          _push(`<li><a class="capitalize text-base transition-all duration-500 hover:text-red"${ssrRenderAttr("href", link.to)}>${ssrInterpolate(link.text)}</a></li>`);
        });
        _push(`<!--]--></ul></div><div class="mt-5 flex flex-col items-start space-y-5"><div><ul class="flex space-x-2"><!--[-->`);
        ssrRenderList(unref($socials), (social, index) => {
          _push(`<li class="transform transition duration-500 hover:bg-red size-10 aspect-square text-white bg-orange rounded-full"><a class="text-xl flex items-center justify-center w-full h-full"${ssrRenderAttr("href", social.to)} target="_blank">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: social.icon
          }, null, _parent));
          _push(`</a></li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const locationStore = useLocationStore();
    const currentEvent = computed(() => locationStore.currentEvent);
    const nextLocation = computed(() => locationStore.nextTodayLocation);
    const { $socials } = useNuxtApp();
    const timeUntil = (timeStr) => {
      if (!timeStr) return "";
      const [h2, m] = timeStr.split(":").map(Number);
      const now = /* @__PURE__ */ new Date();
      const target = /* @__PURE__ */ new Date();
      target.setHours(h2, m, 0, 0);
      const diffSec = Math.floor((target - now) / 1e3);
      if (diffSec <= 0) return "quelques instants";
      const hours = Math.floor(diffSec / 3600);
      const minutes = Math.floor(diffSec % 3600 / 60);
      return `${hours > 0 ? `${hours}h` : ""}${minutes > 0 ? `${minutes}min` : ""}`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-red py-10 px-5 xl:px-28" }, _attrs))}><div class="flex flex-col justify-center items-center"><a href="/"><img class="object-cover"${ssrRenderAttr("src", _imports_0)} alt=""></a><p class="font-poppins text-white md:w-1/2 text-center text-sm"> La Frite Attaque, votre traiteur &amp; food truck de référence à Lyon, Roanne, Saint-Etienne, Macon, Bourg en Bresse... chez vous : en Rhône Alpes </p></div><div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-between w-full gap-8 mt-10"><div class="space-y-2 md:col-span-2 text-center"><p class="font-poppins text-white">Notre adresse du jour (pour manger)</p>`);
      if ((_a = currentEvent.value) == null ? void 0 : _a.adresse) {
        _push(`<h3 class="text-white text-lg">${ssrInterpolate(currentEvent.value.adresse)} – ${ssrInterpolate(currentEvent.value.city)}</h3>`);
      } else if ((_b = nextLocation.value) == null ? void 0 : _b.adresse) {
        _push(`<h3 class="text-center leading-snug"><span class="text-white text-sm not-italic font-normal"> Plus que </span><span class="text-black font-extrabold text-lg">${ssrInterpolate(timeUntil(nextLocation.value.time_start))}</span><span class="text-white text-sm not-italic font-normal"> à attendre pour manger </span><br><span class="text-white italic font-extrabold text-lg">${ssrInterpolate(nextLocation.value.adresse)} – ${ssrInterpolate(nextLocation.value.city)}</span></h3>`);
      } else {
        _push(`<h3 class="text-white text-lg italic"> Aujourd’hui, le food truck est en repos 😴 </h3>`);
      }
      _push(`<div class="flex justify-center py-4"><a class="hidden bg-white px-6 rounded-full text-sm text-azure py-2.5" href=""> Commander </a></div></div><div class="space-y-2"><h3 class="text-white text-lg">Infos</h3><div class="flex"><ul class="space-y-2"><li><a class="hover:text-orange transition-all text-white font-poppins" href="/la-carte">Notre carte</a></li><li><a class="hover:text-orange transition-all text-white font-poppins" href="/la-privatisation">La Privatisation</a></li><li><a class="hover:text-orange transition-all text-white font-poppins" href="/la-carte-privatisation">Carte pour la privatisation</a></li><li><a class="hover:text-orange transition-all text-white font-poppins" href="/landing">Bienvenue</a></li><li><a class="hover:text-orange transition-all text-white font-poppins" href="/landing">Page contact</a></li></ul></div></div><div class="space-y-2"><h3 class="text-white text-lg">Contact</h3><div class="flex"><ul class="space-y-2"><li><a class="text-white font-poppins flex items-center space-x-1" href="">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "hugeicons:mail-open",
        width: "24",
        height: "24",
        style: { "color": "#fff" }
      }, null, _parent));
      _push(`<span>contact@lafriteattaque.fr</span></a></li><li><a class="text-white font-poppins flex items-center space-x-1" href="">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "tabler:phone-ringing",
        width: "24",
        height: "24",
        style: { "color": "#fff" }
      }, null, _parent));
      _push(`<span>06.56.66.59.81</span></a></li></ul></div></div><div class="space-y-2"><h3 class="text-white text-lg">Suivez-nous</h3><div class="flex"><ul class="flex space-x-2"><!--[-->`);
      ssrRenderList(unref($socials), (social, index) => {
        _push(`<li class="transform transition duration-500 hover:bg-blue size-10 aspect-square text-white bg-orange rounded-full"><a class="text-xl flex items-center justify-center w-full h-full"${ssrRenderAttr("href", social.to)} target="_blank">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: social.icon
        }, null, _parent));
        _push(`</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useLocationStore();
    const loader = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLoadingIndicator = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "#eab308" }, null, _parent));
      if (!loader.value) {
        _push(`<div class="flex flex-col justify-between" data-v-269847b8><div class="hidden xl:block top-0" data-v-269847b8>`);
        _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
        _push(`</div><div class="xl:hidden top-0" data-v-269847b8>`);
        _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        _push(`<div class="relative bottom-0" data-v-269847b8>`);
        _push(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="bg-beige h-screen flex items-center justify-center" data-v-269847b8><img class="animate-spin-slow w-20 md:w-28 object-cover"${ssrRenderAttr("src", _imports_0)} alt="" data-v-269847b8></div>`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-269847b8"]]);
export {
  _default as default
};
//# sourceMappingURL=default-Y3k-gOWb.js.map
