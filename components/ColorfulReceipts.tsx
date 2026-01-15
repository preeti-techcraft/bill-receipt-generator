import React from 'react';
import { ReceiptData } from '../types';
import BrandLogo from './BrandLogo';
import { toWords } from '../utils/numberToWords';
import { formatDateForDisplay, formatTimeForDisplay } from '../utils/dateFormatter';

const ColorfulDashedLine = ({ color = 'border-gray-300' }: { color?: string }) => (
    <div className={`border-t-2 border-dashed ${color} my-2`}></div>
);

// Colorful Indian Oil Receipt
export const ColorfulIndianOilReceipt = ({ data }: { data: ReceiptData }) => (
    <div className="w-[360px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden font-sans">
        {/* Header */}
        <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white p-5 text-center">
            <div className="w-24 h-20 mx-auto mb-3 bg-white rounded-lg p-2 flex items-center justify-center">
                <BrandLogo brand={data.brand} template={data.template} />
            </div>
            <h2 className="text-2xl font-bold">IndianOil</h2>
            <p className="text-sm mt-1">WELCOME!!!</p>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
            {/* Receipt Info */}
            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">TEL NO:</span>
                        <span className="font-semibold"></span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">RECEIPT NO:</span>
                        <span className="font-mono font-bold text-orange-900">{data.receiptNo}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">FCC ID:</span>
                        <span className="font-semibold"></span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">FIP NO:</span>
                        <span className="font-semibold">1</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">NOZZLE NO:</span>
                        <span className="font-semibold">4</span>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-orange-900 text-lg">PRODUCT:</span>
                        <span className="font-bold text-orange-900 text-lg uppercase">{data.product}</span>
                    </div>
                    <ColorfulDashedLine color="border-orange-300" />
                    <div className="flex justify-between">
                        <span className="text-gray-700">RATE/LTR:</span>
                        <span className="font-semibold">₹ {data.rate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">AMOUNT:</span>
                        <span className="font-semibold">₹ {data.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">VOLUME(LTR.):</span>
                        <span className="font-bold text-orange-900">{data.volume.toFixed(2)} LT</span>
                    </div>
                </div>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">VEH TYPE:</span>
                    <span className="font-semibold uppercase">{data.product.includes('Diesel') ? 'DIESEL' : 'PETROL'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">VEH NO:</span>
                    <span className="font-semibold">{data.vehicleNo}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">CUSTOMER NAME:</span>
                    <span className="font-semibold">{data.customerName || ''}</span>
                </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div className="text-xs text-gray-600 mb-1">DATE:</div>
                    <div className="font-semibold text-orange-900">{formatDateForDisplay(data.date)}</div>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div className="text-xs text-gray-600 mb-1">TIME:</div>
                    <div className="font-semibold text-orange-900">{formatTimeForDisplay(data.time)}</div>
                </div>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">MODE:</span>
                    <span className="font-semibold uppercase">{data.paymentMode}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">LST NO:</span>
                    <span className="font-semibold"></span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">VAT NO:</span>
                    <span className="font-semibold"></span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">ATTENDANT ID:</span>
                    <span className="font-semibold">NOT AVAILABLE</span>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white p-4 text-center">
            <p className="text-sm font-semibold">SAVE FUEL YAANI SAVE MONEY !!</p>
            <p className="text-xs mt-1">THANKS FOR FUELLING WITH US.</p>
        </div>
    </div>
);

// Colorful HP Receipt
export const ColorfulHPReceipt = ({ data }: { data: ReceiptData }) => (
    <div className="w-[360px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden font-sans">
        {/* Header */}
        <div className="bg-gradient-to-b from-red-600 to-red-700 text-white p-5 text-center">
            <div className="w-24 h-20 mx-auto mb-3 bg-white rounded-lg p-2 flex items-center justify-center">
                <BrandLogo brand={data.brand} template={data.template} />
            </div>
            <h2 className="text-2xl font-bold">WELCOME!!!</h2>
            <p className="text-lg mt-1 font-semibold">{data.stationName}</p>
            <p className="text-sm mt-1 whitespace-pre-wrap">{data.stationAddress}</p>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
            {/* Receipt Number */}
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Receipt No:</span>
                    <span className="font-mono font-bold text-red-900 text-lg">{data.receiptNo}</span>
                </div>
            </div>

            {/* Product Details */}
            <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-red-900 text-lg">PRODUCT:</span>
                        <span className="font-bold text-red-900 text-lg lowercase">{data.product}</span>
                    </div>
                    <ColorfulDashedLine color="border-red-300" />
                    <div className="flex justify-between">
                        <span className="text-gray-700">RATE/LTR:</span>
                        <span className="font-semibold">₹ {data.rate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">AMOUNT:</span>
                        <span className="font-semibold">₹ {data.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">VOLUME(LTR.):</span>
                        <span className="font-bold text-red-900">{data.volume.toFixed(2)} lt</span>
                    </div>
                </div>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">VEH TYPE:</span>
                    <span className="font-semibold lowercase">{data.product.includes('Diesel') ? 'diesel' : 'petrol'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">VEH NO:</span>
                    <span className="font-semibold">{data.vehicleNo}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">CUSTOMER NAME:</span>
                    <span className="font-semibold">{data.customerName || 'Not Entered'}</span>
                </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <div className="text-xs text-gray-600 mb-1">Date:</div>
                    <div className="font-semibold text-red-900">{formatDateForDisplay(data.date)}</div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <div className="text-xs text-gray-600 mb-1">Time:</div>
                    <div className="font-semibold text-red-900">{formatTimeForDisplay(data.time)}</div>
                </div>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">MODE:</span>
                    <span className="font-semibold">{data.paymentMode}</span>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-b from-red-600 to-red-700 text-white p-4 text-center">
            <p className="text-sm font-semibold">Thank You! Please Visit Again..</p>
        </div>
    </div>
);

// Colorful Bharat Petroleum Receipt
export const ColorfulBharatReceipt = ({ data }: { data: ReceiptData }) => (
    <div className="w-[360px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden font-sans">
        {/* Header */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white p-5 text-center">
            <div className="w-24 h-20 mx-auto mb-3 bg-white rounded-lg p-2 flex items-center justify-center">
                <BrandLogo brand={data.brand} template={data.template} />
            </div>
            <h2 className="text-2xl font-bold">WELCOME!!!</h2>
            <p className="text-lg mt-1 font-semibold">{data.stationName}</p>
            <p className="text-sm mt-1 whitespace-pre-wrap">{data.stationAddress}</p>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
            {/* Receipt Number */}
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">Receipt No:</span>
                    <span className="font-mono font-bold text-blue-900 text-lg">{data.receiptNo}</span>
                </div>
            </div>

            {/* Product Details */}
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-blue-900 text-lg">PRODUCT:</span>
                        <span className="font-bold text-blue-900 text-lg lowercase">{data.product}</span>
                    </div>
                    <ColorfulDashedLine color="border-blue-300" />
                    <div className="flex justify-between">
                        <span className="text-gray-700">RATE/LTR:</span>
                        <span className="font-semibold">₹ {data.rate.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">AMOUNT:</span>
                        <span className="font-semibold">₹ {data.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-700">VOLUME(LTR.):</span>
                        <span className="font-bold text-blue-900">{data.volume.toFixed(2)} lt</span>
                    </div>
                </div>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">VEH TYPE:</span>
                    <span className="font-semibold lowercase">{data.product.includes('Diesel') ? 'diesel' : 'petrol'}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">VEH NO:</span>
                    <span className="font-semibold">{data.vehicleNo}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">CUSTOMER NAME:</span>
                    <span className="font-semibold">{data.customerName || ''}</span>
                </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">Date:</div>
                    <div className="font-semibold text-blue-900">{formatDateForDisplay(data.date)}</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <div className="text-xs text-gray-600 mb-1">Time:</div>
                    <div className="font-semibold text-blue-900">{formatTimeForDisplay(data.time)}</div>
                </div>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">MODE:</span>
                    <span className="font-semibold lowercase">{data.paymentMode}</span>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white p-4 text-center">
            <p className="text-sm font-semibold">SAVE FUEL YAANI SAVE MONEY !!</p>
            <p className="text-xs mt-1">THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON 303600 (TOLL-FREE) FOR QUERIES/COMPLAINTS.</p>
        </div>
    </div>
);

// Generic Colorful Receipt for other brands
export const ColorfulGenericReceipt = ({ data }: { data: ReceiptData }) => {
    const getBrandColors = () => {
        switch (data.brand) {
            case 'Shell':
                return {
                    primary: 'from-yellow-400 to-red-500',
                    secondary: 'bg-yellow-50',
                    text: 'text-red-900',
                    border: 'border-yellow-400'
                };
            case 'Reliance':
                return {
                    primary: 'from-blue-700 to-blue-800',
                    secondary: 'bg-blue-50',
                    text: 'text-blue-900',
                    border: 'border-blue-400'
                };
            default:
                return {
                    primary: 'from-green-600 to-green-700',
                    secondary: 'bg-green-50',
                    text: 'text-green-900',
                    border: 'border-green-300'
                };
        }
    };

    const colors = getBrandColors();

    return (
        <div className="w-[380px] mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${colors.primary} text-white p-6 text-center`}>
                <div className="w-24 h-20 mx-auto mb-3 flex items-center justify-center bg-white rounded-lg p-2">
                    <BrandLogo brand={data.brand} template={data.template} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-wide">{data.brand}</h2>
                <p className="text-sm mt-1 opacity-90">FUEL RECEIPT</p>
            </div>

            <div className={`${colors.secondary} ${colors.text} p-4 text-center border-b-2 ${colors.border}`}>
                <h3 className="font-bold text-lg">{data.stationName}</h3>
                <p className="text-sm whitespace-pre-wrap mt-1 opacity-80">{data.stationAddress}</p>
            </div>

            <div className="p-5 space-y-4">
                <div className={`${colors.secondary} p-3 rounded-lg border ${colors.border}`}>
                    <div className="flex justify-between items-center">
                        <span className={`text-sm font-semibold ${colors.text}`}>Receipt No.</span>
                        <span className={`font-mono font-bold ${colors.text}`}>{data.receiptNo}</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className={`${colors.secondary} p-3 rounded-lg border ${colors.border}`}>
                        <div className="text-xs opacity-70 mb-1">Date</div>
                        <div className={`font-semibold ${colors.text}`}>{formatDateForDisplay(data.date)}</div>
                    </div>
                    <div className={`${colors.secondary} p-3 rounded-lg border ${colors.border}`}>
                        <div className="text-xs opacity-70 mb-1">Time</div>
                        <div className={`font-semibold ${colors.text}`}>{formatTimeForDisplay(data.time)}</div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 text-sm">Vehicle No.</span>
                        <span className="font-semibold text-gray-900">{data.vehicleNo}</span>
                    </div>
                    {data.customerName && (
                        <div className="flex justify-between py-2 border-b border-gray-200">
                            <span className="text-gray-600 text-sm">Customer Name</span>
                            <span className="font-semibold text-gray-900">{data.customerName}</span>
                        </div>
                    )}
                    <div className="flex justify-between py-2 border-b border-gray-200">
                        <span className="text-gray-600 text-sm">Payment Mode</span>
                        <span className="font-semibold text-gray-900">{data.paymentMode}</span>
                    </div>
                </div>

                <div className={`${colors.secondary} p-4 rounded-lg border-2 ${colors.border}`}>
                    <div className="flex justify-between items-center mb-3">
                        <span className={`font-bold text-lg ${colors.text}`}>{data.product}</span>
                        <span className={`font-bold text-lg ${colors.text}`}>{data.volume.toFixed(2)} L</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Rate per Liter</span>
                        <span className="font-semibold text-gray-900">₹ {data.rate.toFixed(2)}</span>
                    </div>
                    <div className="border-t-2 border-dashed border-gray-300 my-3"></div>
                    <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">TOTAL</span>
                        <span className={`text-2xl font-bold ${colors.text}`}>₹ {data.amount.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 text-right capitalize italic">
                        {toWords(data.amount)} Rupees Only
                    </p>
                </div>
            </div>

            <div className={`bg-gradient-to-r ${colors.primary} text-white p-4 text-center`}>
                <p className="text-sm font-semibold">Thank You for Choosing Us!</p>
                <p className="text-xs mt-1 opacity-90">Drive Safe • Save Fuel • Save Money</p>
            </div>
        </div>
    );
};
