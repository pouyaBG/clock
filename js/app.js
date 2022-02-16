// clock
const hour = document.getElementById('clock-hour');
const minute = document.getElementById('clock-minute');
const seconds = document.getElementById('clock-seconds');

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;

  // add rotation to elements
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
}

setInterval(clock, 1000)

// clock display && date display
const textHour = document.getElementById('text-hour');
const textMinutes = document.getElementById('text-minutes');
const textAmPm = document.getElementById('text-ampm');
const dateDay = document.getElementById('date-day');
const dateMonth = document.getElementById('date-month');
const dateYear = document.getElementById('date-year');

const clockText = () => {
  let date = new Date();

  let hh = date.getHours();
  let ampm;
  let mm = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  // Condition
  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  };
  // 0 AM  => 12 AM
  if (hh == 0) { hh = 12 };
  // show zero
  if (hh < 10) { hh = `0${hh}` };
  // show time 

  textHour.innerHTML = `${hh}:`;

  // show 0 befor minute
  if (mm < 10) { mm = `0${mm}` }
  // show minute
  textMinutes.innerHTML = mm;
  // show AmPm
  textAmPm.innerHTML = ampm;
  // month 
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  // show day 
  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]},`;
  dateYear.innerHTML = year;

}

setInterval(clockText, 1000);

// dark/light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun"

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : "bxs-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

