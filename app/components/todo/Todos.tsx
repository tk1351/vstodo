import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import useSWR from 'swr'
import { api } from '../../src/api/api'
import { FETCH_TODOS_API_URL } from '../../src/api/todo'
import { ITodoType } from '../../types/todo'
import TodoItem from './TodoItem'

type TodosProps = {}

const Todos: FC<TodosProps> = () => {
  console.log('todos')
  const router = useRouter()

  const fetcher = async (url: string) => {
    const res = await api.get<[ITodoType[], number]>(url)
    return res.data
  }

  const { data } = useSWR(FETCH_TODOS_API_URL, fetcher, {
    onErrorRetry: (error) => {
      console.log('error', error.response)
      if (error.response.status === 401) return router.replace('/login')
    },
    revalidateOnFocus: false,
  })

  if (!data) return <p>Loading...</p>

  if (data) {
    const todos = data[0]
    return (
      <>
        {todos.map((todo) => (
          <Grid key={todo.id}>
            <TodoItem todo={todo} />
          </Grid>
        ))}
      </>
    )
  }
  return <></>
}

export default Todos
