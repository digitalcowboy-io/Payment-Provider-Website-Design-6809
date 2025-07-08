import React from 'react';

const TrustStrip = () => {
  return (
    <div className="bg-white py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-8 md:space-x-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">PCI</span>
            </div>
            <span className="text-gray-600 text-sm font-medium">PCI-DSS</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">V</span>
            </div>
            <span className="text-gray-600 text-sm font-medium">Visa</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-6 bg-gradient-to-r from-red-500 to-orange-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">MC</span>
            </div>
            <span className="text-gray-600 text-sm font-medium">Mastercard</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">BBB</span>
            </div>
            <span className="text-gray-600 text-sm font-medium">BBB A+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustStrip;