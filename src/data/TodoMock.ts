export interface TodoDataItem {
  id: string;
  title: string;
  done: boolean;
}

export const todoItems: TodoDataItem[] = [
  { id: "1", title: "Apprendre React", done: true },
  { id: "2", title: "Apprendre React Native", done: false },
  { id: "3", title: "Apprendre l'AIDD", done: false },
  { id: "4", title: "Apprendre l'Anglais", done: true },
  { id: "5", title: "Apprendre le Japonais", done: false },
  { id: "6", title: "Apprendre la cuisine", done: true },
  { id: "7", title: "Apprendre la couture", done: false },
  { id: "8", title: "Apprendre le Black Jack", done: false },
];
