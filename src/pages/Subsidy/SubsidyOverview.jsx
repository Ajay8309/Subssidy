import { Link } from 'react-router-dom';

function SubsidyOverview() {
  const subsidyCategories = [
    {
      title: 'Agriculture',
      icon: '🌾',
      schemes: [
        { name: 'PMEGP', path: '/subsidy/pmegp', description: 'Prime Minister Employment Generation Programme' },
        { name: 'CMEGP', path: '/subsidy/cmegp', description: 'Chief Minister Employment Generation Programme' },
        { name: 'NHM', path: '/subsidy/nhm', description: 'National Horticulture Mission' },
        { name: 'NHB', path: '/subsidy/nhb', description: 'National Horticulture Board' },
        { name: 'NABARD', path: '/subsidy/nabard', description: 'National Bank for Agriculture and Rural Development' },
        { name: 'Warehouse', path: '/subsidy/warehouse', description: 'Warehouse Infrastructure Development' },
        { name: 'Cold Storage', path: '/subsidy/cold-storage', description: 'Cold Storage Facility Development' },
        { name: 'Processing', path: '/subsidy/processing', description: 'Food Processing Units' },
      ]
    },
    {
      title: 'MSME',
      icon: '🏭',
      schemes: [
        { name: 'PMEGP for MSME', path: '/subsidy/msme', description: 'MSME Development and Support' }
      ]
    },
    {
      title: 'Renewable Energy',
      icon: '☀️',
      schemes: [
        { name: 'Solar Subsidy', path: '/subsidy/renewable-energy', description: 'Solar Power Installation Support' }
      ]
    },
    {
      title: 'Tourism',
      icon: '🏨',
      schemes: [
        { name: 'Tourism Projects', path: '/subsidy/tourism', description: 'Tourism Infrastructure Development' }
      ]
    },
    {
      title: 'Technology',
      icon: '💻',
      schemes: [
        { name: 'Tech Startups', path: '/subsidy/technology', description: 'Technology Innovation Support' }
      ]
    }
  ];

  return (
    <div className="subsidy-overview">
      <h1>Government Subsidies</h1>
      <p className="overview-description">
        Explore various government subsidy schemes available across different sectors
      </p>
      
      <div className="categories-grid">
        {subsidyCategories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.title}</h2>
            </div>
            <div className="schemes-list">
              {category.schemes.map((scheme, schemeIndex) => (
                <Link 
                  key={schemeIndex} 
                  to={scheme.path}
                  className="scheme-item"
                >
                  <h3>{scheme.name}</h3>
                  <p>{scheme.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubsidyOverview;