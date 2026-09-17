/* =========================================================
   ALL YOUR TEXT AND PHOTOS LIVE HERE — ONE FILE.
   Every style variant reads from this, so editing a title
   here changes it everywhere.

   src    — filename inside photos/
   title  — {en, fr}
   ratio  — height as % of width (62 = horizontal, 150 = vertical)
   size   — grid version only: w6 full row · w4 · w3 half · w2 third
   shape  — cinema version only: wide · mid · tall
   ========================================================= */

const UI = {
  strap:  { en:"Vieux-Québec after dark, plus landscapes and gardens around the province. Shot on a Sony a6400, edited by hand.",
            fr:"Le Vieux-Québec après la tombée du jour, avec des paysages et des jardins de la province. Photographié au Sony a6400, retouché à la main." },
  cue:    { en:"Scroll", fr:"Défiler" },
  about1: { en:"I shoot mostly on foot — walking a trail or a garden path until something lines up, then waiting for the light. Everything here is a single frame, edited but not built: exposure, colour and crop, nothing added that wasn't in front of the lens.",
            fr:"Je photographie surtout à pied — je marche un sentier ou une allée jusqu'à ce que quelque chose s'aligne, puis j'attends la lumière. Chaque image ici est une seule prise, retouchée mais pas construite : exposition, couleur et cadrage, rien ajouté qui n'était pas devant l'objectif." },
  about2: { en:"Prints and commissions are open. Email is the fastest way to reach me.",
            fr:"Impressions et mandats sont ouverts. Le courriel est le moyen le plus rapide de me joindre." },
  specs:  { body:{en:"Body",fr:"Boîtier"}, glass:{en:"Glass",fr:"Objectifs"}, edit:{en:"Edit",fr:"Retouche"}, based:{en:"Based",fr:"Basé"} },
  about:  { en:"About", fr:"À propos" },
  frames: { en:"frames", fr:"photos" },
  index:  { en:"Index", fr:"Index" },
  prev:   { en:"← Prev", fr:"← Préc." },
  next:   { en:"Next →", fr:"Suiv. →" },
  close:  { en:"Close ✕", fr:"Fermer ✕" }
};

const HERO = "photos/street-youville.jpg";

