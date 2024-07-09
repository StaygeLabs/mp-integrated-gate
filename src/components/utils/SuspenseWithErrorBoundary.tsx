import { PropsWithChildren, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

interface SuspenseWithErrorBoundaryProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderError?: (props: { error: any }) => React.ReactNode;
}

const SuspenseWithErrorBoundary = (
  props: PropsWithChildren<SuspenseWithErrorBoundaryProps>
) => (
  <Suspense fallback='로딩중...'>
    <ErrorBoundary renderFallback={props.renderError}>
      {props.children}
    </ErrorBoundary>
  </Suspense>
);

export default SuspenseWithErrorBoundary;
