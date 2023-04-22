import NextAuth, {NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
          const {username, password} = credentials as any;
          const res = await fetch(`${process.env.API_HOST}/user/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: username,
              password
            })
          });

          const user = await res.json();
          if (res.ok && user) return user;
          else { 
            return null;}
      }
    })
  ],
  session:{

    strategy: "jwt",
    
    },
  callbacks: {
    async jwt({token, user}){
      return {...token, ...user};
    },
    async session({session, token}){
      session.user = token;
      return session;
    }
  },

  pages: {
    signIn: '/users/login',
    signOut: '/'
  }
}
export default NextAuth(authOptions)