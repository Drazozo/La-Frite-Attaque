import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
const _imports_0 = "" + __buildAssetsURL("bientot.DuyyBiN9.jpg");
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    product: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative border-t border-l border-4 border-orange bg-white px-2 py-3 md:py-5 md:px-6 rounded-2xl" }, _attrs))}>`);
      if (__props.product.tag) {
        _push(`<div style="${ssrRenderStyle({ backgroundColor: __props.product.tag.color_hex })}" class="absolute w-fit right-5 md:right-initial -top-5 md:-left-10 md:top-2 transform -rotate-10 md:-rotate-12 px-3 py-1 rounded-full"><span class="text-white text-sm font-permanent">${ssrInterpolate(__props.product.tag.name)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="md:flex md:space-x-5 md:space-y-0 space-y-5 items-center"><div class="md:w-1/3"><img class="rounded-2xl"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="md:w-2/3 space-y-4 bg-"><h3 class="text-azure text-xl text-center">${ssrInterpolate(__props.product.title)}</h3><p class="text-gray-500 font-poppins text-sm text-center">${ssrInterpolate(__props.product.description)}</p><div class="flex justify-center space-x-4"><!--[-->`);
      ssrRenderList(__props.product.labels, (value, name) => {
        _push(`<div class="flex flex-col items-center space-y-1.5"><span class="bg-red font-permanent text-white py-1 px-4 rounded-full">${ssrInterpolate(name)}</span><span class="font-poppins font-bold">${ssrInterpolate(value)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/carte/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Product-izlnkNt6.js.map
