<template>
  <div>
    <h1>Contact</h1>
    <br />
    <br />
    <div class="container" style="text-align:center">
      <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3" style="text-align:center">
        <mdb-card>
          <mdb-card-body>
            <form @submit="checkvalidtions" autocomplete="nope">
              <p class="h4 text-center py-4">Sign up</p>
              <div class="grey-text text-left md-form">
                <mdb-input
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  id="name"
                  v-model="name"
                  @change="namechange"
                  v-on:click="nameclick"
                  autocomplete="nope"
                />
                <p id="p1" style="color:red" v-html="error1">
                  <small>{{ error1 }}</small>
                </p>
                <p id="p2" style="color:green" v-html="valid1">
                  <small>{{ valid1 }}</small>
                </p>
                <mdb-input
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  v-model="email"
                  @change="emailchange"
                  v-on:click="emailclick"
                  id="email"
                />
                <p id="p1" style="color:red" v-html="error2">
                  <small>{{ error2 }}</small>
                </p>
                <p id="p2" style="color:green" v-html="valid2">
                  <small>{{ valid2 }}</small>
                </p>
                <mdb-input
                  label="Confirm your email"
                  icon="exclamation-triangle"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  v-model="cemail"
                  @change="cemailchange"
                  v-on:click="cemailclick"
                  id="cemail"
                />
                <p id="p1" style="color:red" v-html="error3">
                  <small>{{ error3 }}</small>
                </p>
                <p id="p2" style="color:green" v-html="valid3">
                  <small>{{ valid3 }}</small>
                </p>
                <mdb-input
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  v-model="password"
                  @change="passwordchange"
                  v-on:click="passwordclick"
                  id="password"
                />
                <p id="p1" style="color:red" v-html="error4">
                  <small>{{ error4 }}</small>
                </p>
                <p id="p2" style="color:green" v-html="valid4">
                  <small>{{ valid4 }}</small>
                </p>
              </div>
              <div class="text-center py-4 mt-3">
                <mdb-btn color="cyan" type="submit">Register</mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from "mdbvue";
export default {
  name: "contact",
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
      name: "",
      email: "",
      cemail: "",
      password: "",
      error1: "",
      valid1: "",
      error2: "",
      valid2: "",
      error3: "",
      valid3: "",
      error4: "",
      valid4: ""
    };
  },
  methods: {
    checkvalidtions() {
      this.namechange();
      this.nameclick();
      this.emailchange();
      this.emailclick();
      this.cemailchange();
      this.cemailclick();
      this.passwordchange();
      this.passwordclick();
    },
    //Name Validations Checker
    namechange() {
      if (this.name == "") {
        document.getElementById("name").style.borderColor = "red";
        this.error1 = "* Name Required";
        this.valid1 = "";
      } else if (this.name.length < 3) {
        document.getElementById("name").style.borderColor = "red";
        this.error1 = "* Name Must be Min 3 Characters";
        this.valid1 = "";
      } else {
        document.getElementById("name").style.borderColor = "green";
        this.error1 = "";
        this.valid1 = "valid";
      }
    },
    nameclick() {
      if (this.name == "") {
        document.getElementById("name").style.borderColor = "red";
        this.error1 = "* Name Required";
        this.valid1 = "";
      } else if (this.name.length < 3) {
        document.getElementById("name").style.borderColor = "red";
        this.error1 = "* Name Must be Min 3 Characters";
        this.valid1 = "";
      } else {
        document.getElementById("name").style.borderColor = "green";
        this.valid1 = "valid";
      }
    },
    //Email Validtions Checker
    validEmail: function(email) {
      var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    emailchange() {
      if (this.email == "") {
        document.getElementById("email").style.borderColor = "red";
        this.error2 = "* Email Required";
        this.valid2 = "";
      } else if (!this.validEmail(this.email)) {
        document.getElementById("email").style.borderColor = "red";
        this.error2 = "* Invalid Email";
        this.valid2 = "";
      } else {
        document.getElementById("email").style.borderColor = "green";
        this.error2 = "";
        this.valid2 = "valid";
      }
    },
    emailclick() {
      if (this.name == "") {
        document.getElementById("email").style.borderColor = "red";
        this.error2 = "* Email Required";
        this.valid2 = "";
      } else if (!this.validEmail(this.email)) {
        document.getElementById("email").style.borderColor = "red";
        this.error2 = "* Invalid Email";
        this.valid2 = "";
      } else {
        document.getElementById("email").style.borderColor = "green";
        this.valid2 = "valid";
      }
    },
    //Cemail Validations
    cemailchange() {
      if (this.cemail == "") {
        document.getElementById("cemail").style.borderColor = "red";
        this.error3 = "* Confrim Email Required";
        this.valid3 = "";
      } else if (!this.validEmail(this.cemail)) {
        document.getElementById("cemail").style.borderColor = "red";
        this.error3 = "* Invalid Confrim Email";
        this.valid3 = "";
      } else if (this.cemail != this.email) {
        document.getElementById("cemail").style.borderColor = "red";
        this.error3 = "* Email and and Confrim Email Not Match";
        this.valid3 = "";
      } else {
        document.getElementById("cemail").style.borderColor = "green";
        this.error3 = "";
        this.valid3 = "valid";
      }
    },
    cemailclick() {
      if (this.cemail == "") {
        document.getElementById("cemail").style.borderColor = "red";
        this.error3 = "* Confrim Email Required";
        this.valid3 = "";
      } else if (!this.validEmail(this.cemail)) {
        document.getElementById("cemail").style.borderColor = "red";
        this.error3 = "* Invalid Confrim Email";
        this.valid3 = "";
      } else if (this.cemail != this.email) {
        document.getElementById("cemail").style.borderColor = "red";
        this.error3 = "* Email and and Confrim Email Not Match";
        this.valid3 = "";
      } else {
        document.getElementById("cemail").style.borderColor = "green";
        this.error3 = "";
        this.valid3 = "valid";
      }
    },
    //Password Validations
    passwordchange() {
      if (this.password == "") {
        document.getElementById("password").style.borderColor = "red";
        this.error4 = "* Password Required";
        this.valid4 = "";
      } else if (this.password.length < 6) {
        document.getElementById("password").style.borderColor = "red";
        this.error4 = "* Password Must have min 6 Charaters";
        this.valid4 = "";
      } else {
        document.getElementById("password").style.borderColor = "green";
        this.error4 = "";
        this.valid4 = "valid";
      }
    },
    passwordclick() {
      if (this.password == "") {
        document.getElementById("password").style.borderColor = "red";
        this.error4 = "* Password Required";
        this.valid4 = "";
      } else if (this.password.length < 6) {
        document.getElementById("password").style.borderColor = "red";
        this.error4 = "* Password Must have min 6 Charaters";
        this.valid4 = "";
      } else {
        document.getElementById("password").style.borderColor = "green";
        this.error4 = "";
        this.valid4 = "valid";
      }
    }
  }
};
</script>

<style scoped>
#p1 {
  text-align: center;
  font-size: 13px;
}
#p2 {
  text-align: center;
  font-size: 14px;
}
label.active {
  color: red !important;
}
</style>