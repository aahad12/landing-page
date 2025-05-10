import React from "react";

const ExpertiseSection = () => {
  const expertiseData = [
    {
      category: "CPG/FMCG",
      items: []
    },
    {
        category: "Retail",
        items: []
      },
    {
      category: "Manufacturing",
      items: []
    },
    {
        category: "Oil & Gas",
        items: []
      },
    {
      category: "BFSI/Fintech",
      items: []
    },
    {
      category: "Telecomm",
      items: []
    },
    {
      category: "Logistics & SCM",
      items: []
    },
    {
      category: "Food & Beverage",
      items: []
    }
  ];

  return (
    <div className="p-3 p-md-5">
      <div className="text-center mb-4 mb-md-5">
        <h1 className="display-5 fw-bold mb-2">Rich Expertise</h1>
        <p className="lead text-muted">With Multiple Industries Covered</p>
        <div className="mx-auto border-bottom" style={{ width: '100px' }}></div>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 gap-md-4">
        {expertiseData.map((expertise, index) => (
          <div 
            key={index} 
            className="border rounded-3 p-3 p-md-4 bg-white shadow-sm"
            style={{
              flex: '1 1 calc(50% - 1rem)',
              minWidth: '250px',
              maxWidth: '300px'
            }}
          >
            <h4 className="h5 fw-bold mb-3">{expertise.category}</h4>
            {expertise.items.length > 0 && (
              <ul className="list-unstyled mb-0">
                {expertise.items.map((item, i) => (
                  <li key={i} className="d-flex align-items-center mb-2">
                    <span className="me-2">↓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;