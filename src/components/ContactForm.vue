<script setup lang="ts">
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldError,
} from "@/components/ui/field";
import Textarea from "./ui/textarea/Textarea.vue";
import Checkbox from "./ui/checkbox/Checkbox.vue";
import Button from "./ui/button/Button.vue";
import Input from "./ui/input/Input.vue";
import { useForm } from "@tanstack/vue-form";
import { RouterLink } from "vue-router";
import z from "zod";
import { toast } from "vue-sonner";
import { ref } from "vue";

const { headerLegend, headerDesc, darkTheme } = defineProps<{
  headerLegend?: string;
  headerDesc?: string;
  darkTheme?: boolean;
}>();

const messageDefault = "Je veux participer !";
const messageMax = 300;
const messageLength = ref<number>(messageDefault.length);

function showSuccessToast() {
  toast.success("Merci pour votre message !", {
    description: "Nous allons bientôt vous recontacter",
    duration: 6000,
    action: {
      label: "J'ai hâte !",
    },
  });
}

function showErrorToast() {
  toast.error("Il semble y avoir un problème", {
    description: "Veuillez réessayer ultérieurement",
    duration: 6000,
    action: {
      label: "Mince...",
    },
  });
}

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(5, { message: "Le nom est trop court" })
    .max(50, { message: "Le nom est trop long" }),
  email: z
    .email({ message: "L'adresse mail n'est pas conforme" })
    .trim()
    .max(50, { message: "L'adresse mail est trop longue" }),
  business: z.string().trim().max(50, { message: "Le nom est trop long" }),
  message: z.string().trim().max(messageMax, { message: "Le message est trop long" }),
  news: z.boolean(),
});

const form = useForm({
  defaultValues: {
    fullName: "",
    email: "",
    business: "",
    message: messageDefault,
    news: false,
  },
  validators: {
    onChange: formSchema,
  },
  onSubmit: async ({ value }) => {
    try {
      value.fullName = value.fullName
        .split(" ")
        .map((s) => s[0]?.toUpperCase() + s.slice(1).toLowerCase())
        .join(" ");

      const formData = new FormData();
      formData.append("form-name", "contact");
      for (const [key, data] of Object.entries(value)) {
        formData.append(key, data.toString());
      }

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        showSuccessToast();
        form.reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error(error);
      showErrorToast();
    }
  },
});

function isInvalid(field: any) {
  return !field.state.meta.isValid && field.state.meta.isTouched;
}
</script>

<template>
  <div class="form-container max-w-2xl m-auto">
    <!-- Formulaire caché pour la détection par Netlify -->
    <form name="contact" netlify hidden>
      <input type="text" name="fullName" />
      <input type="email" name="email" />
      <input type="text" name="business" />
      <textarea name="message"></textarea>
      <input type="checkbox" name="news" />
    </form>
    <!-- _______________________________________________ -->

    <form
      @submit.prevent.stop="form.handleSubmit"
      name="contact"
      method="POST"
      netlify-honeypot="botField"
    >
      <FieldSet>
        <FieldLegend>
          {{ headerLegend }}
        </FieldLegend>
        <FieldDescription>{{ headerDesc }}</FieldDescription>
        <FieldGroup>
          <input type="hidden" name="form-name" value="contact" />

          <form.Field name="fullName">
            <template v-slot="{ field }">
              <Field>
                <FieldLabel :for="field.name">Nom *</FieldLabel>
                <Input
                  :id="field.name"
                  :name="field.name"
                  :model-value="field.state.value"
                  :aria-invalid="isInvalid(field)"
                  type="text"
                  placeholder="Jehtro Doseylle"
                  @blur="field.handleBlur"
                  @input="field.handleChange($event.target.value)"
                  class="capitalize text-foreground"
                />
                <FieldError v-if="isInvalid(field)" :errors="field.state.meta.errors" />
              </Field>
            </template>
          </form.Field>

          <form.Field name="email">
            <template v-slot="{ field }">
              <Field>
                <FieldLabel :for="field.name">Email *</FieldLabel>
                <Input
                  :id="field.name"
                  :name="field.name"
                  :model-value="field.state.value"
                  :aria-invalid="isInvalid(field)"
                  type="email"
                  placeholder="hello@bigaille.bzh"
                  @blur="field.handleBlur"
                  @input="field.handleChange($event.target.value)"
                  class="text-foreground"
                />
                <FieldError v-if="isInvalid(field)" :errors="field.state.meta.errors" />
              </Field>
            </template>
          </form.Field>

          <form.Field name="business">
            <template v-slot="{ field }">
              <Field>
                <FieldLabel :for="field.name">Entreprise</FieldLabel>
                <Input
                  :id="field.name"
                  :name="field.name"
                  :model-value="field.state.value"
                  :aria-invalid="isInvalid(field)"
                  type="text"
                  placeholder="Bigaille"
                  @blur="field.handleBlur"
                  @input="field.handleChange($event.target.value)"
                  class="capitalize text-foreground"
                />
                <FieldError v-if="isInvalid(field)" :errors="field.state.meta.errors" />
              </Field>
            </template>
          </form.Field>

          <form.Field name="message">
            <template v-slot="{ field }">
              <Field>
                <FieldLabel :for="field.name">Message</FieldLabel>
                <Textarea
                  :id="field.name"
                  :name="field.name"
                  :model-value="field.state.value"
                  :aria-invalid="isInvalid(field)"
                  type="text"
                  placeholder="Je veux participer !"
                  @blur="field.handleBlur"
                  @input="
                    field.handleChange($event.target.value);
                    messageLength = $event.target.value.trim().length;
                  "
                  class="min-h-32 text-foreground"
                />
                <FieldDescription :class="{ 'text-slate-400': darkTheme }">
                  {{ messageLength }} / {{ messageMax }} caractères
                </FieldDescription>
                <FieldError v-if="isInvalid(field)" :errors="field.state.meta.errors" />
              </Field>
            </template>
          </form.Field>

          <form.Field name="news" class="flex flex-row">
            <template v-slot="{ field }">
              <Field orientation="horizontal">
                <Checkbox
                  :id="field.name"
                  :name="field.name"
                  :model-value="field.state.value"
                  @update:model-value="(checked) => field.handleChange(checked === true)"
                  class="bg-background"
                />
                <FieldLabel :for="field.name">
                  J'accepte de recevoir les informations personnalisées de Bigaille.
                </FieldLabel>
              </Field>
            </template>
          </form.Field>

          <form.Subscribe>
            <template v-slot="{ canSubmit, isPristine }">
              <Field>
                <Button
                  type="submit"
                  variant="secondary"
                  :disabled="!canSubmit || isPristine"
                >
                  Envoyer
                </Button>
              </Field>
            </template>
          </form.Subscribe>

          <FieldDescription :class="{ 'text-slate-400': darkTheme }">
            Cette adresse mail sera uniquement utilisée pour recevoir notre newsletter.
            Elle ne sera jamais communiquée à qui que ce soit. Pour en savoir plus sur la
            gestion des données, clique
            <RouterLink to="/confidentialite">ici</RouterLink>.
          </FieldDescription>
        </FieldGroup>
      </FieldSet>
    </form>
  </div>
</template>
