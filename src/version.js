import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardBody } from 'reactstrap';

const VersionPage = ({ version, host }) => {
  return (
    <Card className="mt-2">
      <CardHeader>
        <h4>Deployment Details</h4>
      </CardHeader>
      <CardBody>
        <dl className="row">
          <dt className="col-3">Build Version</dt>
          <dd className="col-9">
            <p>{version}</p>
          </dd>
        </dl>
        <dl className="row">
          <dt className="col-3">Host</dt>
          <dd className="col-9">
            <p>{host}</p>
          </dd>
        </dl>
      </CardBody>
    </Card>
  );
};

VersionPage.propTypes = {
  version: PropTypes.string.isRequired,
  host: PropTypes.string.isRequired,
};

const wrapper = document.getElementById('react-root');
const element = <VersionPage {...window.reactProps} />;
if (wrapper) {
  ReactDOM.render(element, wrapper);
}
