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
const cadeaux = [
    {
      titre: "Cours de poterie",
      image: "/poterie.jpg",
      prix: "170€",
      details: "Ne peux pas être payé en ligne",
      lien: "https://www.lacourdespotiers.fr/ateliers/atelier-tournage/",
    },
    {
      titre: "DLC ACNH Happy Home Paradise",
      image: "/dlc.png",
      prix: "18,74€",
      details: "Peut être acheté sur ma switch directement",
      lien: "https://store.nintendo.fr/fr/animal-crossing-new-horizons-happy-home-paradise-P00082?srsltid=AfmBOopH5zoc_fVJ1lPzSotcwHQvHlv7GkF73VpFXDTRJ9v_Iu5uVV44",
    },
    {
      titre: "Taie d'oreiller en soie",
      image: "/coussin.jpeg",
      prix: "23,21€",
      details: "taille 65x65 en couleur blanc",
      lien:
        "https://www.amazon.fr/doreiller-Oreiller-Certifi%C3%A9e-Oeko-TEX%C2%AE-Bienfaits/dp/B09BYSQ436/ref=sr_1_6",
    },
    {
      titre: "Pouff en jute multicolore",
      image: "/pouff.jpeg",
      prix: "49,90€",
      details: "Magnifique, dans ma maison de rêve j'en ai deux dans mon salon",
      lien: "https://www.leroymerlin.fr/produits/pouf-chindi-en-jute-raye-multicouleur-l-50-x-l-20-cm-92476697.html",
    },
    {
      titre: "Massage en institut",
      image: "/massage.jpeg",
      prix: "50€",
      details: "Destination bien-être : Paix des sens -> Modelage californien 45mn",
      lien: "https://www.destinationbienetre.biz/liste-des-soins-et-tarifs",
    },
    {
      titre: "Pull Hello kitty",
      image: "/hk.jpg",
      prix: "29,99€",
      details: "Magnifiqe pull hello kitty taille L !!!!",
      lien: "https://www.undiz.com/fr/p/sweatshirt-sherpa-hello-kitty-655680573.html",
    },
    {
      titre: "Coque Switch Hello kitty",
      image: "/hk3.jpg",
      prix: "23,99€",
      details: "Magnifiqe coque pour ma switch !!!",
      lien: "https://www.amazon.fr/Kuitmor-Protection-Switch-Lite-Antirayures/dp/B0DSKTN5FF/ref=sr_1_1",
    },
    {
      titre: "Carte cadeau Aromazone",
      image: "/carte2.jpg",
      prix: "xx€",
      details: "Autant que vous pouvez/voulez !! &lt;3",
      lien: "https://www.aroma-zone.com/content/carte-cadeau-aroma-zone",
    },
    {
      titre: "Ratelier pour lapin",
      image: "/ratelier.jpg",
      prix: "15,99€",
      details: "Pour les pinous",
      lien: "https://www.amazon.fr/MINGZE-R%C3%A2telier-Plateforme-Animaux-Domestiques/dp/B07PKPT38Q",
    },
    {
      titre: "Carte cadeau Action ou Primark",
      image: "/carte.jpg",
      prix: "xx€",
      details: "Autant que vous pouvez/voulez !! &lt;3",
      lien: "https://www.action.com/fr-fr/carte-cadeau/",
    }
  ];
  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">Ma liste de cadeaux de Noël (et d'anniversaire ihih)</h1>

   {cadeaux.map((c, idx) =>
          c.details || c.lien ? (
            <CadeauDetail key={c.titre + idx} {...c} />
          ) : (
            <CadeauSimple key={c.titre + idx} {...c} />
          )
        )}
      
    </div>
  );
}
