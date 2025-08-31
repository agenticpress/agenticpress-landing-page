
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading state for calendar iframe
    const calendarFrame = document.getElementById('9wykaauGoGEKjktBHqWB_1756659224336');
    if (calendarFrame) {
        calendarFrame.addEventListener('load', function() {
            // Calendar loaded successfully
        });
    }

    // Track scroll depth for analytics (optional)
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        maxScroll = Math.max(maxScroll, scrollPercent);
    });

    // Log engagement when user leaves (optional analytics)
    window.addEventListener('beforeunload', function() {
        // Track max scroll depth: Math.round(maxScroll) + '%'
    });
});
