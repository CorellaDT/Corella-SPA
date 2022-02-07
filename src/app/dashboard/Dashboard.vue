<template>
  <div>
    <h1>Dashboard</h1>
    <p class="sprint-timeline-settings">Sprint Timeline <img src="@/assets/images/icons/dashboard/settings.svg"/></p>
    <perfect-scrollbar ref="root" class="dashboard" @scroll="onScroll">
      <div class="dashboard-table">
        <div class="dashboard-table__header">
          <div class="dashboard-table__month" v-for="dateItem in tableDatesMonthAndYear" :key="dateItem">
            <div class="dashboard-table-header-wrap-month">
              <div class="dashboard-table__header-month-and-year">
                {{ new Date(dateItem).toLocaleString('en', {month: 'long'}) }}
                <br>
                <span>{{ new Date(dateItem).getFullYear() }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard-table__content">
          <div class="dashboard-table-day" v-for="dateItem in tableDates" :key="dateItem">
            <div class="dashboard-table-content-wrap-day" v-for="date in dateItem" :key="date">
              <div class="dashboard-table__content-day">
                {{ date.day }}
                <br>
                <span>{{ date.dayOfTheWeek }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data() {
    return {
      colors: ['#D7AEFB', '#f28b82', '#ccff90', '#cbf0f8', '#fdcfe8', '#FDCFE8', '#fff475'],
      tableDates: [],
      tableDatesMonthAndYear: [],
      projects: [{
        title: "",
        dateStart: new Date(2022, 0, 20),
        dateEnd: new Date(2022, 0, 24)
      }, {
        title: "",
        dateStart: new Date(2022, 0, 14),
        dateEnd: new Date(2022, 2, 25)
      }]
    }
  },
  methods: {
    getMonthAndDays() {
      let minDate = this.projects[0]?.dateStart || null
      let maxDate = this.projects[0]?.dateEnd || null

      // найти минимальную  и максимальную дату в проектах
      this.projects.forEach(item => {
        if (item.dateStart < minDate) {
          minDate = item.dateStart
        }
        if (item.dateEnd > maxDate) {
          maxDate = item.dateEnd
        }
      })

      // минимальная дата расширяется до начала месяца
      minDate.setDate(1)

      // получить месяцы
      let date = new Date(minDate)
      let dateMonth = []

      while (date <= maxDate) {
        dateMonth.push(new Date(date))
        date.setMonth(date.getMonth() + 1)
      }
      this.tableDatesMonthAndYear = dateMonth

      // максимальная дата расширяется до конца месяца
      maxDate.setMonth(maxDate.getMonth() + 1)
      maxDate.setDate(1)
      // получить дни

      let buffer = []
      while (minDate <= maxDate) {
        if (buffer.length !== 0 && minDate.getDate() === 1) {
          this.tableDates.push(buffer)
          buffer = []
        }
        buffer.push({
          dayOfTheWeek: minDate.toLocaleString('en', {weekday: 'short'}),
          day: minDate.getDate()
        })
        minDate.setDate(minDate.getDate() + 1)
      }
      console.log(this.tableDatesMonthAndYear)
      console.log(this.tableDates)
    },
    onScroll(event) {
      console.log(event);
      // TODO: не забыть научиться получать % от прокрутки тут
      // const container = this.$el.querySelector('.ps-container');
      // container.scrollTop = container.scrollHeight;
      // console.log(container.scrollTop)
    },
  },
  mounted() {
    this.getMonthAndDays()
  }
}
</script>


<style lang="scss">
.ps > .ps__rail-x,
.ps > .ps__rail-y {
  opacity: 0.6;
}
</style>

<style scoped lang="scss">
h1 {
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  color: #3B3B3B;
  margin-bottom: 24px;
}

.sprint-timeline-settings {
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  text-transform: capitalize;
  color: #3B3B3B;
  margin-bottom: 16px;
  display: flex;
  & img {
    cursor: pointer;
    margin-left: 12px;
  }
}

.dashboard {
  overflow-x: auto;
  border-radius: 8px;

  &-table__header {
    background: #F8F8F8;
    display: flex;
    border-bottom: 1px solid #E7E7E7;
    border-radius: 2px;
  }

  &-table__month {
    padding: 12px 0;
    background: #F8F8F8;

    min-width: 100vw;
    display: flex;
    flex-direction: column;
  }

  &-table-header-wrap-month {
    display: flex;
  }

  &-table__header-month-and-year {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 12px;
    color: #212121;
    padding: 0 12px;

    position: -webkit-sticky;
    position: sticky;
    left: 0;
    white-space: nowrap;
  }

  &-table__header-month-and-year br {
    content: "";
    margin-top: -7px;
    display: block;
  }

  &-table__header-month-and-year span {
    display: flex;
    margin-top: 14px;

    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #7C7B86;
  }

  &-table__content {
    padding: 26px 12px 30px 12px;
    display: flex;
  }

  &-table__content-day {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #212121;
  }

  &-table__content-day span {
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #7C7B86;
  }

  &-table__content-day br {
    content: "";
    margin-top: 4px;
    display: block;
  }

  &-table-day {
    min-width: 100vw;
    display: flex;
    justify-content: space-between;
    padding-right: 40px;
  }
}
</style>
