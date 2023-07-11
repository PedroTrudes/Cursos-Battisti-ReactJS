import React from 'react'

function Nome() {
    const nomeUser = ['carlos', 'pedro', 'lucas']
    const users = nomeUser.map((item) => item)
  return (
    <div>
        <span>Users: {users + ""} </span>
    </div>
  )
}

export default Nome