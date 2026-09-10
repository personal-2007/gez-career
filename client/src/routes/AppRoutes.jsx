import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Landing from '../pages/public/Landing';
import About from '../pages/public/About';
import Features from '../pages/public/Features';
import Pricing from '../pages/public/Pricing';
import Countries from '../pages/public/Countries';
import Companies from '../pages/public/Companies';
import Contact from '../pages/public/Contact';
import NotFound from '../pages/public/NotFound';

// Auth Pages
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import VerifyEmail from '../pages/auth/VerifyEmail';
import OTPVerification from '../pages/auth/OTPVerification';

// Onboarding Pages
import Welcome from '../pages/onboarding/Welcome';
import CareerStatus from '../pages/onboarding/CareerStatus';
import BasicInformation from '../pages/onboarding/BasicInformation';
import Skills from '../pages/onboarding/Skills';
import Education from '../pages/onboarding/Education';
import Experience from '../pages/onboarding/Experience';
import ResumeUpload from '../pages/onboarding/ResumeUpload';
import CareerPreferences from '../pages/onboarding/CareerPreferences';
import Complete from '../pages/onboarding/Complete';

// Dashboard & App Pages
import Dashboard from '../pages/dashboard/Dashboard';
import CareerReadiness from '../pages/dashboard/CareerReadiness';
import RecommendedJobs from '../pages/dashboard/RecommendedJobs';
import RecommendedSkills from '../pages/dashboard/RecommendedSkills';
import Activity from '../pages/dashboard/Activity';

// Jobs
import JobSearch from '../pages/jobs/JobSearch';
import SearchResults from '../pages/jobs/SearchResults';
import JobDetailsPage from '../pages/jobs/JobDetails';
import SavedJobs from '../pages/jobs/SavedJobs';
import JobAlerts from '../pages/jobs/JobAlerts';
import SearchHistory from '../pages/jobs/SearchHistory';

// Companies
import CompanySearch from '../pages/companies/CompanySearch';
import CompanyDetails from '../pages/companies/CompanyDetails';
import CompanyJobs from '../pages/companies/CompanyJobs';
import CompanyReviews from '../pages/companies/CompanyReviews';
import CompanySalary from '../pages/companies/CompanySalary';

// Applications
import MyApplications from '../pages/applications/MyApplications';
import ApplyJob from '../pages/applications/ApplyJob';
import ApplicationReview from '../pages/applications/ApplicationReview';
import ApplicationSubmitted from '../pages/applications/ApplicationSubmitted';
import ApplicationDetails from '../pages/applications/ApplicationDetails';
import InterviewSchedule from '../pages/applications/InterviewSchedule';

// Profile
import MyProfile from '../pages/profile/MyProfile';
import EditProfile from '../pages/profile/EditProfile';
import ProfileExperience from '../pages/profile/Experience';
import ProfileEducation from '../pages/profile/Education';
import ProfileSkills from '../pages/profile/Skills';
import Projects from '../pages/profile/Projects';
import Certifications from '../pages/profile/Certifications';
import ProfileResume from '../pages/profile/Resume';
import ProfileAnalytics from '../pages/profile/ProfileAnalytics';

// Networking & Feed
import PeopleSearch from '../pages/networking/PeopleSearch';
import PeopleRecommendations from '../pages/networking/PeopleRecommendations';
import UserProfilePage from '../pages/networking/UserProfile';
import Connections from '../pages/networking/Connections';
import Requests from '../pages/networking/Requests';
import Feed from '../pages/networking/Feed';
import CreatePostPage from '../pages/networking/CreatePost';
import PostDetails from '../pages/networking/PostDetails';
import Groups from '../pages/networking/Groups';
import Events from '../pages/networking/Events';

// Messages
import Messages from '../pages/messages/Messages';
import ChatPage from '../pages/messages/Chat';
import RecruiterChat from '../pages/messages/RecruiterChat';
import MessageRequests from '../pages/messages/MessageRequests';

// Reviews
import Reviews from '../pages/reviews/Reviews';
import WriteReview from '../pages/reviews/WriteReview';
import InterviewReviews from '../pages/reviews/InterviewReviews';
import CompanyRatings from '../pages/reviews/CompanyRatings';

// Salary
import SalaryExplorer from '../pages/salary/SalaryExplorer';
import SalaryComparison from '../pages/salary/SalaryComparison';
import MarketInsights from '../pages/salary/MarketInsights';

