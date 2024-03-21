<script setup>
import Login from '../../components/Login.vue'
import NavBar from '../../components/NavBar.vue'


const bgColor = "#43a2ef";
const role = "ADMIN"
const loginFormDetails = {
    heading: "Admin Login",
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