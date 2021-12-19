<template>
  <div>
    <tr class="days" :key="index1" v-for="(items, index1) in list">
      <th class="drname">&nbsp;{{ items.name }}</th>

      <td :key="index2" v-for="(count, index2) in 7" class="day">
        <CardEvent
          v-if="items.weekDays[index2].appointments.length == 1"
          :userName="
            items.weekDays[index2].appointments[0].appointment_patient_id
          "
          :appointmentTimeFrom="
            items.weekDays[index2].appointments[0].appointment_start_time
          "
          :appointmentTimeTo="
            items.weekDays[index2].appointments[0].appointment_end_time
          "
        />
        <div v-else-if="items.weekDays[index2].appointments.length > 1">
          {{ items.weekDays[index2].appointments.length }}
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
import CardEvent from "./CardEvent.vue";
export default {
  computed: {
    list: function () {
      return this.$store.getters.getAppoinment;
    },
  },

  created() {
    this.$store.dispatch("getAppoinments");
  },

  components: { CardEvent },
};
</script>

<style>
#calendar tr,
#calendar tbody {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
}

#calendar .days li:hover {
  background: #d3d3d3;
}

.drname {
  border-left: none !important;
  border-right: none !important;
}
.drname {
  width: 98%;
  border-left: none !important;
  background-color: #fff;
  padding-top: 55px !important;
  color: #949191;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: bold;
}
</style>
