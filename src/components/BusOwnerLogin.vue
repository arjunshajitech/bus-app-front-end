<script setup>


</script>


<template>
    <div class="login-container">
        <div class="login-header-container">
            <p class="login-header-text">Bus Owner Login</p>
        </div>
        <div class="login-form-container">
            <div class="login-form">
                <p class="input-text">Email</p>
                <input class="login-input" type="text">
            </div>
            <div class="login-form">
                <p class="input-text">Password</p>
                <input class="login-input" id="passwordField" type="password">
            </div>
            <div class="login-form">
                <button class="login-button">Login</button>
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
    margin-top: 150px;
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
    height: 40px;
    outline: none;
    border: 2px solid#c984eb;
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
    background-color: #be65eb;
    font-size: 17px;
    cursor: pointer;
    outline: none;
    color: #fff;
}

.login-button:hover {
    background-color: #c984eb;
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