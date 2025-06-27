import { useState } from 'react'

// Project data for residential and commercial projects with HD videos
const residentialProjects = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    year: "2024",
    collaborator: "Residential Client",
    video: "https://cdn.pixabay.com/video/2023/01/28/147896-793893711_large.mp4",
    poster: "https://ugc.same-assets.com/mNprOTWTGNcjRfE9fwNf5vcqqSkHSV1R.jpeg",
    description: "Complete kitchen renovation with modern finishes"
  },
  {
    id: 2,
    title: "Bathroom Renovation",
    year: "2024",
    collaborator: "Private Residence",
    video: "https://cdn.pixabay.com/video/2020/04/27/38397-413329634_large.mp4",
    poster: "https://ugc.same-assets.com/AmeuGPhSFbK26ul1rRy6d7x39pKuBlI1.jpeg",
    description: "Guest bathroom renovation with contemporary design"
  },
  {
    id: 3,
    title: "California Home Makeover",
    year: "2023",
    collaborator: "Family Residence",
    video: "https://cdn.pixabay.com/video/2023/05/08/162285-825473145_large.mp4",
    poster: "https://ugc.same-assets.com/xjLuGVikcvUh8mIvA-Hivh9npvALYMTE.jpeg",
    description: "Complete interior transformation from dark to bright"
  },
  {
    id: 4,
    title: "1880s Home Restoration",
    year: "2023",
    collaborator: "Historic Property",
    video: "https://cdn.pixabay.com/video/2020/12/03/59049-487659403_large.mp4",
    poster: "https://ugc.same-assets.com/eZmnvL6H8H358QKFeKplW4gUw0Y3ePfm.jpeg",
    description: "Modern interior remodel preserving historic character"
  },
  {
    id: 5,
    title: "Contemporary Kitchen Design",
    year: "2024",
    collaborator: "Modern Residence",
    video: "https://cdn.pixabay.com/video/2022/08/09/126834-737264974_large.mp4",
    poster: "https://ugc.same-assets.com/P56O37q90G831QlXJkBWKob8BfOUN7EG.jpeg",
    description: "Sleek kitchen renovation with premium finishes"
  }
]

const commercialProjects = [
  {
    id: 6,
    title: "Modern Office Space",
    year: "2024",
    collaborator: "Tech Company",
    video: "https://cdn.pixabay.com/video/2022/06/21/120493-722150459_large.mp4",
    poster: "https://ugc.same-assets.com/qacM59tNZKMwpdBp-aY7vIbLlhnB_vTD.jpeg",
    description: "Creative ceiling design for modern office environment"
  },
  {
    id: 7,
    title: "Restaurant Interior",
    year: "2023",
    collaborator: "Brooklyn Museum Cafe",
    video: "https://cdn.pixabay.com/video/2020/07/27/44792-442765617_large.mp4",
    poster: "https://ugc.same-assets.com/tgg8M4lT20vlea8xOr__0ylckjIWZf-D.jpeg",
    description: "Contemporary cafe design with warm atmospheres"
  },
  {
    id: 8,
    title: "Commercial Build-Out",
    year: "2024",
    collaborator: "Retail Client",
    video: "https://cdn.pixabay.com/video/2023/03/15/154178-806831876_large.mp4",
    poster: "https://ugc.same-assets.com/WmTXyeTmkFhoFpxSc8-8rWLzrOmCNKaH.png",
    description: "Complete commercial space transformation"
  },
  {
    id: 9,
    title: "Corporate Headquarters",
    year: "2023",
    collaborator: "Fortune 500 Company",
    video: "https://cdn.pixabay.com/video/2022/11/14/139516-770058394_large.mp4",
    poster: "https://ugc.same-assets.com/ARsHSxnn9cQXfF-f7uKBQTiRmScC9NTF.jpeg",
    description: "Modern office interior with collaborative spaces"
  },
  {
    id: 10,
    title: "Meta Workspace",
    year: "2023",
    collaborator: "Meta Inc.",
    video: "https://cdn.pixabay.com/video/2021/08/03/83928-580744103_large.mp4",
    poster: "https://ugc.same-assets.com/heTMYFou8XDq5ddP98vbHE8O8mAiE55I.jpeg",
    description: "Former post office transformed into modern workspace"
  }
]

