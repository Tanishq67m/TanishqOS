import { PROJECTS } from '../data/config';

// 1. Finder: Positioning yourself as an Expert
export const FinderContent = () => (
  <div className="p-8 flex flex-col md:flex-row gap-8 h-full">
    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex-shrink-0 shadow-lg" />
    <div>
      <h2 className="text-2xl font-bold mb-2">Hi, I'm Tanishq Mohod</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-mono mb-4">Product Engineer & Interface Architect</p>
      <p className="text-base leading-relaxed opacity-90 mb-4">
        I don't just build websites; I engineer digital experiences. Specializing in 
        <span className="font-bold text-blue-500"> React ecosystems</span> and 
        <span className="font-bold text-blue-500"> scalable Node.js architectures</span>.
      </p>
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm border-l-4 border-blue-500">
        "Driven by curiosity and a love for solving complex problems with elegant solutions."
      </div>
    </div>
  </div>
);

// 2. VS Code: Stories, not Dumps
export const VSCodeContent = () => (
  <div className="flex h-full font-mono text-sm">
    {/* Sidebar */}
    <div className="w-48 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-2 hidden md:block">
      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Explorer</div>
      {PROJECTS.map(p => (
        <div key={p.id} className="p-1 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded cursor-pointer flex items-center gap-2 text-blue-600">
          <span>TSX</span> {p.name}
        </div>
      ))}
    </div>
    {/* Code Area */}
    <div className="flex-1 p-6">
      {PROJECTS.map(p => (
        <div key={p.id} className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0">
          <h3 className="text-xl font-bold text-purple-600 mb-2">const {p.title.replace(/\s/g, '')} = () =&gt; &#123;</h3>
          <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-600 space-y-2">
            <p className="text-gray-600 dark:text-gray-300">// Problem: {p.description}</p>
            <div className="flex gap-2 mt-2">
              {p.stack.map(s => (
                <span key={s} className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 px-2 py-0.5 rounded text-xs">{s}</span>
              ))}
            </div>
            <div className="pt-4 flex gap-4">
               <a href={p.link} className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">View Demo</a>
               <a href={p.repo} className="px-4 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors">GitHub</a>
            </div>
          </div>
          <h3 className="text-xl font-bold text-purple-600 mt-2">&#125;;</h3>
        </div>
      ))}
    </div>
  </div>
);

// 3. Terminal: No Percentages
export const TerminalContent = () => (
  <div className="p-4 font-mono text-sm h-full bg-black text-green-400">
    <p className="mb-2">tanishq@mac:~$ cat skills.json</p>
    <pre className="mb-4 text-yellow-300">
{`{
  "frontend": ["React", "Next.js", "Tailwind", "Framer Motion"],
  "backend": ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  "tools": ["Docker", "AWS", "Git", "Figma"],
  "status": "Ready to Ship 🚀"
}`}
    </pre>
    <p className="mb-2">tanishq@mac:~$ <span className="animate-pulse">_</span></p>
  </div>
);

// 4. Safari: Provide Value
export const SafariContent = () => (
  <div className="flex flex-col h-full">
    <div className="bg-gray-100 dark:bg-gray-800 p-2 border-b border-gray-300 dark:border-gray-700 flex gap-2 items-center">
       <div className="flex gap-1">
         <div className="w-2 h-2 rounded-full bg-gray-400"></div>
         <div className="w-2 h-2 rounded-full bg-gray-400"></div>
       </div>
       <div className="flex-1 bg-white dark:bg-gray-900 rounded px-2 py-1 text-xs text-center text-gray-500">
         tanishqcoding.hashnode.dev
       </div>
    </div>
    <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
       <h3 className="text-2xl font-bold mb-4">Read My Latest Insights</h3>
       <p className="mb-6 text-gray-500 max-w-md">
         I write about Web Development, scalable systems, and my journey in tech. Providing value to the community is my priority.
       </p>
       <a 
         href="https://tanishqcoding.hashnode.dev/" 
         target="_blank" 
         rel="noopener noreferrer"
         className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg transition-transform hover:scale-105"
       >
         Open Blog in New Tab
       </a>
    </div>
  </div>
);

export const MailContent = () => (
    <div className="p-8 h-full flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-bold mb-6">Let's Build Something Amazing</h2>
        <a href="mailto:tanishqmohod67@gmail.com" className="text-blue-500 text-xl hover:underline mb-2">tanishqmohod67@gmail.com</a>
        <p className="text-gray-500">+91 7977486094</p>
        <p className="text-gray-500 mb-6">Pune, Maharashtra, India</p>
        <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">Send Message</button>
            <a href="https://www.linkedin.com/in/tanishq-mohod" target="_blank" className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">LinkedIn</a>
        </div>
    </div>
)