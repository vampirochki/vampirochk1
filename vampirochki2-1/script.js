document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality for Login button
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeLoginModal = loginModal.querySelector('.close-btn');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    closeLoginModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Modal functionality for More details
    const detailsButtons = document.querySelectorAll('.details-btn');
    const recipeModal = document.getElementById('recipe-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalIngredients = document.getElementById('modal-ingredients');
    const modalRecipe = document.getElementById('modal-recipe');
    const closeRecipeModal = recipeModal.querySelector('.close-btn');

    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalTitle.textContent = button.getAttribute('data-title');
            modalIngredients.textContent = button.getAttribute('data-ingredients');
            modalRecipe.textContent = button.getAttribute('data-recipe');
            recipeModal.style.display = 'flex';
        });
    });

    closeRecipeModal.addEventListener('click', () => {
        recipeModal.style.display = 'none';
    });

    // Close modals on outside click
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target === recipeModal) {
            recipeModal.style.display = 'none';
        }
    });
});
