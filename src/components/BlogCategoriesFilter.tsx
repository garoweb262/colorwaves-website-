interface BlogCategoriesFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogCategoriesFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: BlogCategoriesFilterProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-6 py-2 border rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-palette-gold-500/20 border-palette-gold-400/30 text-palette-gold-400'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category === 'all' ? 'All Posts' : category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
