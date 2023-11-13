import MainNavigation from "../components/ui/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred!</h1>
        <p>This page could not be loaded.</p>
      </main>
    </>
  );
}

export default ErrorPage;
