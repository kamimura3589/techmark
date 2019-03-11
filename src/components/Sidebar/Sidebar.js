import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../Modal';
import Footer from '../Footer';

import {BulletList} from 'react-content-loader';

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
  color: rgb(107, 121, 137);
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  padding-left: 16px;
`;

const H2 = styled.h2`
  color: rgb(107, 121, 137);
  font-size: 18px;
  padding-left: 16px;
  margin-top: 16px;
`;

const Sidebar = props => (
  <SidebarCotainer>
    <img src={props.img} />
    <div>{props.username}</div>
    <SideLink to="/">ホーム</SideLink>
    <H2>カテゴリー</H2>
    {props.isLoading ? (
      <BulletList />
    ) : (
      <div>
        {props.categories.map(category => (
          <div key={category.id}>
            <SideLink to={`/categories/${category.id}`}>
              {category.name}
            </SideLink>
          </div>
        ))}
      </div>
    )}
    <button onClick={props.modal}>カテゴリーを追加</button>
    {props.showMenu ? <Modal /> : null}
    <Footer />
  </SidebarCotainer>
);

export default Sidebar;
