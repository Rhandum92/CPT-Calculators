// -------------------------------------
// CPT Code Calculator: G0453
// -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const calcBtnG0453 = document.getElementById("calculateBtn-g0453")
  const clearBtnG0453 = document.getElementById("clearBtn-g0453")

  if (calcBtnG0453 && clearBtnG0453) {
    calcBtnG0453.addEventListener("click", function () {
      const hours = parseInt(document.getElementById("hours-g0453").value) || 0
      const minutes = parseInt(document.getElementById("minutes-g0453").value) || 0
      const hoursUnits = hours * 4

      let minutesUnits = 0
      if (minutes >= 8 && minutes <= 22) {
        minutesUnits = 1
      } else if (minutes >= 23 && minutes <= 37) {
        minutesUnits = 2
      } else if (minutes >= 38 && minutes <= 52) {
        minutesUnits = 3
      } else if (minutes >= 53 && minutes <= 60) {
        minutesUnits = 4
      }

      const totalUnits = hoursUnits + minutesUnits

      document.getElementById("result-g0453").innerHTML =
        `<strong>Total Units Billed:</strong> ${totalUnits} units`
      document.getElementById("work-g0453").innerHTML =
        `Breakdown: ${hours} hours = ${hoursUnits} units + ${minutes} minutes = ${minutesUnits} units. Total = ${totalUnits} units`
    })

    clearBtnG0453.addEventListener("click", function () {
      document.getElementById("hours-g0453").value = 0
      document.getElementById("minutes-g0453").value = 0
      document.getElementById("result-g0453").innerHTML = ""
      document.getElementById("work-g0453").innerHTML = ""
    })
  }
})

// -------------------------------------
// CPT Code Calculator: 95940
// -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const calcBtn95940 = document.getElementById("calculateBtn-95940")
  const clearBtn95940 = document.getElementById("clearBtn-95940")

  if (calcBtn95940 && clearBtn95940) {
    calcBtn95940.addEventListener("click", function () {
      const hours = parseInt(document.getElementById("hours-95940").value) || 0
      const minutes = parseInt(document.getElementById("minutes-95940").value) || 0
      const hoursUnits = hours * 4

      let minutesUnits = 0
      if (minutes >= 8 && minutes <= 22) {
        minutesUnits = 1
      } else if (minutes >= 23 && minutes <= 37) {
        minutesUnits = 2
      } else if (minutes >= 38 && minutes <= 52) {
        minutesUnits = 3
      } else if (minutes >= 53 && minutes <= 60) {
        minutesUnits = 4
      }

      const totalUnits = hoursUnits + minutesUnits

      document.getElementById("result-95940").innerHTML =
        `<strong>Total Units Billed:</strong> ${totalUnits} units`
      document.getElementById("work-95940").innerHTML =
        `Breakdown: ${hours} hours = ${hoursUnits} units + ${minutes} minutes = ${minutesUnits} units. Total = ${totalUnits} units`
    })

    clearBtn95940.addEventListener("click", function () {
      document.getElementById("hours-95940").value = 0
      document.getElementById("minutes-95940").value = 0
      document.getElementById("result-95940").innerHTML = ""
      document.getElementById("work-95940").innerHTML = ""
    })
  }
})

// -------------------------------------
// CPT Code Calculator: 95941
// -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const calcBtn95941 = document.getElementById("calculateBtn-95941")
  const clearBtn95941 = document.getElementById("clearBtn-95941")

  if (calcBtn95941 && clearBtn95941) {
    calcBtn95941.addEventListener("click", function () {
      const hours = parseInt(document.getElementById("hours-95941").value) || 0
      const minutes =
        parseInt(document.getElementById("minutes-95941").value) || 0
      const totalMinutes = hours * 60 + minutes
      let units = 0

      if (totalMinutes > 30 && totalMinutes <= 90) units = 1
      else if (totalMinutes > 90 && totalMinutes <= 150) units = 2
      else if (totalMinutes > 150 && totalMinutes <= 210) units = 3
      else if (totalMinutes > 210) units = 4

      document.getElementById("result-95941").innerHTML =
        `<strong>Total Units Billed:</strong> ${units} units`
      document.getElementById("work-95941").innerHTML =
        `Breakdown: ${hours} hours and ${minutes} minutes = ${totalMinutes} total minutes. Total = ${units} units`
    })

    clearBtn95941.addEventListener("click", function () {
      document.getElementById("hours-95941").value = 0
      document.getElementById("minutes-95941").value = 0
      document.getElementById("result-95941").innerHTML = ""
      document.getElementById("work-95941").innerHTML = ""
    })
  }
})
