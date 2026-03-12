let url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://maridoucet.sites.3wa.io/user-api/create-user");

// On envoie comme un "formulaire"
let formData = new FormData();
formData.append("username", "marium205");
formData.append("firstName", "Marium");
formData.append("lastName", "Abdul");
formData.append("email", "marium205@3wa.io");

fetch(url, {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));