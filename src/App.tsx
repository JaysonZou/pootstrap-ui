import { Breadcrumb, BreadcrumbItem } from "./components/breadcrumb";

function App() {
  return (
    <div className="App">
      <Breadcrumb>
        <BreadcrumbItem>Section 1</BreadcrumbItem>
        <BreadcrumbItem>Section 2</BreadcrumbItem>
        <BreadcrumbItem>Section 3</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}

export default App;
