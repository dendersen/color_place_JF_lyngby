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

colorsName = [
    //TODO
]

colorWidth = 16;
colorHeight = 16;

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
        if(colorsName[i] == color) {
            spot = i;
            setColor(spot);
            return
        }
    }
}

function colorReset(){
    for (let col = 0; col < colorHeight; col++) {
        for (let row = 0; row < colorWidth; row++) {
            cell = document.getElementById("colorCell_" + row + "_" + col);
            cell.style.border = "3px solid black";
        }
    }
    document.getElementById("spot").innerHTML = "A-";

}

function setColor(spot) {
    colorReset();
    if(spot == -1) {
        return;
    }
    row = Math.floor(spot / colorHeight)
    col = spot % colorWidth

    document.getElementById("spot").innerHTML = "A" + (spot + 1);

    document.getElementById("colorCell_" + row + "_" + col).style.border = "3px solid #ff0000ff";
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
}

init();