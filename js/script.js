const swup = new Swup();

function navBarLinkClicked(element) {
    var navbar = document.getElementById("navbar");
    for (var child of navbar.children) {
        child.className = "";
    }
    element.className = "current-link";
}