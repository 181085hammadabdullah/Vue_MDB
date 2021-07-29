<template>
  <div>
    <h1>Contact Form With Validations</h1>

    <br />
    <br />
    <div class="container" style="text-align:center">
      <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3" style="text-align:center">
        <form @submit.prevent="validateForm" novalidate autocomplete="nope">
          <mdb-input
            type="text"
            id="customInput1"
            label="First name"
            v-model="customValues.name"
            :customValidation="validation.name.validated"
            :isValid="validation.name.valid"
            @change="validate('name')"
            required
            validFeedback="Look's good."
            :invalidFeedback="validation.name.invalidFeedback"
            autocomplete="nope"
          />
          <mdb-input
            type="text"
            id="customInput2"
            label="Last name"
            v-model="customValues.lastname"
            :customValidation="validation.lastname.validated"
            :isValid="validation.lastname.valid"
            @change="validate('lastname')"
            required
            validFeedback="Look's good."
            invalidFeedback="Please correct."
          />
          <mdb-input
            type="text"
            id="customInput3"
            label="Country"
            v-model="customValues.country"
            :customValidation="validation.country.validated"
            :isValid="validation.country.valid"
            @change="validate('country')"
            required
            validFeedback="Look's good."
            invalidFeedback="Country should be one of those: USA, France, Poland"
          />

          <mdb-input
            type="password"
            id="customInput4"
            label="Password"
            v-model="customValues.password"
            :customValidation="validation.password.validated"
            :isValid="validation.password.valid"
            @change="validate('password')"
            required
            validFeedback="Look's good."
            :invalidFeedback="validation.password.invalidFeedback"
          />

          <mdb-btn type="Submit" size="sm" color="danger">Submit</mdb-btn>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { mdbBtn, mdbInput } from "mdbvue";

export default {
  name: "ContactV",
  components: {
    mdbBtn,

    mdbInput
  },
  data() {
    return {
      customValues: {
        name: "",
        lastname: "",
        country: "",
        city: "",
        password: "",
        checkbox: false,
        datepicker: ""
      },

      validation: {
        name: {
          valid: false,
          validated: false,
          invalidFeedback: ""
        },
        lastname: {
          valid: false,
          validated: false
        },
        country: {
          valid: false,
          validated: false
        },
        password: {
          valid: false,
          validated: false,
          invalidFeedback: ""
        },
        checkbox: {
          valid: false,
          validated: false
        }
      }
    };
  },

  methods: {
    validateForm() {
      Object.keys(this.customValues).forEach(key => {
        this.validate(key);
      });
    },
    validate(key, value) {
      if (key === "name") {
        if (this.customValues[key] == "") {
          this.validation[key].valid = false;
          this.validation[key].invalidFeedback = "* Name Required";
        } else if (this.customValues[key].length < 3) {
          this.validation[key].valid = false;
          this.validation[key].invalidFeedback =
            "* Name Must be Min 3 characters";
        } else {
          this.validation[key].valid = true;
          this.validation[key].invalidFeedback = "";
        }
        this.validation[key].validated = true;
      }
      if (key === "lastname" || key === "checkbox") {
        if (this.customValues[key].length > 3) {
          this.validation[key].valid = true;
        } else {
          this.validation[key].valid = false;
        }
        this.validation[key].validated = true;
      }
      if (key === "country") {
        if (["USA", "France", "Poland"].includes(this.customValues[key])) {
          this.validation[key].valid = true;
        } else {
          this.validation[key].valid = false;
        }
        this.validation[key].validated = true;
      }
      if (key === "password") {
        // check length
        if (this.customValues[key].length > 5) {
          // check uppercase
          for (let character of this.customValues[key].split("")) {
            if (character === character.toUpperCase()) {
              this.validation[key].valid = true;
              break;
            }
            this.validation[key].valid = false;
            this.validation[key].invalidFeedback =
              "Password should contain at least one uppercase character.";
          }
        } else {
          this.validation[key].valid = false;
          this.validation[key].invalidFeedback =
            "Password too short. Type at least 6 letters.";
        }
        this.validation[key].validated = true;
      }

      if (key === "arrival") {
        if (value) {
          this.validation[key].valid = true;
        } else {
          this.validation[key].valid = false;
        }
        this.validation[key].validated = true;
      }
    }
  }
};
</script>

<style scoped>
</style>