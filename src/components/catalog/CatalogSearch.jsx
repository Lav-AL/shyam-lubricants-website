import { Search, SlidersHorizontal } from "lucide-react"

export function CatalogSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full max-w-3xl mx-auto -mt-8 relative z-20 px-4">
      <div className="bg-white p-2 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center border border-silver/40 group focus-within:border-brand-red/50 focus-within:shadow-[0_10px_40px_rgba(216,27,33,0.15)] transition-all duration-300">
        
        <div className="pl-4 pr-3 text-gray-400 group-focus-within:text-brand-red transition-colors">
          <Search size={22} />
        </div>
        
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search lubricants, grades, or applications..."
          className="flex-1 bg-transparent border-none py-4 text-dark-grey font-medium placeholder-gray-400 focus:outline-none focus:ring-0 text-base md:text-lg"
        />
        
        <button 
          className="px-4 py-3 bg-gray-50 text-gray-500 rounded-lg border border-silver/30 hover:bg-gray-100 hover:text-dark-grey transition-colors flex items-center gap-2"
          onClick={(e) => e.preventDefault()}
        >
          <SlidersHorizontal size={18} />
          <span className="hidden sm:inline font-bold uppercase text-xs tracking-widest">Filter</span>
        </button>
      </div>
    </div>
  )
}
