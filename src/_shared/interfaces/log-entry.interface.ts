export interface LogEntry {
  id?: string;
  description: string;
  value: number;
  notes: string;
  categoryId: number;
  subCategoryId?: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
}
