
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  link: string;
  delay: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, imageUrl, date, link, delay }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in ${delay}`}>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-2 group-hover:text-pawblue transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <a 
          href={link}
          className="inline-flex items-center text-paworange hover:text-paworange-dark font-medium"
        >
          Read More <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const BlogPreview: React.FC = () => {
  const blogPosts = [
    {
      title: "5 Essential Grooming Tips for Long-Haired Dogs",
      excerpt: "Discover how to keep your long-haired dog's coat healthy and tangle-free with these professional grooming tips.",
      imageUrl: "/lovable-uploads/8bbc435f-4d54-498f-b93b-95730029d917.png",
      date: "April 2, 2025",
      link: "/blog/grooming-tips",
      delay: "animate-delay-100"
    },
    {
      title: "Understanding Your Cat's Body Language",
      excerpt: "Learn how to interpret your cat's subtle body language cues to better understand their needs and mood.",
      imageUrl: "/lovable-uploads/cad144da-2182-4649-818e-f0fcd03e7ed2.png",
      date: "March 27, 2025",
      link: "/blog/cat-body-language",
      delay: "animate-delay-200"
    },
    {
      title: "The Benefits of Regular Veterinary Check-ups",
      excerpt: "Find out why regular vet visits are crucial for your pet's long-term health, even when they appear healthy.",
      imageUrl: "/lovable-uploads/c79677c7-6685-4889-9ffd-3c1bc7270a8f.png",
      date: "March 18, 2025",
      link: "/blog/vet-checkups",
      delay: "animate-delay-300"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Latest from Our Blog</h2>
          <p className="text-gray-600">Helpful tips and insights for keeping your pets happy and healthy.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/blog"
            className="inline-flex items-center text-pawblue hover:text-pawblue-dark font-medium"
          >
            View All Blog Posts <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
