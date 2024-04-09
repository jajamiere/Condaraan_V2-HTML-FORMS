document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll(".drop-menu-item:not(.dynamic-dropdown), .submenu-item");
    dropdownItems.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const selectedItem = item.textContent.trim();
            document.querySelector(".dropdown-toggle > span").textContent = selectedItem;
        });
    });

    const placeOrderButton = document.querySelector("input[type='submit']");
    placeOrderButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        const selectedMenuItem = document.querySelector(".dropdown-toggle > span").textContent.trim();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = document.getElementById("age").value.trim();
        
        if (selectedMenuItem === "Menu") {
            alert("Please select an item from the menu.");
        } else if (name === "" || email === "" || age === "") {
            alert("Please fill in all the required fields.");
        } else {
            alert("Your order has been placed: " + selectedMenuItem);
        }
    });

    const dropdownToggle = document.querySelector(".dropdown-toggle");
    dropdownToggle.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        const dropdownMenu = document.querySelector("#dynamic-dropdown > .dynamic-dropdown-menu");
        dropdownMenu.classList.toggle("open");
        dropdownToggle.classList.toggle("open");
    });

    const submenuToggles = document.querySelectorAll(".submenu-toggle");
    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault();
            const submenu = toggle.nextElementSibling;
            submenu.classList.toggle("open");
        });
    });

    const cancelButton = document.querySelector("input[type='reset']");
    cancelButton.addEventListener("click", () => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.querySelector(".dropdown-toggle > span").textContent = "Menu";
    });
});
