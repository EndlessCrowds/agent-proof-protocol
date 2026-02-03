import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default async function BlogIndex() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">
            <header className="py-12 border-b border-slate-900 bg-slate-900/20 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
                        Agent Proof Protocol
                    </Link>
                    <div className="px-3 py-1 border border-blue-500/30 rounded-full bg-blue-900/10">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-blue-400">Blog / Intelligence</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-20">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-center">
                    Intelligence & Updates
                </h1>
                <p className="text-slate-400 text-center mb-16 text-lg">
                    Latest developments from the Agentic Integrity front.
                </p>

                <div className="space-y-12">
                    {posts.map((post) => (
                        <article key={post.slug} className="group border border-slate-800 bg-slate-900 p-8 rounded-lg hover:border-blue-500 transition-all duration-300 shadow-xl">
                            <Link href={`/blog/${post.slug}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                        {post.title}
                                    </h2>
                                    <time className="text-xs font-mono text-slate-500 uppercase">{post.date}</time>
                                </div>
                                <p className="text-slate-400 leading-relaxed mb-6">
                                    {post.description}
                                </p>
                                <span className="text-blue-500 font-bold text-sm flex items-center gap-2">
                                    READ ANALYSIS <span className="group-hover:translate-x-2 transition-transform">→</span>
                                </span>
                            </Link>
                        </article>
                    ))}
                    {posts.length === 0 && (
                        <p className="text-center text-slate-500 py-20">No transmissions found in the current buffer.</p>
                    )}
                </div>
            </main>

            {/* Footer Reuse */}
            <footer className="py-12 bg-[#0A3161] text-white mt-20">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="font-bold tracking-tight mb-2">Agent Proof Protocol</p>
                    <p className="text-blue-200/60 text-xs">© 2026 Part of the Endless Crowds Network.</p>
                </div>
            </footer>
        </div>
    );
}
