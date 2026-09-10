import { useState, useEffect } from 'react';
import { jobService } from '../services/jobService';

export const useJobs = (filters = {}) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    jobService.getJobs(filters)
      .then(res => {
        if (isMounted) setJobs(res.data || []);
      })
      .catch(err => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [JSON.stringify(filters)]);

  return { jobs, loading, error };
};
