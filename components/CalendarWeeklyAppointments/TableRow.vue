<template>
  <div>
    <tr class="days" :key="index1" v-for="(items, index1) in list">
      <th class="drname">&nbsp;{{ items.name }}</th>

      <td :key="index2" v-for="(count, index2) in 7" class="day">
        <div
          :load="
            console(
              `${index1} - ${item[index1].week[index2].appointments.length}`
            )
          "
          v-for="(item, index3) in list2"
          :key="index3"
        >
          <CardEvent
            v-if="item[index1].week[index2].appointments.length === 1"
            :patientName="
              item[index1].week[index2].appointments[0].consumer_name
            "
            :doctorName="
              item[index1].week[index2].appointments[0].provider_name
            "
            :timeFrom="item[index1].week[index2].appointments[0].start_Time"
            :timeTo="item[index1].week[index2].appointments[0].end_Time"
            :procedure="item[index1].week[index2].appointments[0].service_name"
          />

          <Numbercard
            v-else-if="item[index1].week[index2].appointments.length > 1"
            :number="item[index1].week[index2].appointments.length"
          />
          <!-- <h6 v-if="item.week[index2].appointments.length==0">
        hi  
        </h6>
        <h6 v-else>
        {{item.week[index2].appointments[0].consumer_ID}}
        </h6> -->

          <!-- <h6 :key="index" v-for="(i, index) in item.week[index2]">
            {{i[0]}}
          </h6> -->
          <!-- <h6 :key="index" v-for="(d, index) in i">{{d}}
            </h6> -->
          <!-- {{ item.week[index2].date }} -->

          <!-- .appointments[0].week[index2] -->
          <!-- <div
          v-for="(b,index4) in item.week[index3]" :key="index4"
          >
            
            {{b}} 
          </div> -->
          <!-- <CardEvent
            v-if="item[index1].week[index2].appointments.length == 1"
            :userName="
              item[0].week[0].appointments.appointment_type
            "
            :appointmentTimeFrom="
              item[0].week[0].appointments.appointment_Date
            "
            
            :appointmentTimeTo="
             item[0].week[0].appointments.start_Time
            "
          />
           -->
          <!-- <div :key="index4" v-for="(week ,index4) in item[index1].week" >
            {{ week }}
          </div> -->
        </div>
      </td>
    </tr>
  </div>
</template>

<script>
import CardEvent from "./CardEvent.vue";
import Numbercard from "./Numbercard.vue";
export default {
  computed: {
    list: function () {
      console.log("ddddd");
      return this.$store.getters.getAppoinment;
    },
    list2() {
      console.log("aaaa");
      return this.$store.getters.gettersFilter;
    },
  },

  methods: {
    console(value) {
      console.log(value);
    },
  },

  created() {
    this.$store.dispatch("getAppoinments");
    this.$store.dispatch("getFilters");
  },

  components: { CardEvent, Numbercard },
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
