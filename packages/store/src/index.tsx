import ReactDOM from "react-dom";
import { ThemeProvider } from "@pavelkeyzik/design-system";
import { Layout } from "./ components/Layout";

ReactDOM.render(
  <ThemeProvider>
    <Layout>
      <p>Content will be here...</p>
    </Layout>
  </ThemeProvider>,
  document.getElementById("root")
);
