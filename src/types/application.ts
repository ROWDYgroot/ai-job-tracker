export interface Application {
  _id?: string;
  userId: string;
  company: string;
  role: string;
  description: string;
  date: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
  url?: string;
  notes?: string;
}