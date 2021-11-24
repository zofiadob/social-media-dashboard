function changeMode(checkbox){
    const body = document.getElementById("mode-change");
    checkbox.checked ? body.className = "dark-theme" : body.className = "light-theme";
}