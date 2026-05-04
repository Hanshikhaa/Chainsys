/**
 * Utility to handle external images safely.
 * Detects direct image links vs page links and applies a proxy to bypass hotlinking protection.
 */

export const isImageUrl = (url) => {
    if (!url) return false;
    // Check if it's a direct image file or a data URL
    return url.startsWith('data:') || /\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i.test(url);
};

export const getSafeImageUrl = (url) => {
    if (!url) return '';

    // If it's already a direct data URL or local asset, return as is
    if (url.startsWith('data:') || url.startsWith('/')) return url;

    // If it's from a known safe CDN like DummyJSON, Unsplash, or already proxied via weserv, return as is
    if (url.includes('dummyjson.com') || url.includes('unsplash.com') || url.includes('weserv.nl')) return url;

    // Apply weserv.nl proxy to bypass host-level blocking for external images
    // We encode the URL to ensure it's passed correctly to the proxy
    return `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=https://placehold.co/600x400?text=Image+Not+Found`;
};
