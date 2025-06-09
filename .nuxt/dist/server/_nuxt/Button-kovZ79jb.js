import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
const _sfc_main$1 = {
  __name: "Overlay",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><span class="w-fit border-t border-l border-4 text-azure text-sm text-center border-red rounded-full px-5 py-2.5 block" href="">${ssrInterpolate(__props.text)}</span></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Overlay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: "transform transition duration-500 hover:bg-orange border-t border-l border-4 text-white bg-red border-blue rounded-full px-5 py-2.5 block",
        href: ""
      }, _attrs))}>${ssrInterpolate(__props.text)}</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
//# sourceMappingURL=Button-kovZ79jb.js.map
