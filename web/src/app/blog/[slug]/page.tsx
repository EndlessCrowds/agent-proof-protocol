import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-blue-500 selection:text-white">
            <header className="py-8 border-b border-slate-900 bg-slate-900/20 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                    <Link href="/blog" className="text-sm font-bold tracking-widest text-blue-500 hover:text-white transition-colors flex items-center gap-2">
                        ← RETURN TO FEED
                    </Link>
                    <div className="hidden md:block px-3 py-1 border border-slate-800 rounded-full bg-slate-900/50">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Transmission Hash: {slug}</span>
                    </div>
                </div>
            </header>

            <article className="max-w-3xl mx-auto px-4 py-20">
                <header className="mb-12 text-center">
                    <time className="text-blue-500 font-mono text-sm mb-4 block uppercase tracking-widest">{post.date}</time>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 uppercase italic">
                        {post.title}
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-6 text-left">
                        {post.description}
                    </p>
                </header>

                <div className="prose prose-invert prose-blue max-w-none 
          prose-headings:uppercase prose-headings:tracking-tighter prose-headings:font-bold
          prose-p:text-slate-400 prose-p:leading-relaxed prose-p:text-lg
          prose-li:text-slate-400 prose-code:text-blue-400 prose-code:bg-slate-900 prose-code:px-1 prose-code:rounded">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                <div className="mt-20 pt-10 border-t border-slate-900">
                    <div className="bg-slate-900 p-8 border border-slate-800 rounded-lg">
                        <h3 className="font-bold uppercase tracking-widest mb-4 text-blue-400">Integrity Verification</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            This transmission has been verified via the Agent Proof Protocol. The content is cryptographically anchored to the Endless Crowds Network.
                        </p>
                    </div>
                </div>
            </article>

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
