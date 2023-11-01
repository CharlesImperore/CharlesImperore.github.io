function showDetails(details) {
    const detailsElement = document.getElementById('details');
    detailsElement.textContent = details;
}

function hideDetails() {
    const detailsElement = document.getElementById('details');
    detailsElement.textContent = 'Hover over an element to see details here.';
}


$(document).ready( function() {
    $('#summary').hover( function() {
        $('#detail').toggle();
    });
});