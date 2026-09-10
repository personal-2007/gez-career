import React from 'react';
import Badge from '../common/Badge';

export const ApplicationStatus = ({ status = 'Applied' }) => {
  return <Badge variant="info">{status.toUpperCase()}</Badge>;
};

export default ApplicationStatus;
