
// ////////////////////////// Pagr next and Previous script start //////////////////////////////////////////

function showPage(pageNumber) {
    // Sab pages hide kar do
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    // Sirf current page dikhana hai
    document.getElementById(`page${pageNumber}`).classList.add("active");
}

// ////////////////////////// Pagr next and Previous script start //////////////////////////////////////////
