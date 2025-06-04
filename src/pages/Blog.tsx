
import React from "react";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Interior Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest trends in interior design that are shaping modern homes and commercial spaces.",
      author: "Priya Singh",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/lovable-uploads/modern-interior-1.jpg",
      category: "Trends"
    },
    {
      id: 2,
      title: "Maximizing Small Spaces: Design Tips and Tricks",
      excerpt: "Learn how to make the most of limited space with clever design solutions and storage ideas.",
      author: "Rajesh Kumar",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "/lovable-uploads/modern-interior-2.jpg",
      category: "Tips"
    },
    {
      id: 3,
      title: "The Psychology of Color in Interior Design",
      excerpt: "Understanding how colors affect mood and behavior to create harmonious living spaces.",
      author: "Amit Patel",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "/lovable-uploads/modern-interior-3.jpg",
      category: "Design Psychology"
    },
    {
      id: 4,
      title: "Sustainable Design: Eco-Friendly Interior Solutions",
      excerpt: "Explore sustainable materials and practices for environmentally conscious interior design.",
      author: "Priya Singh",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "/lovable-uploads/modern-interior-1.jpg",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "Creating the Perfect Home Office Space",
      excerpt: "Design a productive and comfortable workspace that enhances your work-from-home experience.",
      author: "Rajesh Kumar",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "/lovable-uploads/modern-interior-2.jpg",
      category: "Workspace"
    },
    {
      id: 6,
      title: "Lighting Design: Setting the Right Mood",
      excerpt: "Master the art of lighting to create ambiance and functionality in every room.",
      author: "Amit Patel",
      date: "February 15, 2024",
      readTime: "6 min read",
      image: "/lovable-uploads/modern-interior-3.jpg",
      category: "Lighting"
    }
  ];

  const categories = ["All", "Trends", "Tips", "Design Psychology", "Sustainability", "Workspace", "Lighting"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Design Blog</h1>
            <p className="text-xl leading-relaxed">
              Insights, tips, and inspiration from our design experts to help you create beautiful spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <button className="text-orange-600 font-medium flex items-center hover:text-orange-700 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
