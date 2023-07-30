export const timeFormatter = (datePara) => {
   const currentTime = datePara === undefined ? new window.Date() : datePara

   const monthWord = currentTime.toLocaleString(undefined, { month: 'long' })
   const monthNumeric = currentTime
      .toLocaleString('en', { month: 'numeric' })
      .padStart(2, '0')
   const dayOfMonth = currentTime.getDate()
   const year = currentTime.getFullYear()
   const minutes = currentTime.getMinutes()
   const formattedMinutes = minutes.toString().padStart(2, '0')
   const hours = currentTime.getHours() % 12 || 12
   const meridiem = currentTime.getHours() < 12 ? 'AM' : 'PM'
   const currentDay = currentTime.toLocaleString(undefined, { weekday: 'long' })
   const fullTime = `${hours}:${minutes} ${meridiem}`
   const fullDate = `${year}-${monthNumeric}-${dayOfMonth}`
   const sevenDaysPass = `${year}-${monthNumeric}-${dayOfMonth - 7}`

   return {
      monthWord,
      dayOfMonth,
      year,
      minutes,
      formattedMinutes,
      hours,
      meridiem,
      currentDay,
      fullTime,
      fullDate,
      monthNumeric,
      sevenDaysPass,
   }
}

export const pastSevenDays = () => {
   const currentTime = new window.Date()
   const monthNumeric = currentTime
      .toLocaleString('en', { month: 'numeric' })
      .padStart(2, '0')

   const lastDayOfCurrentMonth = new Date(
      currentTime.getFullYear(),
      monthNumeric,
      0
   )
   return lastDayOfCurrentMonth.getDate()
}
