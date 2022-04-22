<template>
  <section>
    <telia-grid>
      <telia-row>
        <telia-col width="6">
        <telia-date-picker ref="datePicker" :invalid-error-message="errorMsg"/>
        </telia-col>
      </telia-row>
    </telia-grid>
  </section>
</template>

<script>
export default {
  name: 'LocalDatePicker',
  data: () => {
    return { 
      errorMsg: 'Bad data'
    }
  },
  mounted() {
    const localization = {
      buttonLabel: 'Choose date',
      placeholder: 'YYYY-MM-DD',
      selectedDateMessage: 'Selected date is',
      prevMonthLabel: 'Previous month',
      nextMonthLabel: 'Next month',
      monthSelectLabel: 'Month',
      yearSelectLabel: 'Year',
      closeLabel: 'Close window',
      calendarHeading: 'Choose a date',
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      locale: 'fi-FI',
      };
    this.$refs.datePicker.localization = localization;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
