document.querySelector("#openModal-btn").addEventListener("click", openModal);
document.querySelector("#closeModal-btn").addEventListener("click", closeModal);


function openModal() {
    const overlay = document.getElementById('modalOverlay');
    
    // Show modal
    overlay.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    
    overlay.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Close modal when clicking overlay
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all tabs
        tabButtons.forEach(tab => {
            tab.classList.remove("tab-btn-active");
            tab.classList.add("tab-btn-dactive");
        });

        // Add active class to clicked tab
        btn.classList.remove("tab-btn-dactive");
        btn.classList.add("tab-btn-active");

        // Handle tab content switching (if you have content areas)
        const tabId = btn.getAttribute('data-tab');
        if (tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            // Show selected tab content
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        }
    });
});