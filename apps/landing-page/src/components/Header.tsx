import Link from 'next/link';
import { Search, Github } from 'lucide-react';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between pl-14 pr-6 lg:px-6">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-slate-900 font-semibold text-lg tracking-tight hover:text-blue-600 transition-colors">
                    The Universal Translation Gateway
                </Link>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    v2.1
                </span>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search protocol..."
                        className="h-9 w-64 rounded-md border border-slate-200 bg-slate-50 pl-9 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all font-normal"
                    />
                    <div className="absolute right-2 top-2 text-[10px] font-mono text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 bg-white">
                        Ctrl K
                    </div>
                </div>

                <a
                    href="https://github.com/agent-proof-protocol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                    aria-label="GitHub Repository"
                >
                    <Github className="h-5 w-5" />
                </a>
            </div>
        </header>
    );
}
