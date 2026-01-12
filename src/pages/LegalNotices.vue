<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
</script>

<template>
  <article class="px-8 py-12 flex flex-col gap-8">
    <h1 class="text-2xl font-bold">Mentions légales</h1>

    <section>
      <h2>Éditeur</h2>
      <p>
        L’édition et la direction de la publication du Site sont assurées par OM,
        domiciliée à Lorient (56), et dont l'adresse e-mail est :
        <a href="mailto:hello.bigaille@outlook.com" class="underline">
          hello.bigaille@outlook.com
        </a>
      </p>
    </section>

    <section>
      <h2>Directeur de la publication</h2>
      <p>
        Bigaille s'inscrit dans une démarche gagnant-gagnant. Nous souhaitons profiter de
        l'achat des réseaux des revendeurs qui utilisent les plateformes de revente en
        ligne pour communiquer auprès du grand public. Nous pouvons identifier la cible,
        l'acheteur est dans un état de plaisir quand il va recevoir le colis, nous faisons
        entrer la communication directement dans le foyer, l'attention de l'acheteur est
        dédiée à 100% à son ouverture de colis. Cela évite aux marques de dépenser des
        sommes astronomiques dans des supports de communication, des newsletters, de faire
        appel à une autre entreprise et faire profiter aux revendeurs de cashback en
        fonction de l'action de son acheteur.
      </p>
    </section>

    <section>
      <h2>Hébergement</h2>
      <p>
        Le Site est hébergé par Netlify, Inc., 44 Montgomery Street, Suite 300, San
        Francisco, CA 94104, États-Unis. <br />
        Site web :
        <a href="https://www.netlify.com" class="underline"> https://www.netlify.com </a>
      </p>
    </section>

    <section>
      <h2>Accès au site</h2>
      <p>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure,
        interruption programmée ou non et pouvant découlant d’une nécessité de
        maintenance.<br />
        En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait
        être tenu responsable.
      </p>
    </section>

    <section>
      <h2>Collecte des données</h2>
      <p>
        Le Site assure à l'Utilisateur une collecte et un traitement d'informations
        personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6
        janvier 1978 relative à l'informatique, aux fichiers et aux libertés. <br />
        En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978,
        l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et
        d'opposition de ses données personnelles.<br />
        L'Utilisateur exerce ce droit par email à l'adresse suivante :
        <a href="mailto:hello.bigaille@outlook.com" class="underline">
          hello.bigaille@outlook.com
        </a>
        <br />
        Toute utilisation, reproduction, diffusion, commercialisation, modification de
        toute ou partie du Site, sans autorisation de l’Éditeur est prohibée et pourra
        entraîner des actions et poursuites judiciaires telles que notamment prévues par
        le Code de la propriété intellectuelle et le Code civil.
      </p>
    </section>
  </article>
</template>

<style scoped>
h2 {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.33;
  margin-bottom: 0.5rem;
}
</style>
