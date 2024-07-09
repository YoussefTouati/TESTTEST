document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produit ajouté au panier!');
        });
    });

    // Placeholder for cart and order tracking functionality
    document.querySelector('nav ul li a[href="#"]').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Fonctionnalité à venir!');
    });
});
