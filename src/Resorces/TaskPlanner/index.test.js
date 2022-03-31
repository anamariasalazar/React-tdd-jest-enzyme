import { shallow } from  "enzyme";
import  TaskPlanner  from  "./index";

describe("<TaskPlanner/>", () => {
	it("should render correctly", () => {
		const  wrapper = shallow(<TaskPlanner  />);
		expect(wrapper).toHaveLength(1);
	});
});