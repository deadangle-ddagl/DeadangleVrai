import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from './db'
import { compare } from 'bcryptjs'

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await prisma.user.findUnique({ 
          where: { email: credentials.email } 
        })
        return user && await compare(credentials.password, user.password) 
          ? { id: user.id, email: user.email } 
          : null
      }
    })
  ]
})
