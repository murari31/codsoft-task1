// Open and close the side menu
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Tab switching functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove active class from all tab links and tab contents
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add active class to the clicked tab link and corresponding tab content
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Handle the form submission (sending form data via AJAX)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const name = form.querySelector('input[name="Name"]').value;
    const email = form.querySelector('input[name="Email"]').value;
    const message = form.querySelector('textarea[name="Message"]').value;

    if (!name || !email || !message) {
        alert('Please fill in all the fields.');
        return;
    }

    // Simulating a successful form submission with an alert
    // Here you would normally send the form data to the server (via Fetch API, XMLHttpRequest, or form action)
    alert('Your message has been sent successfully!');

    // Optionally, reset the form after submission
    form.reset();
});
