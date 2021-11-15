import { CurrentUser, LoginReturnType } from '../../types/auth'
import { LoginInputsType } from '../../types/input'
import { api } from './api'

export const login = async (data: LoginInputsType) => {
  const res = await api.post<LoginReturnType>('/users/login', data)
  return res.data
}

export const logout = async () => {
  const res = await api.post<boolean>('/users/logout')
  return res.data
}

export const fetchCurrentUser = async () => {
  const res = await api.get<CurrentUser>('/auth/me')
  return res.data
}
