<script setup>
import Login from '../../components/Login.vue'
import NavBar from '../../components/NavBar.vue'


const bgColor = "#efb043";
const loginFormDetails = {
    heading: "User Login",
    input_1: "Email or Phone Nunber",
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