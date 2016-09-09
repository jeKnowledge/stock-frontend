export const setCookie = (key, value, expirationDays) => {
  let expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  document.cookie = `${key}=${value}; expires=${expirationDate.toUTCString()}`;
}

export const getCookie = (key) => {
  let name = `${key}=`;
  let cookies = document.cookie.split(';');

  for(let i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if(cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}
