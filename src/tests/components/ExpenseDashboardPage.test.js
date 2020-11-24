import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";

//lo snapshot si occupa di tenere traccia la prima volta di come un componente viene renderizzato e successivamente da quella prima votla lo confronterà con le successive e se non sono uguali ci segnalerà l'errore

test("should render ExpenseDashboardPage correctly", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
