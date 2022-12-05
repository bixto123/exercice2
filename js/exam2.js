const header_btn = document.createElement(`button`);
header_btn.setAttribute(`id`, `btn-header`);
header_btn.textContent = `Créer un header`;

const main_btn = document.createElement(`button`);
main_btn.setAttribute(`id`, `btn-main`);
main_btn.textContent = `Créer un main`;

const footer_btn = document.createElement(`button`);
footer_btn.setAttribute(`id`, `btn-footer`);
footer_btn.textContent = `Créer un footer`;

const body = document.querySelector(`body`);
body.appendChild(header_btn);
body.appendChild(main_btn);
body.appendChild(footer_btn);

header_btn.onclick = event => {
  const header = document.createElement(`header`);
  header.textContent = `« header ici »`;
  body.replaceChild(header, header_btn);
}

main_btn.onclick = event => {
  const main = document.createElement(`main`);
  main.textContent = `« main ici »`;
  body.replaceChild(main, main_btn);
}

footer_btn.onclick = event => {
  const footer = document.createElement(`footer`);
  footer.textContent = `« footer ici »`;
  body.replaceChild(footer, footer_btn);
}