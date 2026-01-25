/**
 * Reusable API Links Component
 * Displays GitHub and documentation links with consistent styling
 * 
 * @param {Object} props
 * @param {string} props.githubUrl - GitHub repository URL
 * @param {string} props.docsUrl - Documentation/website URL
 * @param {string} props.githubLabel - Label for GitHub link (default: '{framework} on GitHub')
 * @param {string} props.docsLabel - Label for docs link (default: '{framework} Documentation')
 * @param {string} props.frameworkName - Framework name for labels
 */

import React from 'react';
import { getImageSrc } from '../../../utils/getImageSrc';
import link from '../../../utilities/links.json';

const APILinks = ({
  githubUrl,
  docsUrl,
  githubLabel = null,
  docsLabel = null,
  frameworkName = 'Framework'
}) => {
  const defaultGithubLabel = githubLabel || `${frameworkName} on GitHub`;
  const defaultDocsLabel = docsLabel || `${frameworkName} Documentation`;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      marginBottom: '48px'
    }}>
      {githubUrl && (
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#dc3545',
            textDecoration: 'none',
            borderRadius: '12px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 6px -1px rgba(220,53,69,0.3), 0 2px 4px -1px rgba(220,53,69,0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c82333';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 16px -4px rgba(220,53,69,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#dc3545';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px -1px rgba(220,53,69,0.3), 0 2px 4px -1px rgba(220,53,69,0.2)';
          }}
        >
          <img src={getImageSrc(link.GITHUB_ICON)} alt='github' style={{ marginRight: '12px', width: '20px', height: '20px' }} />
          {defaultGithubLabel}
        </a>
      )}
      
      {docsUrl && (
        <a 
          href={docsUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: '600',
            color: '#ffffff',
            backgroundColor: '#28a745',
            textDecoration: 'none',
            borderRadius: '12px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 6px -1px rgba(40,167,69,0.3), 0 2px 4px -1px rgba(40,167,69,0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#218838';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 16px -4px rgba(40,167,69,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#28a745';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 6px -1px rgba(40,167,69,0.3), 0 2px 4px -1px rgba(40,167,69,0.2)';
          }}
        >
          <img src={link.GITHUB_ICON} alt='github' style={{ marginRight: '12px', width: '20px', height: '20px' }} />
          {defaultDocsLabel}
        </a>
      )}
    </div>
  );
};

export default APILinks;
