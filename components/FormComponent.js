import React from 'react';
//import PropTypes from 'prop-types';

import './FormComponent.css';

class FormComponent extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
  };

  render() {

    return (
      <div className="SFormComponent">
        Пример компонента
      </div>
    )
    ;

  }

}

export default FormComponent;
