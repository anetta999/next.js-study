"use client";

const ErrorBoundary = ({ error, reset }) => {
  return (
    <div>
      {error.message} <button onClick={reset}></button>
    </div>
  );
};

export default ErrorBoundary;
