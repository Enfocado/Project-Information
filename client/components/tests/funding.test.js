import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Funding from '../funding';

Enzyme.configure({ adapter: new Adapter() });

describe('<Funding />', () => {
  it('renders 1 <Funding /> component', () => {
    const component = shallow(<Funding />);
    expect(component).toHaveLength(1);
  });
});
