import { ArrowLeft02Icon, ArrowRight02Icon } from 'hugeicons-react';
import React, { useState } from 'react';
import JrboOcarz from './JrboOcarz';

interface Article {
  id: number;
  image: string;
  date: string;
  title: string;
}

const Trending: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const articles: Article[] = [
    {
      id: 1,
      image: "https://csnb.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF",
      date: "01-02-2022",
      title: "عنوان",
    },
    {
      id: 2,
      image: "https://csnb.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF",
      date: "01-02-2022",
      title: "عنوان",
    },
    {
      id: 3,
      image: "https://csnb.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF",
      date: "01-02-2022",
      title: "عنوان",
    },
    {
      id: 4,
      image: "https://csnb.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF",
      date: "01-02-2022",
      title: "عنوان",
    },
    {
      id: 5,
      image: "https://csnb.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF",
      date: "01-02-2022",
      title: "عنوان",
    },
    {
      id: 6,
      image: "https://csnb.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF",
      date: "01-02-2022",
      title: "عنوان",
    }
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => 
      prev + 3 >= articles.length ? 0 : prev + 3
    );
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => 
      prev - 3 < 0 ? Math.max(0, articles.length - 3) : prev - 3
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="text-center py-10">
        <h1 className="text-6xl font-bold text-blue-950">
          آخر المقالات و النصائح
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 text-orange-400 "
          >
            <ArrowLeft02Icon/>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10  p-2 text-orange-400"
          >
            <ArrowRight02Icon/>
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${currentSlide * -33.33}%)` }}
            >
              {articles.map((article) => (
                <div 
                  key={article.id}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="flex flex-col">
                    <div>
                      <img
                        className="h-52 w-full object-cover rounded-lg"
                        src={article.image}
                        alt={article.title}
                      />
                    </div>
                    <div className="flex flex-col items-end text-right border-r-4 border-yellow-500 pr-4 mt-4">
                      <p className="text-gray-500">{article.date}</p>
                      <h3 className="text-lg font-semibold">{article.title}</h3>
                      <span className="text-blue-500 cursor-pointer hover:underline">
                        اقرأ المزيد
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <JrboOcarz/>
        </div>
      </div>
    </div>
  );
};

export default Trending;