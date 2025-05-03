import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import RecordingsList from '@/components/dashboard/RecordingsList';

// Mock data - in a real app this would come from an API
const mockRecordings = [
  {
    id: '1',
    fileName: 'room_a_morning_20250502.mp3',
    dateUploaded: '2025-05-02T09:15:00Z',
    duration: 3620,
    status: 'analyzed',
    concerns: [
      {
        id: 'c1',
        timestamp: '00:15:23',
        type: 'threatening',
        description: 'Raised voice and threatening language',
        confidence: 0.87,
        transcription: 'If you don\'t stop that right now I\'m going to make you sorry!'
      },
      {
        id: 'c2',
        timestamp: '00:32:45',
        type: 'intimidating',
        description: 'Intimidating behavior detected',
        confidence: 0.76,
        transcription: 'Nobody is coming to help you, so you better listen to me.'
      }
    ]
  },
  {
    id: '2',
    fileName: 'room_b_afternoon_20250502.mp3',
    dateUploaded: '2025-05-02T14:30:00Z',
    duration: 2850,
    status: 'analyzed',
    concerns: []
  },
  {
    id: '3',
    fileName: 'room_a_evening_20250502.mp3',
    dateUploaded: '2025-05-02T18:45:00Z',
    duration: 3050,
    status: 'processing',
    concerns: []
  }
];

export default async function DashboardPage() {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect('/');
  }

  return (
    <div className="dashboard-container">
      <div className="container">
        <DashboardHeader userName={session.user.name || 'User'} />
        
        <div className="stats-grid">
          <div className="stats-card">
            <h3 className="stats-label">Total Recordings</h3>
            <p className="stats-value">{mockRecordings.length}</p>
          </div>
          
          <div className="stats-card">
            <h3 className="stats-label">Concerns Detected</h3>
            <p className="stats-value stats-value-warning">
              {mockRecordings.reduce((total, recording) => total + recording.concerns.length, 0)}
            </p>
          </div>
          
          <div className="stats-card">
            <h3 className="stats-label">Processing</h3>
            <p className="stats-value stats-value-success">
              {mockRecordings.filter(recording => recording.status === 'processing').length}
            </p>
          </div>
        </div>
        
        <div className="recordings-container">
          <RecordingsList recordings={mockRecordings} />
        </div>
      </div>
    </div>
  );
}