// AI Suite
import CareerAssistant from '../pages/ai/CareerAssistant';
import AIJobRecommendations from '../pages/ai/JobRecommendations';
import ResumeBuilder from '../pages/ai/ResumeBuilder';
import ResumeAnalyzer from '../pages/ai/ResumeAnalyzer';
import ATSScore from '../pages/ai/ATSScore';
import CoverLetter from '../pages/ai/CoverLetter';
import InterviewPreparation from '../pages/ai/InterviewPreparation';
import MockInterview from '../pages/ai/MockInterview';
import AIInterviewFeedback from '../pages/ai/InterviewFeedback';
import AISkillGap from '../pages/ai/SkillGap';
import CareerRoadmap from '../pages/ai/CareerRoadmap';
import JobMatching from '../pages/ai/JobMatching';
import ProfileOptimization from '../pages/ai/ProfileOptimization';

// Learning
import LearningHome from '../pages/learning/LearningHome';
import Courses from '../pages/learning/Courses';
import CourseDetails from '../pages/learning/CourseDetails';
import MyLearning from '../pages/learning/MyLearning';
import SkillTests from '../pages/learning/SkillTests';
import Certificates from '../pages/learning/Certificates';

// Notifications & Settings
import Notifications from '../pages/notifications/Notifications';
import Settings from '../pages/settings/Settings';
import AccountSettings from '../pages/settings/AccountSettings';
import PrivacySettings from '../pages/settings/PrivacySettings';
import NotificationSettings from '../pages/settings/NotificationSettings';
import JobPreferences from '../pages/settings/JobPreferences';
import Security from '../pages/settings/Security';
import Sessions from '../pages/settings/Sessions';
import Help from '../pages/settings/Help';

// Recruiter Portal
import RecruiterDashboard from '../pages/recruiter/RecruiterDashboard';
import CreateJob from '../pages/recruiter/CreateJob';
import ManageJobs from '../pages/recruiter/ManageJobs';
import Applicants from '../pages/recruiter/Applicants';
import CandidateSearch from '../pages/recruiter/CandidateSearch';
import CandidateProfile from '../pages/recruiter/CandidateProfile';
import ScheduleInterview from '../pages/recruiter/ScheduleInterview';
import HiringAnalytics from '../pages/recruiter/HiringAnalytics';

