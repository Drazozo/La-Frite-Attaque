
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'About': typeof import("../components/About.vue")['default']
    'AnimatedCounter': typeof import("../components/AnimatedCounter.vue")['default']
    'Blog': typeof import("../components/Blog.vue")['default']
    'BrandIntro': typeof import("../components/BrandIntro.vue")['default']
    'Contact': typeof import("../components/Contact.vue")['default']
    'Domains': typeof import("../components/Domains.vue")['default']
    'Faq': typeof import("../components/Faq.vue")['default']
    'Footer': typeof import("../components/Footer.vue")['default']
    'Gallery': typeof import("../components/Gallery.vue")['default']
    'Header': typeof import("../components/Header.vue")['default']
    'Hero': typeof import("../components/Hero.vue")['default']
    'Location': typeof import("../components/Location.vue")['default']
    'MobileHeader': typeof import("../components/MobileHeader.vue")['default']
    'PhotoHighlights': typeof import("../components/PhotoHighlights.vue")['default']
    'Privatization': typeof import("../components/Privatization.vue")['default']
    'Products': typeof import("../components/Products.vue")['default']
    'Quote': typeof import("../components/Quote.vue")['default']
    'Recipes': typeof import("../components/Recipes.vue")['default']
    'ScrollText': typeof import("../components/ScrollText.vue")['default']
    'Services': typeof import("../components/Services.vue")['default']
    'Testimonials': typeof import("../components/Testimonials.vue")['default']
    'WhyChooseUs': typeof import("../components/WhyChooseUs.vue")['default']
    'Wrapper': typeof import("../components/Wrapper.vue")['default']
    'CarteHeroCarte': typeof import("../components/carte/HeroCarte.vue")['default']
    'CarteProduct': typeof import("../components/carte/Product.vue")['default']
    'CarteProductList': typeof import("../components/carte/ProductList.vue")['default']
    'CarteWhyUs': typeof import("../components/carte/WhyUs.vue")['default']
    'ContactHeroContact': typeof import("../components/contact/HeroContact.vue")['default']
    'LocationBigEvent': typeof import("../components/location/BigEvent.vue")['default']
    'LocationCard': typeof import("../components/location/Card.vue")['default']
    'LocationCarte': typeof import("../components/location/Carte.vue")['default']
    'LocationPlanning': typeof import("../components/location/Planning.vue")['default']
    'PrivatizationCallToAction': typeof import("../components/privatization/CallToAction.vue")['default']
    'PrivatizationContactPrivatization': typeof import("../components/privatization/ContactPrivatization.vue")['default']
    'PrivatizationHeroPrivatization': typeof import("../components/privatization/HeroPrivatization.vue")['default']
    'PrivatizationReasonsPrivatization': typeof import("../components/privatization/ReasonsPrivatization.vue")['default']
    'PrivatizationSocials': typeof import("../components/privatization/Socials.vue")['default']
    'PrivatizationStepTitle': typeof import("../components/privatization/StepTitle.vue")['default']
    'PrivatizationWrapperPrivatisation': typeof import("../components/privatization/WrapperPrivatisation.vue")['default']
    'UiBorderedImage': typeof import("../components/ui/BorderedImage.vue")['default']
    'UiButton': typeof import("../components/ui/Button.vue")['default']
    'UiLink': typeof import("../components/ui/Link.vue")['default']
    'UiOurCustomers': typeof import("../components/ui/OurCustomers.vue")['default']
    'UiOverlay': typeof import("../components/ui/Overlay.vue")['default']
    'UiScores': typeof import("../components/ui/Scores.vue")['default']
    'UiTag': typeof import("../components/ui/Tag.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAbout': LazyComponent<typeof import("../components/About.vue")['default']>
    'LazyAnimatedCounter': LazyComponent<typeof import("../components/AnimatedCounter.vue")['default']>
    'LazyBlog': LazyComponent<typeof import("../components/Blog.vue")['default']>
    'LazyBrandIntro': LazyComponent<typeof import("../components/BrandIntro.vue")['default']>
    'LazyContact': LazyComponent<typeof import("../components/Contact.vue")['default']>
    'LazyDomains': LazyComponent<typeof import("../components/Domains.vue")['default']>
    'LazyFaq': LazyComponent<typeof import("../components/Faq.vue")['default']>
    'LazyFooter': LazyComponent<typeof import("../components/Footer.vue")['default']>
    'LazyGallery': LazyComponent<typeof import("../components/Gallery.vue")['default']>
    'LazyHeader': LazyComponent<typeof import("../components/Header.vue")['default']>
    'LazyHero': LazyComponent<typeof import("../components/Hero.vue")['default']>
    'LazyLocation': LazyComponent<typeof import("../components/Location.vue")['default']>
    'LazyMobileHeader': LazyComponent<typeof import("../components/MobileHeader.vue")['default']>
    'LazyPhotoHighlights': LazyComponent<typeof import("../components/PhotoHighlights.vue")['default']>
    'LazyPrivatization': LazyComponent<typeof import("../components/Privatization.vue")['default']>
    'LazyProducts': LazyComponent<typeof import("../components/Products.vue")['default']>
    'LazyQuote': LazyComponent<typeof import("../components/Quote.vue")['default']>
    'LazyRecipes': LazyComponent<typeof import("../components/Recipes.vue")['default']>
    'LazyScrollText': LazyComponent<typeof import("../components/ScrollText.vue")['default']>
    'LazyServices': LazyComponent<typeof import("../components/Services.vue")['default']>
    'LazyTestimonials': LazyComponent<typeof import("../components/Testimonials.vue")['default']>
    'LazyWhyChooseUs': LazyComponent<typeof import("../components/WhyChooseUs.vue")['default']>
    'LazyWrapper': LazyComponent<typeof import("../components/Wrapper.vue")['default']>
    'LazyCarteHeroCarte': LazyComponent<typeof import("../components/carte/HeroCarte.vue")['default']>
    'LazyCarteProduct': LazyComponent<typeof import("../components/carte/Product.vue")['default']>
    'LazyCarteProductList': LazyComponent<typeof import("../components/carte/ProductList.vue")['default']>
    'LazyCarteWhyUs': LazyComponent<typeof import("../components/carte/WhyUs.vue")['default']>
    'LazyContactHeroContact': LazyComponent<typeof import("../components/contact/HeroContact.vue")['default']>
    'LazyLocationBigEvent': LazyComponent<typeof import("../components/location/BigEvent.vue")['default']>
    'LazyLocationCard': LazyComponent<typeof import("../components/location/Card.vue")['default']>
    'LazyLocationCarte': LazyComponent<typeof import("../components/location/Carte.vue")['default']>
    'LazyLocationPlanning': LazyComponent<typeof import("../components/location/Planning.vue")['default']>
    'LazyPrivatizationCallToAction': LazyComponent<typeof import("../components/privatization/CallToAction.vue")['default']>
    'LazyPrivatizationContactPrivatization': LazyComponent<typeof import("../components/privatization/ContactPrivatization.vue")['default']>
    'LazyPrivatizationHeroPrivatization': LazyComponent<typeof import("../components/privatization/HeroPrivatization.vue")['default']>
    'LazyPrivatizationReasonsPrivatization': LazyComponent<typeof import("../components/privatization/ReasonsPrivatization.vue")['default']>
    'LazyPrivatizationSocials': LazyComponent<typeof import("../components/privatization/Socials.vue")['default']>
    'LazyPrivatizationStepTitle': LazyComponent<typeof import("../components/privatization/StepTitle.vue")['default']>
    'LazyPrivatizationWrapperPrivatisation': LazyComponent<typeof import("../components/privatization/WrapperPrivatisation.vue")['default']>
    'LazyUiBorderedImage': LazyComponent<typeof import("../components/ui/BorderedImage.vue")['default']>
    'LazyUiButton': LazyComponent<typeof import("../components/ui/Button.vue")['default']>
    'LazyUiLink': LazyComponent<typeof import("../components/ui/Link.vue")['default']>
    'LazyUiOurCustomers': LazyComponent<typeof import("../components/ui/OurCustomers.vue")['default']>
    'LazyUiOverlay': LazyComponent<typeof import("../components/ui/Overlay.vue")['default']>
    'LazyUiScores': LazyComponent<typeof import("../components/ui/Scores.vue")['default']>
    'LazyUiTag': LazyComponent<typeof import("../components/ui/Tag.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const About: typeof import("../components/About.vue")['default']
export const AnimatedCounter: typeof import("../components/AnimatedCounter.vue")['default']
export const Blog: typeof import("../components/Blog.vue")['default']
export const BrandIntro: typeof import("../components/BrandIntro.vue")['default']
export const Contact: typeof import("../components/Contact.vue")['default']
export const Domains: typeof import("../components/Domains.vue")['default']
export const Faq: typeof import("../components/Faq.vue")['default']
export const Footer: typeof import("../components/Footer.vue")['default']
export const Gallery: typeof import("../components/Gallery.vue")['default']
export const Header: typeof import("../components/Header.vue")['default']
export const Hero: typeof import("../components/Hero.vue")['default']
export const Location: typeof import("../components/Location.vue")['default']
export const MobileHeader: typeof import("../components/MobileHeader.vue")['default']
export const PhotoHighlights: typeof import("../components/PhotoHighlights.vue")['default']
export const Privatization: typeof import("../components/Privatization.vue")['default']
export const Products: typeof import("../components/Products.vue")['default']
export const Quote: typeof import("../components/Quote.vue")['default']
export const Recipes: typeof import("../components/Recipes.vue")['default']
export const ScrollText: typeof import("../components/ScrollText.vue")['default']
export const Services: typeof import("../components/Services.vue")['default']
export const Testimonials: typeof import("../components/Testimonials.vue")['default']
export const WhyChooseUs: typeof import("../components/WhyChooseUs.vue")['default']
export const Wrapper: typeof import("../components/Wrapper.vue")['default']
export const CarteHeroCarte: typeof import("../components/carte/HeroCarte.vue")['default']
export const CarteProduct: typeof import("../components/carte/Product.vue")['default']
export const CarteProductList: typeof import("../components/carte/ProductList.vue")['default']
export const CarteWhyUs: typeof import("../components/carte/WhyUs.vue")['default']
export const ContactHeroContact: typeof import("../components/contact/HeroContact.vue")['default']
export const LocationBigEvent: typeof import("../components/location/BigEvent.vue")['default']
export const LocationCard: typeof import("../components/location/Card.vue")['default']
export const LocationCarte: typeof import("../components/location/Carte.vue")['default']
export const LocationPlanning: typeof import("../components/location/Planning.vue")['default']
export const PrivatizationCallToAction: typeof import("../components/privatization/CallToAction.vue")['default']
export const PrivatizationContactPrivatization: typeof import("../components/privatization/ContactPrivatization.vue")['default']
export const PrivatizationHeroPrivatization: typeof import("../components/privatization/HeroPrivatization.vue")['default']
export const PrivatizationReasonsPrivatization: typeof import("../components/privatization/ReasonsPrivatization.vue")['default']
export const PrivatizationSocials: typeof import("../components/privatization/Socials.vue")['default']
export const PrivatizationStepTitle: typeof import("../components/privatization/StepTitle.vue")['default']
export const PrivatizationWrapperPrivatisation: typeof import("../components/privatization/WrapperPrivatisation.vue")['default']
export const UiBorderedImage: typeof import("../components/ui/BorderedImage.vue")['default']
export const UiButton: typeof import("../components/ui/Button.vue")['default']
export const UiLink: typeof import("../components/ui/Link.vue")['default']
export const UiOurCustomers: typeof import("../components/ui/OurCustomers.vue")['default']
export const UiOverlay: typeof import("../components/ui/Overlay.vue")['default']
export const UiScores: typeof import("../components/ui/Scores.vue")['default']
export const UiTag: typeof import("../components/ui/Tag.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAbout: LazyComponent<typeof import("../components/About.vue")['default']>
export const LazyAnimatedCounter: LazyComponent<typeof import("../components/AnimatedCounter.vue")['default']>
export const LazyBlog: LazyComponent<typeof import("../components/Blog.vue")['default']>
export const LazyBrandIntro: LazyComponent<typeof import("../components/BrandIntro.vue")['default']>
export const LazyContact: LazyComponent<typeof import("../components/Contact.vue")['default']>
export const LazyDomains: LazyComponent<typeof import("../components/Domains.vue")['default']>
export const LazyFaq: LazyComponent<typeof import("../components/Faq.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/Footer.vue")['default']>
export const LazyGallery: LazyComponent<typeof import("../components/Gallery.vue")['default']>
export const LazyHeader: LazyComponent<typeof import("../components/Header.vue")['default']>
export const LazyHero: LazyComponent<typeof import("../components/Hero.vue")['default']>
export const LazyLocation: LazyComponent<typeof import("../components/Location.vue")['default']>
export const LazyMobileHeader: LazyComponent<typeof import("../components/MobileHeader.vue")['default']>
export const LazyPhotoHighlights: LazyComponent<typeof import("../components/PhotoHighlights.vue")['default']>
export const LazyPrivatization: LazyComponent<typeof import("../components/Privatization.vue")['default']>
export const LazyProducts: LazyComponent<typeof import("../components/Products.vue")['default']>
export const LazyQuote: LazyComponent<typeof import("../components/Quote.vue")['default']>
export const LazyRecipes: LazyComponent<typeof import("../components/Recipes.vue")['default']>
export const LazyScrollText: LazyComponent<typeof import("../components/ScrollText.vue")['default']>
export const LazyServices: LazyComponent<typeof import("../components/Services.vue")['default']>
export const LazyTestimonials: LazyComponent<typeof import("../components/Testimonials.vue")['default']>
export const LazyWhyChooseUs: LazyComponent<typeof import("../components/WhyChooseUs.vue")['default']>
export const LazyWrapper: LazyComponent<typeof import("../components/Wrapper.vue")['default']>
export const LazyCarteHeroCarte: LazyComponent<typeof import("../components/carte/HeroCarte.vue")['default']>
export const LazyCarteProduct: LazyComponent<typeof import("../components/carte/Product.vue")['default']>
export const LazyCarteProductList: LazyComponent<typeof import("../components/carte/ProductList.vue")['default']>
export const LazyCarteWhyUs: LazyComponent<typeof import("../components/carte/WhyUs.vue")['default']>
export const LazyContactHeroContact: LazyComponent<typeof import("../components/contact/HeroContact.vue")['default']>
export const LazyLocationBigEvent: LazyComponent<typeof import("../components/location/BigEvent.vue")['default']>
export const LazyLocationCard: LazyComponent<typeof import("../components/location/Card.vue")['default']>
export const LazyLocationCarte: LazyComponent<typeof import("../components/location/Carte.vue")['default']>
export const LazyLocationPlanning: LazyComponent<typeof import("../components/location/Planning.vue")['default']>
export const LazyPrivatizationCallToAction: LazyComponent<typeof import("../components/privatization/CallToAction.vue")['default']>
export const LazyPrivatizationContactPrivatization: LazyComponent<typeof import("../components/privatization/ContactPrivatization.vue")['default']>
export const LazyPrivatizationHeroPrivatization: LazyComponent<typeof import("../components/privatization/HeroPrivatization.vue")['default']>
export const LazyPrivatizationReasonsPrivatization: LazyComponent<typeof import("../components/privatization/ReasonsPrivatization.vue")['default']>
export const LazyPrivatizationSocials: LazyComponent<typeof import("../components/privatization/Socials.vue")['default']>
export const LazyPrivatizationStepTitle: LazyComponent<typeof import("../components/privatization/StepTitle.vue")['default']>
export const LazyPrivatizationWrapperPrivatisation: LazyComponent<typeof import("../components/privatization/WrapperPrivatisation.vue")['default']>
export const LazyUiBorderedImage: LazyComponent<typeof import("../components/ui/BorderedImage.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../components/ui/Button.vue")['default']>
export const LazyUiLink: LazyComponent<typeof import("../components/ui/Link.vue")['default']>
export const LazyUiOurCustomers: LazyComponent<typeof import("../components/ui/OurCustomers.vue")['default']>
export const LazyUiOverlay: LazyComponent<typeof import("../components/ui/Overlay.vue")['default']>
export const LazyUiScores: LazyComponent<typeof import("../components/ui/Scores.vue")['default']>
export const LazyUiTag: LazyComponent<typeof import("../components/ui/Tag.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
