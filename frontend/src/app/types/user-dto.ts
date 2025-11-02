export interface UserDto {
    id: string;
    login: string;
    role: 'user' | 'admin';
    password: string;

}
