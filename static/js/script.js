/* 2012-06-13 17:58:32 ./js/script.js */
(function($) {
  return $(function() {
    var all, from, output, to;
    output = $('#output');
    from = $('#from');
    to = $('#to');
    all = {
      "1": {
        "name": "Pantitl\u00e1n",
        "lat": "19.41633182896367",
        "lng": "-99.07472669666555",
        "shortName": "pantitlan"
      },
      "2": {
        "name": "Zaragoza",
        "lat": "19.41174458021144",
        "lng": "-99.08210248638399",
        "shortName": "zaragoza"
      },
      "3": {
        "name": "G\u00f3mez Far\u00edas",
        "lat": "19.41646679932027",
        "lng": "-99.09037309925735",
        "shortName": "gomez"
      },
      "4": {
        "name": "Boulevard Puerto A\u00e9reo",
        "lat": "19.41964654642638",
        "lng": "-99.09627798635555",
        "shortName": "bulevard"
      },
      "5": {
        "name": "Balbuena",
        "lat": "19.42306614047053",
        "lng": "-99.10204941789336",
        "shortName": "balbuena"
      },
      "6": {
        "name": "Moctezuma",
        "lat": "19.42713325317997",
        "lng": "-99.11036161293089",
        "shortName": "moctezuma"
      },
      "7": {
        "name": "San L\u00e1zaro",
        "lat": "19.43022195784536",
        "lng": "-99.11428686711037",
        "shortName": "sanlazaro"
      },
      "8": {
        "name": "Candelaria",
        "lat": "19.42899571925259",
        "lng": "-99.12088026894649",
        "shortName": "candelaria"
      },
      "9": {
        "name": "Merced",
        "lat": "19.42530851357274",
        "lng": "-99.1245027646272",
        "shortName": "merced"
      },
      "10": {
        "name": "Pino Su\u00e1rez",
        "lat": "19.42582575599577",
        "lng": "-99.13312285993553",
        "shortName": "pino"
      },
      "11": {
        "name": "Isabel la Cat\u00f3lica",
        "lat": "19.4262195095238",
        "lng": "-99.13742593657878",
        "shortName": "isabel"
      },
      "12": {
        "name": "Salto del Agua",
        "lat": "19.42692027023179",
        "lng": "-99.14320833953674",
        "shortName": "salto"
      },
      "13": {
        "name": "Balderas",
        "lat": "19.42703073252642",
        "lng": "-99.14901583021663",
        "shortName": "balderas"
      },
      "14": {
        "name": "Cuauht\u00e9moc",
        "lat": "19.42570692670683",
        "lng": "-99.15484084479853",
        "shortName": "cuauhtemoc"
      },
      "15": {
        "name": "Insurgentes",
        "lat": "19.42357358768718",
        "lng": "-99.16302287109751",
        "shortName": "insurgentes"
      },
      "16": {
        "name": "Sevilla",
        "lat": "19.42177573102697",
        "lng": "-99.1707242768198",
        "shortName": "sevilla"
      },
      "17": {
        "name": "Chapultepec",
        "lat": "19.42071386845666",
        "lng": "-99.17623039443855",
        "shortName": "chapultepec"
      },
      "18": {
        "name": "Juanacatl\u00e1n",
        "lat": "19.41254863274506",
        "lng": "-99.1821406539552",
        "shortName": "juanacatlan"
      },
      "19": {
        "name": "Tacubaya",
        "lat": "19.40297969597669",
        "lng": "-99.18690804629912",
        "shortName": "tacubaya"
      },
      "20": {
        "name": "Observatorio",
        "lat": "19.39821472132163",
        "lng": "-99.20039986772298",
        "shortName": "observatorio"
      },
      "21": {
        "name": "Cuatro Caminos",
        "lat": "19.4595213592946",
        "lng": "-99.21589716352932",
        "shortName": "cuatro"
      },
      "22": {
        "name": "Panteones",
        "lat": "19.45880919577973",
        "lng": "-99.20332265534339",
        "shortName": "panteones"
      },
      "23": {
        "name": "Tacuba",
        "lat": "19.45948342274775",
        "lng": "-99.18885110506895",
        "shortName": "tacuba"
      },
      "24": {
        "name": "Cuitlahuac",
        "lat": "19.45749380039763",
        "lng": "-99.18185051601547",
        "shortName": "cuitlahuac"
      },
      "25": {
        "name": "Popotla",
        "lat": "19.45259510990597",
        "lng": "-99.17508000343335",
        "shortName": "popotla"
      },
      "26": {
        "name": "Colegio Militar",
        "lat": "19.44898380613763",
        "lng": "-99.17159806325191",
        "shortName": "colegio"
      },
      "27": {
        "name": "Normal",
        "lat": "19.44477642431839",
        "lng": "-99.16761563020256",
        "shortName": "normal"
      },
      "28": {
        "name": "San Cosme",
        "lat": "19.4420422015028",
        "lng": "-99.16103840276601",
        "shortName": "sancosme"
      },
      "29": {
        "name": "Revoluci\u00f3n",
        "lat": "19.43912981360684",
        "lng": "-99.15410023439542",
        "shortName": "revolucion"
      },
      "30": {
        "name": "Hidalgo",
        "lat": "19.43755453437716",
        "lng": "-99.14753677001637",
        "shortName": "hidalgo"
      },
      "31": {
        "name": "Bellas Artes",
        "lat": "19.43636231219488",
        "lng": "-99.14191015507674",
        "shortName": "bellas"
      },
      "32": {
        "name": "Allende",
        "lat": "19.43554836414096",
        "lng": "-99.1374723532076",
        "shortName": "allende"
      },
      "33": {
        "name": "Z\u00f3calo",
        "lat": "19.43301895472987",
        "lng": "-99.13229655063643",
        "shortName": "zocalo"
      },
      "34": {
        "name": "San Antonio Abad",
        "lat": "19.41850349904609",
        "lng": "-99.13419093978719",
        "shortName": "sanantonioabad"
      },
      "35": {
        "name": "Chabacano",
        "lat": "19.40903243300894",
        "lng": "-99.13567174065334",
        "shortName": "chabacano"
      },
      "36": {
        "name": "Viaducto",
        "lat": "19.40077148992583",
        "lng": "-99.13696512739632",
        "shortName": "viaducto"
      },
      "37": {
        "name": "Xola",
        "lat": "19.39494306781199",
        "lng": "-99.13787215648212",
        "shortName": "xola"
      },
      "38": {
        "name": "Villa de Cort\u00e9s",
        "lat": "19.38735817518182",
        "lng": "-99.13903804023275",
        "shortName": "villacortes"
      },
      "39": {
        "name": "Nativitas",
        "lat": "19.37938838930234",
        "lng": "-99.14024750709828",
        "shortName": "nativitas"
      },
      "40": {
        "name": "Portales",
        "lat": "19.37004779364451",
        "lng": "-99.14155954942453",
        "shortName": "portales"
      },
      "41": {
        "name": "Ermita",
        "lat": "19.36181854024154",
        "lng": "-99.14297429992652",
        "shortName": "ermita"
      },
      "42": {
        "name": "General Anaya",
        "lat": "19.35325861393841",
        "lng": "-99.14498812157494",
        "shortName": "general"
      },
      "43": {
        "name": "Tasque\u00f1a",
        "lat": "19.34381776253293",
        "lng": "-99.14193431234548",
        "shortName": "tasquena"
      },
      "44": {
        "name": "Indios Verdes",
        "lat": "19.49522324141926",
        "lng": "-99.1195023109161",
        "shortName": "indios"
      },
      "45": {
        "name": "Deportivo 18 de Marzo",
        "lat": "19.48502143781887",
        "lng": "-99.12555069307433",
        "shortName": "deportivomarzo"
      },
      "46": {
        "name": "Potrero",
        "lat": "19.47697869666817",
        "lng": "-99.13218011742947",
        "shortName": "potrero"
      },
      "47": {
        "name": "La Raza",
        "lat": "19.46862932966617",
        "lng": "-99.13901277503162",
        "shortName": "raza"
      },
      "48": {
        "name": "Tlatelolco",
        "lat": "19.45469422069468",
        "lng": "-99.14292063690158",
        "shortName": "tlatelolco"
      },
      "49": {
        "name": "Guerrero",
        "lat": "19.444613116179",
        "lng": "-99.14520119497733",
        "shortName": "guerrero"
      },
      "50": {
        "name": "Ju\u00e1rez",
        "lat": "19.43326190520457",
        "lng": "-99.14767869923179",
        "shortName": "juarez"
      },
      "51": {
        "name": "Ni\u00f1os H\u00e9roes",
        "lat": "19.41948543999284",
        "lng": "-99.15037027849738",
        "shortName": "heroes"
      },
      "52": {
        "name": "Hospital General",
        "lat": "19.41346075624534",
        "lng": "-99.15386787319864",
        "shortName": "hospital"
      },
      "53": {
        "name": "Centro M\u00e9dico",
        "lat": "19.40756292854329",
        "lng": "-99.1550980831166",
        "shortName": "centro"
      },
      "54": {
        "name": "Etiop\u00eda",
        "lat": "19.39548227918945",
        "lng": "-99.15600825817074",
        "shortName": "etiopia"
      },
      "55": {
        "name": "Eugenia",
        "lat": "19.38572824554866",
        "lng": "-99.15726307993897",
        "shortName": "eugenia"
      },
      "56": {
        "name": "Divisi\u00f3n del Norte",
        "lat": "19.37980493761998",
        "lng": "-99.15899395389825",
        "shortName": "division"
      },
      "57": {
        "name": "Zapata",
        "lat": "19.37069239423797",
        "lng": "-99.16480617688379",
        "shortName": "zapata"
      },
      "58": {
        "name": "Coyoac\u00e1n",
        "lat": "19.36139755051065",
        "lng": "-99.17086610365674",
        "shortName": "coyoacan"
      },
      "59": {
        "name": "Viveros",
        "lat": "19.35405090073075",
        "lng": "-99.17539613613873",
        "shortName": "viveros"
      },
      "60": {
        "name": "Miguel \u00e1ngel de Quevedo",
        "lat": "19.34668670259167",
        "lng": "-99.18067950611376",
        "shortName": "quevedo"
      },
      "61": {
        "name": "Copilco",
        "lat": "19.33612318425269",
        "lng": "-99.17653816626182",
        "shortName": "copilco"
      },
      "62": {
        "name": "Universidad",
        "lat": "19.32440541143249",
        "lng": "-99.17391307132962",
        "shortName": "universidad"
      },
      "63": {
        "name": "Mart\u00edn Carrera",
        "lat": "19.48493169612645",
        "lng": "-99.10440787171035",
        "shortName": "martin"
      },
      "64": {
        "name": "Talism\u00e1n",
        "lat": "19.47413875959045",
        "lng": "-99.10802545404187",
        "shortName": "talisman"
      },
      "65": {
        "name": "Bondojito",
        "lat": "19.46473708882586",
        "lng": "-99.1118913011711",
        "shortName": "bondojito"
      },
      "66": {
        "name": "Consulado",
        "lat": "19.45794113244967",
        "lng": "-99.11389135956127",
        "shortName": "consulado"
      },
      "67": {
        "name": "Canal del Norte",
        "lat": "19.44887187537713",
        "lng": "-99.1161250319802",
        "shortName": "canalnorte"
      },
      "68": {
        "name": "Morelos",
        "lat": "19.43957679115491",
        "lng": "-99.11815003710782",
        "shortName": "morelos"
      },
      "69": {
        "name": "Fray Servando",
        "lat": "19.42170968889537",
        "lng": "-99.12048568291954",
        "shortName": "fray"
      },
      "70": {
        "name": "Jamaica",
        "lat": "19.41100058000147",
        "lng": "-99.12178301584636",
        "shortName": "jamaica"
      },
      "71": {
        "name": "Santa Anita",
        "lat": "19.40287235276833",
        "lng": "-99.12170495884148",
        "shortName": "santanita"
      },
      "72": {
        "name": "Hangares",
        "lat": "19.42388401158391",
        "lng": "-99.08733861801591",
        "shortName": "hangares"
      },
      "73": {
        "name": "Terminal A\u00e9rea",
        "lat": "19.43396049880176",
        "lng": "-99.08771797080946",
        "shortName": "terminal"
      },
      "74": {
        "name": "Ocean\u00eda",
        "lat": "19.44534348328514",
        "lng": "-99.08729679809788",
        "shortName": "oceania"
      },
      "75": {
        "name": "Arag\u00f3n",
        "lat": "19.45119686808807",
        "lng": "-99.096523711006",
        "shortName": "aragon"
      },
      "76": {
        "name": "Eduardo Molina",
        "lat": "19.45133965597763",
        "lng": "-99.10558146013123",
        "shortName": "eduardo"
      },
      "77": {
        "name": "Valle G\u00f3mez",
        "lat": "19.45881815087695",
        "lng": "-99.1194435363208",
        "shortName": "valle"
      },
      "78": {
        "name": "Misterios",
        "lat": "19.46327724740427",
        "lng": "-99.13077518718009",
        "shortName": "misterios"
      },
      "79": {
        "name": "Autobuses del Norte",
        "lat": "19.47893106739853",
        "lng": "-99.14091361573892",
        "shortName": "autobuses"
      },
      "80": {
        "name": "Instituto del Petr\u00f3leo",
        "lat": "19.48923757961505",
        "lng": "-99.14498326324814",
        "shortName": "instituto"
      },
      "81": {
        "name": "Polit\u00e9cnico",
        "lat": "19.50056122322431",
        "lng": "-99.14949524286514",
        "shortName": "politecnico"
      },
      "82": {
        "name": "El Rosario",
        "lat": "19.50466931318567",
        "lng": "-99.19975111439432",
        "shortName": "rosario"
      },
      "83": {
        "name": "Tezozomoc",
        "lat": "19.49495748747768",
        "lng": "-99.19650948954374",
        "shortName": "tezozomoc"
      },
      "84": {
        "name": "Azcapotzalco",
        "lat": "19.49074524997598",
        "lng": "-99.18638389566263",
        "shortName": "azcapotzalco"
      },
      "85": {
        "name": "Ferrer\u00eda",
        "lat": "19.49064638464359",
        "lng": "-99.17395770278019",
        "shortName": "ferreria"
      },
      "86": {
        "name": "Norte 45",
        "lat": "19.48867092544202",
        "lng": "-99.16284036379695",
        "shortName": "norte"
      },
      "87": {
        "name": "Vallejo",
        "lat": "19.49023786910605",
        "lng": "-99.15547593000119",
        "shortName": "vallejo"
      },
      "88": {
        "name": "Lindavista",
        "lat": "19.48750790956764",
        "lng": "-99.13472132023077",
        "shortName": "lindavista"
      },
      "89": {
        "name": "La Villa-Bas\u00edlica",
        "lat": "19.48145691855939",
        "lng": "-99.11786569203775",
        "shortName": "villa"
      },
      "90": {
        "name": "Aquiles Serd\u00e1n",
        "lat": "19.49001409906229",
        "lng": "-99.1950139977975",
        "shortName": "aquiles"
      },
      "91": {
        "name": "Camarones",
        "lat": "19.47896595271159",
        "lng": "-99.19015651466154",
        "shortName": "camarones"
      },
      "92": {
        "name": "Refiner\u00eda",
        "lat": "19.46990241557489",
        "lng": "-99.19057710653162",
        "shortName": "refineria"
      },
      "93": {
        "name": "San Joaqu\u00edn",
        "lat": "19.44578587191453",
        "lng": "-99.1917402468021",
        "shortName": "sanjoaquin"
      },
      "94": {
        "name": "Polanco",
        "lat": "19.43346187518314",
        "lng": "-99.19105468876384",
        "shortName": "polanco"
      },
      "95": {
        "name": "Auditorio",
        "lat": "19.42542431155502",
        "lng": "-99.19192149652169",
        "shortName": "auditorio"
      },
      "96": {
        "name": "Constituyentes",
        "lat": "19.41160668814689",
        "lng": "-99.19127327715199",
        "shortName": "constituyentes"
      },
      "97": {
        "name": "San Pedro de los Pinos",
        "lat": "19.39110426743662",
        "lng": "-99.18597104958954",
        "shortName": "sanpedro"
      },
      "98": {
        "name": "San Antonio",
        "lat": "19.38507951911646",
        "lng": "-99.18655604150705",
        "shortName": "sanantonio"
      },
      "99": {
        "name": "Mixcoac",
        "lat": "19.37608683326311",
        "lng": "-99.18782120541727",
        "shortName": "mixcoac"
      },
      "100": {
        "name": "Barranca del Muerto",
        "lat": "19.36064724047288",
        "lng": "-99.18938476559318",
        "shortName": "barranca"
      },
      "101": {
        "name": "Garibaldi",
        "lat": "19.44330036277303",
        "lng": "-99.13957133819082",
        "shortName": "garibaldi"
      },
      "102": {
        "name": "San Juan de Letr\u00e1n",
        "lat": "19.43112503150655",
        "lng": "-99.14159471211693",
        "shortName": "sanjuan"
      },
      "103": {
        "name": "Doctores",
        "lat": "19.42144314941761",
        "lng": "-99.1432488553525",
        "shortName": "doctores"
      },
      "104": {
        "name": "Obrera",
        "lat": "19.41308795493533",
        "lng": "-99.14408171743341",
        "shortName": "obrera"
      },
      "105": {
        "name": "La Viga",
        "lat": "19.40647250870093",
        "lng": "-99.12628046128097",
        "shortName": "viga"
      },
      "106": {
        "name": "Coyuya",
        "lat": "19.3982758252804",
        "lng": "-99.11332126001013",
        "shortName": "coyuya"
      },
      "107": {
        "name": "Iztacalco",
        "lat": "19.3883953765657",
        "lng": "-99.11202854495423",
        "shortName": "iztacalco"
      },
      "108": {
        "name": "Apatlaco",
        "lat": "19.37903899735547",
        "lng": "-99.10950425356948",
        "shortName": "apatlaco"
      },
      "109": {
        "name": "Aculco",
        "lat": "19.37321403018916",
        "lng": "-99.10772618150604",
        "shortName": "aculco"
      },
      "110": {
        "name": "Escuadr\u00f3n 201",
        "lat": "19.36479016558971",
        "lng": "-99.10950641980767",
        "shortName": "escuadron"
      },
      "111": {
        "name": "Atlalilco",
        "lat": "19.35621584095715",
        "lng": "-99.10130910875279",
        "shortName": "atlalico"
      },
      "112": {
        "name": "Iztapalapa",
        "lat": "19.35780486292914",
        "lng": "-99.09341458381222",
        "shortName": "iztapalapa"
      },
      "113": {
        "name": "Cerro de la Estrella",
        "lat": "19.35615506335389",
        "lng": "-99.08565881720281",
        "shortName": "cerro"
      },
      "114": {
        "name": "UAM-I",
        "lat": "19.35071993739487",
        "lng": "-99.07463189504848",
        "shortName": "uam"
      },
      "115": {
        "name": "Constituci\u00f3n de 1917",
        "lat": "19.34596183620272",
        "lng": "-99.06386849995535",
        "shortName": "constitucion"
      },
      "116": {
        "name": "Patriotismo",
        "lat": "19.4060444902911",
        "lng": "-99.17896011359871",
        "shortName": "patriotismo"
      },
      "117": {
        "name": "Chilpancingo",
        "lat": "19.40582987669732",
        "lng": "-99.16862672437337",
        "shortName": "chilpancingo"
      },
      "118": {
        "name": "L\u00e1zaro C\u00e1rdenas",
        "lat": "19.40712693353131",
        "lng": "-99.1447092437006",
        "shortName": "lazaro"
      },
      "119": {
        "name": "Mixiuhca",
        "lat": "19.40829969826185",
        "lng": "-99.11303666363187",
        "shortName": "mixiuhca"
      },
      "120": {
        "name": "Vel\u00f3dromo",
        "lat": "19.40845038511226",
        "lng": "-99.10186068569877",
        "shortName": "velodromo"
      },
      "121": {
        "name": "Ciudad Deportiva",
        "lat": "19.40822337891054",
        "lng": "-99.09206361121073",
        "shortName": "ciudadeportiva"
      },
      "122": {
        "name": "Puebla",
        "lat": "19.40718886161764",
        "lng": "-99.08243482673817",
        "shortName": "puebla"
      },
      "123": {
        "name": "Agr\u00edcola Oriental",
        "lat": "19.40449098786331",
        "lng": "-99.06925581547273",
        "shortName": "agricolao"
      },
      "124": {
        "name": "Canal de San Juan",
        "lat": "19.39866019965111",
        "lng": "-99.05917743646596",
        "shortName": "canalsan"
      },
      "125": {
        "name": "Tepalcates",
        "lat": "19.39135895631791",
        "lng": "-99.04632160738863",
        "shortName": "tepalcates"
      },
      "126": {
        "name": "Guelatao",
        "lat": "19.38510769253331",
        "lng": "-99.03562146106849",
        "shortName": "guelatao"
      },
      "127": {
        "name": "Pe\u00f1\u00f3n Viejo",
        "lat": "19.37327563628188",
        "lng": "-99.01701790681113",
        "shortName": "viejo"
      },
      "128": {
        "name": "Acatitla",
        "lat": "19.36468734443628",
        "lng": "-99.00575965859122",
        "shortName": "acatitla"
      },
      "129": {
        "name": "Santa Marta",
        "lat": "19.36028084716777",
        "lng": "-98.99525880643689",
        "shortName": "santamartha"
      },
      "130": {
        "name": "Los Reyes",
        "lat": "19.35900284464906",
        "lng": "-98.97696451194572",
        "shortName": "reyes"
      },
      "131": {
        "name": "La Paz",
        "lat": "19.35042967841562",
        "lng": "-98.96091766805498",
        "shortName": "paz"
      },
      "132": {
        "name": "Ciudad Azteca",
        "lat": "19.53457087505591",
        "lng": "-99.02772070686805",
        "shortName": "ciudadazteca"
      },
      "133": {
        "name": "Plaza Arag\u00f3n",
        "lat": "19.52855300494254",
        "lng": "-99.03038273450913",
        "shortName": "plaza"
      },
      "134": {
        "name": "Ol\u00edmpica",
        "lat": "19.52150099270952",
        "lng": "-99.03346600205565",
        "shortName": "olimpica"
      },
      "135": {
        "name": "Ecatepec",
        "lat": "19.51513470625344",
        "lng": "-99.03628942493286",
        "shortName": "tecnologico"
      },
      "136": {
        "name": "Muzquiz",
        "lat": "19.50160642031488",
        "lng": "-99.04219283497983",
        "shortName": "muzquiz"
      },
      "137": {
        "name": "R\u00edo de los Remedios",
        "lat": "19.49095023018228",
        "lng": "-99.04689350142266",
        "shortName": "rio"
      },
      "138": {
        "name": "Impulsora",
        "lat": "19.48567527675172",
        "lng": "-99.04925570160359",
        "shortName": "impulsora"
      },
      "139": {
        "name": "Nezahualc\u00f3yotl",
        "lat": "19.472996053607",
        "lng": "-99.05475867673364",
        "shortName": "continentes"
      },
      "140": {
        "name": "Villa de Arag\u00f3n",
        "lat": "19.4616374712728",
        "lng": "-99.06168685945414",
        "shortName": "villaragon"
      },
      "141": {
        "name": "Bosque de Arag\u00f3n",
        "lat": "19.45806472473009",
        "lng": "-99.06958476288875",
        "shortName": "bosque"
      },
      "142": {
        "name": "Deportivo Ocean\u00eda",
        "lat": "19.45105763478416",
        "lng": "-99.07951284812741",
        "shortName": "deportivoceania"
      },
      "143": {
        "name": "Romero Rubio",
        "lat": "19.44061596757807",
        "lng": "-99.09480162586586",
        "shortName": "romero"
      },
      "144": {
        "name": "Ricardo Flores Mag\u00f3n",
        "lat": "19.4365072737597",
        "lng": "-99.10393748042286",
        "shortName": "flores"
      },
      "145": {
        "name": "Tepito",
        "lat": "19.44249761599348",
        "lng": "-99.1235866761603",
        "shortName": "tepito"
      },
      "146": {
        "name": "Lagunilla",
        "lat": "19.44320904505533",
        "lng": "-99.13111430619756",
        "shortName": "lagunilla"
      },
      "147": {
        "name": "Buenavista",
        "lat": "19.44640144937313",
        "lng": "-99.15316221420672",
        "shortName": "buenavista"
      }
    };
    return $('#go').click(function() {
      return $.getJSON(location.href + ("index.php/api/" + (from.val()) + "/" + (to.val())), function(data) {
        var list;
        list = $('<ol/>');
        $.each(data, function(i, v) {
          var item;
          item = $('<li>').text(all[v].name);
          return item.appendTo(list);
        });
        return output.html(list);
      });
    });
  });
})(jQuery);
