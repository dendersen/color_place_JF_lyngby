colorsID = [
    2782,20217,20208, 2951,20167,20046,20047, 2024,
    1117, 1177, 2489, 1259,12179,11175,12120,12083,
    1349,10235, 8054,12291,10001,10428, 1392, 1017,
    1725, 8583,  288,10385,10683,10961,11173, 1276,
    8222, 8493, 8575, 8494, 8469, 8252, 8302, 8596,
    7386, 7685, 7629, 7613, 7686, 7543, 7628, 8281,
    6383, 6384, 6084, 5180, 5489, 6350, 7163, 7555,
    5452, 4894, 4619, 5455, 5030, 5504, 5503, 5200,
    4468, 4223, 4947, 4744, 4477, 4638, 4618, 4017,
    9915, 1269, 9913,20145, 3377,20218,20186, 2588,
    1391, 1973, 1032, 9938, 1434, 1462, 1877, 8470,
    12077,12078, 1378,10249,10429,  553,10341, 1928,
    552,12182,10342, 1145, 1352,  394,10679, 1024,
    1931, 1876,12076,12181,11130, 1233,12075,10678,
    1875, 1140,12180, 1929, 1623,12290, 1359, 1519,
    7236, 9918, 1624, 1622, 1001, 1453,  486, 1376
];//collomn major order

colorsIDstr = [
    "02782","20217","20208","02951","20167","20046","20047","02024",
    "01117","01177","02489","01259","12179","11175","12120","12083",
    "01349","10235","08054","12291","10001","10428","01392","01017",
    "01725","08583","00288","10385","10683","10961","11173","01276",
    "08222","08493","08575","08494","08469","08252","08302","08596",
    "07386","07685","07629","07613","07686","07543","07628","08281",
    "06383","06384","06084","05180","05489","06350","07163","07555",
    "05452","04894","04619","05455","05030","05504","05503","05200",
    "04468","04223","04947","04744","04477","04638","04618","04017",
    "09915","01269","09913","20145","03377","20218","20186","02588",
    "01391","01973","01032","09938","01434","01462","01877","08470",
    "12077","12078","01378","10249","10429","00553","10341","01928",
    "00552","12182","10342","01145","01352","00394","10679","01024",
    "01931","01876","12076","12181","11130","01233","12075","10678",
    "01875","01140","12180","01929","01623","12290","01359","01519",
    "07236","09918","01624","01622","01001","01453","00486","01376"
];//collomn major order

colorsName = [
    "Deco Pink","Muted Coral","Poetry Red","Sophisticated Red","Welcoming Red","Savanna Sunset","Blushing Peach","Senses",
    "Peach Sky","Nobile","Bella","Rusty","Embrace","adventure","Desert Pink","Devine",
    "Light","Sommersol / Sommarsol","Sunny Spot","Soft Brown","Dijon Yellow","Masala","Gul Antikk / Gul Antik","Keisergul",
    "Fresh Pasta","Earthy Yellow","Mexico","Belgian Brown","Cashmere","Raw Canvas","Humble Yellow","Soft",
    "Krydderurt / Kryddgrönt","Green Tea","Natural Green","Organic Green","Green Leaf","Green Harmony","Laurbær / Lagerträd","Sunny Green",
    "Pistachio","Subtle Green","Antique green","Northern Mystic","Mindful Green","Dusty Green","Treasure","pale Linden",
    "Imagine","Wish","Sjøsmaragd / Sjösmaragd","Oslo","Free Spirit","Soft Teal","Minty Breeze","Soft Mint",
    "Nordic Breeze","Ocean Air","Denim Blå","Industrial Blue","St. Pauls Blue","Coastal Blue","Natural Blue","Dusty Blue",
    "Alladin","Sama","True Blue","Sophisticated Blue","Deco Blue","Byge / Dunkelgrå","Kveldshimmel","Pilasterblå",
    "Morgendis","Demring / Grydning","Matrix / Lammull","Wisdom","Slate Lavender","Healing Lavender","LavenderTouch","Myk / Mjuk",
    "Lys Antikkgrå / Lys Klidt Grå","Antikkgrå / Antikgrå","Grå Harmoni","Dempet Sort / Naturligt Svart","Elegant","Grå Skifer / Grå Skiffer","Valmuefrø / Vallmofrö","Smooth White",
    "Sheer Grey","Comfort Grey","Kontur","Sober","Diskret","Ascott","Kalk","Sommersne / Sommarsnö",
    "Tudor","Gentle Whisper","Kalkgrå","Band Stone","Form","Varmgrå","Washed Linen","Tidløs / Tidlös",
    "Kokos","Hvit Te / Vitt Te","Modern Beige","Soft Comfort","Shade","Mohair","soothing Beige","Space",
    "Sans","Sand","Present","Muskatnøtt / Muskotnöt","Marrakesh","Antwerp Beige","Macchiato","V anilje / Vanilj",
    "Chi","Klassisk Hvit / Klassisk Vit","Letthet / Lätthet","Refleksjon / Reflektion","Egghvit / Eggvit","Bomull","Silke","Frosrøyk / Froströk"
]//collomn major order

