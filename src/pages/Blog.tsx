
import React from "react";
import { Calendar, User, ArrowRight, Clock, Eye, Heart, Share2, Check, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import SEO from "@/components/SEO";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Interior Design Trends That Will Dominate 2025",
      excerpt: "Discover the latest trends in interior design that are shaping modern homes and commercial spaces, from sustainable materials to smart home integration.",
      author: "Priya Singh",
      authorRole: "Senior Interior Designer",
      date: "March 15, 2025",
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
      date: "March 10, 2025",
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
      date: "March 5, 2025",
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
      date: "February 28, 2025",
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
      date: "February 20, 2025",
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
      date: "February 15, 2025",
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
      date: "February 10, 2025",
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
      date: "February 5, 2025",
      readTime: "9 min read",
      views: "3.5k",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Kitchen Design"
    }
  ];

  const categories = ["All", "Trends", "Tips", "Design Psychology", "Sustainability", "Workspace", "Lighting", "Cultural Design", "Kitchen Design"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const filteredPosts = React.useMemo(() => {
    // Exclude featured post from regular list
    const nonFeaturedPosts = blogPosts.filter(post => !post.featured);
    
    let filtered = selectedCategory === "All" 
      ? nonFeaturedPosts 
      : nonFeaturedPosts.filter(post => post.category === selectedCategory);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <SEO
        title="Design Blog"
        description="Discover the latest interior design trends, tips, and inspiration. Expert advice on home design, space planning, and creating beautiful living spaces."
        keywords="interior design blog, design trends, home design tips, interior design inspiration, design ideas, space planning tips"
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
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
                    loading="lazy"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-primary text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-primary font-semibold text-sm">Featured</span>
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
                  <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-100 border-b">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 py-2 w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-2 text-center">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              </p>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center" role="tablist" aria-label="Filter blog posts by category">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                role="tab"
                aria-selected={selectedCategory === category}
                aria-controls="blog-posts-grid"
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:scale-105 active:scale-95 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16" id="blog-posts-grid" role="tabpanel" aria-labelledby="blog-tab">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">No articles found.</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
              {(searchQuery || selectedCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 px-2 py-1 rounded transition-all duration-200"
                  aria-label="Clear all filters"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
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
                    <span className="px-3 py-1 bg-blue-100 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
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
                      <div className="text-primary">{post.authorRole}</div>
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
                  
                  <button className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated with Design Trends</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest design insights, tips, and exclusive content delivered to your inbox weekly.
          </p>
          {!isSubscribed ? (
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button 
                onClick={() => {
                  if (email.trim()) {
                    setIsSubscribed(true);
                  }
                }}
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-green-800 font-semibold text-lg">Subscribed!</p>
                  <p className="text-green-600 text-sm">Thank you for subscribing to our newsletter.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      </div>
    </>
  );
}
