import SuspenseWithErrorBoundary from 'components/utils/SuspenseWithErrorBoundary';
import { PropsWithChildren } from 'react';

interface AppFeedbackProps {}

function AppFeedback(props: PropsWithChildren<AppFeedbackProps>) {
  return (
    <SuspenseWithErrorBoundary
      renderError={() => '앱이 멈췄습니다. 잠시 후 다시 시도해주세요.'}
    >
      {props.children}
    </SuspenseWithErrorBoundary>
  );
}

export default AppFeedback;
