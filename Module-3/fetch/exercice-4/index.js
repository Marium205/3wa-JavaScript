let url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://maridoucet.sites.3wa.io/user-api/user/18");

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    let user = result.data;

    let h1 = document.createElement("h1");
    h1.textContent = user.username;

    let h2 = document.createElement("h2");
    h2.textContent = user.firstName + " " + user.lastName;

    let h3 = document.createElement("h3");
    h3.textContent = user.email;

    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.body.appendChild(h3);
  })
  .catch((err) => console.error(err));