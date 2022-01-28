<template>
  <div class="dashboard">
    <div class="dashboard-table">
      <div class="dashboard-table__header">
        <div class="dashboard-table__header-month">
          {{ tableDates }}
        </div>
        <div class="dashboard-table__header-days">
        </div>
      </div>
      <div class="dashboard-table__content">

      </div>
    </div>
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
        dateEnd: new Date(2022, 0, 25)
      }]
    }
  },
  methods: {
    getMonthAndDays() {
      let minDate = this.projects[0]?.dateStart || null
      let maxDate = this.projects[0]?.dateEnd || null

      this.projects.forEach(item => {
        if (item.dateStart < minDate) {
          minDate = item.dateStart
        }
        if (item.dateEnd > maxDate) {
          maxDate = item.dateEnd
        }
      })

      // TODO: пофиксить даты
      while (minDate <= maxDate) {
        const monthAndYear = {
          month: minDate.toLocaleString('en', {month: 'short'}),
          year: minDate.getFullYear(),
        }
        this.tableDates.push({
          dayOfTheWeek: minDate.toLocaleString('en', {weekday: 'short'}),
          day: minDate.getDay(),
          ...monthAndYear
        })

        if (!this.tableDatesMonthAndYear.includes(monthAndYear)) {
          this.tableDatesMonthAndYear.push(monthAndYear)
        }
        minDate.setDate(minDate.getDate() + 1)
      }
    }
  },
  mounted() {
    this.getMonthAndDays()
  }
}
</script>

<style scoped lang="scss">
.dashboard {

}
</style>
