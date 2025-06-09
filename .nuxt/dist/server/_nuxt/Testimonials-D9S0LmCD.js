import __nuxt_component_0 from "./index-DxlYqOiA.js";
import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";
const one = "" + __buildAssetsURL("01.DcfaU-wH.png");
const two = "" + __buildAssetsURL("02.BX0x-WKP.png");
const three = "" + __buildAssetsURL("03.CZ8DuTe4.png");
const _sfc_main = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    ref(null);
    const testimonials = [
      {
        text: "Si j'avais su qu'un burger pouvait être aussi bon, j'aurais privatisé. L'Instant pour mon mariage... et mon divorce !",
        starCount: 5,
        pic: one,
        rotateClass: "-rotate-4"
      },
      {
        text: "J'ai organisé une réunion d'affaires avec L'Instant. Résultat ? Tout le monde se souvient du burger, mais personne de la réunion !",
        starCount: 5,
        pic: two,
        rotateClass: "rotate-7"
      },
      {
        text: "J'ai fait appel à L'Instant pour l'anniversaire de mon fils. Les enfants étaient ravis... et les parents encore plus ! Qui a dit que les burgers étaient réservés aux plus jeunes ?",
        starCount: 5,
        pic: three,
        rotateClass: "-rotate-8"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige pt-16" }, _attrs))}><div class="space-y-4 px-5 lg:px-28"><h2 class="text-outline text-white text-2xl lg:text-4xl text-center"> Avis de nos Clients </h2><p class="font-poppins text-center leading-5 lg:w-1/2 mx-auto"> Paroles de gourmets : découvrez ce que nos clients pensent de leur voyage culinaire dans votre food truck “ La Frite Attaque “ </p></div><div class="flex flex-nowrap space-x-4 overflow-scroll lg:overflow-hidden w-full pt-20 pb-36 px-5"><!--[-->`);
      ssrRenderList(testimonials, (item, index) => {
        _push(`<div class="${ssrRenderClass([
          item.rotateClass,
          "transition-transform duration-[1000ms] ease-in-out",
          "transform border-4 w-[200vw] md:w-[40vw] flex-shrink-0 border-black rounded-lg px-4 py-4 flex items-center space-x-4"
        ])}"><img class="rounded-full w-20"${ssrRenderAttr("src", item.pic)} alt=""><div><div><!--[-->`);
        ssrRenderList(item.starCount, (star, starIndex) => {
          _push(ssrRenderComponent(_component_Icon, {
            class: "text-orange text-base",
            key: starIndex,
            name: "weui:star-filled"
          }, null, _parent));
        });
        _push(`<!--]--></div><p class="font-poppins text-sm">${ssrInterpolate(item.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Testimonials-D9S0LmCD.js.map