const SETS = [
  { id:"street", name:{en:"Street",fr:"Rue"}, note:{en:"Vieux-Québec, after dark",fr:"Vieux-Québec, à la nuit tombée"},
    photos:[
      {src:"street-undercastle2.jpg", title:{en:"Frontenac, looking up",fr:"Le Frontenac, vu d'en bas"}, exif:"30mm · ƒ2.5 · 1/50 · ISO 500", size:"w2", shape:"tall", ratio:150},
      {src:"street-street.jpg", title:{en:"Place d'Armes, blue hour",fr:"Place d'Armes, heure bleue"}, exif:"30mm · ƒ2.8 · 1/50 · ISO 400", size:"w2", shape:"tall", ratio:150},
      {src:"street-light.jpg", title:{en:"Lamp and empty chairs",fr:"Lampadaire et chaises vides"}, exif:"50mm · ƒ5 · 1/8 · ISO 6400", size:"w2", shape:"tall", ratio:150},
      {src:"street-street2.jpg", title:{en:"Popcorn shop, rue Sainte-Angèle",fr:"Boutique de popcorn, rue Sainte-Angèle"}, exif:"30mm · ƒ2 · 1/160 · ISO 1600", size:"w3", shape:"wide", ratio:62},
      {src:"street-flowers.jpg", title:{en:"Champlain over the beds",fr:"Champlain au-dessus des massifs"}, exif:"30mm · ƒ1.6 · 1/50 · ISO 200", size:"w3", shape:"mid", ratio:62},
      {src:"street-undercastle.jpg", title:{en:"Turret and cloud",fr:"Tourelle et nuage"}, exif:"30mm · ƒ4 · 1/4000 · ISO 100", size:"w3", shape:"mid", ratio:62},
      {src:"street-castle.jpg", title:{en:"The whole facade",fr:"La façade en entier"}, exif:"30mm · ƒ4.5 · 1/400 · ISO 100", size:"w3", shape:"wide", ratio:60}
    ]},
  { id:"landscape", name:{en:"Landscape",fr:"Paysage"}, note:{en:"Québec, on foot",fr:"Le Québec, à pied"},
    photos:[
      {src:"wild-mountains.jpg", title:{en:"Valley and falls",fr:"Vallée et chute"}, exif:"18mm · ƒ7.1 · 1/100 · ISO 100", size:"w6", shape:"wide", ratio:52},
      {src:"wild-mountains2.jpg", title:{en:"Rolling green",fr:"Vallons verts"}, exif:"33mm · ƒ4.5 · 1/800 · ISO 100", size:"w6", shape:"wide", ratio:52},
      {src:"wild-waterfall.jpg", title:{en:"Full spring melt",fr:"Fonte printanière"}, exif:"29mm · ƒ8 · 1/500 · ISO 100", size:"w2", shape:"tall", ratio:150},
      {src:"wild-mountainriver.jpg", title:{en:"River in the valley",fr:"Rivière dans la vallée"}, exif:"73mm · ƒ6.3 · 1/125 · ISO 100", size:"w2", shape:"tall", ratio:150},
      {src:"wild-fleuve.jpg", title:{en:"Driftwood shore",fr:"Rive de bois flotté"}, exif:"49mm · ƒ10 · 1/160 · ISO 100", size:"w2", shape:"tall", ratio:150},
      {src:"street-pole.jpg", title:{en:"Wires over the field",fr:"Fils au-dessus du champ"}, exif:"64mm · 1/100 · ISO 500", size:"w3", shape:"mid", ratio:62},
      {src:"wild-afarwaterfall.jpg", title:{en:"Falls, seen from across",fr:"Chute vue d'en face"}, exif:"135mm · ƒ5.6 · 1/250 · ISO 400", size:"w3", shape:"mid", ratio:62},
      {src:"wild-canynon.jpg", title:{en:"Worn stone",fr:"Roche usée"}, exif:"114mm · ƒ11 · 1/320 · ISO 100", size:"w3", shape:"tall", ratio:145},
      {src:"wild-watercloseup.jpg", title:{en:"Whitewater, close",fr:"Rapides, en gros plan"}, exif:"38mm · ƒ11 · 1/4000 · ISO 1000", size:"w3", shape:"wide", ratio:58}
    ]},
  { id:"gardens", name:{en:"Gardens",fr:"Jardins"}, note:{en:"Cultivated, still",fr:"Cultivés, immobiles"},
    photos:[
      {src:"wild-japanbuilding.jpg", title:{en:"Pavilion and lotus",fr:"Pavillon et lotus"}, exif:"30mm · ƒ11 · 1/160 · ISO 100", size:"w3", shape:"tall", ratio:145},
      {src:"wild-pond.jpg", title:{en:"Cascade, green water",fr:"Cascade, eau verte"}, exif:"30mm · ƒ2 · 1/500 · ISO 100", size:"w3", shape:"tall", ratio:145},
      {src:"wild-hobbit.jpg", title:{en:"Greenhouse in the trees",fr:"Serre parmi les arbres"}, exif:"35mm · ƒ6.3 · 1/80 · ISO 100", size:"w4", shape:"wide", ratio:62},
      {src:"wild-smallwaterfall.jpg", title:{en:"Low water, old pines",fr:"Eau basse, vieux pins"}, exif:"30mm · ƒ9 · 1/50 · ISO 125", size:"w2", shape:"tall", ratio:140},
      {src:"wild-pond2.jpg", title:{en:"Dock in shade",fr:"Quai à l'ombre"}, exif:"69mm · ƒ9 · 1/200 · ISO 100", size:"w3", shape:"mid", ratio:62},
      {src:"wild-wild.jpg", title:{en:"Rock garden, August",fr:"Jardin de rocaille, août"}, exif:"30mm · ƒ11 · 1/400 · ISO 100", size:"w3", shape:"tall", ratio:145}
    ]},
  { id:"wildlife", name:{en:"Wildlife",fr:"Faune"}, note:{en:"Long lens, longer patience",fr:"Long téléobjectif, plus longue patience"},
    photos:[
      {src:"wild-bird.jpg", title:{en:"Blue jay in the rain",fr:"Geai bleu sous la pluie"}, exif:"121mm · ƒ5.6 · 1/200 · ISO 640", size:"w3", shape:"wide", ratio:62},
      {src:"wild-dog.jpg", title:{en:"Evening watch",fr:"Garde du soir"}, exif:"135mm · ƒ5.6 · 1/250 · ISO 160", size:"w3", shape:"mid", ratio:62}
    ]}
];
