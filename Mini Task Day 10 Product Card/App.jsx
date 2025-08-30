import './App.css'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="bg-white shadow-lg rounded-2xl flex w-[800px] overflow-hidden">
        
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
            alt="Apple"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {["🍏","🍎","🍊","🍌"].map((emoji, i) => (
              <button 
                key={i} 
                className="w-10 h-10 flex items-center justify-center bg-white shadow-md rounded-full hover:scale-110 transition"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Delicious Apples</h2>
            <p className="text-red-500 text-4xl font-semibold mt-4">₹7.93</p>
            <ul className="text-gray-600 mt-6 space-y-2 text-lg">
              <li>• Rich in fiber 🍎</li>
              <li>• Helps with weight loss 💪</li>
              <li>• Supports heart health ❤️</li>
              <li>• Great as a quick snack ✨</li>
            </ul>
          </div>
          <button className="mt-8 bg-red-500 text-white text-lg px-8 py-3 rounded-xl hover:bg-red-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;