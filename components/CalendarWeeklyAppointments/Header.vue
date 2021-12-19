<template>
  <div class="header">
    <div class="left">
      <div class="username">{{$t("username")}} </div>
    </div>
    <div class="right">
      <div>
        <a href="#"
          ><i class="icon"></i
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="25"
            height="25"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 28 28"
            style="margin-top: 11px; margin-bottom: 4px"
          >
            <g fill="none">
              <path
                d="M14 3a8.501 8.501 0 0 1 8.497 8.246l.004.255v4.612l1.414 3.644c.038.098.064.201.077.305l.01.158a1.28 1.28 0 0 1-1.15 1.273l-.13.007l-5.22.001a3.502 3.502 0 0 1-6.998.192l-.006-.194l-5.223.001a1.28 1.28 0 0 1-1.235-1.62l.042-.124l1.416-3.644v-4.61A8.501 8.501 0 0 1 14 3zm1.996 18.65L16 21.5l-4.002.002a2.001 2.001 0 0 0 3.998.15zM14 4.5a7.001 7.001 0 0 0-6.997 6.76l-.004.241v4.752a.75.75 0 0 1-.023.184l-.028.088L5.596 20H22.4l-1.348-3.474a.748.748 0 0 1-.045-.18L21 16.254v-4.752A7.001 7.001 0 0 0 14 4.5z"
                fill="#0b5efc"
              ></path>
            </g>
          </svg>
          <span class="badge">6</span></a
        >
      </div>

      <div class="dropdown">
        <div class="dropdown-content">
          <a href="#">item 1</a>
          <a href="#">item 2</a>
          <a href="#">item 3</a>
        </div>

        <a href="#"
          ><i class="icon"></i
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="40"
            height="40"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"
              fill="#0b5efc"
            /></svg
        ></a>
      </div>
      
    </div>
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
