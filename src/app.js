// script.js
document.addEventListener("DOMContentLoaded", function() {
  const pronouns = ["the", "our"];
  const adjs = ["great", "big"];
  const nouns = ["jogger", "racoon"];
  const extensions = [".com", ".net", ".us", ".io"];
  const domainList = document.getElementById("domainList");

  function generateDomains() {
    let domains = [];
    for (let pronoun of pronouns) {
      for (let adj of adjs) {
        for (let noun of nouns) {
          domains.push(generateDomain(pronoun, adj, noun));
        }
      }
    }
    return domains;
  }

  function generateDomain(pronoun, adj, noun) {
    let domain = `${pronoun}${adj}${noun}`;
    let extensionIndex = Math.floor(Math.random() * extensions.length);
    let extension = extensions[extensionIndex];
    // Check for domain hacks
    if (domain.endsWith(extensions[extensionIndex].slice(1))) {
      extension = extensions[extensionIndex].slice(1);
    }
    return `${domain}.${extension}`;
  }

  function displayDomains() {
    let domains = generateDomains();
    domainList.innerHTML = "";
    domains.forEach(domain => {
      let domainItem = document.createElement("p");
      domainItem.textContent = domain;
      domainList.appendChild(domainItem);
    });
  }

  displayDomains();
});
