import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";

//lo snapshot si occupa di tenere traccia la prima volta di come un componente viene renderizzato e successivamente da quella prima votla lo confronterà con le successive e se non sono uguali ci segnalerà l'errore

test("should render NotFoundPage correctly", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
