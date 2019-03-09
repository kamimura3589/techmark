import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarCotainer = styled.div`
  width: 280px;
  background: #f4f7fa;
`;

const Sidebar = props => (
  <SidebarCotainer>
    <input
      type="text"
      name="name"
      placeholder="カテゴリーの追加"
      onChange={props.onChange}
      value={props.name}
    />
    <button onClick={props.Add}>カテゴリーを追加する</button>
    <div>
      {props.categories.map(category => (
        <div key={category.id}>
          <Link to={`/categories/${category.id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  </SidebarCotainer>
);

export default Sidebar;
