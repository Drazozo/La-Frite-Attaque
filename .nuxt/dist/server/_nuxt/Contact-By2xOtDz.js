import __nuxt_component_0 from "./index-DxlYqOiA.js";
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./Button-kovZ79jb.js";
import { _ as _sfc_main$2 } from "./Link-DjAt4iCU.js";
import { u as useLocationStore } from "./locationStore-ChZVS-tN.js";
import { u as useNuxtApp } from "../server.mjs";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const locationStore = useLocationStore();
    const { $toast } = useNuxtApp();
    locationStore.location;
    const { $socials } = useNuxtApp();
    const form = ref({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      sujet: "Plus d'informations",
      message: ""
    });
    const isSubmit = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige-light relative" }, _attrs))}><div class="px-5 lg:px-28 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center"><div class="space-y-5">`);
      _push(ssrRenderComponent(_sfc_main$1, { text: "Contact" }, null, _parent));
      _push(`<h2 class="text-outline text-white text-2xl lg:text-4xl"> Nos Coordonnées </h2><p class="font-poppins"> Vous avez des questions ? Vous souhaitez obtenir plus d’informations ? Vous souhaitez recevoir un devis ? N’hésitez pas à nous contacter ! Réponse sous 24h ! </p><div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-black py-6"><div><div class="flex items-center space-x-2"><span class="rounded-full aspect-square size-8 flex justify-center items-center bg-red">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:telephone",
        width: "24",
        height: "24",
        style: { "color": "#fff" }
      }, null, _parent));
      _push(`</span><span>Notre téléphone</span></div><div class="pl-10"><p class="font-poppins text-sm text-gray-800">06.56.66.59.81</p></div></div><div><div class="flex items-center space-x-2"><span class="rounded-full aspect-square size-8 flex justify-center items-center bg-red">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:email-outline",
        width: "24",
        height: "24",
        style: { "color": "#fff" }
      }, null, _parent));
      _push(`</span><span>Email</span></div><div class="pl-10"><p class="font-poppins text-sm text-gray-800"> contact@lafriteattaque.fr </p></div></div><div><div class="flex items-center space-x-2"><span class="rounded-full aspect-square size-8 flex justify-center items-center bg-red">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:map-pin-fill",
        width: "24",
        height: "24",
        style: { "color": "#fff" }
      }, null, _parent));
      _push(`</span><span>Adresse</span></div><div class="pl-10"><p class="font-poppins text-sm text-gray-800"><i>Adresse pour nous envoyer une frite postale</i><br> 200 Rue de la croix nivert 75015 Paris </p></div></div></div><div class="hidden md:flex justify-between"><ul class="flex space-x-2 items-center"><span>Suivez-nous: </span><!--[-->`);
      ssrRenderList(unref($socials), (social, index) => {
        _push(`<li class="transform transition duration-500 hover:bg-red size-10 aspect-square text-white bg-orange rounded-full"><a class="text-xl flex items-center justify-center w-full h-full"${ssrRenderAttr("href", social.to)} target="_blank">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: social.icon
        }, null, _parent));
        _push(`</a></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        text: "Par ici la demande de devis !",
        isolateClass: "w-fit text-white border-blue text-base bg-red",
        class: "w-fit",
        href: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Par ici la demande de devis ! `);
          } else {
            return [
              createTextVNode(" Par ici la demande de devis ! ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded-2xl relative z-30 transform border-t border-l border-5 border-blue px-2 sm:px-5 py-6"><div class="${ssrRenderClass([unref(isSubmit) ? "block" : "hidden", "absolute z-40 w-full bg-white bg-opacity-50 rounded-2xl inset-0 h-full"])}"></div><div class="py-5"><form class="font-poppins" action=""><div class="space-y-3"><div class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"><input type="text" placeholder="Nom"${ssrRenderAttr("value", unref(form).nom)} class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"><input type="text" placeholder="Prénom"${ssrRenderAttr("value", unref(form).prenom)} class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"></div><div class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"><input type="email"${ssrRenderAttr("value", unref(form).email)} placeholder="E-mail" class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"><input type="tel"${ssrRenderAttr("value", unref(form).telephone)} placeholder="Téléphone" class="py-3 px-5 w-full lg:w-full rounded-full border border-blue outline-none"></div><div><select class="w-full py-3 px-5 rounded-full border border-blue bg-white outline-none" name="" id=""><option value="Plus d&#39;informations"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sujet) ? ssrLooseContain(unref(form).sujet, "Plus d'informations") : ssrLooseEqual(unref(form).sujet, "Plus d'informations")) ? " selected" : ""}> Plus d&#39;informations </option><option value="Privatisation"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sujet) ? ssrLooseContain(unref(form).sujet, "Privatisation") : ssrLooseEqual(unref(form).sujet, "Privatisation")) ? " selected" : ""}>Privatisation</option><option value="Demande de devis"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sujet) ? ssrLooseContain(unref(form).sujet, "Demande de devis") : ssrLooseEqual(unref(form).sujet, "Demande de devis")) ? " selected" : ""}>Demande de devis</option><option value="Expérience"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sujet) ? ssrLooseContain(unref(form).sujet, "Expérience") : ssrLooseEqual(unref(form).sujet, "Expérience")) ? " selected" : ""}>Parler de mon expérience</option><option value="Autre"${ssrIncludeBooleanAttr(Array.isArray(unref(form).sujet) ? ssrLooseContain(unref(form).sujet, "Autre") : ssrLooseEqual(unref(form).sujet, "Autre")) ? " selected" : ""}>Autre</option></select></div><div><textarea placeholder="Donnez-nous un peu plus de détails sur votre demande, nous reviendrons rapidement vers vous." class="w-full h-48 py-3 px-5 rounded-2xl border border-blue bg-white outline-none" name="" id="">${ssrInterpolate(unref(form).message)}</textarea></div><div>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        text: "Envoyer",
        class: "w-full font-bold"
      }, null, _parent));
      _push(`</div></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=Contact-By2xOtDz.js.map
