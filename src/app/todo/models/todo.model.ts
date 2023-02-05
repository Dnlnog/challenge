export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  body: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
}

export interface TodoCreateDto {
  title: string;
  userId: string;
}

export interface TodoUpdateDto {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
}
