export function meta() {
  return [
    { title: "Photos | André Luis de Oliveira" },
    { name: "description", content: "My photo gallery" },
  ];
}

export default function Photos() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mt-16 mb-8">Photo Gallery</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
