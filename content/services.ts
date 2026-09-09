export type Service = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  icon: string;
  pillar: "financement" | "structuration" | "developpement" | "accompagnement";
  pillars: { title: string; desc: string }[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /**
   * Corps éditorial de la page, en HTML BRUT injecté via
   * dangerouslySetInnerHTML. Utiliser <h2>, <p>, <ul>, <a href>, jamais <Link>.
   *
   * Sans lui, une page service se limite au hero et aux quatre encadrés, soit
   * moins de 200 mots, sur des requêtes commerciales disputées.
   */
  body?: string;
};

const ICONS = {
  euro: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h4v2h-4v2h4v2h-4c-.55 0-1 .45-1 1v1h5v2H8v-2h2v-1c0-2.21 1.79-4 4-4h-3V7z",
  building: "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
  user: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  chart: "M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-4h2v16h-2V5zm4 8h2v8h-2v-8zm4-4h2v12h-2V9z",
  grid: "M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z",
  megaphone: "M3 10v4l8 4V6L3 10zm12-3l3 1v8l-3 1v3l5-1V5l-5-1v3z",
  rocket: "M13 14l1.5-1.5L17 15l-1.5 1.5L13 14zM5 21l3-7 4 4-7 3zm14-9l-3-3 5-5 3 3-5 5zm-9.5-1.5L6 13l-1.5-1.5L8 8l1.5 2.5z",
  receipt: "M19 3l-1.5 1.5L16 3l-1.5 1.5L13 3l-1.5 1.5L10 3l-1.5 1.5L7 3 5.5 4.5 4 3v18l1.5-1.5L7 21l1.5-1.5L10 21l1.5-1.5L13 21l1.5-1.5L16 21l1.5-1.5L19 21V3z",
  document: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z",
  truck: "M20 8h-3V4H1v13h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19.5 9.5l1.96 2.5H17V9.5h2.5zM18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
  shield: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
  search: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z",
};

