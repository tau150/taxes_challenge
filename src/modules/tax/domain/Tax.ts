export interface Tax {
  id: string;
  name: string;
  year: string;
  submissions?: Record<string, string>[];
}
