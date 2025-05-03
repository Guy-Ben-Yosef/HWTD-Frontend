import { Session } from "next-auth";

export interface UserSession extends Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    id?: string | null;
  };
}

export interface Recording {
  id: string;
  fileName: string;
  dateUploaded: string;
  duration: number;
  status: 'processing' | 'analyzed' | 'failed';
  concerns: Concern[];
}

export interface Concern {
  id: string;
  timestamp: string;
  type: 'threatening' | 'intimidating' | 'hostile' | 'other';
  description: string;
  confidence: number;
  transcription: string;
}

export interface AnalysisResult {
  recordingId: string;
  concerns: Concern[];
  summary: string;
  processedDate: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  organization: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
  message: string;
}