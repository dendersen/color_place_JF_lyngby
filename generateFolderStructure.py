import os
import urllib.request as req

colorIDstr = open("manage.js", "r").read()
colorIDstr = colorIDstr.split("colorsIDstr = [")[1].split("]")[0]
colorIDs = colorIDstr.replace("\"", "").split(",")
if(len(colorIDs) != 8 * 16):
  print("Error: Expected 128 color IDs, got", len(colorIDs))
  exit(1)

for color in colorIDs:
  folderName = "./color_" + color
  try:
    os.makedirs(folderName)
  except FileExistsError:
    continue

colorRGBs = [
  "#DBC4B7","#BB7D69","#9B6156","#7B5953","#A06C5E","#AF8A76","#C4A591","#BFA795",#collumn: 1; last color ID 2024
  "#EAD0B1","#E8C099","#D9926D","#A57252","#B58D6F","#A38269","#BF9F86","#D2BEA9",#collumn: 2; last color ID 12083
  "#F3E5C0","#E9CE8D","#EFCB6B","#89755F","#A98259","#C79F6E","#D4B58B","#EDCDA1",#collumn: 3; last color ID 1017
]

for color,colorRGB in zip(colorIDs, colorRGBs):
  folderName = "./color_" + color
  with open(os.path.join(folderName, "color.txt"), "w") as f:
    f.write(f"#{colorRGB}\n")