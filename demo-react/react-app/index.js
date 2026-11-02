import { createRoot } from "react-dom/client";
import App, { Demo } from "./App.jsx";

const rootId = document.getElementById("root");
const root = createRoot(rootId);
root.render(<Demo />);

/**
 *
 * Default export and import
 *
 * In a we have only  one default export
 *
 * Named export and import
 *
 * export
 */
