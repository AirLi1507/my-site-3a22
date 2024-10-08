function page(id) {
    document.querySelectorAll('.page').forEach(Element => {
        Element.style = 'display: none;'
    });
    document.getElementById(id).style = 'display: flex;'
}