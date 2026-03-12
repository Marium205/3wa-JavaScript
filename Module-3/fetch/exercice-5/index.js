let url =
  "https://corsproxy.io/?" +
  encodeURIComponent("https://maridoucet.sites.3wa.io/user-api/users");

fetch(url)
  .then((response) => response.json())
  .then((result) => {
    // result.data = tableau d'utilisateurs
    let users = result.data;

    // 1 On crée la table
    let table = document.createElement("table");
    table.border = "1"; // simple, pour voir les lignes

    // 2 On crée header
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");

    let thId = document.createElement("th");
    thId.textContent = "ID";

    let thUsername = document.createElement("th");
    thUsername.textContent = "Username";

    let thFirstName = document.createElement("th");
    thFirstName.textContent = "Prénom";

    let thLastName = document.createElement("th");
    thLastName.textContent = "Nom";

    let thEmail = document.createElement("th");
    thEmail.textContent = "Email";

    headerRow.appendChild(thId);
    headerRow.appendChild(thUsername);
    headerRow.appendChild(thFirstName);
    headerRow.appendChild(thLastName);
    headerRow.appendChild(thEmail);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // 3 On crée le body de la table
    let tbody = document.createElement("tbody");

    // 4 1 ligne (tr) par utilisateur
    users.forEach((user) => {
      let tr = document.createElement("tr");

      let tdId = document.createElement("td");
      tdId.textContent = user.id;

      let tdUsername = document.createElement("td");
      tdUsername.textContent = user.username;

      let tdFirstName = document.createElement("td");
      tdFirstName.textContent = user.firstName;

      let tdLastName = document.createElement("td");
      tdLastName.textContent = user.lastName;

      let tdEmail = document.createElement("td");
      tdEmail.textContent = user.email;

      tr.appendChild(tdId);
      tr.appendChild(tdUsername);
      tr.appendChild(tdFirstName);
      tr.appendChild(tdLastName);
      tr.appendChild(tdEmail);

      tbody.appendChild(tr);
    });

    table.appendChild(tbody);

    // 5 On affiche la table dans la page
    document.body.appendChild(table);
  })
  .catch((err) => console.error(err));