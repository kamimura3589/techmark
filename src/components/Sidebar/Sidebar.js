import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../Footer';

const SidebarCotainer = styled.div`
  background: #f4f7fa;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 180px;
  z-index: 3;
`;

const SideLink = styled(Link)`
  text-decoration: none;
`;

const Sidebar = props => (
  <SidebarCotainer>
    <img src={props.img} />
    <div>{props.username}</div>
    <SideLink to="/">ホーム</SideLink>
    <div>
      {props.categories.map(category => (
        <div key={category.id}>
          <SideLink to={`/categories/${category.id}`}>{category.name}</SideLink>
        </div>
      ))}
    </div>
    <button>カテゴリーを追加</button>
    <Footer />
  </SidebarCotainer>
);

export default Sidebar;
