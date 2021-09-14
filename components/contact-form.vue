<template>
  <form
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
  </form>
</template>

<script>
export default {
  mounted() {
    this.$refs.form.addEventListener("submit", this.onSubmit);
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      try {
        await this.$axios.$post(event.target.action, {
          body: data,
          headers: {
            Accept: "application/json",
          },
        });
        this.$nuxt.$emit("form-success");
      } catch (error) {
        console.log(error);
        this.$nuxt.$emit("form-error");
      }
    },
  },
};
</script>
