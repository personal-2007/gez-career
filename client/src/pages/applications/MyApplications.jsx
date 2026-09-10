import React, { useState } from 'react';
import PageContainer from '../../components/layout/PageContainer';
import ApplicationKanban from '../../components/applications/ApplicationKanban';
import ApplicationTimeline from '../../components/applications/ApplicationTimeline';
import Tabs from '../../components/common/Tabs';
import { useApplications } from '../../hooks/useApplications';

export const MyApplications = () => {
  const { applications } = useApplications();
  const [view, setView] = useState('kanban');

  return (
    <PageContainer title="My Job Applications" subtitle="Track your active candidate pipelines and interview status in real-time.">
      <div style={{ marginBottom: '20px' }}>
        <Tabs tabs={[{ id: 'kanban', label: 'Kanban Pipeline' }, { id: 'timeline', label: 'Timeline View' }]} activeTab={view} onChange={(v) => setView(v)} />
      </div>

      {view === 'kanban' ? (
        <ApplicationKanban applications={applications} />
      ) : (
        <div style={{ maxWidth: '600px' }}>
          <ApplicationTimeline />
        </div>
      )}
    </PageContainer>
  );
};

export default MyApplications;
