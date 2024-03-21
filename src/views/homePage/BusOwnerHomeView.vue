<script setup>
import NavBar from '../../components/NavBarLatest.vue'
import Navs from '../../components/navs/BusOwnerNav.vue'


const bgColor = "#be65eb";
const panel = "Bus Owner Panel";
const role = "BUS_OWNER"
</script>


<template>
    <main>
        <NavBar :navbarBgColor="bgColor" :panel="panel"  :role="role"/>
        <Navs/>
    </main>
</template>