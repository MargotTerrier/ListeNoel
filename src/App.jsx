import React from "react";

// Composant simple : titre, image, prix
function CadeauSimple({ titre, image, prix }) {
  return (
    <div className="border rounded-2xl p-4 shadow mb-4 max-w-sm">
      <img src={image} alt={titre} className="rounded-xl mb-2 w-full" />
      <h2 className="text-xl font-bold mb-1">{titre}</h2>
      <p className="text-base">Prix : {prix}</p>
    </div>
  );
}

// Composant avec détails + lien
function CadeauDetail({ titre, image, prix, details, lien }) {
  return (
    <div className="border rounded-2xl p-4 shadow mb-4 max-w-sm">
      <img src={image} alt={titre} className="rounded-xl mb-2 w-full" />
      <h2 className="text-xl font-bold mb-1">{titre}</h2>
      <p className="text-base mb-1">Prix : {prix}</p>
      <p className="text-sm mb-2">{details}</p>
      <a href={lien} target="_blank" className="text-blue-600 underline text-sm">Voir le produit</a>
    </div>
  );
}

export default function App() {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">Ma liste de cadeaux de Noël</h1>

      <CadeauDetail
        titre="DLC ACNH Happy Home Paradise"
        image="/dlc.png"
        prix="18,74€"
        details="Peut être acheté sur ma switch directement"
        lien="https://store.nintendo.fr/fr/animal-crossing-new-horizons-happy-home-paradise-P00082?srsltid=AfmBOopH5zoc_fVJ1lPzSotcwHQvHlv7GkF73VpFXDTRJ9v_Iu5uVV44"
      />
    
      <CadeauDetail
        titre="Taie d'oreiller en soie"
        image="/coussin.jpeg"
        prix="23,21€"
        details="taille 65x65 en couleur blanc"
        lien="https://www.amazon.fr/doreiller-Oreiller-Certifi%C3%A9e-Oeko-TEX%C2%AE-Bienfaits/dp/B09BYSQ436/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1CTZ476DL5HMJ&dib=eyJ2IjoiMSJ9.4EqMRRj-AL8lujgMnYKGa-ixS21TkCaov61RAuLIMq1ow0m6Shh_Yre4gLiq5LmpF9JjhCPosAgu0XkJxzZg0wyHYIBVyWEHjkogZ7MU3mAY77pUaukM8a3C7x3xqPJShftE-jcoCqVVSepsw45hLwhzb2pZKecJYNjFLQVlo1jJN7JXTn-J-XP9jLCPa8Jy8BV8kLm19QEpWCzdjAy5W8opPVU7XDu_wBZektl_2ocodkROpY22fyNRSTgI5WdcdqX7ljERWZn_ruqk4Y3f5yUMuTt5BCNKojx_25MvlTw.9HTSHnNeu9wxijtZ_0vqsqSdrEeqcPVyKOvBi26d4NA&dib_tag=se&keywords=taie%2Bd%27oreiller%2Ben%2Bsoie&qid=1763394883&sprefix=taie%2Bd%27oreiller%2Ben%2Bsoie%2Caps%2C91&sr=8-6&th=1"
      />

      
    </div>
  );
}
