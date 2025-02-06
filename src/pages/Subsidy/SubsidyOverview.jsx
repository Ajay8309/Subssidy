import { Link } from 'react-router-dom';
import './Subsidy.css'; 

function SubsidyOverview() {
  const subsidyCategories = [
    {
      title: 'Agriculture & Allied',
      icon: '🌾',
      schemes: [
        { name: 'PMEGP', path: '/subsidy/pmegp', description: 'Prime Minister Employment Generation Programme' },
        { name: 'CMEGP', path: '/subsidy/cmegp', description: 'Chief Minister Employment Generation Programme' },
        { name: 'NHM', path: '/subsidy/nhm', description: 'National Horticulture Mission' },
        { name: 'NHB', path: '/subsidy/nhb', description: 'National Horticulture Board' },
        { name: 'NABARD', path: '/subsidy/nabard', description: 'Agriculture & Rural Development Support' },
        { name: 'Warehouse Development', path: '/subsidy/warehouse', description: 'Infrastructure for Warehouses' },
        { name: 'Cold Storage', path: '/subsidy/cold-storage', description: 'Cold Storage Facility Development' },
        { name: 'Processing Units', path: '/subsidy/processing', description: 'Food Processing & Packaging' },
      ]
    },
    {
      title: 'MSME (Micro, Small & Medium Enterprises)',
      icon: '🏭',
      schemes: [
        { name: 'PMEGP for MSME', path: '/subsidy/msme', description: 'Support for MSME Development' },
        { name: 'CGTMSE', path: '/subsidy/cgtmse', description: 'Credit Guarantee Fund for Small Businesses' },
        { name: 'Cluster Development', path: '/subsidy/cluster', description: 'MSME Cluster Infrastructure' },
      ]
    },
    {
      title: 'Renewable Energy',
      icon: '☀️',
      schemes: [
        { name: 'Solar Energy Subsidy', path: '/subsidy/renewable-energy', description: 'Support for Solar Power Projects' },
        { name: 'Biogas & Wind Energy', path: '/subsidy/biogas-wind', description: 'Subsidy for Renewable Energy Adoption' },
      ]
    },
    {
      title: 'Tourism & Hospitality',
      icon: '🏨',
      schemes: [
        { name: 'Tourism Infrastructure', path: '/subsidy/tourism', description: 'Development of Tourism Projects' },
        { name: 'Eco-Tourism Support', path: '/subsidy/eco-tourism', description: 'Grants for Sustainable Tourism' },
      ]
    },
    {
      title: 'Technology & Innovation',
      icon: '💻',
      schemes: [
        { name: 'Tech Startups Grant', path: '/subsidy/technology', description: 'Funding for Innovative Startups' },
        { name: 'AI & Robotics Support', path: '/subsidy/ai-robotics', description: 'Incentives for Tech R&D' },
      ]
    }
  ];

  return (
    <div className="subsidy-overview">
      <h1>Government Subsidy Programs</h1>
      <p className="overview-description">
        Explore a variety of government subsidies available across different industries. Select a category to view details.
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
