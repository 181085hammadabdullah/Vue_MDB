<template>
  <div class="container" style="text-align:center">
    <h1>Contact Form With Validations</h1>

    <br />
    <br />
    <div class="col-lg-11 offset-lg-3" style="text-align:center">
      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Users</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('firstName')">
                  <label for="first-name">First Name</label>
                  <md-input
                    name="first-name"
                    id="first-name"
                    autocomplete="nope"
                    v-model="form.firstName"
                    :disabled="sending"
                  />
                  <span
                    class="md-error"
                    v-if="!$v.form.firstName.required"
                  >The first name is required</span>
                  <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('lastName')">
                  <label for="last-name">Last Name</label>
                  <md-input
                    name="last-name"
                    id="last-name"
                    autocomplete="nope"
                    v-model="form.lastName"
                    :disabled="sending"
                  />
                  <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                  <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                </md-field>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('gender')">
                  <label for="gender">Gender</label>
                  <md-select
                    name="gender"
                    id="gender"
                    v-model="form.gender"
                    md-dense
                    :disabled="sending"
                  >
                    <md-option value="A">A</md-option>
                    <md-option value="B">B</md-option>
                    <md-option value="C">C</md-option>
                  </md-select>
                  <span class="md-error">The Option is required</span>
                </md-field>
              </div>

              <!--Gender Special-->

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('city')">
                  <label for="city">City</label>
                  <md-select
                    name="city"
                    id="city"
                    v-model="form.city"
                    :disabled="sending"
                    ref="select"
                  >
                    <md-option
                      v-bind:key="baby.id"
                      v-for="baby in city"
                      v-model="baby.value"
                      value="baby.value"
                    >{{baby.text}}</md-option>
                  </md-select>
                  <span class="md-error">The City is required</span>
                </md-field>
              </div>
            </div>
            <!--Age Sysytem-->
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('age')">
                <label for="age">Age</label>
                <md-input
                  type="number"
                  id="age"
                  name="age"
                  autocomplete="age"
                  v-model="form.age"
                  :disabled="sending"
                  min:0
                />
                <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
              </md-field>
            </div>

            <md-field :class="getValidationClass('email')">
              <label for="email">Email</label>
              <md-input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                v-model="form.email"
                :disabled="sending"
              />
              <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
              <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      </form>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";

export default {
  name: "ContactU",
  mixins: [validationMixin],
  data: () => ({
    form: {
      firstName: null,
      lastName: null,
      gender: null,
      age: null,
      email: null,
      city: ""
    },

    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      gender: {
        required
      },
      city: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  computed: {
    city() {
      if (this.form.gender == "A") {
        return [
          { text: "Boston", value: "boston" },
          { text: "Chicago", value: "chicago" },
          { text: "New York", value: "newYork" }
        ];
      } else if (this.form.gender == "B") {
        return [
          { text: "Paris", value: "paris" },
          { text: "Nantes", value: "nantes" },
          { text: "Lyon", value: "lyon" }
        ];
      } else if (this.form.gender === "C") {
        return [
          { text: "Warszawa", value: "warszawa" },
          { text: "Kraków", value: "krakow" },
          { text: "Gdańsk", value: "gdansk" }
        ];
      } else {
        return [];
      }
    }
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      this.form.lastName = null;
      this.form.age = null;
      this.form.gender = null;
      this.form.email = null;
      this.form.city = null;
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();
      console.log(this.form.city);
      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>