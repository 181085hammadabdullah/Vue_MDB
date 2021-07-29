<template>
  <mdb-navbar color="indigo" dark class="sticky-top">
    <mdb-navbar-brand href="https://mdbootstrap.com/">Navbar</mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="#" active>
          <Router-link to="home" id="link">Home</Router-link>
        </mdb-nav-item>
        <mdb-nav-item href="#">
          <Router-link to="about" id="link">About</Router-link>
        </mdb-nav-item>
        <mdb-nav-item href="#">
          <Router-link to="contact" id="link">Contact</Router-link>
        </mdb-nav-item>
        <mdb-nav-item href="#">
          <Router-link to="contactV" id="link">Contact V</Router-link>
        </mdb-nav-item>
        <mdb-nav-item href="#">
          <Router-link to="contactM" id="link">Contact M</Router-link>
        </mdb-nav-item>
        <mdb-nav-item href="#">
          <Router-link to="contactU" id="link">Contact U</Router-link>
        </mdb-nav-item>
      </mdb-navbar-nav>
      <form>
        <mdb-input
          type="text"
          class="text-white"
          placeholder="Search"
          aria-label="Search"
          label
          navInput
          waves
          waves-fixed
        />
      </form>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>
<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbInput
} from "mdbvue";
export default {
  name: "Header",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbInput
  }
};
</script>
<style scoped>
#link {
  color: white;
  text-decoration: none;
}

Router-link:hover {
  color: #00a0c6;
  text-decoration: none;
  cursor: pointer;
}
</style>