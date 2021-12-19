<template>
  <div class="event">
    <div class="event-desc">
      {{ userName }}
    </div>
    <div class="event-time">
      {{ appointmentTimeFrom }}
      to
      {{ appointmentTimeTo }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userName: String,
    appointmentTimeFrom: String,
    appointmentTimeTo: String,
  },
};
</script>

<style>
.event {
  flex: 0 0 auto;
  font-size: 13px;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 5px;
  line-height: 14px;
  background: #eceef8;
  border: 1px solid #0b5efc;
  color: #0b5efc;
  text-decoration: none;
  margin-top: 10;
}

.event-desc {
  color: #949191;
  margin: 3px 0 7px 0;
  text-decoration: none;
  font-size: 80%;
  font-family: sans-serif;
  text-align: left;
}
</style>
