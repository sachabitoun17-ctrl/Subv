// Glossaire des centres de santé.
//
// Format volontairement dense : chaque définition fait 2 à 4 phrases, de façon
// à répondre réellement à une requête de définition plutôt qu'à servir un
// libellé. `link` pointe vers la page qui approfondit le terme.
//
// RÈGLE COMMERCIALE : la subvention Teulade est nommée et située, jamais
// expliquée dans sa méthode, son taux ni sa procédure.

export type Terme = { term: string; def: string; link?: string };

export const termes: Terme[] = [
  // ── Structures d'exercice ────────────────────────────────────────────────
  {
    term: "CDS (centre de santé)",
    def: "Structure de soins ambulatoires définie par le code de la santé publique, dont la particularité est d’employer des soignants salariés plutôt que de les héberger comme libéraux. Le centre est porté par un gestionnaire à but non lucratif, pratique les tarifs opposables et le tiers payant. Cette double caractéristique, salariat et accessibilité, conditionne l’essentiel de son modèle économique.",
    link: "/centres-de-sante",
  },
  {
    term: "CMS (centre municipal de santé)",
    def: "Centre de santé porté par une commune, un centre communal d’action sociale ou un groupement de collectivités. Le portage public apporte une assise budgétaire et une légitimité territoriale, mais impose les règles de la commande publique et de la fonction publique territoriale. Le circuit de décision passe par les instances délibérantes, ce qui allonge les délais.",
    link: "/centres-de-sante/municipal",
  },
  {
    term: "CSI (centre de soins infirmiers)",
    def: "Centre de santé dont l’activité est centrée sur les soins infirmiers, au centre comme au domicile des patients. Son équilibre dépend fortement de l’organisation des tournées et du temps de déplacement, postes qui n’existent pas dans un centre médical classique.",
    link: "/centres-de-sante/infirmier",
  },
  {
    term: "Centre de santé polyvalent",
    def: "Centre réunissant plusieurs disciplines médicales et paramédicales au sein d’une même structure. La polyvalence facilite les parcours internes et la coordination, mais complexifie la gestion des plannings, des plateaux techniques et des grilles de rémunération.",
    link: "/centres-de-sante/polyvalent",
  },
  {
    term: "MSP (maison de santé pluriprofessionnelle)",
    def: "Structure d’exercice coordonné regroupant des professionnels de santé qui restent libéraux. C’est la différence de fond avec le centre de santé, où les soignants sont salariés. Cette distinction commande le statut juridique, le mode de rémunération et les dispositifs de financement accessibles.",
    link: "/ressources/centre-de-sante-ou-maison-de-sante",
  },
  {
    term: "CPTS (communauté professionnelle territoriale de santé)",
    def: "Organisation qui fédère à l’échelle d’un territoire des professionnels de santé de différentes structures autour d’objectifs communs d’accès aux soins et de parcours. Un centre de santé peut y adhérer sans perdre son autonomie, et y trouver des coopérations utiles.",
    link: "/ressources/centre-de-sante-cpts",
  },

  // ── Gestionnaires et statuts ─────────────────────────────────────────────
  {
    term: "Gestionnaire de centre de santé",
    def: "Personne morale qui porte juridiquement le centre, emploie le personnel et répond de la conformité de la structure devant l’autorité de tutelle. Il peut s’agir d’une association, d’une collectivité, d’une mutuelle, d’une fondation ou d’un organisme de protection sociale. Le choix du gestionnaire détermine la gouvernance, la fiscalité et les financements accessibles.",
    link: "/ressources/gestionnaire-centre-de-sante",
  },
  {
    term: "Association loi 1901",
    def: "Statut le plus répandu pour porter un centre de santé, en raison de sa souplesse de constitution et de son caractère non lucratif. Il suppose une gouvernance réelle, avec des instances qui se réunissent et délibèrent, faute de quoi la structure s’expose à une requalification.",
    link: "/ressources/statut-juridique-centre-de-sante",
  },
  {
    term: "Centre mutualiste",
    def: "Centre de santé porté par une mutuelle ou une union mutualiste. Le portage apporte des fonctions support consolidées, une capacité d’investissement et un adossement financier que peu de gestionnaires isolés possèdent.",
    link: "/centres-de-sante/mutualiste",
  },

  // ── Institutions ─────────────────────────────────────────────────────────
  {
    term: "ARS (agence régionale de santé)",
    def: "Autorité de tutelle des centres de santé à l’échelle régionale. Elle enregistre la structure, apprécie la conformité de son projet de santé, pilote la politique d’accès aux soins du territoire et intervient comme financeur. Ses arbitrages varient d’une région à l’autre selon le projet régional de santé.",
    link: "/ressources/role-ars-centre-de-sante",
  },
  {
    term: "CPAM (caisse primaire d’assurance maladie)",
    def: "Interlocuteur de proximité de l’assurance maladie pour le conventionnement, la facturation et les flux de remboursement. C’est par elle que transitent l’essentiel des recettes d’activité d’un centre conventionné.",
  },
  {
    term: "URPS (union régionale des professionnels de santé)",
    def: "Instance représentative des professionnels de santé libéraux à l’échelle régionale, associée à la concertation sur l’organisation des soins. Elle intervient dans certains dispositifs de soutien régionaux.",
  },
  {
    term: "FINESS",
    def: "Répertoire national des établissements sanitaires et sociaux. Un centre de santé y est identifié par un numéro qui conditionne sa facturation et son existence administrative. Sans numéro FINESS, la structure ne peut pas fonctionner.",
  },

  // ── Cadre conventionnel et financements ──────────────────────────────────
  {
    term: "Conventionnement",
    def: "Acte par lequel un centre de santé adhère à l’accord national conclu avec l’assurance maladie. Il ouvre l’accès aux financements conventionnels et engage en retour la structure sur les tarifs opposables, le tiers payant et une série d’obligations d’organisation.",
    link: "/ressources/conventionnement-centre-de-sante",
  },
  {
    term: "Accord national des centres de santé",
    def: "Cadre conventionnel négocié entre les représentants des centres de santé et l’assurance maladie. Il définit les engagements des structures et les rémunérations forfaitaires qui les accompagnent, au-delà du paiement à l’acte.",
    link: "/ressources/accord-national-centres-de-sante",
  },
  {
    term: "Rémunération forfaitaire spécifique",
    def: "Rémunération versée en contrepartie d’engagements portant sur l’organisation du centre, mesurée par des indicateurs socles et optionnels déclinés selon quatre axes : accès aux soins, travail en équipe et coordination, systèmes d’information, démarche qualité. Souvent appelée à tort forfait structure, appellation issue d’autres cadres conventionnels. Elle est déclarative, ce qui la rend fragile : un indicateur non tracé pendant l’année est une recette perdue.",
    link: "/ressources/forfaits-structure-centre-de-sante",
  },
  {
    term: "ROSP (rémunération sur objectifs de santé publique)",
    def: "Rémunération complémentaire assise sur l’atteinte d’indicateurs répartis en trois familles : suivi des pathologies chroniques, prévention et efficience. Elle a cessé de s’appliquer aux centres de santé : depuis le 1er janvier 2026, le forfait médecin traitant la remplace, ainsi que le forfait patientèle médecin traitant. L’exercice 2025 fut le dernier au titre de la ROSP.",
    link: "/ressources/rosp-centre-de-sante",
  },
  {
    term: "Forfait médecin traitant",
    def: "Dispositif institué par l’accord national des centres de santé entré en vigueur le 1er octobre 2025, applicable depuis le 1er janvier 2026. Il remplace à la fois la rémunération sur objectifs de santé publique et le forfait patientèle médecin traitant, en conservant le principe d’une rémunération assise sur le suivi d’une patientèle dans la durée plutôt que sur un volume d’actes.",
  },
  {
    term: "Valorisations démographiques",
    def: "Rémunérations liées au zonage de la commune d’implantation, instituées par l’accord national entré en vigueur le 1er octobre 2025. Elles remplacent les contrats démographiques, contrat d’aide à l’installation, contrat de stabilisation et de coordination et contrat de solidarité territoriale, auxquels les centres médicaux et polyvalents ne peuvent plus adhérer. Elles s’appliquent sans qu’un contrat soit signé.",
  },
  {
    term: "ACI (accord conventionnel interprofessionnel)",
    def: "Convention qui finance forfaitairement les structures d’exercice coordonné sur des critères de coordination, d’accès aux soins et de système d’information partagé. Elle concerne principalement les maisons de santé pluriprofessionnelles.",
  },
  {
    term: "FIR (fonds d’intervention régional)",
    def: "Enveloppe gérée par les agences régionales de santé, mobilisable pour l’ingénierie de projet, l’aide au démarrage, l’investissement, le temps de coordination ou des actions de prévention. Ses règles et ses calendriers d’appels à projets varient d’une région à l’autre.",
    link: "/ressources/fonds-intervention-regional-centre-de-sante",
  },
  {
    term: "Subvention Teulade",
    def: "Dispositif de financement propre aux centres de santé conventionnés, prévu par l’article L162-32 du code de la sécurité sociale. Il ne se confond ni avec une aide de l’agence régionale de santé, ni avec une subvention de collectivité, ni avec les forfaits de l’accord national : il relève d’un régime distinct, rattaché au statut de la structure. C’est l’un des dispositifs les plus fréquemment laissés de côté, faute d’être identifié en interne.",
    link: "/subvention-teulade",
  },
  {
    term: "Contrat d’aide à l’installation",
    def: "Dispositif incitatif destiné à favoriser l’installation de professionnels de santé dans les territoires où l’offre est insuffisante. Son accès dépend du zonage applicable à la commune d’implantation.",
    link: "/ressources/aides-installation-zone-sous-dense",
  },

  // ── Zonage et territoire ─────────────────────────────────────────────────
  {
    term: "Zone sous-dense",
    def: "Territoire caractérisé par une offre de soins insuffisante au regard des besoins de la population. Le classement en zone sous-dense conditionne l’accès à plusieurs dispositifs d’aide à l’installation et d’exercice. Il est révisé périodiquement, ce qui peut ouvrir ou fermer des droits.",
  },
  {
    term: "QPV (quartier prioritaire de la politique de la ville)",
    def: "Zonage urbain ouvrant droit à des dispositifs de soutien spécifiques. Un centre de santé implanté en QPV peut être éligible à des aides qui n’existent pas ailleurs, notamment du côté des collectivités.",
  },
  {
    term: "Désert médical",
    def: "Expression courante désignant un territoire où l’accès à un médecin est durablement dégradé. Elle n’a pas de définition réglementaire propre : ce sont les zonages officiels qui déterminent l’éligibilité aux aides.",
  },

  // ── Réglementaire et conformité ──────────────────────────────────────────
  {
    term: "Projet de santé",
    def: "Document fondateur exigé pour l’ouverture d’un centre de santé. Il décrit la population desservie, l’offre proposée, l’organisation de l’équipe, les modalités de coordination et les engagements d’accessibilité. Il est lu comme un engagement opposable, et son contenu doit rester cohérent avec le fonctionnement réel du centre.",
    link: "/ressources/projet-de-sante-centre-de-sante",
  },
  {
    term: "Règlement de fonctionnement",
    def: "Document qui fixe les règles internes de la structure, notamment les droits des patients et l’organisation de la prise en charge. Il accompagne le projet de santé dans le dossier remis à l’autorité de tutelle.",
  },
  {
    term: "Engagement de conformité",
    def: "Déclaration par laquelle le gestionnaire atteste que le centre respecte les conditions techniques de fonctionnement applicables. Il conditionne l’ouverture et engage la responsabilité du gestionnaire.",
    link: "/services/conformite-projet-de-sante",
  },
  {
    term: "Agrément des activités dentaires et ophtalmologiques",
    def: "Autorisation préalable exigée avant l’ouverture de ces activités en centre de santé, instaurée pour répondre aux dérives constatées dans certaines enseignes. Elle s’accompagne d’obligations renforcées de transparence sur la gouvernance et les liens capitalistiques du gestionnaire.",
    link: "/centres-de-sante/dentaire",
  },
  {
    term: "Comité dentaire ou médical",
    def: "Instance interne associant les praticiens du centre, chargée de veiller à la qualité et à l’indépendance des pratiques de soins. Sa mise en place fait partie des obligations de gouvernance des centres concernés.",
  },
  {
    term: "Dossier ARS",
    def: "Ensemble des pièces déposées auprès de l’agence régionale de santé pour ouvrir un centre ou faire évoluer son activité. Sa cohérence d’ensemble compte autant que son exhaustivité : des pièces qui se contredisent bloquent l’instruction.",
    link: "/services/dossier-ars",
  },

  // ── Exercice et facturation ──────────────────────────────────────────────
  {
    term: "Tiers payant",
    def: "Dispense d’avance de frais pour le patient, le centre étant réglé directement par l’assurance maladie et les organismes complémentaires. C’est un pilier de l’accessibilité, et simultanément un point de fragilité : rejets non retraités et restes à charge non recouvrés se transforment en pertes sèches.",
    link: "/ressources/tiers-payant-centre-de-sante",
  },
  {
    term: "Tarifs opposables (secteur 1)",
    def: "Tarifs conventionnels appliqués sans dépassement d’honoraires. Les centres de santé s’y engagent, ce qui garantit l’accessibilité financière des soins et ouvre en contrepartie l’accès à des financements conventionnels.",
    link: "/ressources/accessibilite-financiere-centre-de-sante",
  },
  {
    term: "File active",
    def: "Nombre de patients distincts ayant eu recours au centre sur une période donnée. C’est l’indicateur d’activité le plus structurant, car il conditionne à la fois les recettes d’actes et plusieurs dispositifs forfaitaires.",
  },
  {
    term: "Patientèle médecin traitant",
    def: "Ensemble des patients ayant déclaré un médecin du centre comme médecin traitant. Cette déclaration ouvre des rémunérations spécifiques et structure le suivi au long cours.",
  },
  {
    term: "Cotation",
    def: "Traduction d’un acte de soin en code de facturation. Une cotation incomplète ou erronée est l’une des premières causes de pertes de recettes dans un centre, et elle passe inaperçue parce que les comptes restent justes.",
  },

  // ── Ressources humaines ──────────────────────────────────────────────────
  {
    term: "Médecin salarié",
    def: "Praticien employé par le gestionnaire du centre, rémunéré par un salaire et déchargé de la gestion administrative de son activité. Ce statut attire une part croissante de praticiens en quête de stabilité et d’équilibre de vie.",
    link: "/ressources/salaire-medecin-salarie-centre-de-sante",
  },
  {
    term: "Convention collective des centres de santé",
    def: "Cadre conventionnel applicable aux salariés du secteur, qui encadre notamment les classifications et les conditions d’emploi. Il constitue la base sur laquelle se construit la politique de rémunération d’un centre.",
    link: "/ressources/contrat-medecin-salarie-centre-de-sante",
  },
  {
    term: "IPA (infirmier en pratique avancée)",
    def: "Infirmier disposant de compétences élargies lui permettant d’assurer le suivi de patients dans un cadre défini avec les médecins. C’est un levier de libération de temps médical dans les structures qui peinent à recruter.",
  },
  {
    term: "Assistant médical",
    def: "Professionnel qui décharge le praticien de tâches administratives et de préparation de la consultation. Son apport se mesure directement en temps médical rendu disponible.",
  },
  {
    term: "Coordination",
    def: "Fonction qui relie les professionnels, organise les parcours et fait circuler l’information au sein du centre. Elle est reconnue et finançable par les dispositifs conventionnels, à condition que l’activité correspondante soit tracée.",
    link: "/ressources/coordination-centre-de-sante",
  },

  // ── Système d'information et pilotage ────────────────────────────────────
  {
    term: "Système d’information labellisé",
    def: "Logiciel métier conforme aux référentiels nationaux d’interopérabilité et de sécurité. Sa conformité conditionne l’accès à certains financements et la participation aux échanges de données de santé.",
    link: "/ressources/systeme-information-centre-de-sante",
  },
  {
    term: "Indicateurs de pilotage",
    def: "Ensemble restreint de mesures suivies dans la durée pour piloter l’activité et l’équilibre du centre. Leur utilité tient moins à leur nombre qu’à leur régularité et à leur exploitation effective.",
    link: "/ressources/indicateurs-pilotage-centre-de-sante",
  },
  {
    term: "Trésorerie",
    def: "Capacité du centre à honorer ses échéances compte tenu du décalage entre les soins réalisés et leur encaissement. Le tiers payant accentue mécaniquement ce décalage, ce qui en fait un point de vigilance permanent.",
    link: "/ressources/tresorerie-centre-de-sante",
  },
];
