import React from 'react'

const RemoteButton = React.lazy(() => import("app_a/Button"));

const ContainerB = () => {
  return (
    <React.Fragment>
      <h1>Hello from the Application B</h1>

      <React.Suspense fallback="Loading Button">
        <RemoteButton>copy from container b</RemoteButton>
      </React.Suspense>
    </React.Fragment>
  )
}

export default ContainerB