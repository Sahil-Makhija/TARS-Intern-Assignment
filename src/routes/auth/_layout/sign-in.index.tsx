import { createFileRoute } from '@tanstack/react-router'

import { SignIn } from '@/pages'

export const Route = createFileRoute('/auth/_layout/sign-in/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SignIn />
    </>
  )
}
