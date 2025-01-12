import { Outlet, useLocation } from 'react-router-dom';
import './Subsidy.css';
import SubsidyOverview from './SubsidyOverview';

function SubsidyLayout() {
  const location = useLocation();
  const isOverviewPage = location.pathname === '/subsidy';

  return (
    <div className="subsidy-layout">
      {isOverviewPage ? <SubsidyOverview /> : <Outlet />}
    </div>
  );
}

export default SubsidyLayout;