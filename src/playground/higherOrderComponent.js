// Higher Order Component (HOC): a component that renders another component. è importante per riusare il codice
import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

//this is a function that returns a HOC -> ha lo scopo di modificare il componente sopra, creandone un'alternativa. Come convenzione si mette come parametro 'WrappedComponent'
// L'HOC sarà quello che ritornerà questa funzione
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isLoggedIn ? (
        <WrappedComponent {...props} />
      ) : (
        <p>
          Mi dispiace, per visualizzare il contenuto occorre eseguire l'accesso.
        </p>
      )}
    </div>
  );
};

// requireAuthentication

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

/* ReactDOM.render(
  <AdminInfo isAdmin={true} info="There are the details" />,
  document.getElementById("app")
); */
ReactDOM.render(
  <AuthInfo isLoggedIn={false} info="There are the details" />,
  document.getElementById("app")
);
