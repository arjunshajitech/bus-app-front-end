<script setup>
import { defineProps, ref } from 'vue'
const props = defineProps(['navDetails'])
const details = props.navDetails.names;
const color = props.navDetails.color;

</script>


<template>
    <div class="navs-container">
        <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
            <li v-for="detail in details" class="nav-item">
                <a class="nav-link" id="pills-home-tab" data-toggle="collapse" href="#collapseExample" role="tab"
                    aria-controls="pills-home" aria-selected="true">{{ detail }}</a>
            </li>
        </ul>
    </div>

    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</template>

<style scoped>
.navs-container {
    margin-top: 100px;
}

.nav-link {
    color: #fff;
}

.card-body {
    background-color: #111;
}
</style>