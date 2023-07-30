export const timeFormatter = () => {
   const currentTime = new window.Date()

   const monthWord = currentTime.toLocaleString(undefined, { month: 'long' })
   const dayOfMonth = currentTime.getDate()
   const year = currentTime.getFullYear()
   const minutes = currentTime.getMinutes()
   const formattedMinutes = minutes.toString().padStart(2, '0')
   const hours = currentTime.getHours() % 12 || 12
   const meridiem = currentTime.getHours() < 12 ? 'AM' : 'PM'
   const currentDay = currentTime.toLocaleString(undefined, { weekday: 'long' })
   const fullTime = `${hours}:${minutes} ${meridiem}`
   const fullDate = `${monthWord} ${dayOfMonth}, ${year}`

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
   }
}
