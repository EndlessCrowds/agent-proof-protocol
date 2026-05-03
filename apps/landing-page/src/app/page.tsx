import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const contentPath = path.join(process.cwd(), 'content', 'whitepaper.md');
  const fileContents = fs.readFileSync(contentPath, 'utf8');
  const { content } = matter(fileContents);

  return (
    <article className="prose prose-slate max-w-[65ch] mx-auto py-12 px-6">
      {/* Metadata */}
      <div className="metadata-bar mb-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          <div><span className="text-slate-400">Author:</span> Roger Kwasi Senam Mensah</div>
          <div><span className="text-slate-400">License:</span> MIT Open Source</div>
          <div className="sm:col-span-2"><span className="text-slate-400">Repository:</span> <a href="https://github.com/EndlessCrowds/agent-proof-protocol" className="text-blue-600 hover:underline">github.com/EndlessCrowds/agent-proof-protocol</a></div>
        </div>
      </div>

      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
