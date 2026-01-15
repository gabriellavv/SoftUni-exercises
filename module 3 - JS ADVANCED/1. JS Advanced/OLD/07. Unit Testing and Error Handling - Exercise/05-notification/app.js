function notify(message) {

  const notificationRef = document.getElementById("notification")
  notificationRef.style.display = "block";
  notificationRef.textContent = message;

  notificationRef.addEventListener("click", hideFn);

  function hideFn() {
    notificationRef.style.display = "none";

  }
};