import ProtectedRoute from './ProtectedRoute';
import RecruiterRoute from './RecruiterRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      <Route path="/auth/reset-password" element={<ResetPassword />} />
      <Route path="/auth/verify-email" element={<VerifyEmail />} />
      <Route path="/auth/otp" element={<OTPVerification />} />

      {/* Onboarding */}
      <Route path="/onboarding/welcome" element={<Welcome />} />
      <Route path="/onboarding/career-status" element={<CareerStatus />} />
      <Route path="/onboarding/basic-information" element={<BasicInformation />} />
      <Route path="/onboarding/skills" element={<Skills />} />
      <Route path="/onboarding/education" element={<Education />} />
      <Route path="/onboarding/experience" element={<Experience />} />
      <Route path="/onboarding/resume-upload" element={<ResumeUpload />} />
      <Route path="/onboarding/career-preferences" element={<CareerPreferences />} />
      <Route path="/onboarding/complete" element={<Complete />} />

      {/* Protected App Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/readiness" element={<CareerReadiness />} />
        <Route path="/dashboard/jobs" element={<RecommendedJobs />} />
        <Route path="/dashboard/skills" element={<RecommendedSkills />} />
        <Route path="/dashboard/activity" element={<Activity />} />

        {/* Jobs */}
        <Route path="/jobs/search" element={<JobSearch />} />
        <Route path="/jobs/results" element={<SearchResults />} />
        <Route path="/jobs/details/:id" element={<JobDetailsPage />} />
        <Route path="/jobs/saved" element={<SavedJobs />} />
        <Route path="/jobs/alerts" element={<JobAlerts />} />
        <Route path="/jobs/history" element={<SearchHistory />} />

        {/* Companies */}
        <Route path="/companies/search" element={<CompanySearch />} />
        <Route path="/companies/details/:id" element={<CompanyDetails />} />
        <Route path="/companies/jobs" element={<CompanyJobs />} />
        <Route path="/companies/reviews" element={<CompanyReviews />} />
        <Route path="/companies/salary" element={<CompanySalary />} />

        {/* Applications */}
        <Route path="/applications/me" element={<MyApplications />} />
        <Route path="/applications/apply" element={<ApplyJob />} />
        <Route path="/applications/review" element={<ApplicationReview />} />
        <Route path="/applications/submitted" element={<ApplicationSubmitted />} />
        <Route path="/applications/details/:id" element={<ApplicationDetails />} />
        <Route path="/applications/schedule" element={<InterviewSchedule />} />

        {/* Profile */}
        <Route path="/profile/me" element={<MyProfile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/profile/experience" element={<ProfileExperience />} />
        <Route path="/profile/education" element={<ProfileEducation />} />
        <Route path="/profile/skills" element={<ProfileSkills />} />
        <Route path="/profile/projects" element={<Projects />} />
        <Route path="/profile/certifications" element={<Certifications />} />
        <Route path="/profile/resume" element={<ProfileResume />} />
        <Route path="/profile/analytics" element={<ProfileAnalytics />} />

        {/* Networking */}
        <Route path="/networking/feed" element={<Feed />} />
        <Route path="/networking/people" element={<PeopleSearch />} />
        <Route path="/networking/recommendations" element={<PeopleRecommendations />} />
        <Route path="/networking/user/:id" element={<UserProfilePage />} />
        <Route path="/networking/connections" element={<Connections />} />
        <Route path="/networking/requests" element={<Requests />} />
        <Route path="/networking/post/create" element={<CreatePostPage />} />
        <Route path="/networking/post/:id" element={<PostDetails />} />
        <Route path="/networking/groups" element={<Groups />} />
        <Route path="/networking/events" element={<Events />} />

        {/* Messaging */}
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/chat" element={<ChatPage />} />
        <Route path="/messages/recruiter" element={<RecruiterChat />} />
        <Route path="/messages/requests" element={<MessageRequests />} />

        {/* Reviews */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/write" element={<WriteReview />} />
        <Route path="/reviews/interviews" element={<InterviewReviews />} />
        <Route path="/reviews/ratings" element={<CompanyRatings />} />

        {/* Salary */}
        <Route path="/salary/explorer" element={<SalaryExplorer />} />
        <Route path="/salary/comparison" element={<SalaryComparison />} />
        <Route path="/salary/insights" element={<MarketInsights />} />

        {/* AI Suite */}
        <Route path="/ai/assistant" element={<CareerAssistant />} />
        <Route path="/ai/recommendations" element={<AIJobRecommendations />} />
        <Route path="/ai/resume-builder" element={<ResumeBuilder />} />
        <Route path="/ai/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/ai/ats-score" element={<ATSScore />} />
        <Route path="/ai/cover-letter" element={<CoverLetter />} />
        <Route path="/ai/prep" element={<InterviewPreparation />} />
        <Route path="/ai/mock-interview" element={<MockInterview />} />
        <Route path="/ai/interview-feedback" element={<AIInterviewFeedback />} />
        <Route path="/ai/skill-gap" element={<AISkillGap />} />
        <Route path="/ai/roadmap" element={<CareerRoadmap />} />
        <Route path="/ai/matching" element={<JobMatching />} />
        <Route path="/ai/profile-optimization" element={<ProfileOptimization />} />

        {/* Learning */}
        <Route path="/learning/home" element={<LearningHome />} />
        <Route path="/learning/courses" element={<Courses />} />
        <Route path="/learning/course/:id" element={<CourseDetails />} />
        <Route path="/learning/my-learning" element={<MyLearning />} />
        <Route path="/learning/skill-tests" element={<SkillTests />} />
        <Route path="/learning/certificates" element={<Certificates />} />

        {/* Notifications & Settings */}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings/account" element={<AccountSettings />} />
        <Route path="/settings/privacy" element={<PrivacySettings />} />
        <Route path="/settings/notifications" element={<NotificationSettings />} />
        <Route path="/settings/preferences" element={<JobPreferences />} />
        <Route path="/settings/security" element={<Security />} />
        <Route path="/settings/sessions" element={<Sessions />} />
        <Route path="/settings/help" element={<Help />} />

        {/* Recruiter Portal */}
        <Route element={<RecruiterRoute />}>
          <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
          <Route path="/recruiter/create-job" element={<CreateJob />} />
          <Route path="/recruiter/manage-jobs" element={<ManageJobs />} />
          <Route path="/recruiter/applicants" element={<Applicants />} />
          <Route path="/recruiter/candidate-search" element={<CandidateSearch />} />
          <Route path="/recruiter/candidate/:id" element={<CandidateProfile />} />
          <Route path="/recruiter/schedule" element={<ScheduleInterview />} />
          <Route path="/recruiter/analytics" element={<HiringAnalytics />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
