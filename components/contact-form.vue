<template>
  <v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-title>
        <h2>
          {{ $t("home__contact") }}
        </h2>
        <v-spacer />
        <v-btn
          v-if="$vuetify.breakpoint.mobile"
          icon
          large
          @click="closeSelf()"
        >
          <v-icon large>{{ mdiClose }} </v-icon>
        </v-btn>
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
              rows="6"
              :counter="messageMaxSize"
              :label="$t('form__message')"
              :rules="[rules.required, rules.max]"
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
            <p>
              Envoyez-moi un mail à
              <a href="mailto:louis.bailly.pro@gmail.com"
                >louis.bailly.pro@gmail.com</a
              >
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script>
import { mdiSend, mdiClose } from "@mdi/js";

export default {
  data() {
    return {
      mdiSend,
      mdiClose,
      valid: true,
      fullName: "",
      fullNameMaxSize: 100,
      email: "",
      emailMaxSize: 254,
      message: "",
      messageMaxSize: 1000,
      rules: {
        required: (v) => !!v || this.$t("form__required_field"),
        email: (v) => /\S+@\S+\.\S+/.test(v) || this.$t("form__invalid_email"),
        max: (v) =>
          v.length <= this.messageMaxSize || this.$t("form__too_long"),
      },
    };
  },
  watch: {
    fullName(val) {
      console.log("fullname");
      console.log(val.substring(0, 100));
    },
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
            fullName: this.fullName.substring(0, this.fullNameMaxSize),
            email: this.email.substring(0, this.emailMaxSize),
            message: this.message.substring(0, this.messageMaxSize),
          }
        );

        if (response.ok === true) {
          this.$nuxt.$emit("form-success");
          this.$refs.form.reset();
          this.closeSelf();
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
