import { Route, Switch } from 'react-router';
import NewOccurrence from '../components/NewOccurrence';
import OccurenceList from '../components/OccurrenceList';
import Dashboard from '../pages/Dashboard';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/occurrencelist" exact component={OccurenceList} />
      <Route path="/newoccurrence" exact component={NewOccurrence} />
    </Switch>
  );
};
