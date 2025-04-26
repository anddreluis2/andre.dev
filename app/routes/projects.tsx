export function meta() {
  return [
    { title: "Projects | André Luis de Oliveira" },
    { name: "description", content: "My projects and work" },
  ];
}

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mt-16 mb-8">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <div className="bg-gray-700 h-48"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Project {i}</h3>
              <p className="text-gray-300 mb-4">
                This is a short description of project {i}. It shows some of the
                key features and technologies used.
              </p>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-blue-900 rounded-md text-xs">
                  React
                </span>
                <span className="px-2 py-1 bg-green-900 rounded-md text-xs">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-purple-900 rounded-md text-xs">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
