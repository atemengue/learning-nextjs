'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  if(session.data?.user) {
    return (
      <div> Connecte: Page profil</div>
    )
  } else {
    return <div>Deconnecte</div>
  }
}