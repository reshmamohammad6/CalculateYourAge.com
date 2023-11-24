const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("date-input").value);
  let birthMonth, birthDate, birthYear;
  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  // Check if leap year
  leapChecker(currentYear);

  // Check if date of birth is later than today
  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    alert("Not Born Yet");
    displayResult("-", "-", "-");
    return;
  }
  // Calculate age in years
  birthYear = currentYear - birthDetails.year;
  // Calculate age in months
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentMonth - birthDetails.month;
  }

  // Calculate age in days
  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentMonth - 2];
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }
  displayResult(birthDate, birthMonth, birthYear);
}

// function to display result
function displayResult(bDate, bMonth, bYear) {
  // update year, month, day
  document.getElementById("years").textContent = bYear;
  document.getElementById("months").textContent = bMonth;
  document.getElementById("days").textContent = bDate;
}

function leapChecker(year) {
  // Check for leap year conditions
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29; // February has 29 days in a leap year
  } else {
    months[1] = 28; // February has 28 days in a non-leap year
  }
}
