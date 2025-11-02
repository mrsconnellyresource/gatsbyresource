document.addEventListener('DOMContentLoaded', () => {
    // --- Toggle Quotes Functionality ---
    const characterNames = document.querySelectorAll('.character-name.clickable');

    characterNames.forEach(nameElement => {
        nameElement.addEventListener('click', () => {
            // Find the closest parent character-section
            const characterSection = nameElement.closest('.character-section');
            // Find the quotes-container within that section
            const quotesContainer = characterSection.querySelector('.quotes-container');
            // Find the toggle icon
            const toggleIcon = nameElement.querySelector('.toggle-icon');

            // Toggle the 'hidden' class on the quotes container
            quotesContainer.classList.toggle('hidden');
            // Toggle the 'expanded' class on the character name for icon rotation
            nameElement.classList.toggle('expanded');

            // Optionally, change icon based on state (now handled by CSS rotation)
            // if (quotesContainer.classList.contains('hidden')) {
            //     toggleIcon.textContent = '▼'; // Down arrow
            // } else {
            //     toggleIcon.textContent = '▲'; // Up arrow
            // }
        });

        // Initialize icon direction if quotes are hidden by default
        const characterSection = nameElement.closest('.character-section');
        const quotesContainer = characterSection.querySelector('.quotes-container');
        if (quotesContainer.classList.contains('hidden')) {
            nameElement.querySelector('.toggle-icon').textContent = '▼'; // Down arrow
        } else {
            nameElement.querySelector('.toggle-icon').textContent = '▲'; // Up arrow
            nameElement.classList.add('expanded'); // Mark as expanded if not hidden
        }
    });


    // --- Quote Selection/Highlight Functionality ---
    const quoteItems = document.querySelectorAll('.quote-item');

    quoteItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'selected' class from all other quotes
            quoteItems.forEach(otherItem => {
                if (otherItem !== item) { // Don't deselect itself if clicked again
                    otherItem.classList.remove('selected');
                }
            });

            // Toggle 'selected' class on the clicked quote
            item.classList.toggle('selected');
        });
    });

    // Initialize all quote containers to be hidden by default
    // This ensures they are hidden if JavaScript loads after HTML/CSS render
    document.querySelectorAll('.quotes-container').forEach(container => {
        if (!!container.classList.contains('hidden')) { // Check if it doesn't already have 'hidden'
            container.classList.add('hidden');
        }
    });
});