export const services: Service[] = [
  // ──────────── FINANCEMENT ────────────
  {
    slug: "subventions-et-financements",
    name: "Financement et subventions",
    short: "Identification et mobilisation des subventions publiques et conventionnelles.",
    hero: "Cartographie des dispositifs publics et conventionnels mobilisables par votre centre, montage des dossiers, suivi auprès des organismes financeurs.",
    icon: ICONS.euro,
    pillar: "financement",
    pillars: [
      { title: "Cartographie des dispositifs", desc: "Identification des financements auxquels votre centre peut prétendre, sur la base de votre situation et de votre territoire." },
      { title: "Montage des dossiers", desc: "Préparation, dépôt, relances : nous prenons en charge l’instruction complète." },
      { title: "Subvention Teulade", desc: "Dispositif spécifique aux centres de santé conventionnés." },
      { title: "Articulation des dispositifs", desc: "Mobilisation cohérente des différents leviers disponibles." },
    ],
    metaTitle: "Financement et subventions pour centres de santé",
    metaDescription: "Identification, montage et suivi des dossiers de subventions et financements pour votre centre de santé. On va chercher les aides que vous laissez de côté.",
    keywords: ["financement centre de santé", "subventions centre de santé", "subvention Teulade"],
    body: `<h2>Le problème concret que cette mission résout</h2>
<p>Un centre de santé vit de recettes qui n’ont ni le même rythme, ni le même interlocuteur, ni la même logique. L’activité de soins est facturée à l’assurance maladie et aux complémentaires. À côté existent des financements conventionnels liés à l’accord national, des dotations régionales, des aides de collectivités et des dispositifs propres aux centres de santé. Ces lignes ne tombent pas seules. Elles supposent d’être identifiées, demandées, justifiées, puis renouvelées. Dans la plupart des structures que nous rencontrons, une part de ces financements n’est jamais sollicitée, non par négligence mais parce que personne n’a le temps de faire la veille et de tenir les dossiers. C’est exactement le sujet traité dans notre article sur les <a href="/ressources/subventions-sous-mobilisees-centre-de-sante">subventions sous-mobilisées par les centres de santé</a>.</p>

<h2>Notre façon de procéder</h2>
<p>Nous commençons par cadrer votre situation réelle : statut juridique, conventionnement, spécialités présentes, territoire et zonage, appartenance éventuelle à une communauté professionnelle, engagements déjà signés. Ce cadrage détermine ce à quoi vous pouvez prétendre, car deux centres voisins n’ouvrent pas les mêmes droits. Nous confrontons ensuite cette cartographie à ce qui est réellement encaissé, ligne par ligne, afin de distinguer ce qui est perçu, ce qui est perçu partiellement et ce qui n’a jamais été demandé. Le livrable n’est pas un catalogue de dispositifs théoriques mais un plan de mobilisation ordonné, avec les fenêtres de dépôt et l’organisme à saisir pour chacun. Nous prenons ensuite en charge l’instruction complète : rédaction, pièces, dépôt, relances, réponses aux demandes complémentaires. La <a href="/subvention-teulade">subvention Teulade</a>, propre aux centres de santé conventionnés, fait partie des leviers que nous traitons directement avec vous dans ce cadre.</p>

<h2>Ce que vous avez à préparer</h2>
<p>La mission avance vite quand les documents de base sont disponibles dès le départ. Concrètement : les statuts et le règlement intérieur, le projet de santé en vigueur, l’acte d’autorisation ou le récépissé délivré par l’agence régionale de santé, les derniers comptes annuels et la balance analytique si vous en tenez une, les tableaux d’activité par praticien, les conventions signées avec l’assurance maladie, la collectivité ou d’autres partenaires, et les notifications de subventions passées. Les refus antérieurs sont souvent la pièce la plus instructive du lot : ils indiquent le motif exact qui a bloqué et qu’il faudra traiter autrement.</p>

<h2>Les erreurs fréquentes quand le dossier est monté en interne</h2>
<p>La première tient au calendrier : beaucoup de dispositifs se déposent dans une fenêtre courte, et un excellent dossier envoyé hors délai ne vaut rien. La deuxième est l’incohérence entre les pièces, quand le projet de santé décrit une organisation, les comptes en décrivent une autre et la demande en promet une troisième. Les instructeurs lisent l’ensemble. La troisième consiste à raisonner dispositif par dispositif, en oubliant qu’ils s’articulent et que certains se combinent mal. La quatrième, la plus coûteuse, est de croire qu’un financement obtenu est acquis : la plupart supposent un suivi, des justificatifs et un renouvellement, faute de quoi la ligne disparaît sans avertissement. Notre article sur <a href="/ressources/optimiser-financement-centre-de-sante">l’optimisation du financement d’un centre de santé</a> revient sur ces points de vigilance.</p>

<h2>Ce qui rend une situation simple ou complexe</h2>
<p>Une situation est simple quand le centre fonctionne depuis plusieurs exercices, que le conventionnement est en règle, que la comptabilité permet d’isoler les activités et qu’un interlocuteur unique peut décider côté centre. Elle se complique quand la structure est en création et ne dispose d’aucun historique, quand plusieurs sites relèvent d’un même gestionnaire, quand le portage est municipal et que le circuit de décision passe par des instances délibérantes, ou quand le centre traverse des difficultés et doit reconstituer des dossiers anciens. Aucun de ces cas n’est bloquant : ils changent l’ordre des priorités et le temps de traitement, pas la faisabilité.</p>

<h2>L’articulation avec nos autres missions</h2>
<p>Cette mission s’appuie presque toujours sur un <a href="/services/audit-financier">audit financier</a> préalable, qui fournit la base chiffrée sans laquelle une demande reste déclarative. Elle se prolonge dans la <a href="/services/comptabilite-gestion">comptabilité et la gestion</a>, puisqu’un financement obtenu doit ensuite être tracé, justifié et reconduit. L’ensemble des dispositifs que nous mobilisons est présenté sur notre page <a href="/financements">financements</a>, qui donne une vue d’ensemble des leviers accessibles aux centres de santé.</p>

<h2>Contactez-nous</h2>
<p>Si vous vous demandez ce que votre centre laisse de côté chaque année sans le savoir, la réponse se construit sur pièces, pas sur des généralités. Nous examinons votre situation, nous vous disons ce qui est mobilisable et ce qui ne l’est pas, et vous décidez ensuite. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "audit-financier",
    name: "Audit financier",
    short: "Diagnostic complet des recettes, charges et financements de votre centre.",
    hero: "Audit financier confidentiel : analyse des recettes, des charges et des financements mobilisés, identification du potentiel non exploité.",
    icon: ICONS.search,
    pillar: "financement",
    pillars: [
      { title: "Analyse des recettes", desc: "Actes, tiers payant, forfaits, financements conventionnels et publics." },
      { title: "Analyse des charges", desc: "Structure, rémunérations, charges sociales, immobilier." },
      { title: "Détection du potentiel", desc: "Dispositifs non mobilisés ou sous-optimisés." },
      { title: "Plan d’action chiffré", desc: "Priorisation, calendrier, gains attendus." },
    ],
    metaTitle: "Audit financier d’un centre de santé",
    metaDescription: "Audit financier confidentiel de votre centre de santé : recettes, charges, financements mobilisés et potentiel non réclamé. Une photo claire de votre situation.",
    keywords: ["audit financier centre de santé"],
    body: `<h2>Pourquoi un audit, alors que vous avez déjà un comptable</h2>
<p>Un expert-comptable produit des comptes justes. C’est son métier et ce n’est pas ce que nous faisons. Un audit financier de centre de santé répond à une autre question : compte tenu de votre activité réelle, de votre conventionnement et de votre territoire, votre niveau de recettes est-il celui que vous devriez atteindre. La comptabilité générale ne le dit pas, parce qu’elle enregistre ce qui est entré sans jamais signaler ce qui aurait pu entrer. Un centre peut présenter des comptes parfaitement tenus et laisser dormir des forfaits non déclarés, une cotation approximative, un tiers payant mal recouvré ou des dispositifs de financement jamais demandés. L’audit sert précisément à rendre visible cet écart.</p>

<h2>Ce que nous examinons</h2>
<p>Le travail porte d’abord sur les recettes. Nous reprenons la structure de la facturation, la répartition entre actes, forfaits et financements conventionnels, le comportement du tiers payant et le stock d’impayés. Nous regardons ensuite les charges : masse salariale et sa ventilation entre soignants et fonctions support, charges sociales, immobilier, contrats fournisseurs, informatique. Nous vérifions enfin l’état des financements déjà mobilisés et la cohérence de vos déclarations d’activité, notamment sur les indicateurs qui conditionnent des rémunérations complémentaires. Le sujet est développé dans notre article sur les <a href="/ressources/indicateurs-pilotage-centre-de-sante">indicateurs de pilotage d’un centre de santé</a>. L’objectif n’est pas de produire un rapport épais mais une photographie lisible et un plan d’action priorisé, où chaque action est rattachée à un responsable et à une échéance.</p>

<h2>Ce que vous avez à préparer</h2>
<p>Nous travaillons sur vos documents existants, sans mise en forme préalable. Il nous faut les comptes annuels des derniers exercices et la balance détaillée, les journaux de facturation ou les exports de votre logiciel métier, les relevés de paiement de l’assurance maladie, l’état des créances de tiers payant, les contrats de travail et la structure de rémunération des praticiens, les baux et principaux contrats fournisseurs, les statuts et le projet de santé, ainsi que les conventions et notifications de financement en cours. Tout est traité de manière confidentielle, y compris vis-à-vis de vos équipes si vous souhaitez que la mission reste au niveau de la direction.</p>

<h2>Les erreurs fréquentes dans les diagnostics internes</h2>
<p>La plus répandue consiste à regarder le résultat global et à conclure que tout va bien parce qu’il est positif. Un centre peut être à l’équilibre grâce à une subvention d’équilibre versée par son porteur et masquer un déficit d’exploitation structurel. La deuxième erreur est de ne pas ventiler par activité : quand le dentaire, le médical et le paramédical sont additionnés dans les mêmes comptes, une activité déficitaire reste invisible pendant des années. La troisième est de traiter la baisse de recettes comme un problème de volume alors qu’il s’agit souvent d’un problème de facturation, de cotation ou de recouvrement. La quatrième est de comparer son centre à des repères issus d’autres modèles, libéraux ou hospitaliers, dont la structure de charges n’a rien à voir.</p>

<h2>Ce qui rend l’audit simple ou complexe</h2>
<p>La mission est rapide quand le centre est mono-site, que la comptabilité est déjà analytique et que les exports du logiciel métier sont exploitables. Elle demande plus de travail quand plusieurs sites ou plusieurs activités sont consolidés dans une même entité, quand le centre a changé de gestionnaire ou de logiciel en cours de période, quand la structure de rémunération mêle salaire fixe et parts variables mal documentées, ou quand le centre est en tension de trésorerie et que l’urgence impose de trier immédiatement ce qui produit un effet à court terme. Ce dernier cas relève souvent d’une logique de <a href="/ressources/reprise-centre-de-sante-difficulte">reprise de centre en difficulté</a>, où l’audit devient la première étape d’un redressement.</p>

<h2>Ce qui se passe après le rapport</h2>
<p>Un audit qui reste dans un tiroir n’a servi à rien. Les conclusions ouvrent en général sur deux suites naturelles. La première est la mobilisation des financements identifiés, que nous prenons en charge dans notre mission <a href="/services/subventions-et-financements">financement et subventions</a>, avec les dispositifs recensés sur notre page <a href="/financements">financements</a>. La seconde est la mise en place d’un suivi durable, à travers la <a href="/services/comptabilite-gestion">comptabilité et la gestion</a>, pour que les écarts détectés ne se reconstituent pas silencieusement.</p>

<h2>Contactez-nous</h2>
<p>Un audit ne s’engage pas à l’aveugle. Un premier échange sert à comprendre votre structure et ce que vous cherchez à vérifier, puis nous vous disons si la mission a du sens dans votre situation. Contactez-nous pour un check-up.</p>`,
  },

  // ──────────── STRUCTURATION ────────────
  {
    slug: "creation-centre-de-sante",
    name: "Création de centre de santé",
    short: "De l’étude de faisabilité à l’ouverture du centre.",
    hero: "Accompagnement complet à la création d’un centre de santé : étude territoriale, statut juridique, projet de santé, dossier ARS, plan de financement.",
    icon: ICONS.building,
    pillar: "structuration",
    pillars: [
      { title: "Étude de faisabilité", desc: "Diagnostic territorial, zonage ARS, modélisation économique." },
      { title: "Constitution juridique", desc: "Choix du statut (association, SCIC, SCM, mutualiste, public), formalités." },
      { title: "Projet de santé", desc: "Rédaction du document clé attendu par l’ARS." },
      { title: "Dossier ARS", desc: "Constitution du dossier d’ouverture et échanges avec l’agence." },
      { title: "Plan de financement", desc: "Recettes prévisionnelles, identification des aides mobilisables." },
    ],
    metaTitle: "Création de centre de santé",
    metaDescription: "Accompagnement à la création d’un centre de santé : faisabilité, statuts, projet de santé, dossier ARS, financement.",
    keywords: ["créer un centre de santé", "ouvrir un centre de santé", "projet de santé"],
    body: `<h2>Le vrai obstacle n’est pas l’idée, c’est la mise en cohérence</h2>
<p>La plupart des porteurs de projet savent quelle offre de soins ils veulent proposer et sur quel territoire. Les difficultés apparaissent plus tard, quand les briques ne s’emboîtent pas. Le statut juridique retenu ne permet pas de porter le modèle économique envisagé. Le projet de santé décrit une organisation que l’équipe réellement recrutable ne pourra pas tenir. Le plan de financement ne fonctionne que si des recettes conventionnelles arrivent dès les premiers mois, ce qui suppose un conventionnement effectif et une facturation propre. Un centre de santé n’est pas un cabinet de groupe avec des praticiens salariés. C’est une structure portée par un gestionnaire dont le statut est encadré, dont l’équilibre repose autant sur les financements structurels que sur l’activité facturée. Notre rôle consiste à rendre ces éléments compatibles avant que les décisions deviennent difficiles à reprendre.</p>

<h2>Comment nous procédons</h2>
<p>Nous commençons par le territoire et par les données réelles du projet, pas par les statuts. Densité de l’offre existante, zonage, structures déjà implantées, flux de patientèle attendus, capacité de recrutement locale : ces éléments déterminent le dimensionnement, donc le budget. Vient ensuite le choix du gestionnaire, selon qui porte le projet et ce qu’il veut pouvoir faire ensuite. Le sujet est plus structurant qu’il n’y paraît, et nous le détaillons dans notre article sur le <a href="/ressources/statut-juridique-centre-de-sante">statut juridique d’un centre de santé</a>. Nous rédigeons ensuite le projet de santé, construisons le plan de financement pluriannuel, puis montons le <a href="/services/dossier-ars">dossier ARS</a> jusqu’à la décision de l’agence. Chaque étape produit un livrable utilisable tel quel, pas une note de synthèse.</p>

<h2>Ce que vous devez préparer de votre côté</h2>
<p>Un accompagnement avance vite quand le porteur arrive avec quelques éléments simples. Qui porte juridiquement le projet et avec quelle capacité d’engagement financier. Quel local est envisagé, à quel loyer, avec quelles contraintes d’accessibilité et de travaux. Quelles professions vous visez et dans quel ordre elles ouvriront. Quelles pistes de recrutement existent déjà, même informelles. Enfin, quelle trésorerie de démarrage est disponible pour couvrir la période qui sépare l’ouverture des premiers encaissements. Cette question du besoin de financement initial est traitée dans notre article sur le <a href="/ressources/cout-creation-centre-de-sante">coût de création d’un centre de santé</a>. Si ces réponses sont encore floues, ce n’est pas bloquant : c’est ce que l’étude de faisabilité sert à trancher.</p>

<h2>Les erreurs fréquentes quand on avance seul</h2>
<p>Trois reviennent constamment. La première consiste à écrire un projet de santé qui décrit des intentions au lieu de décrire une organisation vérifiable. L’agence attend des modalités concrètes de coordination, d’accès aux soins et de continuité, pas une déclaration de valeurs. La deuxième est de bâtir un prévisionnel sur une file active théorique, sans tenir compte du temps de montée en charge ni du délai d’installation des circuits de facturation. La troisième est de traiter les financements comme un sujet postérieur à l’ouverture, alors que plusieurs dispositifs se préparent en amont et se perdent une fois la structure lancée. Une partie de ces leviers reste largement inexploitée, comme le montre notre analyse des <a href="/ressources/subventions-sous-mobilisees-centre-de-sante">subventions sous mobilisées par les centres de santé</a>.</p>

<h2>Ce qui rend un projet simple ou complexe</h2>
<p>Un projet est simple quand le gestionnaire existe déjà, quand le local est identifié, quand l’activité est mono professionnelle et quand le territoire est clairement sous doté. Il devient complexe dès qu’il faut créer la structure gestionnaire de toutes pièces, arbitrer entre plusieurs collectivités partenaires, articuler un centre <a href="/centres-de-sante/pluriprofessionnel">pluriprofessionnel</a> avec des acteurs libéraux déjà installés, ou reprendre une activité existante en difficulté. La complexité vient rarement du soin. Elle vient de la gouvernance, du foncier et du calendrier de financement, trois sujets qui se décident tôt et se corrigent mal.</p>

<h2>L’articulation avec nos autres missions</h2>
<p>La création n’est jamais isolée. Le plan de financement s’appuie sur notre travail de <a href="/services/subventions-et-financements">subventions et financements</a>, qui inclut la subvention Teulade prévue à l’article L162-32 du code de la sécurité sociale, traitée dans le cadre d’une intervention dédiée du cabinet. Le recrutement des praticiens démarre souvent avant l’ouverture et relève de notre mission de <a href="/services/recrutement-de-medecins">recrutement de médecins</a>. Une fois le centre ouvert, la comptabilité et le pilotage prennent le relais. Pour situer votre projet, nos pages consacrées aux <a href="/centres-de-sante">types de centres de santé</a> détaillent les spécificités de chaque modèle.</p>

<h2>Contactez-nous</h2>
<p>Que votre projet en soit au stade de l’intuition ou du dépôt imminent, un regard extérieur sur la faisabilité, le statut et le financement évite des arbitrages coûteux. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "dossier-ars",
    name: "Dossier ARS",
    short: "Élaboration, dépôt et suivi des dossiers auprès de l’ARS.",
    hero: "Accompagnement pour le montage et le suivi des dossiers ARS : ouvertures, renouvellements, financements, mise en conformité.",
    icon: ICONS.document,
    pillar: "structuration",
    pillars: [
      { title: "Diagnostic des attendus", desc: "Lecture des appels à projets et critères de l’ARS concernée." },
      { title: "Rédaction du dossier", desc: "Projet structuré, indicateurs, budget, gouvernance." },
      { title: "Annexes financières", desc: "Plan de financement et articulation avec les autres dispositifs." },
      { title: "Dépôt et suivi", desc: "Suivi administratif jusqu’à la décision." },
      { title: "Reporting post-octroi", desc: "Bilans intermédiaires et finaux attendus par l’ARS." },
    ],
    metaTitle: "Monter un dossier ARS pour un centre de santé",
    metaDescription: "Montage de dossier ARS clé en main pour votre centre de santé : rédaction, annexes financières, dépôt et suivi jusqu'à la validation. On s'occupe de tout.",
    keywords: ["dossier ARS centre de santé", "appel à projets ARS"],
    body: `<h2>Un dossier ARS ne se juge pas sur l’intention</h2>
<p>Beaucoup de dossiers refusés ou renvoyés pour complément ne sont pas de mauvais projets. Ce sont des projets solides mais mal démontrés. L’agence instruit un document, pas une conviction. Elle vérifie que le besoin de santé est objectivé sur le territoire, que la réponse proposée est correctement dimensionnée, que la gouvernance est identifiée, que le budget tient et que des indicateurs permettront de mesurer ce qui aura été fait. Un directeur qui connaît parfaitement son centre écrit souvent un dossier implicite : il décrit ce qui va de soi pour lui et laisse à l’instructeur le soin de reconstituer le raisonnement. C’est exactement ce que l’instruction ne fera pas à sa place.</p>

<h2>Lire l’attendu avant d’écrire la première ligne</h2>
<p>Les attendus varient d’une région à l’autre et d’un dispositif à l’autre. Un appel à projets régional, une demande de financement au titre du fonds d’intervention régional et une demande d’ouverture ne se rédigent ni avec le même plan, ni avec les mêmes pièces. Nous commençons donc par cadrer précisément le dispositif visé, ses critères de sélection, ses pièces obligatoires et son calendrier, avant toute rédaction. Notre article sur le <a href="/ressources/fonds-intervention-regional-centre-de-sante">fonds d’intervention régional</a> détaille la logique de ces financements, et celui sur le <a href="/ressources/role-ars-centre-de-sante">rôle de l’ARS auprès des centres de santé</a> replace l’agence dans l’ensemble de ses missions, de l’autorisation au contrôle.</p>

<h2>Comment nous construisons le dossier</h2>
<p>Nous partons de vos données réelles : activité, patientèle, effectifs, comptes, projet médical. Nous en tirons un diagnostic écrit qui sert de socle argumentaire, puis nous rédigeons le corps du dossier autour d’une hypothèse claire, avec des objectifs formulés de façon mesurable et un calendrier de mise en œuvre réaliste. Les annexes financières sont construites en cohérence avec vos comptes, sans double compte entre dispositifs, point de vigilance récurrent des instructeurs. Nous préparons également les réponses aux questions prévisibles, car la phase d’échange avec l’agence pèse souvent autant que le document initial. Le dossier reste le vôtre : nous rédigeons, vous validez, et vous restez l’interlocuteur de l’agence.</p>

<h2>Ce que nous attendons de vous</h2>
<p>Un dossier solide a besoin de matière. Derniers comptes annuels et budget en cours, statuts et composition des instances, tableau des effectifs par profession, données d’activité disponibles, conventions et partenariats existants, courriers antérieurs échangés avec l’agence. Il nous faut aussi un interlocuteur unique capable de valider les arbitrages rapidement, car les fenêtres de dépôt sont courtes. La qualité du dossier dépend moins du temps que vous y consacrez que de la fiabilité des données que vous fournissez.</p>

<h2>Les erreurs qui coûtent un dossier</h2>
<p>Déposer hors calendrier, sur un dispositif dont le guichet est déjà fermé. Recycler un dossier écrit pour une autre région ou pour un autre financeur. Annoncer des objectifs invérifiables, sans indicateur ni source de données permettant de les suivre. Présenter un budget dont le reste à charge n’est pas couvert, ou dont les recettes conventionnelles sont surestimées. Décrire une organisation que le projet de santé en vigueur ne mentionne nulle part, ce qui met immédiatement en évidence une incohérence documentaire. Oublier enfin que la décision n’est pas la fin du dossier : les bilans intermédiaires et finaux conditionnent la suite de la relation avec l’agence et, très souvent, les renouvellements. Un dossier bien suivi après octroi vaut mieux qu’un dossier brillant abandonné en cours d’instruction.</p>

<h2>Situations simples et situations sensibles</h2>
<p>Le montage est simple quand le centre est déjà ouvert, conventionné, doté de comptes à jour, et que la demande porte sur un dispositif bien identifié. Il devient sensible quand la structure sort d’une période déficitaire, quand la gouvernance a changé récemment, quand plusieurs financeurs interviennent en parallèle, ou quand le dossier accompagne une <a href="/services/creation-centre-de-sante">création de centre de santé</a> encore en cours de constitution juridique. Dans ces cas, l’ordre des démarches compte autant que leur contenu. Nous articulons alors le dossier avec la mise à niveau documentaire prévue dans notre mission de <a href="/services/conformite-projet-de-sante">conformité et projet de santé</a>, et avec la recherche de <a href="/financements">financements mobilisables</a>, dont la subvention Teulade prévue à l’article L162-32 du code de la sécurité sociale, que nous traitons dans le cadre d’une intervention spécifique du cabinet.</p>

<h2>Contactez-nous</h2>
<p>Avant de déposer, faites relire le cadrage, les annexes financières et le calendrier par un regard habitué aux instructions régionales. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "conformite-projet-de-sante",
    name: "Conformité et projet de santé",
    short: "Renouvellement du projet de santé, préparation aux visites ARS.",
    hero: "Mise à jour du projet de santé, accompagnement aux visites ARS, préparation aux contrôles, conformité réglementaire et RGPD.",
    icon: ICONS.shield,
    pillar: "structuration",
    pillars: [
      { title: "Audit conformité", desc: "Revue documentaire et organisationnelle." },
      { title: "Projet de santé", desc: "Rédaction et mise à jour selon les attendus ARS." },
      { title: "Préparation aux visites", desc: "Coaching, dossier de visite, simulation." },
      { title: "RGPD et règlement intérieur", desc: "Politiques internes attendues." },
    ],
    metaTitle: "Conformité et projet de santé",
    metaDescription: "Mise en conformité et renouvellement du projet de santé, préparation à la visite ARS. On sécurise la conformité réglementaire de votre centre de santé.",
    keywords: ["projet de santé", "visite ARS", "conformité centre de santé"],
    body: `<h2>La conformité se joue longtemps avant la visite</h2>
<p>Un contrôle ou une visite de l’agence régionale de santé ne se prépare pas en quinze jours. Ce qui est examiné, ce sont des pratiques installées et leur trace écrite : la manière dont la coordination entre professionnels est organisée, la façon dont l’accès aux soins non programmés est assuré, le traitement des données de santé, la gestion des événements indésirables, la tenue du dossier patient, l’affichage des tarifs et du tiers payant. Un centre peut très bien fonctionner au quotidien et ne rien pouvoir démontrer, faute d’avoir formalisé ce qu’il fait. C’est la situation la plus fréquente, et c’est aussi la plus simple à corriger quand on s’y prend en amont.</p>

<h2>Le projet de santé est un document vivant, pas une formalité</h2>
<p>Le projet de santé engage la structure. Il décrit l’organisation réelle, la patientèle visée, les modalités de continuité et de coordination, les partenariats du territoire. Quand il date de l’ouverture et que le centre a depuis changé de spécialités, d’équipe ou d’horaires, l’écart entre le document et la réalité devient lui-même un motif d’observation. Nous le reprenons donc à partir de l’existant, pas d’un modèle. Notre article sur le <a href="/ressources/projet-de-sante-centre-de-sante">projet de santé d’un centre de santé</a> détaille les rubriques attendues et la logique du document.</p>

<h2>Notre déroulé de mission</h2>
<p>Nous procédons en trois temps. Un audit d’abord, documentaire et organisationnel, qui confronte ce que vous écrivez à ce que vous faites et produit une liste d’écarts hiérarchisés par niveau de risque. Une phase de mise à niveau ensuite : réécriture ou actualisation du projet de santé, règlement intérieur, registre des traitements et politique de protection des données, procédures d’accueil, de continuité et de signalement, formalisation des réunions de coordination. Une préparation enfin, avec constitution du dossier de visite, répartition des rôles dans l’équipe et mise en situation sur les questions habituellement posées. L’objectif n’est pas de produire un classeur pour l’occasion, mais de laisser une organisation documentée que le centre pourra tenir seul.</p>

<h2>Ce que vous devez rassembler</h2>
<p>Statuts et composition des instances, projet de santé en vigueur et ses éventuels avenants, règlement intérieur, contrats de travail et diplômes des professionnels, conventions et partenariats, protocoles existants, comptes rendus de réunions d’équipe, documents d’information remis aux patients, éléments relatifs au système d’information et aux droits d’accès. Ce dernier point est souvent le moins documenté, alors qu’il concentre une part importante des obligations. Notre article sur le <a href="/ressources/systeme-information-centre-de-sante">système d’information d’un centre de santé</a> explique pourquoi il mérite une attention particulière.</p>

<h2>Les angles morts les plus fréquents</h2>
<p>La coordination pratiquée mais jamais tracée, faute de compte rendu. Les protocoles écrits une fois puis jamais relus, qui décrivent une organisation disparue. Le registre des traitements absent ou incomplet, alors que le centre manipule des données de santé au quotidien. Les habilitations informatiques laissées ouvertes après le départ d’un salarié. L’absence de dispositif clair de recueil des réclamations et des événements indésirables. Enfin, la confusion entre qualité et conformité : la démarche qualité, que nous abordons dans notre article sur la <a href="/ressources/qualite-centre-de-sante">qualité en centre de santé</a>, complète la conformité réglementaire mais ne s’y substitue pas.</p>

<h2>Ce qui rend la mise en conformité rapide ou lourde</h2>
<p>Elle est rapide quand le centre est mono professionnel, stable en effectif, avec un projet de santé récent et une direction qui décide vite. Elle devient lourde quand plusieurs sites relèvent d’un même gestionnaire avec des pratiques divergentes, quand l’équipe a beaucoup tourné, quand la structure sort d’une reprise ou d’une <a href="/ressources/fusion-centres-de-sante">fusion de centres de santé</a>, ou quand une observation antérieure de l’agence n’a jamais été levée. Dans ce dernier cas, le sujet n’est plus seulement documentaire : il faut démontrer une correction effective et durable.</p>

<h2>Contactez-nous</h2>
<p>Cette mission s’articule naturellement avec le montage d’un <a href="/services/dossier-ars">dossier ARS</a>, qui suppose des pièces à jour, et avec notre travail de <a href="/services/conseil-en-organisation">conseil en organisation</a> lorsque les écarts constatés tiennent au fonctionnement plus qu’aux documents. Contactez-nous pour un check-up.</p>`,
  },

  // ──────────── DÉVELOPPEMENT ────────────
  {
    slug: "developpement",
    name: "Développement et antennes",
    short: "Faire grandir un centre déjà en activité.",
    hero: "Accompagnement au développement : élargissement de l’offre de soins, ouverture d’antennes, structuration multi-sites, montée en charge financière.",
    icon: ICONS.rocket,
    pillar: "developpement",
    pillars: [
      { title: "Diagnostic stratégique", desc: "Analyse de la patientèle, des recettes, des marges de progression." },
      { title: "Élargissement de l’offre", desc: "Nouvelles spécialités, paramédical, télémédecine." },
      { title: "Ouverture d’antennes", desc: "Étude d’opportunité, structuration multi-sites, mutualisation." },
      { title: "Montée en charge financière", desc: "Articulation des financements existants et nouveaux." },
    ],
    metaTitle: "Développer un centre de santé",
    metaDescription: "Accompagnement au développement d'un centre de santé : élargissement de l'offre, ouverture d'antennes, structuration multi-sites et financement.",
    keywords: ["développer un centre de santé", "ouvrir une antenne"],
    body: `<h2>Grandir n’est pas la suite naturelle de bien fonctionner</h2>
<p>Un centre de santé qui tourne n’est pas pour autant prêt à s’étendre. Les directions nous sollicitent avec une intuition juste : délais de rendez-vous qui s’allongent, locaux proposés par une commune voisine, spécialité absente du territoire. Cette intuition ne dit rien de la capacité de la structure à absorber une charge supplémentaire. Nous commençons donc par regarder ce que le centre encaisse déjà : répartition des recettes par activité, occupation effective des cabinets, vacations non pourvues, saisonnalité, tenue de la trésorerie sur un cycle complet. Un développement construit sur une base fragile ne corrige pas la fragilité, il l’amplifie, parce que les charges fixes arrivent toujours avant les recettes. C’est pour cette raison que le diagnostic précède le plan de développement, et jamais l’inverse.</p>

<h2>Comment nous instruisons un projet d’extension ou d’antenne</h2>
<p>Le travail se déroule en trois temps. D’abord un état des lieux construit à partir de vos propres données, prolongé si nécessaire par un <a href="/services/audit-financier">audit financier</a> lorsque la situation économique est incertaine. Ensuite une étude d’opportunité sur la zone visée : besoin de soins non couvert, offre existante, zonage conventionnel, accessibilité, disponibilité des professionnels, position de l’agence régionale de santé et de la collectivité. Enfin un scénario opérationnel qui décrit les hypothèses d’activité, les recrutements nécessaires, le calendrier d’ouverture, les investissements et le plan de financement correspondant. Nous produisons rarement un scénario unique : comparer une hypothèse prudente et une hypothèse volontariste permet à votre gouvernance de décider en connaissance de cause, et de savoir à quel moment ralentir.</p>

<h2>Ce que vous avez à réunir de votre côté</h2>
<p>La qualité de la mission dépend directement de ce que vous mettez sur la table. Nous demandons les comptes des derniers exercices et la situation comptable en cours, les états d’activité issus du logiciel métier, la liste des professionnels avec leur temps de présence et leur statut, les conventions et contrats en vigueur, le projet de santé à jour, ainsi que les échanges déjà engagés avec l’ARS ou la collectivité. Une réunion avec l’équipe médicale est également indispensable : un projet d’antenne décidé sans les praticiens qui y assureront des vacations ne se réalise pas. Si ces éléments manquent, nous les reconstituons, mais cela allonge la mission.</p>

<h2>Les erreurs que nous rencontrons le plus souvent</h2>
<ul>
<li>Raisonner en mètres carrés plutôt qu’en temps médical : le bail est signé pour des locaux séduisants avant que les praticiens ne soient sécurisés, et le site ouvre à charge partielle.</li>
<li>Sous-estimer les fonctions support, car l’accueil, le secrétariat, la facturation, la coordination et le système d’information ne se dupliquent pas gratuitement d’un site à l’autre.</li>
<li>Traiter le financement en dernier, une fois les engagements pris, ce qui referme l’accès à des dispositifs qui supposaient une demande en amont.</li>
<li>Oublier que l’ouverture d’un site supplémentaire suppose une démarche auprès de l’ARS, avec les mêmes exigences de fond que pour un premier site.</li>
</ul>
<p>Nous revenons sur ces points dans notre article consacré au fait de <a href="/ressources/developper-centre-de-sante">développer un centre de santé</a>.</p>

<h2>Ce qui rend une situation simple ou complexe</h2>
<p>Une situation est simple quand le centre est à l’équilibre, que la gouvernance est claire, que l’activité ajoutée reste dans le champ déjà exercé et que des locaux sont identifiés. Elle devient complexe dès qu’un de ces éléments manque, et surtout dans quelques cas : un gestionnaire multi-sites dont les statuts diffèrent d’un site à l’autre, l’ajout d’une activité dentaire ou d’imagerie qui appelle des investissements lourds, la reprise d’une structure en difficulté, un montage impliquant plusieurs communes. La complexité tient rarement à la médecine, presque toujours au montage juridique, au financement et au calendrier.</p>

<h2>L’articulation avec nos autres missions</h2>
<p>Un projet de développement mobilise presque toujours d’autres compétences du cabinet. Le sujet le plus fréquent reste le temps médical, traité par notre mission de <a href="/services/recrutement-de-medecins">recrutement de médecins</a>, sans laquelle aucun plan d’extension ne se concrétise. Vient ensuite la ressource financière, avec l’identification des dispositifs mobilisables présentée sur notre page <a href="/financements">financements</a>, dont la subvention Teulade prévue à l’article L162-32 du code de la sécurité sociale, dont l’éligibilité s’apprécie au cas par cas et se traite dans le cadre d’une intervention dédiée. S’y ajoutent la mise à jour du projet de santé, le dossier ARS du nouveau site et le pilotage de l’activité une fois l’ouverture faite. Selon votre modèle, les pages consacrées aux <a href="/centres-de-sante">différents types de centres de santé</a> précisent les contraintes propres à chaque structure.</p>

<h2>Contactez-nous</h2>
<p>Un projet de développement se juge sur des éléments concrets : capacité d’absorption, temps médical disponible, financements mobilisables, calendrier tenable. Nous examinons votre situation, nous vous disons ce qui tient et ce qui ne tient pas, et nous vous indiquons dans quel ordre avancer. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "recrutement-de-medecins",
    name: "Recrutement de médecins",
    short: "Sourcing via nos partenaires recruteurs, contrats, intégration et fidélisation.",
    hero: "Le recrutement de médecins est le premier frein au développement des centres de santé. Nous mobilisons nos partenariats avec des recruteurs spécialisés pour aller chercher vos praticiens, et nous sécurisons leur arrivée jusqu’à l’intégration.",
    icon: ICONS.user,
    pillar: "developpement",
    pillars: [
      { title: "Partenaires recruteurs spécialisés", desc: "Nous activons nos partenariats avec des recruteurs dédiés à la santé, avec leurs viviers de praticiens et leurs canaux de sourcing actifs." },
      { title: "Sourcing actif et présélection", desc: "Approche directe des médecins ciblés sur votre territoire, tri des candidatures, qualification. Vous ne recevez que des profils déjà filtrés." },
      { title: "Attractivité de votre centre", desc: "Nous structurons le discours qui fait venir un médecin : projet de santé, équipe, conditions d’exercice, atouts du salariat." },
      { title: "Contrats et rémunération", desc: "Statut salarié, package, clauses spécifiques au secteur des centres de santé." },
      { title: "Intégration et fidélisation", desc: "Onboarding, accompagnement des premières semaines, suivi dans la durée. Recruter ne suffit pas, il faut garder." },
    ],
    metaTitle: "Recrutement de médecins pour centres de santé",
    metaDescription: "Recrutement de médecins salariés via nos partenaires recruteurs : sourcing, attractivité, contrats, intégration. On vous aide à trouver vos praticiens.",
    keywords: ["recrutement médecin centre de santé", "médecin salarié", "trouver un médecin salarié", "recruter médecin CDS"],
    body: `<h2>Le recrutement est rarement un probleme d'annonce</h2>
<p>Quand un centre de sante ne parvient pas a recruter, le reflexe est de multiplier les annonces et d'elargir la diffusion. Dans la plupart des situations que nous rencontrons, le blocage se situe ailleurs. Le poste n'est pas differenciant, le discours sur le projet reste vague, les conditions d'exercice ne sont pas formalisees, et le candidat qui hesite entre plusieurs structures n'a aucune raison objective de choisir la votre. Un medecin sollicite regulierement ne lit pas une annonce, il repond a une approche directe et argumentee. C'est la nature de la demarche qu'il faut changer, pas son volume.</p>
<p>S'ajoute une difficulte propre au salariat. Beaucoup de praticiens connaissent mal ce statut, ses garanties et ses contreparties. Faute d'explication, ils le comparent a l'exercice liberal sur le seul critere du revenu net et concluent trop vite. Nous revenons sur ce point dans notre article consacre au <a href="/ressources/recruter-medecins-salaries-centre-de-sante">recrutement de medecins salaries en centre de sante</a>.</p>

<h2>Comment nous procedons</h2>
<p>Nous commencons par un cadrage avec la direction : quel profil, pour quelle patientele, sur quel volume horaire, avec quelle marge de negociation validee en interne. Cette etape parait evidente, elle est souvent expediee, et c'est elle qui determine tout le reste. Nous construisons ensuite l'argumentaire du centre, ce qui suppose de mettre a plat le projet de sante, la composition de l'equipe, l'organisation du temps de travail et le niveau de decharge administrative offert au praticien.</p>
<p>Vient le sourcing, que nous menons avec nos partenaires recruteurs specialises dans la sante. Nous suivons les entretiens, nous aidons a arbitrer entre les profils, puis nous securisons la phase contractuelle. La remuneration se traite avec des reperes de marche et une lecture de votre equilibre economique, sujet que nous abordons dans notre page sur le <a href="/ressources/salaire-medecin-salarie-centre-de-sante">salaire d'un medecin salarie en centre de sante</a>.</p>

<h2>Ce que vous devez preparer de votre cote</h2>
<p>Un recrutement avance vite quand le centre a deja repondu aux questions que le candidat va poser. Nous demandons donc le projet de sante a jour, l'organigramme reel, la fourchette salariale arbitree par l'instance decisionnaire, le planning type propose et les moyens mis a disposition : secretariat, logiciel metier, materiel, locaux. Nous demandons aussi qui sera l'interlocuteur du candidat et s'il dispose d'un mandat pour repondre sans attendre une deliberation. Un delai de reponse trop long fait perdre plus de praticiens qu'une remuneration moyenne.</p>

<h2>Les erreurs frequentes quand on recrute seul</h2>
<ul>
<li>Publier une annonce generique qui ne dit rien du territoire, de l'equipe ni du mode d'exercice.</li>
<li>Ouvrir un poste sans avoir valide la fourchette de remuneration en amont, ce qui oblige a se retracter en fin de processus.</li>
<li>Rediger un contrat sans tenir compte des specificites du secteur : temps administratif, participation a la coordination, conditions de rupture. Ces points sont detailles dans notre article sur le <a href="/ressources/contrat-medecin-salarie-centre-de-sante">contrat de medecin salarie</a>.</li>
<li>Considerer que la mission s'arrete a la signature, alors que les departs precoces se jouent dans les premieres semaines.</li>
<li>Ignorer les dispositifs d'aide a l'installation existants sur le territoire, qui pesent dans la decision finale du praticien.</li>
</ul>

<h2>Situations simples, situations complexes</h2>
<p>Une situation reste simple lorsque le centre est deja ouvert, que l'equipe est stable, que le territoire n'est pas parmi les plus tendus et que la gouvernance sait decider vite. La difficulte augmente quand le centre doit recruter son premier medecin avant meme d'ouvrir, quand il sort d'une periode de turnover ou d'un conflit interne, quand la collectivite porteuse impose une grille salariale rigide, ou quand le poste est isole sans confrere sur place. Ces configurations ne sont pas bloquantes, elles exigent plus de preparation en amont et un travail plus fin sur l'attractivite. Notre page dediee au <a href="/recrutement-medecins">recrutement de medecins</a> presente la logique d'ensemble de la demarche.</p>

<h2>Articulation avec nos autres missions</h2>
<p>Un recrutement ne se traite jamais isolement. Un poste medical supplementaire modifie l'equilibre economique, les plannings et la capacite d'accueil. Nous verifions donc en parallele que le modele tient, ce qui rejoint nos travaux de <a href="/services/optimisation-de-l-activite">pilotage de l'activite</a>. Lorsque le recrutement s'inscrit dans une croissance plus large, ouverture d'antenne ou nouvelle specialite, il releve de la mission <a href="/services/developpement">developpement</a>. Et quand le financement du poste depend de dispositifs conventionnels ou de subventions, notamment la subvention Teulade prevue a l'article L162-32, nous integrons cette dimension a l'analyse plutot que de la decouvrir apres la signature.</p>

<h2>Qui realise le sourcing</h2>
<p>La recherche des praticiens elle-meme est conduite avec <a href="https://talentcaresante.fr" rel="noopener">TalentCare Sante</a>, notre partenaire dedie au recrutement medical. Nous restons votre interlocuteur sur le cadrage du besoin, la construction du poste et tout ce qui touche au fonctionnement du centre de sante.</p>

<h2>Contactez-nous</h2>
<p>Si vous cherchez un ou plusieurs medecins et que la demarche s'enlise, un regard exterieur permet d'identifier ce qui bloque avant d'engager du temps et du budget dans une campagne qui ne donnera rien. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "patientele-et-communication",
    name: "Patientèle et communication",
    short: "Référencement local, prise de RDV en ligne, communication territoriale.",
    hero: "Stratégie de patientèle et communication : référencement local, présence en ligne, prise de RDV, communication territoriale, fidélisation.",
    icon: ICONS.megaphone,
    pillar: "developpement",
    pillars: [
      { title: "Référencement local", desc: "Google, fiches d’établissement, présence locale." },
      { title: "Prise de RDV en ligne", desc: "Doctolib, Maiia, Keldoc : paramétrage et optimisation." },
      { title: "Communication territoriale", desc: "Relations institutionnelles, prescripteurs locaux." },
      { title: "Fidélisation patient", desc: "Parcours patient, satisfaction, rappels." },
    ],
    metaTitle: "Patientèle et communication pour centres de santé",
    metaDescription: "Référencement local, prise de rendez-vous en ligne, communication territoriale : on développe la patientèle et la visibilité de votre centre de santé.",
    keywords: ["communication centre de santé", "patientèle centre de santé"],
    body: `<h2>Un centre bien organisé peut rester invisible</h2>
<p>La plupart des centres qui nous appellent sur ce sujet n’ont pas un problème de qualité de soins, mais un problème de visibilité et de conversion. Le patient du territoire ignore que le centre existe, ne sait pas quelles spécialités y sont proposées, ou tombe sur une fiche d’établissement incomplète avec des horaires faux. À l’inverse, certains centres saturent sur une activité et laissent des créneaux vides sur une autre, faute de savoir orienter la demande. Dans les deux cas, l’enjeu n’est pas de communiquer davantage, il est de rendre lisible ce qui existe déjà et de remplir les plages qui doivent l’être, puisque les recettes restent largement liées à l’activité effectivement réalisée.</p>

<h2>Ce que nous auditons avant d’agir</h2>
<p>Nous ne proposons pas de plan de communication avant d’avoir mesuré l’existant. Nous regardons la fiche d’établissement et les avis en ligne, le site du centre et son contenu réel, la manière dont l’offre est décrite spécialité par spécialité, le paramétrage des plateformes de prise de rendez-vous, les motifs de consultation ouverts, les durées de créneaux et les règles de réservation. Nous examinons aussi les rendez-vous non honorés et les canaux par lesquels les nouveaux patients arrivent réellement. Cette photographie fait presque toujours apparaître quelques réglages qui produisent un effet immédiat, avant même toute action de communication.</p>

<h2>Référencement local et prise de rendez-vous en ligne</h2>
<p>Le référencement local repose sur des éléments simples mais rarement tenus à jour : nom exact et cohérent partout, adresse, accès, horaires réels, liste des professionnels, spécialités, conditions de prise en charge. La plateforme de rendez-vous joue ensuite un rôle qui dépasse la vitrine, puisque son paramétrage détermine qui obtient un créneau, pour quel motif et dans quel délai. Mal réglé, il remplit les agendas des praticiens les plus demandés et laisse les autres à vide, ou fait passer des consultations longues dans des créneaux courts. Bien réglé, il devient un outil de régulation du flux, à traiter avec la même rigueur que le reste de l’organisation interne, sujet que nous abordons dans notre mission de <a href="/services/conseil-en-organisation">conseil en organisation</a>.</p>

<h2>La communication territoriale, la partie que l’on oublie</h2>
<p>Une part importante de la patientèle d’un centre n’arrive pas par une recherche en ligne mais par une orientation. Pharmacies, établissements scolaires, services sociaux, EHPAD, hôpital de proximité, services municipaux, confrères libéraux : ces relais adressent des patients s’ils savent précisément ce que vous prenez en charge et comment vous joindre. Le travail consiste à identifier ces interlocuteurs, à leur donner un message clair et à entretenir le lien dans la durée. L’inscription dans une communauté professionnelle territoriale de santé joue souvent un rôle d’accélérateur, comme nous l’expliquons dans notre article sur le <a href="/ressources/centre-de-sante-cpts">centre de santé et la CPTS</a>. Les arguments d’accessibilité comptent également, en particulier la pratique du <a href="/ressources/tiers-payant-centre-de-sante">tiers payant</a>, encore mal connue des patients alors qu’elle constitue souvent un motif de choix déterminant.</p>

<h2>Ce que vous préparez, et les erreurs fréquentes</h2>
<p>Côté préparation, nous demandons les accès aux comptes en ligne du centre, les exports d’activité par praticien et par motif, la liste des spécialités et des horaires réels, les supports déjà produits et le nom d’un référent interne disponible pendant la mission. Les erreurs, elles, se répètent d’un centre à l’autre.</p>
<ul>
<li>Confier la communication à un prestataire généraliste qui ignore les règles déontologiques applicables aux professionnels de santé.</li>
<li>Lancer une campagne alors que les créneaux ne sont pas ouverts, ce qui envoie des patients vers une porte fermée.</li>
<li>Multiplier les canaux sans personne pour les tenir dans la durée.</li>
<li>Négliger les avis en ligne, qui se dégradent vite quand l’accueil téléphonique n’est pas dimensionné.</li>
<li>Mesurer l’effet en nombre de vues plutôt qu’avec les indicateurs d’activité, sujet traité dans notre mission de <a href="/services/optimisation-de-l-activite">pilotage de l’activité</a>.</li>
</ul>

<h2>Situations simples, situations complexes</h2>
<p>La mission est simple quand le centre est mono-site, que l’offre est stable et que l’équipe est complète : il s’agit alors de corriger la présence en ligne et le paramétrage des agendas. Elle devient complexe quand plusieurs sites cohabitent sous des noms différents, quand une activité vient d’ouvrir et doit être lancée sans antériorité, quand le centre sort d’une période de mauvaise réputation locale, ou quand il est porté par une collectivité, avec les contraintes propres à la communication publique. Le profil de la structure change la démarche, comme le montrent les pages consacrées aux <a href="/centres-de-sante">types de centres de santé</a>. Dans tous les cas, la patientèle ne se traite pas isolément : elle dépend du temps médical disponible, de l’organisation de l’accueil et de la solidité financière de la structure.</p>

<h2>Contactez-nous</h2>
<p>Avant d’investir dans une campagne, il vaut mieux savoir où fuient réellement vos rendez-vous et quels réglages produiront un effet rapide. Nous faisons ce diagnostic avec vous et nous vous disons par quoi commencer. Contactez-nous pour un check-up.</p>`,
  },

  // ──────────── ACCOMPAGNEMENT / GESTION ────────────
  {
    slug: "conseil-en-organisation",
    name: "Conseil en organisation",
    short: "Process internes, gouvernance, flux patients, outils.",
    hero: "Conseil en organisation : process internes, gouvernance, flux patients, planification, coordination des équipes, outils métiers.",
    icon: ICONS.grid,
    pillar: "accompagnement",
    pillars: [
      { title: "Audit organisationnel", desc: "Cartographie des process et identification des points de friction." },
      { title: "Refonte des flux", desc: "Parcours patient, prise de RDV, accueil, facturation." },
      { title: "Gouvernance", desc: "Comité de direction, instances médicales, gouvernance partagée." },
      { title: "Outils métiers", desc: "Choix et déploiement des logiciels adaptés." },
    ],
    metaTitle: "Conseil en organisation pour centres de santé",
    metaDescription: "Conseil en organisation pour centre de santé : process, gouvernance, flux patients, planning et outils métiers. On fluidifie votre fonctionnement quotidien.",
    keywords: ["conseil organisation centre de santé"],
    body: `<h2>Ce qui remonte n'est presque jamais la cause</h2>
<p>Les directions nous appellent avec des symptomes : l'accueil est sature aux heures de pointe, les praticiens se plaignent des plannings, la facturation prend du retard, les transmissions entre professionnels passent par des messages informels. Ces signaux sont reels, mais ils designent rarement le probleme. Dans un centre de sante, la majorite des dysfonctionnements quotidiens vient de trois causes : des responsabilites qui n'ont jamais ete ecrites, des outils utilises differemment selon les personnes, des decisions qui ne trouvent aucune instance pour etre tranchees. Tant qu'elles ne sont pas traitees, chaque correctif local en fait apparaitre un autre ailleurs.</p>

<h2>Comment nous procedons</h2>
<p>Nous demarrons par une observation sur site. Nous suivons le parcours reel d'un patient, de la prise de rendez-vous jusqu'a l'encaissement et a la facturation, et nous notons chaque rupture. Nous rencontrons separement l'accueil, les praticiens, la coordination et la direction, parce que ces quatre points de vue ne decrivent jamais la meme organisation. Nous restituons ensuite une cartographie des process, des points de friction et de leur cout en temps.</p>
<p>Le plan d'action qui en decoule est volontairement sequence. Nous ne changeons pas tout en meme temps : on stabilise d'abord l'accueil et la prise de rendez-vous, puis les circuits internes, puis les outils. Les sujets de coordination entre professionnels sont traites a part, car ils touchent a la fois a l'organisation du travail et aux financements conventionnels, comme nous l'expliquons dans notre article sur la <a href="/ressources/coordination-centre-de-sante">coordination en centre de sante</a>.</p>
<p>La gouvernance, elle, est le point le plus souvent evite parce qu'il touche aux personnes. Definir qui decide quoi, avec quel mandat et dans quelle instance est pourtant ce qui permet a toutes les autres decisions de tenir dans le temps. Les outils viennent ensuite, et jamais avant : le choix et le parametrage du logiciel metier conditionnent directement la qualite des donnees dont vous disposerez pour piloter, comme nous le detaillons dans notre article sur le <a href="/ressources/systeme-information-centre-de-sante">systeme d'information d'un centre de sante</a>.</p>

<h2>Ce que vous devez preparer de votre cote</h2>
<p>Pour que la mission avance, nous avons besoin d'elements simples, rarement disponibles d'emblee : les plannings reellement pratiques des derniers mois et non les plannings theoriques, les regles de prise de rendez-vous telles qu'elles sont parametrees dans le logiciel, la liste des taches administratives avec le nom de qui les assume, les comptes rendus des reunions d'equipe, et le projet de sante en vigueur. Ce dernier document revele souvent un ecart entre ce que le centre annonce et ce qu'il fait, sujet que nous developpons dans notre page sur le <a href="/ressources/projet-de-sante-centre-de-sante">projet de sante d'un centre de sante</a>.</p>

<h2>Les erreurs frequentes quand on reorganise seul</h2>
<ul>
<li>Changer de logiciel en esperant que l'outil impose l'organisation. C'est l'inverse qui se produit : un outil neuf reproduit fidelement le desordre existant.</li>
<li>Ecrire des procedures que personne ne relira, au lieu de modifier les parametrages et les habitudes qui produisent reellement le resultat.</li>
<li>Ajouter des reunions sans supprimer celles qui ne decident rien.</li>
<li>Confier la reorganisation a une personne de l'equipe sans lui donner de mandat explicite, ce qui la met en conflit avec ses collegues et fait echouer le projet sur des questions de personnes.</li>
<li>Traiter separement l'organisation et la facturation, alors qu'une large part des pertes de recettes nait d'un circuit administratif mal cale.</li>
</ul>

<h2>Ce qui rend une situation simple ou complexe</h2>
<p>Un centre mono-site, avec une equipe reduite, une direction clairement identifiee et un seul logiciel metier se reorganise dans des delais courts. La complexite augmente avec le nombre de sites, la cohabitation de specialites aux rythmes tres differents, des personnels aux statuts heterogenes, et surtout un historique conflictuel. Les centres portes par une collectivite ou une association ajoutent une contrainte propre : toute decision structurante passe par une instance qui ne se reunit pas au rythme du terrain. Nous en tenons compte dans le sequencement des chantiers plutot que de le decouvrir en cours de mission.</p>

<h2>Articulation avec nos autres missions</h2>
<p>Une organisation clarifiee ne produit ses effets que si elle est mesuree. Cette mission se prolonge donc naturellement dans le <a href="/services/optimisation-de-l-activite">pilotage de l'activite</a>, et elle s'appuie sur les donnees issues de la <a href="/services/comptabilite-gestion">comptabilite et de la gestion</a>. L'ensemble s'inscrit dans notre offre d'<a href="/accompagnement">accompagnement</a> au fonctionnement quotidien des centres de sante, que la structure soit deja installee ou en cours de montee en charge.</p>

<h2>Contactez-nous</h2>
<p>Si votre equipe passe plus de temps a compenser l'organisation qu'a soigner, il vaut mieux regarder les circuits de pres que d'ajouter une regle de plus. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "comptabilite-gestion",
    name: "Comptabilité et gestion",
    short: "Tenue de gestion, paie, fiscalité adaptée au secteur.",
    hero: "Accompagnement comptable et financier pour centres de santé : tenue de gestion, suivi budgétaire, paie, fiscalité, reporting.",
    icon: ICONS.receipt,
    pillar: "accompagnement",
    pillars: [
      { title: "Tenue de gestion", desc: "Comptabilité analytique adaptée, ventilation par activité." },
      { title: "Pilotage budgétaire", desc: "Budget, prévisions de trésorerie, alertes." },
      { title: "Paie et social", desc: "Bulletins, DSN, attestations, conformité." },
      { title: "Fiscalité", desc: "Optimisation selon le statut juridique." },
      { title: "Reporting", desc: "Tableaux de bord pour la direction et les instances." },
    ],
    metaTitle: "Comptabilité et gestion d’un centre de santé",
    metaDescription: "Tenue de gestion, pilotage budgétaire, paie, fiscalité et reporting adaptés aux centres de santé. Une gestion saine et lisible, sans charge pour vos équipes.",
    keywords: ["comptabilité centre de santé", "gestion centre de santé"],
    body: `<h2>Un centre de santé ne se gère pas comme un cabinet libéral</h2>
<p>C’est la raison d’être de cette mission. Un centre emploie des soignants salariés, pratique le tiers payant, perçoit des recettes conventionnelles et publiques qui n’ont rien à voir avec des honoraires, et rend souvent des comptes à un porteur associatif, mutualiste ou municipal. Un cabinet comptable généraliste sait tenir une comptabilité, mais il ne connaît pas toujours ces particularités : la ventilation des recettes entre actes, forfaits et dotations, le traitement des rejets de facturation, le régime fiscal applicable selon le statut du porteur, les conventions collectives qui s’appliquent aux équipes. Résultat courant, des comptes exacts mais peu parlants, qui ne permettent ni de piloter, ni de justifier une demande de financement.</p>

<h2>Ce que nous mettons en place</h2>
<p>Le point de départ est un plan de comptes analytique adapté à votre centre. Il doit permettre de lire séparément chaque activité, chaque site et chaque grande nature de recette, sans quoi aucun arbitrage sérieux n’est possible. Vient ensuite la construction budgétaire : un budget annuel réaliste, des prévisions de trésorerie tenues dans le temps, des alertes déclenchées avant que la difficulté n’apparaisse sur le compte bancaire. Nous prenons également en charge la paie et les obligations sociales associées, la fiscalité selon le statut juridique retenu, et un reporting réellement utilisé, c’est-à-dire court, régulier et lisible par une direction comme par un conseil d’administration ou une commission municipale. Le sujet est prolongé dans notre article sur la <a href="/ressources/tresorerie-centre-de-sante">trésorerie d’un centre de santé</a>.</p>

<h2>Ce que vous avez à préparer</h2>
<p>La reprise se prépare avec quelques éléments simples : les statuts et la décision d’autorisation, les comptes des derniers exercices et le dernier bilan, l’accès à votre logiciel de facturation et à votre outil comptable actuel, les contrats de travail et la convention collective appliquée, les baux et contrats fournisseurs récurrents, les conventions de financement en cours. Si vous changez de prestataire, prévoyez un temps de recouvrement entre l’ancien et le nouveau, particulièrement sur la paie, où une bascule mal calée en cours d’année crée des régularisations pénibles. Nous organisons ce passage de relais avec votre cabinet actuel, sans que vos équipes aient à arbitrer entre les deux.</p>

<h2>Les erreurs fréquentes</h2>
<p>La première est l’absence d’analytique : tout est agrégé, une activité perd de l’argent depuis longtemps et personne ne le voit. La deuxième est de piloter sur le bilan, disponible plusieurs mois après la clôture, au lieu de suivre quelques indicateurs mensuels. La troisième concerne le tiers payant comptabilisé comme s’il était encaissé, alors qu’une partie est rejetée et jamais reprise : l’écart entre facturé et encaissé finit par devenir un trou de trésorerie. La quatrième est le traitement approximatif des subventions et dotations, enregistrées sans distinguer ce qui est acquis, conditionnel ou remboursable, ce qui fragilise la structure lors d’un contrôle. La cinquième est plus humaine : confier la gestion administrative à un secrétariat de soins déjà saturé, et découvrir les retards trop tard.</p>

<h2>Ce qui rend la situation simple ou complexe</h2>
<p>Un centre mono-site, mono-activité, avec un seul logiciel et une équipe stable se met en place sans difficulté. La complexité augmente avec le nombre de sites, la coexistence d’activités aux modèles économiques différents comme le dentaire et le médical, la présence de plusieurs conventions collectives, un portage public où la comptabilité du centre s’articule avec celle de la collectivité, ou une reprise dans un contexte de retard comptable accumulé. Le choix du statut pèse lourd sur tout cela, comme l’explique notre article sur le <a href="/ressources/statut-juridique-centre-de-sante">statut juridique d’un centre de santé</a>. Dans les cas tendus, la première étape n’est pas la tenue courante mais la remise à plat.</p>

<h2>L’articulation avec nos autres missions</h2>
<p>Cette mission est le socle de la continuité. Elle prolonge un <a href="/services/audit-financier">audit financier</a>, dont elle rend les conclusions durables en installant les outils de suivi. Elle sécurise le <a href="/services/subventions-et-financements">financement et les subventions</a>, puisqu’un dossier se justifie avec des comptes clairs et se renouvelle avec des justificatifs disponibles. Elle rejoint le <a href="/services/conseil-en-organisation">conseil en organisation</a> lorsque les chiffres révèlent un problème de processus plutôt que de gestion. L’ensemble de nos interventions au long cours est détaillé sur la page <a href="/accompagnement">accompagnement</a>.</p>

<h2>Contactez-nous</h2>
<p>Que vous cherchiez à externaliser votre gestion, à remettre à plat une comptabilité devenue illisible ou simplement à disposer enfin de tableaux de bord exploitables, le premier échange sert à cadrer le besoin réel. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "optimisation-de-l-activite",
    name: "Pilotage de l’activité",
    short: "Indicateurs, cotation, qualité, satisfaction.",
    hero: "Pilotage de l’activité d’un centre de santé : tableaux de bord, suivi des indicateurs ACI et ROSP, cotation et facturation, qualité des soins.",
    icon: ICONS.chart,
    pillar: "accompagnement",
    pillars: [
      { title: "Tableaux de bord", desc: "Indicateurs d’activité, occupation, recettes par poste." },
      { title: "Cotation et facturation", desc: "Revue des cotations CCAM et NGAP, conformité." },
      { title: "Indicateurs forfaitaires", desc: "Pilotage des indicateurs ACI et ROSP." },
      { title: "Satisfaction patient", desc: "Recueil et analyse de la satisfaction." },
    ],
    metaTitle: "Pilotage de l’activité d’un centre de santé",
    metaDescription: "Pilotage de l'activité de votre centre de santé : tableaux de bord, cotation, indicateurs ACI et ROSP, satisfaction. On optimise vos recettes.",
    keywords: ["pilotage centre de santé", "indicateurs ACI"],
    body: `<h2>Piloter un centre de sante sans donnees fiables</h2>
<p>La plupart des centres disposent d'un logiciel metier qui produit des statistiques, d'un expert-comptable qui produit un bilan, et de personne pour relier les deux. Le resultat est connu : la direction decouvre en fin d'exercice un ecart qu'elle ne sait pas expliquer, et l'attribue par defaut au niveau d'activite. Or l'activite brute ne dit presque rien. Deux centres qui realisent le meme nombre d'actes peuvent afficher des recettes tres differentes selon la cotation retenue, le taux d'occupation reel des vacations, la part de rejets de facturation et le niveau de captation des financements forfaitaires.</p>
<p>Le pilotage sert d'abord a recuperer ce qui existe deja. Trois zones concentrent l'essentiel des pertes. La cotation, quand les actes realises ne sont pas ceux qui sont factures, par meconnaissance des nomenclatures ou par prudence excessive. Le circuit de facturation, avec des rejets et des impayes qui ne sont ni suivis ni relances dans les delais, sujet indissociable de la gestion du <a href="/ressources/tiers-payant-centre-de-sante">tiers payant</a>. Enfin les financements forfaitaires, dont les criteres ne sont pas suivis en cours d'annee, si bien que l'on constate trop tard qu'un indicateur n'a pas ete atteint. Nous decrivons ces mecanismes dans notre article sur les <a href="/ressources/forfaits-structure-centre-de-sante">forfaits structure en centre de sante</a>.</p>

<h2>Comment nous procedons</h2>
<p>Nous reconstituons d'abord une base exploitable a partir de vos exports logiciel et de votre comptabilite, puis nous construisons un tableau de bord volontairement restreint. Un bon tableau de bord tient sur une page et se lit en quelques minutes : occupation des vacations, actes par profession et par site, recettes par poste, delai d'encaissement, taux de rejet, avancement des indicateurs conventionnels. Nous ecartons les indicateurs que personne n'utilisera pour decider.</p>
<p>Nous menons en parallele une revue de cotation, poste par poste, avec les praticiens concernes. C'est le travail le plus rentable de la mission, et le plus mal vecu s'il est presente comme un controle. Nous le conduisons comme une mise a niveau collective. Nous installons enfin une routine de suivi mensuelle, sans laquelle le tableau de bord devient un document mort en quelques semaines.</p>

<h2>Ce que vous devez preparer de votre cote</h2>
<p>Nous avons besoin des exports d'activite du logiciel metier sur une periode significative, des releves de remboursement des caisses, de la balance comptable, du planning reel des vacations et de la liste des conventions et contrats en cours. Il faut aussi designer une personne qui detiendra le tableau de bord et le presentera aux instances. Sans porteur interne identifie, la mission produit un document et non un changement de pratique.</p>

<h2>Les erreurs frequentes quand on pilote seul</h2>
<ul>
<li>Suivre le chiffre d'affaires global sans le decomposer par profession et par site, ce qui masque les activites structurellement deficitaires.</li>
<li>Confondre nombre d'actes et taux d'occupation. Un agenda rempli d'actes courts ne remplit pas les memes objectifs qu'un agenda equilibre.</li>
<li>Decouvrir les indicateurs conventionnels au moment de la declaration annuelle plutot que de les suivre en continu, comme nous l'expliquons a propos de la <a href="/ressources/rosp-centre-de-sante">ROSP en centre de sante</a>.</li>
<li>Ne jamais rapprocher les recettes attendues des encaissements reels, et laisser une derive de tresorerie s'installer sans alerte.</li>
<li>Multiplier les indicateurs jusqu'a ce que plus personne ne lise le document ni ne s'en serve.</li>
</ul>

<h2>Ce qui rend une situation simple ou complexe</h2>
<p>Le pilotage se met en place rapidement dans un centre mono-activite, mono-site, equipe d'un logiciel unique et disposant d'exports propres. Il devient plus exigeant quand le centre cumule des activites aux modeles economiques distincts, par exemple une activite dentaire et une activite medicale, quand plusieurs sites utilisent des parametrages differents, quand l'historique comptable ne permet pas de ventiler par activite, ou quand la structure sort d'une periode de tension financiere. Dans ce dernier cas, la mission commence generalement par un <a href="/services/audit-financier">audit financier</a> avant tout travail de pilotage courant.</p>

<h2>Articulation avec nos autres missions</h2>
<p>Le pilotage donne les chiffres, il ne corrige pas les causes. Quand les indicateurs revelent un probleme de circuit, de planning ou de repartition des taches, la suite se traite en <a href="/services/conseil-en-organisation">conseil en organisation</a>. Quand ils revelent un sous-financement structurel, nous examinons les dispositifs mobilisables, y compris la subvention Teulade prevue a l'article L162-32, dont l'etude releve d'une intervention dediee de notre part. Cette mission s'inscrit dans notre offre globale d'<a href="/accompagnement">accompagnement</a> a la gestion des centres de sante.</p>

<h2>Contactez-nous</h2>
<p>Si vous ne savez pas dire aujourd'hui quelle activite de votre centre est excedentaire et laquelle ne l'est pas, le sujet merite quelques heures de travail serieux avant la prochaine echeance budgetaire. Contactez-nous pour un check-up.</p>`,
  },
  {
    slug: "achats-et-investissements",
    name: "Achats et investissements",
    short: "Cahiers des charges, négociation fournisseurs, financement.",
    hero: "Accompagnement aux achats et investissements : matériel médical, dentaire, informatique, immobilier. Cahiers des charges, négociation, financement.",
    icon: ICONS.truck,
    pillar: "accompagnement",
    pillars: [
      { title: "Cahiers des charges", desc: "Définir le bon besoin avant la consultation." },
      { title: "Sourcing fournisseurs", desc: "Consultation et comparaison sur le bon panel." },
      { title: "Négociation", desc: "Prix, conditions, SAV, formation." },
      { title: "Financement", desc: "Crédit-bail, location longue durée, prêts adaptés." },
    ],
    metaTitle: "Achats et investissements pour centres de santé",
    metaDescription: "Accompagnement aux achats et investissements : négociation fournisseurs et financement du matériel pour votre centre de santé. On optimise vos coûts.",
    keywords: ["achats centre de santé", "matériel centre de santé"],
    body: `<h2>Un achat mal préparé se paie pendant des années</h2>
<p>Dans un centre de santé, la décision d’achat est rarement prise par un acheteur. Elle est prise par un praticien qui connaît son matériel, par un directeur qui gère l’urgence d’une panne, ou par un élu qui doit boucler un budget. Le résultat est presque toujours le même : le fournisseur maîtrise mieux le sujet que l’acheteur, le devis n’est comparé qu’à un seul autre devis, et l’engagement porte sur une durée longue. Le prix affiché n’est d’ailleurs pas le vrai sujet. Ce qui pèse dans le temps, ce sont les consommables imposés, le contrat de maintenance, les délais d’intervention, les mises à jour logicielles facturées à part et la valeur de reprise du matériel. Un fauteuil dentaire, un panoramique, un échographe ou un logiciel métier engagent la structure bien au-delà de la facture initiale.</p>

<h2>Le cahier des charges est le seul vrai levier de négociation</h2>
<p>Négocier sans cahier des charges revient à négocier sur ce que le fournisseur a décidé de vous vendre. Nous commençons donc par écrire le besoin : usages réellement attendus, volumes d’activité, contraintes des locaux, compatibilité avec l’existant, exigences de maintenance, formation des équipes, conditions de reprise et d’évolution. Ce document se construit avec les praticiens, car eux seuls savent ce qui est indispensable et ce qui relève du confort. Il permet ensuite de consulter plusieurs fournisseurs sur une base identique, donc de comparer des offres réellement comparables, et de fermer la porte aux options ajoutées en fin de discussion. C’est aussi ce document qui protège la structure lorsque le matériel livré ne correspond pas à ce qui avait été promis.</p>

<h2>Consulter, comparer, puis négocier</h2>
<p>Le sourcing consiste à interroger le bon panel, en y incluant les acteurs que le centre n’a pas l’habitude de solliciter. Nous analysons ensuite les offres poste par poste : équipement, installation, formation, maintenance, consommables, garantie, durée d’engagement, clauses de sortie. La négociation porte sur l’ensemble, pas seulement sur la remise, car un rabais sur le prix d’achat compensé par un contrat de maintenance rigide est une mauvaise affaire. Dans les centres dentaires, où l’intensité capitalistique est la plus forte, ces arbitrages structurent directement la rentabilité, comme nous l’exposons dans notre analyse du <a href="/ressources/modele-economique-centre-dentaire">modèle économique d’un centre dentaire</a>. Le système d’information mérite la même vigilance, car le coût d’un changement de logiciel réside surtout dans la migration des données et la reprise en main par les équipes, sujet détaillé dans notre article sur le <a href="/ressources/systeme-information-centre-de-sante">système d’information d’un centre de santé</a>.</p>

<h2>Acheter, louer ou financer autrement</h2>
<p>Le mode de financement se choisit après le besoin, jamais avant. Achat comptant, crédit-bail, location longue durée, emprunt bancaire : chaque solution a des conséquences différentes sur la trésorerie, le bilan, la fiscalité et la capacité à changer de matériel plus tard. Une structure jeune, une association et un centre porté par une collectivité n’ont ni les mêmes contraintes ni les mêmes interlocuteurs. Nous vérifions aussi si l’investissement peut être adossé à des ressources externes plutôt qu’à la seule trésorerie du centre, en lien avec notre mission <a href="/services/subventions-et-financements">subventions et financements</a>. La subvention Teulade, prévue à l’article L162-32 du code de la sécurité sociale, fait partie des dispositifs que nous examinons pour nos clients, son appréciation relevant d’une analyse au cas par cas menée dans le cadre d’une intervention dédiée.</p>

<h2>Ce que vous préparez, et les erreurs fréquentes</h2>
<p>Nous demandons l’inventaire du matériel en place avec son ancienneté, les contrats de maintenance et de location en cours, les devis déjà reçus, les plans des locaux et le budget envisagé. Les erreurs, elles, tiennent presque toujours au calendrier et à la précipitation.</p>
<ul>
<li>Acheter dans l’urgence après une panne, sans mise en concurrence.</li>
<li>Signer un contrat de location sans avoir lu les clauses de résiliation ni les conditions de renouvellement tacite.</li>
<li>Choisir un équipement surdimensionné par rapport à l’activité réelle, ou trop juste pour l’activité prévue.</li>
<li>Oublier la formation des équipes, ce qui laisse un matériel performant sous-utilisé.</li>
<li>Lancer les achats avant d’avoir sécurisé le plan de financement d’ensemble, difficulté que nous rencontrons régulièrement dans les projets de <a href="/services/creation-centre-de-sante">création de centre de santé</a>.</li>
</ul>

<h2>Situations simples, situations complexes, et lien avec nos autres missions</h2>
<p>Le renouvellement d’un équipement isolé dans un centre en fonctionnement se traite rapidement. La complexité apparaît lors d’un équipement complet à l’ouverture, d’un changement de logiciel métier, d’un déploiement sur plusieurs sites, d’un investissement immobilier, ou lorsque le porteur est soumis aux règles de la commande publique, qui imposent un formalisme et des délais spécifiques. Le calendrier devient alors la contrainte principale, avant même le prix. Dans tous les cas, les achats ne se traitent pas à part : ils s’appuient sur le pilotage budgétaire pour mesurer la capacité d’investissement, sur l’organisation interne pour vérifier que le matériel correspond aux flux réels, et sur la stratégie de <a href="/services/developpement">développement</a> lorsque l’investissement prépare une nouvelle activité. L’ensemble s’inscrit dans notre offre d’<a href="/accompagnement">accompagnement</a> au fonctionnement quotidien des centres de santé.</p>

<h2>Contactez-nous</h2>
<p>Avant de signer un devis ou un contrat de location, il est utile de faire relire le besoin, les offres et le montage financier par quelqu’un qui connaît le secteur. Nous regardons vos projets d’investissement et nous vous disons ce qui peut être renégocié ou financé autrement. Contactez-nous pour un check-up.</p>`,
  },
];

export const PILLARS: { id: Service["pillar"]; label: string; desc: string }[] = [
  { id: "financement", label: "Financement", desc: "Identification et mobilisation des financements et subventions." },
  { id: "structuration", label: "Structuration", desc: "Création, statuts juridiques, projet de santé, dossiers ARS." },
  { id: "developpement", label: "Développement", desc: "Recrutement, patientèle, ouverture d’antennes, croissance." },
  { id: "accompagnement", label: "Accompagnement", desc: "Gestion, organisation, pilotage de l’activité au quotidien." },
];
