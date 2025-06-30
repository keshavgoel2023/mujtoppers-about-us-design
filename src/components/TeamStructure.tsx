
import { useState, useEffect, useRef } from "react";

const TeamStructure = () => {
  const [visibleNodes, setVisibleNodes] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const teamHierarchy = {
    level1: [
      { id: 1, name: "Founder", color: "bg-gradient-to-br from-blue-500 to-blue-600" },
      { id: 2, name: "Co-founder", color: "bg-gradient-to-br from-orange-500 to-orange-600" }
    ],
    level2: [
      { id: 3, name: "President", color: "bg-gradient-to-br from-purple-500 to-purple-600" },
      { id: 4, name: "Vice President", color: "bg-gradient-to-br from-pink-500 to-pink-600" }
    ],
    level3: [
      { id: 5, name: "Technical Secretary", color: "bg-gradient-to-br from-green-500 to-green-600" },
      { id: 6, name: "Head of Operations", color: "bg-gradient-to-br from-red-500 to-red-600" },
      { id: 7, name: "Managing Director", color: "bg-gradient-to-br from-indigo-500 to-indigo-600" },
      { id: 8, name: "General Secretary", color: "bg-gradient-to-br from-yellow-500 to-yellow-600" }
    ],
    level4: [
      { id: 9, name: "Core Committee", color: "bg-gradient-to-br from-teal-500 to-teal-600", isGroup: true }
    ]
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nodeId = parseInt(entry.target.getAttribute('data-node-id') || '0');
          if (entry.isIntersecting) {
            setVisibleNodes(prev => new Set([...prev, nodeId]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const nodes = document.querySelectorAll('[data-node-id]');
    nodes.forEach(node => observerRef.current?.observe(node));

    return () => observerRef.current?.disconnect();
  }, []);

  const NodeComponent = ({ node, delay = 0 }: { node: any, delay?: number }) => {
    const isVisible = visibleNodes.has(node.id);
    
    return (
      <div
        data-node-id={node.id}
        className={`relative transform transition-all duration-700 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-8 opacity-0 scale-95'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <div className={`${node.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full transform translate-x-6 -translate-y-6"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full transform -translate-x-4 translate-y-4"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl font-bold text-white">
                {node.name.split(' ').map((word: string) => word[0]).join('').substring(0, 2)}
              </span>
            </div>
            <h3 className="text-white font-bold text-center text-lg">
              {node.name}
            </h3>
            {node.isGroup && (
              <div className="flex justify-center space-x-2 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-white/40 rounded-full"></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const ConnectionLine = ({ from, to, isVisible }: { from: string, to: string, isVisible: boolean }) => (
    <div className={`absolute border-2 border-gray-300 transition-all duration-1000 ${
      isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
    }`} style={{ transformOrigin: 'left' }}>
      <div className="absolute -right-2 -top-2 w-4 h-4 bg-gray-300 rounded-full"></div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border-4 border-purple-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-pink-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
            Our Team Structure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds driving innovation and excellence at MUJ Toppers
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Hierarchical Structure */}
        <div className="max-w-6xl mx-auto">
          {/* Level 1: Founders */}
          <div className="flex justify-center space-x-12 mb-16">
            {teamHierarchy.level1.map((node, index) => (
              <NodeComponent key={node.id} node={node} delay={index * 200} />
            ))}
          </div>

          {/* Connection lines from founders */}
          <div className="flex justify-center mb-8">
            <div className={`w-px h-12 bg-gray-300 transition-all duration-1000 ${
              visibleNodes.size > 2 ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}></div>
          </div>

          {/* Level 2: Leadership */}
          <div className="flex justify-center space-x-16 mb-16">
            {teamHierarchy.level2.map((node, index) => (
              <NodeComponent key={node.id} node={node} delay={400 + index * 200} />
            ))}
          </div>

          {/* Connection lines to department heads */}
          <div className="flex justify-center mb-8">
            <div className={`w-px h-12 bg-gray-300 transition-all duration-1000 ${
              visibleNodes.size > 4 ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}></div>
          </div>
          <div className="flex justify-center mb-8">
            <div className={`h-px w-80 bg-gray-300 transition-all duration-1000 ${
              visibleNodes.size > 4 ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
          </div>

          {/* Level 3: Department Heads */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
            {teamHierarchy.level3.map((node, index) => (
              <NodeComponent key={node.id} node={node} delay={800 + index * 150} />
            ))}
          </div>

          {/* Connection to core committee */}
          <div className="flex justify-center mb-8">
            <div className={`w-px h-12 bg-gray-300 transition-all duration-1000 ${
              visibleNodes.size > 8 ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}></div>
          </div>

          {/* Level 4: Core Committee */}
          <div className="flex justify-center">
            {teamHierarchy.level4.map((node, index) => (
              <NodeComponent key={node.id} node={node} delay={1400 + index * 200} />
            ))}
          </div>

          {/* Core Committee Expansion */}
          <div className={`mt-12 transition-all duration-1000 ${
            visibleNodes.has(9) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Core Committee Members</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div 
                    key={index}
                    className={`text-center transform transition-all duration-700 ${
                      visibleNodes.has(9) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1600 + index * 100}ms` }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full mx-auto mb-3 shadow-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Core Member {index + 1}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
