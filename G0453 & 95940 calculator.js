  // G0453 & 95940 calculator.js

document.getElementById("calculateBtn").addEventListener("click", function () {
  // Get input values
  const hours = parseInt(document.getElementById("hours").value) || 0
  const minutes = parseInt(document.getElementById("minutes").value) || 0

  // Calculate units for hours (4 units per hour)
  const hoursUnits = hours * 4

  // Calculate units for minutes (4 units for any non-zero minute range)
  let minutesUnits = 0
  if (minutes > 0) {
    minutesUnits = 4
  }

  // Total units billed
  const totalUnits = hoursUnits + minutesUnits

  // Display the results
  const resultDiv = document.getElementById("result")
  const workDiv = document.getElementById("work")

  resultDiv.innerHTML = `<strong>Total Units Billed:</strong> ${totalUnits} units`
  workDiv.innerHTML = `Breakdown: ${hours} hours = ${hoursUnits} units + ${minutes} minutes = ${minutesUnits} units. Total = ${totalUnits} units`
})
