const SocialMediaCard = () => {
  const myWorks = [
    { 
      img: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg", // example thumbnail
      title: "YouTube Videos", 
      url: "https://youtube.com/yourchannel" 
    },
    { 
      img: "https://via.placeholder.com/150x100?text=Podcast", 
      title: "Podcast Episodes", 
      url: "https://podcast.com/yourshow" 
    },
    { 
      img: "https://via.placeholder.com/150x100?text=Blog", 
      title: "My Blogs", 
      url: "/blog" 
    },
    { 
      img: "https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg", // example thumbnail
      title: "YouTube Videos", 
      url: "https://youtube.com/yourchannel" 
    },
    { 
      img: "https://via.placeholder.com/150x100?text=Podcast", 
      title: "Podcast Episodes", 
      url: "https://podcast.com/yourshow" 
    },
    { 
      img: "https://via.placeholder.com/150x100?text=Blog", 
      title: "My Blogs", 
      url: "/blog" 
    },
  ];

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center py-2">My Work</h3>
      
      <div className="grid grid-cols-3 gap-10">
        {myWorks.map(({ img, title, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center hover:shadow-lg transition p-2 rounded"
          >
            <img 
              src={img} 
              alt={title} 
              className="w-24 h-16 object-cover rounded-md mb-2"
              loading="lazy"
            />
            <span className="text-sm font-medium text-indigo-600">{title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCard;
