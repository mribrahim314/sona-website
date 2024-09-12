import React from 'react';
import './Breadcrumb.css';

interface BreadcrumbLink {
  name: string;
  url?: string;
}

interface BreadcrumbProps {
  title: string;
  links: BreadcrumbLink[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, links }) => {
  return (
    <div className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-text">
              <h2>{title}</h2>
              <div className="bt-option">
                {links.map((link, index) => (
                  <React.Fragment key={index}>
                    {link.url ? (
                      <a href={link.url}>{link.name}</a>
                    ) : (
                      <span>{link.name}</span>
                    )}
                    {index < links.length - 1 && (
                      <i className="bi bi-chevron-right"></i> 
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
