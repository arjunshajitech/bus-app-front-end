<script setup>
import NavBar from '../../components/NavBarLatest.vue'
import Navs from '../../components/Navs.vue'


const bgColor = "#be65eb";
const panel = "Bus Owner Panel";
const navs =  {
    color : bgColor,
    names : [
        "Buses",
        "Routes",
        "Sub Routes"
    ]
}
</script>


<template>
    <main>
        <NavBar :navbarBgColor="bgColor" :panel="panel"/>
        <Navs :navDetails="navs"/>
    </main>
</template>