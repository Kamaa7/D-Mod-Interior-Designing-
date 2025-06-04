
import React from "react";
import { Calendar, User, ArrowRight, Clock, Eye, Heart, Share2 } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Interior Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest trends in interior design that are shaping modern homes and commercial spaces, from sustainable materials to smart home integration.",
      author: "Priya Singh",
      authorRole: "Senior Interior Designer",
      date: "March 15, 2024",
      readTime: "5 min read",
      views: "2.3k",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Trends",
      featured: true
    },
    {
      id: 2,
      title: "Maximizing Small Spaces: Design Tips and Tricks",
      excerpt: "Learn how to make the most of limited space with clever design solutions, multi-functional furniture, and strategic storage ideas.",
      author: "Rajesh Kumar",
      authorRole: "Lead Designer",
      date: "March 10, 2024",
      readTime: "7 min read",
      views: "1.8k",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Tips"
    },
    {
      id: 3,
      title: "The Psychology of Color in Interior Design",
      excerpt: "Understanding how colors affect mood and behavior to create harmonious living spaces that promote well-being and productivity.",
      author: "Amit Patel",
      authorRole: "Design Consultant",
      date: "March 5, 2024",
      readTime: "6 min read",
      views: "3.1k",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design Psychology"
    },
    {
      id: 4,
      title: "Sustainable Design: Eco-Friendly Interior Solutions",
      excerpt: "Explore sustainable materials and practices for environmentally conscious interior design without compromising on style.",
      author: "Priya Singh",
      authorRole: "Senior Interior Designer",
      date: "February 28, 2024",
      readTime: "8 min read",
      views: "1.5k",
      image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "Creating the Perfect Home Office Space",
      excerpt: "Design a productive and comfortable workspace that enhances your work-from-home experience with proper lighting and ergonomics.",
      author: "Rajesh Kumar",
      authorRole: "Lead Designer",
      date: "February 20, 2024",
      readTime: "5 min read",
      views: "2.7k",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Workspace"
    },
    {
      id: 6,
      title: "Lighting Design: Setting the Right Mood",
      excerpt: "Master the art of lighting to create ambiance and functionality in every room with layered lighting techniques.",
      author: "Amit Patel",
      authorRole: "Design Consultant",
      date: "February 15, 2024",
      readTime: "6 min read",
      views: "1.9k",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Lighting"
    },
    {
      id: 7,
      title: "Indian Traditional Elements in Modern Interiors",
      excerpt: "Blend traditional Indian design elements with contemporary aesthetics to create unique, culturally rich living spaces.",
      author: "Neha Sharma",
      authorRole: "Cultural Design Specialist",
      date: "February 10, 2024",
      readTime: "7 min read",
      views: "2.2k",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Cultural Design"
    },
    {
      id: 8,
      title: "Modular Kitchen Design: Form Meets Function",
      excerpt: "Essential tips for designing modular kitchens that combine efficiency, storage, and style for modern Indian cooking.",
      author: "Priya Singh",
      authorRole: "Senior Interior Designer",
      date: "February 5, 2024",
      readTime: "9 min read",
      views: "3.5k",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Kitchen Design"
    }
  ];

  const categories = ["All", "Trends", "Tips", "Design Psychology", "Sustainability", "Workspace", "Lighting", "Cultural Design", "Kitchen Design"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Design Insights & Inspiration</h1>
            <p className="text-xl leading-relaxed mb-8">
              Discover the latest trends, expert tips, and creative inspiration from our team of professional interior designers. 
              Stay updated with industry insights that will help you create beautiful, functional spaces.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-90">Design Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm opacity-90">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">Weekly</div>
                <div className="text-sm opacity-90">New Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Article</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-orange-600 font-semibold text-sm">Featured</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                    </div>
                  </div>
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Section */}
      <section className="py-8 bg-gray-100 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors text-sm ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-100 border border-gray-200'
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
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition-all">
                      <Share2 className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div>
                      <div className="flex items-center mb-1">
                        <User className="w-3 h-3 mr-1" />
                        {post.author}
                      </div>
                      <div className="text-orange-500">{post.authorRole}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-orange-600 font-medium flex items-center hover:text-orange-700 transition-colors text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated with Design Trends</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest design insights, tips, and exclusive content delivered to your inbox weekly.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
