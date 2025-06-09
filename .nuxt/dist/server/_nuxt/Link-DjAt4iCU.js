import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "Link",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false
    },
    isolateClass: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        class: ["transform transition duration-500 border-t border-l border-4 text-xs rounded-full px-5 py-2.5 block", __props.isolateClass],
        href: __props.to
      }, _attrs))}>${ssrInterpolate(__props.text)}</a>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Link.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Link-DjAt4iCU.js.map
