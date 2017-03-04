import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ProjectTypeformInstall from '../../modules/components/ProjectTypeformInstall';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProjectTypeformInstall isInstalled={true} />, div);
});

it('render with a div', () =>{
  const renderer = ReactTestUtils.createRenderer();
  renderer.render(<ProjectTypeformInstall isInstalled={true} />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
})



describe('test isInstalled', function() {
  it('with true', function() {
    let page = ReactTestUtils.renderIntoDocument(<ProjectTypeformInstall isInstalled={true} />)
    let div = ReactTestUtils.findRenderedDOMComponentWithClass(page, 'project-green')
    expect(ReactTestUtils.isDOMComponent(div)).toBe(true);
  })

  it('with false', function() {
    let page = ReactTestUtils.renderIntoDocument(<ProjectTypeformInstall isInstalled={false} />)
    let div = ReactTestUtils.findRenderedDOMComponentWithClass(page, 'project-red')
    expect(ReactTestUtils.isDOMComponent(div)).toBe(true);
  })
})
