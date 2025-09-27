export interface UserType {
  name: string;
  email: string;
  password: string;
  authLevel: 'admin' | 'mod' | 'user';
}

export interface SessionData {
  email: string;
  password: string;
  role: 'admin' | 'mod' | 'user';
  permissions: Permission;
}

export interface Permission {
  canRead: boolean;
  canCreate: boolean;
  canEdit: boolean;
  canDelete: boolean;
}
