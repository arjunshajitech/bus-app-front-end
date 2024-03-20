<script setup>
import { ref } from 'vue'

const breadcrumb = ref('Bus Owners');
const display_section = ref(true);
const backgroundColor_1 = ref('#3b9eee');
const backgroundColor_2 = ref('');

const changeBreadCrumb = (value) => {
    if ("Bus Owners" == value) {
        breadcrumb.value = "Bus Owners";
        display_section.value = true;
        backgroundColor_1.value = '#3b9eee';
        backgroundColor_2.value = ''
    }
    else {
        breadcrumb.value = "Users"
        display_section.value = false;
        backgroundColor_1.value = '';
        backgroundColor_2.value = '#3b9eee'
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
                <p class="items" :style="{backgroundColor : backgroundColor_1}" @click="changeBreadCrumb('Bus Owners')">Bus Owners</p>
                <p class="items" :style="{backgroundColor : backgroundColor_2}" @click="changeBreadCrumb('Users')">Users</p>
            </div>
        </div>
        <div class="right-section-container">
            <div class="right-header-text">
                <p class="left-item">Admin Panel / {{ breadcrumb }}</p>
                <p class="right-item">Welcome Arjun Shaji</p>
            </div>
            <div class="line"></div>
            <div class="right-section-table">

                <div v-if="display_section" class="bus-owner-section">
                    <div class="create-btn-container">
                        <button class="create-btn" data-toggle="modal" data-target="#exampleCreateModel">+</button>
                    </div>
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
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
                                <td><button type="button" class="btn btn-danger" data-toggle="modal"
                                        data-target="#exampleModalCenter">
                                        Delete
                                    </button></td>
                            </tr>
                            <tr>
                              <td>Arjun Shaji</td>
                              <td>arjun@gmail.com</td>
                              <td><button type="button" class="btn btn-info edit-btn" data-toggle="modal" data-target="#exampleModal">
                                      Edit
                                  </button></td>
                              <td><button type="button" class="btn btn-danger" data-toggle="modal"
                                      data-target="#exampleModalCenter">
                                      Delete
                                  </button></td>
                          </tr>
                        </tbody>
                    </table>
                </div>

                <div v-else class="user-section">
                    <table class="table table-hover table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
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

      
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

      <div class="modal fade" id="exampleCreateModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
    color: #43a2ef;
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
    border: 1px solid #70b6ef;
    cursor: pointer;
    border-radius: 3px;
}

.items:hover {
    background-color: #3b9eee;
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
    background-color: #70b6ef;
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

#exampleModalCenter , #exampleModal ,#exampleCreateModel {
    color: #111;
}

.edit-btn {
  background-color: #70b6ef;
  border-color: #70b6ef;
}
</style>