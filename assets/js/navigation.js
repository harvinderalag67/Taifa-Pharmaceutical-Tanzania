/* ==========================================================
   TAIFA PHARMACEUTICAL TANZANIA LTD.
   Navigation

   Automatically identifies and highlights the current page.
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-menu a");

    if (!navLinks.length) {
        return;
    }

    /*
     * Get the current page filename.
     *
     * Examples:
     * index.html
     * about.html
     * manufacturing.html
     */
    let currentPage = window.location.pathname.split("/").pop();

    /*
     * If the site is opened at the root URL, treat it as Home.
     */
    if (!currentPage || currentPage === "/") {
        currentPage = "index.html";
    }

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (!linkPage || linkPage.startsWith("#")) {
            return;
        }

        /*
         * Remove any query string or hash from the link.
         */
        const cleanLinkPage = linkPage.split("?")[0].split("#")[0];

        const isChairmanMessage =
            currentPage === "chairman-message.html" &&
            cleanLinkPage === "about.html";

        if (cleanLinkPage === currentPage || isChairmanMessage) {

            link.classList.add("active");

            link.setAttribute("aria-current", "page");

        }

    });

});