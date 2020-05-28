import "./App.css";
import React, {useState} from "react";
import {ErrorBoundary} from "react-error-boundary";
import {RecoilRoot} from "recoil";
import CharacterCounter from "../src/components/CharacterCounter";
import TodoList from "../src/components/TodoList";
import CurrentUser from "../src/components/async/CurrentUser";

const ErrorFallback = ({error, componentStack}) => {
  console.log(error);

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
};

const VIEWS = {
  COUNTER: "counter",
  TODO: "todo",
  ASYNC: "async"
};

const App = () => {
  const [view, setView] = useState(VIEWS.COUNTER);

  return (
    <RecoilRoot>
      <button onClick={() => setView(VIEWS.COUNTER)}>Counter</button>
      <button onClick={() => setView(VIEWS.TODO)}>Todo list</button>
      <button onClick={() => setView(VIEWS.ASYNC)}>Async</button>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<div>Loading...</div>}>
          {(() => {
            switch (view) {
              case VIEWS.COUNTER:
                return <CharacterCounter />;
              case VIEWS.TODO:
                return <TodoList />;
              case VIEWS.ASYNC:
                return (
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <CurrentUser />
                  </ErrorBoundary>
                );

              default:
                return null;
            }
          })()}
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default App;
