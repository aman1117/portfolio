import React from 'react';

const ExperiencePage: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto mt-2 mb-10 w-full h-full flex flex-col">
            <p className="text-4xl font-bold mb-3 mr-1">Experience</p>
            <div className="flex flex-col gap-4">
                {/* Microsoft */}
                {/* <div>
                    <div className="flex items-center mb-2">
                        <img
                            src="/microsoft_logo.png"
                            alt="Microsoft Logo"
                            className="w-7 h-7 mr-2 rounded"
                        />
                        <h2 className="text-2xl font-semibold">Microsoft, Software Engineer</h2>
                    </div>
                    <p className="text-sm italic">
                        <strong>Dec 2025 – Present</strong>
                    </p>
                    <p className="text-sm mb-4 italic">
                        <strong>Hyderabad, onsite</strong>
                    </p>
                </div>

                <hr className="m-.5 border-border" /> */}

                {/* Ethos */}
                <div>
                    <div className="flex items-center mb-2">
                        <img src="/ethos_logo.jpg" alt="Ethos Logo" className="w-7 h-7 mr-2 rounded dark:brightness-110" />
                        <h2 className="text-2xl font-semibold">Ethos, Software Engineer</h2>
                    </div>
                    <p className="text-sm italic text-muted-foreground"><strong>June 2025 – Dec 2025</strong></p>
                    <p className="text-sm mb-4 italic text-muted-foreground"><strong>Bangalore, onsite</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Improved security by removing decrypted driver&apos;s license data from backend flows; ensured only the encrypted value was stored and applied runtime decryption when required, preventing sensitive PII from persisting across the application.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Built an API enhancement for the Product Routing Service (PRS) to return decline reasons for products tied to a given policyId, improving transparency for both consumers and partners.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Enabled partners to understand commission changes when PRS rerouted users to lower-commission products, while simplifying internal debugging of declined product flows.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Scaffolded the document-service microservice that underpins document generation across Ethos, setting up core APIs, configuration, and deployment wiring for future feature work.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Refactored the legacy Bundle Service into a standalone microservice powered by action flows, simplifying the addition of new bundles such as LGA AFLAC and IUL CHOICE by running bundle-type specific create and accept actions.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Upgraded the legacy priority-queue worker to a round-robin design and scaled workers so each is responsible for its own subset of queues, reducing starvation and handling higher queue loads more reliably.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Migrated legacy in-process HTML-to-PDF conversion to a dedicated html-to-pdf service, improving conversion latency from seconds to milliseconds and achieving a 3–4x speedup.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Deployed the pdf-hub microservice to production, critical for unlock and HTML-to-PDF operations, and added Datadog monitors and SLOs to improve reliability and visibility.
                        </li>
                    </ul>
                </div>

                <hr className="m-.5 border-border" />

                {/* Shipsy */}
                <div>
                    <div className="flex items-center mb-2">
                        <img src="/shipsy_logo.jpeg" alt="Shipsy Logo" className="w-7 h-7 mr-2 rounded dark:brightness-110" />
                        <h2 className="text-2xl font-semibold">Shipsy, Software Engineer Intern</h2>
                    </div>
                    <p className="text-sm italic text-muted-foreground"><strong>Jan 2025 - May 2025</strong></p>
                    <p className="text-sm mb-4 italic text-muted-foreground"><strong>Gurgaon, onsite</strong></p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Developed a comprehensive finance mobile web view UI for <strong>QuipUp</strong>, integrating APIs for riders to access their financial information with adaptable client-specific configurations.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Optimized bulk pickup processing by implementing <code className="bg-muted border border-border rounded-sm px-1">Promise.all</code> for concurrent conflict resolution and database operations, resulting in a <strong>3x speedup</strong> of API performance.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Delivered a <strong>hyper-local phone-exchange module</strong> for Flipkart, enabling doorstep device swaps in <strong>10–15 minutes</strong> through real-time assessment checks.
                        </li>
                        <li className="mb-2 text-foreground md:text-lg md:leading-5 leading-tight">
                            Designed and rolled out an <strong>ad-hoc pickup flow</strong> for Movin that lets riders collect consignments not yet registered in the hub manager&apos;s ops dashboard, eliminating manual entry.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;
