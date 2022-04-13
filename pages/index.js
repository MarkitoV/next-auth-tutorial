import { useSession } from 'next-auth/react';

function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{ session.user.name }</h1>
      <p>{ session.user.email }</p>
      <img src={ session.user.image } alt=""/>
    </div>
  )
}

export default HomePage

// NextAuth.js - Login con Nextjs, Introducción Práctica Paso a paso
// 35:14