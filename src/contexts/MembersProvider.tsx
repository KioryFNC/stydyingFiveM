// src/contexts/MembersProvider.tsx
import { useState } from "react";
import { MembersContext } from "./MembersContext";

const generateRandomID = () => Math.floor(Math.random() * 9999).toString()

interface Member {
  id: string
  name: string
  role: string
  status: string
  goal: number
}

export const MembersProvider = ({ children }: { children: React.ReactNode }) => {
  const [members, setMembers] = useState<Member[]>([
    { id: "1", name: "Yuri", role: "Admin", status: "Online", goal: 100 },
    { id: "2", name: "Diego", role: "Member", status: "Offline", goal: 10 },
    { id: "3", name: "Alfredo", role: "Member", status: "Online", goal: 100 },
    { id: "4", name: "Godoberto", role: "Member", status: "Offline", goal: 10 },
    { id: "5", name: "Bruce Benner", role: "Member", status: "Online", goal: 100 },
    { id: "6", name: "William shakespeare", role: "Member", status: "Offline", goal: 10 },
    { id: "7", name: "Joselito", role: "Member", status: "Online", goal: 100 },
    { id: "8", name: "Denis Adalbenis", role: "Member", status: "Offline", goal: 10 },
    { id: "9", name: "Lucia johnson", role: "Member", status: "Offline", goal: 10 },
    { id: "10", name: "Michael Jackson", role: "Member", status: "Offline", goal: 10 },
  ])

  const inviteMember = (name: string, role: string, status: string, goal: number) => {
    const newMember: Member = { id: generateRandomID(), name, role, status, goal }
    setMembers((prev) => [...prev, newMember])
  }

  const removeMember = (id: string) => {
    setMembers((prev) => prev.filter((member) => member.id !== id))
  }

  const promoteMember = (id: string) => {
    setMembers((prev) =>
      prev.map((member) => (member.id === id ? { ...member, role: "Admin" } : member))
    )
  }

  const demoteMember = (id: string) => {
    setMembers((prev) =>
      prev.map((member) => (member.id === id ? { ...member, role: "Member" } : member))
    )
  }

  return (
    <MembersContext.Provider value={{ members, inviteMember, removeMember, promoteMember, demoteMember }}>
      {children}
    </MembersContext.Provider>
  )
}