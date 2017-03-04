import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import EmailText from '../../modules/components/EmailText';
import { Row, Col } from 'reactstrap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const email = 'xunda@xunda.com.br'
  ReactDOM.render(<EmailText email={email} />, div);
});

it('render an email', () =>{
  const renderer = ReactTestUtils.createRenderer();
  const email = 'xunda@xunda.com.br'
  renderer.render(<EmailText email={email} />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe(Row);

})

it('dont change de email passed', function() {
  const email = 'xunda@xunda.com.br'
  let page = ReactTestUtils.renderIntoDocument(<EmailText email={email} />)
  let div = ReactTestUtils.findRenderedDOMComponentWithClass(page, 'col')
  expect(ReactDOM.findDOMNode(div).textContent).toBe('xunda@xunda.com.br')
})
