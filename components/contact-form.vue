<template>
  <v-card>
    <v-form ref="form" v-model="valid">
      <v-card-title>
        <h2 class="d-block text-truncate">
          {{ $t("home__contact") }}
        </h2>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="fullName"
              :label="$t('form__full_name')"
              :rules="[rules.required]"
              hide-details="auto"
              filled
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :label="$t('form__email_address')"
              :rules="[rules.required, rules.email]"
              type="email"
              name="email"
              hide-details="auto"
              filled
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="message"
              rows="3"
              :label="$t('form__message')"
              :rules="[rules.required]"
              hide-details="auto"
              filled
            />
          </v-col>
          <v-col cols="12">
            <v-btn
              class="float-right"
              outlined
              large
              :disabled="!valid"
              @click="onSubmit()"
            >
              {{ $t("form__submit") }}
              <v-icon right>
                {{ mdiSend }}
              </v-icon>
            </v-btn>
            <v-btn class="float-right mr-4" large text @click="closeSelf()">
              {{ $t("close") }}
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-8">
          <v-col cols="4" sm="5">
            <v-divider />
          </v-col>
          <v-col cols="4" sm="2" class="text-center"><h2>OU</h2></v-col>
          <v-col cols="4" sm="5">
            <v-divider />
          </v-col>
          <v-col>
            <p>Envoyez-moi un mail à louis.bailly.pro@gmail.com</p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-card>
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
    closeSelf() {
      this.$emit("close");
      this.$refs.form.resetValidation();
    },
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
