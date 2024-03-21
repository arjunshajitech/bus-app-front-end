<script setup>
import { ref } from 'vue'
const backgroundColor_1 = ref('#43a2ef');
const backgroundColor_2 = ref('');
const showTable = ref(true);

const buttonOnClick = (val) => {
  if (val) {
    backgroundColor_1.value = '#43a2ef'
    backgroundColor_2.value = ''
    showTable.value = true;
  } else {
    backgroundColor_1.value = ''
    backgroundColor_2.value = '#43a2ef'
    showTable.value = false;
  }
}

</script>


<template>
  <div class="admin-nav-container">
    <div class="admin-nav">
      <button @click="buttonOnClick(true)" :style="{ backgroundColor: backgroundColor_1 }" class="admin-nav-btn">Bus
        Owners</button>
      <button @click="buttonOnClick(false)" :style="{ backgroundColor: backgroundColor_2 }"
        class="admin-nav-btn">Users</button>
    </div>

    <div v-if="showTable" class="bus-owner">
      <div class="create-button">
        <button class="create-btn" data-toggle="modal" data-target="#create">+</button>
      </div>

      <div class="admin-tabel">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td><button class="edit-btn" data-toggle="modal" data-target="#edit">Edit</button></td>
              <td><button class="delete-btn" data-toggle="modal" data-target="#exampleModalCenter">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else class="admin-tabel">
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">##</th>
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
        </tbody>
      </table>
    </div>

    <div class="modal fade" id="create" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Bus Owner</h5>
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
                <label for="recipient-name" class="col-form-label">Email:</label>
                <input type="email" class="form-control" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Password:</label>
                <input type="password" class="form-control" id="recipient-name">
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

    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Bus Owner</h5>
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
                <label for="recipient-name" class="col-form-label">Email:</label>
                <input type="email" class="form-control" id="recipient-name">
              </div>
              <div class="form-group">
                <label for="recipient-name" class="col-form-label">Password:</label>
                <input type="password" class="form-control" id="recipient-name">
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

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Delete XXXXXX</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              Are you sure? <br> ( this will delete all details associated with this user... )
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
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
  border: 2px solid #43a2ef;
}

.create-btn {
  font-size: 19px;
  cursor: pointer;
  outline: none;
  width: 70px;
  height: 40px;
  border-radius: 4px;
  background-color: #43a2ef;
  color: #fff;
  border: 2px solid #43a2ef;
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
  background-color: #43a2ef;
  color: #fff;
  border: 2px solid #43a2ef;
}

.delete-btn {
  background-color: #f23a34;
  color: #fff;
  border: 2px solid #f23a34;
}
</style>