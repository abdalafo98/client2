<template>
  <div class="wokring-hours">
    <div class="title-working-hours">
      <h5>Select your working days</h5>
    </div>
    <div class="body-working-hours">
      <label class="days-container" :key="index" v-for="(day, index) in days">
        <input type="checkbox" id="checkboxes" />
        <span class="check-box-custom"></span>
        <label class="checkbox-label"> {{ day }}</label>
        <div class="from-to">
          <input class="time" type="time" name="time"
          
           />
          To
          <input class="time" type="time" name="time" />
        </div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    };
  },
};
</script>

<style>
.wokring-hours {
    display: flex;
    flex-direction: column;
}
body {
  font-family: "roboto", sans-serif;
  background-color: #f7f7f7;
  overflow-x: hidden;
  margin: 0 auto;
}
.header-cont {
  display: flex;
  justify-content: center;
}
.user-info {
  width: 55%;
  background: rgb(11, 94, 252);
  height: 35px;
  display: flex;
  border-radius: 5px;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  color: #fff;
  justify-content: center;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 500;
}
.employee-details {
  display: flex;
  padding-left: 60px;
}
.second-list {
  display: flex;
  justify-content: center;
}
.days-list {
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 1% 10%;
  background-color: #fff;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  border-radius: 5px;
  color: #949191;
}
.working-days {
  padding-left: 25px;
  color: #949191;
}
.days-container input {
  cursor: pointer;
}

.time {
  width: 110;
  height: 25px;
  font-size: 14px;
  font-family: sans-serif;
  margin: 0px 20px;
  border: none !important;
  background: border-box;
}
.from-to {
  display: flex;
}
</style>
