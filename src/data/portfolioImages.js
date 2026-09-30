// These shareable images live in public/portfolio/. Vite supplies /Portfolio/ in production.
export const portfolioImage = (filename) => `${import.meta.env?.BASE_URL || '/Portfolio/'}portfolio/${filename}`
