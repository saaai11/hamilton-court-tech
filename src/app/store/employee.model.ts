export interface Employee {
  id: number;
  name: string;
  email: string;
  contactNumber: string;
}

export interface Employees {
  employees: Employee[];
}
