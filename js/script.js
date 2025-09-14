const navLinksEL = document.getElementById("nav-links");

const navLinks = [
  { name: "Create Resume", href: "#" },
  { name: "Skillset", href: "#" },
  { name: "Partnered Job Board", href: "#" },
  { name: "Contact Us", href: "#" },
];

let navHtml = "";

navLinks.map((link, index) => {
  navHtml += `<li><a href=${link.href}>${link.name}</a></li>`;
});

navLinksEL.innerHTML = navHtml;
