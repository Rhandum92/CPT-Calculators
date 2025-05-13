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

// Clear button functionality for G0453
document
  .getElementById("clearBtn-g0453")
  .addEventListener("click", function () {
    document.getElementById("hours-g0453").value = 0
    document.getElementById("minutes-g0453").value = 0
    document.getElementById("result-g0453").innerHTML = ""
    document.getElementById("work-g0453").innerHTML = ""
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

// Clear button functionality for 95940
document
  .getElementById("clearBtn-95940")
  .addEventListener("click", function () {
    document.getElementById("hours-95940").value = 0
    document.getElementById("minutes-95940").value = 0
    document.getElementById("result-95940").innerHTML = ""
    document.getElementById("work-95940").innerHTML = ""
  })

// 95941 Calculator
document
  .getElementById("calculateBtn-95941")
  .addEventListener("click", function () {
    const hours = parseInt(document.getElementById("hours-95941").value) || 0
    const minutes =
      parseInt(document.getElementById("minutes-95941").value) || 0

    const totalMinutes = hours * 60 + minutes
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

    document.getElementById("result-95941").innerHTML =
      `<strong>Total Units Billed:</strong> ${units} units`
    document.getElementById("work-95941").innerHTML =
      `Breakdown: ${hours} hours and ${minutes} minutes = ${totalMinutes} total minutes. Total = ${units} units`
  })

// Clear button functionality for 95941
document
  .getElementById("clearBtn-95941")
  .addEventListener("click", function () {
    document.getElementById("hours-95941").value = 0
    document.getElementById("minutes-95941").value = 0
    document.getElementById("result-95941").innerHTML = ""
    document.getElementById("work-95941").innerHTML = ""
  })
