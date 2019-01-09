export interface LogEntry {
  id?: string;
  title: string;
  value: number;
  notes: string;
  categoryId: number;
  subCategoryId?: number;
  arePointsCompleted: boolean;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  updatedBy: string;
}
