import { Button, Flex, Heading, Text } from '@radix-ui/themes';
import React from 'react';
import './App.css';
import todoList from './data/todos';
import TodoItem from './TodoItem';

function App() {
  return (
    <Flex className="App" direction="column" gap="5" pt="3">
      <Heading as="h1" m="0">Todo Lists</Heading>

      <Flex justify="end" width="50%" mx="auto">
        <Button>
          <Text as="p" size="6" m="0">+</Text>
        </Button>
      </Flex>

      <Flex width="50%" mx="auto" direction="column" gap="3">
        {
          todoList.map(todo => {
            return (
              <TodoItem key={todo.id} task={todo.task} checked={todo.checked} />
            )
          })
        }
      </Flex>
    </Flex>
  );
}

export default App;
