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

const rolesHierarchy = [
  "Membro", /* posição 0 no nivel de cargos */
  "Gerente", /* 1 */
  "Sub-Líder", /* 2 */
  "Líder" /* 3 */
]



export const MembersProvider = ({ children }: { children: React.ReactNode }) => {
  const [members, setMembers] = useState<Member[]>([
    { id: "1", name: "Yuri", role: "Líder", status: "Online", goal: 100 },
    { id: "2", name: "Diego", role: "Membro", status: "Offline", goal: 10 },
    { id: "3", name: "Alfredo", role: "Membro", status: "Online", goal: 100 },
    { id: "4", name: "Godoberto", role: "Membro", status: "Offline", goal: 10 },
    { id: "5", name: "Bruce Benner", role: "Membro", status: "Online", goal: 100 },
    { id: "6", name: "William shakespeare", role: "Membro", status: "Offline", goal: 10 },
    { id: "7", name: "Joselito", role: "Membro", status: "Online", goal: 100 },
    { id: "8", name: "Denis Adalbenis", role: "Membro", status: "Offline", goal: 10 },
    { id: "9", name: "Lucia johnson", role: "Membro", status: "Offline", goal: 10 },
    { id: "10", name: "Michael Jackson", role: "Membro", status: "Offline", goal: 10 },
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
      prev.map((member) => {
        if (member.id === id) {
          const currentIndex = rolesHierarchy.indexOf(member.role);
          const newRole = currentIndex < rolesHierarchy.length - 1 ? rolesHierarchy[currentIndex + 1] : member.role
          return { ...member, role: newRole } 
        }
        return member
      })
    )
  }

  const demoteMember = (id: string) => {
    setMembers((prev) =>
      prev.map((member) => {
        if (member.id === id) {
          const curreentIndex = rolesHierarchy.indexOf(member.role)
          const newRole = curreentIndex > 0 ? rolesHierarchy[curreentIndex - 1] : member.role
          return { ...member, role: newRole}
        }
        return member
      })
    )
  }

  return (
    <MembersContext.Provider value={{ members, inviteMember, removeMember, promoteMember, demoteMember }}>
      {children}
    </MembersContext.Provider>
  )
}