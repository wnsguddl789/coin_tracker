import { lazy } from "react";

import { createBrowserRouter, RouterProvider as RouteProvider } from "react-router-dom";

const ExamplePage = lazy(() => import("@/components/pages/example"));
const ExampleDetailPage = lazy(() => import("@/components/pages/example/detail"));

export default function RouterProvider() {
	const router = createBrowserRouter([
		{ path: "/", element: <ExamplePage /> },
		{ path: "/:id", element: <ExampleDetailPage /> },
	]);

	return <RouteProvider router={router} />;
}
