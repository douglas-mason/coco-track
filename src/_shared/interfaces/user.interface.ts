export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  departmentId: string;
  managerId: string;
  createdAt: Date;
  updatedAt: Date;
}