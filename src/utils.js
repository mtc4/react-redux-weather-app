
const padZero = n => {
  if (n < 10) return "0" + n
  return n
}

const getWeekDay = timestamp => {
  const WEEKDAYS = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota"
  ]
  const MONTHS = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ]

  var d = new Date(timestamp * 1000)
  return WEEKDAYS[d.getDay()]
}

const timestampToHours = timestamp => {
  let date = new Date(timestamp * 1000)
  let hours = padZero(date.getHours())
  let minutes = padZero(date.getMinutes())
  return (hours + ":" + minutes).toString()
}

export { getWeekDay, timestampToHours }