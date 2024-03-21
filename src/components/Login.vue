<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps(['loginFormDetails','role']);
const LoginDetails = props.loginFormDetails;
const route = useRouter();

const login = () => {
  if (props.role == 'ADMIN') {
    route.push('/admin/home')
  } else if (props.role = 'BUS_OWNER') {
    route.push('/bus-owner/home')
  } else {
    alert(props.role)
  }
}

</script>


<template>
    <div class="login-container">
        <div class="login-header-container">
            <p class="login-header-text">{{ LoginDetails.heading }}</p>
        </div>
        <div class="login-form-container">
            <div class="login-form">
                <p class="input-text">{{ LoginDetails.input_1 }}</p>
                <input :style="{ borderColor: LoginDetails.backgroundColor }" class="login-input" type="text">
            </div>
            <div class="login-form">
                <p class="input-text">{{ LoginDetails.input_2 }}</p>
                <input :style="{ borderColor: LoginDetails.backgroundColor }" class="login-input" id="passwordField"
                    type="password">
            </div>
            <div class="login-form">
                <button @click="login()" class="login-button" :style="{ backgroundColor: LoginDetails.backgroundColor }">Login</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    font-family: "Shippori Antique", sans-serif;
    font-weight: 400;
    font-style: normal;
    padding: 0;
    margin: 0;
}

p,
div {
    margin: 0;
    padding: 0;
}

.login-header-container {
    text-align: center;
    width: 100%;
    margin-top: 180px;
}

.login-header-text {
    font-size: 30px;
}

.login-form-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 15px;
}

.login-input {
    width: 350px;
    height: 45px;
    outline: none;
    border: 2px solid;
    border-radius: 4px;
    padding-left: 20px;
    font-size: 16px;
    color: #fff;
}

.login-button {
    width: 350px;
    height: 40px;
    border: none;
    border-radius: 4px;
    font-size: 17px;
    cursor: pointer;
    outline: none;
    color: #fff;
}

.login-form {
    position: relative;
}

.input-text {
    position: absolute;
    top: -7px;
    left: 20px;
    font-size: 10px;
    padding-left: 3px;
    padding-right: 3px;
    background-color: #111;
}
</style>