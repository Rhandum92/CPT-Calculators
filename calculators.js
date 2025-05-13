// G0453 Calculator
document
  .getElementById("calculateBtn-g0453")
  .addEventListener("click", function () {
    const hours = parseInt(document.getElementById("hours-g0453").value) || 0
    const minutes = parseInt(document.getElementById("minutes-g0453").value) || 0

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
    const minutes = parseInt(document.getElementById("minutes-95940").value) || 0

    const hoursUnits = hours * 4
    const minutesUnits = minutes > 0 ? 4 : 0
    const totalUnits = hoursUnits + minutesUnits

    document.getElementById("result-95940").innerHTML =
      `<strong>Total Units Billed:</strong> ${totalUnits} units`
    document.getElementById("work-95940").innerHTML =
      `Breakdown: ${hours} hours = ${hoursUnits} units + ${minutes} minutes = ${minutesUnits} units. Total = ${totalUnits} units`
  })

// 95941 Calculator (Updated output format)
document
  .getElementById("calculateBtn-95941")
  .addEventListener("click", function () {
    const hours = parseInt(document.getElementById("hours-95941").value) || 0
    const minutes = parseInt(document.getElementById("minutes-95941").value) || 0

    // Calculate total minutes for this calculator
    const totalMinutes = hours * 60 + minutes

    // Units based on the total minutes (original logic)
    let units = 0
    if (totalMinutes >= 0 && totalMinutes <= 30) {
      units = 0
    } else if (totalMinutes > 30 && totalMinutes <= 90) {
      units = 1
    } else if (totalMinutes > 90 && totalMinutes <= 150) {
      units = 2
    } else if (totalMinutes > 150 && totalMinutes <= 210) {
      units = 3
    } else if (totalMinutes > 210) {
      units = 4
    }

    // Updated output format for 95941
    document.getElementById("result-95941").innerHTML =
      `<strong>Total Units Billed:</strong> ${units} units`
    document.getElementById("work-95941").innerHTML =
      `Breakdown: ${hours} hours and ${minutes} minutes = ${totalMinutes} total minutes. Total = ${units} units`
  })
