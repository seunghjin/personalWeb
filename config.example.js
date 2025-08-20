// Example configuration file
// Copy this to config.js and add your actual email
const CONFIG = {
    email: 'your.email@example.com'
};

// Export for use in main site
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
