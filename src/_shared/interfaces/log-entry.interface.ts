export interface LogEntry {
  id: string;
  value: number;
  notes: string;
  categoryId: number;
  subCategoryId?: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
}