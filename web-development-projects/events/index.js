
document.querySelector(".list-group").addEventListener("click", function(e) {
    e.stopPropagation();
    var listElement = e.target.parentNode.parentNode;
    if (listElement.getAttribute("class") === "list-group-item") {
        var listGroup = listElement.parentNode;
        listGroup.removeChild(listElement);
    }
})