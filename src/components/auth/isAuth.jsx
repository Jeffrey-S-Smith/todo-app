import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { When } from 'react-if';

function IsAuth({ capability, children }) {

  const { isLoggedIn, can } = useContext(AuthContext);
console.log(isLoggedIn,can(capability));
let canDo = Boolean(capability) ? can(capability): true
  return (
    <When condition={isLoggedIn && canDo}>
      {children}
    </When>
  )
}

export default IsAuth;