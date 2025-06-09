import __nuxt_component_0 from "./index-DxlYqOiA.js";
import { ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Scores",
  __ssrInlineRender: true,
  setup(__props) {
    const notations = ref([
      {
        testimonialsCount: 3,
        score: 5,
        socialIcon: "flat-color-icons:google",
        starsCount: 5
      },
      {
        testimonialsCount: 2,
        score: 4.6,
        socialIcon: "logos:facebook",
        starsCount: 4
      },
      {
        testimonialsCount: 1,
        score: 4,
        socialIcon: "simple-icons:trustpilot",
        starsCount: 4
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-3" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(notations), (note, index) => {
        _push(`<div class="flex flex-col items-center text-white"><span class="text-xs text-end">+ de ${ssrInterpolate(note.testimonialsCount)} avis</span><span class="text-2xl md:text-5xl text-end">${ssrInterpolate(note.score)}/5</span><span class="text-end">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: note.socialIcon,
          class: "text-sm mr-1"
        }, null, _parent));
        _push(`<!--[-->`);
        ssrRenderList(note.starsCount, (item, index2) => {
          _push(ssrRenderComponent(_component_Icon, {
            class: "text-orange text-xs",
            key: index2,
            name: "weui:star-filled"
          }, null, _parent));
        });
        _push(`<!--]--></span></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Scores.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imageThree = "" + __buildAssetsURL("01.oQTRZ5r_.jpg");
const third = "" + __buildAssetsURL("02.CC-613qx.jpg");
const imageOne = "" + __buildAssetsURL("03.BBhSSXkw.jpeg");
const imageTwo = "" + __buildAssetsURL("03.A0cXFNkZ.jpg");
export {
  _sfc_main as _,
  imageOne as a,
  imageTwo as b,
  imageThree as i,
  third as t
};
//# sourceMappingURL=03-C4UTujI1.js.map
