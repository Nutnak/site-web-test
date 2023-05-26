const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json()

for (let i = 0; i < pieces.length; i++) {

  const article = pieces[i];

  const imageElement = document.createElement("img");
  imageElement.src = article.image;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = article.description ?? "Pas de description pour le moment";

  const nomElement = document.createElement("h2");
  nomElement.innerText = article.nom;

  const prixElement = document.createElement("p");
  prixElement.innerText = `Prix : ${article.prix}€ (${article.prix < 35 ? "€" : "€€€"})`;


  const categorieElement = document.createElement("p");
  categorieElement.innerText = article.categorie ?? 'Aucune categorie';

  const stockElement = document.createElement("p");
  stockElement.innerText = `Stock (${article.disponibilite ? "Disponible" : "Indisponible"})`;


  const sectionFiches = document.querySelector(".fiches");
  sectionFiches.appendChild(imageElement);
  sectionFiches.appendChild(nomElement);
  sectionFiches.appendChild(prixElement);
  sectionFiches.appendChild(categorieElement);
  sectionFiches.appendChild(descriptionElement);
  sectionFiches.appendChild(stockElement);
}
