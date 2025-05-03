'use client';

import { Recording } from '@/types';

interface RecordingSummaryProps {
  recording: Recording;
}

export default function RecordingSummary({ recording }: RecordingSummaryProps) {
  if (recording.status === 'processing') {
    return (
      <div className="recording-summary">
        <div className="summary-empty">
          <svg className="animate-spin" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>
            This recording is currently being processed. Check back soon for results.
          </p>
        </div>
      </div>
    );
  }

  if (recording.concerns.length === 0) {
    return (
      <div className="recording-summary">
        <div className="summary-empty">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p>
            No concerns were detected in this recording.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="recording-summary">
      <h3 className="summary-title">
        Detected Concerns
      </h3>
      <div className="concern-list">
        {recording.concerns.map((concern) => (
          <div key={concern.id} className="concern-card">
            <div className="concern-header">
              <div>
                {concern.type === 'threatening' && (
                  <span className="concern-type-badge concern-threatening">
                    Threatening
                  </span>
                )}
                {concern.type === 'intimidating' && (
                  <span className="concern-type-badge concern-intimidating">
                    Intimidating
                  </span>
                )}
                {concern.type === 'hostile' && (
                  <span className="concern-type-badge concern-hostile">
                    Hostile
                  </span>
                )}
                <span className="concern-timestamp">
                  {concern.timestamp}
                </span>
              </div>
              <div className="concern-confidence">
                <span>Confidence: {Math.round(concern.confidence * 100)}%</span>
              </div>
            </div>
            
            <div>
              <p className="concern-description">{concern.description}</p>
              
              <div className="concern-transcription">
                <h4 className="transcription-label">Transcription</h4>
                <p className="transcription-text">"{concern.transcription}"</p>
              </div>
            </div>
            
            <div className="concern-actions">
              <button className="concern-action-button">
                Play Audio Segment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}