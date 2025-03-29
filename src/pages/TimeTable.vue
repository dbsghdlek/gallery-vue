<template>
  <VueDatePicker v-model="searchDay" :format="'yyyy-MM-dd'"/>
  <div class="time-container ps-3 pe-3 bg-success">
    <div class="row">
      <div class="form-check col-6 d-flex justify-content-end align-items-end text-center">
      <input class="form-check-input" v-model="target" value="soeun" type="radio">
        <label class="form-check-label" for="flexRadioDefault1">
          소은
        </label>
      </div>
      <div class="form-check col-6 d-flex justify-content-start align-items-start text-center">
        <input class="form-check-input" v-model="target" value="naeun" type="radio">
        <label class="form-check-label" for="flexRadioDefault2">
          나은
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <select v-model="hour" class="form-select" aria-label="Default select example">
          <option selected value=0>시</option>
          <option v-for="h in 24" :key="h" :value="h">
            {{ h }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <select v-model="minute" class="form-select mb-3" aria-label="분 선택">
          <option selected value=0>분</option>
          <option v-for="m in 60" :key="m" :value="m">
            {{ m }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <select :disabled="eventType === 0" v-model="milk" class="form-select" aria-label="Default select example">
          <option selected value=0>분유량</option>
          <option v-for="milk in milkList" :key="milk" :value="milk">
            {{ milk }}
          </option>
        </select>
      </div>
      <div class="col-3">
        <select v-model="eventType" class="form-select" aria-label="Default select example">
          <option selected value=0>똥</option>
          <option value=1>분유</option>
        </select>
      </div>
    </div>
    <div class="row">
      <button class="btn btn-warning ok" @click="addLog()">확인</button>
    </div>
    <div class="table-responsive">
      <table class="table table-sm">
        <thead>
          <tr class="th">
            <th class="text-center col-4">
              시간
            </th>
            <th class="text-center col-4">
              똥?분유?
            </th>
            <th class="text-center col-4">
              양
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="history in historyList">
            <td class="text-center">{{ history.time }}}</td>
            <td class="text-center">{{ history.event == '1' ? '분유':'똥' }}</td>
            <td class="text-center">{{ history.milk_amount}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios'
import dayjs from 'dayjs'
const hour = ref(0);
const minute = ref(0);
const milk = ref(0);
const eventType = ref(0);
const target = ref(null);
const historyList = ref<history[]>([]);
const searchDay = ref(new Date());
const milkList = [
  50,60,70,80,90,100,110,120,130,140,150, 160,170,180,190,200,210,220,230,240,250
]

interface history {
  time: Date;
  event: number;
  milk_amount: number;
  target: string
}

watch([target, searchDay], async () => {
  axios.get(`http://localhost:3000/babyLogs/${target.value}`, {
    params: {
      searchDate: dayjs(searchDay.value).format('YYYY-MM-DD'),
    }
  }).then((res) => {
    historyList.value = res.data;
  })
})

const addLog = async () => {

  if(!['soeun','naeun'].includes(target.value)) {
    alert('소은이여? 나은이여?')
    return;
  }
  if(eventType.value === '1' && milk.value <= 0) {
    alert('분유를 하나도 안먹었네!!')
    return;
  }
  axios.post('http://localhost:3000/babyLogs/', {
    target: target.value,
    hour: hour.value,
    minute: minute.value,
    milk_amount: milk.value,
    event: eventType.value,
  }).then(res => {
    alert('추가되었습니다.')
    historyList.value.push({
      ...res.data,
    })
  })
}

const dateClick = (pickDate: Date) => {
  searchDay.value = dayjs(pickDate).format('YYYY-MM-DD');
}
</script>

<style scoped>
.custom-select option {
  max-height: 50px;
  overflow-y: auto;
}

.form-select {
  max-height: 50px;
}

.form-check {
  margin-bottom: 1.3em;
}

.form-check-label {
  margin-left: 0.3em;
  margin-right: 1em;
}
.ok {
  margin-bottom: 1em;
  border: 1px #d4f173;
}
</style>
