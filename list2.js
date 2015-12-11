function showSubMenu(li){
  var show = li.getElementsByTagName("ul")[0];
  show.style.display = "block";
  console.log("show");
}

function hideSubMenu(li){
  var show = li.getElementsByTagName("ul")[0];
  show.style.display = "none";
  console.log("hide");
}
