import { Flex, Switch, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import './todo-item.css'

const TodoItem = ({ task, checked }: { task: string, checked: boolean }) => {
  const [isCompleted, setIsCompleted] = useState(checked);

  return (
    <Flex className="todo-item" align="center" gap="3" px="5" py="3">
      <Switch
        checked={isCompleted}
        color="iris"
        onCheckedChange={e => setIsCompleted(e)}
      />
      <Text as="p" size="3" m="0">{task}</Text>
    </Flex>
  )
}

export default TodoItem
