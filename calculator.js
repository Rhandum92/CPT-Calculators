// G0453 Calculator
document
  .getElementById("calculateBtn-g0453")
  .addEventListener("click", function () {
    const hours = parseInt(document.getElementById("hours-g0453").value) || 0
    const minutes =
      parseInt(document.getElementById("minutes-g0453").value) || 0

    const hoursUnits = hours * 4
    const minutesUnits = minutes > 0 ? 4 : 0
    const totalUnits = hoursUnits + minutesUnits

    document.getElementById("result-g0453").innerHTML =
      `<strong>Total Units Billed:</strong> ${totalUnits} units`
    document.getElementById("work-g0453").innerHTML =
      `Breakdown: ${hours} hours = ${hoursUnits} units + ${minutes} minutes = ${minutesUnits} units. Total = ${totalUnits} units`
  })

// 95940 Calculator
document
  .getElementById("calculateBtn-95940")
  .addEventListener("click", function () {
    const hours = parseInt(document.getElementById("hours-95940").value) || 0
    const minutes =
      parseInt(document.getElementById("minutes-95940").value) || 0

    const hoursUnits = hours * 4
    const minutesUnits = minutes > 0 ? 4 : 0
    const totalUnits = hoursUnits + minutesUnits

    document.getElementById("result-95940").innerHTML =
      `<strong>Total Units Billed:</strong> ${totalUnits} units`
    document.getElementById("work-95940").innerHTML =
      `Breakdown: ${hours} hours = ${hoursUnits} units + ${minutes} minutes = ${minutesUnits} units. Total = ${totalUnits} units`
  })

// 95941 calculator.js

document.getElementById("calculateBtn2").addEventListener("click", function () {
  const hours2 = parseInt(document.getElementById("hours2").value) || 0
  const minutes2 = parseInt(document.getElementById("minutes2").value) || 0

  // Calculate total minutes for this calculator
  const totalMinutes2 = hours2 * 60 + minutes2

  // Units based on the total minutes
  let units2 = 0
  if (totalMinutes2 >= 0 && totalMinutes2 <= 30) {
    units2 = 0
  } else if (totalMinutes2 > 30 && totalMinutes2 <= 90) {
    units2 = 1
  } else if (totalMinutes2 > 90 && totalMinutes2 <= 150) {
    units2 = 2
  } else if (totalMinutes2 > 150 && totalMinutes2 <= 210) {
    units2 = 3
  } else if (totalMinutes2 > 210) {
    units2 = 4
  }

  const resultDiv2 = document.getElementById("result2")
  const workDiv2 = document.getElementById("work2")

  resultDiv2.innerHTML = `<strong>Total Units Billed:</strong> ${units2} units`
  workDiv2.innerHTML = `Breakdown:\n${hours2} hours and ${minutes2} minutes = ${totalMinutes2} total minutes\nTotal = ${units2} units`
})
