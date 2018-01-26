import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="R/GA Engineering Blog" />
    <Navbar />
    <Jumbotron title="R/GA Engineering" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
