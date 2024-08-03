//function for find pairs on card
export function handleActiveCards(activeCards) {
    const activeNumbers = Array.from(activeCards).map(card =>
        Number(card.querySelector('.card__number').textContent)
    );

    if (activeNumbers[0] === activeNumbers[1]) {
        activeCards.forEach(card => {
            card.classList.remove('card-active');
            card.classList.add('card-done');
        });
        return { open: true, success: true };
    } else {
        activeCards.forEach(card => {
            card.classList.add('card-wrong');
        });

        setTimeout(() => {
            activeCards.forEach(card => {
                card.classList.remove('card-active', 'card-wrong');
            });
        }, 500);

        return { open: false, success: false };
    }
}
