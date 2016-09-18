'use strict';

var R6MapsLangTermsFrench = (function(R6MapsLangTerms, undefined) {
  var name = 'fr',
    terms = {
      general: {
        pageTitle: 'Carte de siège - {mapName}',
        pageTitleSelectMap: 'Carte de siège - Choisir une carte',
        pageTitleStart: 'Carte de siège',
        cameraViewCaption: '{floorName} de caméra',
        shortcutTip: 'Raccourci: 1 {shortcut}',
        menu: 'Menu',
        about: 'Information',
        languageHeader: 'La Langue',
        linkAbout: 'about-fr.html',
        labelLosOpacity: 'Appareil photo en ligne de mire l\'opacité',
        labelPercent: '{int} %',// according to: (0.12).toLocaleString('fr', { style: 'percent' });
        labelLosDefault: '( Défaut )',
        labelLos105: '( Hein? )',
        labelLos110: '( Folie! )',
        labelRoomLabelStyle: 'Chambre style d\'étiquette',
        labelNumberFloorsToDisplay: 'Nombre d\'étages pour afficher',
        lockPanning: 'Panoramique serrure'
      },
      roomLabelStyles: {
        Dark: 'Foncé',
        Light: 'Lumière ( Défaut )',
        DarkAndLarge: 'Grand et Sombre',
        LightAndLarge: 'Grand et Lumière'
      },
      floorDisplayOptions: {
        one: '1 ( Défaut )',
        two: '2 ( Divisé )',
        four: '4 ( Grille )'
      },
      selectMaps: {
        selectAMap: 'Sélectionnez une carte',
        homeLink: 'Sélectionnez une carte'
      },
      floorNames: {
        basement: { full: 'Sous-sol', short: 'S' },
        firstFloor: { full: 'Rez-de-chaussée', short: 'R' },
        secondFloor: { full: '2ème', short: '2' },
        thirdFloor: { full: '3ème', short: '3' },
        fourthFloor: { full: '4ème', short: '4' },
        roof: { full: 'Toit', short: 'T' }
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Bombe',
        hostageShort: 'O',
        hostage: 'Orage',
        secureShort: 'S',
        secure: 'Sécurisation',
        showAll: 'Montre tout'
      },
      legend: {
        breakableWalls: 'Murs cassables',
        breakableFloorTraps: 'Trappes de plancher cassables',
        ceilingHatches: 'Trappes de plafond',
        lineOfSightWalls: 'Ligne de murs à vue',
        lineOfSightFloors: 'Ligne d\'étages à vue',
        droneTunnels: 'Tunnels drone',
        objectives: 'Objectifs',
        insertionPoints: 'Points d\'insertion',
        securityCameras: 'Des caméras de sécurité',
        skylights: 'Puits de lumière',
        onFloorAboveOrBelow: 'A l\'étage au-dessus ou au-dessous',
        cameraLineOfSight: 'Ligne de mire de la caméra'
      },
      mapNames: {
        bank: 'Banque',
        border: 'Frontière',
        chalet: 'Chalet',
        club: 'Club House',
        consulate: 'Consulat',
        favelas: 'Favelas',
        hereford: 'Hereford',
        house: 'Maison',
        kanal: 'Canal',
        kafe: 'Café Dostoyevsky',
        oregon: 'Oregon',
        plane: 'Avion Présidentiel',
        yacht: 'Yacht'
      },
      mapRooms: {
        bank: {
          spawnBoulevard: 'Devant le parking',
          spawnSewerAccess: 'Devant la bijouterie',
          spawnBackAlley: 'Accès à la ruelle',
          parkingLot: 'Devant le parking',
          boulevard: 'Boulevard',
          jewelryFront: 'Devant la bijouterie',
          plaza: 'Place',
          mainEntrance: 'Entrée principale',
          garageRamp: 'Rampe<br/>du garage',
          exteriorParking: 'Parking Extérieur',
          garageRoof: 'Toit du<br/>garage',
          alleyAccess: 'Accès à la ruelle',
          backAlleyRooftop: 'Toit de<br/>la ruelle',
          backAlley: 'Ruelle',
          highRoof: 'Toit supérieur',
          lowRoof: 'Toit inférieur',
          vault: 'Salle des<br/>coffres',
          goldVault: 'Salle<br/>des<br/>lingots',
          serverRoomStairs: 'Escalier salle des serveurs',
          serverRoom: 'Salle des serveurs',
          CCTVRoom: 'Salle de<br/>survei-<br/>llance',
          loadingDock: 'Quais de<br/>chargement',
          secureHallway: 'Couloir<br/>sécuriseé',
          sewer: 'Tunnel',
          lockers: 'Vestiaires',
          vaultLobby: 'Hall salle<br/>des coffres',
          vaultEntrance: 'Extrée<br/>salle des<br/>coffres',
          mainStairway: 'Escalier<br/>principal',
          bankGarage: 'Garage de la banque',
          elevators: 'Ascen-<br/>seurs',
          tellersOffice: 'Guichets',
          archives: 'Archives',
          tellers: 'Guichets',
          loanOffice: 'Bureau<br/>des prêts',
          printerRoom: 'Imprimerie',
          openArea: 'Open space',
          officeHallway: 'Couloir du bureau',
          skylightStairwell: 'Cage d\'escalier<br/>éclairée',
          lobby: 'Entrée',
          staffRoom: 'Salle du<br/>personnel',
          electricalRoom: 'Local<br/>électrique',
          adminOffice: 'Administration',
          ATMs: 'Distributeurs de billets',
          executiveHallway: 'Couloir<br/>exécutif',
          frontDesk: 'Accueil<br/>',
          executiveLounge: 'Salon<br/>exécutif',
          CEOOffice: 'Bureau<br/>du PDG',
          janitorCloset: 'Local du concierge',
          hallway: 'Couloir',
          terrace: 'Terrasse',
          stockTradingRoom: 'Salle des<br/>transactions',
          conferenceRoom: 'Salle de<br/>conférences'
        },
        border: {
          tellers: 'Guichets',
          ventilationRoom: 'Salle<br/>de<br/>ventilation',
          exitHallway: 'Couloir de<br/>la sortie',
          supplyCorridor: 'Couloir de<br/>la réserve',
          detention: 'Salle de détention',
          customsInspection: 'Inspections de la douane',
          customsDesk: 'Bureau de<br/>la douane',
          centralStairs: 'Escalier central',
          serverRoom: 'Salle des serveurs',
          supplyRoom: 'Réserve',
          workshop: 'Atelier',
          mainLobby: 'Entrée',
          bathroom: 'WC',
          waitingRoom: 'Salle<br/>d\'attente',
          eastStairs: 'Escalier<br/>est',
          passportCheck: 'Contrôle des<br/>passeports',
          archives: 'Archives',
          offices: 'Bureaux',
          officesHallway: 'Couloir du bureaux',
          fountain: 'Fontaine',
          mainHallway: 'Couloir<br/>principal',
          armoryDesk: 'Accueil de<br/>l\'armurerie',
          armoryLockers: 'Casiers de<br/>l\'armurerie',
          securityRoom: 'Salle de<br/>sécurité',
          breakRoom: 'Salle de repos',
          spawnEastVehicleEntrance: 'Entrée des véhicules est',
          spawnValley: 'Vallée',
          spawnWestVehicleExit: 'Sortie des véhicules ouest',
          westTower: 'Tour<br/>ouest',
          pedestrianExit: 'Sortie des piétons',
          valley: 'Vallée',
          parkingLotEntrance: 'Entrée du<br/>parking',
          parkingLot: 'Parking',
          westRoad: 'Route ouest ',
          vehicleCustoms: 'Douane des véhicules',
          crashScene: 'Lieu de l\'accident',
          eastRoad: 'Route est',
          pedestrianEntrance: 'Entrée des<br/>piétons',
          pedestrianCustoms: 'Douane des<br/>piétons',
          watchTower: 'Tour de<br/>guet',
          eastAlley: 'Allée est',
          parkingLotAlley: 'Allée<br/>du<br/>parking',
          northBalcony: 'Balcon nord',
          eastBalcony: 'Balcon<br/>est',
          westBalcony: 'Balcon<br/>ouest',
          southBalcony: 'Balcon sud',
          roof: 'Toit'
        },
        chalet: {
          spawnFrontYard: 'Jardin devant la maison	',
          spawnCampfire: 'Feu de camp',
          spawnCliffside: 'Falaise',
          spawnLakeside: 'Bord de lac',
          libraryStairs: 'Escalier de<br/>la bibliothèque',
          snowmobileGarageCorridor: 'Couloir garage à motoneiges',
          snowmobileGarage: 'Garage à<br/>motoneiges',
          greatRoomStairs: 'Escalier<br/>de la<br/>grande<br/>salle',
          storageRoom: 'Salle de<br/>stockage',
          wineCellar: 'Cave<br/>à vin',
          wineStock: 'Réserve<br/>de vin',
          basementHallway: 'Couloir<br/>du sous-sol',
          backyardStairs: 'Escalier<br/>du jardin',
          mainStairs: 'Escalier<br/>principal',
          mainGarage: 'Garage principal',
          garageEntrance: 'Entrée du<br/>garage<br/>principal',
          westEntrance: 'Entrée<br/>ouest',
          gamingRoomHallway: 'Couloir de la<br/>salle de jeux',
          gamingRoom: 'Salle<br/>de jeux',
          bar: 'Bar',
          greatRoom: 'Grande salle',
          diningRoom: 'Salle à manger',
          mainEntrance: 'Entrée<br/>principale',
          trophyRoom: 'Salle des trophées',
          kitchenHallway: 'Couloir<br/>de la cuisine',
          kitchen: 'Cuisine',
          libraryHallway: 'Couloir de la bibliothèque',
          libraryEntrance: 'Entrée<br/>de la<br/>bibliothèque',
          library: 'Biblio-<br/>thèque',
          bedroomTerrace: 'Terrasse de<br/>la chambre',
          fireplaceHallway: 'Couloir avec<br/>cheminée',
          bedroomHallway: 'Couloir de la<br/>chambre',
          masterBathroom: 'Salle de bain<br/>principale',
          masterBedroom: 'Chambre principale',
          office: 'Bureau',
          woodenTrail: 'Sentier dans<br/>le bois',
          campfireWood: 'Bois pout le feu de camp',
          backyard: 'Jardin de derrière',
          gazeebo: 'Belvédère',
          cliffsideStairs: 'Escalier de la<br/>falaise',
          cliffsideWoods: 'Ebois de la falaise',
          backyardPatio: 'Patio de derrière',
          officeBalcony: 'Balcon<br/>du bureau',
          helipadTrail: 'Bord<br/>de lac',
          helipad: 'Hélistation',
          frontYardPatio: 'Patio<br/>de devant',
          frontYard: 'Jardin devant<br/>la maison',
          bathroomBalcony: 'Balcon de la<br/>salle de bain',
          libraryBalcony: 'Balcon de la<br/>bibliothèque',
          bedroomBalcony: 'Balcon de la<br/>chambre',
          snowmobiles: 'Montoneiges'
        },
        favelas: {
          packagingRoom: 'Salle de<br/>conditionement',
          footballApartment: 'Apartement de<br/>footballeur',
          armoryRoom: 'Armurerie',
          auntsApartment: 'Apartement de<br/>la tante',
          auntsBedroom: 'Chambre de<br/>la tante',
          growRoom: 'Salle de<br/>plantation',
          bikersApartment: 'Apartement<br/>de biker',
          methLab: 'Labo de meth',
          footballBedroom: 'Chambre de<br/>footballeur',
          footballOffice: 'Bureau de<br/>footballeur',
          bikersBedroom: 'Chambre<br/>de biker',
          backStairs: 'Escalier<br/>de service',
          auntsHall: 'Chambre de<br/>la tante',
          kidsRoom: 'Chambre des<br/>enfants',
          mainStairs: 'Escalier<br/>principal',
          stairHall: 'Cage<br/>d\'escalier',
          roof: 'Toit',
          laundryRoom: 'Buanderie',
          vaultRoom: 'Coffre',
          bikersGarage: 'Garage<br/>de biker',
          backAlley: 'Ruelle',
          schoolAlley: 'Allé de l\'école',
          footballPitch: 'Terrain de foot',
          market: 'Marché',
          street: 'Rue',
          rooftops: 'Toits',
          courtyard: 'Cour',
          accessAlley: 'Voie d\'accès',
          shop: 'Magasin<br/>(pas montré)',
          marketRooftops: 'Toits du marché'
          //Allée du marché TO DO
        },
        kanal: {
          spawnFloatingDock: 'Quai flottant',
          spawnSailboats: 'Voiliers',
          spawnConstructionSite: 'Chantier',
          boatGarage: 'Hangar à bateaux',
          boatSupplies: 'Remise du hangar',
          pipes: 'Tuyaux percés',
          boatSuppliesHallway: 'Couloir<br/>remise<br/>du hangar',
          lockerRoom: 'Vestiares',
          coastGuardStairs: 'Escalier<br/>garde-côte',
          showers: 'Douches',
          loadingDock: 'Quai de chargement',
          machineHallway: 'Salle des<br/>machines',
          controlCenterStairs: 'Escalier centre<br/>de contrôle',
          holdingRoom: 'Cellule de détention',
          holdingRoomHallway: 'Couloir<br/>cellule<br/>de détention',
          radio: 'Radio',
          coastGuardOffice: 'Bureau<br/>garde-côte',
          archives: 'Archives',
          coastGuardHall: 'Couloir<br/>garde-côte<br/>',
          mainEntrance: 'Entrée<br/>principale',
          lounge: 'Lounge',
          bridge: 'Pont',
          modelRoom: 'Salle de la maquette',
          securityRoom: 'Salle de<br/>sécurité',
          projectorRoom: 'Salle de projection',
          mapsOffice: 'Salle des cartes',
          mapsOfficeHallway: 'Couloir salle des cartes',
          kitchen: 'Cuisine',
          cafeteria: 'Caféteéria',
          plantsHallway: 'Couloir avec plantes',
          thirdFloorExit: 'Sortie du<br/>3d étage<br/>',
          controlRoom: 'Salle de contrôle',
          electricRoom: 'Local<br/>électrique',
          controlRoomHallway: 'Couloir salle de contrôle',
          serverRoom: 'Salle des serveurs',
          lockgate: 'Écluse',
          quayContainers: 'Conteneurs à quai',
          lockgateTunnel: 'Tunnel<br/>à écluse',
          waterWalkway: 'Passerelle',
          quayConstruction: 'Quai en contruction',
          constructionSite: 'Chantier<br/>',
          constructionEntrance: 'Entrée<br/>du chantier',
          parkingAlley: 'Allée du parking',
          parkingEntrance: 'Entrée<br/>du parking',
          middleRoad: 'Route<br/>du milieu',
          forkliftAlley: 'Allée char.<br/>Élévateurs',
          frontLawn: 'Pelouse de devant',
          basementStairs: 'Escalier du sous-sol',
          coastGuardRoof: 'Toit<br/>de la<br/>garde-côte',
          roofBrickPile: 'Tas<br/>de<br/>tuiles',
          balcony: 'Balcon',
          controlCenterRoof: 'Toit<br/>du centre<br/>de contrôle',
          dockStairs: 'Escalier du quai',
          parking: 'Parking',
          boatCrane: 'Grue'
        },
        club: {
          spawnMainEntrance: 'Porte principale',
          spawnShippingDocks: 'Quai de chargement',
          spawnWarehouse: 'Entrepôt',
          spawnConstructionSite: 'Chantier',
          easternSubroof: 'Toit est à<br/>mi-hauteur',
          constructionSite: 'Chantier<br/>',
          container: 'Conteneur',
          graffitiArea: 'Zone de graffitis',
          recreationArea: 'Zone<br/>de loisirs',
          junkyard: 'Décharge',
          shippingDock: 'Quai de<br/>chargement',
          VIPParking: 'Parking VIP',
          mainGate: 'Porte principale',
          parking: 'Parking',
          kennels: 'Chenils',
          trash: 'Local à<br/>pubelles',
          centralSubroof: 'Toit<br/>central<br/>à mi-hauteur',
          easternRoof: 'Toit est',
          centralRoof: 'Toit<br/>central',
          westernRoof: 'Toit ouest',
          balcony: 'Balcon',
          escapeTunnel: 'Tunnel<br/>d\'évacuation',
          arsenalRoom: 'Armurerie<br/>',
          basementHallway: 'Couloir du sous-sol',
          memorialRoom: 'Mémorial',
          utilityRoom: 'Buanderie',
          oilPit: 'Réserve<br/>d\'essence',
          centralStairs: 'Escalier<br/>central',
          church: 'Église',
          frontPorch: 'Porche',
          garage: 'Garage',
          lobby: 'Entrée',
          stockRoom: 'Réserve',
          garageStorage: 'Remise<br/>du garage',
          lounge: 'Lounge',
          bar: 'Bar',
          centralHallway: 'Couloir central',
          kitchen: 'Cuisine',
          kitchenEntrance: 'Entrée de<br/>la cuisine',
          westernHallway: 'Couloir<br/>ouest',
          stripClub: 'Club de<br/>strip-tease',
          junkyardEntrance: 'Entrée de<br/>la décharge',
          sideEntrance: 'Entrée latérale',
          changingRoom: 'Vestiaire<br/>',
          bedroom: 'Chambre',
          bathroom: 'Salle<br/>de bain',
          bedroomHallway: 'Couloir de la chambre',
          logisticOffice: 'Bureau<br/>logistique',
          gym: 'Salle<br/>de sport',
          secretStash: 'Pièce<br/>secrète',
          CCTVRoom: 'Salle de<br/>surveillance',
          cashRoom: 'Salle des<br/>recettes',
          easternStairs: 'Escalier<br/>est'
        },
        consulate: {
          spawnRiotBarricade: 'Barricades',
          spawnPoliceLine: 'Barrage policier',
          spawnGasStation: 'Station-service',
          spawnSideEntrance: 'Entrée',
          exitStairs: 'Escalier<br/>de sortie',
          garage: 'Garage',
          basementCorridor: 'Couloir du sous-sol',
          securityRoom: 'Salle de<br/>sécurité',
          cafeteria: 'Cafétéeria',
          mainStairs: 'Escalier principal',
          lockerHallway: 'Couloir<br/>du vestiaire',
          serviceStairs: 'Escalier de<br/>service',
          electricRoom: 'Local<br/>elec-<br/>trique',
          storageRoom: 'Salle de stockage',
          archives: 'Archives',
          archivesCorridor: 'Couloir des<br/>archives',
          pressRoom: 'Salle de presse',
          westCorridor: 'Couloir ouest',
          publicBathroom: 'WC public',
          antechamber: 'Antichambre',
          lobby: 'Entrée',
          eastCorridor: 'Couloir<br/>est',
          tellers: 'Guichets',
          visaOffice: 'Bureaue des<br/>visas',
          visaEntrance: 'Entrée<br/>du bureau<br/>des visas',
          frontDoor: 'Porte<br/>d\'entrée',
          balcony: 'Balcon',
          copyRoom: 'Salle de repro.',
          cabinet: 'Cabinet',
          administrationOffice: 'Administration',
          breakRoom: 'Salle de<br/>repos',
          frontOffice: 'Accueil',
          meetingRoom: 'Salle de<br/>réunion',
          hallway: 'Couloir',
          consulFrontDesk: 'Accueil du<br/>consul',
          privateBathroom: 'WC privé',
          waitingRoom: 'Salle<br/>d\'attente',
          consulateOffice: 'Bureau<br/>du consul',
          garageWay: 'Allée du garage',
          courtyard: 'Cour',
          backCourtyard: 'Cour arrière',
          sideEntrance: 'Entrée',
          dumpster: 'Benne',
          parking: 'Parking',
          gardens: 'Jardins',
          fountain: 'Fontaine',
          emergencyExit: 'Sortie<br/>de secours',
          garageRoof: 'Toit du<br/>garage',
          memorialGarden: 'Jardin du souvenir',
          policeLine: 'Barrage policier',
          riotBarracade: 'Barricades',
          eastFrontYard: 'Jardin de devant Ouest',
          westFrontYard: 'Jardin de devant Est',
          frontAlley: 'Allée de devant',
          buildingRoof: 'Toit de<br/>l\'immeuble'
        },
        hereford: {
          spawnTrainingCourse: 'Terrain d\'entraînement',
          spawnBarrak: 'Parking',
          spawnShootingRange: 'Stand de tir',
          armory: 'Armuererie',
          alleyStairs: 'Allée avec<br/>escalier latéral',
          lockers: 'Vestiaires',
          corridor: 'Couloir',
          mainStairs: 'Escalier prin-<br/>cipal',
          maintenanceArea: 'Zone de<br/>maintenance',
          briefingRoom: 'Salle de<br/>briefing',
          basementEntrance: 'Entrée du<br/>sous-sol',
          garage: 'Garage',
          TVRoom: 'Salon TV',
          garageCorridor: 'Couloir du garage',
          kitchen: 'Cuisine',
          corridor1: 'Couloir<br/>RDC',
          diningRoom: 'Salle à<br/>manger',
          pianoLounge: 'Salle du piano',
          office: 'Bureau',
          masterBedroom: 'Chambre principale',
          backAccess: 'Entrée de<br/>derrière',
          laundryRoom: 'Buan-<br/>derie',
          bathroom: 'Salle de bain',
          kidsBedroom: 'Chambre des enfants',
          ballisticMatDepot: 'Dépôt de<br/>matelas<br/>de tir',
          storage: 'Stockage',
          storageCorridor: 'Couloir<br/>stockage',
          dummyDepot: 'Dépôt de<br/>mannequins',
          workshop: 'Atelier',
          shootingRangeEastEntrance: 'Stand de tir<br/>(accès Est)',
          shootingRangeWestEntrance: 'Stand de tir<br/>(accès Ouest)',
          tireSetting: 'Barrage de pneus',
          observationRamp: 'Rampe d\'observation',
          barracks: 'Caserne',
          busBackAlley: 'Ruelle avec<br/>un bus',
          rappelTower: 'Terrain<br/>d\'entraînement',
          terrace: 'Terrasse',
          frontAccess: 'Entrée de devant',
          chapelGate: 'Portail de la chapelle',
          forkliftArea: 'Zone chariots<br/>élévateurs',
          sideStairsAlley: 'Allée avec<br/>escalier latéral',
          sideStairs: 'Escalier latéral',
          garageTop: 'Toit du garage',
          rooftop: 'Toit'
        },
        house: {
          spawnConstructionSite: 'Chantier',
          spawnRiverDocks: 'Pontons',
          spawnAPCArea: 'Zone du VTT',
          spawnSideStreet: 'Rue latérale',
          depot: 'Entrpôt',
          trainingRoom: 'Salle de sport',
          kitchenStairs: 'Escalier de<br/>la cuisine',
          sideStairs: 'Escalier<br/>latéral',
          laundryRoom: 'Buanderie<br/>',
          garage: 'Garage',
          livingRoom: 'Salon',
          backEntrance: 'Entrée de derrière',
          lobby: 'Entrée',
          kitchen: 'Cuisine',
          office: 'Bureau',
          diningRoom: 'Salle à<br/>manger',
          workshop: 'Atelier',
          kidsBedroom: 'Chambre<br/>d\'enfant',
          upperHallway: 'Couloir<br/>du haut',
          lobbyStairs: 'Escalier<br/>de l\'entrée',
          walkIn: 'Dressing',
          masterBedroom: 'Chambre<br/>principale',
          bathroom: 'Salle de bain',
          sideStreet: 'Rue<br/>latérale',
          garageEntrance: 'Entrée<br/>du garage',
          garden: 'Jardin',
          backAlley: 'Ruelle',
          patio: 'Patio',
          APCArea: 'Zone du VTT',
          jacuzzi: 'Bain à remous',
          basementStairs: 'Escalier du<br/>sous-sol',
          treehouseAlley: 'Allée de la<br/>cabane',
          frontYard: 'Jardin devant<br/>la maison',
          frontStreet: 'Rue devant la maison',
          frontPorch: 'Porche',
          backPorch: 'Terrasse de derrière',
          backPorchTop: 'Sur la terrasse de derrière',
          frontPorchTop: 'Sur le porche',
          rooftop: 'Toit'
        },
        kafe: {
          spawnRiverDocks: 'Pontons',
          spawnChristmasMarket: 'Marché de Noël',
          spawnPark: 'Allée du parc',
          spawnRemoved: 'Enlevé dans le patch',
          laundryRoom: 'Buanderie',
          frontStairs: 'Escalier avant',
          bakery: 'Boulangerie',
          bakeryKitchen: 'Cuisine de la<br/>boulangerie',
          kitchenPrep: 'Mise en<br/>place',
          kitchenGrill: 'Grill de la cuisine',
          kitchenPickUp: 'Plan de travail<br/>de la cuisine',
          coldRoom: 'Chambre froide',
          diningRoom: 'Salle à manger',
          backStairs: 'Escalier<br/>arrière',
          coldRoomCorridor: 'Couloir de<br/>la chambre<br/>froide',
          VIPSection: 'Section<br/>VIP',
          barStairs: 'Escalier<br/>du bar',
          storage: 'Stockage',
          museumEntrance: 'Entreée du musée',
          miningRoom: 'Salle de la mine',
          trainMuseum: 'Musée du train',
          pillarDiningRoom: 'Salle à manger à piliers',
          mainCorridor: 'Couloir<br/>principal',
          readingRoomCorridor: 'Couloir de la salle de lecture',
          readingRoom: 'Salle de lecture',
          fireplaceHall: 'Hall avec<br/>cheminée',
          cigarShop: 'Boutiques à cigares',
          cigarLounge: 'Salon-fumoir',
          bar: 'Bar',
          barBackstore: 'Remise<br/>du bar',
          washrooms: 'WC',
          washroomCorridor: 'Couloir du WC',
          cocktailLounge: 'Bar à cocktails',
          cocktailLoungeEntrance: 'Entrée<br/>du bar<br/>à cocktails',
          westMainStreet: 'Rue principale - Ouest',
          mainStreet: 'Rue principale',
          bakeryParking: 'Parking de la<br/>boulangerie',
          bakeryRoof: 'Toit de la boulangerie',
          cafeRoofTop: 'Toit du café',
          terrace: 'Terrasse',
          backAlley: 'Ruelle',
          garrage: 'Garage',
          parkAlley: 'Allée<br/>du parc'
        },
        oregon: {
          spawnJunkyard: 'Décharge',
          spawnStreet: 'Rue',
          spawnConstructionSite: 'Chantier',
          towerStairs: 'Escalier de<br/>la tour',
          boilerRoom: 'Chaufferie',
          electricRoom: 'Local<br/>élec-<br/>trique',
          bunkerEntrance: 'Entrée<br/>du bunker',
          bunker: 'Bunker',
          basementCorridor: 'Couloir<br/>du<br/>sous-<br/>sol',
          supplyRoom: 'Réserve',
          laundryRoom: 'Buanderie',
          laundryStorage: 'Local de la<br/>buanderie',
          laundryStairs: 'Escalier de<br/>la buanderie',
          office: 'Bureau',
          diningHall: 'Cantine',
          diningHallCorridor: 'Couloir de la cantine',
          showers: 'Douches',
          kitchen: 'Cuisine',
          bathroom: 'WC',
          dormStairs: 'Escalier du dortoir',
          pantry: 'Garde-manger',
          bathroomCorridor: 'Couloir du WC',
          classroom: 'Salle de classe',
          lobby: 'Entrée',
          mainStairs: 'Escalier<br/>principal',
          meetingHall: 'Salle de réunion',
          rearStage: 'Arrière scène',
          garage: 'Garage',
          officeStorage: 'Réserve<br/>due bureau',
          kidsDorm: 'Dortoir des enfants',
          dormMainHall: 'Dortoir principal',
          smallDorms: 'Petit Dortoir',
          armoryCorridor: 'Couloir de<br/>l\'armurerie',
          masterBedroom: 'Chambre<br/>principale',
          armory: 'Armurerie',
          walkIn: 'Dressing',
          attic: 'Grenier',
          watchTower: 'Tour de guet',
          busYard: 'Cour du bus',
          junkyard: 'Décharge',
          farmlands: 'Terres cultivées',
          shootingRange: 'Stand<br/>de tir',
          constructionSite: 'Chantier',
          parking: 'Parking',
          mainEntrance: 'Entrée principale',
          street: 'Rue',
          balcony: 'Balcon',
          diningHallRoof: 'Toit de la cantine',
          officeRoof: 'Toit du bureau',
          meetingHallEntrance: 'Entrée de la<br/>salle de réunion',
          garageRoof: 'Toit du garage',
          dormsRoof: 'Toit du dortoir',
          meetingHallRoof: 'Toit de<br/>la salle<br/>de réunnion'
        },
        plane: {
          spawnOfficialEntrance: 'Entrée principale',
          spawnReporterEntrance: 'Entrée de la presse',
          spawnServiceEntrance: 'Entrée de service',
          pressBathroom: 'WC.Pr',
          meetingRoom: 'Salle de réunion',
          frontHallway: 'Couloir<br/>avant',
          executiveOffice: 'Bureau<br/>classe<br/>affaires',
          mainEntrance: 'Entrée principale',
          frontStairs: 'Entrée de<br/>service avant',
          pantry: 'Garde-manger',
          kitchen: 'Cuisine',
          executiveHallway: 'Couloir classe affaires',
          executiveBedroom: 'Chambre<br/>classe<br/>affaires',
          changeRoom: 'Vestiaire<br/>',
          laund: 'Buand.',
          frontServiceEntrance: 'Entrée de<br/>service avant',
          rightWing: 'Aile droite',
          backServiceEntrance: 'Entrée de<br/>service arrière',
          reporterEntrance: 'Entrée de la presse',
          leftWing: 'Aile gauche',
          staffSection: 'Section<br/>équipage',
          securityRoom: 'Salle de<br/>sécurité',
          pressSectionA: 'Section<br/>presse A',
          pressSectionB: 'Section<br/>presse B',
          backStairs: 'Escalier arrière',
          cargoHold: 'Soute',
          serviceCorridor: 'Couloir de service',
          storage: 'Stockage',
          luggageHold: 'Soute à bagages',
          firstAidStation: 'Poste de secours',
          cargoFrontEntrance: 'Entrée avant<br/>de l\'avion',
          cockpitStairs: 'Escalier<br/>du cockpit',
          cabinStaff: 'Équipage<br/>cabine',
          radioCabin: 'Cabine radio',
          cabin: 'Cockpit',
          caterer: 'Cafétéria',
          serverRoomA: 'Salle des serveurs A',
          serverRoomB: 'Salle des serveurs B',
          technicalSeating: 'Centre technique'
        },
        yacht: {
          spawnSubmarine: 'Sous-marin',
          spawnZodiak: 'Bateau pneumatique',
          spawnSnowMobile: 'Motoneige',
          mapsRoom: 'Salle des cartes',
          cockpit: 'Cockpit',
          cockpitHallway: 'Couloir du cockpit',
          captainsOffice: 'Bureau du captaine',
          cockpitBalcony: 'Balcon du<br/>cockpit',
          topDeckStairs: 'Escalier due<br/>pont supérieur',
          helipadEntrance: 'Entrée de<br/>l\'hélistation',
          helipad: 'Hélistation',
          spaDeck: 'Pont<br/>du spa',
          eastDeck: 'Pont est',
          westDeck: 'Pont ouest',
          frontDeck: 'Pont<br/>avant',
          masterBedroom: 'Chambre<br/>principale',
          casino: 'Casino',
          pokerRoom: 'Slle de poker',
          bathroom: 'Salle<br/>de bain',
          bedroomHallway: 'Couloir de la chambre',
          casinoHallway: 'Couloir du casino',
          globeHallway: 'Couloir<br/>du globe',
          lounge: 'Salon',
          cafeteria: 'Cafétéria',
          engine: 'Moteur',
          backEntrance: 'Entrée arrière<br/>des moteurs',
          rearDeck: 'Pont<br/>arrière',
          serverRoom: 'Salle des<br/>serveurs',
          engineStorage: 'Stockage<br/>des moteurs',
          engineControl: 'Commandes<br/>des moteurs',
          backStairs: 'Escalier<br/>arrière',
          emergencyExit: 'Sortie d\'urgence',
          engineHallway: 'Couloir du moteur',
          frontStairs: 'Escalier<br/>avant',
          kitchen: 'Cuisine',
          staffDormitory: 'Dortoir du personnel',
          westBalcony: 'Balcon ouest',
          eastBalcony: 'Balcon est',
          kitchenHallway: 'Couloir de la cuisine',
          kitchenStairs: 'Escalier de la cuisine',
          kitchenPantry: 'Garge-<br/>manger',
          infirmary: 'Infirmerie',
          borealSubRoom: 'Salle du<br/>Boreal',
          cafeteriaHallway: 'Couloir de la cafétéria',
          engineUtility: 'Main-<br/>tenance<br/>moteur',
          submarine: 'Sous-marin',
          westGlacier: 'Glacier ouest',
          eastHullBreach: 'Brèche de la<br/>coque est',
          eastGlacier: 'Glacier est',
          frozenRiver: 'Rivière gelée',
          zodiac: 'Bateau pneumatique',
          westHullBreach: 'Brèche de la coque ouest'
        }
      }
    };

  R6MapsLangTerms.registerLanguage(name, terms);

  return  {
    name: name,
    terms: terms
  };
})(R6MapsLangTerms);
