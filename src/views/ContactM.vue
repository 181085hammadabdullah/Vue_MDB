<template>
  <div>
    <h1>Contact Form With Validations</h1>

    <br />
    <br />
    <div class="container" style="text-align:center">
      <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3" style="text-align:center">
        <form @submit.prevent="validateForm" novalidate autocomplete="nope">
          <md-field>
            <label>No error</label>
            <md-input v-model="noError"></md-input>
          </md-field>

          <md-field :class="{'md-invalid':isInvalid}">
            <label>Name</label>
            <md-input v-model="required" required @change="check" @click="check"></md-input>
            <span class="md-error" v-html="Error">{{ Error }}</span>
          </md-field>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactM",
  data: () => ({
    noError: null,
    required: "",
    isInvalid: false,
    Error: ""
  }),
  methods: {
    check() {
      if (this.required == "") {
        (this.isInvalid = true), (this.Error = "* Name Required");
      }
      else if (this.required.length <3) {
        (this.isInvalid = true), (this.Error = "* Min 3 Characters");
      }
      else{
         (this.isInvalid = false), (this.Error = "");
      }
    }
  }
};
</script>