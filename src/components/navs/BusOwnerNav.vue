<script setup>
import { ref } from 'vue'
const backgroundColor_1 = ref('#be65eb');
const backgroundColor_2 = ref('');
const backgroundColor_3 = ref('');
const showTable = ref('BUSES');

const buttonOnClick = (val) => {
  if (val === 'bus') {
    backgroundColor_1.value = '#be65eb'
    backgroundColor_2.value = ''
    backgroundColor_3.value = ''
    showTable.value = 'BUSES';
  } else if (val === 'route') {
    backgroundColor_1.value = ''
    backgroundColor_2.value = '#be65eb'
    backgroundColor_3.value = ''
    showTable.value = 'ROUTES';
  } else {
    backgroundColor_1.value = ''
    backgroundColor_2.value = ''
    backgroundColor_3.value = '#be65eb'
    showTable.value = 'SSS';
  }
}

</script>


<template>
  <div class="admin-nav-container">
    <div class="admin-nav">
      <button @click="buttonOnClick('bus')" :style="{ backgroundColor: backgroundColor_1 }"
        class="admin-nav-btn">Buses</button>
      <button @click="buttonOnClick('route')" :style="{ backgroundColor: backgroundColor_2 }"
        class="admin-nav-btn">Routes</button>
      <button @click="buttonOnClick('sub')" :style="{ backgroundColor: backgroundColor_3 }" class="admin-nav-btn">Sub
        Routes</button>
    </div>
  </div>


  <div v-if="showTable === 'BUSES'" class="bus-owner">
    <div class="create-button">
      <button class="create-btn" data-toggle="modal" data-target="#create-bus">+</button>
    </div>
    <div class="admin-tabel">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Bus Name</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td><button class="edit-btn" data-toggle="modal" data-target="#edit-bus">Edit</button></td>
            <td><button class="delete-btn" data-toggle="modal" data-target="#exampleModalCenter">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div v-else-if="showTable === 'ROUTES' " class="bus-owner">
    <div class="create-button">
      <button class="create-btn" data-toggle="modal" data-target="#create-routes">+</button>
    </div>

    <div class="admin-tabel">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Bus Name</th>
            <th scope="col">Start Location</th>
            <th scope="col">End Location</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mark</td>
            <td><button class="delete-btn" data-toggle="modal" data-target="#exampleModalCenter">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div v-else class="bus-owner">
    <div class="create-button">
      <button class="create-btn" data-toggle="modal" data-target="#create-sub-routes">+</button>
    </div>

    <div class="admin-tabel">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Bus Name</th>
            <th scope="col">Location</th>
            <th scope="col">Time</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td><button class="delete-btn" data-toggle="modal" data-target="#exampleModalCenter">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="modal fade" id="create-bus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Bus</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Registration Number:</label>
              <input type="email" class="form-control" id="recipient-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="edit-bus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Bus</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Registration Number:</label>
              <input type="email" class="form-control" id="recipient-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="create-routes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Routes</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Select Bus:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Start Location:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">End Location:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Start Time:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">End Time:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="create-sub-routes" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Sub Routes</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Select Bus:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Select Route:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Location Name:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Assumption Time:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Create</button>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Delete</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Are you sure? ( this will delete all the details )
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>



</template>

<style scoped>
.admin-nav-container {
  margin-top: 100px;
}

.admin-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 40px;
}

.admin-nav-btn {
  font-size: 19px;
  cursor: pointer;
  outline: none;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  background-color: #111;
  color: #fff;
  border: 2px solid #be65eb;
}

.create-btn {
  font-size: 19px;
  cursor: pointer;
  outline: none;
  width: 70px;
  height: 40px;
  border-radius: 4px;
  background-color: #be65eb;
  color: #fff;
  border: 2px solid #be65eb;
}

.admin-tabel,
.create-btn {
  margin: 30px 20px 0px 20px;
}

.modal {
  color: #111;
}

.edit-btn,
.delete-btn {
  font-size: 19px;
  cursor: pointer;
  outline: none;
  width: 70px;
  height: 40px;
  border-radius: 4px;
}

.edit-btn {
  background-color: #be65eb;
  color: #fff;
  border: 2px solid #be65eb;
}

.delete-btn {
  background-color: #f23a34;
  color: #fff;
  border: 2px solid #f23a34;
}
</style>