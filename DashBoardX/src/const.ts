import Billing from "./pages/Subscription/Billing/Billing"
import Pricing from "./pages/Subscription/Pricing/Pricing"

export const routes = [
    {
        path: "/billing",
        component: Billing,
        isAuth: false,
    },
    {
        path: "/pricing",
        component: Pricing,
        isAuth: false,
    },
];