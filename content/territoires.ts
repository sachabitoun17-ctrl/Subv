// Pages territoriales de financement, servies sous /financements/<slug>.
//
// `body` est du HTML BRUT injecté via dangerouslySetInnerHTML : <a href>,
// jamais <Link>.
//
// RÈGLE DE SOURCING. Ces pages ne valent que si elles disent quelque chose de
// vrai et de propre au territoire. Les dispositifs nommés ici proviennent du
// portail PAPS Île-de-France et des cahiers des charges de l'ARS. On nomme les
// dispositifs et on décrit leur mécanique, qui est stable. On ne publie PAS
// les montants et plafonds, qui évoluent d'un exercice à l'autre et dont une
// valeur périmée décrédibiliserait le cabinet. Le montant courant s'apprécie
// au cas par cas, ce qui est précisément l'objet du check-up.
//
// Ne jamais créer une page territoriale sans matière réellement spécifique :
// huit pages départementales interchangeables seraient du contenu dupliqué,
// exactement le défaut corrigé sur les pages de typologie.

export type Territoire = {
  slug: string;
  /** Forme prépositionnelle, utilisée dans le H1 : "en Île-de-France". */
  nom: string;
  /** Libellé nu, pour les listes et le fil d'ariane : "Île-de-France". */
  court: string;
  type: "region" | "departement";
  /**
   * Date de mise en ligne, au format AAAA-MM-JJ. La page n'est generee et
   * n'entre au sitemap qu'a partir de cette date, comme les articles.
   * Publier neuf pages territoriales le meme jour sur un domaine recent est
   * un signal peu naturel : on etale.
   */
  datePublication: string;
  /** Numéro de département, absent pour une région. */
  code?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  body: string;
};

