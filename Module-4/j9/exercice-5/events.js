export function setupAlert(buttonId, message) {
  let btn = document.getElementById(buttonId);

  btn.addEventListener("click", () => {
    window.alert(message);
  });
}