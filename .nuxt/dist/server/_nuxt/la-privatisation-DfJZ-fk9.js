import { mergeProps, useSSRContext, ref, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain } from "vue/server-renderer";
import { W as WrapperPrivatisation, H as HeroPrivatization, _ as _sfc_main$7 } from "./WrapperPrivatisation-CKUru9xe.js";
import { _ as _sfc_main$4 } from "./Tag-Cj_fbZ-B.js";
import { P as PopOne, b as PopTwo, G as GlassesWhite, a as imageFive, i as imageSix, _ as _sfc_main$8 } from "./PopTwo-BFHQPJfU.js";
import __nuxt_component_0 from "./index-DxlYqOiA.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./Button-kovZ79jb.js";
import { u as useNuxtApp } from "../server.mjs";
import { _ as _sfc_main$9 } from "./Testimonials-D9S0LmCD.js";
import { a as imageOne, b as imageTwo, i as imageThree } from "./03-C4UTujI1.js";
import { u as useHead } from "./v3-CVz4KKeU.js";
import "./Link-DjAt4iCU.js";
import "gsap";
import "gsap/ScrollTrigger.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/hookable/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/unctx/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/radix3/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/defu/dist/defu.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/ufo/dist/index.mjs";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/klona/dist/index.mjs";
import "pinia";
import "C:/xampp/htdocs/LaFriteAttaque/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$3 = {
  __name: "CallToAction",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-light-black pt-16 pb-16 px-5 md:px-28 relative" }, _attrs))}><div class="space-y-4 relative">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "ou en bande",
        class: "absolute rotate-8 left-0 -top-10 text-sm bg-green"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "100% validé",
        class: "absolute right-0 -top-12 text-sm bg-clay-orange"
      }, null, _parent));
      _push(`<h3 class="text-white text-xl md:text-2xl"> Solo ou en bande ? On régale tout le monde ! </h3><p class="text-white text-sm md:text-base font-poppins"> Que vous soyez un petit groupe de gourmands ou une grande tablée à nourrir, La Frite Attaque est prête à dégainer ses burgers, frites maison, kürtős et autres douceurs. <br> À partir de 50 personnes, notre food truck se privatise rien que pour vous. Mariages, anniversaires, entreprises ou festivals : on s’adapte à votre événement pour vous régaler dans toute l’Auvergne Rhône-Alpes (et plus loin si affinités). <br> Le plaisir d’un bon repas, à partager sans modération ! </p></div><div class="mt-5">`);
      _push(ssrRenderComponent(WrapperPrivatisation, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privatization/CallToAction.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "StepTitle",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige py-10 md:py-20 px-5 md:px-28" }, _attrs))}><div class="space-y-4 relative w-fit">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "de génie",
        class: "absolute rotate-8 left-0 -top-10 text-xs bg-green"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        text: "vers le 7ème ciel",
        class: "absolute right-0 -top-12 text-xs bg-clay-orange"
      }, null, _parent));
      _push(`<h3 class="text-black text-xl md:text-2xl font-poppins"> De l&#39;idée à la dégustation : Votre privatisation étape par étape </h3></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privatization/StepTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ContactPrivatization",
  __ssrInlineRender: true,
  setup(__props) {
    const { $toast } = useNuxtApp();
    const { $socials } = useNuxtApp();
    const form = ref({
      role: "",
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      evenement: "",
      nombre: "",
      lieu: "",
      date: "",
      message: ""
    });
    const isSubmit = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-beige-light relative" }, _attrs))}><div class="px-5 lg:px-28 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center"><div class="space-y-5">`);
      _push(ssrRenderComponent(_sfc_main$5, { text: "Privatisation" }, null, _parent));
      _push(`<h2 class="text-outline text-white text-2xl lg:text-4xl"> Nos Coordonnées </h2><p class="font-poppins"> Ne manquez pas l&#39;opportunité de surprendre vos invités avec une expérience culinaire unique. </p><p class="font-poppins"> Contactez-nous via notre formulaire en ligne ou par téléphone pour discuter de votre projet. Avec La Frite Attaque , transformez votre événement à Château Thierry en un moment exceptionnel. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-black py-6"><div><div class="flex items-center space-x-2"><span class="rounded-full aspect-square size-8 flex justify-center items-center bg-red">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "mdi:telephone",
        width: "24",
        height: "24",
        style: { "color": "#fff" }
      }, null, _parent));
      _push(`</span><span>Notre téléphone</span></div><div class="pl-10"><p class="font-poppins text-sm text-gray-800">06.56.66.59.81</p></div></div><div><div class="flex items-center space-x-2"><span class="rounded-full aspect-square size-8 flex justify-center items-center bg-red">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ic:baseline-email",
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
      _push(`</span><span>Adresse</span></div><div class="pl-10"><p class="font-poppins text-sm text-gray-800"> 24 rue des aulnes, 69760 Limonest </p></div></div></div><div class="hidden md:flex justify-between"><ul class="flex space-x-2 items-center"><span>Suivez-nous: </span><!--[-->`);
      ssrRenderList(unref($socials), (social, index) => {
        _push(`<li class="transform transition duration-500 hover:bg-red size-10 aspect-square text-white bg-orange rounded-full"><a class="text-xl flex items-center justify-center w-full h-full" href="">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: social.icon
        }, null, _parent));
        _push(`</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="rounded-2xl transform relative border-t border-l border-5 border-blue px-2 sm:px-5 py-6"><div class="${ssrRenderClass([unref(isSubmit) ? "block" : "hidden", "absolute z-40 w-full bg-white bg-opacity-50 rounded-2xl inset-0 h-full"])}"></div><div class="py-5"><form class="font-poppins" action=""><div class="space-y-5"><div class="flex space-x-5"><div class="flex space-x-2 items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).role, "Particulier")) ? " checked" : ""} id="Particulier" class="size-5" type="radio" value="Particulier" name="role"><label class="text-lg" for="Particulier">Particulier</label></div><div class="flex space-x-2 items-center"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).role, "Professionel")) ? " checked" : ""} id="Professionel" class="size-5" type="radio" value="Professionel" name="role"><label class="text-lg" for="Professionel">Professionel</label></div></div><div class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"><input type="text" placeholder="Nom"${ssrRenderAttr("value", unref(form).nom)} class="py-3 px-5 w-full rounded-full border border-blue outline-none"><input type="text" placeholder="Prénom"${ssrRenderAttr("value", unref(form).prenom)} class="py-3 px-5 w-full rounded-full border border-blue outline-none"></div><div class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"><input type="email" placeholder="E-mail"${ssrRenderAttr("value", unref(form).email)} class="py-3 px-5 w-full rounded-full border border-blue outline-none"><input type="tel" placeholder="Téléphone"${ssrRenderAttr("value", unref(form).telephone)} class="py-3 px-5 w-full rounded-full border border-blue outline-none"></div><div class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"><select class="py-3 px-5 rounded-full w-full border border-blue bg-white outline-none" name="" id=""><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).evenement) ? ssrLooseContain(unref(form).evenement, "") : ssrLooseEqual(unref(form).evenement, "")) ? " selected" : ""}>Type d&#39;évènement</option><option value="Évènement sportif"${ssrIncludeBooleanAttr(Array.isArray(unref(form).evenement) ? ssrLooseContain(unref(form).evenement, "Évènement sportif") : ssrLooseEqual(unref(form).evenement, "Évènement sportif")) ? " selected" : ""}>Évènement sportif</option><option value="Évènement privé"${ssrIncludeBooleanAttr(Array.isArray(unref(form).evenement) ? ssrLooseContain(unref(form).evenement, "Évènement privé") : ssrLooseEqual(unref(form).evenement, "Évènement privé")) ? " selected" : ""}>Évènement privé</option><option value="Évènement profesionnel"${ssrIncludeBooleanAttr(Array.isArray(unref(form).evenement) ? ssrLooseContain(unref(form).evenement, "Évènement profesionnel") : ssrLooseEqual(unref(form).evenement, "Évènement profesionnel")) ? " selected" : ""}>Évènement professionnel</option><option value="Festival"${ssrIncludeBooleanAttr(Array.isArray(unref(form).evenement) ? ssrLooseContain(unref(form).evenement, "Festival") : ssrLooseEqual(unref(form).evenement, "Festival")) ? " selected" : ""}>Festival</option></select><input type="number" placeholder="Nombre de personnes"${ssrRenderAttr("value", unref(form).nombre)} min="1" class="py-3 px-5 w-full rounded-full border border-blue outline-none"></div><div class="md:flex justify-center space-y-3 md:space-x-3 md:space-y-0"><input type="text" placeholder="Lieu"${ssrRenderAttr("value", unref(form).lieu)} class="py-3 px-5 w-full rounded-full border border-blue outline-none"><input type="date"${ssrRenderAttr("value", unref(form).date)} class="py-3 px-5 w-full rounded-full border border-blue outline-none"></div><div><textarea placeholder="Donnez-nous un peu plus de détails sur votre demande 
