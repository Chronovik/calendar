<template>
  <section class="calendar">
    <div class="calendar__head">
      <button class="btn btn_small" @click="prevMonth">Назад</button>
      <span class="calendar__view-date">{{ currentMonthName }} {{ currentYear }}</span>
      <button class="btn btn_small" @click="nextMonth">Вперёд</button>
      <span class="calendar__today">Сегодня</span>
    </div>
    <table class="calendar__table">
      <thead>
        <tr>
          <td>Понеедельник</td>
          <td>Вторни </td>
          <td>Среда</td>
          <td>Четверг</td>
          <td>Пятница</td>
          <td>Суббота</td>
          <td>Воскресенье</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in tableDates">
          <td v-for="day in week">
            <div class="calendar__table-date">{{ day.dayNumber }}</div>    
            <div class="calendar__table-note">Обосраться на паре</div>      
          </td> 
        </tr>
     
      </tbody>
    </table>
  </section>
</template>

<style>

.calendar__table {
  margin-top: 12px;
}

.calendar__table {
  width: 100%;
  border: 1px solid #4B77BE;
  border-collapse: collapse;
}

.calendar__table thead {
  text-align: center;
  background: #4B77BE;
  color: #fff;
  font-size: 14px;
}

.calendar__table thead td {
  border: 1px solid #fff;
  border-top: 1px solid #4B77BE;
  padding: 12px;
}

.calendar__table thead td:first-child {
  border-left: 1px solid #4B77BE;
}

.calendar__table thead td:last-child {
  border-right: 1px solid #4B77BE;
}

.calendar__table tbody {
  text-align: left;
}

.calendar__table tbody td {
  border: 1px solid #4B77BE;
  padding: 12px;
  font-size: 12px;
  min-height: 50px;
  transition: background-color .3s;
  cursor: pointer;
}

.calendar__table tbody td:hover {
  background: rgba(30, 139, 195, .2);
}

.calendar__table-date {
  font-weight: bold;
  margin-bottom: 10px;
}

.calendar__view-date {
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  margin: 0 8px;
}

.calendar__today {
  font-size: 12px;
  display: inline-block;
  border-radius: 3px;
  border: 1px solid rgba(103, 128, 159, .6);
  padding: 2px 6px;
  margin-left: 6px;
  color: rgba(103, 128, 159, .6);
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: null,
      todayDate: null,
      currentMonthName: null,
      currentYear: null,
      tableDates: [],
      monthsNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
    };
  },
  computed: {},
  methods: {
    setCurrentMonth(date) {
      const tempDate = new Date();
      this.currentDate = date || new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, 0);
      this.currentMonthName = this.getCurrentMonthName();
      this.currentYear = this.getCurrentYear();
    },
    getCurrentDate() {
      return this.currentDate;
    },
    getCurrentMonth() {
      return this.currentDate.getMonth();
    },
    getCurrentMonthName() {
      return this.monthsNames[this.getCurrentMonth()];
    },
    getCurrentYear() {
      return this.currentDate.getFullYear();
    },
    nextMonth() {
      let currMonth = this.getCurrentMonth();
      this.setCurrentMonth(new Date(this.getCurrentYear(), ++currMonth));
      this.generateTable();
    },
    prevMonth() {
      let currMonth = this.getCurrentMonth();
      this.setCurrentMonth(new Date(this.getCurrentYear(), --currMonth));
      this.generateTable();
    },
    generateTable() {
      const firstDay = new Date(this.getCurrentYear(), this.getCurrentMonth(), 1);
      let dayCounter = 0;
      let offset = 0;
      this.$set('tableDates', []);

      if (firstDay.getDay() !== 0) {
        offset = firstDay.getDay() - 2;
        // new Date(...,..., 0).getDay() - last day of month;
        // set offset for loop, week should starts from begining
        dayCounter -= offset;
      }

      for (let row = 0; row <= 4; row++) {
        this.tableDates.push([]);
        for (let col = 0; col <= 6; col++, dayCounter++) {
          const fullDateOfDay = new Date(this.getCurrentYear(), this.getCurrentMonth(), dayCounter);
          this.tableDates[row].push({
            date: fullDateOfDay,
            dayNumber: fullDateOfDay.getDate(),
          });
        }
      }
    },
  },
  ready() {
    this.setCurrentMonth();
    this.generateTable();
  },
  vuex: {},
};

</script>