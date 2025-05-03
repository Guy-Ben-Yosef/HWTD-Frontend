'use client';

interface DashboardHeaderProps {
  userName: string;
}

export default function DashboardHeader({ userName }: DashboardHeaderProps) {
  return (
    <div className="dashboard-header">
      <div>
        <h1 className="dashboard-title">Welcome, {userName}</h1>
        <p className="dashboard-subtitle">
          Monitor and review audio analysis from your environment
        </p>
      </div>
      
      <div>
        <button className="btn btn-primary">
          <svg className="mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Upload New Recording
        </button>
      </div>
    </div>
  );
}