export const territoires: Territoire[] = [
  {
    slug: "ile-de-france",
    nom: "en Île-de-France",
    court: "Île-de-France",
    type: "region",
    datePublication: "2026-08-24",
    metaTitle: "Financer un centre de santé en Île-de-France",
    metaDescription:
      "Aides de l’ARS Île-de-France, contrats en zone d’intervention prioritaire et soutiens régionaux : les leviers accessibles à un centre de santé francilien.",
    keywords: [
      "financement centre de santé Île-de-France",
      "aide ARS Île-de-France centre de santé",
      "subvention centre de santé Paris",
      "contrat aide installation Île-de-France",
      "zone intervention prioritaire Île-de-France",
      "créer un centre de santé en Île-de-France",
      "aide investissement immobilier centre de santé",
    ],
    body: `
<h2>Une région dense, et pourtant sous tension</h2>
<p>L’Île-de-France concentre une part importante de l’offre de soins nationale, ce qui alimente l’idée qu’un centre de santé francilien n’aurait pas de difficulté d’accès aux soins à résoudre. La réalité du terrain est plus contrastée. La densité médicale y est très inégale d’une commune à l’autre, parfois d’un quartier à l’autre, et plusieurs territoires franciliens sont classés en zone d’intervention prioritaire au même titre que des zones rurales.</p>
<p>Cette situation a une conséquence directe et souvent ignorée : un centre de santé implanté en Île-de-France peut être éligible à des dispositifs que ses porteurs croient réservés aux déserts médicaux ruraux.</p>

<h2>Les aides propres à l’ARS Île-de-France</h2>
<p>L’agence régionale de santé structure son soutien par phase de vie du projet, avec un cahier des charges régional qui lui est propre. Aux différentes étapes, elle peut intervenir sur :</p>
<ul>
  <li><strong>L’étude de faisabilité</strong>, réalisée par un prestataire extérieur, couvrant le projet de santé collectif, sa déclinaison architecturale et les coûts d’amorçage et de fonctionnement.</li>
  <li><strong>La création immobilière</strong>, pour les travaux, sous réserve de conformité au cahier des charges régional et de conventionnement avec l’agence.</li>
  <li><strong>Le démarrage</strong>, qui peut couvrir le système d’information conforme aux référentiels nationaux, la formation des professionnels et l’équipement médical et collectif.</li>
  <li><strong>La pérennisation</strong>, avec le renouvellement du système d’information, une aide organisationnelle finançant une étude de viabilité économique, et un soutien à l’extension ou à la rénovation.</li>
</ul>
<p>Un point mérite l’attention des porteurs de projet : les plafonds de plusieurs de ces aides peuvent être relevés lorsque le centre s’implante en zone d’action complémentaire, en zone d’intervention prioritaire ou en quartier prioritaire de la politique de la ville. Le zonage n’est donc pas un détail administratif, il change le montant accessible.</p>

<h2>Ce que change l’accord national de 2025</h2>
<p>Un point est déterminant pour tout porteur de projet francilien, et il est encore mal connu. L’accord national des centres de santé signé le 28 août 2025, entré en vigueur le 1er octobre 2025, a <strong>mis fin à la possibilité d’adhérer aux contrats démographiques</strong> pour les centres médicaux et polyvalents.</p>
<p>Ces trois contrats structuraient jusque-là le soutien lié au zonage : le contrat d’aide à l’installation en zone d’intervention prioritaire, le contrat de stabilisation et de coordination pour les centres engagés dans une communauté professionnelle territoriale de santé ou une équipe de soins primaires, et le contrat de solidarité territoriale pour un centre situé hors zone prioritaire mettant un médecin salarié à disposition d’un centre implanté en zone sous dotée.</p>
<p>Ils sont remplacés par des <strong>valorisations démographiques automatiques</strong>, qui ne supposent plus de signer un contrat pour en bénéficier. Les contrats conclus avant le 1er octobre 2025 se poursuivent jusqu’à leur terme, et les contrats propres à l’activité dentaire sont maintenus.</p>
<p>La conséquence pratique est simple : un centre qui se crée aujourd’hui en Île-de-France ne doit plus construire son plan de financement sur ces contrats, mais vérifier ce que les valorisations automatiques lui apportent compte tenu de son zonage. Le raisonnement change, l’enjeu du zonage reste entier.</p>

<h2>La Région et les collectivités, second étage du financement</h2>
<p>L’agence régionale de santé n’est pas le seul financeur. La Région Île-de-France et les collectivités locales interviennent sur l’investissement immobilier, avec leurs propres critères et leurs propres calendriers. Un projet peut donc mobiliser plusieurs guichets, à condition de les instruire dans le bon ordre : un dossier déposé auprès d’un financeur peut conditionner la recevabilité d’un autre.</p>
<p>C’est une différence importante avec des régions moins denses, où le nombre d’interlocuteurs est plus réduit. En Île-de-France, la difficulté n’est pas l’absence de dispositifs, c’est leur articulation.</p>

<h2>Ce que ces aides ne couvrent pas</h2>
<p>Toutes ces aides portent sur le projet : l’étude, les murs, l’équipement, le démarrage. Elles ne financent pas le fonctionnement courant d’un centre en régime de croisière. Celui-ci repose sur les recettes d’activité et sur les <a href="/ressources/forfaits-structure-centre-de-sante">dispositifs forfaitaires</a> du cadre conventionnel, auxquels s’ajoutent les financements propres au statut de centre de santé conventionné, dont la <a href="/subvention-teulade">subvention Teulade</a>.</p>
<p>Un porteur de projet francilien qui n’aurait sécurisé que les aides d’investissement se retrouve donc exposé une fois le centre ouvert. Les deux étages se préparent ensemble, pas l’un après l’autre. Le panorama complet figure sur notre page <a href="/financements">financements</a>.</p>

<h2>Les erreurs fréquentes en Île-de-France</h2>
<p>La première consiste à supposer que la densité médicale francilienne ferme l’accès aux dispositifs de zone sous-dense, sans avoir vérifié le zonage précis de la commune d’implantation. La deuxième est de raisonner guichet par guichet, en ignorant que les calendriers de l’agence, de la Région et des collectivités ne coïncident pas. La troisième est de sous-estimer le coût immobilier francilien dans le plan de financement, et donc le besoin de <a href="/ressources/tresorerie-centre-de-sante">trésorerie de démarrage</a>, comme nous le détaillons dans notre article sur le <a href="/ressources/business-plan-centre-de-sante">business plan d’un centre de santé</a>.</p>

<h2>Comment nous intervenons</h2>
<p>Nous vérifions d’abord le zonage réel de votre implantation, puis nous établissons la liste des dispositifs auxquels votre centre peut prétendre compte tenu de sa typologie, de son statut gestionnaire et de son stade d’avancement. Nous construisons ensuite la séquence de dépôt, puis nous prenons en charge l’instruction des dossiers jusqu’à leur terme. Cette démarche s’inscrit dans nos missions de <a href="/services/subventions-et-financements">financement et subventions</a> et, pour les projets en création, d’appui au <a href="/services/dossier-ars">dossier ARS</a>.</p>
<p>Le détail de ces dispositifs est publié par le <a href="https://www.iledefrance.paps.sante.fr/laccompagnement-financier-des-centres-de-sante" rel="noopener">portail d’accompagnement des professionnels de santé d’Île-de-France</a>, qui fait autorité sur leur périmètre.</p>
<p>Les montants et les plafonds évoluent d’un exercice à l’autre et dépendent du zonage comme de la nature du projet. Nous ne les publions pas ici, parce qu’un chiffre périmé induit en erreur : ils s’apprécient au cas par cas, sur pièces.</p>

<h2>Contactez-nous</h2>
<p>Si votre centre est implanté ou se crée en Île-de-France, un check-up gratuit permet de vérifier votre zonage et d’identifier les dispositifs régionaux réellement mobilisables dans votre situation. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "paris",
    nom: "à Paris",
    court: "Paris",
    type: "departement",
    datePublication: "2026-08-24",
    code: "75",
    metaTitle: "Financements centre de santé à Paris",
    metaDescription:
      "Paris est le territoire le mieux doté en médecins généralistes. Pourquoi des dispositifs de soutien restent malgré tout accessibles aux centres parisiens.",
    keywords: ["financement centre de santé Paris","subvention centre de santé Paris","créer un centre de santé à Paris","aide ARS Paris centre de santé","centre de santé 75"],
    body: `
<h2>Le département le mieux doté, et ce que cela masque</h2>
<p>Paris affiche une densité de médecins généralistes très supérieure à la moyenne nationale, et près d’un tiers des généralistes franciliens y exercent. Sur le papier, la capitale n’a donc aucun problème d’accès aux soins, et beaucoup de porteurs de projet en concluent qu’aucun dispositif de soutien ne les concerne.</p>
<p>C’est une lecture trop rapide. La moyenne parisienne agrège des situations très différentes d’un arrondissement à l’autre, et le zonage régional ne raisonne pas à l’échelle du département mais à celle de territoires plus fins. Un centre parisien peut donc se trouver dans une zone identifiée comme insuffisamment couverte, alors même que le département est globalement bien pourvu.</p>

<h2>La vraie contrainte parisienne est immobilière</h2>
<p>Ce qui bloque un projet à Paris n’est presque jamais la patientèle, elle est disponible. C’est le coût des murs. Le prix au mètre carré transforme l’équation économique d’un centre de santé, dont le modèle repose sur des surfaces significatives : salles de consultation, accueil, attente, locaux techniques et administratifs.</p>
<p>Cette contrainte déplace le centre de gravité du plan de financement. Là où un projet de grande couronne arbitre entre acquisition et location, un projet parisien doit souvent construire son montage autour du poste immobilier lui-même, ce qui rend l’<strong>aide à la création immobilière</strong> et l’<strong>aide à l’investissement</strong> de l’agence régionale de santé et de la Région déterminantes plutôt que secondaires.</p>

<h2>Le turnover, second point de vigilance</h2>
<p>Un praticien parisien dispose d’un marché de l’emploi médical dense, donc d’alternatives immédiates. La conséquence est mécanique : la fidélisation pèse plus lourd à Paris qu’ailleurs, et un centre qui recrute bien peut voir ses postes tourner rapidement s’il ne travaille pas ses conditions d’exercice. C’est un sujet que nous traitons dans notre article sur la <a href="/ressources/fideliser-medecin-salarie-centre-de-sante">fidélisation d’un médecin salarié</a>.</p>

<h2>Les dispositifs à examiner pour un centre parisien</h2>
<p>Deux pistes méritent d’être vérifiées systématiquement. Le zonage précis de l’implantation, d’abord, qui conditionne le relèvement de certains plafonds d’aide et le niveau des valorisations démographiques. La présence éventuelle d’un quartier prioritaire de la politique de la ville à proximité immédiate, ensuite, qui joue sur les mêmes leviers.</p>
<p>Une précision s’impose ici, car elle invalide un raisonnement encore répandu. L’accord national des centres de santé entré en vigueur le 1er octobre 2025 a mis fin à l’adhésion aux contrats démographiques pour les centres médicaux et polyvalents, y compris au contrat de solidarité territoriale qui permettait à un centre bien doté de valoriser la mise à disposition d’un praticien. Ces contrats sont remplacés par des valorisations automatiques. Un projet parisien ne se construit donc plus autour de ce montage.</p>
<p>À cela s’ajoutent les financements qui ne dépendent pas du territoire : le cadre conventionnel, les <a href="/ressources/forfaits-structure-centre-de-sante">dispositifs forfaitaires</a> et, pour un centre conventionné, la <a href="/subvention-teulade">subvention Teulade</a>.</p>

<h2>Ce que nous vérifions pour un projet parisien</h2>
<p>Nous partons du zonage réel de l’adresse plutôt que de l’image du département, nous chiffrons le poids du poste immobilier dans le plan de financement, et nous établissons ce que les valorisations démographiques du nouvel accord national apportent à votre adresse. La suite relève de nos missions de <a href="/services/subventions-et-financements">financement et subventions</a>, et le cadre régional complet figure sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de vérifier le zonage exact de votre implantation parisienne et d’identifier les dispositifs réellement accessibles. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "hauts-de-seine",
    nom: "dans les Hauts-de-Seine",
    court: "Hauts-de-Seine",
    type: "departement",
    datePublication: "2026-08-24",
    code: "92",
    metaTitle: "Financements centre de santé Hauts-de-Seine",
    metaDescription:
      "Les Hauts-de-Seine se situent au-dessus de la moyenne nationale de densité médicale. Quels leviers restent accessibles à un centre de santé altoséquanais.",
    keywords: ["financement centre de santé Hauts-de-Seine","subvention centre de santé 92","créer un centre de santé Hauts-de-Seine","contrat solidarité territoriale","centre de santé Nanterre Boulogne"],
    body: `
<h2>Un département au-dessus de la moyenne, avec des poches</h2>
<p>Les Hauts-de-Seine se situent légèrement au-dessus de la moyenne nationale de densité en médecins généralistes, ce qui en fait l’un des départements franciliens les mieux pourvus après Paris. Cette position moyenne recouvre néanmoins des écarts réels entre le nord du département et le sud, et entre communes voisines.</p>
<p>Le zonage régional ne s’applique pas au département mais à des territoires plus fins. Un centre altoséquanais ne peut donc pas conclure de la réputation du 92 qu’il est hors de tout dispositif : la vérification se fait à l’adresse, pas au département.</p>

<h2>Le contrat de solidarité territoriale, levier central ici</h2>
<p>C’est le dispositif le plus pertinent pour un département bien doté, et le plus méconnu. Il concerne un centre médical ou polyvalent situé <strong>hors</strong> zone d’intervention prioritaire, qui met un praticien à disposition d’un territoire qui en manque, en contrepartie d’un soutien et d’une prise en charge des frais de déplacement.</p>
<p>Autrement dit, la bonne dotation des Hauts-de-Seine n’exclut pas du soutien public : elle oriente vers un autre mécanisme. Un centre du 92 proche de la Seine-Saint-Denis ou du Val-d’Oise est géographiquement bien placé pour ce type de montage.</p>

<h2>Un marché de l’emploi médical concurrentiel</h2>
<p>La densité a un revers pour les gestionnaires : les praticiens y ont le choix. Le département concentre des employeurs nombreux, publics comme privés, et un centre de santé y recrute en concurrence directe. La <a href="/ressources/salaire-medecin-salarie-centre-de-sante">grille de rémunération</a> compte, mais elle ne suffit pas à retenir dans un bassin où l’alternative est à quinze minutes.</p>
<p>Le sujet devient donc moins « comment obtenir une aide à l’installation » que « comment construire un poste que le praticien ne quittera pas ». C’est un axe de travail à part entière de nos missions de <a href="/services/recrutement-de-medecins">recrutement de médecins</a>.</p>

<h2>Les financements qui ne dépendent pas du zonage</h2>
<p>Un centre du 92 conserve un accès plein aux financements liés au statut et au conventionnement, indépendants de la densité locale : recettes conventionnelles, <a href="/ressources/forfaits-structure-centre-de-sante">dispositifs forfaitaires</a> assis sur les engagements d’organisation, <a href="/ressources/rosp-centre-de-sante">rémunération sur objectifs de santé publique</a>, et pour un centre conventionné la <a href="/subvention-teulade">subvention Teulade</a>. Pour beaucoup de structures altoséquanaises, c’est là que se trouve la marge réelle, davantage que dans les aides territorialisées.</p>

<h2>Ce que nous regardons dans le 92</h2>
<p>Nous vérifions le zonage à l’adresse, nous établissons ce que les valorisations démographiques du nouvel accord national apportent à votre situation, puis nous auditons les recettes conventionnelles, qui sont fréquemment sous-déclarées dans les centres bien installés. Le cadre régional complet est décrit sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de vérifier si votre centre des Hauts-de-Seine laisse de côté des recettes auxquelles il a droit. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "seine-saint-denis",
    nom: "en Seine-Saint-Denis",
    court: "Seine-Saint-Denis",
    type: "departement",
    datePublication: "2026-08-24",
    code: "93",
    metaTitle: "Financements centre de santé Seine-Saint-Denis",
    metaDescription:
      "Près de 98 % des habitants de Seine-Saint-Denis vivent en zone d’intervention prioritaire. C’est le département où le plus de dispositifs se cumulent.",
    keywords: ["financement centre de santé Seine-Saint-Denis","subvention centre de santé 93","zone intervention prioritaire Seine-Saint-Denis","créer un centre de santé Seine-Saint-Denis","contrat aide installation 93"],
    body: `
<h2>Le département où les dispositifs se cumulent le plus</h2>
<p>La Seine-Saint-Denis présente la densité de médecins généralistes la plus faible d’Île-de-France, très en dessous de la moyenne régionale comme nationale. La quasi-totalité de sa population, près de 98 %, réside en zone d’intervention prioritaire.</p>
<p>Pour un centre de santé, cette situation difficile a une contrepartie directe : c’est le département francilien où le plus grand nombre de dispositifs de soutien sont simultanément accessibles. Là où un porteur de projet parisien doit démontrer son éligibilité, un porteur séquano-dionysien part avec une présomption favorable qu’il lui reste à documenter.</p>

<h2>Le zonage ouvre les portes, y compris sur les plafonds</h2>
<p>L’implantation en zone d’intervention prioritaire ouvrait jusqu’ici l’accès au contrat d’aide à l’installation et au contrat de stabilisation et de coordination. L’accord national des centres de santé entré en vigueur le 1er octobre 2025 a mis fin à l’adhésion à ces contrats démographiques pour les centres médicaux et polyvalents, au profit de <strong>valorisations démographiques automatiques</strong> assises sur le zonage. Les contrats signés avant cette date se poursuivent jusqu’à leur terme.</p>
<p>Le zonage n’a donc rien perdu de son importance, il agit désormais sans passer par une signature. Pour un département où la quasi-totalité de la population relève d’une zone d’intervention prioritaire, cette bascule joue sur l’ensemble des centres, pas seulement sur les nouveaux projets.</p>
<p>Elle joue aussi sur les aides d’investissement : les plafonds de plusieurs dispositifs de l’agence régionale de santé peuvent être relevés en zone d’intervention prioritaire, en zone d’action complémentaire et en quartier prioritaire de la politique de la ville. Le département en concentre un nombre élevé, ce qui multiplie les situations où cette majoration s’applique.</p>

<h2>La difficulté n’est pas l’éligibilité, c’est le recrutement</h2>
<p>C’est le paradoxe séquano-dionysien. Les financements sont accessibles, mais le temps médical manque, et une valorisation assise sur un poste ne sert à rien si le poste reste vacant. Un centre qui coche toutes les cases du zonage sans parvenir à recruter n’a rien gagné.</p>
<p>La priorité opérationnelle se déplace donc vers l’attractivité : conditions d’exercice, décharge administrative, qualité du collectif, perspective offerte au praticien. Le département a par ailleurs enregistré l’une des plus fortes progressions franciliennes du nombre de généralistes sur la dernière décennie, ce qui montre que le mouvement n’est pas impossible. Nos missions de <a href="/services/recrutement-de-medecins">recrutement de médecins</a> et notre article sur la <a href="/ressources/fideliser-medecin-salarie-centre-de-sante">fidélisation</a> traitent ces deux volets.</p>

<h2>Les centres municipaux, acteurs majeurs du territoire</h2>
<p>La Seine-Saint-Denis compte une proportion importante de <a href="/centres-de-sante/municipal">centres municipaux de santé</a>, portés par des communes qui assument une part du déficit d’offre. Leur portage public change la donne : le budget s’inscrit dans celui de la collectivité, le circuit de décision passe par les instances délibérantes, et le personnel relève souvent de la fonction publique territoriale. Ces spécificités pèsent sur le calendrier des dossiers autant que sur leur contenu, comme nous le détaillons dans notre article sur le <a href="/ressources/centre-municipal-de-sante-financement">financement d’un centre municipal</a>.</p>

<h2>Ce que nous faisons dans le 93</h2>
<p>Nous établissons la liste complète des dispositifs cumulables compte tenu du zonage précis et de la présence éventuelle d’un quartier prioritaire, nous ordonnons les dépôts selon les calendriers de chaque financeur, puis nous instruisons les dossiers. Nous traitons en parallèle la question du recrutement, faute de quoi les financements obtenus resteraient théoriques. Le cadre régional est décrit sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet d’établir ce que votre centre de Seine-Saint-Denis peut cumuler, et ce qu’il n’a jamais demandé. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "val-de-marne",
    nom: "dans le Val-de-Marne",
    court: "Val-de-Marne",
    type: "departement",
    datePublication: "2026-08-24",
    code: "94",
    metaTitle: "Financements centre de santé Val-de-Marne",
    metaDescription:
      "Le Val-de-Marne résiste mieux que ses voisins au recul de la démographie médicale, sans atteindre la moyenne régionale. Leviers mobilisables pour un centre.",
    keywords: ["financement centre de santé Val-de-Marne","subvention centre de santé 94","créer un centre de santé Val-de-Marne","zonage médecins 94","centre de santé Créteil Vitry"],
    body: `
<h2>Un département qui résiste, sans être bien doté</h2>
<p>Le Val-de-Marne se situe en dessous de la moyenne régionale francilienne de densité en médecins généralistes, elle-même déjà nettement inférieure à la moyenne nationale. L’idée d’un département proche du niveau national ne résiste pas aux données de la démographie médicale.</p>
<p>Ce qui le distingue est ailleurs, et reste favorable : son recul du nombre de généralistes sur la dernière décennie est le plus limité d’Île-de-France après Paris. Aucun département francilien n’a gagné de praticiens sur la période, mais le Val-de-Marne en a perdu moins que ses voisins.</p>
<p>Cette position intermédiaire est la plus délicate à interpréter pour un porteur de projet. Le département n’est ni aussi dégradé que la Seine-Saint-Denis, ni pourvu comme Paris. La conséquence pratique est claire : ici plus qu’ailleurs, le zonage doit être vérifié commune par commune, parfois quartier par quartier, avant toute hypothèse de financement.</p>

<h2>Une géographie contrastée</h2>
<p>Le département juxtapose des communes denses de première couronne et des territoires plus résidentiels au sud-est. Les dynamiques de patientèle y diffèrent sensiblement, et deux projets distants de quelques kilomètres peuvent relever de zonages différents, donc de dispositifs différents.</p>
<p>Cette hétérogénéité rend l’étude d’implantation particulièrement rentable dans le 94. Elle détermine non seulement le niveau des valorisations démographiques et des plafonds d’aide, mais aussi les hypothèses de montée en charge du <a href="/ressources/business-plan-centre-de-sante">business plan</a>.</p>

<h2>Les dispositifs à examiner</h2>
<p>Le cadre a changé et il faut en tenir compte. L’accord national des centres de santé entré en vigueur le 1er octobre 2025 a mis fin à l’adhésion aux contrats démographiques pour les centres médicaux et polyvalents, contrat d’aide à l’installation, contrat de stabilisation et de coordination et contrat de solidarité territoriale compris. Ces dispositifs cèdent la place à des <strong>valorisations démographiques automatiques</strong>, déterminées par le zonage de l’implantation.</p>
<p>Pour un département aussi hétérogène, la conséquence est directe : ce qui se jouait autrefois par une signature se joue désormais par une adresse. La vérification du zonage commune par commune devient le premier acte du montage financier.</p>
<p>Les aides d’investissement de l’agence régionale de santé restent accessibles dans les deux cas, avec des plafonds susceptibles d’être relevés en quartier prioritaire de la politique de la ville, dont le département compte plusieurs.</p>

<h2>Ce que le recul limité implique</h2>
<p>Un département qui perd moins de praticiens que ses voisins reste un département qui en perd. La demande de soins n’y est donc pas moins forte qu’ailleurs, mais le contexte concurrentiel à l’embauche y est un peu moins tendu qu’en Seine-Saint-Denis. Pour un centre de santé, cela signifie qu’une hypothèse d’activité fondée sur le seul déficit d’offre est fragile : mieux vaut construire le projet sur une offre différenciée, l’amplitude horaire, le tiers payant intégral et la coordination des parcours, qui sont précisément ce que valorisent les <a href="/ressources/forfaits-structure-centre-de-sante">dispositifs forfaitaires</a>.</p>

<h2>Ce que nous regardons dans le 94</h2>
<p>Nous commençons par le zonage à l’adresse, qui n’est jamais déductible du département dans ce cas précis, puis nous confrontons les hypothèses d’activité à la réalité de la commune d’implantation. Nous établissons ensuite la combinaison de dispositifs pertinente et nous instruisons les dossiers, dans le cadre de nos missions de <a href="/services/subventions-et-financements">financement et subventions</a>. Le cadre régional est décrit sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de lever l’ambiguïté sur votre zonage val-de-marnais et d’identifier les dispositifs correspondants. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "seine-et-marne",
    nom: "en Seine-et-Marne",
    court: "Seine-et-Marne",
    type: "departement",
    datePublication: "2026-08-24",
    code: "77",
    metaTitle: "Financements centre de santé Seine-et-Marne",
    metaDescription:
      "Plus vaste département francilien, la Seine-et-Marne combine densité médicale inférieure à la moyenne régionale et fortes distances. Leviers mobilisables.",
    keywords: ["financement centre de santé Seine-et-Marne","subvention centre de santé 77","créer un centre de santé Seine-et-Marne","désert médical Seine-et-Marne","antenne centre de santé"],
    body: `
<h2>La grande couronne, moins dotée que l’image de la région</h2>
<p>La Seine-et-Marne fait partie des départements franciliens dont la densité de médecins généralistes est inférieure à la moyenne régionale, elle-même déjà en dessous de la moyenne nationale. L’image d’une Île-de-France sur-médicalisée ne s’applique donc pas ici.</p>
<p>À cette réalité s’ajoute une contrainte qui distingue nettement le 77 des départements de petite couronne : c’est le plus vaste des départements franciliens, et de très loin. La distance devient un paramètre du projet, ce qu’elle n’est jamais à Paris ou dans les Hauts-de-Seine.</p>

<h2>Ce que la superficie change concrètement</h2>
<p>Un centre de santé seine-et-marnais dessert un bassin géographiquement étendu, avec des temps de trajet réels pour les patients comme pour les professionnels. Trois conséquences en découlent.</p>
<ul>
  <li>La question de l’<strong>antenne</strong> se pose plus souvent qu’ailleurs : un site principal complété d’un ou plusieurs points de consultation secondaires. Les dispositifs d’aide de l’agence régionale de santé prévoient explicitement le soutien à la création d’antennes.</li>
  <li>Le recrutement doit intégrer le temps de trajet du praticien, qui pèse dans sa décision autant que la rémunération.</li>
  <li>Les hypothèses de patientèle du <a href="/ressources/business-plan-centre-de-sante">business plan</a> ne peuvent pas être calquées sur une commune dense : la zone de chalandise se raisonne en minutes, pas en kilomètres.</li>
</ul>

<h2>Un zonage largement favorable</h2>
<p>La faible densité du département se traduit par une présence étendue de zones d’intervention prioritaire, ce qui place la plupart des projets seine-et-marnais dans la configuration la plus favorable du zonage régional.</p>
<p>L’accord national des centres de santé entré en vigueur le 1er octobre 2025 a mis fin à l’adhésion aux contrats démographiques pour les centres médicaux et polyvalents, au profit de <strong>valorisations démographiques automatiques</strong> assises sur le zonage. Les contrats signés avant cette date se poursuivent jusqu’à leur terme. Le zonage détermine désormais le niveau de ces valorisations sans qu’une signature soit nécessaire, et il continue de commander le relèvement des plafonds d’aide à l’investissement.</p>
<p>Le zonage conditionne également le relèvement des plafonds de plusieurs aides d’investissement de l’agence. Pour un projet seine-et-marnais, la vérification du zonage n’est donc pas une formalité mais le point de départ du plan de financement.</p>

<h2>Les collectivités, partenaires fréquents</h2>
<p>Dans un département où le déficit d’offre est visible, les communes et intercommunalités sont souvent parties prenantes du projet, par la mise à disposition de locaux, une participation à l’investissement ou un portage direct. Cette implication ouvre l’accès à des soutiens locaux qui s’ajoutent aux dispositifs régionaux, mais elle allonge le circuit de décision. Nos articles sur les <a href="/ressources/aides-collectivites-centre-de-sante">aides des collectivités</a> et sur le <a href="/ressources/centre-municipal-de-sante-financement">financement d’un centre municipal</a> détaillent ces montages.</p>

<h2>Ce que nous regardons dans le 77</h2>
<p>Nous vérifions le zonage de l’implantation, nous examinons la pertinence d’un fonctionnement multi-sites au regard de la géographie du bassin, et nous articulons les soutiens régionaux avec ceux des collectivités impliquées. Le cadre régional complet figure sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de vérifier votre zonage seine-et-marnais et d’évaluer l’intérêt d’une organisation multi-sites. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "yvelines",
    nom: "dans les Yvelines",
    court: "Yvelines",
    type: "departement",
    datePublication: "2026-08-24",
    code: "78",
    metaTitle: "Financements centre de santé Yvelines",
    metaDescription:
      "Les Yvelines opposent un est urbain dense à un ouest rural. Cette fracture interne commande l’accès aux dispositifs de soutien d’un centre de santé.",
    keywords: ["financement centre de santé Yvelines","subvention centre de santé 78","créer un centre de santé Yvelines","zonage médecins Yvelines","centre de santé Versailles Mantes"],
    body: `
<h2>Un département coupé en deux</h2>
<p>Les Yvelines figurent parmi les départements franciliens dont la densité de médecins généralistes est inférieure à la moyenne régionale. Mais la moyenne départementale a ici encore moins de sens qu’ailleurs, parce que le territoire juxtapose deux réalités opposées.</p>
<p>À l’est, une frange urbaine dense et bien desservie, prolongement de l’agglomération parisienne. À l’ouest et au nord-ouest, des territoires ruraux ou semi-ruraux où l’accès au médecin relève de problématiques comparables à celles de départements très éloignés de Paris.</p>
<p>Pour un porteur de projet, cette fracture interne est l’information déterminante : deux projets yvelinois peuvent relever de zonages et de dispositifs entièrement différents.</p>

<h2>Ce que la fracture implique côté financement</h2>
<p>Dans les secteurs identifiés comme insuffisamment couverts, le zonage ouvre les <strong>valorisations démographiques</strong> du cadre conventionnel et permet le relèvement des plafonds de plusieurs aides d’investissement de l’agence régionale de santé.</p>
<p>L’accord national des centres de santé entré en vigueur le 1er octobre 2025 a mis fin à l’adhésion aux contrats démographiques pour les centres médicaux et polyvalents, au profit de <strong>valorisations démographiques automatiques</strong> assises sur le zonage. Les contrats signés avant cette date se poursuivent jusqu’à leur terme. Le contrat de solidarité territoriale, qui permettait à un centre bien doté de valoriser la mise à disposition d’un praticien auprès d’un territoire voisin, relève de cette même bascule et n’est plus ouvert aux nouvelles adhésions.</p>
<p>Pour un département coupé en deux, cela déplace l’enjeu sans le réduire : la position exacte de l’implantation sur la fracture est-ouest détermine directement ce que le centre percevra, mais elle le détermine par le zonage plutôt que par un montage contractuel.</p>

<h2>Le recrutement, deux marchés distincts</h2>
<p>Un centre de l’est yvelinois recrute en concurrence avec toute l’agglomération, un centre de l’ouest recrute sur un bassin restreint où le temps de trajet devient un critère décisif. Les leviers d’attractivité ne sont donc pas les mêmes : conditions d’exercice et perspectives d’un côté, organisation du temps de travail et stabilité de l’autre. Nos missions de <a href="/services/recrutement-de-medecins">recrutement de médecins</a> intègrent cette distinction, et notre article sur la <a href="/ressources/fideliser-medecin-salarie-centre-de-sante">fidélisation</a> traite du maintien dans la durée.</p>

<h2>Les financements indépendants du territoire</h2>
<p>Quelle que soit la zone, un centre yvelinois conserve l’accès aux financements liés au conventionnement et au statut : recettes d’activité, <a href="/ressources/forfaits-structure-centre-de-sante">dispositifs forfaitaires</a> assis sur les engagements d’organisation, et pour un centre conventionné la <a href="/subvention-teulade">subvention Teulade</a>. Ces recettes sont fréquemment sous-mobilisées, y compris dans des structures anciennes et bien installées.</p>

<h2>Ce que nous regardons dans le 78</h2>
<p>Nous déterminons de quel côté de la fracture départementale se situe votre implantation, ce qui oriente entièrement la stratégie de financement, puis nous établissons la combinaison de dispositifs correspondante. Le cadre régional est décrit sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de situer précisément votre projet yvelinois et d’identifier les leviers adaptés à son secteur. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "essonne",
    nom: "en Essonne",
    court: "Essonne",
    type: "departement",
    datePublication: "2026-08-24",
    code: "91",
    metaTitle: "Financements centre de santé Essonne",
    metaDescription:
      "L’Essonne oppose un nord urbain à un sud rural, avec une densité médicale sous la moyenne régionale. Dispositifs accessibles selon le secteur d’implantation.",
    keywords: ["financement centre de santé Essonne","subvention centre de santé 91","créer un centre de santé Essonne","zonage médecins Essonne","centre de santé Évry Massy Étampes"],
    body: `
<h2>Un gradient nord-sud marqué</h2>
<p>L’Essonne compte parmi les départements franciliens dont la densité de médecins généralistes est inférieure à la moyenne régionale. Sa particularité tient à l’organisation de son territoire selon un gradient net : un nord urbanisé et densément peuplé, prolongement de l’agglomération, et un sud nettement plus rural, où les communes sont petites et les distances réelles.</p>
<p>Cette structure produit deux marchés de la santé très différents à l’intérieur d’un même département, et donc deux stratégies de financement distinctes.</p>

<h2>Au nord, la concurrence, au sud, le déficit</h2>
<p>Dans le nord du département, un centre de santé s’insère dans un tissu d’offre existant. La question n’est pas tant l’absence de médecins que l’accessibilité réelle : délais de rendez-vous, pratique du tiers payant, amplitude horaire. Ce sont précisément les engagements que valorisent les <a href="/ressources/forfaits-structure-centre-de-sante">dispositifs forfaitaires</a> du cadre conventionnel, et ils constituent souvent le principal gisement de recettes pour ces structures.</p>
<p>Dans le sud, la problématique devient celle d’un accès aux soins dégradé, avec un zonage plus favorable qui ouvre les <strong>valorisations démographiques</strong> du cadre conventionnel et le relèvement des plafonds de certaines aides d’investissement.</p>
<p>L’accord national des centres de santé entré en vigueur le 1er octobre 2025 a mis fin à l’adhésion aux contrats démographiques pour les centres médicaux et polyvalents, au profit de <strong>valorisations démographiques automatiques</strong> assises sur le zonage. Les contrats signés avant cette date se poursuivent jusqu’à leur terme.</p>

<h2>Les quartiers prioritaires, un levier au nord</h2>
<p>Le nord de l’Essonne compte plusieurs quartiers prioritaires de la politique de la ville. Or ce classement joue sur le relèvement des plafonds de plusieurs aides de l’agence régionale de santé, indépendamment du zonage médical. Un centre implanté dans un secteur globalement bien doté en médecins peut donc bénéficier d’une majoration au titre de la politique de la ville. C’est une combinaison fréquemment ignorée par les porteurs de projet, qui raisonnent sur un seul zonage à la fois.</p>

<h2>La question du foncier et des collectivités</h2>
<p>Dans le sud essonnien, les communes disposent souvent de locaux mobilisables et sont demandeuses d’une offre de soins. Cette configuration ouvre des montages associant mise à disposition de locaux et participation à l’investissement, à articuler avec les soutiens régionaux. Nos articles sur les <a href="/ressources/aides-collectivites-centre-de-sante">aides des collectivités</a> et sur les <a href="/ressources/aides-installation-zone-sous-dense">aides à l’installation en zone sous-dense</a> détaillent ces leviers.</p>

<h2>Ce que nous regardons dans le 91</h2>
<p>Nous situons le projet sur le gradient départemental, nous croisons zonage médical et classement politique de la ville, ce que peu de dossiers font, puis nous construisons la séquence de dépôt auprès des différents financeurs. Le cadre régional figure sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de croiser les zonages applicables à votre implantation essonnienne et d’identifier les majorations possibles. Contactez-nous pour un check-up.</p>
`,
  },
  {
    slug: "val-d-oise",
    nom: "dans le Val-d’Oise",
    court: "Val-d’Oise",
    type: "departement",
    datePublication: "2026-08-24",
    code: "95",
    metaTitle: "Financements centre de santé Val-d’Oise",
    metaDescription:
      "Le Val-d’Oise cumule densité médicale sous la moyenne régionale, quartiers prioritaires à l’est et zones rurales au nord-ouest. Dispositifs mobilisables.",
    keywords: ["financement centre de santé Val-d’Oise","subvention centre de santé 95","créer un centre de santé Val-d’Oise","zonage médecins Val-d’Oise","centre de santé Cergy Sarcelles"],
    body: `
<h2>Trois territoires dans un seul département</h2>
<p>Le Val-d’Oise fait partie des départements franciliens dont la densité de médecins généralistes est inférieure à la moyenne régionale. Sa singularité tient à la coexistence de trois profils distincts sur un espace restreint.</p>
<ul>
  <li>Une frange est, limitrophe de la Seine-Saint-Denis, densément peuplée et comptant plusieurs quartiers prioritaires de la politique de la ville.</li>
  <li>Un pôle central structuré autour de l’agglomération de Cergy-Pontoise, urbain et en croissance.</li>
  <li>Un nord-ouest rural, aux communes petites et dispersées, où les problématiques d’accès aux soins rejoignent celles des départements ruraux.</li>
</ul>
<p>Aucune stratégie de financement unique ne convient à ces trois configurations.</p>

<h2>Le cumul des zonages, spécificité valdoisienne</h2>
<p>C’est le point le plus important pour un porteur de projet du 95, et le plus souvent manqué. Deux classements distincts coexistent et se cumulent : le zonage médical, qui identifie les territoires insuffisamment couverts, et le classement en quartier prioritaire de la politique de la ville, qui relève d’une logique urbaine et sociale.</p>
<p>Or plusieurs aides d’investissement de l’agence régionale de santé prévoient un relèvement de leur plafond au titre de l’un <em>ou</em> de l’autre. Une implantation à l’est du département peut donc relever simultanément des deux, ce qui change significativement le montage. Un dossier construit sur le seul zonage médical passe à côté de cette majoration.</p>

<h2>Les dispositifs selon le secteur</h2>
<p>Dans les secteurs identifiés comme insuffisamment couverts, à l’est comme dans le nord rural, le zonage ouvre les <strong>valorisations démographiques</strong> du cadre conventionnel et le relèvement des plafonds d’aide à l’investissement.</p>
<p>L’accord national des centres de santé entré en vigueur le 1er octobre 2025 a mis fin à l’adhésion aux contrats démographiques pour les centres médicaux et polyvalents, au profit de <strong>valorisations démographiques automatiques</strong> assises sur le zonage. Les contrats signés avant cette date se poursuivent jusqu’à leur terme. Le contrat de solidarité territoriale, qui aurait concerné le secteur mieux pourvu de Cergy-Pontoise, relève de la même bascule.</p>
<p>Pour un département aux trois profils, la lecture reste la même : ce que perçoit un centre dépend d’abord de l’adresse. Seul le mécanisme a changé, il s’applique désormais sans contrat à signer.</p>

<h2>Recruter dans le nord-ouest</h2>
<p>Le nord rural du département pose la difficulté de recrutement la plus aiguë. L’éloignement, l’isolement professionnel et l’absence de masse critique pèsent davantage que la rémunération dans la décision d’un praticien. Un centre y réussit rarement par le seul salaire : il réussit par l’organisation, le collectif et la décharge administrative, comme nous le développons dans notre article sur la <a href="/ressources/fideliser-medecin-salarie-centre-de-sante">fidélisation d’un médecin salarié</a>, en appui de nos missions de <a href="/services/recrutement-de-medecins">recrutement</a>.</p>

<h2>Ce que nous regardons dans le 95</h2>
<p>Nous croisons systématiquement le zonage médical et le classement politique de la ville, ce qui conditionne les majorations accessibles, puis nous adaptons la stratégie au secteur d’implantation. Nous instruisons ensuite les dossiers dans le cadre de nos missions de <a href="/services/subventions-et-financements">financement et subventions</a>. Le cadre régional est décrit sur notre page <a href="/financements/ile-de-france">financements en Île-de-France</a>.</p>

<h2>Contactez-nous</h2>
<p>Un check-up gratuit permet de vérifier si votre implantation valdoisienne ouvre droit à un cumul de majorations. Contactez-nous pour un check-up.</p>
`,
  },
];

// Territoires dont la date de mise en ligne est atteinte. Le site etant
// genere statiquement, la revelation suppose un build : le workflow Deploy
// tourne quotidiennement pour cette raison.
export function territoiresPublies(now: Date = new Date()): Territoire[] {
  const today = now.toISOString().slice(0, 10);
  return territoires.filter((t) => t.datePublication <= today);
}

export function getTerritoire(slug: string) {
  const t = territoires.find((x) => x.slug === slug);
  if (!t) return undefined;
  const today = new Date().toISOString().slice(0, 10);
  return t.datePublication <= today ? t : undefined;
}
