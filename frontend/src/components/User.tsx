import React from 'react';

interface IUser {
  name: string,
  email?: string,
}

interface Props{
  user: IUser
}

const User: React.FC<Props> = ({ user }) =>{
  return(
    <div>
    <strong>Nome: { user.name } </strong> <br />
    <strong>E-mail: { user.email || 'Não possui email' } </strong> <br />
    </div>
  );
}

export default User;