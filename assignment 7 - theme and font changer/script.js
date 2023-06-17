function changeTheme(theme) {
  var themeStylesheet = document.getElementById('themeStylesheet');
  themeStylesheet.href = theme + '.css';

  var fontStylesheet = document.getElementById('fontStylesheet');
  if (theme === 'dark') {
    fontStylesheet.innerHTML = "#demoText { font-family: 'Courier New', monospace; }";
  } else if (theme === 'light') {
    fontStylesheet.innerHTML = "#demoText { font-family: 'Lucida Sans Unicode', 'Lucida Grande', sans-serif; }";
  } else {
    fontStylesheet.innerHTML = "";
  }
}
