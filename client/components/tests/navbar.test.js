import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import NavBar from '../navbar';

Enzyme.configure({ adapter: new Adapter() });

describe('<NavBar />', () => {
  it('renders 1 <NavBar /> component', () => {
    const component = shallow(<NavBar />);
    expect(component).toHaveLength(1);
  });
});
