<script setup lang="ts">
import ContactForm from "@/components/ContactForm.vue";
import Details from "@/components/Details.vue";
import FeatureList from "@/components/FeatureList.vue";
import Button from "@/components/ui/button/Button.vue";
import { ArrowBigRight, Form, PackageOpen, PartyPopper } from "lucide-vue-next";

const stepsContent = {
  title: "Comment ça marche ?",
  desc: "On t'explique en 3 étapes notre phase de test :",
  1: {
    title: "Étape 1",
    icon: Form,
    text:
      "Tu t'inscris, tu es sélectionné(e) par nos équipes, et tu reçois chez toi des flyers à insérer dans tes colis.",
  },
  2: {
    title: "Étape 2",
    icon: PackageOpen,
    text:
      "Tu as 3 mois pour envoyer tous tes flyers dans tes colis. Les flyers mettront en valeur 3 marques que nous allons parallèlement sélectionner pour ce test.",
  },
  3: {
    title: "Étape 3",
    icon: PartyPopper,
    text:
      "Tu seras le premier informé de la suite de Bigaille. On espère sincèrement que ça sera un succès grâce à toi !",
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
      class="presentation bg-primary text-primary-foreground lg:flex flex-row-reverse justify-center items-center gap-16"
    >
      <div class="text-container max-w-xl flex flex-col gap-8">
        <h1 class="text-2xl font-bold">Transforme tes colis en opportunités</h1>
        <p>
          Tu es adepte de la revente de vêtements ou tout autre objet en ligne ? Utilise
          Bigaille et transforme ton temps en argent !
        </p>
        <Button
          variant="secondary"
          class="w-fit shadow-2xl font-bold"
          @click="scrollToForm"
        >
          Participer au test gratuitement
          <ArrowBigRight />
        </Button>
      </div>
      <div class="img-container max-w-100 hidden lg:block">
        <img
          src="../assets/pic1.webp"
          alt="Personne plaçant une carte en noir et blanc sur un objet emballé dans du papier blanc, le tout dans un carton ouvert sur une table."
        />
      </div>
    </section>

    <section class="steps">
      <FeatureList :content="stepsContent" />
    </section>

    <section id="inscription" class="bg-primary text-primary-foreground">
      <h2 class="max-w-2xl m-auto">
        Transforme tes ventes en revenu complémentaire en gagnant du cashback auprès de
        tes acheteurs.
      </h2>
      <h3 class="mt-8 -mb-4 max-w-2xl m-auto">
        Inscris-toi dès maintenant pour notre test :
      </h3>
      <ContactForm darkTheme />
    </section>

    <section class="faq flex flex-col gap-4">
      <div class="faq-header">
        <h2>FAQ</h2>
        <p>Nos réponses à tes questions</p>
      </div>
      <Details question="Bigaille, c'est quoi exactement ?">
        <p>
          Bigaille est une plateforme qui permet aux personnes qui envoient régulièrement
          des colis (Vinted, Etsy, Leboncoin…) de glisser de petits flyers dans leurs
          colis pour aider des marques à se faire connaître. <br /><br />
          Nous souhaitons proposer au travers de Bigaille une nouvelle façon de
          communiquer et de transformer un geste existant en une nouvelle opportunité
          gagnant-gagnant pour vous acheteurs et pour les marques. <br /><br />
          Aujourd’hui, nous lançons une phase test, gratuite, pour mesurer l’impact de ce
          nouveau mode de communication.
        </p>
      </Details>
      <Details question="Est-ce que ça prend du temps ?">
        Non. <br />
        <br />Tu prépares tes colis comme d’habitude. La seule différence : tu glisses un
        flyer dedans. C’est tout.
      </Details>
      <Details question="Qu'est-ce qu'il faut faire ?">
        Est-ce que les actions suivantes te parle ?<br /><br />
        <ul>
          <li>Préparer des colis</li>
          <li>Faire des photos</li>
          <li>Aller aux lockers</li>
          <li>Coller des bons de livraison</li>
          <li>Satisfaire les acheteurs</li>
        </ul>
        <br />
        Si oui, pas de doute, on attend ta candidature, les marques n'attendent plus que
        toi pour gagner en visibilité !
      </Details>
      <Details question="Pourquoi nous avons besoin de vous ?">
        Parce que tu envoies déjà des colis ! Les acheteurs ouvrent leurs colis avec
        impatience : c’est un moment d’attention maximale. <br /><br />Ton geste simple
        (glisser un flyer) permet de : <br /><br />
        <ul>
          <li>Soutenir des marques</li>
          <li>Participer à un nouveau concept</li>
          <li>Et bientôt… gagner de l’argent !</li>
        </ul>
      </Details>
      <Details question="Est-ce que c’est payant ?">
        Non, et ça ne le sera jamais. <br /><br />
        Tu ne paies rien : <br /><br />
        <ul>
          <li>Pas d’abonnement</li>
          <li>Pas de frais</li>
          <li>Pas d’engagement</li>
        </ul>
        <br />
        Bigaille te fournit gratuitement les flyers pour le test. <br /><br />
        C'est comme rendre service aux marques et aux entreprises qui cherchent à se faire
        connaitre. On te remercie en te reversant de l'argent lorsque ton acheteur
        manifeste une forme d'intérêt en scannant les QR codes présents sur les flyers que
        tu vas rajouter dans tes colis.
      </Details>
      <Details question="Quels sont les profils recherchés ?">
        Tu es la personne qu'il nous faut si : <br /><br />
        <ul>
          <li>Tu envoies au moins 5 colis par mois</li>
          <li>
            Tu vends tes produits en ligne en passant par les plateformes de ventes de
            seconde main
          </li>
          <li>Tu es motivé(e) à glisser un petit flyer dans tes colis</li>
          <li>Tu veux soutenir un projet français (breton) 💛</li>
        </ul>
      </Details>
      <Details question="Pourquoi participer à la 1ʳᵉ phase du projet ?">
        <ul>
          <li>Tu participes à la création d’un nouveau concept</li>
          <li>Tu aides les petites marques à se faire connaître</li>
          <li>Tu prépares l’arrivée du système de cagnotte</li>
          <li>Tu es parmi les premiers expéditeurs Bigaille</li>
          <li>Tu reçois un kit simple, joli et prêt à utiliser</li>
          <li>Zéro contrainte : tu envoies tes colis comme d’habitude</li>
        </ul>
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
  margin-bottom: 0.5rem;
}
h3 {
  font-weight: bold;
}
</style>
