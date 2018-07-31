import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Creator from '../creator';

Enzyme.configure({ adapter: new Adapter() });

describe('<Creator />', () => {
  it('renders 1 <Creator /> component', () => {
    const component = shallow(<Creator />);
    expect(component).toHaveLength(1);
  });
});
