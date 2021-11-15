import { LoginReturnType } from '../../types/auth'
import { LoginInputsType } from '../../types/input'
import { api } from './api'

export const login = async (data: LoginInputsType) => {
  const res = await api.post<LoginReturnType>('/users/login', data)
  return res.data
}
