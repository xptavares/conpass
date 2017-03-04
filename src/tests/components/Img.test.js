import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import Img from '../../modules/components/Img';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const to = 'svg'
  ReactDOM.render(<Img to={to} />, div);
});

it('test attrs', function() {
  const image = {
    to: 'svg',
    className: "clazz",
    height: 20,
    width: 10
  }
  let page = ReactTestUtils.renderIntoDocument(<Img to={image.to} className={image.className} height={image.height} width={image.width} />)
  let div = ReactTestUtils.findRenderedDOMComponentWithTag(page, 'img')
  var imgTag = ReactDOM.findDOMNode(div);
  var imgSrc = imgTag.getAttribute('src');
  var imgClassName = imgTag.getAttribute('class');
  var imgHeight = imgTag.getAttribute('height');
  var imgWidth = imgTag.getAttribute('width');
  expect(imgSrc).toBe("assets/svg")
  expect(imgClassName).toBe("clazz")
  expect(imgHeight).toBe("20")
  expect(imgWidth).toBe("10")
})
