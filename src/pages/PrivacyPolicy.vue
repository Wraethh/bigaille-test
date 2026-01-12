<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
</script>

<template>
  <article class="px-8 py-12 flex flex-col gap-8">
    <div class="privacy-header">
      <h1 class="text-2xl font-bold mb-4">Politique de confidentialité</h1>
      <p>
        Dernière mise à jour : 24/12/2025 <br />
        La présente politique de confidentialité décrit comment Bigaille collecte, utilise
        et protège les données personnelles des utilisateurs de son site internet,
        conformément au Règlement Général sur la Protection des Données (RGPD) et à la
        législation française en vigueur. <br />
        Bigaille est actuellement en phase de campagne pilote, visant à recruter des
        marques partenaires et des utilisateurs particuliers souhaitant participer à une
        expérimentation du service.
      </p>
    </div>

    <section>
      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données est : <br />
        Email de contact :
        <a href="mailto:hello.bigaille@outlook.com">hello.bigaille@outlook.com</a>
      </p>
    </section>

    <section>
      <h2>2. Données personnelles collectées</h2>
      <p>
        Dans le cadre de son activité actuelle, Bigaille collecte uniquement les données
        strictement nécessaires via son formulaire de contact. <br />
        Les données susceptibles d’être collectées sont notamment :
      </p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Statut (marque ou utilisateur particulier)</li>
        <li>Message libre permettant de décrire la demande ou le projet</li>
      </ul>
      <p>Aucune donnée bancaire n’est collectée à ce stade.</p>
    </section>

    <section>
      <h2>3. Finalités de la collecte</h2>
      <p>Les données personnelles sont collectées pour les finalités suivantes :</p>
      <ul>
        <li>Répondre aux demandes envoyées via le formulaire de contact</li>
        <li>Identifier les marques intéressées par la campagne pilote</li>
        <li>Identifier les utilisateurs souhaitant participer au service</li>
        <li>Constituer une base de contacts dans le cadre du lancement du projet</li>
        <li>Communiquer des informations relatives à l’évolution du service</li>
      </ul>
    </section>

    <section>
      <h2>4. Base légale du traitement</h2>
      <p>Les traitements de données personnelles reposent sur :</p>
      <ul>
        <li>Le consentement explicite de l’utilisateur lors de l’envoi du formulaire</li>
        <li>L’intérêt légitime de Bigaille à développer et tester son service</li>
      </ul>
    </section>

    <section>
      <h2>5. Durée de conservation des données</h2>
      <p>
        Les données personnelles sont conservées uniquement pendant la durée nécessaire
        aux finalités pour lesquelles elles ont été collectées :
      </p>
      <ul>
        <li>
          Données issues du formulaire de contact : 3 ans maximum après le dernier échange
        </li>
        <li>
          Données liées à la campagne pilote : pendant toute la durée de
          l’expérimentation, puis archivées ou supprimées
        </li>
      </ul>
    </section>

    <section>
      <h2>6. Destinataires des données</h2>
      <p>
        Les données collectées sont destinées exclusivement à Bigaille.<br />
        Elles ne sont en aucun cas vendues, louées ou cédées à des tiers.<br />
        Elles peuvent êtreaccessibles à des prestataires techniques (hébergement du site)
        uniquement sinécessaire et dans le respect du RGPD.
      </p>
    </section>

    <section>
      <h2>7. Cookies</h2>
      <p>
        Le site Bigaille n’utilise actuellement aucun cookie ni traceur à des fins de
        mesure d’audience ou de publicité.<br />Si l’utilisation de cookies devait évoluer
        à l’avenir, une information spécifique et un bandeau de consentement seraient mis
        en place.
      </p>
    </section>

    <section>
      <h2>8. Droits des utilisateurs</h2>
      <p>
        Conformément à la réglementation en vigueur, vous disposez des droits suivants :
      </p>
      <ul>
        <li>Droit d’accès à vos données personnelles</li>
        <li>Droit de rectification</li>
        <li>Droit à l’effacement</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit d’opposition</li>
      </ul>
      <p>
        Pour exercer ces droits, vous pouvez contacter :
        <a href="mailto:hello.bigaille@outlook.com">hello.bigaille@outlook.com</a><br />
        Une réponse vous sera apportée dans un délai maximal d’un mois.
      </p>
    </section>

    <section>
      <h2>9. Sécurité des données</h2>
      <p>
        Bigaille met en œuvre des mesures techniques et organisationnelles appropriées
        afin de garantir la sécurité et la confidentialité des données personnelles
        collectées.
      </p>
    </section>

    <section>
      <h2>10. Évolution du service</h2>
      <p>
        Bigaille se réserve la possibilité de faire évoluer son service, notamment en
        intégrant ultérieurement des fonctionnalités impliquant des transactions
        financières entre marques et utilisateurs. <br />Dans ce cas, la présente
        politique de confidentialité sera mise à jour afin d’informer clairement les
        utilisateurs des nouveaux traitements de données.
      </p>
    </section>

    <section>
      <h2>11. Contact</h2>
      <p>
        Pour toute question relative à cette politique de confidentialité ou au traitement
        de vos données personnelles, vous pouvez nous contacter à :
        <a href="mailto:hello.bigaille@outlook.com">hello.bigaille@outlook.com</a>
      </p>
    </section>
  </article>
</template>

<style scoped>
section > *:not(h2) {
  margin-top: 0.5rem;
}
h2 {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.33;
}
ul {
  list-style: inside;
}
a {
  text-decoration: underline;
}
</style>
