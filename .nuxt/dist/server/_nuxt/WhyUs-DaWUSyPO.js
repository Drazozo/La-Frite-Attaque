import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./Product-izlnkNt6.js";
import __nuxt_component_0 from "./index-DxlYqOiA.js";
const _sfc_main$1 = {
  __name: "ProductList",
  __ssrInlineRender: true,
  props: {
    categoryName: String,
    categoryProducts: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-5" }, _attrs))}><h3 class="text-outline text-center text-white text-3xl"></h3><div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8 mt-8"><!--[-->`);
      ssrRenderList(__props.categoryProducts, (product, index) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          class: "",
          key: index,
          product
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carte/ProductList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "WhyUs",
  __ssrInlineRender: true,
  setup(__props) {
    const elements = ref([
      {
        name: `Nos buns sont maison ou de
boulanger pour nos plus gros
événements`,
        icon: "pepicons-pencil:hamburger"
      },
      {
        name: `Notre viande est fraîche et
française de race Charolaise`,
        icon: "icon-park-solid:hamburger"
      },
      {
        name: `Nos fruits et légumes sont frais, de
saison`,
        icon: "healthicons:vegetables-outline"
      },
      {
        name: `Nos fromages sont sélectionnés et
coupés à la main`,
        icon: "fa-solid:cheese"
      },
      {
        name: `Bières artisanales et boissons
fraîches`,
        icon: "emojione-monotone:cocktail-glass"
      },
      {
        name: `Toutes les sauces de nos burgers
sont maison`,
        icon: "solar:cup-paper-bold"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige-light px-5 md:px-28 py-20 space-y-10" }, _attrs))}><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"><!--[-->`);
      ssrRenderList(unref(elements), (item, index) => {
        _push(`<div class="space-y-2 flex flex-col items-center justify-center"><div class="${ssrRenderClass([[0, 2, 4].includes(index) ? "bg-orange" : "bg-red", "w-fit flex justify-center items-center p-4 border-t-2 border-l-2 border-4 text-white border-blue rounded-full"])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: item.icon,
          class: "text-4xl text-white"
        }, null, _parent));
        _push(`</div><h3 class="text-center">${ssrInterpolate(item.name)}</h3></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carte/WhyUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=WhyUs-DaWUSyPO.js.map