colorWidth = 16;
colorHeight = 8;

function updateColor() {
    color = document.getElementById("colorPicker").value;
    spot = -1
    for (let i = 0; i < colorsID.length; i++) {
        if(colorsID[i] == color) {
            spot = i;
            setColor(spot);
            return
        }
    }
    for (let i = 0; i < colorsName.length; i++) {
        current = colorsName[i].split(" / ");
        for (let j = 0; j < current.length; j++) {
            if(current[j].toLowerCase() == color.toLowerCase()) {
                spot = i;
                setColor(spot);
                return
            }
        }
    }
    setColor(-1);
}

function colorReset(){
    for (let col = 0; col < colorHeight; col++) {
        for (let row = 0; row < colorWidth; row++) {
            cell = document.getElementById("colorCell_" + row + "_" + col);
            cell.style.border = "3px solid black";
            document.getElementById("colorCell_" + row + "_" + col).style.color = "black";
        }
    }
    document.getElementById("spot").innerHTML = "location: A-";
    document.getElementById("Name").innerHTML = "name: No Color Picked";
    document.getElementById("ID").innerHTML = "ID: No Color Picked";
}

function setColor(spot) {
    colorReset();
    if(spot == -1) {
        document.getElementById("Name").innerHTML = "name: Unknown Color";
        document.getElementById("ID").innerHTML = "ID: Unknown Color";
        return;
    }
    row = Math.floor(spot / colorHeight)
    col = spot % colorHeight

    console.log("Setting color at row " + row + " col " + col + " spot A" + (spot + 1));

    document.getElementById("spot").innerHTML = "location: A" + (spot + 1);
    document.getElementById("Name").innerHTML = "name: " + colorsName[spot];
    document.getElementById("ID").innerHTML = "ID: " + colorsIDstr[spot];
    document.getElementById("colorCell_" + row + "_" + col).style.border = "3px solid #ff0000ff";
    document.getElementById("colorCell_" + row + "_" + col).style.color = "#ff0000ff";
}

function init(){
    table = document.getElementById("colorTable");
    for (let col = 0; col < colorHeight; col++) {
        collumn = document.createElement("div");
        collumn.id = "colorColumn_" + col;
        for (let row = 0; row < colorWidth; row++) {
            cell = document.createElement("div");
            cell.id = "colorCell_" + row + "_" + col;
            cell.className = "colorCell";
            cell.innerHTML = "█"
            collumn.appendChild(cell);
        }
        collumn.innerHTML += "<br>";
        table.appendChild(collumn);
    }
    autoCompleteList = document.getElementById("colors");
    for(let i = 0; i < colorsID.length; i++) {
        option = document.createElement("option");
        option.value = colorsID[i];
        autoCompleteList.appendChild(option);
    }
    for(let i = 0; i < colorsName.length; i++) {
        current = colorsName[i].split(" / ");
        for (let j = 0; j < current.length; j++) {
            option = document.createElement("option");
            option.value = current[j];
            autoCompleteList.appendChild(option);
        }
    }
    for(let i = 0; i < colorsIDstr.length; i++) {
        if(colorsIDstr[i] !== colorsID[i].toString()){
            option = document.createElement("option");
            option.value = colorsIDstr[i];
            autoCompleteList.appendChild(option);
        }
    }
}

init();