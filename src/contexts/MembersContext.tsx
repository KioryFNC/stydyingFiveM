// src/contexts/MembersContext.tsx
import { createContext, useContext } from "react";

interface Member {
  id: string
  name: string
  role: string
  status: string
  goal: number
}

interface MembersContextType {
  members: Member[]
  inviteMember: (name: string, role?: string, status?: string, goal?: number) => void
  removeMember: (id: string) => void
  promoteMember: (id: string) => void
  demoteMember: (id: string) => void
  filterType: string
  isAscending: boolean
  toggleFilter: (type: string) => void
  sortMembers: (members: Member[], filterType: string, isAscending: boolean) => Member[]
}

export const MembersContext = createContext<MembersContextType | undefined>(undefined)

export const useMembers = () => {
  const context = useContext(MembersContext)
  if (!context) {
    throw new Error("useMembers must be used within a MembersProvider")
  }
  return context
}