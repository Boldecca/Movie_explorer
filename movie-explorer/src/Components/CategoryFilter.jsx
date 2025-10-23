"use client"

function CategoryFilter({ selectedCategory, onCategoryChange, categories }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange("All")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          selectedCategory === "All"
            ? "bg-blue-600 text-white"
            : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
