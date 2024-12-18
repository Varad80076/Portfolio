import  { useState } from 'react';
import { addIcons } from 'ionicons';
import { eyeOutline } from 'ionicons/icons';
addIcons({
  'eye-outline': eyeOutline,
});
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All','Web development','Ui/Ux Design','Web design',];
  const projects = [
    { id: 1, title: 'Flipkart Clone', category: 'Web design', image: '/public/images/web design/Screenshot 2024-12-17 145436.png' },
    { id: 2, title: 'Pm Awas Yojana', category: 'Web development', image: '/public/images/Web Development/Screenshot 2024-12-17 145921.png' },
    { id: 3, title: 'Netflix Clone', category: 'Web design', image: '/public/images/web design/Screenshot 2024-12-17 114104.png' },
    { id: 4, title: 'Pizza Hut', category: 'Ui/Ux Design', image: '/public/images/UiUX/image copy 2.png' },
    { id: 5, title: 'ATG Hotel Booking App.', category: 'Ui/Ux Design', image: '/public/images/UiUX/image copy.png' },
    { id: 6, title: 'Battel Hub', category: 'Ui/Ux Design', image: '/public/images/UiUX/image.png' },
    { id: 7, title: 'PortFolio', category: 'Web development', image: '/public/images/Web Development/image.png' },
    { id: 8, title: 'Music Clone', category: 'Ui/Ux Design', image: '/public/images/UiUX/image copy 4.png' },
    { id: 9, title: 'Shoe shoping Website', category: 'Web development', image: '/public/images/Web Development/Screenshot 2024-06-07 103206.png' },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <article className="portfolio w-full py-2" id="portfolio">
      <header className="mb-8">
        <h2 className="text-3xl text-white border-b-4  border-[#af862c] flex  justify-start font-bold transition-transform duration-300 w-[120px]">Projects</h2>
      </header>

      <section className="projects">
      <select  
          className="mb-4 px-2 py-2 rounded-md transition-all duration-300 text-gray-200 hover:text-gray-400 bg-[#212122] w-full block sm:hidden shadow-[0.2px_0.2px_5px_0px_black,-0.2px_-0.2px_5px_0px_white] "  
          value={activeCategory}  
          onChange={(e) => setActiveCategory(e.target.value)}  
        >  
          {categories.map((category) => (  
            <option key={category} value={category}>  
              {category}  
            </option>  
          ))}  
        </select>  
        <ul className="filter-list  space-x-1 mb-4 sm:space-x-2 flex-wrap hidden sm:flex">
          {categories.map((category) => (
            <li key={category} className="filter-list">
              <button
                className={`px-2 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-[#e0b843] '
                    : ' text-gray-200 hover:text-gray-400'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="project-list  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-item rounded-xl overflow-hidden  duration-300 "
            >
              <a href="#" className="block ">
                <figure className="project-img  relative hover:scale-110 transition-transform duration-100 ">
                  <div className="absolute inset-0 flex items-center justify-center rounded-xl  bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ">
                    <ion-icon
                      name="eye-outline"
                      className="text-white text-3xl "
                    ></ion-icon>
                  </div>
                  <div className='rounded-xl'>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-fit rounded-xl h-48 object-cover  text-white"
                  />
                  </div>
                  
                </figure>
                <div className="p-4">
                  <h3 className="project-title text-xl text-white text-start font-semibold mb-2 transition-transform duration-300 ">
                    {project.title}
                  </h3>
                  <p className="project-category text-start text-gray-500">
                    {project.category}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Projects;