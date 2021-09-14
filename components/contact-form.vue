<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="fullName"
            :label="$t('form__full_name')"
            :rules="[rules.required]"
            filled
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="email"
            :label="$t('form__email_address')"
            :rules="[rules.required, rules.email]"
            filled
          />
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            rows="3"
            :label="$t('form__message')"
            :rules="[rules.required]"
            filled
          />
        </v-col>
        <v-col cols="12">
          <v-btn
            class="float-right"
            large
            :disabled="!valid"
            @click="onSubmit()"
          >
            {{ $t("form__submit") }}
            <v-icon right>
              {{ mdiSend }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <!-- <form
    id="form"
    ref="form"
    name="contact-form"
    accept-charset="utf-8"
    action="https://formspree.io/f/mzbyodbp"
    method="post"
  >
    <fieldset>
      <label for="full-name">{{ $t("form__full_name") }}</label>
      <input
        id="full-name"
        type="text"
        name="name"
        placeholder="First and Last"
        required=""
      />
      <label for="email-address">{{ $t("form__email_address") }}</label>
      <input
        id="email-address"
        type="email"
        name="_replyto"
        placeholder="email@domain.tld"
        required=""
      />
      <label for="message">{{ $t("form__message") }}</label>
      <textarea
        id="message"
        rows="5"
        name="message"
        placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
        required=""
      ></textarea>
      <input id="email-subject" type="hidden" name="_next" value="#" />
    </fieldset>
    <input type="submit" :value="$t('form__submit')" />
  </form> -->
</template>

<script>
import { mdiSend } from "@mdi/js";

export default {
  data() {
    return {
      mdiSend,
      valid: false,
      fullName: "",
      email: "",
      message: "",
      rules: {
        required: (v) => !!v || this.$t("form__required_field"),
        email: (v) => /\S+@\S+\.\S+/.test(v) || this.$t("form__invalid_email"),
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await this.$axios.$post(
          "https://formspree.io/f/mzbyodbp",
          {
            fullName: this.fullName,
            email: this.email,
            message: this.message,
          }
        );

        if (response.ok === true) {
          this.$nuxt.$emit("form-success");
        } else {
          throw new Error();
        }
      } catch (error) {
        this.$nuxt.$emit("form-error");
      }
    },
  },
};
</script>
