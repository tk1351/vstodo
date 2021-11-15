import { atom } from 'recoil'
import { CurrentUser } from '../../types/auth'

export const currentUserState = atom<CurrentUser | undefined | null>({
  key: 'currentUserState',
  default: undefined,
})
