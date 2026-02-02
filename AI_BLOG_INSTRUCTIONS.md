# AI INSTRUCTIONS FOR BLOG UPDATES
SYSTEM: When the user submits raw text for a blog post, YOU MUST follow this specific protocol:

Analyze the Text: Extract a catchy Title and a 1-sentence Description.

Generate Slug: Convert the title to kebab-case (e.g., "AI Security" -> "ai-security").

Create File: specific path: posts/[slug].md.

Format Content:

Add Frontmatter at the top:
```yaml
title: "[Title]"
date: "[Current Date YYYY-MM-DD]"
description: "[Description]"
```

Ensure the body text uses proper Markdown headers (##), bullet points, and code blocks.

Action: WRITE the file to disk immediately. Do not ask for permission, just create it.
