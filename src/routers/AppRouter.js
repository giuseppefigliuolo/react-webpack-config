import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpensePage from "../components/AddExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import EditExpensePage from "../components/EditExpensePage";

const AppRouter = () => (
  // https://reactrouter.com/web/guides/quick-start
  // Switch will start looking for a matching <Route>
  //   /:id si prenderà qualsiasi valore dinamico successivo al path stabilito
  //   <Route path="/edit/:id" component={EditExpensePage} exact={true} />
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
