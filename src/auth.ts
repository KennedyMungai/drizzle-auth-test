import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth from 'next-auth'
import { db } from './db'

export const {} = NextAuth({
	adapter: DrizzleAdapter(db),
	providers: [],
	callbacks: {
		async session({ session, user, token }: any) {
			return session
		}
	}
})
