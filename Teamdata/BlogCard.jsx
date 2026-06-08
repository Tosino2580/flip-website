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
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cinema-gold/30 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Content */}
      <div className="p-6 flex flex-col justify-between h-full space-y-4">
        <div>
          {/* Metadata */}
          <div className="flex items-center text-xs uppercase tracking-widest text-cinema-gold font-bold mb-3">
            <span>{date}</span>
            <span className="mx-2 text-white/20">•</span>
            <span>{readTime} min read</span>
          </div>

          <h3 className="text-lg md:text-xl font-bold font-serif text-white group-hover:text-cinema-gold transition-colors duration-300 line-clamp-2 leading-snug">
            {title}
          </h3>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-sans">
          {excerpt}
        </p>

        <span className="inline-flex items-center gap-1 text-xs uppercase font-extrabold tracking-widest text-white/50 group-hover:text-white transition-colors duration-300">
          Read Article <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </span>
      </div>
    </a>
  );
};

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.number.isRequired,
  postUrl: PropTypes.string.isRequired,
};

export default BlogCard;