<script setup>
import { ref } from 'vue'

const breadcrumb = ref('Bus');
const display_section1 = ref(true);
const display_section2 = ref(false);
const display_section3 = ref(false);
const backgroundColor_1 = ref('#be65eb');
const backgroundColor_2 = ref('');
const backgroundColor_3 = ref('');

const changeBreadCrumb = (value) => {
  if ("Bus" == value) {
    breadcrumb.value = "Bus";
    display_section1.value = true;
    display_section2.value = false;
    display_section3.value = false;
    backgroundColor_1.value = '#be65eb';
    backgroundColor_2.value = ''
    backgroundColor_3.value = ''
  } else if ("Routes" == value) {
    breadcrumb.value = "Routes"
    display_section1.value = false;
    display_section2.value = true;
    display_section3.value = false;
    backgroundColor_1.value = '';
    backgroundColor_2.value = '#be65eb'
    backgroundColor_3.value = ''
  } else {
    breadcrumb.value = "Sub Routes"
    display_section1.value = false;
    display_section2.value = false;
    display_section3.value = true;
    backgroundColor_1.value = '';
    backgroundColor_2.value = ''
    backgroundColor_3.value = '#be65eb'
  }
}

</script>



<template>
  <div class="bus-container">
    <div class="left-section-container">
      <div class="left-header-text">
        XXXXXX
      </div>
      <div class="menu-items">
        <p class="items" :style="{ backgroundColor: backgroundColor_1 }" @click="changeBreadCrumb('Bus')">Bus</p>
        <p class="items" :style="{ backgroundColor: backgroundColor_2 }" @click="changeBreadCrumb('Routes')">Routes</p>
        <p class="items" :style="{ backgroundColor: backgroundColor_3 }" @click="changeBreadCrumb('Sub Routes')">Sub
          Routes</p>
      </div>
    </div>
    <div class="right-section-container">
      <div class="right-header-text">
        <p class="left-item">Bus Owner Panel / {{ breadcrumb }}</p>
        <p class="right-item">Welcome Arjun Shaji</p>
      </div>
      <div class="line"></div>
      <div class="right-section-table">

        <div v-if="display_section1" class="bus-owner-section">
          <div class="create-btn-container">
            <button class="create-btn" data-toggle="modal" data-target="#exampleCreateModel">+</button>
          </div>
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">Name1</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody class="bus-owner-table-body">
              <tr>
                <td>Arjun Shaji</td>
                <td>arjun@gmail.com</td>
                <td><button type="button" class="btn btn-info edit-btn" data-toggle="modal" data-target="#exampleModal">
                    Edit
                  </button></td>
                <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                    Delete
                  </button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="display_section2" class="bus-owner-section">
          <div class="create-btn-container">
            <button class="create-btn" data-toggle="modal" data-target="#exampleCreateModel">+</button>
          </div>
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">Name2</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody class="bus-owner-table-body">
              <tr>
                <td>Arjun Shaji</td>
                <td>arjun@gmail.com</td>
                <td><button type="button" class="btn btn-info edit-btn" data-toggle="modal" data-target="#exampleModal">
                    Edit
                  </button></td>
                <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                    Delete
                  </button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="display_section3" class="bus-owner-section">
          <div class="create-btn-container">
            <button class="create-btn" data-toggle="modal" data-target="#exampleCreateModel">+</button>
          </div>
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">Name3</th>
                <th scope="col">Email</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody class="bus-owner-table-body">
              <tr>
                <td>Arjun Shaji</td>
                <td>arjun@gmail.com</td>
                <td><button type="button" class="btn btn-info edit-btn" data-toggle="modal" data-target="#exampleModal">
                    Edit
                  </button></td>
                <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                    Delete
                  </button></td>
              </tr>
            </tbody>
          </table>
        </div>



      </div>
    </div>

    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit XXXXXX</h5>
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
                <input type="text" class="form-control" id="recipient-name">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary edit-btn">Save</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleCreateModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create XXXXXX</h5>
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
                <input type="text" class="form-control" id="recipient-name">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary edit-btn">Create</button>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>


<style scoped>
* {
  font-family: "Shippori Antique", sans-serif;
  font-weight: 400;
  font-style: normal;
}

p {
  margin: 0;
  padding: 0;
}

.bus-container {
  width: 100%;
  display: flex;
}


.left-section-container {
  width: 20%;
  height: 630px;
  color: #fff;
}

.right-section-container {
  color: #fff;
  width: 80%;
  height: 630px;
}

.icon {
  width: 50px;
  height: 50px;
}

.left-header-text {
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  color: #be65eb;
}

.right-header-text {
  width: 50%;
  font-size: 15px;
  text-align: left;
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.menu-items {
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 30px;
}

.items {
  line-height: 35px;
  width: 200px;
  text-align: center;
  align-items: center;
  height: 40px;
  border: 1px solid #be65eb;
  cursor: pointer;
  border-radius: 3px;
}

.items:hover {
  background-color: #be65eb;
  transition: .5s;
}

.line {
  margin-top: 30px;
  width: 100%;
  height: .5px;
  background-color: rgb(148, 135, 135);
}

.right-section-table {
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
}

.create-btn {
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: #be65eb;
  width: 40px;
  height: 35px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 2px;
}

button:focus {
  outline: none;
}

#exampleModalCenter,
#exampleModal,
#exampleCreateModel {
  color: #111;
}

.edit-btn {
  background-color: #be65eb;
  border-color: #be65eb;
}
</style>