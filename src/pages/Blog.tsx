
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Eye, Heart } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: '10 Interior Design Trends That Will Dominate 2024',
    excerpt: 'Discover the latest interior design trends that are shaping homes and offices in 2024. From sustainable materials to smart home integration.',
    author: 'Rajesh Gupta',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Trends',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    views: 1250,
    likes: 89
  };

  const blogPosts = [
    {
      id: 2,
      title: 'How to Choose the Perfect Color Scheme for Your Home',
      excerpt: 'Learn the fundamentals of color theory and how to apply them to create harmonious and beautiful living spaces.',
      author: 'Priya Singh',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Design Tips',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 890,
      likes: 67
    },
    {
      id: 3,
      title: 'Maximizing Small Spaces: Clever Storage Solutions',
      excerpt: 'Transform cramped spaces into functional and stylish areas with these innovative storage ideas and space-saving techniques.',
      author: 'Amit Sharma',
      date: 'March 10, 2024',
      readTime: '5 min read',
      category: 'Space Planning',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1120,
      likes: 93
    },
    {
      id: 4,
      title: 'The Ultimate Guide to Modular Kitchen Design',
      excerpt: 'Everything you need to know about planning, designing, and implementing the perfect modular kitchen for your home.',
      author: 'Rajesh Gupta',
      date: 'March 8, 2024',
      readTime: '10 min read',
      category: 'Kitchen Design',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1450,
      likes: 112
    },
    {
      id: 5,
      title: 'Sustainable Interior Design: Eco-Friendly Materials and Practices',
      excerpt: 'Explore how to create beautiful interiors while being mindful of the environment with sustainable design practices.',
      author: 'Priya Singh',
      date: 'March 5, 2024',
      readTime: '7 min read',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 780,
      likes: 54
    },
    {
      id: 6,
      title: 'Creating the Perfect Home Office: Design Tips for Productivity',
      excerpt: 'Design a home office that boosts productivity and creativity while maintaining style and comfort.',
      author: 'Amit Sharma',
      date: 'March 3, 2024',
      readTime: '6 min read',
      category: 'Office Design',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 960,
      likes: 71
    },
    {
      id: 7,
      title: 'Lighting Design: Setting the Mood in Every Room',
      excerpt: 'Master the art of lighting design to create ambiance, highlight features, and enhance the functionality of your spaces.',
      author: 'Rajesh Gupta',
      date: 'February 28, 2024',
      readTime: '8 min read',
      category: 'Lighting',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      views: 1340,
      likes: 98
    }
  ];

  const categories = [
    { name: 'Design Tips', count: 12 },
    { name: 'Trends', count: 8 },
    { name: 'Kitchen Design', count: 6 },
    { name: 'Space Planning', count: 9 },
    { name: 'Office Design', count: 5 },
    { name: 'Lighting', count: 7 },
    { name: 'Sustainability', count: 4 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-sattva-light to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-sattva-dark mb-6">
              Design Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Expert insights, design tips, and inspiration from the world of interior design. 
              Stay updated with the latest trends and techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sattva-dark mb-4">Featured Article</h2>
            <p className="text-gray-600">Our latest insights and expert advice</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-sattva-orange text-white">
                  {featuredPost.category}
                </Badge>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-sattva-dark mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredPost.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {featuredPost.likes}
                    </div>
                  </div>
                </div>
                
                <Button className="bg-sattva-orange hover:bg-sattva-orange/90 text-white w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Grid with Sidebar */}
      <section className="py-20 bg-sattva-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 left-4 bg-sattva-orange text-white">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-sattva-dark mb-3 group-hover:text-sattva-orange transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-3">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views}
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-sattva-orange hover:bg-sattva-orange hover:text-white p-2"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-sattva-orange hover:bg-sattva-orange/90 text-white px-8 py-4"
                >
                  Load More Articles
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-sattva-dark mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 hover:text-sattva-orange cursor-pointer transition-colors">
                            {category.name}
                          </span>
                          <span className="bg-sattva-orange/10 text-sattva-orange px-2 py-1 rounded-full text-xs">
                            {category.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-sattva-dark mb-4">Popular Posts</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex space-x-3 group cursor-pointer">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-grow">
                            <h4 className="text-sm font-medium text-sattva-dark group-hover:text-sattva-orange transition-colors line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-sattva-orange to-sattva-orange/80">
                  <CardContent className="p-6 text-white text-center">
                    <h3 className="text-xl font-semibold mb-3">Stay Updated</h3>
                    <p className="text-sm text-sattva-cream mb-4">
                      Get the latest design tips and trends delivered to your inbox.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-white text-white hover:bg-white hover:text-sattva-orange"
                      asChild
                    >
                      <Link to="/contact">Subscribe Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
