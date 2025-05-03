'use client';

import { useState } from 'react';
import { Recording } from '@/types';
import RecordingSummary from './RecordingSummary';

interface RecordingsListProps {
  recordings: Recording[];
}

export default function RecordingsList({ recordings }: RecordingsListProps) {
  const [expandedRecording, setExpandedRecording] = useState<string | null>(null);

  const toggleRecording = (id: string) => {
    if (expandedRecording === id) {
      setExpandedRecording(null);
    } else {
      setExpandedRecording(id);
    }
  };

  return (
    <div>
      <div className="recordings-header">
        <h2 className="recordings-title">Recent Recordings</h2>
      </div>
      <ul className="recordings-list">
        {recordings.length === 0 ? (
          <li className="recording-item">
            <p className="recording-empty">No recordings found</p>
          </li>
        ) : (
          recordings.map((recording) => (
            <li key={recording.id} className="recording-item">
              <div
                className="recording-header"
                onClick={() => toggleRecording(recording.id)}
              >
                <div className="recording-title-row">
                  <p className="recording-title">
                    {recording.fileName}
                  </p>
                  <div>
                    {recording.status === 'processing' ? (
                      <span className="recording-badge recording-badge-processing">
                        Processing
                      </span>
                    ) : recording.concerns.length > 0 ? (
                      <span className="recording-badge recording-badge-concern">
                        {recording.concerns.length} Concerns
                      </span>
                    ) : (
                      <span className="recording-badge recording-badge-clear">
                        All Clear
                      </span>
                    )}
                  </div>
                </div>
                <div className="recording-meta-row">
                  <div className="recording-meta-item">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Duration: {Math.floor(recording.duration / 60)}m {recording.duration % 60}s</span>
                  </div>
                  <div className="recording-meta-item">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>
                      {new Date(recording.dateUploaded).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </div>
              
              {expandedRecording === recording.id && (
                <RecordingSummary recording={recording} />
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}