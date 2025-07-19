import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto mt-2 mb-10 w-full h-full flex flex-col ">
            <p className="text-4xl font-bold mb-3 mr-1">Experience</p>
            <div className="flex flex-col gap-4">
                <div >
                    <div className="flex items-center mb-2">
                        <img src="/ethos_logo.jpg" alt="Ethos Logo" className="w-7 h-7 mr-2 rounded" />
                        <h2 className="text-2xl font-semibold">Ethos, Software Engineer</h2>
                    </div>
                    <p className="text-sm italic"><strong>June 2025 – Present</strong></p>
                    <p className="text-sm mb-4 italic"><strong>Bangalore, onsite</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li className="mb-2 text-black md:text-lg md:leading-5 leading-tight">
                            Refactored and cleaned up backend redundant lags used for launching new feature using <strong>Optimizely</strong>.
                        </li>
                    </ul>
                </div>
                <hr className="m-.5 border-gray-100" />
                <div >
                    <div className="flex items-center mb-2">
                        <img src="/shipsy_logo.jpeg" alt="Shipsy Logo" className="w-7 h-7 mr-2 rounded" />
                        <h2 className="text-2xl font-semibold">Shipsy, Software Engineer Intern</h2>
                    </div>
                    <p className="text-sm   italic"><strong>Jan 2025 - May 2025</strong></p>
                    <p className="text-sm  mb-4 italic"><strong> Gurgaon, onsite</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li className="mb-2 text-black md:text-lg md:leading-5 leading-tight">
                            Developed a comprehensive finance mobile web view UI for <strong>QuipUp</strong>, integrating APIs for riders to access their financial information with adaptable client-specific configurations.
                        </li>
                        <li className="mb-2 text-black md:text-lg md:leading-5 leading-tight">
                            Optimized bulk pickup processing by implementing <code className='bg-gray-50 border rounded-sm'>Promise.all</code> for concurrent conflict resolution and database operations, resulting in a <strong>3x speedup</strong> of API performance.
                        </li>
                        <li className="mb-2 text-black md:text-lg md:leading-5 leading-tight">
                            Delivered a <strong>hyper-local phone-exchange module</strong> for Flipkart, enabling doorstep device swaps in <strong>10–15 minutes</strong> through real-time assessment checks.
                        </li>
                        <li className="mb-2 text-black md:text-lg md:leading-5 leading-tight">
                            Designed and rolled out an <strong>ad-hoc pickup flow</strong> for Movin that lets riders collect consignments not yet registered in the hub manager&apos;s ops dashboard, eliminating manual entry.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 