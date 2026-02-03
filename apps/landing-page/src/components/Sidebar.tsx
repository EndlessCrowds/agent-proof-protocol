import Link from 'next/link';

const NAV_ITEMS = [
    {
        category: "Overview",
        items: [
            { label: "Abstract", href: "#abstract" },
            { label: "Interoperability Thesis", href: "#interoperability" },
        ]
    },
    {
        category: "Core Mechanics",
        items: [
            { label: "Translation Engine", href: "#translation-engine" },
            { label: "Protocol Workflow", href: "#workflow" },
            { label: "Labor Primitives (Schema)", href: "#primitives" },
        ]
    },
    {
        category: "Routing & Settlement",
        items: [
            { label: "Liquidity Assurance", href: "#liquidity" },
            { label: "Trust & Verification", href: "#verification" },
            { label: "Payment (x402)", href: "#settlement" },
        ]
    },
    {
        category: "Reference",
        items: [
            { label: "JSON Standard", href: "#json-standard" },
            { label: "Governance", href: "#governance" },
        ]
    }
];

export default function Sidebar() {
    return (
        <aside className="w-64 fixed left-0 top-16 bottom-0 overflow-y-auto border-r border-slate-200 bg-white hidden lg:block">
            <nav className="p-6 space-y-8">
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
                                        className="block text-[14px] text-slate-600 hover:text-blue-600 hover:translate-x-0.5 transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="pt-6 border-t border-slate-100 mt-6">
                    <Link
                        href="/specs/APP-RFC-26.md"
                        className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-900"
                    >
                        <span>PROTOCOL SPECIFICATIONS</span>
                    </Link>
                </div>
            </nav>
        </aside>
    );
}
