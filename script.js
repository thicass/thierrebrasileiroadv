function openEmail() {
    window.open('mailto:thierrebrasileiro.adv@gmail.com', '_blank');
}

function openWhatsApp() {
    const number = '5574991894166'; // Número sem formatação
    window.open(`https://wa.me/${number}`, '_blank');
}

function openInstagram() {
    window.open('https://instagram.com/thierreadv', '_blank');
}

// Adiciona efeitos de animação quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        card.style.transition = 'all 0.8s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 100);
});