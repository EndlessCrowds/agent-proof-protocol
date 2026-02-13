'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
    {
        category: "Overview",
        items: [
            { label: "Abstract", href: "#abstract" },
            { label: "1. Introduction", href: "#section-1" },
            { label: "1.1 From Retrieval to Action", href: "#section-1-1" },
            { label: "1.2 The Trust & Runtime Gap", href: "#section-1-2" },
            { label: "1.3 The APP Mandate", href: "#section-1-3" },
            { label: "2. Problem Statement", href: "#section-2" },
        ]
    },
    {
        category: "Core Protocol",
        items: [
            { label: "3. Economic Thesis", href: "#section-3" },
            { label: "3.1 Tier 1: Partner Network", href: "#section-3-1" },
            { label: "3.2 Tier 2: Human Grid", href: "#section-3-2" },
            { label: "3.3 Distribution Strategy", href: "#section-3-3" },
            { label: "4. Architecture", href: "#section-4" },
            { label: "4.1 Input Schema", href: "#section-4-1" },
            { label: "4.2 Labor Primitives", href: "#section-4-2" },
            { label: "4.3 Access Control", href: "#section-4-3" },
            { label: "4.4 Human Grid Fallback", href: "#section-4-4" },
            { label: "4.5 Tri-State Integration", href: "#section-4-5" },
            { label: "4.6 A2UI Interface Layer", href: "#section-4-6" },
            { label: "4.7 Orchestration", href: "#section-4-7" },
        ]
    },
    {
        category: "Infrastructure",
        items: [
            { label: "5. Trust & DePIN", href: "#section-5" },
            { label: "6. Financial Unification", href: "#section-6" },
        ]
    },
    {
        category: "Reference",
        items: [
            { label: "7. Implementation Guide", href: "#section-7" },
            { label: "8. Conclusion", href: "#section-8" },
            { label: "Appendix A: Adapters", href: "#appendix-a" },
            { label: "Appendix B: API Docs", href: "#appendix-b" },
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
                                    const isSubItem = item.label.match(/^\d+\.\d/);
                                    return (
                                        <li key={i}>
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className={`block text-[13px] text-slate-500 hover:text-blue-600 hover:translate-x-0.5 transition-all ${isSubItem ? 'pl-3 text-[12px]' : 'font-medium text-slate-700'}`}
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}

                    <div className="pt-4 border-t border-slate-100 mt-4 pb-24 lg:pb-0">
                        <Link
                            href="https://github.com/EndlessCrowds/agent-proof-protocol"
                            target="_blank"
                            onClick={closeMenu}
                            className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-900"
                        >
                            <span>SOURCE REPOSITORY</span>
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    );
}
