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
      <h1 className="text-3xl font-bold mb-6">Ma liste de cadeaux de Noël (et d'anniversaire ihih)</h1>

      <CadeauDetail
        titre="Cours de poterie"
        image="/poterie.jpg"
        prix="170€"
        details="Ne peux pas être payé en ligne"
        lien="https://www.lacourdespotiers.fr/ateliers/atelier-tournage/"
      />
      
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

      <CadeauDetail
        titre="Massage en institut"
        image="/massage.jpeg"
        prix="50€"
        details="Destination bien-être : Paix des sens -> Modelage californien 45mn"
        lien="https://www.destinationbienetre.biz/liste-des-soins-et-tarifs"
      />

      <CadeauDetail
        titre="Pull Hello kitty"
        image="/hk.jpg"
        prix="29,99€"
        details="Magnifiqe pull hello kitty taille L !!!!"
        lien="https://www.undiz.com/fr/p/sweatshirt-sherpa-hello-kitty-655680573.html"
      />

      <CadeauDetail
        titre="Culotte Hello kitty"
        image="/hk2.jpg"
        prix="8,99€"
        details="Pour completer l'ensemble ihih,  taille L"
        lien="https://www.undiz.com/fr/p/culotte-coton-hello-kitty-655662673.html"
      />

      <CadeauDetail
        titre="Carte cadeau Aromazone"
        image="/carte2.jpg"
        prix="xx€"
        details="Autant que vous pouvez/voulez !! <3"
        lien="https://www.aroma-zone.com/content/carte-cadeau-aroma-zone"
      />

      <CadeauDetail
        titre="Ratelier pour lapin"
        image="/ratelier.jpg"
        prix="15,99€"
        details="Pour les pinous"
        lien="https://www.amazon.fr/MINGZE-R%C3%A2telier-Plateforme-Animaux-Domestiques/dp/B07PKPT38Q/ref=sr_1_47?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3BH1CDJXA4N3X&dib=eyJ2IjoiMSJ9.ifgAgrlwQ3GjeDmpCrdTzKLt60mW2Wla6EnkNc_V9XXlvJYt8GUpDs0o_CfvPF69upRc18EmNrJxpfr4X_qY9xG7rESvqrG5o4MzENl8eOT5qNzs8B_wxs6MJIVeTcDUMYtQjthY4usUTyouE7gC7ZSBUiuea_YLqbKxQeNUmLxxjF6FfFSoB5TQx6VjaTfo8CD5DM0l_tbxvmcQ8rkS_iXsHD8KhFmf_F5kCNdg78bfx30MqjvGcAsLygZVboN9SXnQdwiWTeffZAh6JJs_7YQWyjN3ngGsbGBZ1oAPsUs.fs_QctmvzCQpPhcmzsLGC_tGtGXvqNTZJ6m8h7VexAM&dib_tag=se&keywords=ratelier%2Blapin&qid=1763412092&refinements=p_85%3A20934937031&rnid=20934936031&rps=1&sprefix=ratelier%2Blapin%2Caps%2C191&sr=8-47&th=1"
      />

      <CadeauDetail
        titre="Carte cadeau Action ou Primark"
        image="/carte.jpg"
        prix="xx€"
        details="Autant que vous pouvez/voulez !! <3"
        lien="https://www.action.com/fr-fr/carte-cadeau/"
      />


      
      
    </div>
  );
}
