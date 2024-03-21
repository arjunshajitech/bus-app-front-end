<script setup>
import NavBar from '../../components/NavBarLatest.vue'
import Navs from '../../components/navs/AdminNav.vue'


const bgColor = "#43a2ef";
const panel = "Admin Panel";
</script>


<template>
    <main>
        <NavBar :navbarBgColor="bgColor" :panel="panel"/>
        <Navs/>
    </main>
</template>