// soravibe AI - Comic Platform
// Fetch and manage comics from data/comics.json

let allComics = [];
let spotlightComics = [];
let currentSpotlightIndex = 0;

// Initialize on page load
document.addEventListener('DOMContentLoaded', async function() {
    try {
        // Show loading spinner
        showLoading(true);
        
        // Fetch comics from JSON
        const response = await fetch('data/comics.json');
        if (!response.ok) throw new Error('Failed to load comics');
        
        const data = await response.json();
        allComics = data.comics || [];
        
        // Separate spotlight comics
        spotlightComics = allComics.filter(comic => comic.spotlight === true);
        if (spotlightComics.length === 0 && allComics.length > 0) {
            spotlightComics = [allComics[0]];
        }
        
        // Render sections
        renderSpotlight();
        renderTrendingCarousel();
        renderNewReleasesCarousel();
        setupEventListeners();
        
        showLoading(false);
    } catch (error) {
        console.error('Error loading comics:', error);
        showLoading(false);
        displayErrorMessage('Failed to load comics. Please refresh the page.');
    }
});

// ========== SPOTLIGHT SECTION ==========
function renderSpotlight() {
    if (spotlightComics.length === 0) return;
    
    const comic = spotlightComics[currentSpotlightIndex];
    updateSpotlightContent(comic);
}

function updateSpotlightContent(comic) {
    document.getElementById('spotlightTitle').textContent = comic.title || 'Comic Title';
    document.getElementById('spotlightSynopsis').textContent = comic.description || 'Comic description';
    document.getElementById('spotlightMeta').innerHTML = `
        <span class="meta-item">${comic.year || '2024'}</span>
        <span class="meta-item">${comic.genre || 'Action'}</span>
        <span class="meta-item">${comic.episodes || '26 Episodes'}</span>
    `;
    
    // Set background image if available
    const bgElement = document.getElementById('spotlightBg');
    if (comic.cover) {
        bgElement.style.backgroundImage = `url('${comic.cover}')`;
        bgElement.style.backgroundSize = 'cover';
        bgElement.style.backgroundPosition = 'center';
    } else {
        bgElement.style.background = 'linear-gradient(135deg, #2a2547 0%, #1a1533 50%, #15141f 100%)';
    }
}

// Spotlight navigation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const prevBtn = document.getElementById('spotlightPrev');
        const nextBtn = document.getElementById('spotlightNext');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (spotlightComics.length > 0) {
                    currentSpotlightIndex = (currentSpotlightIndex - 1 + spotlightComics.length) % spotlightComics.length;
                    renderSpotlight();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (spotlightComics.length > 0) {
                    currentSpotlightIndex = (currentSpotlightIndex + 1) % spotlightComics.length;
                    renderSpotlight();
                }
            });
        }
    }, 100);
});

// ========== CAROUSEL RENDERING ==========
function renderTrendingCarousel() {
    const carousel = document.getElementById('trendingCarousel');
    if (!carousel) return;
    
    carousel.innerHTML = '';
    
    const trendingComics = allComics.filter(comic => comic.trending !== false).slice(0, 12);
    
    trendingComics.forEach(comic => {
        const card = createComicCard(comic);
        carousel.appendChild(card);
    });
}

function renderNewReleasesCarousel() {
    const carousel = document.getElementById('newReleasesCarousel');
    if (!carousel) return;
    
    carousel.innerHTML = '';
    
    // Get newest comics (assuming they have a date or just take last added)
    const newReleases = allComics.filter(comic => comic.isNew === true || comic.releaseDate).slice(0, 12);
    
    if (newReleases.length === 0) {
        const randomComics = allComics.sort(() => 0.5 - Math.random()).slice(0, 12);
        randomComics.forEach(comic => {
            const card = createComicCard(comic);
            carousel.appendChild(card);
        });
    } else {
        newReleases.forEach(comic => {
            const card = createComicCard(comic);
            carousel.appendChild(card);
        });
    }
}

function createComicCard(comic) {
    const card = document.createElement('div');
    card.className = 'comic-card';
    
    card.innerHTML = `
        <div class="comic-card-image">
            ${comic.emoji || '📚'}
        </div>
        <div class="comic-card-title">
            ${comic.title || 'Unknown Comic'}
        </div>
    `;
    
    // Click handler to show details
    card.addEventListener('click', () => {
        showComicDetails(comic);
    });
    
    return card;
}

// ========== CAROUSEL CONTROLS ==========
function setupEventListeners() {
    setupCarouselButtons('trendingPrev', 'trendingCarousel', -1);
    setupCarouselButtons('trendingNext', 'trendingCarousel', 1);
    setupCarouselButtons('newReleasesPrev', 'newReleasesCarousel', -1);
    setupCarouselButtons('newReleasesNext', 'newReleasesCarousel', 1);
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchComics();
            }
        });
    }
    
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            alert('Language toggle functionality can be implemented here');
        });
    }
    
    // Filter button
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) {
        filterBtn.addEventListener('click', () => {
            alert('Filter functionality can be implemented here');
        });
    }
}

function setupCarouselButtons(btnId, carouselId, direction) {
    const btn = document.getElementById(btnId);
    const carousel = document.getElementById(carouselId);
    
    if (btn && carousel) {
        btn.addEventListener('click', () => {
            const scrollAmount = 250 * direction;
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
}

// ========== SEARCH FUNCTIONALITY ==========
function searchComics() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        renderTrendingCarousel();
        renderNewReleasesCarousel();
        return;
    }
    
    const results = allComics.filter(comic => 
        comic.title.toLowerCase().includes(searchTerm) ||
        (comic.description && comic.description.toLowerCase().includes(searchTerm)) ||
        (comic.author && comic.author.toLowerCase().includes(searchTerm))
    );
    
    // Display search results in trending carousel
    const carousel = document.getElementById('trendingCarousel');
    if (carousel) {
        carousel.innerHTML = '';
        
        if (results.length === 0) {
            carousel.innerHTML = '<div style="grid-column: 1/-1; color: var(--text-secondary); text-align: center; padding: 40px;">No comics found</div>';
        } else {
            results.forEach(comic => {
                const card = createComicCard(comic);
                carousel.appendChild(card);
            });
        }
    }
}

// ========== COMIC DETAILS MODAL ==========
function showComicDetails(comic) {
    alert(`
Title: ${comic.title}
Author: ${comic.author || 'Unknown'}
Genre: ${comic.genre || 'Unknown'}
Description: ${comic.description || 'No description available'}

Click OK to visit the full comic page.
    `);
}

// ========== LOADING SPINNER ==========
function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        if (show) {
            spinner.classList.add('active');
        } else {
            spinner.classList.remove('active');
        }
    }
}

// ========== ERROR HANDLING ==========
function displayErrorMessage(message) {
    console.error(message);
    // You can replace this with a proper error notification UI
}

// ========== UTILITY FUNCTIONS ==========

// Auto-scroll carousels on mouse wheel
document.addEventListener('wheel', (e) => {
    const carousels = document.querySelectorAll('.carousel-scroll');
    carousels.forEach(carousel => {
        const rect = carousel.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                carousel.scrollLeft += e.deltaY;
            }
        }
    });
}, { passive: false });

// Keyboard navigation for spotlight
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        const prevBtn = document.getElementById('spotlightPrev');
        if (prevBtn) prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        const nextBtn = document.getElementById('spotlightNext');
        if (nextBtn) nextBtn.click();
    }
});
