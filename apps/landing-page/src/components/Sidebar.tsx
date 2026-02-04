'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_ITEMS = [
    {
        category: "Overview",
        items: [
            { label: "Abstract", href: "#abstract" },
            { label: "1. Introduction", href: "#introduction" },
            { label: "2. Problem Statement", href: "#problem" },
        ]
    },
    {
        category: "Core Protocol",
        items: [
            { label: "3. Economic Thesis", href: "#economic-thesis" },
            { label: "4. Architecture", href: "#architecture" },
        ]
    },
    {
        category: "Infrastructure",
        items: [
            { label: "5. Trust & DePIN", href: "#verification" },
            { label: "6. Settlement", href: "#settlement" },
            { label: "7. Economic Model", href: "#economic-model" },
        ]
    },
    {
        category: "Reference",
        items: [
            { label: "8. Implementation", href: "#implementation" },
            { label: "9. Conclusion", href: "#conclusion" },
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
                <nav className="h-full overflow-y-auto p-6 space-y-8 pt-20 lg:pt-6">
                    {NAV_ITEMS.map((section, idx) => (
                        <div key={idx}>
                            <h5 className="mb-3 text-xs font-semibold text-slate-900 uppercase tracking-wider">
                                {section.category}
                            </h5>
                            <ul className="space-y-2">
                                {section.items.map((item, i) => (
                                    <li key={i}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="block text-[14px] text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="pt-6 border-t border-slate-100 mt-6 pb-24 lg:pb-0">
                        <Link
                            href="https://github.com/agent-proof-protocol"
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
