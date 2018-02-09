import React from 'react';
import renderer from 'react-test-renderer';
// import Heading from 'arui-feather/heading';
import Feedback from '../components/feedback/feedback';

// test('Link changes the class when hovered', () => {
//   const tree = renderer.create(
//     <Heading/>,
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Feedback/>,
  );
  let tree = component.toJSON();
  expect(tree.state).toBeFalsy();

  // tree.state.handleCheckAnonim();

  tree = component.toJSON();
  expect(tree.state).toBeTruthy();
});

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
