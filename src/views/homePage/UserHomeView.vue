<script setup>
import NavBar from '../../components/NavBarLatest.vue'


const bgColor = "#efb043";
const panel = "User Panel";
const role = "USER"
</script>


<template>
    <main>
        <NavBar :navbarBgColor="bgColor" :panel="panel" :role="role" />
    </main>
</template>