import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PageContainer from '../../components/layout/PageContainer';
import { Search, Filter, MapPin, Briefcase, DollarSign, CheckCircle2, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { apiFetch } from '../../services/api';
import Modal from '../../components/common/Modal';

export const JobSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [workMode, setWorkMode] = useState(searchParams.get('workMode') || '');
  const [employmentType, setEmploymentType] = useState(searchParams.get('employmentType') || '');
  const [experienceLevel, setExperienceLevel] = useState(searchParams.get('experienceLevel') || '');

  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  // Application Modal state (6 steps)
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyStep, setApplyStep] = useState(1);
  const [selectedResume, setSelectedResume] = useState('Primary_ATS_Resume_2026.pdf');
  const [coverLetter, setCoverLetter] = useState('');
  const [qAnswers, setQAnswers] = useState({ yearsExp: '0-1 year', noticePeriod: 'Immediate' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (keyword) params.append('keyword', keyword);
      if (location) params.append('location', location);
      if (workMode) params.append('workMode', workMode);
      if (employmentType) params.append('employmentType', employmentType);
      if (experienceLevel) params.append('experienceLevel', experienceLevel);

      const res = await apiFetch(`/jobs?${params.toString()}`);
      const list = res.data || [];
      setJobs(list);
      if (list.length > 0 && !selectedJob) {
        setSelectedJob(list[0]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchJobs();
    }, 300);
    return () => clearTimeout(timer);
  }, [keyword, location, workMode, employmentType, experienceLevel]);

  const handleApplyClick = () => {
    setApplyStep(1);
    setCoverLetter(`Dear Hiring Manager at ${selectedJob?.company?.name || 'Company'},\n\nI am very excited to apply for the ${selectedJob?.title} role. With my background in ${selectedJob?.skills?.join(', ') || 'software engineering'}, I am confident in delivering value to your team.`);
    setApplyModalOpen(true);
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await apiFetch('/applications/apply', {
        method: 'POST',
        body: JSON.stringify({
          jobId: selectedJob.id || selectedJob._id,
          coverLetter,
          resumeName: selectedResume,
          answers: [
            { question: 'Years of Experience', answer: qAnswers.yearsExp },
            { question: 'Notice Period', answer: qAnswers.noticePeriod }
          ]
        })
      });
      setSubmittedApp(res.data);
      setApplyStep(6);
    } catch (err) {
      alert(err.message || 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer title="Global Job Search" subtitle="Discover fresher, entry-level, and international career opportunities across 197 countries.">
      {/* Search Header Bar */}
      <div className="glass-card" style={{ padding: '16px', marginBottom: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#64748b' }} />
          <input
            type="text"
            placeholder="Job title, skill, or keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
          />
        </div>
        <div style={{ position: 'relative', flex: '1 1 200px' }}>
          <MapPin size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: '#64748b' }} />
          <input
            type="text"
            placeholder="Country, city, or Remote..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: '100%', padding: '9px 12px 9px 36px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.9rem' }}
          />
        </div>
        <button
          onClick={() => setShowFilterDrawer(!showFilterDrawer)}
          style={{ padding: '9px 16px', borderRadius: '8px', border: '1px solid #2563eb', background: '#eff6ff', color: '#2563eb', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <Filter size={16} /> Filters
        </button>
      </div>

      {/* Responsive Main Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '20px' }} className="job-search-layout">
        {/* Left Column: Job List */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>
              {loading ? 'Searching opportunities...' : `${jobs.length} jobs available`}
            </span>
          </div>

          {loading ? (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading verified job opportunities...</div>
          ) : error ? (
            <div className="glass-card" style={{ padding: '30px', textAlign: 'center', color: '#ef4444' }}>{error}</div>
          ) : jobs.length === 0 ? (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
              No jobs found matching your criteria. Try adjusting your filters.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {jobs.map((job) => {
                const isSelected = selectedJob && (selectedJob.id === job.id || selectedJob._id === job._id);
                return (
                  <div
                    key={job.id || job._id}
                    onClick={() => setSelectedJob(job)}
                    className="glass-card"
                    style={{
                      padding: '16px',
                      cursor: 'pointer',
                      borderLeft: isSelected ? '4px solid #2563eb' : '1px solid var(--border-soft)',
                      background: isSelected ? '#f8fafc' : '#fff'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                      <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{job.title}</h4>
                      {job.experienceLevel === 'fresher' && (
                        <span style={{ fontSize: '0.72rem', background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                          Fresher Friendly
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#2563eb', fontWeight: 600, marginBottom: '6px' }}>
                      {job.company?.name || 'Top Company'}
                    </div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '0.8rem', color: '#64748b', flexWrap: 'wrap', marginBottom: '10px' }}>
                      <span>📍 {job.location || 'Remote'}</span>
                      <span>💼 {job.workMode || 'Full-time'}</span>
                      {job.salaryRange && <span>💰 {job.salaryRange}</span>}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {(job.skills || []).slice(0, 4).map((sk, idx) => (
                        <span key={idx} style={{ fontSize: '0.75rem', background: '#f1f5f9', color: '#475569', padding: '2px 8px', borderRadius: '4px' }}>
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Job Details Preview */}
        <div style={{ position: 'sticky', top: '90px', alignSelf: 'start' }}>
          {selectedJob ? (
            <div className="glass-card" style={{ padding: '24px', background: '#fff' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '1.25rem', color: '#0f172a', fontWeight: 800 }}>{selectedJob.title}</h3>
                  <div style={{ fontSize: '0.95rem', color: '#2563eb', fontWeight: 600 }}>{selectedJob.company?.name}</div>
                </div>
                <button onClick={handleApplyClick} className="btn-gradient" style={{ padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>
                  Apply Now
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', background: '#f8fafc', padding: '12px', borderRadius: '8px', margin: '16px 0', fontSize: '0.85rem', color: '#334155' }}>
                <div><strong>Location:</strong> {selectedJob.location}</div>
                <div><strong>Work Mode:</strong> {selectedJob.workMode}</div>
                <div><strong>Experience:</strong> {selectedJob.experienceLevel}</div>
                <div><strong>Salary:</strong> {selectedJob.salaryRange || 'Competitive'}</div>
                {selectedJob.visaSponsorship && (
                  <div style={{ gridColumn: '1 / -1', color: '#16a34a', fontWeight: 600 }}>✓ Visa Sponsorship Available</div>
                )}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <h5 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '0.95rem' }}>Job Overview</h5>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {selectedJob.description}
                </p>
              </div>

              {selectedJob.responsibilities && (
                <div style={{ marginBottom: '16px' }}>
                  <h5 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '0.95rem' }}>Key Responsibilities</h5>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                    {selectedJob.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}

              {selectedJob.requirements && (
                <div style={{ marginBottom: '16px' }}>
                  <h5 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '0.95rem' }}>Requirements</h5>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                    {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}

              <button onClick={handleApplyClick} className="btn-gradient" style={{ width: '100%', padding: '12px', marginTop: '16px', borderRadius: '8px', cursor: 'pointer' }}>
                Start Application Workflow
              </button>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
              Select a job from the list to view complete details and apply.
            </div>
          )}
        </div>
      </div>

      {/* 6-Step Application Modal */}
      <Modal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} title={`Apply: ${selectedJob?.title || ''}`}>
        <div style={{ padding: '8px 0' }}>
          {/* Progress Indicators */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
            {['1. Resume', '2. Cover Letter', '3. Questions', '4. Review', '5. Submit'].map((st, idx) => (
              <span key={idx} style={{ fontSize: '0.75rem', fontWeight: applyStep === idx + 1 ? 700 : 400, color: applyStep === idx + 1 ? '#2563eb' : '#64748b' }}>
                {st}
              </span>
            ))}
          </div>

          {applyStep === 1 && (
            <div>
              <h4 style={{ margin: '0 0 10px 0' }}>Step 1: Select Resume</h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Choose the ATS resume you would like to submit with this application.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0' }}>
                {['Primary_ATS_Resume_2026.pdf', 'Frontend_Engineer_Fresher_Resume.pdf'].map((rName, i) => (
                  <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', borderRadius: '8px', border: selectedResume === rName ? '2px solid #2563eb' : '1px solid #cbd5e1', cursor: 'pointer' }}>
                    <input type="radio" name="resume" checked={selectedResume === rName} onChange={() => setSelectedResume(rName)} />
                    <FileText size={18} color="#2563eb" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{rName}</span>
                  </label>
                ))}
              </div>
              <button onClick={() => setApplyStep(2)} className="btn-gradient" style={{ width: '100%', padding: '10px' }}>Continue to Cover Letter</button>
            </div>
          )}

          {applyStep === 2 && (
            <div>
              <h4 style={{ margin: '0 0 10px 0' }}>Step 2: Cover Letter</h4>
              <textarea
                rows={6}
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.85rem', fontFamily: 'inherit' }}
              />
              <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                <button onClick={() => setApplyStep(1)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>Back</button>
                <button onClick={() => setApplyStep(3)} className="btn-gradient" style={{ flex: 2, padding: '10px' }}>Continue to Questions</button>
              </div>
            </div>
          )}

          {applyStep === 3 && (
            <div>
              <h4 style={{ margin: '0 0 10px 0' }}>Step 3: Screening Questions</h4>
              <div style={{ marginBottom: '12px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Years of Experience</label>
                <select value={qAnswers.yearsExp} onChange={(e) => setQAnswers({ ...qAnswers, yearsExp: e.target.value })} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                  <option value="0-1 year">0-1 year (Fresher / Student)</option>
                  <option value="1-3 years">1-3 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Notice Period</label>
                <select value={qAnswers.noticePeriod} onChange={(e) => setQAnswers({ ...qAnswers, noticePeriod: e.target.value })} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                  <option value="Immediate">Immediate / Student</option>
                  <option value="15 Days">15 Days</option>
                  <option value="30 Days">30 Days</option>
                </select>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setApplyStep(2)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>Back</button>
                <button onClick={() => setApplyStep(4)} className="btn-gradient" style={{ flex: 2, padding: '10px' }}>Review Application</button>
              </div>
            </div>
          )}

          {applyStep === 4 && (
            <div>
              <h4 style={{ margin: '0 0 10px 0' }}>Step 4: Review Application</h4>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '16px' }}>
                <div><strong>Role:</strong> {selectedJob?.title}</div>
                <div><strong>Company:</strong> {selectedJob?.company?.name}</div>
                <div><strong>Selected Resume:</strong> {selectedResume}</div>
                <div><strong>Notice Period:</strong> {qAnswers.noticePeriod}</div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={() => setApplyStep(3)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>Back</button>
                <button onClick={() => setApplyStep(5)} className="btn-gradient" style={{ flex: 2, padding: '10px' }}>Proceed to Submit</button>
              </div>
            </div>
          )}

          {applyStep === 5 && (
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <ShieldCheck size={48} color="#2563eb" style={{ margin: '0 auto 12px' }} />
              <h4>Ready to Submit?</h4>
              <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px' }}>Your profile & resume will be delivered directly to {selectedJob?.company?.name}'s recruiting team.</p>
              <button onClick={handleFinalSubmit} disabled={isSubmitting} className="btn-gradient" style={{ width: '100%', padding: '12px' }}>
                {isSubmitting ? 'Submitting Application...' : 'Confirm & Submit Application'}
              </button>
            </div>
          )}

          {applyStep === 6 && (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <CheckCircle2 size={54} color="#16a34a" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ margin: '0 0 8px 0', color: '#0f172a' }}>Application Submitted!</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '20px' }}>
                Your application for <strong>{selectedJob?.title}</strong> at {selectedJob?.company?.name} was received.
              </p>
              <button onClick={() => { setApplyModalOpen(false); navigate('/applications/me'); }} className="btn-gradient" style={{ width: '100%', padding: '12px' }}>
                Track Application Status
              </button>
            </div>
          )}
        </div>
      </Modal>
    </PageContainer>
  );
};

export default JobSearch;

