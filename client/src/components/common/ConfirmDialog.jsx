import React from 'react';
import Modal from './Modal';
import Button from './Button';

export const ConfirmDialog = ({ isOpen, onClose, onConfirm, title = 'Are you sure?', message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>{message}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>Confirm</Button>
      </div>
    </Modal>
  );
};

export default ConfirmDialog;
