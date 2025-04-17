/*** Mushroom v5.1 ***/
(() => {
   class Colors {
      #colors;
      constructor() {
         this.version = "1.2";
         this.#colors = {
            "abbey": "#4c4f56",
            "absolutezero": "#0048ba",
            "acadia": "#1b1404",
            "acapulco": "#7cb0a1",
            "acidgreen": "#b0bf1a",
            "aero": "#7cb9e8",
            "aeroblue": "#c9ffe5",
            "affair": "#714693",
            "africanviolet": "#b284be",
            "airforceblue": "#00308f",
            "airsuperiorityblue": "#72a0c1",
            "akaroa": "#d4c4a8",
            "alabamacrimson": "#af002a",
            "alabaster": "#fafafa",
            "albescentwhite": "#f5e9d3",
            "algaegreen": "#93dfb8",
            "aliceblue": "#f0f8ff",
            "alienarmpit": "#84de02",
            "alizarincrimson": "#e32636",
            "alloyorange": "#c46210",
            "allports": "#0076a3",
            "almond": "#efdecd",
            "almondfrost": "#907b71",
            "alpine": "#af8f2c",
            "alto": "#dbdbdb",
            "aluminium": "#a9acb6",
            "amaranth": "#e52b50",
            "amaranthpink": "#f19cbb",
            "amaranthpurple": "#ab274f",
            "amaranthred": "#d3212d",
            "amazon": "#3b7a57",
            "amber": "#ffbf00",
            "americanrose": "#ff033e",
            "americano": "#87756e",
            "amethyst": "#9966cc",
            "amethystsmoke": "#a397b4",
            "amour": "#f9eaf3",
            "amulet": "#7b9f80",
            "anakiwa": "#9de5ff",
            "androidgreen": "#a4c639",
            "antiflashwhite": "#f2f3f4",
            "antiquebrass": "#cd9575",
            "antiquebronze": "#665d1e",
            "antiquefuchsia": "#915c83",
            "antiqueruby": "#841b2d",
            "antiquewhite": "#faebd7",
            "anzac": "#e0b646",
            "ao": "#008000",
            "apache": "#dfbe6f",
            "apple": "#4fa83d",
            "appleblossom": "#af4d43",
            "applegreen": "#8db600",
            "apricot": "#fbceb1",
            "apricotwhite": "#fffeec",
            "aquadeep": "#014b43",
            "aquaforest": "#5fa777",
            "aquahaze": "#edf5f5",
            "aquaisland": "#a1dad7",
            "aquaspring": "#eaf9f5",
            "aquasqueeze": "#e8f5f2",
            "aquamarine": "#7fffd4",
            "aquamarineblue": "#71d9e2",
            "arapawa": "#110c6c",
            "arcticlime": "#d0ff14",
            "armadillo": "#433e37",
            "armygreen": "#4b5320",
            "arrowtown": "#948771",
            "arsenic": "#3b444b",
            "artichoke": "#8f9779",
            "arylideyellow": "#e9d66b",
            "ash": "#c6c3b5",
            "ashgrey": "#b2beb5",
            "asparagus": "#87a96b",
            "asphalt": "#130a06",
            "astra": "#faeab9",
            "astral": "#327da0",
            "astronaut": "#283a77",
            "astronautblue": "#013e62",
            "athensgray": "#eef0f3",
            "athsspecial": "#ecebce",
            "atlantis": "#97cd2d",
            "atoll": "#0a6f75",
            "auchico": "#97605d",
            "aubergine": "#3b0910",
            "auburn": "#a52a2a",
            "aureolin": "#fdee00",
            "aurometalsaurus": "#6e7f80",
            "australianmint": "#f5ffbe",
            "avocado": "#568203",
            "axolotl": "#4e6649",
            "azalea": "#f7c8da",
            "aztec": "#0d1c19",
            "aztecgold": "#c39953",
            "azure": "#007fff",
            "azuremist": "#f0ffff",
            "azureishwhite": "#dbe9f4",
            "babyblue": "#89cff0",
            "babyblueeyes": "#a1caf1",
            "babypowder": "#fefefa",
            "bahamablue": "#026395",
            "bahia": "#a5cb0c",
            "bajawhite": "#fff8d1",
            "bakermillerpink": "#ff91af",
            "balihai": "#859faf",
            "ballblue": "#21abcd",
            "balticsea": "#2a2630",
            "bamboo": "#da6304",
            "bananamania": "#fae7b5",
            "bananayellow": "#ffe135",
            "bandicoot": "#858470",
            "barberry": "#ded717",
            "barbiepink": "#e0218a",
            "barleycorn": "#a68b5b",
            "barleywhite": "#fff4ce",
            "barnred": "#7c0a02",
            "barossa": "#44012d",
            "bastille": "#292130",
            "battleshipgray": "#828f72",
            "bayleaf": "#7da98d",
            "bayofmany": "#273a81",
            "bazaar": "#98777b",
            "bdazzledblue": "#2e5894",
            "beaublue": "#bcd4e6",
            "beautybush": "#eec1be",
            "beaver": "#9f8170",
            "beeswax": "#fef2c7",
            "beige": "#f5f5dc",
            "belgion": "#add8ff",
            "bermuda": "#7dd8c6",
            "bermudagray": "#6b8ba2",
            "berylgreen": "#dee5c0",
            "bianca": "#fcfbf3",
            "bigdiporuby": "#9c2542",
            "bigfootfeet": "#e88e5a",
            "bigstone": "#162a40",
            "bilbao": "#327c14",
            "bilobaflower": "#b2a1ea",
            "birch": "#373021",
            "birdflower": "#d4cd16",
            "biscay": "#1b3162",
            "bismark": "#497183",
            "bisonhide": "#c1b7a4",
            "bisque": "#ffe4c4",
            "bistre": "#3d2b1f",
            "bitter": "#868974",
            "bitterlemon": "#cae00d",
            "bittersweet": "#fe6f5e",
            "bittersweetshimmer": "#bf4f51",
            "bizarre": "#eededa",
            "black": "#000000",
            "blackbean": "#3d0c02",
            "blackcoral": "#54626f",
            "blackforest": "#0b1304",
            "blackhaze": "#f6f7f7",
            "blackleatherjacket": "#253529",
            "blackmarlin": "#3e2c1c",
            "blackolive": "#3b3c36",
            "blackpearl": "#041322",
            "blackrock": "#0d0332",
            "blackrose": "#67032d",
            "blackrussian": "#0a001c",
            "blackshadows": "#bfafb2",
            "blacksqueeze": "#f2fafa",
            "blackwhite": "#fffef6",
            "blackberry": "#4d0135",
            "blackcurrant": "#32293a",
            "blanchedalmond": "#ffebcd",
            "blastoffbronze": "#a57164",
            "blazeorange": "#ff6700",
            "bleachwhite": "#fef3d8",
            "bleachedcedar": "#2c2133",
            "bleudefrance": "#318ce7",
            "blizzardblue": "#a3e3ed",
            "blond": "#faf0be",
            "blossom": "#dcb4bc",
            "blue": "#0000ff",
            "bluebayoux": "#496679",
            "bluebell": "#a2a2d0",
            "bluechalk": "#f1e9ff",
            "bluecharcoal": "#010d1a",
            "bluechill": "#0c8990",
            "bluediamond": "#380474",
            "bluedianne": "#204852",
            "bluegem": "#2c0e8c",
            "bluegray": "#6699cc",
            "bluegreen": "#0d98ba",
            "bluehaze": "#bfbed8",
            "bluejeans": "#5dadec",
            "bluelagoon": "#ace5ee",
            "bluemagentaviolet": "#553592",
            "bluemarguerite": "#7666c6",
            "blueribbon": "#0066ff",
            "blueromance": "#d2f6de",
            "bluesapphire": "#126180",
            "bluesmoke": "#748881",
            "bluestone": "#016162",
            "blueviolet": "#8a2be2",
            "bluewhale": "#042e4c",
            "blueyonder": "#5072a7",
            "bluezodiac": "#13264d",
            "blueberry": "#4f86f7",
            "bluebonnet": "#1c1cf0",
            "blumine": "#18587a",
            "blush": "#de5d83",
            "bole": "#79443b",
            "bombay": "#afb1b8",
            "bonjour": "#e5e0e1",
            "bondiblue": "#0095b6",
            "bone": "#e3dac9",
            "boogerbuster": "#dde26a",
            "bordeaux": "#5c0120",
            "bossanova": "#4e2a5a",
            "bostonblue": "#3b91b4",
            "bostonuniversityred": "#cc0000",
            "botticelli": "#c7dde5",
            "bottlegreen": "#006a4e",
            "boulder": "#7a7a7a",
            "bouquet": "#ae809e",
            "bourbon": "#ba6f1e",
            "boysenberry": "#873260",
            "bracken": "#4a2a04",
            "brandeisblue": "#0070ff",
            "brandy": "#dec196",
            "brandypunch": "#cd8429",
            "brandyrose": "#bb8983",
            "brass": "#b5a642",
            "breakerbay": "#5da19f",
            "brickred": "#cb4154",
            "bridalheath": "#fffaf4",
            "bridesmaid": "#fef0ec",
            "brightcerulean": "#1dacd6",
            "brightgray": "#3c4151",
            "brightgreen": "#66ff00",
            "brightlavender": "#bf94e4",
            "brightlilac": "#d891ef",
            "brightmaroon": "#c32148",
            "brightnavyblue": "#1974d2",
            "brightred": "#b10000",
            "brightsun": "#fed33c",
            "brightturquoise": "#08e8de",
            "brightube": "#d19fe8",
            "brightyellow": "#ffaa1d",
            "brilliantazure": "#3399ff",
            "brilliantlavender": "#f4bbff",
            "brilliantrose": "#ff55a3",
            "brinkpink": "#fb607f",
            "britishracinggreen": "#004225",
            "bronco": "#aba196",
            "bronze": "#cd7f32",
            "bronzeolive": "#4e420c",
            "bronzeyellow": "#737000",
            "bronzetone": "#4d400f",
            "broom": "#ffec13",
            "brown": "#964b00",
            "brownbramble": "#592804",
            "brownderby": "#492615",
            "brownpod": "#401801",
            "brownrust": "#af593e",
            "brownsugar": "#af6e4d",
            "browntumbleweed": "#37290e",
            "brownyellow": "#cc9966",
            "brunswickgreen": "#1b4d3e",
            "bubblegum": "#ffc1cc",
            "bubbles": "#e7feff",
            "buccaneer": "#622f30",
            "bud": "#a8ae9c",
            "budgreen": "#7bb661",
            "buddhagold": "#c1a004",
            "buff": "#f0dc82",
            "bulgarianrose": "#480607",
            "bullshot": "#864d1e",
            "bunker": "#0d1117",
            "bunting": "#151f4c",
            "burgundy": "#800020",
            "burlywood": "#deb887",
            "burnham": "#002e20",
            "burningorange": "#ff7034",
            "burningsand": "#d99376",
            "burnishedbrown": "#a17a74",
            "burntmaroon": "#420303",
            "burntorange": "#cc5500",
            "burntsienna": "#e97451",
            "burntumber": "#8a3324",
            "bush": "#0d2e1c",
            "buttercup": "#f3ad16",
            "butteredrum": "#a1750d",
            "butterflybush": "#624e9a",
            "buttermilk": "#fff1b5",
            "butterywhite": "#fffcea",
            "byzantine": "#bd33a4",
            "byzantium": "#702963",
            "cgblue": "#007aa5",
            "cgred": "#e03c31",
            "cabsav": "#4d0a18",
            "cabaret": "#d94972",
            "cabbagepont": "#3f4c3a",
            "cactus": "#587156",
            "cadet": "#536872",
            "cadetblue": "#5f9ea0",
            "cadetgrey": "#91a3b0",
            "cadillac": "#b04c6a",
            "cadmiumgreen": "#006b3c",
            "cadmiumorange": "#ed872d",
            "cadmiumred": "#e30022",
            "cadmiumyellow": "#fff600",
            "cafenoir": "#4b3621",
            "caferoyale": "#6f440c",
            "calpolygreen": "#1e4d2b",
            "calico": "#e0c095",
            "california": "#fe9d04",
            "calypso": "#31728d",
            "camarone": "#00581a",
            "cambridgeblue": "#a3c1ad",
            "camelot": "#893456",
            "cameo": "#d9b99b",
            "cameopink": "#efbbcc",
            "camouflage": "#3c3910",
            "camouflagegreen": "#78866b",
            "cancan": "#d591a4",
            "canary": "#f3fb62",
            "canaryyellow": "#ffef00",
            "candlelight": "#fcd917",
            "candyapplered": "#ff0800",
            "cannonblack": "#251706",
            "cannonpink": "#894367",
            "capecod": "#3c4443",
            "capehoney": "#fee5ac",
            "capepalliser": "#a26645",
            "caper": "#dcedb4",
            "capri": "#00bfff",
            "caputmortuum": "#592720",
            "caramel": "#ffddaf",
            "cararra": "#eeeee8",
            "cardingreen": "#01361c",
            "cardinal": "#c41e3a",
            "cardinalpink": "#8c055e",
            "careyspink": "#d29eaa",
            "caribbeangreen": "#00cc99",
            "carissma": "#ea88a8",
            "carla": "#f3ffd8",
            "carmine": "#960018",
            "carminepink": "#eb4c42",
            "carminered": "#ff0038",
            "carnabytan": "#5c2e01",
            "carnation": "#f95a61",
            "carnationpink": "#ffa6c9",
            "carnelian": "#b31b1b",
            "carolinablue": "#56a0d3",
            "carouselpink": "#f9e0ed",
            "carrotorange": "#ed9121",
            "casablanca": "#f8b853",
            "casal": "#2f6168",
            "cascade": "#8ba9a5",
            "cashmere": "#e6bea5",
            "casper": "#adbed1",
            "castletongreen": "#00563b",
            "castro": "#52001f",
            "catalinablue": "#062a78",
            "catawba": "#703642",
            "catskillwhite": "#eef6f7",
            "cavernpink": "#e3bebe",
            "cedar": "#3e1c14",
            "cedarchest": "#c95a49",
            "cedarwoodfinish": "#711a00",
            "ceil": "#92a1cf",
            "celadon": "#ace1af",
            "celadongreen": "#2f847c",
            "celery": "#b8c25d",
            "celeste": "#b2ffff",
            "celestialblue": "#4997d0",
            "cello": "#1e385b",
            "celtic": "#163222",
            "cement": "#8d7662",
            "ceramic": "#fcfff9",
            "cerise": "#de3163",
            "cerisepink": "#ec3b83",
            "cerulean": "#007ba7",
            "ceruleanblue": "#2a52be",
            "ceruleanfrost": "#6d9bc3",
            "chablis": "#fff4f3",
            "chaletgreen": "#516e3d",
            "chalky": "#eed794",
            "chambray": "#354e8c",
            "chamois": "#eddcb1",
            "chamoisee": "#a0785a",
            "champagne": "#f7e7ce",
            "chantilly": "#f8c3df",
            "charade": "#292937",
            "charcoal": "#36454f",
            "chardon": "#fff3f1",
            "chardonnay": "#ffcd8c",
            "charlestongreen": "#232b2b",
            "charlotte": "#baeef9",
            "charm": "#d47494",
            "charmpink": "#e68fac",
            "chartreuse": "#dfff00",
            "chateaugreen": "#40a860",
            "chatelle": "#bdb3c7",
            "chathamsblue": "#175579",
            "chelseacucumber": "#83aa5d",
            "chelseagem": "#9e5302",
            "chenin": "#dfcd6f",
            "cherokee": "#fcda98",
            "cherryblossompink": "#ffb7c5",
            "cherrypie": "#2a0359",
            "cherrywood": "#651a14",
            "cherub": "#f8d9e9",
            "chestnut": "#954535",
            "chetwodeblue": "#8581d9",
            "chicago": "#5d5c58",
            "chiffon": "#f1ffc8",
            "chileanfire": "#f77703",
            "chileanheath": "#fffde6",
            "chinaivory": "#fcffe7",
            "chinarose": "#a8516e",
            "chinesered": "#aa381e",
            "chineseviolet": "#856088",
            "chino": "#cec7a7",
            "chinook": "#a8e3bd",
            "chlorophyllgreen": "#4aff00",
            "chocolate": "#7b3f00",
            "christalle": "#33036b",
            "christi": "#67a712",
            "christine": "#e7730a",
            "chromewhite": "#e8f1d4",
            "chromeyellow": "#ffa700",
            "cinder": "#0e0e18",
            "cinderella": "#fde1dc",
            "cinereous": "#98817b",
            "cinnabar": "#e34234",
            "cinnamonsatin": "#cd607e",
            "cioccolato": "#55280c",
            "citrine": "#e4d00a",
            "citrinewhite": "#faf7d6",
            "citron": "#9fa91f",
            "citrus": "#a1c50a",
            "clairvoyant": "#480656",
            "clamshell": "#d4b6af",
            "claret": "#7f1734",
            "classicrose": "#fbcce7",
            "clayash": "#bdc8b3",
            "claycreek": "#8a8360",
            "clearday": "#e9fffd",
            "clementine": "#e96e00",
            "clinker": "#371d09",
            "cloud": "#c7c4bf",
            "cloudburst": "#202e54",
            "cloudy": "#aca59f",
            "clover": "#384910",
            "cobaltblue": "#0047ab",
            "cocoabean": "#481c1c",
            "cocoabrown": "#d2691e",
            "coconut": "#965a3e",
            "coconutcream": "#f8f7dc",
            "codgray": "#0b0b0b",
            "coffee": "#6f4e37",
            "coffeebean": "#2a140e",
            "cognac": "#9f381d",
            "cola": "#3f2500",
            "coldpurple": "#aba0d9",
            "coldturkey": "#cebaba",
            "colonialwhite": "#ffedbc",
            "columbiablue": "#c4d8e2",
            "comet": "#5c5d75",
            "como": "#517c66",
            "conch": "#c9d9d2",
            "concord": "#7c7b7a",
            "concrete": "#f2f2f2",
            "confetti": "#e9d75a",
            "congobrown": "#593737",
            "congopink": "#f88379",
            "congressblue": "#02478e",
            "conifer": "#acdd4d",
            "contessa": "#c6726b",
            "coolblack": "#002e63",
            "coolgrey": "#8c92ac",
            "copper": "#b87333",
            "coppercanyon": "#7e3a15",
            "copperpenny": "#ad6f69",
            "copperred": "#cb6d51",
            "copperrose": "#996666",
            "copperrust": "#944747",
            "coquelicot": "#ff3800",
            "coral": "#ff7f50",
            "coralred": "#ff4040",
            "coralreef": "#c7bca2",
            "coraltree": "#a86b6b",
            "cordovan": "#893f45",
            "corduroy": "#606e68",
            "coriander": "#c4d0b0",
            "cork": "#40291d",
            "corn": "#e7bf05",
            "cornfield": "#f8facd",
            "cornharvest": "#8b6b0b",
            "cornflowerblue": "#6495ed",
            "cornflowerlilac": "#ffb0ac",
            "cornsilk": "#fff8dc",
            "corvette": "#fad3a2",
            "cosmic": "#76395d",
            "cosmiccobalt": "#2e2d88",
            "cosmiclatte": "#fff8e7",
            "cosmos": "#ffd8d9",
            "costadelsol": "#615d30",
            "cottoncandy": "#ffbcd9",
            "cottonseed": "#c2bdb6",
            "countygreen": "#01371a",
            "cowboy": "#4d282d",
            "coyotebrown": "#81613e",
            "crail": "#b95140",
            "cranberry": "#db5079",
            "craterbrown": "#462425",
            "crayolablue": "#1f75fe",
            "crayolagreen": "#1cac78",
            "crayolaorange": "#ff7538",
            "crayolared": "#ee204d",
            "crayolayellow": "#fce883",
            "cream": "#fffdd0",
            "creambrulee": "#ffe5a0",
            "creamcan": "#f5c85c",
            "creole": "#1e0f04",
            "crete": "#737829",
            "crimson": "#dc143c",
            "crimsonglory": "#be0032",
            "crimsonred": "#990000",
            "crocodile": "#736d58",
            "crownofthorns": "#771f1f",
            "crowshead": "#1c1208",
            "cruise": "#b5ecdf",
            "crusoe": "#004816",
            "crusta": "#fd7b33",
            "cumin": "#924321",
            "cumulus": "#fdffd5",
            "cupid": "#fbbeda",
            "curiousblue": "#2596d1",
            "cuttysark": "#507672",
            "cyan": "#00ffff",
            "cyanazure": "#4e82b4",
            "cyanblueazure": "#4682bf",
            "cyancobaltblue": "#28589c",
            "cyancornflowerblue": "#188bc2",
            "cybergrape": "#58427c",
            "cyberyellow": "#ffd300",
            "cyclamen": "#f56fa1",
            "cyprus": "#003e40",
            "daffodil": "#ffff31",
            "daintree": "#012731",
            "dairycream": "#f9e4bc",
            "daisybush": "#4f2398",
            "dallas": "#6e4b26",
            "dandelion": "#f0e130",
            "danube": "#6093d1",
            "darkblue": "#00008b",
            "darkbluegray": "#666699",
            "darkbrown": "#654321",
            "darkbrowntangelo": "#88654e",
            "darkburgundy": "#770f05",
            "darkbyzantium": "#5d3954",
            "darkcandyapplered": "#a40000",
            "darkcerulean": "#08457e",
            "darkchestnut": "#986960",
            "darkcoral": "#cd5b45",
            "darkcyan": "#008b8b",
            "darkebony": "#3c2005",
            "darkfern": "#0a480d",
            "darkgoldenrod": "#b8860b",
            "darkgreen": "#013220",
            "darkgunmetal": "#1f262a",
            "darkimperialblue": "#6e6ef9",
            "darkjunglegreen": "#1a2421",
            "darkkhaki": "#bdb76b",
            "darklavender": "#734f96",
            "darkliver": "#534b4f",
            "darkmagenta": "#8b008b",
            "darkmediumgray": "#a9a9a9",
            "darkmidnightblue": "#003366",
            "darkmossgreen": "#4a5d23",
            "darkolivegreen": "#556b2f",
            "darkorange": "#ff8c00",
            "darkorchid": "#9932cc",
            "darkpastelblue": "#779ecb",
            "darkpastelgreen": "#03c03c",
            "darkpastelpurple": "#966fd6",
            "darkpastelred": "#c23b22",
            "darkpink": "#e75480",
            "darkpuce": "#4f3a3c",
            "darkpurple": "#301934",
            "darkraspberry": "#872657",
            "darkred": "#8b0000",
            "darksalmon": "#e9967a",
            "darkscarlet": "#560319",
            "darkseagreen": "#8fbc8f",
            "darksienna": "#3c1414",
            "darkskyblue": "#8cbed6",
            "darkslateblue": "#483d8b",
            "darkslategray": "#2f4f4f",
            "darkspringgreen": "#177245",
            "darktan": "#918151",
            "darktangerine": "#ffa812",
            "darkterracotta": "#cc4e5c",
            "darkturquoise": "#00ced1",
            "darkvanilla": "#d1bea8",
            "darkviolet": "#9400d3",
            "darkyellow": "#9b870c",
            "dartmouthgreen": "#00703c",
            "davysgrey": "#555555",
            "dawn": "#a6a29a",
            "dawnpink": "#f3e9e5",
            "deyork": "#7ac488",
            "debianred": "#d70a53",
            "deco": "#d2da97",
            "deepblue": "#220878",
            "deepblush": "#e47698",
            "deepbronze": "#4a3004",
            "deepcarmine": "#a9203e",
            "deepcarminepink": "#ef3038",
            "deepcarrotorange": "#e9692c",
            "deepcerise": "#da3287",
            "deepchestnut": "#b94e48",
            "deepcove": "#051040",
            "deepfir": "#002900",
            "deepforestgreen": "#182d09",
            "deepfuchsia": "#c154c1",
            "deepgreen": "#056608",
            "deepgreencyanturquoise": "#0e7c61",
            "deepjunglegreen": "#004b49",
            "deepkoamaru": "#333366",
            "deeplemon": "#f5c71a",
            "deeplilac": "#9955bb",
            "deepmagenta": "#cc00cc",
            "deepmaroon": "#820000",
            "deepoak": "#412010",
            "deeppink": "#ff1493",
            "deeppuce": "#a95c68",
            "deepred": "#850101",
            "deepruby": "#843f5b",
            "deepsaffron": "#ff9933",
            "deepsapphire": "#082567",
            "deepsea": "#01826b",
            "deepseagreen": "#095859",
            "deepspacesparkle": "#4a646c",
            "deeptaupe": "#7e5e60",
            "deepteal": "#003532",
            "deeptuscanred": "#66424d",
            "deepviolet": "#330066",
            "deer": "#ba8759",
            "delrio": "#b09a95",
            "dell": "#396413",
            "delta": "#a4a49d",
            "deluge": "#7563a8",
            "denim": "#1560bd",
            "denimblue": "#2243b6",
            "derby": "#ffeed8",
            "desaturatedcyan": "#669999",
            "desert": "#ae6020",
            "desertsand": "#edc9af",
            "desertstorm": "#f8f8f7",
            "desire": "#ea3c53",
            "dew": "#eafffe",
            "diserria": "#db995e",
            "diamond": "#b9f2ff",
            "diesel": "#130000",
            "dimgray": "#696969",
            "dingley": "#5d7747",
            "dingydungeon": "#c53151",
            "dirt": "#9b7653",
            "disco": "#871550",
            "dixie": "#e29418",
            "dodgerblue": "#1e90ff",
            "dogs": "#b86d29",
            "dogwoodrose": "#d71868",
            "dollarbill": "#85bb65",
            "dolly": "#f9ff8b",
            "dolphin": "#646077",
            "domino": "#8e775e",
            "donjuan": "#5d4c51",
            "donkeybrown": "#664c28",
            "dorado": "#6b5755",
            "doublecolonialwhite": "#eee3ad",
            "doublepearllusta": "#fcf4d0",
            "doublespanishwhite": "#e6d7b9",
            "dovegray": "#6d6c6c",
            "downriver": "#092256",
            "downy": "#6fd0c5",
            "driftwood": "#af8751",
            "drover": "#fdf7ad",
            "dukeblue": "#00009c",
            "dulllavender": "#a899e6",
            "dune": "#383533",
            "duststorm": "#e5ccc9",
            "dustygray": "#a8989b",
            "dutchwhite": "#efdfbb",
            "eagle": "#b6baa4",
            "eaglegreen": "#004953",
            "earlsgreen": "#c9b93b",
            "earlydawn": "#fff9e6",
            "earthyellow": "#e1a95f",
            "eastbay": "#414c7d",
            "eastside": "#ac91ce",
            "easternblue": "#1e9ab0",
            "ebb": "#e9e3e3",
            "ebony": "#555d50",
            "ebonyclay": "#26283b",
            "eclipse": "#311c17",
            "ecru": "#c2b280",
            "ecruwhite": "#f5f3e5",
            "ecstasy": "#fa7814",
            "eden": "#105852",
            "edgewater": "#c8e3d7",
            "edward": "#a2aeab",
            "eerieblack": "#1b1b1b",
            "eggsour": "#fff4dd",
            "eggwhite": "#ffefc1",
            "eggplant": "#614051",
            "eggshell": "#f0ead6",
            "egyptianblue": "#1034a6",
            "elpaso": "#1e1708",
            "elsalva": "#8f3e33",
            "electricblue": "#7df9ff",
            "electriccrimson": "#ff003f",
            "electricindigo": "#6f00ff",
            "electriclime": "#ccff00",
            "electricpurple": "#bf00ff",
            "electricviolet": "#8b00ff",
            "electricyellow": "#ffff33",
            "elephant": "#123447",
            "elfgreen": "#088370",
            "elm": "#1c7c7d",
            "emerald": "#50c878",
            "eminence": "#6c3082",
            "emperor": "#514649",
            "empress": "#817377",
            "endeavour": "#0056a7",
            "energyyellow": "#f8dd5c",
            "engineeringinternationalorange": "#ba160c",
            "englishholly": "#022d15",
            "englishlavender": "#b48395",
            "englishred": "#ab4b52",
            "englishvermillion": "#cc474b",
            "englishwalnut": "#3e2b23",
            "envy": "#8ba690",
            "equator": "#e1bc64",
            "espresso": "#612718",
            "eternity": "#211a0e",
            "etonblue": "#96c8a2",
            "eucalyptus": "#44d7a8",
            "eunry": "#cfa39d",
            "eveningsea": "#024e46",
            "everglade": "#1c402e",
            "fogra29richblack": "#010b13",
            "fogra39richblack": "#010203",
            "fadedjade": "#427977",
            "fairpink": "#ffefec",
            "falcon": "#7f626d",
            "fallow": "#c19a6b",
            "falured": "#801818",
            "fandango": "#b53389",
            "fandangopink": "#de5285",
            "fantasy": "#faf3f0",
            "fashionfuchsia": "#f400a1",
            "fawn": "#e5aa70",
            "fedora": "#796a78",
            "feijoa": "#9fdd8c",
            "feldgrau": "#4d5d53",
            "fern": "#63b76c",
            "fernfrond": "#657220",
            "ferngreen": "#4f7942",
            "ferra": "#704f50",
            "ferrarired": "#ff2800",
            "festival": "#fbe96c",
            "feta": "#f0fcea",
            "fielddrab": "#6c541e",
            "fieryorange": "#b35213",
            "fieryrose": "#ff5470",
            "finch": "#626649",
            "finlandia": "#556d56",
            "finn": "#692d54",
            "fiord": "#405169",
            "fire": "#aa4203",
            "firebush": "#e89928",
            "fireenginered": "#ce2029",
            "firebrick": "#b22222",
            "firefly": "#0e2a30",
            "flame": "#e25822",
            "flamepea": "#da5b38",
            "flamenco": "#ff7d07",
            "flamingo": "#f2552a",
            "flamingopink": "#fc8eac",
            "flavescent": "#f7e98e",
            "flax": "#eedc82",
            "flaxsmoke": "#7b8265",
            "flint": "#6f6a61",
            "flirt": "#a2006d",
            "floralwhite": "#fffaf0",
            "flushmahogany": "#ca3435",
            "foam": "#d8fcfa",
            "fog": "#d7d0ff",
            "foggygray": "#cbcab6",
            "folly": "#ff004f",
            "forestgreen": "#228b22",
            "forgetmenot": "#fff1ee",
            "fountainblue": "#56b4be",
            "frangipani": "#ffdeb3",
            "frenchbistre": "#856d4d",
            "frenchblue": "#0072bb",
            "frenchfuchsia": "#fd3f92",
            "frenchgray": "#bdbdc6",
            "frenchlilac": "#86608e",
            "frenchlime": "#9efd38",
            "frenchmauve": "#d473d4",
            "frenchpass": "#bdedfd",
            "frenchpink": "#fd6c9e",
            "frenchplum": "#811453",
            "frenchpuce": "#4e1609",
            "frenchraspberry": "#c72c48",
            "frenchrose": "#f64a8a",
            "frenchskyblue": "#77b5fe",
            "frenchviolet": "#8806ce",
            "frenchwine": "#ac1e44",
            "freshair": "#a6e7ff",
            "fresheggplant": "#990066",
            "friargray": "#807e79",
            "fringyflower": "#b1e2c1",
            "froly": "#f57584",
            "frost": "#edf5dd",
            "frostbite": "#e936a7",
            "frostedmint": "#dbfff8",
            "frostee": "#e4f6e7",
            "fruitsalad": "#4f9d5d",
            "fuchsia": "#ff00ff",
            "fuchsiablue": "#7a58c1",
            "fuchsiapink": "#ff77ff",
            "fuchsiapurple": "#cc397b",
            "fuchsiarose": "#c74375",
            "fuego": "#bede0d",
            "fuelyellow": "#eca927",
            "fulvous": "#e48400",
            "funblue": "#1959a8",
            "fungreen": "#016d39",
            "fuscousgray": "#54534d",
            "fuzzywuzzy": "#cc6666",
            "fuzzywuzzybrown": "#c45655",
            "gogreen": "#00ab66",
            "gablegreen": "#163531",
            "gainsboro": "#dcdcdc",
            "gallery": "#efefef",
            "galliano": "#dcb20c",
            "gamboge": "#e49b0f",
            "gambogeorange": "#996600",
            "gargoylegas": "#ffdf46",
            "geebung": "#d18f1b",
            "genericviridian": "#007f66",
            "genoa": "#15736b",
            "geraldine": "#fb8989",
            "geyser": "#d4dfe2",
            "ghost": "#c7c9d5",
            "ghostwhite": "#f8f8ff",
            "giantsclub": "#b05c52",
            "giantsorange": "#fe5a1d",
            "gigas": "#523c94",
            "gimblet": "#b8b56a",
            "gin": "#e8f2eb",
            "ginfizz": "#fff9e2",
            "ginger": "#b06500",
            "givry": "#f8e4bf",
            "glacier": "#80b3c4",
            "gladegreen": "#61845f",
            "glaucous": "#6082b6",
            "glitter": "#e6e8fa",
            "glossygrape": "#ab92b3",
            "goben": "#726d4e",
            "goblin": "#3d7d52",
            "golddrop": "#f18200",
            "goldfusion": "#85754e",
            "goldtips": "#deba13",
            "golden": "#ffd700",
            "goldenbell": "#e28913",
            "goldenbrown": "#996515",
            "goldendream": "#f0d52d",
            "goldenfizz": "#f5fb3d",
            "goldengatebridge": "#c0362c",
            "goldenglow": "#fde295",
            "goldenpoppy": "#fcc200",
            "goldensand": "#f0db7d",
            "goldentainoi": "#ffcc5c",
            "goldenyellow": "#ffdf00",
            "goldenrod": "#daa520",
            "gondola": "#261414",
            "gordonsgreen": "#0b1107",
            "gorse": "#fff14f",
            "gossamer": "#069b81",
            "gossip": "#d2f8b0",
            "gothic": "#6d92a1",
            "governorbay": "#2f3cb3",
            "grainbrown": "#e4d5b7",
            "grandis": "#ffd38c",
            "granitegray": "#676767",
            "granitegreen": "#8d8974",
            "grannyapple": "#d5f6e3",
            "grannysmith": "#84a0a0",
            "grannysmithapple": "#a8e4a0",
            "grape": "#6f2da8",
            "graphite": "#251607",
            "gravel": "#4a444b",
            "gray": "#808080",
            "grayasparagus": "#465945",
            "graychateau": "#a2aab3",
            "graynickel": "#c3c3bd",
            "graynurse": "#e7ece6",
            "grayolive": "#a9a491",
            "graysuit": "#c1becd",
            "green": "#00ff00",
            "greenblue": "#1164b4",
            "greencyan": "#009966",
            "greenhaze": "#01a368",
            "greenhouse": "#24500f",
            "greenkelp": "#25311c",
            "greenleaf": "#436a0d",
            "greenlizard": "#a7f432",
            "greenmist": "#cbd3b0",
            "greenpea": "#1d6142",
            "greensheen": "#6eaea1",
            "greensmoke": "#a4af6e",
            "greenspring": "#b8c1b1",
            "greenvogue": "#032b52",
            "greenwaterloo": "#101405",
            "greenwhite": "#e8ebe0",
            "greenyellow": "#adff2f",
            "grenadier": "#d54600",
            "grizzly": "#885818",
            "grullo": "#a99a86",
            "guardsmanred": "#ba0101",
            "gulfblue": "#051657",
            "gulfstream": "#80b3ae",
            "gullgray": "#9dacb7",
            "gumleaf": "#b6d3bf",
            "gumbo": "#7ca1a6",
            "gunpowder": "#414257",
            "gunmetal": "#2a3439",
            "gunsmoke": "#828685",
            "gurkha": "#9a9577",
            "hacienda": "#98811b",
            "hairyheath": "#6b2a14",
            "haiti": "#1b1035",
            "halayàúbe": "#663854",
            "halfbaked": "#85c4cc",
            "halfcolonialwhite": "#fdf6d3",
            "halfdutchwhite": "#fef7de",
            "halfspanishwhite": "#fef4db",
            "halfandhalf": "#fffee1",
            "hampton": "#e5d8af",
            "hanblue": "#446ccf",
            "hanpurple": "#5218fa",
            "harlequin": "#3fff00",
            "harlequingreen": "#46cb18",
            "harp": "#e6f2ea",
            "harvardcrimson": "#c90016",
            "harvestgold": "#da9100",
            "havelockblue": "#5590d9",
            "hawaiiantan": "#9d5616",
            "hawkesblue": "#d4e2fc",
            "heatwave": "#ff7a00",
            "heath": "#541012",
            "heather": "#b7c3d0",
            "heatheredgray": "#b6b095",
            "heavymetal": "#2b3228",
            "heliotrope": "#df73ff",
            "heliotropegray": "#aa98a9",
            "heliotropemagenta": "#aa00bb",
            "hemlock": "#5e5d3b",
            "hemp": "#907874",
            "hibiscus": "#b6316c",
            "highland": "#6f8e63",
            "hillary": "#aca586",
            "himalaya": "#6a5d1b",
            "hintofgreen": "#e6ffe9",
            "hintofred": "#fbf9f9",
            "hintofyellow": "#fafde4",
            "hippieblue": "#589aaf",
            "hippiegreen": "#53824b",
            "hippiepink": "#ae4560",
            "hitgray": "#a1adb5",
            "hitpink": "#ffab81",
            "hokeypokey": "#c8a528",
            "hoki": "#65869f",
            "holly": "#011d13",
            "honeyflower": "#4f1c70",
            "honeydew": "#f0fff0",
            "honeysuckle": "#edfc84",
            "honolulublue": "#006db0",
            "hookersgreen": "#49796b",
            "hopbush": "#d06da1",
            "horizon": "#5a87a0",
            "horses": "#543d37",
            "horsesneck": "#604913",
            "hotmagenta": "#ff1dce",
            "hotpink": "#ff69b4",
            "hottoddy": "#b38007",
            "hummingbird": "#cff9f3",
            "huntergreen": "#355e3b",
            "hurricane": "#877c7b",
            "husk": "#b7a458",
            "icecold": "#b1f4e7",
            "iceberg": "#71a6d2",
            "icterine": "#fcf75e",
            "illuminatingemerald": "#319177",
            "illusion": "#f6a4c9",
            "imperial": "#602f6b",
            "imperialblue": "#002395",
            "imperialred": "#ed2939",
            "inchworm": "#b2ec5d",
            "independence": "#4c516d",
            "indiagreen": "#138808",
            "indianred": "#cd5c5c",
            "indiantan": "#4d1e01",
            "indianyellow": "#e3a857",
            "indigo": "#4b0082",
            "indigodye": "#091f92",
            "indochine": "#c26b03",
            "internationalkleinblue": "#002fa7",
            "internationalorange": "#ff4f00",
            "iris": "#5a4fcf",
            "irishcoffee": "#5f3d26",
            "iroko": "#433120",
            "iron": "#d4d7d9",
            "ironsidegray": "#676662",
            "ironstone": "#86483c",
            "irresistible": "#b3446c",
            "isabelline": "#f4f0ec",
            "islamicgreen": "#009000",
            "islandspice": "#fffcee",
            "ivory": "#fffff0",
            "jacaranda": "#2e0329",
            "jacarta": "#3a2a6a",
            "jackobean": "#2e1905",
            "jacksonspurple": "#20208d",
            "jade": "#00a86b",
            "jaffa": "#ef863f",
            "jaggedice": "#c2e8e5",
            "jagger": "#350e57",
            "jaguar": "#080110",
            "jambalaya": "#5b3013",
            "janna": "#f4ebd3",
            "japanesecarmine": "#9d2933",
            "japaneseindigo": "#264348",
            "japaneselaurel": "#0a6906",
            "japanesemaple": "#780109",
            "japaneseviolet": "#5b3256",
            "japonica": "#d87c63",
            "jasmine": "#f8de7e",
            "jasper": "#d73b3e",
            "java": "#1fc2c2",
            "jazzberryjam": "#a50b5e",
            "jellybean": "#da614e",
            "jet": "#343434",
            "jetstream": "#b5d2ce",
            "jewel": "#126b40",
            "jon": "#3b1f1f",
            "jonquil": "#f4ca16",
            "jordyblue": "#8ab9f1",
            "judgegray": "#544333",
            "jumbo": "#7c7b82",
            "junebud": "#bdda57",
            "junglegreen": "#29ab87",
            "junglemist": "#b4cfd3",
            "juniper": "#6d9292",
            "justright": "#eccdb9",
            "kucrimson": "#e8000d",
            "kabul": "#5e483e",
            "kaitokegreen": "#004620",
            "kangaroo": "#c6c8bd",
            "karaka": "#1e1609",
            "karry": "#ffead4",
            "kashmirblue": "#507096",
            "kellygreen": "#4cbb17",
            "kelp": "#454936",
            "kenyancopper": "#7c1c05",
            "keppel": "#3ab09e",
            "keylime": "#e8f48c",
            "keylimepie": "#bfc921",
            "khaki": "#c3b091",
            "kidnapper": "#e1ead4",
            "kilamanjaro": "#240c02",
            "killarney": "#3a6a47",
            "kimberly": "#736c9f",
            "kingfisherdaisy": "#3e0480",
            "kobi": "#e79fc4",
            "kobicha": "#6b4423",
            "kokoda": "#6e6d57",
            "kombugreen": "#354230",
            "korma": "#8f4b0e",
            "koromiko": "#ffbd5f",
            "kournikova": "#ffe772",
            "kumera": "#886221",
            "lapalma": "#368716",
            "larioja": "#b3c110",
            "lasallegreen": "#087830",
            "languidlavender": "#d6cadd",
            "lapislazuli": "#26619c",
            "laspalmas": "#c6e610",
            "laser": "#c8b568",
            "laurel": "#749378",
            "laurelgreen": "#a9ba9d",
            "lava": "#cf1020",
            "lavender": "#b57edc",
            "lavenderblush": "#fff0f5",
            "lavendergray": "#c4c3d0",
            "lavenderindigo": "#9457eb",
            "lavendermagenta": "#ee82ee",
            "lavendermist": "#e6e6fa",
            "lavenderpink": "#fbaed2",
            "lavenderpurple": "#967bb6",
            "lavenderrose": "#fba0e3",
            "lawngreen": "#7cfc00",
            "leather": "#967059",
            "lemon": "#fff700",
            "lemonchiffon": "#fffacd",
            "lemoncurry": "#cca01d",
            "lemonginger": "#ac9e22",
            "lemonglacier": "#fdff00",
            "lemongrass": "#9b9e8f",
            "lemonlime": "#e3ff00",
            "lemonmeringue": "#f6eabe",
            "lemonyellow": "#fff44f",
            "lenurple": "#ba93d8",
            "liberty": "#545aa7",
            "licorice": "#1a1110",
            "lightapricot": "#fdd5b1",
            "lightblue": "#add8e6",
            "lightbrilliantred": "#fe2e2e",
            "lightbrown": "#b5651d",
            "lightcarminepink": "#e66771",
            "lightcobaltblue": "#88ace0",
            "lightcoral": "#f08080",
            "lightcornflowerblue": "#93ccea",
            "lightcrimson": "#f56991",
            "lightcyan": "#e0ffff",
            "lightdeeppink": "#ff5ccd",
            "lightfrenchbeige": "#c8ad7f",
            "lightfuchsiapink": "#f984ef",
            "lightgoldenrodyellow": "#fafad2",
            "lightgray": "#d3d3d3",
            "lightgrayishmagenta": "#cc99cc",
            "lightgreen": "#90ee90",
            "lighthotpink": "#ffb3de",
            "lightkhaki": "#f0e68c",
            "lightmediumorchid": "#d39bcb",
            "lightmossgreen": "#addfad",
            "lightorchid": "#e6a8d7",
            "lightpastelpurple": "#b19cd9",
            "lightpink": "#ffb6c1",
            "lightsalmon": "#ffa07a",
            "lightsalmonpink": "#ff9999",
            "lightseagreen": "#20b2aa",
            "lightskyblue": "#87cefa",
            "lightslategray": "#778899",
            "lightsteelblue": "#b0c4de",
            "lighttaupe": "#b38b6d",
            "lightturquoise": "#afeeee",
            "lightyellow": "#ffffe0",
            "lightningyellow": "#fcc01e",
            "lilac": "#c8a2c8",
            "lilacbush": "#9874d3",
            "lilacluster": "#ae98aa",
            "lily": "#c8aabf",
            "lilywhite": "#e7f8ff",
            "lima": "#76bd17",
            "lime": "#bfff00",
            "limegreen": "#32cd32",
            "limeade": "#6f9d02",
            "limedash": "#747d63",
            "limedoak": "#ac8a56",
            "limedspruce": "#394851",
            "limerick": "#9dc209",
            "lincolngreen": "#195905",
            "linen": "#faf0e6",
            "linkwater": "#d9e4f5",
            "lipstick": "#ab0563",
            "lisbonbrown": "#423921",
            "littleboyblue": "#6ca0dc",
            "liver": "#674c47",
            "liverchestnut": "#987456",
            "lividbrown": "#4d282e",
            "loafer": "#eef4de",
            "loblolly": "#bdc9ce",
            "lochinvar": "#2c8c84",
            "lochmara": "#007ec7",
            "locust": "#a8af8e",
            "logcabin": "#242a1d",
            "logan": "#aaa9cd",
            "lola": "#dfcfdb",
            "londonhue": "#bea6c3",
            "lonestar": "#6d0101",
            "lotus": "#863c3c",
            "loulou": "#460b41",
            "lucky": "#af9f1c",
            "luckypoint": "#1a1a68",
            "lumber": "#ffe4cd",
            "lunargreen": "#3c493a",
            "lust": "#e62020",
            "luxorgold": "#a7882c",
            "lynch": "#697e9a",
            "msugreen": "#18453b",
            "mabel": "#d9f7ff",
            "macaroniandcheese": "#ffb97b",
            "madang": "#b7f0be",
            "madison": "#09255d",
            "madras": "#3f3002",
            "magenta": "#ca1f7b",
            "magentahaze": "#9f4576",
            "magentapink": "#cc338b",
            "magicmint": "#aaf0d1",
            "magicpotion": "#ff4466",
            "magnolia": "#f8f4ff",
            "mahogany": "#c04000",
            "maitai": "#b06608",
            "maize": "#fbec5d",
            "majorelleblue": "#6050dc",
            "makara": "#897d6d",
            "mako": "#444954",
            "malachite": "#0bda51",
            "malibu": "#7dc8f7",
            "mallard": "#233418",
            "malta": "#bdb2a1",
            "mamba": "#8e8190",
            "manatee": "#979aaa",
            "mandalay": "#ad781b",
            "mandarin": "#f37a48",
            "mandy": "#e25465",
            "mandyspink": "#f2c3b2",
            "mangotango": "#ff8243",
            "manhattan": "#f5c999",
            "mantis": "#74c365",
            "mantle": "#8b9c90",
            "manz": "#eeef78",
            "mardigras": "#880085",
            "marigold": "#eaa221",
            "marigoldyellow": "#fbe870",
            "mariner": "#286acd",
            "maroon": "#800000",
            "maroonoak": "#520c17",
            "marshland": "#0b0f08",
            "martini": "#afa09e",
            "martinique": "#363050",
            "marzipan": "#f8db9d",
            "masala": "#403b38",
            "matisse": "#1b659d",
            "matrix": "#b05d54",
            "matterhorn": "#4e3b41",
            "mauve": "#e0b0ff",
            "mauvetaupe": "#915f6d",
            "mauvelous": "#ef98aa",
            "maverick": "#d8c2d5",
            "maximumblue": "#47abcc",
            "maximumyellow": "#fafa37",
            "maygreen": "#4c9141",
            "mayablue": "#73c2fb",
            "meatbrown": "#e5b73b",
            "mediumaquamarine": "#66ddaa",
            "mediumblue": "#0000cd",
            "mediumcandyapplered": "#e2062c",
            "mediumelectricblue": "#035096",
            "mediumjunglegreen": "#1c352d",
            "mediumorchid": "#ba55d3",
            "mediumpurple": "#9370db",
            "mediumredviolet": "#bb3385",
            "mediumruby": "#aa4069",
            "mediumseagreen": "#3cb371",
            "mediumskyblue": "#80daeb",
            "mediumslateblue": "#7b68ee",
            "mediumspringbud": "#c9dc87",
            "mediumspringgreen": "#00fa9a",
            "mediumturquoise": "#48d1cc",
            "mediumvermilion": "#d9603b",
            "melanie": "#e4c2d5",
            "melanzane": "#300529",
            "mellowapricot": "#f8b878",
            "melon": "#fdbcb4",
            "melrose": "#c7c1ff",
            "mercury": "#e5e5e5",
            "merino": "#f6f0e6",
            "merlin": "#413c37",
            "merlot": "#831923",
            "metalpink": "#ff00fd",
            "metallicbronze": "#49371b",
            "metalliccopper": "#71291d",
            "metallicgold": "#d4af37",
            "metallicseaweed": "#0a7e8c",
            "metallicsunburst": "#9c7c38",
            "meteor": "#d07d12",
            "meteorite": "#3c1f76",
            "mexicanpink": "#e4007c",
            "mexicanred": "#a72525",
            "midgray": "#5f5f6e",
            "midnight": "#702670",
            "midnightblue": "#191970",
            "midnightmoss": "#041004",
            "mikado": "#2d2510",
            "mikadoyellow": "#ffc40c",
            "milan": "#faffa4",
            "milanored": "#b81104",
            "milkpunch": "#fff6d4",
            "millbrook": "#594433",
            "mimosa": "#f8fdd3",
            "mindaro": "#e3f988",
            "mineshaft": "#323232",
            "mineralgreen": "#3f5d53",
            "ming": "#36747d",
            "minionyellow": "#f5e050",
            "minsk": "#3f307f",
            "mint": "#3eb489",
            "mintcream": "#f5fffa",
            "mintgreen": "#98ff98",
            "mintjulep": "#f1eec1",
            "minttulip": "#c4f4eb",
            "mirage": "#161928",
            "mischka": "#d1d2dd",
            "mistgray": "#c4c4bc",
            "mistymoss": "#bbb477",
            "mistyrose": "#ffe4e1",
            "mobster": "#7f7589",
            "moccaccino": "#6e1d14",
            "moccasin": "#ffe4b5",
            "mocha": "#782d19",
            "mojo": "#c04737",
            "monalisa": "#ffa194",
            "monarch": "#8b0723",
            "mondo": "#4a3c30",
            "mongoose": "#b5a27f",
            "monsoon": "#8a8389",
            "montecarlo": "#83d0c6",
            "monza": "#c7031e",
            "moodyblue": "#7f76d3",
            "moonglow": "#fcfeda",
            "moonmist": "#dcddcc",
            "moonraker": "#d6cef6",
            "moonstoneblue": "#73a9c2",
            "mordantred": "#ae0c00",
            "morningglory": "#9edee0",
            "moroccobrown": "#441d00",
            "mortar": "#504351",
            "mosque": "#036a6e",
            "mossgreen": "#8a9a5b",
            "mountainmeadow": "#30ba8f",
            "mountainmist": "#959396",
            "mountbattenpink": "#997a8d",
            "muddywaters": "#b78e5c",
            "muesli": "#aa8b5b",
            "mughalgreen": "#306030",
            "mulberry": "#c54b8c",
            "mulberrywood": "#5c0536",
            "mulefawn": "#8c472f",
            "mulledwine": "#4e4562",
            "mummystomb": "#828e84",
            "munsellblue": "#0093af",
            "munsellgreen": "#00a877",
            "munsellpurple": "#9f00c5",
            "munsellred": "#f2003c",
            "munsellyellow": "#efcc00",
            "mustard": "#ffdb58",
            "mypink": "#d69188",
            "mysin": "#ffb31f",
            "myrtlegreen": "#317873",
            "mystic": "#d65282",
            "mysticmaroon": "#ad4379",
            "ncsblue": "#0087bd",
            "ncsgreen": "#009f6b",
            "ncsred": "#c40233",
            "nadeshikopink": "#f6adc6",
            "nandor": "#4b5d52",
            "napa": "#aca494",
            "napiergreen": "#2a8000",
            "naplesyellow": "#fada5e",
            "narvik": "#edf9f1",
            "naturalgray": "#8b8680",
            "navajowhite": "#ffdead",
            "navy": "#000080",
            "nebula": "#cbdbd6",
            "negroni": "#ffe2c5",
            "neoncarrot": "#ffa343",
            "neonfuchsia": "#fe4164",
            "neongreen": "#39ff14",
            "nepal": "#8eabc1",
            "neptune": "#7cb7bb",
            "nero": "#140600",
            "nevada": "#646e75",
            "newcar": "#214fc6",
            "neworleans": "#f3d69d",
            "newyorkpink": "#d7837f",
            "niagara": "#06a189",
            "nickel": "#727472",
            "nightrider": "#1f120f",
            "nightshadz": "#aa375a",
            "nileblue": "#193751",
            "nobel": "#b7b1b1",
            "nomad": "#bab1a2",
            "nonphotoblue": "#a4dded",
            "northtexasgreen": "#059033",
            "norway": "#a8bd9f",
            "nugget": "#c59922",
            "nutmeg": "#81422c",
            "nutmegwoodfinish": "#683600",
            "nyanza": "#e9ffdb",
            "oasis": "#feefce",
            "observatory": "#02866f",
            "oceanblue": "#4f42b5",
            "oceanboatblue": "#0077be",
            "oceangreen": "#48bf91",
            "ochre": "#cc7722",
            "offgreen": "#e6f8f3",
            "offyellow": "#fef9e3",
            "ogreodor": "#fd5240",
            "oil": "#281e15",
            "oldbrick": "#901e1e",
            "oldburgundy": "#43302e",
            "oldcopper": "#724a2f",
            "oldgold": "#cfb53b",
            "oldheliotrope": "#563c5c",
            "oldlace": "#fdf5e6",
            "oldlavender": "#796878",
            "oldmossgreen": "#867e36",
            "oldrose": "#c08081",
            "oldsilver": "#848482",
            "olive": "#808000",
            "olivedrab": "#6b8e23",
            "olivedrabseven": "#3c341f",
            "olivegreen": "#b5b35c",
            "olivehaze": "#8b8470",
            "olivetone": "#716e10",
            "olivine": "#9ab973",
            "onahau": "#cdf4ff",
            "onion": "#2f270e",
            "onyx": "#353839",
            "opal": "#a9c6c2",
            "operamauve": "#b784a7",
            "opium": "#8e6f70",
            "oracle": "#377475",
            "orange": "#ff7f00",
            "orangepeel": "#ff9f00",
            "orangered": "#ff4500",
            "orangeroughy": "#c45719",
            "orangesoda": "#fa5b3d",
            "orangewhite": "#fefced",
            "orangeyellow": "#f8d568",
            "orchid": "#da70d6",
            "orchidpink": "#f2bdcd",
            "orchidwhite": "#fffdf3",
            "oregon": "#9b4703",
            "organ": "#6c2e1f",
            "orient": "#015e85",
            "orientalpink": "#c69191",
            "orinoco": "#f3fbd4",
            "oriolesorange": "#fb4f14",
            "oslogray": "#878d91",
            "ottoman": "#e9f8ed",
            "outerspace": "#414a4c",
            "outrageousorange": "#ff6e4a",
            "oxfordblue": "#002147",
            "oxley": "#779e86",
            "oysterbay": "#dafaff",
            "oysterpink": "#e9cecd",
            "paarl": "#a65529",
            "pablo": "#776f61",
            "pacificblue": "#1ca9c9",
            "pacifika": "#778120",
            "paco": "#411f10",
            "padua": "#ade6c4",
            "pakistangreen": "#006600",
            "palatinateblue": "#273be2",
            "palatinatepurple": "#682860",
            "palebrown": "#987654",
            "palecanary": "#ffff99",
            "palecarmine": "#af4035",
            "palecerulean": "#9bc4e2",
            "palechestnut": "#ddadaf",
            "palecopper": "#da8a67",
            "palecornflowerblue": "#abcdef",
            "palecyan": "#87d3f8",
            "palegold": "#e6be8a",
            "palegoldenrod": "#eee8aa",
            "palegreen": "#98fb98",
            "palelavender": "#dcd0ff",
            "paleleaf": "#c0d3b9",
            "palemagenta": "#f984e5",
            "palemagentapink": "#ff99cc",
            "paleoyster": "#988d77",
            "palepink": "#fadadd",
            "paleplum": "#dda0dd",
            "paleprim": "#fdfeb8",
            "paleredviolet": "#db7093",
            "palerobineggblue": "#96ded1",
            "palerose": "#ffe1f2",
            "palesilver": "#c9c0bb",
            "palesky": "#6e7783",
            "paleslate": "#c3bfc1",
            "palespringbud": "#ecebbd",
            "paletaupe": "#bc987e",
            "paleviolet": "#cc99ff",
            "palmgreen": "#09230f",
            "palmleaf": "#19330e",
            "pampas": "#f4f2ee",
            "panache": "#eaf6ee",
            "pancho": "#edcdab",
            "pansypurple": "#78184a",
            "pantoneblue": "#0018a8",
            "pantonegreen": "#00ad43",
            "pantonemagenta": "#d0417e",
            "pantoneorange": "#ff5800",
            "pantonepink": "#d74894",
            "pantoneyellow": "#fedf00",
            "paoloveronesegreen": "#009b7d",
            "papayawhip": "#ffefd5",
            "paprika": "#8d0226",
            "paradisepink": "#e63e62",
            "paradiso": "#317d82",
            "parchment": "#f1e9d2",
            "parisdaisy": "#fff46e",
            "parism": "#26056a",
            "pariswhite": "#cadcd4",
            "parsley": "#134f19",
            "pastelblue": "#aec6cf",
            "pastelbrown": "#836953",
            "pastelgray": "#cfcfc4",
            "pastelgreen": "#77dd77",
            "pastelmagenta": "#f49ac2",
            "pastelorange": "#ffb347",
            "pastelpink": "#dea5a4",
            "pastelpurple": "#b39eb5",
            "pastelred": "#ff6961",
            "pastelviolet": "#cb99c9",
            "pastelyellow": "#fdfd96",
            "patina": "#639a8f",
            "pattensblue": "#def5ff",
            "paua": "#260368",
            "pavlova": "#d7c498",
            "paynesgrey": "#536878",
            "peach": "#ffcba4",
            "peachcream": "#fff0db",
            "peachorange": "#ffcc99",
            "peachpuff": "#ffdab9",
            "peachschnapps": "#ffdcd6",
            "peachyellow": "#fadfad",
            "peanut": "#782f16",
            "pear": "#d1e231",
            "pearl": "#eae0c8",
            "pearlaqua": "#88d8c0",
            "pearlbush": "#e8e0d5",
            "pearllusta": "#fcf4dc",
            "pearlmysticturquoise": "#32c6a6",
            "pearlypurple": "#b768a2",
            "peat": "#716b56",
            "pelorous": "#3eabbf",
            "peppermint": "#e3f5e1",
            "perano": "#a9bef2",
            "perfume": "#d0bef8",
            "peridot": "#e6e200",
            "periglacialblue": "#e1e6d6",
            "periwinkle": "#ccccff",
            "periwinklegray": "#c3cde6",
            "permanentgeraniumlake": "#e12c2c",
            "persianblue": "#1c39bb",
            "persiangreen": "#00a693",
            "persianindigo": "#32127a",
            "persianorange": "#d99058",
            "persianpink": "#f77fbe",
            "persianplum": "#701c1c",
            "persianred": "#cc3333",
            "persianrose": "#fe28a2",
            "persimmon": "#ec5800",
            "peru": "#cd853f",
            "perutan": "#7f3a02",
            "pesto": "#7c7631",
            "petiteorchid": "#db9690",
            "pewter": "#96a8a1",
            "pewterblue": "#8ba8b7",
            "pharlap": "#a3807b",
            "phthaloblue": "#000f89",
            "phthalogreen": "#123524",
            "picasso": "#fff39d",
            "pickledbean": "#6e4826",
            "pickledbluewood": "#314459",
            "pictonblue": "#45b1e8",
            "pictorialcarmine": "#c30b4e",
            "pigpink": "#fdd7e4",
            "pigeonpost": "#afbdd9",
            "piggypink": "#fddde6",
            "pigmentblue": "#333399",
            "pigmentgreen": "#00a550",
            "pigmentred": "#ed1c24",
            "pinecone": "#6d5e54",
            "pineglade": "#c7cd90",
            "pinegreen": "#01796f",
            "pinetree": "#171f04",
            "pink": "#ffc0cb",
            "pinkflamingo": "#fc74fd",
            "pinkflare": "#e1c0c8",
            "pinklace": "#ffddf4",
            "pinklady": "#fff1d8",
            "pinklavender": "#d8b2d1",
            "pinkorange": "#ff9966",
            "pinkpearl": "#e7accf",
            "pinkraspberry": "#980036",
            "pinksherbet": "#f78fa7",
            "pinkswan": "#beb5b7",
            "piper": "#c96323",
            "pipi": "#fef4cc",
            "pippin": "#ffe1df",
            "pirategold": "#ba7f03",
            "pistachio": "#93c572",
            "pixiegreen": "#c0d8b6",
            "pixiepowder": "#391285",
            "pizazz": "#ff9000",
            "pizza": "#c99415",
            "plantation": "#27504b",
            "platinum": "#e5e4e2",
            "plum": "#8e4585",
            "plumppurple": "#5946b2",
            "pohutukawa": "#8f021c",
            "polar": "#e5f9f6",
            "polishedpine": "#5da493",
            "poloblue": "#8da8cc",
            "pomegranate": "#f34723",
            "pompadour": "#660045",
            "popstar": "#be4f62",
            "porcelain": "#eff2f3",
            "porsche": "#eaae69",
            "portgore": "#251f4f",
            "portafino": "#ffffb4",
            "portage": "#8b9fee",
            "portica": "#f9e663",
            "portlandorange": "#ff5a36",
            "potpourri": "#f5e7e2",
            "pottersclay": "#8c5738",
            "powderash": "#bcc9c2",
            "powderblue": "#b0e0e6",
            "prairiesand": "#9a3820",
            "prelude": "#d0c0e5",
            "prim": "#f0e2ec",
            "primrose": "#edea99",
            "princessperfume": "#ff85cf",
            "princetonorange": "#f58025",
            "processcyan": "#00b7eb",
            "processmagenta": "#ff0090",
            "provincialpink": "#fef5f1",
            "prussianblue": "#003153",
            "psychedelicpurple": "#df00ff",
            "puce": "#cc8899",
            "pueblo": "#7d2c14",
            "puertorico": "#3fc1aa",
            "pullmanbrown": "#644117",
            "pullmangreen": "#3b331c",
            "pumice": "#c2cac4",
            "pumpkin": "#ff7518",
            "pumpkinskin": "#b1610b",
            "punch": "#dc4333",
            "punga": "#4d3d14",
            "purple": "#800080",
            "purpleheart": "#69359c",
            "purplemountainmajesty": "#9678b6",
            "purplenavy": "#4e5180",
            "purplepizzazz": "#fe4eda",
            "purpleplum": "#9c51b6",
            "purpletaupe": "#50404d",
            "purpureus": "#9a4eae",
            "putty": "#e7cd8c",
            "quarterpearllusta": "#fffdf4",
            "quarterspanishwhite": "#f7f2e1",
            "quartz": "#51484f",
            "queenblue": "#436b95",
            "queenpink": "#e8ccd7",
            "quicksilver": "#a6a6a6",
            "quicksand": "#bd978e",
            "quillgray": "#d6d6d1",
            "quinacridonemagenta": "#8e3a59",
            "quincy": "#623f2d",
            "rybblue": "#0247fe",
            "rybgreen": "#66b032",
            "ryborange": "#fb9902",
            "rybred": "#fe2712",
            "rybviolet": "#8601af",
            "rybyellow": "#fefe33",
            "racinggreen": "#0c1911",
            "radicalred": "#ff355e",
            "raffia": "#eadab8",
            "rainee": "#b9c8ac",
            "raisinblack": "#242124",
            "rajah": "#fbab60",
            "rangitoto": "#2e3222",
            "rangoongreen": "#1c1e13",
            "raspberry": "#e30b5d",
            "raspberrypink": "#e25098",
            "raven": "#727b89",
            "rawsienna": "#d68a59",
            "rawumber": "#826644",
            "razzledazzlerose": "#ff33cc",
            "razzmatazz": "#e3256b",
            "razzmicberry": "#8d4e85",
            "rebeccapurple": "#663399",
            "rebel": "#3c1206",
            "red": "#ff0000",
            "redbeech": "#7b3801",
            "redberry": "#8e0000",
            "reddamask": "#da6a41",
            "reddevil": "#860111",
            "redorange": "#ff5349",
            "redoxide": "#6e0902",
            "redpurple": "#e40078",
            "redribbon": "#ed0a3f",
            "redrobin": "#80341f",
            "redsalsa": "#fd3a4a",
            "redstage": "#d05f04",
            "redviolet": "#c71585",
            "redwood": "#a45a52",
            "reef": "#c9ffa2",
            "reefgold": "#9f821c",
            "regalblue": "#013f6a",
            "regalia": "#522d80",
            "regentgray": "#86949f",
            "regentstblue": "#aad6e6",
            "remy": "#feebf3",
            "renosand": "#a86515",
            "resolutionblue": "#002387",
            "revolver": "#2c1632",
            "rhino": "#2e3f62",
            "rhythm": "#777696",
            "ricecake": "#fffef0",
            "riceflower": "#eeffe2",
            "richblack": "#004040",
            "richbrilliantlavender": "#f1a7fe",
            "richcarmine": "#d70040",
            "richelectricblue": "#0892d0",
            "richgold": "#a85307",
            "richlavender": "#a76bcf",
            "richlilac": "#b666d2",
            "richmaroon": "#b03060",
            "riflegreen": "#444c38",
            "riogrande": "#bbd009",
            "ripelemon": "#f4d81c",
            "ripeplum": "#410056",
            "riptide": "#8be6d8",
            "riverbed": "#434c59",
            "roastcoffee": "#704241",
            "robroy": "#eac674",
            "robineggblue": "#00cccc",
            "rock": "#4d3833",
            "rockblue": "#9eb1cd",
            "rockspray": "#ba450c",
            "rocketmetallic": "#8a7f80",
            "rodeodust": "#c9b29b",
            "rollingstone": "#747d83",
            "roman": "#de6360",
            "romancoffee": "#795d4c",
            "romansilver": "#838996",
            "romance": "#fffefd",
            "romantic": "#ffd2b7",
            "ronchi": "#ecc54e",
            "roofterracotta": "#a62f20",
            "rope": "#8e4d1e",
            "rose": "#ff007f",
            "rosebonbon": "#f9429e",
            "rosebud": "#fbb2a3",
            "rosebudcherry": "#800b47",
            "rosedust": "#9e5e6f",
            "roseebony": "#674846",
            "rosefog": "#e7bcb4",
            "rosegold": "#b76e79",
            "rosepink": "#ff66cc",
            "rosered": "#c21e56",
            "rosetaupe": "#905d5d",
            "rosevale": "#ab4e52",
            "rosewhite": "#fff6f5",
            "roseofsharon": "#bf5500",
            "rosewood": "#65000b",
            "rossocorsa": "#d40000",
            "rosybrown": "#bc8f8f",
            "roti": "#c6a84b",
            "rouge": "#a23b6c",
            "royalairforceblue": "#5d8aa8",
            "royalazure": "#0038a8",
            "royalblue": "#4169e1",
            "royalfuchsia": "#ca2c92",
            "royalheath": "#ab3472",
            "royalpurple": "#7851a9",
            "ruber": "#ce4676",
            "rubinered": "#d10056",
            "ruby": "#e0115f",
            "rubyred": "#9b111e",
            "ruddy": "#ff0028",
            "ruddybrown": "#bb6528",
            "ruddypink": "#e18e96",
            "rufous": "#a81c07",
            "rum": "#796989",
            "rumswizzle": "#f9f8e4",
            "russet": "#80461b",
            "russett": "#755a57",
            "russiangreen": "#679267",
            "russianviolet": "#32174d",
            "rust": "#b7410e",
            "rusticred": "#480404",
            "rustynail": "#86560a",
            "rustyred": "#da2c43",
            "saeeceamber": "#ff7e00",
            "sacramentostategreen": "#043927",
            "saddle": "#4c3024",
            "saddlebrown": "#8b4513",
            "safetyorange": "#ff7800",
            "safetyyellow": "#eed202",
            "saffron": "#f4c430",
            "saffronmango": "#f9bf58",
            "sage": "#bcb88a",
            "sahara": "#b7a214",
            "saharasand": "#f1e788",
            "sail": "#b8e0f9",
            "salem": "#097f4b",
            "salmon": "#fa8072",
            "salmonpink": "#ff91a4",
            "salomie": "#fedb8d",
            "saltbox": "#685e6e",
            "saltpan": "#f1f7f2",
            "sambuca": "#3a2010",
            "sanfelix": "#0b6207",
            "sanjuan": "#304b6a",
            "sanmarino": "#456cac",
            "sanddune": "#967117",
            "sandal": "#aa8d6f",
            "sandrift": "#ab917a",
            "sandstone": "#796d62",
            "sandstorm": "#ecd540",
            "sandwisp": "#f5e7a2",
            "sandybeach": "#ffeac8",
            "sandybrown": "#f4a460",
            "sangria": "#92000a",
            "sanguinebrown": "#8d3d38",
            "santafe": "#b16d52",
            "santasgray": "#9fa0b1",
            "sapgreen": "#507d2a",
            "sapling": "#ded4a4",
            "sapphire": "#0f52ba",
            "sapphireblue": "#0067a5",
            "saratoga": "#555b10",
            "sasquatchsocks": "#ff4681",
            "satinlinen": "#e6e4d4",
            "satinsheengold": "#cba135",
            "sauvignon": "#fff5f3",
            "sazerac": "#fff4e0",
            "scampi": "#675fa6",
            "scandal": "#cffaf4",
            "scarlet": "#ff2400",
            "scarletgum": "#431560",
            "scarlett": "#950015",
            "scarpaflow": "#585562",
            "schist": "#a9b497",
            "schoolbusyellow": "#ffd800",
            "schooner": "#8b847e",
            "scienceblue": "#0066cc",
            "scooter": "#2ebfd4",
            "scorpion": "#695f62",
            "scotchmist": "#fffbdc",
            "screamingreen": "#66ff66",
            "seablue": "#006994",
            "seabuckthorn": "#fba129",
            "seagreen": "#2e8b57",
            "seamist": "#c5dbca",
            "seanymph": "#78a39c",
            "seapink": "#ed989e",
            "seaserpent": "#4bc7cf",
            "seagull": "#80ccea",
            "sealbrown": "#59260b",
            "seance": "#731e8f",
            "seashell": "#fff5ee",
            "seaweed": "#1b2f11",
            "selago": "#f0eefd",
            "selectiveyellow": "#ffba00",
            "sepia": "#704214",
            "sepiablack": "#2b0202",
            "sepiaskin": "#9e5b40",
            "serenade": "#fff4e8",
            "shadow": "#8a795d",
            "shadowblue": "#778ba5",
            "shadowgreen": "#9ac2b8",
            "shadylady": "#aaa5a9",
            "shakespeare": "#4eabd1",
            "shalimar": "#fbffba",
            "shampoo": "#ffcff1",
            "shamrock": "#33cc99",
            "shamrockgreen": "#009e60",
            "shark": "#25272c",
            "sheengreen": "#8fd400",
            "sherpablue": "#004950",
            "sherwoodgreen": "#02402c",
            "shilo": "#e8b9b3",
            "shimmeringblush": "#d98695",
            "shinglefawn": "#6b4e31",
            "shinyshamrock": "#5fa778",
            "shipcove": "#788bba",
            "shipgray": "#3e3a44",
            "shiraz": "#b20931",
            "shocking": "#e292c0",
            "shockingpink": "#fc0fc0",
            "shuttlegray": "#5f6672",
            "siam": "#646a54",
            "sidecar": "#f3e7bb",
            "sienna": "#882d17",
            "silk": "#bdb1a8",
            "silver": "#c0c0c0",
            "silverchalice": "#acacac",
            "silverlakeblue": "#5d89ba",
            "silverpink": "#c4aead",
            "silversand": "#bfc1c2",
            "silvertree": "#66b58f",
            "sinbad": "#9fd7d3",
            "sinopia": "#cb410b",
            "siren": "#7a013a",
            "sirocco": "#718080",
            "sisal": "#d3cbba",
            "sizzlingred": "#ff3855",
            "sizzlingsunrise": "#ffdb00",
            "skeptic": "#cae6da",
            "skobeloff": "#007474",
            "skyblue": "#87ceeb",
            "skymagenta": "#cf71af",
            "slateblue": "#6a5acd",
            "slategray": "#708090",
            "slimygreen": "#299617",
            "smalt": "#003399",
            "smaltblue": "#51808f",
            "smashedpumpkin": "#ff6d3a",
            "smitten": "#c84186",
            "smoke": "#738276",
            "smokeytopaz": "#832a0d",
            "smoky": "#605b73",
            "smokyblack": "#100c08",
            "smokytopaz": "#933d41",
            "snow": "#fffafa",
            "snowdrift": "#f7faf7",
            "snowflurry": "#e4ffd1",
            "snowymint": "#d6ffdb",
            "snuff": "#e2d8ed",
            "soap": "#cec8ef",
            "soapstone": "#fffbf9",
            "softamber": "#d1c6b4",
            "softpeach": "#f5edef",
            "solidpink": "#893843",
            "solitaire": "#fef8e2",
            "solitude": "#eaf6ff",
            "sonicsilver": "#757575",
            "sorbus": "#fd7c07",
            "sorrellbrown": "#ceb98f",
            "soyabean": "#6a6051",
            "spacecadet": "#1d2951",
            "spanishbistre": "#807532",
            "spanishblue": "#0070b8",
            "spanishcarmine": "#d10047",
            "spanishcrimson": "#e51a4c",
            "spanishgray": "#989898",
            "spanishgreen": "#009150",
            "spanishorange": "#e86100",
            "spanishpink": "#f7bfbe",
            "spanishred": "#e60026",
            "spanishskyblue": "#00aae4",
            "spanishviolet": "#4c2882",
            "spanishviridian": "#007f5c",
            "spartancrimson": "#9e1316",
            "spectra": "#2f5a57",
            "spice": "#6a442e",
            "spicymix": "#8b5f4d",
            "spicymustard": "#74640d",
            "spicypink": "#816e71",
            "spindle": "#b6d1ea",
            "spirodiscoball": "#0fc0fc",
            "spray": "#79deec",
            "springbud": "#a7fc00",
            "springfrost": "#87ff2a",
            "springgreen": "#00ff7f",
            "springleaves": "#578363",
            "springrain": "#accbb1",
            "springsun": "#f6ffdc",
            "springwood": "#f8f6f1",
            "sprout": "#c1d7b0",
            "spunpearl": "#aaabb7",
            "squirrel": "#8f8176",
            "stpatricksblue": "#23297a",
            "sttropaz": "#2d569b",
            "stack": "#8a8f8a",
            "starcommandblue": "#007bb8",
            "stardust": "#9f9f9c",
            "starkwhite": "#e5d7bd",
            "starship": "#ecf245",
            "steelblue": "#4682b4",
            "steelgray": "#262335",
            "steelpink": "#cc33cc",
            "steelteal": "#5f8a8b",
            "stiletto": "#9c3336",
            "stonewall": "#928573",
            "stormdust": "#646463",
            "stormgray": "#717486",
            "stormcloud": "#4f666a",
            "stratos": "#000741",
            "straw": "#e4d96f",
            "strawberry": "#fc5a8d",
            "strikemaster": "#956387",
            "stromboli": "#325d52",
            "studio": "#714ab2",
            "submarine": "#bac7c9",
            "sugarcane": "#f9fff6",
            "sugarplum": "#914e75",
            "sulu": "#c1f07c",
            "summergreen": "#96bbab",
            "sun": "#fbac13",
            "sunburntcyclops": "#ff404c",
            "sundance": "#c9b35b",
            "sundown": "#ffb1b3",
            "sunflower": "#e4d422",
            "sunglo": "#e16865",
            "sunglow": "#ffcc33",
            "sunny": "#f2f27a",
            "sunray": "#e3ab57",
            "sunset": "#fad6a5",
            "sunsetorange": "#fd5e53",
            "sunshade": "#ff9e2c",
            "superpink": "#cf6ba9",
            "supernova": "#ffc901",
            "surf": "#bbd7c1",
            "surfcrest": "#cfe5d2",
            "surfiegreen": "#0c7a79",
            "sushi": "#87ab39",
            "suvagray": "#888387",
            "swamp": "#001b1c",
            "swampgreen": "#acb78e",
            "swansdown": "#dcf0ea",
            "sweetbrown": "#a83731",
            "sweetcorn": "#fbea8c",
            "sweetpink": "#fd9fa2",
            "swirl": "#d3cdc5",
            "swisscoffee": "#ddd6d5",
            "sycamore": "#908d39",
            "tabasco": "#a02712",
            "tacao": "#edb381",
            "tacha": "#d6c562",
            "tahitigold": "#e97c07",
            "tahunasands": "#eef0c8",
            "tallpoppy": "#b32d29",
            "tallow": "#a8a589",
            "tamarillo": "#991613",
            "tamarind": "#341515",
            "tan": "#d2b48c",
            "tanhide": "#fa9d5a",
            "tana": "#d9dcc1",
            "tangaroa": "#03163c",
            "tangelo": "#f94d00",
            "tangerine": "#f28500",
            "tangerineyellow": "#ffcc00",
            "tango": "#ed7a1c",
            "tangopink": "#e4717a",
            "tapa": "#7b7874",
            "tapestry": "#b05e81",
            "tara": "#e1f6e8",
            "tarawera": "#073a50",
            "tartorange": "#fb4d46",
            "tasman": "#cfdccf",
            "taupe": "#483c32",
            "taupegray": "#8b8589",
            "tawnyport": "#692545",
            "tepapagreen": "#1e433c",
            "tea": "#c1bab0",
            "teagreen": "#d0f0c0",
            "tearose": "#f4c2c2",
            "teak": "#b19461",
            "teal": "#008080",
            "tealblue": "#367588",
            "tealdeer": "#99e6b3",
            "tealgreen": "#00827f",
            "telemagenta": "#cf3476",
            "temptress": "#3b000b",
            "tenne": "#cd5700",
            "tequila": "#ffe6c7",
            "terracotta": "#e2725b",
            "texas": "#f8f99c",
            "texasrose": "#ffb555",
            "thatch": "#b69d98",
            "thatchgreen": "#403d19",
            "thistle": "#d8bfd8",
            "thistlegreen": "#cccaa8",
            "thulianpink": "#de6fa1",
            "thunder": "#33292f",
            "thunderbird": "#c02b18",
            "tiamaria": "#c1440e",
            "tiara": "#c3d1d1",
            "tiber": "#063537",
            "ticklemepink": "#fc89ac",
            "tidal": "#f1ffad",
            "tide": "#bfb8b0",
            "tiffanyblue": "#0abab5",
            "tigerseye": "#e08d3c",
            "timbergreen": "#16322c",
            "timberwolf": "#dbd7d2",
            "titanwhite": "#f0eeff",
            "titaniumyellow": "#eee600",
            "toast": "#9a6e61",
            "tobaccobrown": "#715d47",
            "toledo": "#3a0020",
            "tolopea": "#1b0245",
            "tomthumb": "#3f583b",
            "tomato": "#ff6347",
            "tonyspink": "#e79f8c",
            "toolbox": "#746cc0",
            "topaz": "#ffc87c",
            "toreabay": "#0f2d9e",
            "toryblue": "#1450aa",
            "tosca": "#8d3f3f",
            "totempole": "#991b07",
            "towergray": "#a9bdbf",
            "tractorred": "#fd0e35",
            "tradewind": "#5fb3ac",
            "tranquil": "#e6ffff",
            "travertine": "#fffde8",
            "treepoppy": "#fc9c1d",
            "treehouse": "#3b2820",
            "trendygreen": "#7c881a",
            "trendypink": "#8c6495",
            "trinidad": "#e64e03",
            "tropicalblue": "#c3ddf9",
            "tropicalrainforest": "#00755e",
            "tropicalviolet": "#cda4de",
            "trout": "#4a4e5a",
            "trueblue": "#0073cf",
            "truev": "#8a73d6",
            "tuatara": "#363534",
            "tuftbush": "#ffddcd",
            "tuftsblue": "#417dc1",
            "tulip": "#ff878d",
            "tuliptree": "#eab33b",
            "tumbleweed": "#deaa88",
            "tuna": "#353542",
            "tundora": "#4a4244",
            "turbo": "#fae600",
            "turkishrose": "#b57281",
            "turmeric": "#cabb48",
            "turquoise": "#40e0d0",
            "turquoiseblue": "#00ffef",
            "turquoisegreen": "#a0d6b4",
            "turtlegreen": "#2a380b",
            "tuscanred": "#7c4848",
            "tuscantan": "#a67b5b",
            "tuscany": "#c09999",
            "tusk": "#eef3c3",
            "tussock": "#c5994b",
            "tutu": "#fff1f9",
            "twilight": "#e4cfde",
            "twilightblue": "#eefdff",
            "twilightlavender": "#8a496b",
            "twine": "#c2955d",
            "tyrianpurple": "#66023c",
            "uablue": "#0033aa",
            "uared": "#d9004c",
            "uclablue": "#536895",
            "uclagold": "#ffb300",
            "ufogreen": "#3cd070",
            "upforestgreen": "#014421",
            "upmaroon": "#7b1113",
            "usafablue": "#004f98",
            "ube": "#8878c3",
            "ultrapink": "#ff6fff",
            "ultramarine": "#3f00ff",
            "ultramarineblue": "#4166f5",
            "umber": "#635147",
            "unbleachedsilk": "#ffddca",
            "underagepink": "#f9e6f4",
            "unitednationsblue": "#5b92e5",
            "universityofcaliforniagold": "#b78727",
            "universityoftennesseeorange": "#f77f00",
            "unmellowyellow": "#ffff66",
            "upsdellred": "#ae2029",
            "urobilin": "#e1ad21",
            "utahcrimson": "#d3003f",
            "valencia": "#d84437",
            "valentino": "#350e42",
            "valhalla": "#2b194f",
            "vancleef": "#49170c",
            "vandykebrown": "#664228",
            "vanilla": "#f3e5ab",
            "vanillaice": "#f38fa9",
            "varden": "#fff6df",
            "vegasgold": "#c5b358",
            "venetianred": "#c80815",
            "veniceblue": "#055989",
            "venus": "#928590",
            "verdigris": "#43b3ae",
            "verdungreen": "#495400",
            "vermilion": "#d9381e",
            "veronica": "#a020f0",
            "verylightazure": "#74bbfb",
            "verylightblue": "#6666ff",
            "verylightmalachitegreen": "#64e986",
            "verylighttangelo": "#ffb077",
            "verypaleorange": "#ffdfbf",
            "verypaleyellow": "#ffffbf",
            "vesuvius": "#b14a0b",
            "victoria": "#534491",
            "vidaloca": "#549019",
            "viking": "#64ccdb",
            "vinrouge": "#983d61",
            "viola": "#cb8fa9",
            "violentviolet": "#290c5e",
            "violet": "#7f00ff",
            "violetblue": "#324ab2",
            "violeteggplant": "#991199",
            "violetred": "#f75394",
            "viridian": "#40826d",
            "viridiangreen": "#009698",
            "visvis": "#ffefa1",
            "vistablue": "#7c9ed9",
            "vistawhite": "#fcf8f7",
            "vividamber": "#cc9900",
            "vividauburn": "#922724",
            "vividburgundy": "#9f1d35",
            "vividcerise": "#da1d81",
            "vividcerulean": "#00aaee",
            "vividcrimson": "#cc0033",
            "vividgamboge": "#ff9900",
            "vividlimegreen": "#a6d608",
            "vividmalachite": "#00cc33",
            "vividmulberry": "#b80ce3",
            "vividorange": "#ff5f00",
            "vividorangepeel": "#ffa000",
            "vividorchid": "#cc00ff",
            "vividraspberry": "#ff006c",
            "vividred": "#f70d1a",
            "vividredtangelo": "#df6124",
            "vividskyblue": "#00ccff",
            "vividtangelo": "#f07427",
            "vividtangerine": "#ffa089",
            "vividvermilion": "#e56024",
            "vividviolet": "#9f00ff",
            "vividyellow": "#ffe302",
            "volt": "#ceff00",
            "voodoo": "#533455",
            "vulcan": "#10121d",
            "wafer": "#decbc6",
            "waikawagray": "#5a6e9c",
            "waiouru": "#363c0d",
            "walnut": "#773f1a",
            "warmblack": "#004242",
            "wasabi": "#788a25",
            "waterleaf": "#a1e9de",
            "watercourse": "#056f57",
            "waterloo": "#7b7c94",
            "waterspout": "#a4f4f9",
            "wattle": "#dcd747",
            "watusi": "#ffddcf",
            "waxflower": "#ffc0a8",
            "wepeep": "#f7dbe6",
            "webchartreuse": "#7fff00",
            "weborange": "#ffa500",
            "wedgewood": "#4e7f9e",
            "weldonblue": "#7c98ab",
            "wellread": "#b43332",
            "wenge": "#645452",
            "westcoast": "#625119",
            "westside": "#ff910f",
            "westar": "#dcd9d2",
            "wewak": "#f19bab",
            "wheat": "#f5deb3",
            "wheatfield": "#f3edcf",
            "whiskey": "#d59a6f",
            "whisper": "#f7f5fa",
            "white": "#ffffff",
            "whiteice": "#ddf9f1",
            "whitelilac": "#f8f7fc",
            "whitelinen": "#f8f0e8",
            "whitepointer": "#fef8ff",
            "whiterock": "#eae8d4",
            "whitesmoke": "#f5f5f5",
            "wildblueyonder": "#a2add0",
            "wildorchid": "#d470a2",
            "wildrice": "#ece090",
            "wildsand": "#f4f4f4",
            "wildstrawberry": "#ff43a4",
            "wildwatermelon": "#fc6c85",
            "wildwillow": "#b9c46a",
            "william": "#3a686c",
            "willowbrook": "#dfecda",
            "willowgrove": "#65745d",
            "willpowerorange": "#fd5800",
            "windsor": "#3c0878",
            "windsortan": "#a75502",
            "wine": "#722f37",
            "wineberry": "#591d35",
            "winedregs": "#673147",
            "winterhazel": "#d5d195",
            "wintersky": "#ff007c",
            "winterwizard": "#a0e6ff",
            "wintergreendream": "#56887d",
            "wisppink": "#fef4f8",
            "wisteria": "#c9a0dc",
            "wistful": "#a4a6d3",
            "witchhaze": "#fffc99",
            "woodbark": "#261105",
            "woodland": "#4d5328",
            "woodrush": "#302a0f",
            "woodsmoke": "#0c0d0f",
            "woodybrown": "#483131",
            "x11darkgreen": "#006400",
            "x11gray": "#bebebe",
            "xanadu": "#738678",
            "yaleblue": "#0f4d92",
            "yankeesblue": "#1c2841",
            "yellow": "#ffff00",
            "yellowgreen": "#9acd32",
            "yellowmetal": "#716338",
            "yelloworange": "#ffae42",
            "yellowrose": "#fff000",
            "yellowsea": "#fea904",
            "yourpink": "#ffc3c0",
            "yukongold": "#7b6608",
            "yuma": "#cec291",
            "zaffre": "#0014a8",
            "zambezi": "#685558",
            "zanah": "#daecd6",
            "zest": "#e5841b",
            "zeus": "#292319",
            "ziggurat": "#bfdbe2",
            "zinnwaldite": "#ebc2af",
            "zinnwalditebrown": "#2c1608",
            "zircon": "#f4f8ff",
            "zombie": "#e4d69b",
            "zomp": "#39a78e",
            "zorba": "#a59b91",
            "zuccini": "#044022",
            "zumthor": "#edf6ff"
         }
      }
      hexNormalize(str) {
         const regex = /^#([a-fA-F\d]{3}|[a-fA-F\d]{4}|[a-fA-F\d]{6}|[a-fA-F\d]{8})$/;
         if (!regex.test(str)) return undefined;
         let hex = str.slice(1).toLowerCase();
         if (hex.length === 3) {
            hex = hex.replace(/./g, x => x + x) + 'ff';
         } else if (hex.length === 4) {
            hex = hex.replace(/./g, x => x + x);
         } else if (hex.length === 6) {
            hex += 'ff';
         }
         return `#${hex.toLowerCase()}`;
      }
      rgbNormalize(str) {
         let regex = /^rgba?\(\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*(?:\/\s*|,\s*)?(0|1|0?\.\d+)?\s*\)$/i;
         let match = str.match(regex);
         if (!match) return undefined;
         let r = parseInt(match[1]);
         let g = parseInt(match[3]);
         let b = parseInt(match[5]);
         let a = match[7] !== undefined ? parseFloat(match[7]) : 1;
         if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1) return undefined;
         return `rgba(${r} ${g} ${b} / ${a})`;
      }
      hslNormalize(str) {
         let regex = /^hsla?\(\s*(\d+(\.\d+)?)\s*(deg)?\s*,?\s*(\d+(\.\d+)?)%?\s*,?\s*(\d+(\.\d+)?)%?\s*(?:\/\s*|,\s*)?(0|1|0?\.\d+)?\s*\)$/i;
         let match = str.match(regex);
         if (!match) return undefined;
         let h = Math.round(parseFloat(match[1]));
         let s = Math.round(parseFloat(match[4]));
         let l = Math.round(parseFloat(match[6]));
         let a = match[8] !== undefined ? parseFloat(match[8]) : 1;
         if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100 || a < 0 || a > 1) return undefined;
         return `hsla(${h} ${s}% ${l}% / ${a})`;
      }
      getHexObj(str) {
         let normalizedHex = this.hexNormalize(str);
         if (!normalizedHex) return undefined;
         let match = normalizedHex.match(/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/i);
         let r = match[1];
         let g = match[2];
         let b = match[3];
         let a = match[4];
         return { r, g, b, a };
      }
      getRgbObj(str) {
         let normalizedRgb = this.rgbNormalize(str);
         if (!normalizedRgb) return undefined;
         let match = normalizedRgb.match(/^rgba\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\/\s*(0|1|0?\.\d+)\s*\)$/i);
         let r = parseInt(match[1]);
         let g = parseInt(match[2]);
         let b = parseInt(match[3]);
         let a = parseFloat(Number(match[4]).toFixed(2));
         return { r, g, b, a };
      }
      getHslObj(str) {
         let normalizedHsl = this.hslNormalize(str);
         if (!normalizedHsl) return undefined;
         let match = normalizedHsl.match(/^hsla\(\s*(\d{1,3})\s*(\d{1,3})%\s*\s*(\d{1,3})%\s*\/\s*(0|1|0?\.\d+)\s*\)$/i);
         let h = parseInt(match[1]);
         let s = parseInt(match[2]);
         let l = parseInt(match[3]);
         let a = parseFloat(Number(match[4]).toFixed(2));
         return { h, s, l, a };
      }
      hexObjToHsl(r, g, b, a = 1) {
         if (r == undefined || g == undefined || b == undefined) return undefined;
         r = parseInt(r, 16);
         g = parseInt(g, 16);
         b = parseInt(b, 16);
         a = parseFloat((parseInt(a, 16) / 255).toFixed(2));
         if (r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0 || a > 1) return undefined;
         r /= 255;
         g /= 255;
         b /= 255;
         let max = Math.max(r, g, b);
         let min = Math.min(r, g, b);
         let h, s, l = (max + min) / 2;
         if (max == min) {
            h = s = 0;
         } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
               case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
               case g:
                  h = (b - r) / d + 2;
                  break;
               case b:
                  h = (r - g) / d + 4;
                  break;
            }
            h /= 6;
         }
         h = parseInt((h * 360).toFixed(0));
         s = parseInt((s * 100).toFixed(0));
         l = parseInt((l * 100).toFixed(0));
         return a < 1 ? `hsla(${h} ${s}% ${l}% / ${a})` : `hsl(${h} ${s}% ${l}%)`;
      }
      hexObjToRgb(r, g, b, a = 1) {
         if (r == undefined || g == undefined || b == undefined) return undefined;
         r = parseInt(r, 16);
         g = parseInt(g, 16);
         b = parseInt(b, 16);
         a = parseFloat((parseInt(a, 16) / 255).toFixed(2));
         if (r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0 || a > 1) return undefined;
         return a < 1 ? `rgba(${r} ${g} ${b} / ${a})` : `rgb(${r} ${g} ${b})`;
      }
      rgbObjToHex(r, g, b, a = 1) {
         if (r == undefined || g == undefined || b == undefined || r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0 || a > 1) return undefined;
         a = Math.round(a * 255);
         let toHex = (value) => {
            let hex = value.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
         };
         return a < 255 ? `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}` : `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      }
      rgbObjToHsl(r, g, b, a = 1) {
         if (r == undefined || g == undefined || b == undefined || r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0 || a > 1) return undefined;
         r /= 255;
         g /= 255;
         b /= 255;
         let max = Math.max(r, g, b);
         let min = Math.min(r, g, b);
         let h, s, l = (max + min) / 2;
         if (max == min) {
            h = s = 0;
         } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
               case r:
                  h = (g - b) / d + (g < b ? 6 : 0);
                  break;
               case g:
                  h = (b - r) / d + 2;
                  break;
               case b:
                  h = (r - g) / d + 4;
                  break;
            }
            h /= 6;
         }
         h = parseInt((h * 360).toFixed(0));
         s = parseInt((s * 100).toFixed(0));
         l = parseInt((l * 100).toFixed(0));
         return a < 1 ? `hsla(${h} ${s}% ${l}% / ${a})` : `hsl(${h} ${s}% ${l}%)`;
      }
      hslObjToRgb(h, s, l, a = 1) {
         if (h == undefined || s == undefined || l == undefined || h > 360 || s > 100 || l > 100 || h < 0 || s < 0 || l < 0 || a > 1) return undefined;
         h = h / 360;
         s = s / 100;
         l = l / 100;
         let c = (1 - Math.abs(2 * l - 1)) * s;
         let x = c * (1 - Math.abs((h * 6) % 2 - 1));
         let m = l - c / 2;
         let r, g, b;
         switch (true) {
            case (h >= 0 && h < 1 / 6):
               r = c;
               g = x;
               b = 0;
               break;
            case (h >= 1 / 6 && h < 2 / 6):
               r = x;
               g = c;
               b = 0;
               break;
            case (h >= 2 / 6 && h < 3 / 6):
               r = 0;
               g = c;
               b = x;
               break;
            case (h >= 3 / 6 && h < 4 / 6):
               r = 0;
               g = x;
               b = c;
               break;
            case (h >= 4 / 6 && h < 5 / 6):
               r = x;
               g = 0;
               b = c;
               break;
            default:
               r = c;
               g = 0;
               b = x;
               break;
         }
         r = Math.round((r + m) * 255);
         g = Math.round((g + m) * 255);
         b = Math.round((b + m) * 255);
         return a < 1 ? `rgba(${r} ${g} ${b} / ${a})` : `rgb(${r} ${g} ${b})`;
      }
      hslObjToHex(h, s, l, a = 1) {
         if (h == undefined || s == undefined || l == undefined || h > 360 || s > 100 || l > 100 || h < 0 || s < 0 || l < 0 || a > 1) return undefined;
         h = h / 360;
         s = s / 100;
         l = l / 100;
         let c = (1 - Math.abs(2 * l - 1)) * s;
         let x = c * (1 - Math.abs((h * 6) % 2 - 1));
         let m = l - c / 2;
         let r, g, b;
         switch (true) {
            case (h >= 0 && h < 1 / 6):
               r = c;
               g = x;
               b = 0;
               break;
            case (h >= 1 / 6 && h < 2 / 6):
               r = x;
               g = c;
               b = 0;
               break;
            case (h >= 2 / 6 && h < 3 / 6):
               r = 0;
               g = c;
               b = x;
               break;
            case (h >= 3 / 6 && h < 4 / 6):
               r = 0;
               g = x;
               b = c;
               break;
            case (h >= 4 / 6 && h < 5 / 6):
               r = x;
               g = 0;
               b = c;
               break;
            default:
               r = c;
               g = 0;
               b = x;
               break;
         }
         r = Math.round((r + m) * 255);
         g = Math.round((g + m) * 255);
         b = Math.round((b + m) * 255);
         a = Math.round(a * 255);
         let toHex = (value) => {
            let hex = value.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
         };
         return a < 255 ? `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(a)}` : `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      }
      hexToHsl(hex) {
         let { r, g, b, a } = this.getHexObj(hex);
         return this.hexObjToHsl(r, g, b, a);
      }
      hexToRgb(hex) {
         let { r, g, b, a } = this.getHexObj(hex);
         return this.hexObjToRgb(r, g, b, a);
      }
      rgbToHex(rgb) {
         let { r, g, b, a } = this.getRgbObj(rgb);
         return this.rgbObjToHex(r, g, b, a);
      }
      rgbToHsl(rgb) {
         let { r, g, b, a } = this.getRgbObj(rgb);
         return this.rgbObjToHsl(r, g, b, a);
      }
      hslToRgb(hsl) {
         let { h, s, l, a } = this.getHslObj(hsl);
         return this.hslObjToRgb(h, s, l, a);
      }
      hslToHex(hsl) {
         let { h, s, l, a } = this.getHslObj(hsl);
         return this.hslObjToHex(h, s, l, a);
      }
      nameToHex(str) {
         return this.#colors[str.toLowerCase().replace(/\s+/g, '')];
      }
      nameToRgb(str) {
         let hex = this.#colors[str.toLowerCase().replace(/\s+/g, '')];
         if (!hex) return undefined;
         let { r, g, b, a } = this.getHexObj(hex);
         r = parseInt(r, 16);
         g = parseInt(g, 16);
         b = parseInt(b, 16);
         a = parseFloat((parseInt(a, 16) / 255).toFixed(2));
         return a < 1 ? `rgba(${r} ${g} ${b} / ${a})` : `rgb(${r} ${g} ${b})`;
      }
      nameToHsl(str) {
         let hex = this.#colors[str.toLowerCase().replace(/\s+/g, '')];
         if (!hex) return undefined;
         let hsl = this.hexToHsl(hex);
         let { h, s, l, a } = this.getHslObj(hsl);
         return a < 1 ? `hsla(${h} ${s}% ${l}% / ${a})` : `hsl(${h} ${s}% ${l}%)`;
      }
      toHex(str) {
         switch (true) {
            case !!this.#colors[str.toLowerCase().replace(/\s+/g, '')]:
               return this.nameToHex(str);
               break;
            case !!this.hexNormalize(str):
               let { r, g, b, a } = this.getHexObj(str);
               return a != 'ff' ? `#${r}${g}${b}${a}` : `#${r}${g}${b}`;
               break;
            case !!this.rgbNormalize(str):
               return this.rgbToHex(str);
               break;
            case !!this.hslNormalize(str):
               return this.hslToHex(str);
               break;
            default:
               return undefined;
         }
      }
      toRgb(str) {
         switch (true) {
            case !!this.#colors[str.toLowerCase().replace(/\s+/g, '')]:
               return this.nameToRgb(str);
               break;
            case !!this.hexNormalize(str):
               return this.hexToRgb(str);
               break;
            case !!this.rgbNormalize(str):
               let { r, g, b, a } = this.getRgbObj(str);
               return a < 1 ? `rgba(${r} ${g}${b} / ${a})` : `rgb(${r} ${g} ${b})`;
               break;
            case !!this.hslNormalize(str):
               return this.hslToRgb(str);
               break;
            default:
               return undefined;
         }
      }
      toHsl(str) {
         switch (true) {
            case !!this.#colors[str.toLowerCase().replace(/\s+/g, '')]:
               return this.nameToHsl(str);
               break;
            case !!this.hexNormalize(str):
               return this.hexToHsl(str);
               break;
            case !!this.rgbNormalize(str):
               return this.rgbToHsl(str);
               break;
            case !!this.hslNormalize(str):
               let { h, s, l, a } = this.getHslObj(str);
               return a < 1 ? `hsla(${h} ${s}% ${l}% / ${a})` : `hsl(${h} ${s}% ${l}%)`;
               break;
            default:
               return undefined;
         }
      }
      toHexObj(str) {
         let hex = this.toHex(str);
         if (!hex) return undefined;
         return this.getHexObj(hex)
      }
      toRgbObj(str) {
         let rgb = this.toRgb(str);
         if (!rgb) return undefined;
         return this.getRgbObj(rgb)
      }
      toHslObj(str) {
         let hsl = this.toHsl(str);
         if (!hsl) return undefined;
         return this.getHslObj(hsl)
      }
      test(str) {
         switch (true) {
            case !!this.#colors[str.toLowerCase().replace(/\s+/g, '')]:
               return true;
               break;
            case !!this.hexNormalize(str):
               return true;
               break;
            case !!this.rgbNormalize(str):
               return true;
               break;
            case !!this.hslNormalize(str):
               return true;
               break;
            default:
               return false;
         }
      }
   }
   class Validation {
      #color;
      constructor() {
         this.version = '1';
         this.#color = new Colors();
      }
      bool(val) {
         return typeof val == 'boolean';
      }
      string(val) {
         return typeof val == 'string';
      }

      sprout(val) {
         return this.bool(val);
      }
      color(val) {
         return typeof val == 'string' && this.#color.test(val);
      }
      surfaceColor(val) {
         return typeof val == 'string' && this.#color.test(val) || /^(primary|secondary|tertiary|quaternary)$/i.test(val);
      }
      root(val) {
         try {
            document.querySelector(val);
            return true
         } catch {
            return false
         }
      }
      prefix(val) {
         return /^[a-z]*$/i.test(val);
      }
      theme(val) {
         return /^(dark|light|auto)$/i.test(val);
      }
      contrast(val) {
         return (val == 'auto') || (typeof val == 'number' && val >= 0 && val <= 100);
      }
      colorScheme(val) {
         return /^(analogous|complementary|tetradic|compound|split-complementary|monochromatic|triadic|square)$/i.test(val);
      }
      consoleLog(val) {
         return this.bool(val);
      }
      hasPalette(val) {
         return this.bool(val);
      }
      hasSubPalette(val) {
         return this.bool(val);
      }
      reverseSubPalette(val) {
         return this.bool(val);
      }
      parts(val) {
         return Array.isArray(val) && val.every(i => typeof i == 'number' && i >= 0 && i <= 100);
      }
      customColors(val) {
         return typeof val == 'object' && !Array.isArray(val) && Object.values(val).every(i => this.#color.test(i)) && Object.keys(val).every(i => /^[a-z][a-z0-9]*$/i.test(i));
      }
      followMainTheme(val) {
         return this.bool(val);
      }

      log(obj) {
         let log = {};
         for (let i in obj) {
            switch (i) {
               case 'sprout':
                  log[i] = this.sprout(obj[i]);
                  break;
               case 'color':
                  log[i] = this.color(obj[i]);
                  break;
               case 'surfaceColor':
                  log[i] = this.surfaceColor(obj[i]);
                  break;
               case 'root':
                  log[i] = this.root(obj[i]);
                  break;
               case 'prefix':
                  log[i] = this.prefix(obj[i]);
                  break;
               case 'theme':
                  log[i] = this.theme(obj[i]);
                  break;
               case 'contrast':
                  log[i] = this.contrast(obj[i]);
                  break;
               case 'colorScheme':
                  log[i] = this.colorScheme(obj[i]);
                  break;
               case 'hasPalette':
                  log[i] = this.hasPalette(obj[i]);
                  break;
               case 'hasSubPalette':
                  log[i] = this.hasSubPalette(obj[i]);
                  break;
               case 'reverseSubPalette':
                  log[i] = this.reverseSubPalette(obj[i]);
                  break;
               case 'consoleLog':
                  log[i] = this.consoleLog(obj[i]);
                  break;
               case 'parts':
                  log[i] = this.parts(obj[i]);
                  break;
               case 'customColors':
                  log[i] = this.customColors(obj[i]);
                  break;
               case 'followMainTheme':
                  log[i] = this.followMainTheme(obj[i]);
                  break;
            }
         }
         return log;
      }
      all(obj) {
         let log = this.log(obj);
         return Object.values(log).every(i => i);
      }
   }
   class Mushroom {
      // private variable 
      #Colors;
      #Validation;
      #eventTarget;
      #clearConsole;
      #hasGrown;
      #configs;
      #roots;
      #PCS;

      // constructor
      constructor(configs) {
         this.version = "5.1";
         this.#Colors = new Colors();
         this.#Validation = new Validation();
         this.#eventTarget = new EventTarget();
         this.#clearConsole = false;
         this.#PCS = window.matchMedia("(prefers-color-scheme:dark)");
         this.#configs = {
            sprout: true,
            color: 'Royal Blue',
            surfaceColor: 'primary',
            root: ':root',
            prefix: '',
            theme: 'auto',
            contrast: 'auto',
            colorScheme: 'Analogous',
            hasPalette: true,
            hasSubPalette: false,
            followMainTheme: true,
            reverseSubPalette: false,
            parts: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            customColors: {},
         };
         this.#roots = {};
         this.#roots[this.#configs.root] = this.#configs;

         this.#setUp(configs);

         if (configs.clearConsole) {
            if (this.#Validation.sprout(configs.clearConsole)) {
               this.#clearConsole = configs.clearConsole;
            } else {
               this.#errorLib(10, configs.clearConsole);
            }
         }
         this.#PCS.onchange = () => {
            if (this.theme == 'auto') {
               this.#grow();
            }
         }
         this.#grow();
         this.#info(`Mushroom ${this.version}`);
      }

      // events
      set ongrow(callback) {
         this.#eventTarget.addEventListener('grow', callback);
         if (this.#hasGrown) this.#eventTarget.dispatchEvent(new Event("grow"));
      }
      get ongrow() {
         return undefined;
      }
      set onerror(callback) {
         this.#eventTarget.addEventListener('error', callback)
      }
      get onerror() {
         return undefined;
      }

      // setter & getter 
      set color(val) {
         this.setColor(val);
      }
      get color() {
         return this.#configs.color;
      }
      set surfaceColor(val) {
         this.setSurfaceColor(val);
      }
      get surfaceColor() {
         return this.#configs.surfaceColor;
      }
      set theme(val) {
         this.setTheme(val);
      }
      get theme() {
         return this.#configs.theme;
      }
      set colorScheme(val) {
         this.setColorScheme(val);
      }
      get colorScheme() {
         return this.#configs.colorScheme;
      }
      set hue(val) {
         this.setHue(val);
      }
      get hue() {
         return this.#Colors.toHslObj(this.#configs.color).h;
      }
      set saturation(val) {
         this.setSaturation(val);
      }
      get saturation() {
         return this.#Colors.toHslObj(this.#configs.color).s;
      }
      set lightness(val) {
         this.setLightness(val);
      }
      get lightness() {
         return this.#Colors.toHslObj(this.#configs.color).l;
      }
      set contrast(val) {
         this.setContrast(val);
      }
      get contrast() {
         return this.#configs.contrast;
      }
      set prefix(val) {
         this.setPrefix(val);
      }
      get prefix() {
         return this.#configs.prefix;
      }
      set root(val) {
         this.setRoot(val);
      }
      get root() {
         return this.#configs.root;
      }
      set parts(val) {
         this.setParts(val);
      }
      get parts() {
         return this.#configs.parts;
      }
      set sprout(val) {
         this.setSprout(val);
      }
      get sprout() {
         return this.#configs.sprout;
      }
      set palette(val) {
         this.setPalette(val);
      }
      get palette() {
         return this.getPalette();
      }
      set hasPalette(val) {
         this.setPalette(val);
      }
      get hasPalette() {
         return this.#configs.hasPalette;
      }
      set subPalette(val) {
         this.setSubPalette(val);
      }
      get subPalette() {
         return this.getSubPalette();
      }
      set hasSubPalette(val) {
         this.setSubPalette(val);
      }
      get hasSubPalette() {
         return this.#configs.hasSubPalette;
      }
      set reverseSubPalette(val) {
         this.setReverseSubPalette(val);
      }
      get reverseSubPalette() {
         return this.#configs.reverseSubPalette;
      }
      set customColors(val) {
         this.setCustomColors(val);
      }
      get customColors() {
         return this.#configs.customColors;
      }
      set darkmode(val) {
         this.setDarkmode(val);
      }
      get darkmode() {
         if (this.theme == 'auto') {
            return (this.#PCS.matches);
         } else {
            return (this.theme == 'dark') ? true : false;
         }
      }
      set followMainTheme(val) {
         this.setFollowMainTheme(val);
      }
      get followMainTheme() {
         return this.#configs.followMainTheme;
      }

      // property 
      setColor(val, root = this.#configs.root) {
         let valid = this.#Validation.color(val);
         if (valid) {
            this.#setting('color', val, root);
         } else {
            this.#errorLib(1, val);
         }
      }
      setSurfaceColor(val, root = this.#configs.root) {
         let valid = this.#Validation.surfaceColor(val);
         if (valid) {
            this.#setting('surfaceColor', val, root);
         } else {
            this.#errorLib(2, val);
         }
      }
      setTheme(val, root = this.#configs.root) {
         let valid = this.#Validation.theme(val);
         if (valid) {
            this.#setting('theme', val, root);
         } else {
            this.#errorLib(3, val);
         }
      }
      setColorScheme(val, root = this.#configs.root) {
         let valid = this.#Validation.colorScheme(val);
         if (valid) {
            this.#setting('colorScheme', val, root);
         } else {
            this.#errorLib(4, val);
         }
      }
      setHue(val, root = this.#configs.root) {
         let { s, l } = this.#Colors.toHslObj(this.#roots[root].color);
         let h = (val >= 0) ? (val % 360) : 360 - ((-val) % 360);
         let hsl = `hsl(${h}deg ${s}% ${l}%)`;
         let valid = this.#Validation.color(hsl);
         if (valid) {
            this.#setting('color', hsl, root);
         } else {
            this.#errorLib(5, val);
         }
      }
      setSaturation(val, root = this.#configs.root) {
         let { h, l } = this.#Colors.toHslObj(this.#roots[root].color);
         let hsl = `hsl(${h}deg ${val}% ${l}%)`;
         let valid = this.#Validation.color(hsl);
         if (valid) {
            this.#setting('color', hsl, root);
         } else {
            this.#errorLib(6, val);
         }
      }
      setLightness(val, root = this.#configs.root) {
         let { h, s } = this.#Colors.toHslObj(this.#roots[root].color);
         let hsl = `hsl(${h}deg ${s}% ${val}%)`;
         let valid = this.#Validation.color(hsl);
         if (valid) {
            this.#setting('color', hsl, root);
         } else {
            this.#errorLib(6, val);
         }
      }
      setContrast(val, root = this.#configs.root) {
         let valid = this.#Validation.contrast(val);
         if (valid) {
            this.#setting('contrast', val, root);
         } else {
            this.#errorLib(6, val);
         }
      }
      setPrefix(val, root = this.#configs.root) {
         let valid = this.#Validation.prefix(val);
         if (valid) {
            this.#setting('prefix', val, root);
         } else {
            this.#errorLib(7, val);
         }
      }
      setParts(val, root = this.#configs.root) {
         let valid = this.#Validation.parts(val);
         if (valid) {
            this.#setting('parts', val.sort(), root);
         } else {
            this.#errorLib(9, val);
         }
      }
      setSprout(val, root = this.#configs.root) {
         let valid = this.#Validation.sprout(val);
         if (valid) {
            this.#setting('sprout', val, root);
         } else {
            this.#errorLib(10, val);
         }
      }
      setPalette(val, root = this.#configs.root) {
         let valid = this.#Validation.hasPalette(val);
         if (valid) {
            this.#setting('hasPalette', val, root);
         } else {
            this.#errorLib(10, val);
         }
      }
      setSubPalette(val, root = this.#configs.root) {
         let valid = this.#Validation.hasSubPalette(val);
         if (valid) {
            this.#setting('hasSubPalette', val, root);
         } else {
            this.#errorLib(10, val);
         }
      }
      setReverseSubPalette(val, root = this.#configs.root) {
         let valid = this.#Validation.reverseSubPalette(val);
         if (valid) {
            this.#setting('reverseSubPalette', val, root);
         } else {
            this.#errorLib(10, val);
         }
      }
      setDarkmode(val, root = this.#configs.root) {
         let valid = this.#Validation.bool(val);
         if (valid) {
            this.#setting('theme', val ? 'dark' : 'light', root);
         } else {
            this.#errorLib(10, val);
         }
      }
      setFollowMainTheme(val, root = this.#configs.root) {
         let valid = this.#Validation.followMainTheme(val);
         if (valid) {
            if (root != this.#configs.root) {
               this.#setting('followMainTheme', val, root);
            } else if (root == this.#configs.root) {
               for (let i in this.#roots) {
                  if (this.#roots[i].followMainTheme == this.#configs.followMainTheme) this.#roots[i].followMainTheme = val;
                  this.#setting('followMainTheme', val, root);
               }
            }
         } else {
            this.#errorLib(10, val);
         }
      }
      setCustomColors(val, root = this.#configs.root) {
         let valid = this.#Validation.customColors(val);
         if (valid) {
            this.#setting('customColors', val, root);
         } else {
            this.#errorLib(11, val);
         }
      }
      addCustomColors(key, val, root = this.#configs.root) {
         let arg = {};
         arg[key] = val;
         let obj = Object.assign(this.#roots[root].customColors, arg);
         let valid = this.#Validation.customColors(obj);
         if (valid) {
            this.#setting('customColors', obj, root);
         } else {
            this.#errorLib(11, val);
         }
      }
      removeCustomColors(key, root = this.#configs.root) {
         delete this.#roots[root].customColors[key];
         this.#grow();
      }
      clearCustomColors(val, root = this.#configs.root) {
         this.#roots[root].customColors = {};
         this.#grow();
      }
      toggleTheme(root = this.#configs.root) {
         this.setTheme(this.#roots[root].theme == 'light' ? 'dark' : 'light', root)
         this.#grow();
      }
      getPalette(root = this.#configs.root) {
         return this.#roots[root].palette;
      }
      getSubPalette(root = this.#configs.root) {
         return this.#roots[root].palette;
      }
      randomColor(root = this.#configs.root) {
         let h = Math.round(Math.random() * 360);
         let s = Math.round(Math.random() * 100);
         let l = Math.round(Math.random() * 100);
         this.setColor(this.#Colors.hslObjToHex(h, s, l), root);
      }

      // root
      addRoot(val, opt) {
         if (Object.keys(this.#roots).includes(val)) {
            this.#errorLib(12, val);
         } else if (this.#Validation.root(val)) {
            this.#roots[val] = {};
            Object.assign(this.#roots[val], this.#configs);
            if (opt) {
               let log = this.#Validation.log(opt);
               for (let i in log) {
                  if (log[i]) {
                     this.#roots[val][i] = opt[i];
                  } else {
                     this.roots(val)[i] = opt[i];
                  }
               }
            }
            this.#grow();
         } else {
            this.#errorLib(8, val);
         }
      }
      removeRoot(val) {
         if (this.#configs.root !== val) {
            delete this.#roots[val]
         } else {
            this.#errorLib(13, val);
         }
      }
      renameRoot(root, val) {
         if (Object.keys(this.#roots).includes(root)) {
            if (!Object.keys(this.#roots).includes(val)) {
               if (this.#Validation.root(val)) {
                  let obj = this.#roots[root];
                  delete this.#roots[root]
                  this.#roots[val] = obj;
                  this.#roots[val].root = val;
               } else {
                  this.#errorLib(8, root);
               }
            } else {
               this.#errorLib(14, root);
            }
         } else {
            this.#errorLib(15, root);
         }
      }
      setRoot(val, root = this.#configs.root) {
         this.renameRoot(root, val);

      }
      roots(root) {
         console.log(this.#roots[root].palette)
         let r = new this.#Root(this.#roots[root]);
         r.onsuccess = () => {
            this.#roots[root] = r.configs;
            if (root != r.configs.root) {
               this.renameRoot(root, r.configs.root)
            }
            this.#grow();
         }
         r.onerror = (e) => {
            this.#errorLib(e.detail.key, e.detail.wrong)
         }
         return r;
      }
      getAllRoots() {
         return this.#roots;
      }

      // class
      #Root = class {
         // private variable 
         #Colors;
         #Validation;
         #eventTarget

         // constructor
         constructor(configs) {
            this.configs = configs;
            this.#Colors = new Colors();
            this.#Validation = new Validation();
            this.#eventTarget = new EventTarget();
         }

         // event 
         set onerror(callback) {
            this.#eventTarget.addEventListener('error', callback)
         }
         get onerror() {
            return undefined;
         }
         set onsuccess(callback) {
            this.#eventTarget.addEventListener('success', callback)
         }
         get onsuccess() {
            return undefined;
         }

         // getter & setter
         set color(val) {
            this.setColor(val);
         }
         get color() {
            return this.configs.color;
         }
         set surfaceColor(val) {
            this.setSurfaceColor(val);
         }
         get surfaceColor() {
            return this.configs.surfaceColor;
         }
         set theme(val) {
            this.setTheme(val);
         }
         get theme() {
            return this.configs.theme;
         }
         set colorScheme(val) {
            this.setColorScheme(val);
         }
         get colorScheme() {
            return this.configs.colorScheme;
         }
         set hue(val) {
            this.setHue(val);
         }
         get hue() {
            return this.#Colors.toHslObj(this.configs.color).h;
         }
         set saturation(val) {
            this.setSaturation(val);
         }
         get saturation() {
            return this.#Colors.toHslObj(this.configs.color).s;
         }
         set lightness(val) {
            this.setLightness(val);
         }
         get lightness() {
            return this.#Colors.toHslObj(this.configs.color).l;
         }
         set contrast(val) {
            this.setContrast(val);
         }
         get contrast() {
            return this.configs.contrast;
         }
         set prefix(val) {
            this.setPrefix(val);
         }
         get prefix() {
            return this.configs.prefix;
         }
         set root(val) {
            this.setRoot(val);
         }
         get root() {
            return this.configs.root;
         }
         set parts(val) {
            this.setParts(val);
         }
         get parts() {
            return this.configs.parts;
         }
         set sprout(val) {
            this.setSprout(val);
         }
         get sprout() {
            return this.configs.sprout;
         }
         set palette(val) {
            this.setPalette(val);
         }
         get palette() {
            return this.this.configs.palette;
         }
         set hasPalette(val) {
            this.setPalette(val);
         }
         get hasPalette() {
            return this.configs.hasPalette;
         }
         set subPalette(val) {
            this.setSubPalette(val);
         }
         get subPalette() {
            return this.configs.subPalette;
         }
         set hasSubPalette(val) {
            this.setSubPalette(val);
         }
         get hasSubPalette() {
            return this.configs.hasSubPalette;
         }
         set reverseSubPalette(val) {
            this.setReverseSubPalette(val);
         }
         get reverseSubPalette() {
            return this.configs.reverseSubPalette;
         }
         set customColors(val) {
            this.setCustomColors(val);
         }
         get customColors() {
            return this.configs.customColors;
         }
         set darkmode(val) {
            this.setDarkmode(val);
         }
         get darkmode() {
            if (this.theme == 'auto') {
               return (this.#PCS.matches);
            } else {
               return (this.theme == 'dark') ? true : false;
            }
         }

         // property 
         setColor(val) {
            let valid = this.#Validation.color(val);
            if (valid) {
               this.configs.color = val;
               this.#success()
            } else {
               this.#error(1, val)
            }
         }
         setSurfaceColor(val) {
            let valid = this.#Validation.surfaceColor(val);
            if (valid) {
               this.configs.surfaceColor = val;
               this.#success();
            } else {
               this.#error(2, val);
            }
         }
         setTheme(val) {
            let valid = this.#Validation.theme(val);
            if (valid) {
               this.configs.theme = val;
               this.#success();
            } else {
               this.#error(3, val);
            }
         }
         setColorScheme(val) {
            let valid = this.#Validation.colorScheme(val);
            if (valid) {
               this.configs.colorScheme = val;
               this.#success();
            } else {
               this.#error(4, val);
            }
         }
         setHue(val) {
            let { s, l } = this.#Colors.toHslObj(configs.color);
            let h = (val >= 0) ? (val % 360) : 360 - ((-val) % 360);
            let hsl = `hsl(${h}deg ${s}% ${l}%)`;
            let valid = this.#Validation.color(hsl);
            if (valid) {
               this.configs.color = hsl;
               this.#success();
            } else {
               this.#error(5, val);
            }
         }
         setSaturation(val) {
            let { h, l } = this.#Colors.toHslObj(configs.color);
            let hsl = `hsl(${h}deg ${val}% ${l}%)`;
            let valid = this.#Validation.color(hsl);
            if (valid) {
               this.configs.color = hsl;
               this.#success();
            } else {
               this.#error(6, val);
            }
         }
         setLightness(val) {
            let { h, s } = this.#Colors.toHslObj(configs.color);
            let hsl = `hsl(${h}deg ${s}% ${val}%)`;
            let valid = this.#Validation.color(hsl);
            if (valid) {
               this.configs.color = hsl;
               this.#success();
            } else {
               this.#error(6, val);
            }
         }
         setContrast(val) {
            let valid = this.#Validation.contrast(val);
            if (valid) {
               this.configs.contrast = val;
               this.#success();
            } else {
               this.#error(6, val);
            }
         }
         setPrefix(val) {
            let valid = this.#Validation.prefix(val);
            if (valid) {
               this.configs.prefix = val;
               this.#success();
            } else {
               this.#error(7, val);
            }
         }
         setRoot(val) {
            let valid = this.#Validation.root(val);
            if (valid) {
               this.configs.root = val;
               this.#success();
            } else {
               this.#error(8, val);
            }
         }
         setParts(val) {
            let valid = this.#Validation.parts(val);
            if (valid) {
               this.configs.parts = val;
               this.#success();
            } else {
               this.#error(9, val);
            }
         }
         setSprout(val) {
            let valid = this.#Validation.sprout(val);
            if (valid) {
               this.configs.sprout = val;
               this.#success();
            } else {
               this.#error(10, val);
            }
         }
         setPalette(val) {
            let valid = this.#Validation.hasPalette(val);
            if (valid) {
               this.configs.hasPalette = val;
               this.#success();
            } else {
               this.#error(10, val);
            }
         }
         setSubPalette(val) {
            let valid = this.#Validation.hasSubPalette(val);
            if (valid) {
               this.configs.hasSubPalette = val;
               this.#success();
            } else {
               this.#error(10, val);
            }
         }
         setReverseSubPalette(val) {
            let valid = this.#Validation.reverseSubPalette(val);
            if (valid) {
               this.configs.reverseSubPalette = val;
               this.#success();
            } else {
               this.#error(10, val);
            }
         }
         setDarkmode(val) {
            let valid = this.#Validation.bool(val);
            if (valid) {
               this.configs.theme = val ? 'dark' : 'light';
               this.#success();
            } else {
               this.#error(10, val);
            }
         }
         setCustomColors(val) {
            let valid = this.#Validation.customColors(val);
            if (valid) {
               this.configs.customColors = val;
               this.#success();
            } else {
               this.#error(11, val);
            }
         }
         addCustomColors(key, val) {
            let arg = {};
            arg[key] = val;
            let obj = Object.assign(this.#roots[root].customColors, arg);
            let valid = this.#Validation.customColors(obj);
            if (valid) {
               this.configs.customColors = obj;
               this.#success();
            } else {
               this.#error(11, val);
            }
         }
         removeCustomColors(key) {
            delete this.configs.customColors[key];
            this.#success();
         }
         clearCustomColors(val) {
            this.configs.customColors = {};
            this.#success();
         }
         toggleTheme() {
            this.configs.theme = this.configs.theme == 'light' ? 'dark' : 'light';
            this.#success();
         }

         // event handler 
         #success() {
            let event = new CustomEvent('success', {});
            this.#eventTarget.dispatchEvent(event);
         }
         #error(key, wrong) {
            let event = new CustomEvent('error', { detail: { key, wrong } });
            this.#eventTarget.dispatchEvent(event);
         }
      }

      // private property
      #setUp(configs) {
         if (configs) {
            let log = this.#Validation.log(configs);
            for (let i in log) {
               if (log[i]) {
                  this.#configs[i] = configs[i];
               } else {
                  this[i] = configs[i];
               }
            }
            this.#roots[this.#configs.root] = this.#configs;
         }
         if (configs && configs.customRoots) {
            for (let root in configs.customRoots) {
               if (this.#Validation.root(root)) {
                  this.#roots[root] = {};
                  Object.assign(this.#roots[root], this.#configs);
                  this.#roots[root].root = root
                  let log = this.#Validation.log(configs.customRoots[root]);
                  for (let i in log) {
                     if (log[i]) {
                        this.#roots[root][i] = configs.customRoots[root][i];
                     } else {
                        this.roots(root)[i] = configs.customRoots[root][i];
                     }
                  }
               }
            }
         }
      }
      #setting(key, val, root) {
         for (let i in this.#roots) {
            if (this.#roots[i].followMainTheme && this.#roots[i][key] == this.#configs[key] && this.#roots[i].root != this.#configs.root) {
               this.#roots[i][key] = val;
            }
         }

         if (root == this.#configs.root) this.#configs[key] = val;
         this.#roots[root][key] = val;
         this.#grow();
      }
      #info(title, message) {
         if (!this.#clearConsole) {
            if (message != undefined) {
               console.log(
                  `%c${title}%c\n %c${message}`,
                  `background: ${this.palette['primary']}; color: ${this.palette['on-primary']}; font-weight: 900; padding: 4px; border-radius: 8px`,
                  '',
                  `background: ${this.palette['primary-container']}; color: ${this.palette['on-primary-container']}; font-weight: 400; padding: 4px; border-radius: 8px; font-family: sreif; font-size: 13px;`
               )
            } else {
               console.log(
                  `%c${title}`,
                  `background: ${this.palette['primary']}; color: ${this.palette['on-primary']}; font-weight: 900; padding: 4px; border-radius: 8px`
               )
            }
         }
      }
      #error(message) {
         if (!this.#clearConsole) {
            if (this.palette == undefined) this.#grow();
            console.log(
               `%cMushroom Error:%c\n %c${message}`,
               `background: ${this.palette['error']}; color: ${this.palette['on-error']}; font-weight: 900; padding: 4px; border-radius: 8px`,
               '',
               `background: ${this.palette['error-container']}; color: ${this.palette['on-error-container']}; font-weight: 400; padding: 4px; border-radius: 8px; font-family: sreif; font-size: 13px;`
            )
         }
      }
      #errorLib(key, wrong) {
         let lib = {
            1: `Invalid input: "${wrong}". The value must be a valid color in HEX, RGB, HSL, a recognized color name, or one of the following: primary, secondary, tertiary, quaternary.`,
            2: `Invalid input: "${wrong}". The value must be one of the following: "primary", "secondary", "tertiary", "quaternary"`,
            3: `Invalid input: "${wrong}". The value must be one of the following: light, dark, or auto.`,
            4: `Invalid input: "${wrong}". The value must be one of the following: analogous, complementary, tetradic, compound, split-complementary, monochromatic, triadic, or square.`,
            5: `Invalid input: "${wrong}". The value must be a number.`,
            6: `Invalid input: "${wrong}". Input must be a number between 0 and 100:`,
            7: `Invalid input: "${wrong}". The value must start with a letter and contain only letters and numbers.`,
            8: `Invalid input: "${wrong}". The value must be a valid CSS selector, including tag names, IDs, classes, attributes, combinators, pseudo-classes, or pseudo-elements.`,
            9: `Invalid input: "${wrong}". The value must be an array of numbers, where each number is between 0 and 100.`,
            10: `Invalid input: "${wrong}". The value must be either "true" or "false".`,
            11: `Invalid input: "${wrong}". The value must be an object where all keys are alphanumeric strings, and all values must be valid colors.`,
            12: `Invalid input: "${wrong}". This value already exists as a root.`,
            13: `Operation not allowed: "${wrong}". The main root cannot be removed.`,
            14: `Invalid input: The name "${wrong}" is already assigned to a root.`,
            15: `Not found: No root exists with the name "${wrong}".`,
            16: `Operation not allowed: You cannot manually change the theme of root "${wrong}" because its "followMainTheme" property is set to true.`,
         }
         this.#error(lib[key]);
         let event = new CustomEvent('error', { detail: { key, wrong: lib[key] } });
         this.#eventTarget.dispatchEvent(event);
      }
      #getDarkmode(root = this.#configs.root) {
         if (this.theme == 'auto') {
            return (this.#PCS.matches);
         } else {
            return (this.#roots[root].theme == 'dark') ? true : false;
         }
      }
      #getTheme(root = this.#configs.root) {
         if (this.theme == 'auto') {
            return (this.#PCS.matches) ? 'dark' : 'light';
         } else {
            return this.#roots[root].theme;
         }
      }
      #accentHue(root = this.#configs.root) {
         switch (this.#roots[root].colorScheme.toLowerCase()) {
            case 'analogous':
               return [0, 30, -30];
               break;
            case 'complementary':
               return [0, 180];
               break;
            case 'tetradic':
               return [0, 60, 180, 240];
               break;
            case 'compound':
               return [0, 150, -150];
               break;
            case 'split-complementary':
               return [0, 30, 180, 210];
               break;
            case 'monochromatic':
               return [0];
               break;
            case 'triadic':
               return [0, 120, -120];
               break;
            case 'square':
               return [0, 90, -90, 180];
               break;
            default:
               return [0, 30, -30];
         }
      }
      #palette(root) {
         let { h, s } = this.#Colors.toHslObj(root.color);
         let l = root.contrast != 'auto' ? root.contrast : this.#Colors.toHslObj(root.color).l;
         let accentName = ['primary', 'secondary', 'tertiary', 'quaternary'];
         let ah = this.#accentHue(root.root);
         let hueArr = ah.map(i => i + h > 360 ? i + h - 360 : i + h);
         let sh, ss, sl;
         if (this.#Colors.test(root.surfaceColor)) {
            sh = this.#Colors.toHslObj(root.surfaceColor).h;
            ss = this.#Colors.toHslObj(root.surfaceColor).s;
            sl = root.contrast != 'auto' ? root.contrast : this.#Colors.toHslObj(root.surfaceColor).l;
         } else {
            ss = s;
            sl = l;
            switch (root.surfaceColor) {
               case 'primary':
                  sh = h;
                  break;
               case 'secondary':
                  if (hueArr.length > 1) sh = hueArr[1];
                  break;
               case 'tertiary':
                  if (hueArr.length > 2) sh = hueArr[2];
                  break;
               case 'quaternary':
                  if (hueArr.length > 3) sh = hueArr[3];
                  break;
               default:
                  sh = h;
            }
         }
         let mode = this.#getTheme(root.root).toLowerCase();
         let result = {};
         let data = {
            name: {
               accent: accentName.slice(0, ah.length),
               error: 'error',
               surface: 'surface',
               background: 'background',
               outline: 'outline',
               custom: []
            },
            hue: {
               accent: hueArr,
               error: 0,
               surface: sh,
               background: sh,
               outline: h,
               custom: []
            },
            saturation: {
               accent: s,
               error: 100,
               surface: ss / 3,
               background: ss / 3,
               outline: [s / 3, s / 2],
               custom: [],
            },
            lightness: {
               light: {
                  accent: [
                  [35, 100],
                  [80 + l / 10, 20 - l / 10]
               ],
                  accentLD: [
                  [45, 100],
                  [25, 100]
               ],
                  surface: [
                  [87 + sl / 10, 30 - sl / 10],
                  [85 + sl / 10, 30 - sl / 10],
                  [83 + sl / 10, 30 - sl / 10],
                  [80 + sl / 10, 30 - sl / 10],
                  [78 + sl / 10, 30 - sl / 10]
               ],
                  background: [90 + sl / 10, 20 - sl / 10],
                  outline: [60, 80],
                  inverse: [70, 10],
                  inverseSurface: [15 + sl / 10, 80 - sl / 10]
               },
               dark: {
                  accent: [
                  [70, 10],
                  [20 - l / 10, 70 + l / 10]
               ],
                  accentLD: [
                  [80, 10],
                  [60, 10]
               ],
                  surface: [
                  [15 - sl / 10, 65 + sl / 10],
                  [17 - sl / 10, 65 + sl / 10],
                  [19 - sl / 10, 65 + sl / 10],
                  [21 - sl / 10, 65 + sl / 10],
                  [30 - sl / 10, 65 + sl / 10]
               ],
                  background: [10 - sl / 10, 70 + sl / 10],
                  outline: [40, 20],
                  inverse: [35, 100],
                  inverseSurface: [85 - sl / 10, 25 + sl / 10]
               },
            },
            alpha: {
               accent: 1,
               error: 1,
               surface: 1,
               background: 1,
               outline: 1,
               inverse: 1,
               custom: []
            },
            flag: {
               a: ['', 'on-'],
               b: ['', '-container'],
               c: ['', '-container-low', '-container', '-container-high', '-variant'],
               d: ['', '-variant'],
               e: 'inverse-',
               f: ['light-', 'dark-']
            }
         };
         for (let i in data.name.accent) {
            for (let j in data.flag.b) {
               for (let k in data.flag.a) {
                  result[data.flag.a[k] + data.name.accent[i] + data.flag.b[j]] = this.#Colors.hslObjToHex(data.hue.accent[i], data.saturation.accent, data.lightness[mode].accent[j][k], data.alpha.accent);
               }
            }
            for (let j in data.flag.f) {
               for (let k in data.flag.a) {
                  result[data.flag.a[k] + data.flag.f[j] + data.name.accent[i]] = this.#Colors.hslObjToHex(data.hue.accent[i], data.saturation.accent, data.lightness[mode].accentLD[j][k], data.alpha.accent);
               }
            }
         }
         for (let i in data.flag.b) {
            for (let j in data.flag.a) {
               result[data.flag.a[j] + data.name.error + data.flag.b[i]] = this.#Colors.hslObjToHex(data.hue.error, data.saturation.error, data.lightness[mode].accent[i][j], data.alpha.error);
            }
         }
         for (let j in data.flag.f) {
            for (let k in data.flag.a) {
               result[data.flag.a[k] + data.flag.f[j] + data.name.error] = this.#Colors.hslObjToHex(data.hue.error, data.saturation.error, data.lightness[mode].accentLD[j][k], data.alpha.error);
            }
         }
         for (let i in data.name.accent) {
            for (let j in data.flag.a) {
               result[data.flag.a[j] + data.flag.e + data.name.accent[i]] = this.#Colors.hslObjToHex(data.hue.accent[i], data.saturation.accent, data.lightness[mode].inverse[j], data.alpha.accent);
            }
         }
         for (let i in data.flag.a) {
            result[data.flag.a[i] + data.flag.e + data.name.error] = this.#Colors.hslObjToHex(data.hue.error, data.saturation.error, data.lightness[mode].inverse[i], data.alpha.error);
         }
         for (let j in data.flag.a) {
            result[data.flag.a[j] + data.flag.e + data.name.surface] = this.#Colors.hslObjToHex(data.hue.surface, data.saturation.surface, data.lightness[mode].inverseSurface[j], data.alpha.surface);
         }
         for (let i in data.flag.a) {
            result[data.flag.a[i] + data.name.background] = this.#Colors.hslObjToHex(data.hue.background, data.saturation.background, data.lightness[mode].background[i], data.alpha.background);
         }
         for (let i in data.flag.c) {
            for (let j in data.flag.a) {
               result[data.flag.a[j] + data.name.surface + data.flag.c[i]] = this.#Colors.hslObjToHex(data.hue.surface, data.saturation.surface, data.lightness[mode].surface[i][j], data.alpha.surface);
            }
         }
         for (let i in data.flag.d) {
            result[data.name.outline + data.flag.d[i]] = this.#Colors.hslObjToHex(data.hue.outline, data.saturation.outline[i], data.lightness[mode].outline[i], data.alpha.outline);
         }
         for (let i in root.customColors) {
            let limit = Object.keys(result);
            let allowed = ['primary', 'secondary', 'tertiary', 'quaternary', 'error'];
            if (limit.includes(i) == false || allowed.includes(i)) {
               data.name.custom.push(i);
               data.hue.custom.push(this.#Colors.toHslObj(root.customColors[i]).h);
               data.saturation.custom.push(this.#Colors.toHslObj(root.customColors[i]).s);
               data.alpha.custom.push(this.#Colors.toHslObj(root.customColors[i]).a);
            } else {
               if (root == this) {
                  // error
               } else {
                  // error for custom root
               }
            }
         }
         for (let i in data.name.custom) {
            for (let j in data.flag.b) {
               for (let k in data.flag.a) {
                  result[data.flag.a[k] + data.name.custom[i] + data.flag.b[j]] = this.#Colors.hslObjToHex(data.hue.custom[i], data.saturation.custom[i], data.lightness[mode].accent[j][k], data.alpha.custom[i]);
               }
            }
            for (let j in data.flag.f) {
               for (let k in data.flag.a) {
                  result[data.flag.a[k] + data.flag.f[j] + data.name.custom[i]] = this.#Colors.hslObjToHex(data.hue.custom[i], data.saturation.custom, data.lightness[mode].accentLD[j][k], data.alpha.custom);
               }
            }
         }
         for (let i in data.name.custom) {
            for (let j in data.flag.a) {
               result[data.flag.a[j] + data.flag.e + data.name.custom[i]] = this.#Colors.hslObjToHex(data.hue.custom[i], data.saturation.custom[i], data.lightness[mode].inverse[j], data.alpha.custom[i]);
            }
         }
         return result;
      }
      #subPalette(root) {
         let { h, s } = this.#Colors.toHslObj(root.color);
         let accentName = ['primary', 'secondary', 'tertiary', 'quaternary'];
         let ah = this.#accentHue(root.root);
         let hueArr = ah.map(i => i + h > 360 ? i + h - 360 : i + h);
         let sh, ss
         if (this.#Colors.test(root.surfaceColor)) {
            sh = this.#Colors.toHslObj(root.surfaceColor).h;
            ss = this.#Colors.toHslObj(root.surfaceColor).s;
         } else {
            ss = s;
            switch (root.surfaceColor) {
               case 'primary':
                  sh = h;
                  break;
               case 'secondary':
                  if (hueArr.length > 1) sh = hueArr[1];
                  break;
               case 'tertiary':
                  if (hueArr.length > 2) sh = hueArr[2];
                  break;
               case 'quaternary':
                  if (hueArr.length > 3) sh = hueArr[3];
                  break;
               default:
                  sh = h;
            }
         }
         let mode = this.#getTheme(root.root).toLowerCase();
         let result = {};
         let data = {
            name: {
               accent: accentName.slice(0, ah.length),
               error: 'error',
               custom: [],
               neutral: ['neutral', 'neutral-variant']
            },
            hue: {
               accent: hueArr,
               error: 0,
               custom: [],
               neutral: sh
            },
            saturation: {
               accent: s,
               error: 100,
               custom: [],
               neutral: [ss / 4, ss / 2]
            },
            alpha: {
               accent: 1,
               error: 1,
               custom: [],
               neutral: 1
            }
         };
         for (let i in root.customColors) {
            data.name.custom.push(i);
            data.hue.custom.push(this.#Colors.toHslObj(root.customColors[i]).h);
            data.saturation.custom.push(this.#Colors.toHslObj(root.customColors[i]).s);
            data.alpha.custom.push(this.#Colors.toHslObj(root.customColors[i]).a);
         }
         if (!root.reverseSubPalette || !mode) {
            for (let i in data.name.accent) {
               for (let j in root.parts) {
                  result[data.name.accent[i] + '-' + root.parts[j]] = this.#Colors.hslObjToHex(data.hue.accent[i], data.saturation.accent, root.parts[j], data.alpha.accent);
               }
            }
            for (let i in root.parts) {
               result[data.name.error + '-' + root.parts[i]] = this.#Colors.hslObjToHex(data.hue.error, data.saturation.error, root.parts[i], data.alpha.error);
            }
            for (let i in data.name.custom) {
               for (let j in root.parts) {
                  result[data.name.custom[i] + '-' + root.parts[j]] = this.#Colors.hslObjToHex(data.hue.custom[i], data.saturation.custom[i], root.parts[j], data.alpha.custom[i]);
               }
            }
            for (let i in data.name.neutral) {
               for (let j in root.parts) {
                  result[data.name.neutral[i] + '-' + root.parts[j]] = this.#Colors.hslObjToHex(data.hue.neutral, data.saturation.neutral[i], root.parts[j], data.alpha.neutral);
               }
            }
         } else if (mode) {
            for (let i in data.name.accent) {
               for (let j in root.parts) {
                  result[data.name.accent[i] + '-' + root.parts[j]] = this.#Colors.hslObjToHex(data.hue.accent[i], data.saturation.accent, root.parts[root.parts.length - 1] - root.parts[j], data.alpha.accent[i]);
               }
            }
            for (let i in root.parts) {
               result[data.name.error + '-' + root.parts[i]] = this.#Colors.hslObjToHex(data.hue.error, data.saturation.error, root.parts[root.parts.length - 1] - root.parts[i], data.alpha.error);
            }
            for (let i in data.name.custom) {
               for (let j in root.parts) {
                  result[data.name.custom[i] + '-' + root.parts[j]] = this.#Colors.hslObjToHex(data.hue.custom[i], data.saturation.custom[i], root.parts[root.parts.length - 1] - root.parts[j], data.alpha.custom[i]);
               }
            }
            for (let i in data.name.neutral) {
               for (let j in root.parts) {
                  result[data.name.neutral[i] + '-' + root.parts[j]] = this.#Colors.hslObjToHex(data.hue.neutral, data.saturation.neutral[i], root.parts[root.parts.length - 1] - root.parts[j], data.alpha.neutral);
               }
            }
         }
         return result;
      }
      #code(obj, root) {
         let keys = Object.keys(obj);
         let values = Object.values(obj);
         let code = `\n${root.root} {\n`;
         let prefix = (root.prefix == '') ? '' : root.prefix + '-';
         for (let i in keys) {
            code += `   --${prefix}${keys[i]}: ${values[i]};\n`;
         }
         code += '}';
         return code;
      }
      #sprout() {
         let CSS = document.querySelector('#MUSHROOM');
         if (!CSS) {
            CSS = document.createElement('style');
            CSS.id = 'MUSHROOM';
            let head = document.querySelector('head');
            head.appendChild(CSS);
         }
         let code = `/**** Mushroom v${this.version} ****/`;
         for (let i in arguments) {
            code += '\n' + arguments[i];
         }
         CSS.innerHTML = code;
         return code;
      }
      #grow() {
         let code = '';
         for (let root in this.#roots) {
            this.#roots[root].palette = this.#palette(this.#roots[root]);
            this.#roots[root].subPalette = this.#subPalette(this.#roots[root]);
         }
         for (let root in this.#roots) {
            code += this.#code(this.#roots[root].palette, this.#roots[root]);
            code += this.#code(this.#roots[root].subPalette, this.#roots[root]);
         }
         for (var root in this.#roots) {
            if (this.#roots[root].sprout && code != '') {
               this.#sprout(code);
            }
         }
         this.code = code;
         this.#hasGrown = true;
         let event = new CustomEvent('grow', {});
         this.#eventTarget.dispatchEvent(event);
      }
   }
   window.Mushroom = Mushroom;
})();