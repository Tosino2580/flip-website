import PropTypes from 'prop-types';

const BlogCard = ({ 
  title, 
  excerpt, 
  date, 
  readTime,  
  postUrl 
}) => {
  return (
    <a 
      href={postUrl} 
      className="block w-full rounded-lg  overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300 bg-white"
    >
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        
        {/* Meta */}
        <div className="flex items-center text-sm text-gray-500">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
      </div>
    </a>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  postUrl: PropTypes.string.isRequired,
};

export default BlogCard;