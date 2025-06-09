import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
const _imports_0 = "data:image/svg+xml,%3csvg%20width='1925'%20height='42'%20viewBox='0%200%201925%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_456)'%3e%3cg%20clip-path='url(%23clip1_1_456)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1971%2018.064V-0.00732422H-45V19.3078C-1.68089%2033.848%2044.3454%2041.6763%2092.0526%2041.6763C116.168%2041.6763%20139.852%2039.6762%20162.975%2035.8201C306.116%2011.9495%20473.37%2014.9534%20616.791%2037.077C636.466%2040.112%20656.528%2041.677%20676.895%2041.677C697.437%2041.677%20717.668%2040.0849%20737.505%2036.9985C877.173%2015.2673%201038.4%2012.3809%201177.8%2035.7566C1201.05%2039.6542%201224.87%2041.6763%201249.11%2041.6763C1273.76%2041.6763%201297.98%2039.5843%201321.6%2035.5547C1462.64%2011.4956%201626.6%2013.1732%201767.8%2036.3056C1789.4%2039.8456%201811.49%2041.677%201833.95%2041.677C1881.66%2041.677%201927.69%2033.4132%201971%2018.064Z'%20fill='%231C1C1C'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_456'%3e%3crect%20width='1925'%20height='42'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_1_456'%3e%3crect%20width='2016'%20height='41.6842'%20fill='white'%20transform='translate(-45%20-0.00732422)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main = {
  __name: "BrandIntro",
  __ssrInlineRender: true,
  props: {
    presentations: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-black relative overflow-hidden" }, _attrs))}><div class="space-y-20 py-16 md:py-28 px-5 md:px-28"><!--[-->`);
      ssrRenderList(__props.presentations, (item, index) => {
        _push(`<div class="${ssrRenderClass([(index + 1) % 2 == 0 ? "lg:flex flex-row-reverse" : "lg:flex", "justify-between items-center"])}"${ssrRenderAttr("data-aos", (index + 1) % 2 == 0 ? "fade-up-right" : "fade-down-left")}><div class="lg:w-1/2 space-y-8"><h2 class="text-2xl md:text-3xl text-white font-bold">${ssrInterpolate(item.title)}</h2><p class="font-poppins lg:text-lg leading-loose font-thin text-white">${ssrInterpolate(item.description)}</p></div><div class="${ssrRenderClass([(index + 1) % 2 == 0 ? "justify-start" : "justify-end", "lg:w-1/2 flex relative"])}"><img class="${ssrRenderClass([item.absoluteImagePosition, "absolute z-20"])}"${ssrRenderAttr("src", item.absoluteImage)} alt=""><img class="${ssrRenderClass([(index + 1) % 2 == 0 ? "-rotate-12" : "rotate-12", "w-[480px] shadow-[0_8px_0px_#000000] border-10 rounded-t-full block border-black transform"])}"${ssrRenderAttr("src", item.image)} alt=""></div></div>`);
      });
      _push(`<!--]--></div><img class="absolute z-50 -bottom-3"${ssrRenderAttr("src", _imports_0)} alt=""></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BrandIntro.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const imageSix = "" + __buildAssetsURL("06.PE6Ul1nY.jpg");
const imageFive = "" + __buildAssetsURL("07.Cf2q9kRY.jpg");
const GlassesWhite = "" + __buildAssetsURL("GlassesWhite.DnM4WGEH.svg");
const PopOne = "" + __buildAssetsURL("PopOne.CGkfdncD.svg");
const PopTwo = "" + __buildAssetsURL("PopTwo.B32CNLTa.svg");
export {
  GlassesWhite as G,
  PopOne as P,
  _sfc_main as _,
  imageFive as a,
  PopTwo as b,
  imageSix as i
};
//# sourceMappingURL=PopTwo-BFHQPJfU.js.map
