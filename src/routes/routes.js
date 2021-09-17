import { Route, Switch } from "react-router"
import Dashboard from "../pages/Dashboard"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Dashboard} />
        </Switch>
    )
}