import React, { FC } from 'react'
import useSWR from 'swr'
import { api } from '../../src/api/api'
import { FETCH_TODOS_API_URL } from '../../src/api/todo'
import { ITodoType } from '../../types/todo'

type TodosProps = {}

const Todos: FC<TodosProps> = () => {
  const fetcher = async (url: string) => {
    const res = await api.get<[ITodoType[], number]>(url)
    return res.data
  }

  const { data } = useSWR(FETCH_TODOS_API_URL, fetcher)

  if (!data) return <p>Loading...</p>

  if (data) {
    return <div>{JSON.stringify(data)}</div>
  }
  return <></>
}

export default Todos
