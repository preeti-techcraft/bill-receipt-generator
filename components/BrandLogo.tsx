import React from 'react';

interface BrandLogoProps {
  brand: string;
  template: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ brand, template }) => {
  // Check if it's classic printer template for grayscale effect
  const isClassicPrinter = template === 'Classic Printer';
  const filterStyle = isClassicPrinter ? { filter: 'grayscale(100%) contrast(1.3) brightness(0.9)' } : {};

  // Bharat Petroleum Logo - Use actual image
  if (brand === 'Bharat Petroleum') {
    return (
      <img 
        src="/images/bharat.png" 
        alt="Bharat Petroleum" 
        className="w-full h-full object-contain"
        style={filterStyle}
      />
    );
  }

  // Indian Oil Logo - Use actual image
  if (brand === 'Indian Oil') {
    return (
      <img 
        src="/images/indian-oil.png" 
        alt="Indian Oil" 
        className="w-full h-full object-contain"
        style={filterStyle}
      />
    );
  }

  // Hindustan Petroleum Logo - Red HP with lotus
  if (brand === 'Hindustan Petroleum') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" fill="none" stroke="#1e40af" strokeWidth="3" rx="2"/>
        <rect x="15" y="15" width="70" height="20" fill="#dc2626" rx="1"/>
        <text x="50" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
          हिन्दुस्तान पेट्रोलियम
        </text>
        <text x="50" y="60" textAnchor="middle" fill="#dc2626" fontSize="28" fontWeight="bold">
          HP
        </text>
        {/* Lotus petals */}
        <ellipse cx="35" cy="75" rx="8" ry="12" fill="#1e40af"/>
        <ellipse cx="50" cy="75" rx="8" ry="12" fill="#1e40af"/>
        <ellipse cx="65" cy="75" rx="8" ry="12" fill="#1e40af"/>
      </svg>
    );
  }

  // Shell Logo
  if (brand === 'Shell') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M 50 10 L 70 40 L 90 50 L 70 60 L 50 90 L 30 60 L 10 50 L 30 40 Z"
          fill="#fbbf24"
          stroke="#dc2626"
          strokeWidth="2"
        />
        <path
          d="M 50 20 L 65 40 L 50 80 L 35 40 Z"
          fill="#dc2626"
        />
      </svg>
    );
  }

  // Reliance Logo
  if (brand === 'Reliance') {
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="10" y="10" width="80" height="80" fill="#1e40af" rx="5"/>
        <text x="50" y="55" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
          R
        </text>
        <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="2"/>
      </svg>
    );
  }

  // Generic logo for other brands
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="45" fill="#10b981" stroke="#065f46" strokeWidth="2"/>
      <text x="50" y="60" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold">
        {brand.charAt(0)}
      </text>
    </svg>
  );
};

export default BrandLogo;
