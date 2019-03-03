import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = props => (
  <div>
    Sidebar
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
  </div>
);

export default Sidebar;
