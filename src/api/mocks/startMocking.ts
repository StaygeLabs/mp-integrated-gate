/**
 * 가능하면 모킹 서버를 시작합니다.
 */
export async function startMocking() {
  if (import.meta.env.REACT_APP_API_SERVER !== 'mock') {
    return;
  }
  const { worker } = await import('./browser');
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}
