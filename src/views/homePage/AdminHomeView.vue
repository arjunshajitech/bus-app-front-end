<script setup>
import NavBar from '../../components/NavBarLatest.vue'
import Navs from '../../components/navs/AdminNav.vue'


const bgColor = "#43a2ef";
const panel = "Admin Panel";
const role = "ADMIN"
</script>


<template>
    <main>
        <NavBar :navbarBgColor="bgColor" :panel="panel" :role="role" />
        <Navs />
    </main>
</template>