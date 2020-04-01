import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  completed: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (i: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <input type='submit' value='add todo' />
      </form>
      <section>
        {todos.map((todo: ITodo, i: number) => (
          <Fragment key={i}>
            <div
              style={{
                textDecoration: todo.completed ? 'line-through' : '',
              }}
            >
              {todo.text}
            </div>{' '}
            <button type='button' onClick={() => completeTodo(i)}>
              {todo.completed ? 'incomplete' : 'complete'}
            </button>
            <button type='button' onClick={() => removeTodo(i)}>
              &times;
            </button>
          </Fragment>
        ))}
      </section>
    </>
  );
}

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);
