import { Check, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTodos, toggleTodo, deleteTodo } from "../actions";

export async function TodoList() {
  const todos = await getTodos();

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Nenhum todo encontrado. Adicione um novo!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <div 
          key={todo.id} 
          className="flex items-center gap-2 p-3 border rounded-lg bg-background"
        >
          <form action={toggleTodo.bind(null, todo.id)} className="flex-shrink-0">
            <Button 
              type="submit"
              variant={todo.completed ? "default" : "outline"}
              size="sm"
              className="h-8 w-8 p-0"
            >
              {todo.completed ? (
                <Check className="h-4 w-4" />
              ) : (
                <X className="h-4 w-4" />
              )}
            </Button>
          </form>
          
          <span 
            className={`flex-1 ${
              todo.completed ? "line-through text-muted-foreground" : ""
            }`}
          >
            {todo.text}
          </span>
          
          <form action={deleteTodo.bind(null, todo.id)} className="flex-shrink-0">
            <Button 
              type="submit"
              variant="outline"
              size="sm"
              className="h-8 w-8 p-0 text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </form>
        </div>
      ))}
    </div>
  );
}