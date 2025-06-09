import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$h } from "./Link-DjAt4iCU.js";
import __nuxt_component_0 from "./index-DxlYqOiA.js";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _sfc_main$d, i as imageThree, t as third, a as imageOne, b as imageTwo } from "./03-C4UTujI1.js";
import { _ as _sfc_main$e } from "./Tag-Cj_fbZ-B.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { _ as _sfc_main$f } from "./Button-kovZ79jb.js";
import { i as imageSix, a as imageFive, P as PopOne, b as PopTwo, G as GlassesWhite, _ as _sfc_main$i } from "./PopTwo-BFHQPJfU.js";
import { _ as _export_sfc } from "../server.mjs";
import { _ as _sfc_main$j } from "./Location-BnB0Z_ns.js";
import { _ as _sfc_main$g } from "./Product-izlnkNt6.js";
import { S as ScrollText } from "./ScrollText-DxofIJwR.js";
import { W as Wrapper } from "./Wrapper-ncY2BV-9.js";
import { _ as _sfc_main$k } from "./Testimonials-D9S0LmCD.js";
import { F as Faq } from "./Faq-BGH3-OVl.js";
import { _ as _sfc_main$l } from "./Contact-By2xOtDz.js";
import { u as useHead } from "./v3-CVz4KKeU.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/hookable/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/unctx/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/radix3/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/defu/dist/defu.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/ufo/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/klona/dist/index.mjs";
import "pinia";
import "./locationStore-ChZVS-tN.js";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0$5 = publicAssetsURL("/videos/hero.mp4");
const _imports_1$3 = "data:image/svg+xml,%3csvg%20width='1921'%20height='46'%20viewBox='0%200%201921%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_311)'%3e%3cg%20clip-path='url(%23clip1_1_311)'%3e%3cg%20clip-path='url(%23clip2_1_311)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1939.18%202.05437V49.7795H-19.21V4.51028C22.9457%200.793654%2070.4294%20-0.36758%20123.913%201.31485C170.175%201.31485%20214.894%206.87655%20257.183%2017.2498C311.916%2030.6757%20368.572%2038.386%20424.429%2030.9056C504.668%2020.1603%20590.178%2014.36%20678.92%2014.36C726.759%2014.36%20773.661%2016.0456%20819.302%2019.283C835.99%2020.4666%20852.741%2020.4288%20869.409%2018.9979C1000.9%207.71097%201150.99%201.31484%201310.35%201.31484C1455.13%201.31484%201592.27%206.59474%201714.76%2016.0256C1748.15%2018.5973%201781.64%2015.0282%201814.67%209.36892C1845.48%204.08755%201877.37%201.31484%201910.04%201.31484C1919.83%201.31484%201929.54%201.56372%201939.18%202.05437Z'%20fill='%23FEEDCD'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_311'%3e%3crect%20width='1959.41'%20height='49.22'%20fill='white'%20transform='translate(-19.21%200.560059)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_1_311'%3e%3crect%20width='1958.39'%20height='49.22'%20fill='white'%20transform='translate(-19.21%200.560059)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_1_311'%3e%3crect%20width='1958.39'%20height='49.2188'%20fill='white'%20transform='translate(-19.21%200.560669)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$c = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg relative h-screen" }, _attrs))}><video class="w-full h-full relative z-20 object-cover"${ssrRenderAttr("src", _imports_0$5)} autoplay muted playsinline loop></video><div class="absolute px-5 py-28 md:py-40 z-40 top-0 lg:py-0 lg:top-1/4 lg:left-1/2 lg:-translate-x-1/2 space-y-6"><h1 class="text-5xl lg:text-6xl text-white text-outline text-center"> La Frite Attaque </h1><p class="text-white text-center text-xl"> Sur 4 roues, on parcours le Rhônes Alpes pour délivrer nos meilleurs produits ! </p><a href="/nos-emplacements" class="cursor-pointer flex items-center space-x-2 transform hover:scale-105 -rotate-4 bg-clay-orange rounded-full w-fit mx-auto px-5 py-1"><span class="font-permanent font-bold text-white text-2xl">Suivre nos traces</span>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "text-white text-2xl",
        name: "ph:map-pin-fill"
      }, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`<div><a class="bg-white w-fit mx-auto uppercase transform transition duration-500 hover:-rotate-3 hover:border-b-10 text-base py-2.5 px-4 border-x-5 border-t-5 border-b-8 rounded-xl block border-black" href="/la-privatisation"> Privatiser le truck </a></div></div><div class="bg-black/30 absolute z-30 inset-0 w-full h-full"></div><img class="absolute object-cover h-10 z-40 -bottom-3"${ssrRenderAttr("src", _imports_1$3)} alt=""></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _imports_0$4 = "data:image/svg+xml,%3csvg%20width='53'%20height='40'%20viewBox='0%200%2053%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_325)'%3e%3cg%20clip-path='url(%23clip1_1_325)'%3e%3cg%20clip-path='url(%23clip2_1_325)'%3e%3cpath%20d='M51.7705%205.56275C51.7705%205.86743%2051.6944%206.24829%2051.542%206.70532C51.4658%207.16235%2051.4277%207.61939%2051.4277%208.07642C51.4277%208.45725%2051.4658%208.80005%2051.542%209.10477C51.6944%209.40941%2051.999%209.56173%2052.456%209.56173C51.1612%2011.5422%2049.8281%2013.5989%2048.457%2015.7317C47.1621%2017.7884%2045.9433%2019.9212%2044.8008%2022.1301C43.6582%2024.2629%2042.706%2026.3957%2041.9444%2028.5285C41.1826%2030.6614%2040.7636%2032.7561%2040.6875%2034.8128C40.6875%2036.0315%2040.0781%2036.717%2038.8594%2036.8694C37.7168%2037.0217%2036.3457%2036.9456%2034.7461%2036.6409C33.2227%2036.2601%2031.6992%2035.803%2030.1758%2035.2698C28.7285%2034.6604%2027.6621%2034.2033%2026.9765%2033.8987C26.6719%2033.2132%2026.4433%2032.4133%2026.291%2031.4993C26.1387%2030.5852%2026.0244%2029.6712%2025.9482%2028.7571C25.872%2027.7668%2025.7959%2026.8147%2025.7197%2025.9006C25.7197%2024.9104%2025.7197%2024.0725%2025.7197%2023.3869C26.3291%2022.5491%2026.748%2021.4446%2026.9765%2020.0735C27.2051%2018.7024%2027.5479%2017.4456%2028.0048%2016.303C28.3096%2015.5412%2028.4619%2015.0842%2028.4619%2014.9319C28.4619%2014.7033%2028.4619%2014.5891%2028.4619%2014.5891C28.4619%2014.5129%2028.5%2014.3987%2028.5762%2014.2464C28.6524%2014.0178%2028.8808%2013.5227%2029.2617%2012.761C29.414%2012.3801%2029.414%2012.0754%2029.2617%2011.8469C29.1094%2011.5422%2029.1094%2011.2756%2029.2617%2011.0471C29.414%2010.8948%2029.6045%2010.7424%2029.833%2010.59C30.1377%2010.4377%2030.3281%2010.2854%2030.4043%2010.1331C30.709%209.67605%2030.8232%209.33325%2030.7471%209.10477C30.6709%208.87621%2030.8232%208.53341%2031.2041%208.07642C31.5088%207.69555%2031.9277%207.20044%2032.4609%206.59107C32.9941%205.90551%2033.2608%205.25806%2033.2608%204.64868C34.3272%203.96314%2035.3174%203.23951%2036.2315%202.47779C37.2216%201.71607%2038.5547%201.14478%2040.2304%200.763916C40.6113%200.992431%2041.2968%201.37329%2042.2871%201.9065C43.2773%202.4397%2044.3818%202.9729%2045.6006%203.50611C46.8193%203.96314%2048%204.42017%2049.1426%204.87719C50.2852%205.25806%2051.1612%205.48657%2051.7705%205.56275ZM26.0625%209.33325C24.9199%2011.4661%2023.7773%2013.7132%2022.6348%2016.0744C21.4922%2018.3596%2020.4258%2020.6828%2019.4356%2023.0442C18.5215%2025.3293%2017.7598%2027.6526%2017.1504%2030.0139C16.541%2032.2991%2016.2744%2034.5081%2016.3506%2036.6409C16.3506%2037.9358%2015.7793%2038.6975%2014.6367%2038.9261C13.5703%2039.1545%2012.2754%2039.1545%2010.752%2038.9261C9.30468%2038.6213%207.85742%2038.2024%206.41016%2037.6692C4.96289%2037.136%203.89648%2036.717%203.21094%2036.4124C2.90625%2035.7268%202.63965%2034.927%202.41113%2034.0129C2.25879%2033.0989%202.10644%2032.1467%201.9541%2031.1565C1.87793%2030.0901%201.80176%2029.0617%201.72559%2028.0716C1.64941%2027.0813%201.57324%2026.2053%201.49707%2025.4436C2.03028%2024.5296%202.37305%2023.3489%202.52539%2021.9016C2.67773%2020.4544%202.94434%2019.1213%203.32519%2017.9026C3.55371%2017.0647%203.66797%2016.5696%203.66797%2016.4173C3.66797%2016.1887%203.66797%2016.0744%203.66797%2016.0744C3.66797%2015.9983%203.66797%2015.846%203.66797%2015.6174C3.74414%2015.3889%203.93457%2014.8557%204.23926%2014.0178C4.3916%2013.6369%204.3916%2013.3323%204.23926%2013.1037C4.08692%2012.7991%204.08692%2012.4944%204.23926%2012.1897C4.3916%2012.0373%204.58204%2011.885%204.81055%2011.7327C5.03906%2011.5041%205.1914%2011.3137%205.26758%2011.1614C5.49609%2010.6282%205.57227%2010.2473%205.49609%2010.0188C5.41992%209.79029%205.57227%209.44749%205.95312%208.99045C6.18164%208.60965%206.52441%208.03833%206.98144%207.27661C7.51465%206.51489%207.74316%205.82935%207.667%205.21997C8.7334%204.45825%209.64748%203.65845%2010.4092%202.82055C11.2471%201.9065%2012.4277%201.22095%2013.9512%200.763916C14.332%200.992431%2015.0176%201.37329%2016.0078%201.9065C16.998%202.36352%2018.0644%202.82055%2019.207%203.27759C20.4258%203.73462%2021.5684%204.15356%2022.6348%204.53443C23.7012%204.91528%2024.5391%205.1438%2025.1484%205.21997C25.1484%205.52466%2025.1104%205.90551%2025.0342%206.36255C25.0342%206.81958%2025.0342%207.27661%2025.0342%207.73364C25.0342%208.19067%2025.1104%208.57157%2025.2627%208.87621C25.415%209.18093%2025.6816%209.33325%2026.0625%209.33325Z'%20fill='%23131313'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_325'%3e%3crect%20width='52'%20height='39.19'%20fill='white'%20transform='translate(0.97998%200.290039)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_1_325'%3e%3crect%20width='52'%20height='39.19'%20fill='white'%20transform='translate(0.97998%200.290039)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_1_325'%3e%3crect%20width='52'%20height='39.2'%20fill='white'%20transform='translate(0.97998%200.285034)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$b = {
  __name: "Quote",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige" }, _attrs))}><div class="relative px-5 xl:px-96 py-4 md:py-16 text-center space-y-5 md:space-y-5 bg-beige"><img class="absolute size-7 lg:size-initial"${ssrRenderAttr("src", _imports_0$4)} alt=""><p class="text-2xl lg:text-4xl font-permanent leading-tight"> Roulez vers l&#39;authenticité d&#39;un `);
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "burger maison",
        class: "bg-clay-orange text-xl lg:text-xl"
      }, null, _parent));
      _push(` concocté avec amour </p><p class="text-2xl lg:text-4xl font-permanent leading-tight"> entre le 42 et le 69. Notre Food truck ne &quot;truck&#39; pas avec la qualité : <br> c’est généreux, savoureux, et servi avec le smile. </p><p class="text-center lg:text-start w-fit mx-auto text-2xl lg:text-4xl font-permanent leading-tight"> Prêts à croquer `);
      _push(ssrRenderComponent(_sfc_main$e, {
        text: "à pleine dent",
        class: "bg-green text-xl lg:text-xl"
      }, null, _parent));
      _push(`<br> dans notre concept ? </p><img class="absolute size-7 lg:size-initial right-0 lg:right-96 bottom-8"${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Quote.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "Gallery",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const images = [imageThree, third, imageOne, imageTwo];
    const gallery = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "gallery",
        ref: gallery,
        class: "pt-10 flex justify-center relative h-[300px] md:h-[600px] bg-beige overflow-hidden"
      }, _attrs))}><!--[-->`);
      ssrRenderList(images, (img, index) => {
        _push(`<div class="absolute left-1/2 -translate-x-1/2 w-[250px] md:w-[480px] shadow-[0_8px_0px_#000000] border-10 rounded-xl border-black overflow-hidden"><img${ssrRenderAttr("src", img)} class="w-full h-auto block"></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Gallery.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _imports_1$2 = "" + __buildAssetsURL("burger-maison.B3VsdQJY.jpg");
const dessertCream = "" + __buildAssetsURL("dessert-cream.CrfRq2Qz.jpg");
const freshDrink = "" + __buildAssetsURL("fresh-drink.z9SjJuD2.jpg");
const frittes = "" + __buildAssetsURL("frittes.Ck4OKa99.jpg");
const _sfc_main$9 = {
  __name: "Products",
  __ssrInlineRender: true,
  setup(__props) {
    const products = ref([
      {
        title: "nos burgers",
        description: "Des burgers maison bien généreux, préparés à la minute. Pain moelleux, viande savoureuse, garnitures qui claquent : que demander de plus ?",
        image: _imports_1$2,
        blocBorderColor: "orange",
        imageBorderColor: "red",
        ancre: "Burgers"
      },
      {
        title: "nos frites",
        description: "Frites maison croustillantes comme il faut. Patates lavées, coupées, blanchies, et frites sur place. Pas de triche, que du kiff.",
        image: frittes,
        imageBorderColor: "orange",
        blocBorderColor: "blue",
        ancre: "frites"
      },
      {
        title: "nos boissons",
        description: "Sodas bien frais, et une sélection de bières pour faire glisser tout ça comme il faut. À consommer avec modération (ou pas).",
        image: freshDrink,
        imageBorderColor: "blue",
        blocBorderColor: "red",
        ancre: "Boissons"
      },
      {
        title: "nos desserts",
        description: "Crêpes, bubble waffles et autres douceurs selon l’humeur du chef. Un seul mot d’ordre : finir sur une note sucrée.",
        image: dessertCream,
        imageBorderColor: "red",
        blocBorderColor: "blue",
        ancre: "Dessert"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige py-16 px-5 md:px-28" }, _attrs))}><div class="flex justify-center">`);
      _push(ssrRenderComponent(_sfc_main$f, { text: "En food truck ou en traiteur : on veut le meilleur pour nos clients !" }, null, _parent));
      _push(`</div><h1 class="text-2xl md:text-4xl mt-5 text-white text-outline text-center md:w-1/2 mx-auto"> Optez pour des Produits de Qualité </h1><div class="mt-32 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5 gap-y-32"><!--[-->`);
      ssrRenderList(unref(products), (product, index) => {
        _push(`<div data-aos="fade-up"${ssrRenderAttr("data-aos-duration", (index + 1) * 100)} class="${ssrRenderClass([`border-${product.blocBorderColor}`, "relative space-y-4 border-t border-l border-5 rounded-xl bg-white pt-32 pb-16 px-5"])}"><h2 class="capitalize text-center text-xl md:text-2xl"><a${ssrRenderAttr("href", `/la-carte-privatisation/#${product.ancre}`)}>${ssrInterpolate(product.title)}</a></h2><p class="font-poppins text-base leading-snug text-center text-gray-600">${ssrInterpolate(product.description)}</p><div class="flex justify-center"><div class="absolute -top-1/4"><a${ssrRenderAttr("href", `/la-carte-privatisation/#${product.ancre}`)}><img${ssrRenderAttr("alt", product.title)} class="${ssrRenderClass([`border-${product.imageBorderColor}`, "size-40 md:size-52 border-t border-l aspect-square object-cover border-5 rounded-full"])}"${ssrRenderAttr("src", product.image)}></a></div></div></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center w-1/2 mx-auto mt-10"><p class="text-center text-sm font-poppins"> *Notre carte évolue en fonction des saisons et de l’envie du chefet de la disponibilité de nos partenaires ! </p></div></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _imports_0$3 = "" + __buildAssetsURL("about.DcBjI0YW.jpg");
const _sfc_main$8 = {
  __name: "AnimatedCounter",
  __ssrInlineRender: true,
  props: {
    target: {
      type: Number,
      required: true
    },
    suffix: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 3700
    }
  },
  setup(__props) {
    const displayedValue = ref(0);
    ref(false);
    const element = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        ref_key: "element",
        ref: element
      }, _attrs))}>${ssrInterpolate(displayedValue.value)}${ssrInterpolate(__props.suffix)}</span>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimatedCounter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = ref([
      { title: 8e3, suffix: "+", description: "bouches régalées chaque année" },
      { title: 900, suffix: " kg", description: "de frites maison préparées" },
      { title: 6, suffix: " ans", description: "de terrain, de fourneaux et de passion" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige px-5 lg:px-28 py-20" }, _attrs))} data-v-ae3b5085><div class="flex justify-center" data-v-ae3b5085>`);
      _push(ssrRenderComponent(_sfc_main$f, { text: "L'histoire d'une frite qui a pris le volant" }, null, _parent));
      _push(`</div><div class="lg:flex space-y-5 lg:space-y-0 mt-12 justify-between items-center" data-v-ae3b5085><div class="transform lg:rotate-6 lg:w-1/2" data-v-ae3b5085><img class="h-[70vh] lg:size-[650px] object-cover border-b-8 border-r-8 border-orange rounded-2xl"${ssrRenderAttr("src", _imports_0$3)} alt="image à propos" data-v-ae3b5085></div><div class="lg:w-1/2" data-v-ae3b5085><div class="bg-red relative bg lg:w-[500px] mx-auto rounded-3xl px-4 lg:px-8 py-12 space-y-3" data-v-ae3b5085><h2 class="text-outline text-3xl text-white text-center" data-v-ae3b5085> Enzo, une frite, un rêve </h2><p class="font-poppins text-sm lg:text-base" data-v-ae3b5085> Avant, c’était RH, gestion et commerce. Aujourd’hui, ce sont les smash burgers, les frites maison, les Kurtos et les bubble waffles. </p><p class="font-poppins text-sm lg:text-base" data-v-ae3b5085> Frite Attaque, c’est le projet d’un passionné du terrain, qui a décidé de mêler le goût du contact, le sens de l’organisation… et surtout le plaisir de <b data-v-ae3b5085>régaler les gens.</b></p><p class="font-poppins text-sm lg:text-base" data-v-ae3b5085> Basé en Rhône-Alpes, le food truck se déplace là où l’ambiance est au rendez-vous : concerts, marchés, fêtes, salons, mariages ou fête d’entreprise. </p><p class="font-poppins text-sm lg:text-base" data-v-ae3b5085> Et si tu veux privatiser Frite Attaque pour un événement, c’est possible : <b data-v-ae3b5085>on débarque, on régale</b>, on repart. <b data-v-ae3b5085>Simple et efficace</b>. </p><p class="font-poppins text-sm lg:text-base" data-v-ae3b5085> Pas d’enrobage marketing : ici, on parle vrai. Ce qui compte, c’est ce qu’il y a dans l’assiette… et <b data-v-ae3b5085>le sourire</b> qui vient avec. </p></div><div class="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-10" data-v-ae3b5085><!--[-->`);
      ssrRenderList(unref(stats), (item, index) => {
        _push(`<div class="bg-sunbeam text-center rounded-2xl p-3 border-t border-l border-4 border-red" data-v-ae3b5085><h2 class="text-azure text-2xl lg:text-3xl font-bold" data-v-ae3b5085>`);
        _push(ssrRenderComponent(_sfc_main$8, {
          target: item.title,
          suffix: item.suffix
        }, null, _parent));
        _push(`</h2><span class="text-azure text-xs leading-3" data-v-ae3b5085>${ssrInterpolate(item.description)}</span></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-ae3b5085"]]);
const _sfc_main$6 = {
  __name: "WhyChooseUs",
  __ssrInlineRender: true,
  setup(__props) {
    const benefits = [
      {
        title: "Produits Frais",
        description: "Des produits frais et de saison garantis toute l'année !",
        icon: "ic:baseline-apple"
      },
      {
        title: "À votre Écoute",
        description: "Si vous avez des questions, nous serons ravis de vous répondre.",
        icon: "uiw:message"
      },
      {
        title: "Prix Abordables",
        description: "Des prix justes et abordables même pour des burgers faits maison.",
        icon: "mdi:hamburger"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 bg-beige-light" }, _attrs))}><div class="mx-auto px-5 lg:px-32"><div class="grid gap-12 md:grid-cols-3"><!--[-->`);
      ssrRenderList(benefits, (item, index) => {
        _push(`<div class="text-gray-800 space-y-3"><div class="bg-blue w-fit mx-auto p-2 flex justify-center items-center rounded-full border-t border-r-2 border-b-2 border-red">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: item.icon,
          class: "text-2xl"
        }, null, _parent));
        _push(`</div><h3 class="text-lg font-semibold mb-2 text-center">${ssrInterpolate(item.title)}</h3><p class="text-sm font-poppins text-center text-gray-500">${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WhyChooseUs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$2 = "" + __buildAssetsURL("foodtruck.D8MPThte.png");
const _imports_1$1 = "" + __buildAssetsURL("traiteur.o4jl6MLm.png");
const _sfc_main$5 = {
  __name: "Services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige px-5 md:px-28 py-10 md:py-20" }, _attrs))}><div class="flex justify-center">`);
      _push(ssrRenderComponent(_sfc_main$f, { text: "DECOUVREZ NOS PRESTATIONS" }, null, _parent));
      _push(`</div><div class="space-y-3 mt-5"><h2 class="text-outline text-2xl md:text-4xl text-white text-center"> Deux ambiances : <br> une passion commune </h2><p class="text-gray-900 text-center font-poppins font-bold"> Des saveurs qui claquent pour vos convives ! </p><p class="text-gray-800 text-center font-poppins md:w-1/2 mx-auto"> En format Foodtruck ou Traiteur, nous avons à coeur de créer des moments savoureux pour en mettre plein les papilles à vos invités ! </p></div><div class="md:flex xl:px-20 space-y-5 md:space-y-0 mt-10 gap-5"><a data-aos="zoom-in" href="/la-carte" class="md:w-1/2 block group md:hover:w-3/5 h-[70vh] relative rounded-3xl md:rounded-[40px] transition-all duration-500"><div class="bg-gradient-to-t from-black/50 to-transparent rounded-3xl md:rounded-[40px] w-full h-full absolute z-30"></div><img class="rounded-3xl md:rounded-[40px] w-full h-full object-cover"${ssrRenderAttr("src", _imports_0$2)} alt=""><div class="absolute z-40 bottom-0 p-5 md:p-10 space-y-2"><h3 class="md:translate-y-20 group-hover:translate-y-0 transition-all duration-500 font-permanent text-sky-aqua font-extrabold text-4xl"> FOODTRUCK </h3><p class="md:translate-y-6 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white md:text-lg font-bold font-poppins"> Ajoutez du fun et des saveurs à votre événement avec notre foodtruck mobile et gourmand ! </p></div></a><a data-aos="zoom-in" href="la-carte-privatisation" class="md:w-1/2 block group md:hover:w-3/5 h-[70vh] relative rounded-3xl md:rounded-[40px] transition-all duration-500"><div class="bg-gradient-to-t from-black/50 to-transparent rounded-3xl md:rounded-[40px] w-full h-full absolute z-30"></div><img class="rounded-3xl md:rounded-[40px] w-full h-full object-cover"${ssrRenderAttr("src", _imports_1$1)} alt=""><div class="absolute z-40 bottom-0 p-5 md:p-10 space-y-2"><h3 class="md:translate-y-20 group-hover:translate-y-0 transition-all duration-500 font-permanent text-coral-rose font-extrabold text-4xl"> TRAITEUR </h3><p class="md:translate-y-6 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-white md:text-lg font-bold font-poppins"> Un service traiteur sur-mesure pour régaler vos invités avec des plats gourmands et raffinés ! </p></div></a></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Services.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='1917'%20height='71'%20viewBox='0%200%201917%2071'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_489)'%3e%3cg%20clip-path='url(%23clip1_1_489)'%3e%3cg%20clip-path='url(%23clip2_1_489)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M0%2032.7596V70.7329H2016V14.0633C1980.96%204.86784%201944.37%20-0.00390625%201906.74%20-0.00390625C1879.47%20-0.00390625%201852.74%202.55539%201826.74%207.46528C1785.71%2015.2173%201743.98%2021.1187%201702.41%2017.1647C1586.51%206.13997%201457.65%20-0.00390625%201321.89%20-0.00390625C1169.31%20-0.00390625%201025.44%207.75736%20898.891%2021.4866C877.982%2023.755%20856.914%2023.8018%20835.96%2021.9859C793.674%2018.3212%20750.301%2016.4171%20706.105%2016.4171C627.873%2016.4171%20552.216%2022.3833%20480.604%2033.5206C411.969%2044.195%20341.913%2031.971%20274.756%2014.2344C239.519%204.9283%20202.71%20-0.00390625%20164.842%20-0.00390625C106.79%20-0.00390625%2051.2256%2011.5878%200%2032.7596Z'%20fill='%231C1C1C'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_489'%3e%3crect%20width='1917'%20height='71'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_1_489'%3e%3crect%20width='2016'%20height='70.73'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_1_489'%3e%3crect%20width='2016'%20height='70.7368'%20fill='white'%20transform='translate(0%20-0.00390625)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$4 = {
  __name: "Recipes",
  __ssrInlineRender: true,
  setup(__props) {
    const filteredProducts = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-black relative" }, _attrs))}><img class="absolute z-40 -top-3"${ssrRenderAttr("src", _imports_0$1)} alt=""><div class="relative pt-24 px-5 md:px-28"><h1 class="text-2xl md:text-4xl bg- text-white text-outline text-center"> Ils ont attaqué les frites !🍟 <br>Découvrez nos recettes à succès ! </h1><div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8 pb-20"><!--[-->`);
      ssrRenderList(unref(filteredProducts), (product, index) => {
        _push(ssrRenderComponent(_sfc_main$g, {
          class: "",
          key: index,
          product
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Recipes.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("evenement-lyon.C8KqVafC.webp");
const _imports_1 = "data:image/svg+xml,%3csvg%20width='1920'%20height='115'%20viewBox='0%200%201920%20115'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1_729)'%3e%3cg%20clip-path='url(%23clip1_1_729)'%3e%3cg%20clip-path='url(%23clip2_1_729)'%3e%3cg%20clip-path='url(%23clip3_1_729)'%3e%3cpath%20d='M-38.3999%20114.953V37.2235L-12.6637%2033.4623L64.5448%2023.4327L166.264%2026.567L254.502%2039.1041L309.038%2049.7606L363.575%2052.8949L465.906%2035.9698L571.302%2022.179L720.817%209.01512L917.515%205.88086H1008.82L1144.24%2014.0299L1342.16%2037.8503L1418.14%2052.8949L1453.07%2049.7606L1531.51%2052.8949L1612.39%2059.7902L1681.63%2070.4467L1722.08%2059.7902L1798.67%2049.7606L1849.53%2052.268L1935.93%2067.3124L1977.6%2080.4763V114.953H-38.3999Z'%20fill='%231C1C1C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M894.23%200.978516C1077.86%200.978516%201252.1%2016.6726%201408.52%2044.8168C1415.5%2046.0718%201422.62%2046.5114%201429.76%2046.1853C1445.56%2045.4642%201461.5%2045.0977%201477.58%2045.0977C1539.9%2045.0977%201600.3%2050.6056%201657.74%2060.9359C1672.66%2063.6204%201688.13%2062.7777%201703.13%2059.0016C1739.2%2049.9192%201776.96%2045.0977%201815.83%2045.0977C1872.76%2045.0977%201927.28%2055.4352%201977.6%2074.3354V84.8276C1927.39%2065.4977%201872.85%2054.9019%201815.83%2054.9019C1777.78%2054.9019%201740.82%2059.6222%201705.52%2068.5091C1689.32%2072.5874%201672.44%2073.5424%201656%2070.5853C1599.14%2060.3591%201539.33%2054.9019%201477.58%2054.9019C1461.66%2054.9019%201445.87%2055.2648%201430.2%2055.9794C1422.36%2056.3371%201414.52%2055.8565%201406.78%2054.466C1250.97%2026.4313%201077.31%2010.7828%20894.23%2010.7828C710.855%2010.7828%20536.937%2026.4809%20380.935%2054.5995C372.941%2056.0404%20364.811%2056.5044%20356.698%2056.0882C344.806%2055.4783%20332.821%2055.1009%20320.754%2054.9621C313.781%2054.8818%20306.59%2054.0941%20299.762%2052.669C157.597%2022.9913%2047.177%2022.5319%20-38.3999%2042.4439V32.3806C48.6395%2012.5901%20159.944%2013.4656%20301.766%2043.0715C307.973%2044.3675%20314.532%2045.0857%20320.867%2045.1585C333.064%2045.2988%20345.177%2045.6802%20357.201%2046.2968C364.606%2046.6769%20371.983%2046.2508%20379.196%2044.9507C535.808%2016.7222%20710.308%200.978516%20894.23%200.978516Z'%20fill='%23131313'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_729'%3e%3crect%20width='1920'%20height='113.97'%20fill='white'%20transform='translate(0%200.980469)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_1_729'%3e%3crect%20width='2016'%20height='113.97'%20fill='white'%20transform='translate(-38.3999%200.980469)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2_1_729'%3e%3crect%20width='2016'%20height='113.97'%20fill='white'%20transform='translate(-38.3999%200.980469)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip3_1_729'%3e%3crect%20width='2016'%20height='113.974'%20fill='white'%20transform='translate(-38.3999%200.978516)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main$3 = {
  __name: "Privatization",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige-light relative" }, _attrs))}><div class="px-5 lg:px-28 pt-20 pb-20 lg:pb-44 lg:flex space-y-10 lg:space-y-0 lg:space-x-10 justify-between items-center"><div class="lg:w-1/2 space-y-5">`);
      _push(ssrRenderComponent(_sfc_main$f, { text: "Évènement" }, null, _parent));
      _push(`<h2 class="text-outline text-white text-2xl lg:text-4xl"> La Privatisation </h2><p class="font-poppins"> Nous proposons nos <b>services de restauration</b> sur Lyon et ses environs pour différents événements publics et privés : <b>festivals, anniversaires, brunchs de mariage, repas d’entreprises, salons ou rencontres sportives . </b>Nous assurons un service personnalisé avec des menus adéquats au type d’événement en question. </p>`);
      _push(ssrRenderComponent(_sfc_main$h, {
        text: "Voir plus",
        isolateClass: "w-fit text-white border-blue text-base bg-red hover:bg-orange",
        class: "w-fit",
        to: "/la-privatisation"
      }, null, _parent));
      _push(`</div><div class="transform relative lg:w-1/2"><div class="bg-sunbeam w-fit absolute -bottom-10 right-0 lg:-left-10 text-center rounded-2xl p-3 border-t border-l border-4 border-red"><h2 class="text-azure text-2xl lg:text-3xl font-bold">35 +</h2><span class="text-azure text-xs leading-3">Évènements par an</span></div><img class="object-cover border-t-2 border-l-2 border-8 border-orange rounded-2xl"${ssrRenderAttr("src", _imports_0)} alt=""></div></div><img class="absolute z-40 -bottom-3"${ssrRenderAttr("src", _imports_1)} alt=""></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Privatization.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_3 = "" + __buildAssetsURL("11.DtcwXY_P.jpg");
const _imports_6 = "" + __buildAssetsURL("05.i6HTy7x8.jpg");
const _imports_7 = "" + __buildAssetsURL("09.DJgpFOF3.jpg");
const _imports_8 = "" + __buildAssetsURL("10.CP2eO1vd.jpg");
const _sfc_main$2 = {
  __name: "PhotoHighlights",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-black relative pb-32 lg:pb-24" }, _attrs))} data-v-09e2ed63><div class="space-y-5 py-10 px-5 lg:px-28" data-v-09e2ed63><h2 class="text-white uppercase font-bold text-2xl lg:text-4xl text-center" data-v-09e2ed63> Shoot &amp; Mange : les instants croustillants du truck </h2><p class="text-white text-base text-center font-poppins" data-v-09e2ed63> Plongez dans l’univers de Frite Attaque à travers notre galerie. Chaque photo capture l’ambiance unique de notre food truck, de son style à l’effervescence de nos événements. C’est ici que le goût rencontre l’instant magique. </p></div><div class="px-2 lg:px-36 h-screen relative overflow-hidden" data-v-09e2ed63><div class="absolute top-0 left-0 w-full h-52 bg-gradient-to-b from-light-black to-transparent z-10" data-v-09e2ed63></div><div class="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-light-black to-transparent z-10" data-v-09e2ed63></div><div class="grid grid-cols-3 gap-4 h-full" data-v-09e2ed63><div class="gallery-col overflow-hidden" data-v-09e2ed63><div class="loop-container scroll-up" data-v-09e2ed63><div class="loop-block" data-v-09e2ed63><img${ssrRenderAttr("src", imageThree)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", third)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageTwo)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_3)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageSix)} class="w-full" data-v-09e2ed63></div><div class="loop-block" data-v-09e2ed63><img${ssrRenderAttr("src", imageThree)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", third)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageTwo)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_3)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageSix)} class="w-full" data-v-09e2ed63></div></div></div><div class="gallery-col overflow-hidden" data-v-09e2ed63><div class="loop-container scroll-down" data-v-09e2ed63><div class="loop-block" data-v-09e2ed63><img${ssrRenderAttr("src", imageFive)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_6)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageSix)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", third)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_7)} class="w-full" data-v-09e2ed63></div><div class="loop-block" data-v-09e2ed63><img${ssrRenderAttr("src", imageFive)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_6)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageSix)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", third)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_7)} class="w-full" data-v-09e2ed63></div></div></div><div class="gallery-col overflow-hidden" data-v-09e2ed63><div class="loop-container scroll-up" data-v-09e2ed63><div class="loop-block" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_8)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_7)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_3)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageThree)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", third)} class="w-full" data-v-09e2ed63></div><div class="loop-block" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_8)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_7)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", _imports_3)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", imageThree)} class="w-full" data-v-09e2ed63><img${ssrRenderAttr("src", third)} class="w-full" data-v-09e2ed63></div></div></div></div></div><div class="flex justify-center mt-[-60px] z-40 relative" data-v-09e2ed63>`);
      _push(ssrRenderComponent(Wrapper, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PhotoHighlights.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const PhotoHighlights = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-09e2ed63"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-black relative py-20" }, _attrs))}><img class="absolute z-20 -top-2 w-full"${ssrRenderAttr("src", _imports_0$1)} alt=""><div class="space-y-2 px-5 lg:px-44 text-center"><h2 class="text-white font-poppins text-3xl">On parle de nous !</h2><p class="text-white font-poppins"> Découvrez les coulisses de notre aventure culinaire, où chaque article est une escale gourmande sur la route des saveurs. </p></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 px-5 lg:px-44"><!--[-->`);
  ssrRenderList(3, (item, index) => {
    _push(`<div class="cursor-pointer hover:-translate-y-2 transform transition-all flex flex-col justify-between rounded-2xl font-poppins bg-[#242424]"><div class="relative"><img class="w-full h-full rounded-t-2xl"${ssrRenderAttr("src", _imports_1$2)} alt=""><div class="bg-indigo-blue absolute left-12 -bottom-2 transform -rotate-8 px-3 py-1 rounded-full"><span class="text-white text-lg font-permanent">#burgerchronicles</span></div></div><div class="px-5 py-4 space-y-5 mt-5"><h4 class="text-white text-xl"> Food truck pour repas entreprise à Reims : l&#39;expérience culinaire mémorable </h4><span class="text-gray-500 block">November 9, 2023</span><p class="text-white text-base"> Organiser un repas d&#39;entreprise à Reims qui sorte de l&#39;ordinaire peut vite devenir un casse-tête. Les food trucks représentent une solution idéale pour vos événements professionnels, alliant flexibilité et expérience culinaire originale. </p></div></div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Blog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const presentations = ref([
      {
        title: "🔥 Vers le 7ème Sel !",
        description: "Notre spécialité ? Des burgers bien garnis, des frites maison croustillantes, des kurtos et des bubble waffles. Le tout préparé avec envie, et servi avec le smile, partout où on pose le camion.",
        absoluteImage: PopOne,
        absoluteImagePosition: "-top-4 md:top-10",
        image: imageOne
      },
      {
        title: "🍔 Pour le meilleur et pour le cheese...",
        description: "Chez Frite Attaque, chaque burger est pensé pour régaler : pain moelleux, cuisson maîtrisée, garniture généreuse. Le tout chaud, fondant, croustillant… bref, une vraie déclaration d’amour au goût.",
        absoluteImage: PopTwo,
        absoluteImagePosition: "-bottom-5 right-20",
        image: imageTwo
      },
      {
        title: "🚚 Ça grille de mille feux !",
        description: "Frite Attaque, c’est plus qu’un food truck : c’est une ambiance, une présence sur vos événements, et une cuisine sans chichi mais pleine d’envie. De Lyon à plus loin, on vous suit partout où ça fête.",
        absoluteImage: GlassesWhite,
        absoluteImagePosition: "-bottom-1 left-5",
        image: imageThree
      }
    ]);
    useHead({
      title: "La Frite Attaque – Food Truck de Burgers & Frites maisons en Rhône-Alpes",
      meta: [
        {
          name: "description",
          content: "Food truck artisanal basé en Rhône-Alpes, La Frite Attaque vous régale avec ses smash burgers, frites maison, kürtős et bubble waffles. Disponibles pour tous vos événements : privés, pros ou festivals !"
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="sr-only"> La Frite Attaque – Food Truck de burgers, frites maison et douceurs sucrées </h1>`);
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$b, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_sfc_main$h, {
        to: "/nos-emplacements",
        text: "Ça donne faim ! Où puis-je vous trouver ?",
        isolateClass: "text-white border-blue",
        class: "text-nowrap bg-red w-fit absolute transform left-1/2 -translate-x-1/2 -top-3 z-50 text-xl"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, { presentations: unref(presentations) }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(About, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(ScrollText, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(PhotoHighlights, null, null, _parent));
      _push(`<div class="-mt-1"><svg class="w-full h-12" viewBox="0 0 1440 320" preserveAspectRatio="none"><path fill="#FFF2D4" d="M0,160L1440,320L1440,0L0,0Z"></path></svg></div><div class="pt-16 bg-beige">`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(Blog, null, null, _parent));
      _push(ssrRenderComponent(Faq, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CZJ9NrQ8.js.map
