import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ListElement = ({ name }) => (
  <li className={classNames('menu__list-element')}>
    <p className={classNames('menu__element-title')}>{name}</p>
  </li>
);

ListElement.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListElement;
