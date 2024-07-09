/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, PropsWithChildren } from 'react';

interface State {
  error?: any;
}

class ErrorBoundary extends Component<
  PropsWithChildren<{
    renderFallback?: (props: { error: any }) => React.ReactNode;
  }>,
  State
> {
  state = { error: undefined };

  static getDerivedStateFromError(error: any) {
    console.error(error);
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { error };
  }

  render() {
    if (this.state.error) {
      return this.props.renderFallback?.({ error: this.state.error }) ?? null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
