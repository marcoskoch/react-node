import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="ReactNode" />
          <Link to="/apartments">APARTAMENTOS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="Usuario"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
