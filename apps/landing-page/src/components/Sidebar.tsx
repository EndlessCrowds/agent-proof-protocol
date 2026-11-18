'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
    {
        category: "Overview",
        items: [
            { label: "1. Abstract", href: "#abstract" },
            { label: "2. The Problem: Sensory Gap", href: "#section-2" },
        ]
    },
    {
        category: "Paradigms of Coexistence",
        items: [
            { label: "3. Three Paradigms", href: "#section-3" },
            { label: "3.1 Augmentation Paradigm", href: "#section-3-1" },
            { label: "3.2 Settlement Paradigm", href: "#section-3-2" },
            { label: "3.3 Networking Paradigm", href: "#section-3-3" },
            { label: "3.4 Ambient Paradigm", href: "#section-3-4" },
        ]
    },
    {
        category: "Architecture & Sensorium",
        items: [
            { label: "4. The Dual-Pipe System", href: "#section-4" },
            { label: "4.1 Thermal & Ephemeral Avatar", href: "#section-4-1" },
            { label: "5. The 18 Primitives", href: "#section-5" },
            { label: "Category A: Sensory Input", href: "#section-5-a" },
            { label: "Category B: Actuation Output", href: "#section-5-b" },
            { label: "Category C: IoT & Connectivity", href: "#section-5-c" },
            { label: "Category D: Spatial Awareness", href: "#section-5-d" },
            { label: "Category E: Ambient State", href: "#section-5-e" },
            { label: "Category F: Temporal Awareness", href: "#section-5-f" },
        ]
    },
    {
        category: "Integration & Security",
        items: [
            { label: "6. Tri-State Runtime", href: "#section-6" },
            { label: "7. Financial Unification", href: "#section-7" },
            { label: "8. Security: Street Smarts", href: "#section-8" },
            { label: "8.1 Defeating Injection", href: "#section-8-1" },
            { label: "8.2 Protecting the Human", href: "#section-8-2" },
            { label: "8.3 Protecting Transaction", href: "#section-8-3" },
            { label: "8.4 Behavioral Due Diligence", href: "#section-8-4" },
        ]
    },
    {
        category: "Execution & Reference",
        items: [
            { label: "9. Protocol Flow & Implementation", href: "#section-9" },
            { label: "10. Conclusion: Symbiotic Web", href: "#section-10" },
            { label: "Appendix A: Cryptographic Math", href: "#appendix-a" },
            { label: "Appendix B: Horizon Primitives", href: "#appendix-b" },
        ]
    }
];

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Mobile Hamburger Menu Button */}
            <button
                onClick={toggleMenu}
                className="fixed top-4 left-4 z-[60] p-2 text-slate-600 bg-white rounded-md shadow-sm lg:hidden hover:text-slate-900 focus:outline-none"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[55] bg-black/50 lg:hidden transition-opacity"
                    onClick={closeMenu}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`
                    fixed top-0 bottom-0 left-0 z-[9999]
                    w-[80%] max-w-sm bg-white border-r border-slate-200
                    transition-transform duration-300 ease-in-out
                    lg:translate-x-0 lg:w-64 lg:top-16 lg:z-0
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <nav className="h-full overflow-y-auto p-6 space-y-6 pt-20 lg:pt-6">
                    {NAV_ITEMS.map((section, idx) => (
                        <div key={idx}>
                            <h5 className="mb-2 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                                {section.category}
                            </h5>
                            <ul className="space-y-1">
                                {section.items.map((item, i) => {
                                    const isSubItem = item.label.match(/^\d+\.\d/) || item.label.startsWith("Category ");
                                    return (
                                        <li key={i}>
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className={`
                                                    block py-1 text-sm rounded transition-colors
                                                    ${isSubItem ? 'pl-4 text-xs text-slate-500 hover:text-slate-900' : 'text-slate-600 font-medium hover:text-slate-900'}
                                                `}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
}