de privatisation, nous reviendrons rapidement vers vous." class="w-full h-48 py-3 px-5 rounded-2xl border border-blue bg-white outline-none" name="" id="">${ssrInterpolate(unref(form).message)}</textarea></div><div>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        text: "Envoyer",
        class: "w-full font-bold"
      }, null, _parent));
      _push(`</div></div></form></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privatization/ContactPrivatization.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const imageFour = "" + __buildAssetsURL("04.OI4PA8w1.jpg");
const imageSeven = "" + __buildAssetsURL("12.CClnIFW3.jpg");
const imageEight = "" + __buildAssetsURL("13.uPqn67B3.jpg");
const imageNine = "" + __buildAssetsURL("14.CNAMrA-x.jpg");
const brandData = [
  {
    title: "1- Faites-nous part de votre projet",
    description: `Commencez par remplir notre formulaire de demande de
          devis sur le site. Précisez-nous le nombre de convives, la
          date de l'événement, le lieu et toute autre information
          pertinente. Plus vous nous donnez de détails, mieux nous
          pourrons répondre à vos attentes.`,
    absoluteImage: PopOne,
    absoluteImagePosition: "-top-16",
    image: imageOne
  },
  {
    title: "2- Un échange personnalisé",
    description: `Suite à votre demande, notre équipe prendra contact avec
          vous dans les plus brefs délais. Nous discuterons ensemble
          des détails de la prestation pour s'assurer que tout soit
          parfait pour votre événement.`,
    absoluteImage: PopTwo,
    absoluteImagePosition: "-bottom-5 right-20",
    image: imageTwo
  },
  {
    title: "3- Réception de votre devis",
    description: `Après notre échange, nous vous enverrons un devis détaillé.
  Celui-ci reprendra toutes les prestations convenues (formules à déjeuner, personnel, service, chaises & tables...)`,
    absoluteImage: GlassesWhite,
    absoluteImagePosition: "-bottom-1 left-5",
    image: imageThree
  },
  {
    title: "4- Validation et réservation",
    description: `Une fois le devis validé de votre part, un acompte sera
  demandé pour sécuriser la date de votre événement. Ce
  premier paiement garantit notre présence et notre
  engagement à faire de votre événement un moment
  inoubliable. On aura un MAXIII Smile pour un MAXIII festin !`,
    absoluteImage: PopOne,
    absoluteImagePosition: "-top-16",
    image: imageFour
  },
  {
    title: "5- Le Jour J",
    description: `Le jour J, La Frite Attaque arrive sur le lieu de votre événement.
  Vous n'avez rien à faire, si ce n'est profiter ! De l'installation à
  la préparation, en passant par le service, nous nous
  occupons de tout. Que vous souhaitiez un menu complet de
  l'entrée au dessert ou simplement nos burgers signature,
  tout est possible.`,
    absoluteImage: GlassesWhite,
    absoluteImagePosition: "-bottom-1 left-5",
    image: imageFive
  },
  {
    title: "6- La Touche Finale",
    description: `Après avoir régalé vos convives, nous nous chargeons du
  rangement et de la propreté du lieu. Vous pouvez ainsi
  profiter pleinement de la suite de votre événement, sans
  vous soucier des détails logistiques.`,
    absoluteImage: PopTwo,
    absoluteImagePosition: "-bottom-5 right-20",
    image: imageSix
  },
  {
    title: `La Frite Attaque :
  L'Alliance du Sérieux et
  du Savoureux !`,
    description: `Quand L'Instant s'invite à vos événements professionnels,
  attendez-vous à une explosion de saveurs ! Lancement de
  produit, team building ou pot de départ, nos burgers sauront
  marquer les esprits. Qui a dit que le monde des affaires ne
  pouvait pas être délicieusement fun ?`,
    absoluteImage: PopOne,
    absoluteImagePosition: "-top-16",
    image: imageSeven
  },
  {
    title: `Mariage, Anniversaire :
  Dites "Oui" à notre gamme !`,
    description: `La Frite Attaque débarque pour pimenter vos célébrations privées !
  Imaginez la surprise et le bonheur de vos invités en
  découvrant notre food-truck à votre fête. Un anniversaire
  avec des bougies... et des burgers, petits fours, des crêpes... c'est encore mieux, non ?`,
    absoluteImage: PopTwo,
    absoluteImagePosition: "-bottom-5 right-20",
    image: imageEight
  },
  {
    title: `À Votre Goût, Sans Faute
  de Goût !`,
    description: `Vous êtes plutôt ketchup ou mayo ? Avec ou sans oignons ?
  Peu importe ! A chaque instant, on s'adapte à toutes vos envies. On fait sur mesure à vos demandes gourmandes.
 
  
  Parce qu'un événement réussi, c'est avant tout un menu à votre image ! Et nous ne saisons pas que des
  burgers... nous nous adaptons à vos envies et votre projet !`,
    absoluteImage: GlassesWhite,
    absoluteImagePosition: "-bottom-1 left-5",
    image: imageNine
  }
];
const _sfc_main = {
  __name: "la-privatisation",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Privatisation – La Frite Attaque | Food Truck pour vos événements",
      meta: [
        {
          name: "description",
          content: "Privatisez le food truck La Frite Attaque pour vos événements privés ou professionnels en Rhône-Alpes. Smash burgers, frites maison, crêpes et bubble waffles au menu !"
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    });
    const data = ref({
      title: `Découvrons la carte traiteur Lyon, Roanne...`,
      description: `Faites de votre événement en Auvergne Rhône-Alpes une célébration gourmande avec la privatisation de votre food truck de burgers, crêpes et Bubble Waffle. Découvrez une cuisine de rue créative et savoureuse, parfaite pour impressionner vos invités.`,
      link: {
        text: "Découvrir la carte traiteur",
        to: "/la-carte"
      }
    });
    const link = ref({
      text: "Découvrir la carte traiteur",
      to: "/la-carte"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="sr-only"> Privatisation – Food truck La Frite Attaque pour événements en Rhône-Alpes </h1>`);
      _push(ssrRenderComponent(HeroPrivatization, { data: unref(data) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, { link: unref(link) }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        presentations: unref(brandData).slice(0, 6)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        presentations: unref(brandData).slice(6)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/la-privatisation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=la-privatisation-DfJZ-fk9.js.map
