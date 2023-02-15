export interface UserI {
    name: string;
    email: string;
    password: string;
    img?: string;
    rol: 'ADMIN_ROLE' | 'USER_ROLE';
    state?: boolean;
    google?: boolean;
}