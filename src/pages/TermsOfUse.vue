<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
</script>

<template>
  <article class="px-8 py-12 flex flex-col gap-8">
    <div class="cgu-header">
      <h1 class="text-2xl font-bold mb-4">Conditions Générales d’Utilisation (CGU)</h1>
      <p>
        Dernière mise à jour : 24/12/2025 <br />
        Les présentes Conditions Générales d’Utilisation (dites « CGU ») ont pour objet de
        définir les modalités d’accès et d’utilisation du site internet Bigaille. <br />
        En naviguant sur le site ou en utilisant ses services, l’utilisateur reconnaît
        avoir pris connaissance des présentes CGU et les accepter sans réserve.
      </p>
    </div>

    <section>
      <h2>1. Présentation du site</h2>
      <p>
        Le site Bigaille est une plateforme en cours de lancement, actuellement en phase
        de campagne pilote. Son objectif est de mettre en relation :
      </p>
      <ul>
        <li>
          des marques souhaitant accroître leur notoriété via des supports de
          communication intégrés à des colis,
        </li>
        <li>
          des utilisateurs particuliers (revendeurs, expéditeurs de colis) souhaitant
          participer à cette diffusion et, à terme, générer un complément de revenu.
        </li>
      </ul>
      <p>
        À ce stade, le site a une vocation principalement informative et de mise en
        relation.
      </p>
    </section>

    <section>
      <h2>2. Accès au site</h2>
      <p>
        Le site est accessible gratuitement à tout utilisateur disposant d’un accès à
        internet.<br />Bigaille se réserve le droit de suspendre, limiter ou interrompre
        l’accès au site, notamment pour des opérations de maintenance ou d’évolution du
        service, sans préavis.
      </p>
    </section>

    <section>
      <h2>3. Utilisateurs du site</h2>
      <p>Le site s’adresse à deux types d’utilisateurs :</p>
      <ul>
        <li>
          Les marques : entreprises ou créateurs proposant des produits et souhaitant
          participer à la campagne pilote.
        </li>
        <li>
          Les utilisateurs particuliers : personnes physiques envoyant régulièrement des
          colis et souhaitant participer à l’expérimentation du service.
        </li>
      </ul>
      <p>
        Toute utilisation du site à des fins frauduleuses, illégales ou contraires aux
        présentes CGU est strictement interdite.
      </p>
    </section>

    <section>
      <h2>4. Fonctionnement de la campagne pilote</h2>
      <p>Dans le cadre de la campagne pilote :</p>
      <ul>
        <li>Bigaille recrute un nombre limité de marques et d’utilisateurs.</li>
        <li>Aucun paiement n’est demandé aux utilisateurs particuliers.</li>
        <li>Aucune rémunération n’est versée aux utilisateurs à ce stade.</li>
        <li>
          Les modalités économiques définitives du service seront définies ultérieurement.
        </li>
      </ul>
      <p>
        Les marques et utilisateurs participant à la phase pilote reconnaissent que le
        service est en cours de test et peut évoluer.
      </p>
    </section>

    <section>
      <h2>5. Absence de garantie de résultats</h2>
      <p>
        Bigaille s’engage à mettre en œuvre les moyens nécessaires au bon déroulement de
        la campagne pilote, mais ne garantit aucun résultat commercial, financier ou
        statistique.<br />Les données issues des scans ou interactions éventuelles sont
        fournies à titre indicatif.
      </p>
    </section>

    <section>
      <h2>6. Responsabilité</h2>
      <p>Bigaille ne saurait être tenue responsable :</p>
      <ul>
        <li>des interruptions temporaires du site,</li>
        <li>des erreurs ou omissions dans les contenus,</li>
        <li>
          de l’utilisation faite par les utilisateurs des informations disponibles sur le
          site,
        </li>
        <li>des éventuels dommages indirects résultant de l’utilisation du site.</li>
      </ul>
      <p>
        L’utilisateur est seul responsable de l’utilisation qu’il fait du site et des
        informations qu’il transmet.
      </p>
    </section>

    <section>
      <h2>7. Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus présents sur le site Bigaille (textes, visuels, logo,
        concept, structure) est protégé par le droit de la propriété intellectuelle.<br />Toute
        reproduction, représentation ou exploitation, totale ou partielle, sans
        autorisation préalable est interdite.
      </p>
    </section>

    <section>
      <h2>8. Données personnelles</h2>
      <p>
        La collecte et le traitement des données personnelles sont détaillés dans la
        Politique de confidentialité du site.<br />L’utilisateur est invité à la consulter
        pour connaître les modalités de traitement de ses données.
      </p>
    </section>

    <section>
      <h2>9. Évolution du service et des CGU</h2>
      <p>
        Bigaille se réserve le droit de modifier à tout moment les présentes CGU afin de
        les adapter aux évolutions du site et du service.<br />Les utilisateurs sont
        invités à consulter régulièrement cette page.
      </p>
    </section>

    <section>
      <h2>10. Droit applicable</h2>
      <p>
        Les présentes CGU sont soumises au droit français.<br />En cas de litige, et à
        défaut de résolution amiable, les tribunaux français seront seuls compétents.
      </p>
    </section>

    <section>
      <h2>11. Contact</h2>
      <p>
        Pour toute question relative aux présentes Conditions Générales d’Utilisation,
        vous pouvez contacter Bigaille à l’adresse suivante :
        <a href="mailto:hello.bigaille@outlook.com" class="underline">
          hello.bigaille@outlook.com
        </a>
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
</style>