function App() {
  const [currentFilter, setCurrentFilter] = useState<'all' | 'residential' | 'commercial'>('all')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const allProjects = [...residentialProjects, ...commercialProjects]
  const filteredProjects = currentFilter === 'all'
    ? allProjects
    : currentFilter === 'residential'
    ? residentialProjects
    : commercialProjects

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-xl heading-light">
              <a href="/" className="nav-link text-xl">
                PRH Design and Renovation
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6 text-sm">
                <button
                  onClick={() => setCurrentFilter('all')}
                  className={`filter-button ${currentFilter === 'all' ? 'active' : 'opacity-60'}`}
                >
                  All,
                </button>
                <button
                  onClick={() => setCurrentFilter('residential')}
                  className={`filter-button ${currentFilter === 'residential' ? 'active' : 'opacity-60'}`}
                >
                  Residential,
                </button>
                <button
                  onClick={() => setCurrentFilter('commercial')}
                  className={`filter-button ${currentFilter === 'commercial' ? 'active' : 'opacity-60'}`}
                >
                  Commercial
                </button>
                <span className="text-gray-400">|</span>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <a href="#work" className="nav-link">Work,</a>
                <a href="#about" className="nav-link">About,</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Twitter
                </a>
              </div>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Section Header - Residential */}
        {(currentFilter === 'all' || currentFilter === 'residential') && (
          <section className="mb-16">
            <div className="mb-8">
              <p className="text-lg text-body text-gray-600 mb-2">
                A selection of residential renovation projects we've completed in recent years.{' '}
                <a href="/residential" className="nav-link">View all ›</a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(currentFilter === 'all' ? residentialProjects : filteredProjects).map((project) => (
                <div
                  key={project.id}
                  className="project-card hover-lift"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                    <video
                      src={project.video}
                      poster={project.poster}
                      className="w-full h-full object-cover project-image"
                      autoPlay
                      muted
                      loop
                      playsInline
                      onLoadStart={(e) => {
                        // Fallback to poster image if video fails to load
                        e.currentTarget.addEventListener('error', () => {
                          const img = document.createElement('img');
                          img.src = project.poster;
                          img.className = 'w-full h-full object-cover project-image';
                          img.alt = project.title;
                          e.currentTarget.parentNode?.replaceChild(img, e.currentTarget);
                        });
                      }}
                    />
                    {hoveredProject === project.id && (
                      <div className="image-overlay" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl heading-light nav-link">
                      {project.title}
                    </h3>
                    <p className="text-sm text-body text-gray-600">({project.year})</p>
                    <p className="text-sm text-body text-gray-500">{project.collaborator}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section Header - Commercial */}
        {(currentFilter === 'all' || currentFilter === 'commercial') && (
          <section className="mb-16">
            <div className="mb-8">
              <p className="text-lg text-body text-gray-600 mb-2">
                A selection of commercial renovation and design projects.{' '}
                <a href="/commercial" className="nav-link">View all ›</a>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(currentFilter === 'all' ? commercialProjects : filteredProjects).map((project) => (
                <div
                  key={project.id}
                  className="project-card hover-lift"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                    <video
                      src={project.video}
                      poster={project.poster}
                      className="w-full h-full object-cover project-image"
                      autoPlay
                      muted
                      loop
                      playsInline
                      onLoadStart={(e) => {
                        // Fallback to poster image if video fails to load
                        e.currentTarget.addEventListener('error', () => {
                          const img = document.createElement('img');
                          img.src = project.poster;
                          img.className = 'w-full h-full object-cover project-image';
                          img.alt = project.title;
                          e.currentTarget.parentNode?.replaceChild(img, e.currentTarget);
                        });
                      }}
                    />
                    {hoveredProject === project.id && (
                      <div className="image-overlay" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl heading-light nav-link">
                      {project.title}
                    </h3>
                    <p className="text-sm text-body text-gray-600">({project.year})</p>
                    <p className="text-sm text-body text-gray-500">{project.collaborator}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="footer-heading">Contact</h4>
              <div className="space-y-2 footer-text">
                <p>123 Design Street, Suite 456<br />Los Angeles, CA 90210<br />United States</p>
                <a href="mailto:info@prhdesign.com" className="nav-link">
                  info@prhdesign.com
                </a>
              </div>

              <div className="mt-6 flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Selected Projects */}
            <div>
              <h4 className="footer-heading">Selected projects with</h4>
              <div className="footer-text">
                Residential clients, Commercial developments, Tech companies, Hospitality industry,
                Healthcare facilities, Educational institutions, Retail spaces, Corporate offices,
                Restaurant groups, Property developers
              </div>
            </div>

            {/* About */}
            <div>
              <h4 className="footer-heading">About PRH Design and Renovation</h4>
              <div className="footer-text">
                PRH Design and Renovation is a full-service design and construction company
                specializing in residential and commercial renovations. We transform spaces
                with innovative design solutions and meticulous attention to detail.
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © 2025 PRH Design and Renovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
