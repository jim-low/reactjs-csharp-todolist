export interface ITodo {
  id: number;
  task: string;
  checked: boolean;
}

const todoList: ITodo[] = [
  {
    id: 1,
    task: "Item 1",
    checked: false,
  },
  {
    id: 2,
    task: "Item 2",
    checked: true,
  },
  {
    id: 3,
    task: "Item 3",
    checked: false,
  },
  {
    id: 4,
    task: "Item 4",
    checked: true,
  },
  {
    id: 5,
    task: "Item 5",
    checked: false,
  },
]

export default todoList;
