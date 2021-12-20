<template>
  <div class="header">
  <b-dropdown id="dropdown-right" right text="Right align" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.header {
  display: flex;
  flex-direction: row;
  background-color: white;
  height: 60px;
  background-color: #fff;
  overflow: auto;
  box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
  border-radius: 0.428rem;
  width: 90%;
  justify-content: space-around;
  margin: auto;
}

.left {
  width: 100%;
  display: flex;
  justify-content: start;
  margin-left: 20px;
  align-items: center;
}
.right {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-right: 20px;
  align-items: center;
}
.username {
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 700;
  color: cornflowerblue;
  margin-right: 10px;
}
.right a {
  float: right;
  text-align: center;
  padding: 8px 8px;
  transition: all 0.3s ease;
  color: white;
  font-size: 25px;
  color: #949191;
  text-decoration: none;
}
::after .badge {
  position: absolute !important;
  background-color: #ea5455 !important;
  font-size: 0.8rem;
  border-radius: 10rem;
  text-align: center;
  padding: 2px 6px;
  color: #fff;
  margin-left: -12px;
  margin-top: 5px;
}
.badge {
  position: absolute !important;
  background-color: #ea5455 !important;
  font-size: 0.8rem;
  border-radius: 10rem;
  text-align: center;
  padding: 2px 6px;
  color: #fff;
  top: 49px !important;
  right: 130px;
}
@media (max-width: 460px) {
  .header {
    width: 100%;
    overflow: scroll;
    padding: 10px;
  }
}


.dropdown:hover .dropdown-content {
  display: inline-grid;
  top: 75px;
  right: 2.5%;
  float: right;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 0px 9px 3px rgb(170 167 167 / 25%);
  z-index: 1;
}
.dropdown-content a {
  color: #949191;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  right: 0;
  font-size: 12px;
  font-family: sans-serif;
  width: auto;
}
</style>
