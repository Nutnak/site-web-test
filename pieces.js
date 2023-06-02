const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json()

for (let i = 0; i < pieces.length; i++) {

  const article = pieces[i];

  const pieceElement = document.createElement("article")

  const imageElement = document.createElement("img");
  imageElement.src = article.image;


  const nomElement = document.createElement("h2");
  nomElement.innerText = article.nom;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = article.description ?? "Pas de description pour le moment";

  const prixElement = document.createElement("p");
  prixElement.innerText = `Prix : ${article.prix}€ (${article.prix < 35 ? "€" : "€€€"})`;

  const categorieElement = document.createElement("p");
  categorieElement.innerText = article.categorie ?? 'Aucune categorie';

  const stockElement = document.createElement("p");
  stockElement.innerText = `Stock (${article.disponibilite ? "Disponible" : "Indisponible"})`;


  const sectionFiches = document.querySelector(".fiches");
  sectionFiches.appendChild(pieceElement)
  pieceElement.appendChild(imageElement);
  pieceElement.appendChild(nomElement);
  pieceElement.appendChild(prixElement);
  pieceElement.appendChild(categorieElement);
  pieceElement.appendChild(descriptionElement);
  pieceElement.appendChild(stockElement);
}

const boutonTrier = document.querySelector(".btn-trier")
boutonTrier.addEventListener("click", function () {
  const piecesOrdonees = Array.from(pieces);
  piecesOrdonees.sort(function(a, b){
    return a.prix - b.prix
  });
  console.log(piecesOrdonees);
});


const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
       return piece.prix <= 35;
   });
   console.log(piecesFiltrees);
  });

const boutonFiltreDescription = document.querySelector('.btn-filtrer-description');
boutonFiltreDescription.addEventListener('click', function() {
  const piecesFiltreesDescription = pieces.filter(function (piece) {
   if (piece.description == null) {

   } else {
    return piece.description;
   }});
  console.log(piecesFiltreesDescription);
});

const boutonPrixDecroissant = document.querySelector('.btn-filtrer-decroissant');
boutonPrixDecroissant.addEventListener('click', function() {
  const piecesPrixDecroissantes = pieces.sort(function (a, b) {
    return b.prix - a.prix;
  })
  console.log(piecesPrixDecroissantes);
})
