const lightTheme = document.querySelector('#light');
const darkTheme = document.querySelector('#dark');

window.onload = () => getThemeFromLocalStorage()

lightTheme.addEventListener('change', () => {
  const isChecked = lightTheme.checked
  if (isChecked) {
    changeTheme(lightTheme.id)
  }
})


darkTheme.addEventListener('change', () => {
  const isChecked = darkTheme.checked
  if (isChecked)
    changeTheme(darkTheme.id)
})


const changeTheme = (theme) => {
  if (isThemeEqual(theme, darkTheme.id)) {
    darkTheme.checked = true
  }
  saveThemeToLocalStorage(theme)
}

const saveThemeToLocalStorage = (theme) => {
  localStorage.setItem('theme', theme)
}

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme')
  changeTheme(theme)
}

const isThemeEqual = (firstTheme, secondTheme) => {
  if (firstTheme == secondTheme)
    return true
  else
    return false
}





