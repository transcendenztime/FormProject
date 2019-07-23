import React from 'react';
import renderer from 'react-test-renderer';

import FormComponent from '../components/FormComponent';

test('работа FormComponent', () => {

  const component = renderer.create(
    <FormComponent />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
    
});
