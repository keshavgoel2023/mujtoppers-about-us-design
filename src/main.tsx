import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Smooth scroll for anchor links (in-page hashes)
import SmoothScroll from 'smooth-scroll';

// Initialize smooth-scroll for any anchor with a hash
if (typeof window !== 'undefined') {
	// offset matches the navbar height so targets aren't hidden under the fixed nav
	new SmoothScroll('a[href*="#"]', { speed: 500, speedAsDuration: true, offset: 72 });
}

createRoot(document.getElementById("root")!).render(<App />);
