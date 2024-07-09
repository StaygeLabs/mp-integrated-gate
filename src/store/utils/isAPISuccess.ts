export function isAPISuccess<
  T extends {
    status?: string | number;
    data?: { success?: boolean; message?: string };
  }
>(res: T) {
  const errorMessage = res.data?.message;
  // 인증이 실패된 경우는 로그인페이지로 이동
  if (res.status?.toString() === '401') {
    throw new Error(errorMessage || '인증 토큰이 만료되었습니다.');
  }

  // 권한이 없는 경우 이전페이지로 이동
  if (res.status?.toString() === '403') {
    throw new Error(errorMessage || '권한이 없습니다.');
  }

  if (res.status?.toString() === '500') {
    throw new Error(errorMessage || '서버에러');
  }

  return res;
}
