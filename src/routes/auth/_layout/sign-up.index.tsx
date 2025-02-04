import { createFileRoute } from '@tanstack/react-router'

import { SignUp } from '@/pages'

export const Route = createFileRoute('/auth/_layout/sign-up/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <SignUp />
    </>
  )
}
