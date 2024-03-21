<script setup>
import Login from '../../components/Login.vue'
import NavBar from '../../components/NavBar.vue'


const bgColor = "#be65eb";
const role = "BUS_OWNER"
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
        <Login :loginFormDetails="loginFormDetails" :role="role"/>
    </main>
</template>