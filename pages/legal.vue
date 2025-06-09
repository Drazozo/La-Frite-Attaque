<template>
  <div class="bg-beige min-h-screen py-20 px-5 md:px-28 text-gray-800 font-poppins">
    <div class="space-y-10 animate-fade-in">
      <!-- Titre principal -->
      <h1 class="text-4xl md:text-5xl font-extrabold text-azure text-center animate-bounce">
        Mentions Légales & CGV ⚖️🍟
      </h1>

      <!-- Intro fun -->
      <p class="text-center text-lg max-w-2xl mx-auto">
        Parce qu’on fait pas que des burgers... on fait aussi les choses dans les règles !<br />
        Voici nos mentions légales, nos conditions générales de vente et de confidentialité, servies bien chaudes (et sans jargon indigeste).
      </p>

      <!-- Bloc légal animé -->
      <div class="bg-white rounded-2xl p-6 shadow-xl space-y-6 animate-slide-in">
        <div>
          <h2 class="text-xl font-semibold text-red">Éditeur du site</h2>
          <p>
            LA FRITE ATTAQUE - SASU au capital de 1 000 €<br />
            SIREN : 944 901 545<br />
            RCS : Paris B 944 901 545<br />
            Code APE : 5610C – Restauration de type rapide<br />
            TVA intracommunautaire : FR24944901545<br />
            Siège social : 200 Rue de la Croix Nivert, 75015 Paris<br />
            Président : Enzo Métayer<br />
            Email : <a href="mailto:contact@lafriteattaque.fr" class="text-azure underline">contact@lafriteattaque.fr</a>
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-red">Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            IONOS by 1&1<br />
            7 place de la Gare, BP 70109, 57201 Sarreguemines Cedex – France<br />
            Téléphone : 0970 808 911 (appel non surtaxé)
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-red">Conditions de vente et d’utilisation</h2>
          <p>
            Tous les tarifs affichés sur ce site sont indicatifs, susceptibles de varier selon le lieu, la date ou le type d’événement. Aucune commande ne sera enregistrée sans versement d’un acompte tel que mentionné dans le devis personnalisé fourni. <br />
            En cas d’annulation, aucun remboursement ne sera exigible. La fourniture d’une prise électrique est obligatoire pour toute privatisation. Notre RC PRO est assurée auprès de la MAPA, y compris en cas d’accident grave (même improbable).<br />
            La Frite Attaque se réserve le droit de modifier ses tournées, ses emplacements, ou ses prestations, sans que cela ne puisse donner lieu à indemnisation.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-red">Données personnelles & confidentialité</h2>
          <p>
            Vos données ne sont ni revendues ni partagées. Elles servent uniquement à vous contacter pour un devis ou un événement. Vous pouvez à tout moment demander la suppression ou la modification de vos informations à l’adresse ci-dessus. <br />
            Notre site utilise des cookies (sans sucre ajouté) pour améliorer votre expérience. Ces cookies sont activés par défaut dès la poursuite de votre navigation sur notre site. Vous pouvez toutefois les refuser à tout moment via l’onglet de personnalisation ou les préférences de votre navigateur. <br />
            Conformément au RGPD, vous pouvez exercer vos droits (accès, rectification, suppression) en nous contactant par email.
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-red">Responsabilité & sécurité</h2>
          <p>
            Le site est mis à jour régulièrement, mais on n’est pas à l’abri d’un bug. En cas de souci, aucune responsabilité ne pourra être engagée. L’ensemble de notre matériel est conforme HACCP, gaz certifié, véhicule VASP, et assuré MAPA. La sécurité de vos événements est entre de bonnes mains (et de bons buns).
          </p>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-red">Propriété intellectuelle</h2>
          <p>
            L’ensemble du contenu de ce site (textes, images, recettes, tournures croustillantes) appartient à La Frite Attaque. Certains éléments textuels ou visuels peuvent avoir été créés partiellement ou entièrement à l’aide d’une intelligence artificielle. Toute reproduction, même partielle, sans autorisation écrite préalable est interdite. Merci de respecter notre travail, même si vous aimez un peu trop notre style !
          </p>
        </div>
      </div>

      <!-- Outro fun -->
      <p class="text-center italic text-sm mt-10">
        Merci d’avoir scrollé jusqu’ici. Pour vous récompenser, on vous doit bien une frite 🍟😉<br />
        Et si vous avez lu cette mention jusqu’au bout, envoyez-nous un message privé ou un mail avec le mot "frite10" pour recevoir 5 % de réduction sur votre prochaine commande (valable une fois) !
      </p>
    </div>
  </div>
</template>

<script setup>
// Petite animation fade-in & slide-in avec Tailwind + classes custom
</script>

<style scoped>
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 1s ease-in;
}

@keyframes slide-in {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
.animate-slide-in {
  animation: slide-in 0.8s ease-out;
}
</style>
