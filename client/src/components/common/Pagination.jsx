import React from 'react';

export const Pagination = ({ currentPage = 1, totalPages = 5, onPageChange }) => {
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', justifyContent: 'center', margin: '20px 0' }}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange && onPageChange(page)}
          style={{
            width: '34px', height: '34px', borderRadius: '8px',
            background: currentPage === page ? '#6366f1' : 'rgba(255,255,255,0.05)',
            color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
