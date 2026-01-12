<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import Details from "@/components/Details.vue";
import FeatureList from "@/components/FeatureList.vue";
import Button from "@/components/ui/button/Button.vue";
import {
  ArrowBigRight,
  ChartNoAxesCombined,
  FileHeart,
  Telescope,
} from "lucide-vue-next";
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

const uspContent = {
  title: "Pourquoi participer à la campagne pilote Bigaille ?",
  1: {
    title: "Une visibilité concrète et ciblée",
    icon: Telescope,
    text:
      "Bigaille sélectionne des profils de revendeurs adaptés à votre cible. Vos messages seront insérés dans les colis et distribués aux acheteurs des revendeurs.",
  },
  2: {
    title: "Un format physique, fort en impact",
    icon: FileHeart,
    text:
      "Vos flyers seront vus, touchés et lus : un contact réel, bien plus mémorable que certains autres moyens de communication.",
  },
  3: {
    title: "Des résultats mesurables",
    icon: ChartNoAxesCombined,
    text:
      "Grâce à l'ajout d'outil de traçabilité sur les flyers glissés à l'intérieur des colis, nous aurons la possibilité de vous donner des résultats sur la qualité de la campagne.",
  },
};

function scrollToForm() {
  const element = document.getElementById("inscription");
  element?.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div>
    <section
      class="presentation bg-primary text-primary-foreground lg:flex flex-row-reverse justify-center items-center gap-8"
    >
      <div class="text-container max-w-xl flex flex-col gap-6">
        <h1 class="text-2xl font-bold">Gagnez en visibilité, Boostez vos ventes.</h1>
        <h2>Nous recherchons 3 marques, et c'est gratuit !</h2>
        <div class="pres-content flex flex-col gap-2">
          <p>
            Bigaille lance sa campagne pilote et recherche 3 marques partenaires prêtes à
            tester une nouvelle façon d’être vues.
          </p>
          <p>
            Pour cette phase test, nous mobilisons 20 vendeurs revendeurs soigneusement
            sélectionnés pour diffuser vos flyers directement dans leurs colis.
          </p>
          <p>
            Une opportunité unique de tester une communication innovante, ciblée et
            ultra-engageante.
          </p>
        </div>
        <Button
          variant="secondary"
          class="w-fit shadow-2xl font-bold"
          @click="scrollToForm"
        >
          Participer au test gratuitement
          <ArrowBigRight />
        </Button>
      </div>
      <div class="img-container max-w-125 hidden lg:block">
        <img src="../assets/pic2.png" alt="" />
      </div>
    </section>

    <section class="usp">
      <FeatureList :content="uspContent" />
    </section>

    <section id="inscription" class="bg-primary text-primary-foreground">
      <h2 class="max-w-2xl m-auto">
        Profitez d'un canal de diffusion innovant et convertissez l'attention des
        acheteurs en nouveaux clients !
      </h2>
      <h3 class="mt-8 -mb-4 max-w-2xl m-auto">
        Inscrivez-vous dès maintenant pour notre test :
      </h3>
      <ContactForm darkTheme />
    </section>

    <section class="faq flex flex-col gap-4">
      <div class="faq-header">
        <h2 class="mb-2">FAQ</h2>
        <p>Nos réponses à vos questions</p>
      </div>
      <Details question="C'est quoi le concept Bigaille ?">
        <p>
          Bigaille est une plateforme qui permet aux personnes qui envoient régulièrement
          des colis (Vinted, Etsy, Leboncoin…) de glisser de petits flyers dans leurs
          colis pour aider des marques à se faire connaître. Aujourd’hui, nous lançons une
          phase test, gratuite, pour mesurer l’impact de ce nouveau mode de communication.
        </p>
      </Details>
      <Details question="Qu'est-ce que Bigaille va m'apporter de plus ?">
        <p>
          Bigaille s'inscrit dans une démarche gagnant-gagnant. Nous souhaitons profiter
          de l'achat des réseaux des revendeurs qui utilisent les plateformes de revente
          en ligne pour communiquer auprès du grand public. Nous pouvons identifier la
          cible, l'acheteur est dans un état de plaisir quand il va recevoir le colis,
          nous faisons entrer la communication directement dans le foyer, l'attention de
          l'acheteur est dédiée à 100% à son ouverture de colis. Cela évite aux marques de
          dépenser des sommes astronomiques dans des supports de communication, des
          newsletters, de faire appel à une autre entreprise et faire profiter aux
          revendeurs de cashback en fonction de l'action de son acheteur.
        </p>
      </Details>
      <Details question="Est-ce que ça prend du temps ?">
        <p>
          Pour la phase pilote, nous allons échanger par email et par téléphone afin de
          valider ensemble la concept de communication, le message publicitaire à insérer
          et les éléments à mesurer.
        </p>
      </Details>
      <Details question="Qu'elle est la prochaine étape ?">
        <p>
          Si la phase pilote est concluante, nous pourrons décliner 3 offres différentes
          qui permettront d'augmenter vos ventes et votre notoriété. Si vous souhaitez en
          savoir plus, n'hésitez pas à nous envoyer un email pour prendre rendez-vous
          ensemble.
        </p>
      </Details>
      <Details question="Est-ce que vous avez des statistiques à présenter ?">
        <p>
          A la fin de la phase pilote, nous serons en capacité de revenir vers vous avec
          des chiffres, c'est pourquoi elle est importante et décisive. Notre modèle
          repose sur l'asile colis qui garantit un taux d'ouverture élevé, se rapprochant
          des 100%.
        </p>
      </Details>
    </section>
  </div>
</template>

<style scoped>
section {
  padding: 4rem 2rem;
}
@media (min-width: 640px) {
  section {
    padding: 4rem;
  }
}
h2 {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.33;
}
</style>
