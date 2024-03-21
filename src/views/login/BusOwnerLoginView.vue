<script setup>
import Login from '../../components/Login.vue'
import NavBar from '../../components/NavBar.vue'


const bgColor = "#be65eb";
const loginFormDetails = {
    heading: "Bus Owner Login",
    input_1: "Email",
    input_2: "Password",
    backgroundColor: bgColor
}
</script>


<template>
    <main>
        <NavBar :navbarBgColor="bgColor" />
        <Login :loginFormDetails="loginFormDetails" />
    </main>
</template>