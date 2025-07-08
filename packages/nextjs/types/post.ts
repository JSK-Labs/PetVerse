export interface User {
    name: string;
    avatar: string;
    role: string;
    verified: boolean;
  }
  
  export interface Post {
    id: number;
    user: User;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    timestamp: string;
    tokens: number;
    campaign?: boolean;
  }
  