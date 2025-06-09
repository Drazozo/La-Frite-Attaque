import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./Button-kovZ79jb.js";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "Faq",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref(-1);
    const faq = ref([
      {
        question: "Où peut-on vous trouver avec le food truck ?",
        answer: 'Nous sillonnons la région selon les événements du moment. Pour connaître notre emplacement du jour, rendez-vous sur notre page dédiée : <a href="https://lafriteattaque.fr/nos-emplacements" target="_blank">lafriteattaque.fr/nos-emplacements</a> ou suivez-nous sur les réseaux sociaux !'
      },
      {
        question: "Proposez-vous des plats végétariens ?",
        answer: "Pas pour le moment. Mais c’est en réflexion ! En attendant, certaines gourmandises sucrées comme les crêpes, bubble waffles ou kürtős peuvent convenir aux végétariens selon la garniture choisie. Restez connectés !"
      },
      {
        question: "Peut-on privatiser le food truck pour un événement ?",
        answer: `Absolument ! Mariages, anniversaires, événements d'entreprise... nous vous proposons une formule clé en main. Plus d'infos ici : <a href="https://lafriteattaque.fr/la-privatisation" target="_blank">lafriteattaque.fr/la-privatisation</a> et découvrez nos offres traiteur sur <a href="https://lafriteattaque.fr/la-carte-privatisation" target="_blank">lafriteattaque.fr/la-carte-privatisation</a>.`
      },
      {
        question: "Quels sont vos horaires d'ouverture ?",
        answer: 'Nos horaires dépendent des lieux et événements. Ils sont mis à jour en temps réel sur nos réseaux sociaux et sur notre page des emplacements : <a href="https://lafriteattaque.fr/nos-emplacements" target="_blank">lafriteattaque.fr/nos-emplacements</a>.'
      },
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons les paiements par carte bancaire, en espèces, sans contact, ainsi que les tickets restaurants papier. Les cartes titres-restaurants (type Swile, Edenred…) ne sont pas encore disponibles."
      },
      {
        question: "Quels types de plats proposez-vous ?",
        answer: "Des burgers smash maison, des frites croustillantes, des kürtős sucrés & salés, et des bubble waffles ultra gourmandes. Tout est préparé minute, avec des produits frais et locaux."
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige px-5 lg:px-28 py-20" }, _attrs))} data-v-6797bc07><div class="flex justify-center" data-v-6797bc07>`);
      _push(ssrRenderComponent(_sfc_main$1, { text: "J’espère que vous avez encore faim après dégusté autant d’image savoureuse !" }, null, _parent));
      _push(`</div><div class="space-y-4 mt-5" data-v-6797bc07><h2 class="text-outline text-2xl lg:text-4xl text-white text-center" data-v-6797bc07> Questions Fréquentes </h2></div><div class="flex justify-center mt-10 gap-5" data-v-6797bc07><div class="md:w-3/5 mx-auto px-4 md:px-8 py-4 border-t border-l border-4 border-orange rounded-xl" data-v-6797bc07><!--[-->`);
      ssrRenderList(faq.value, (item, index) => {
        _push(`<div class="border-b py-4" data-v-6797bc07><div class="flex justify-between space-x-5 items-center" data-v-6797bc07><h4 class="text-sm md:text-base cursor-pointer" data-v-6797bc07>${ssrInterpolate(item.question)}</h4><span class="cursor-pointer rounded-full flex items-center justify-center py-1 px-2 bg-red" data-v-6797bc07>`);
        if (activeIndex.value == index) {
          _push(`<b class="text-white font-permanent md:text-lg" data-v-6797bc07>-</b>`);
        } else {
          _push(`<b class="text-white font-permanent md:text-lg" data-v-6797bc07>+</b>`);
        }
        _push(`</span></div>`);
        if (activeIndex.value == index) {
          _push(`<p class="font-poppins text-sm md:text-base mt-2 text-gray-600" data-v-6797bc07>${item.answer ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6797bc07"]]);
export {
  Faq as F
};
//# sourceMappingURL=Faq-BGH3-OVl.js.map
