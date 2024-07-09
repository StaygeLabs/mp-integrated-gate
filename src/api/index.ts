import { Api as YoumeonApi } from 'api/generated/youmeon/Api';

export type ApiErrorType = {
  message?: string;
  status: number;
  error: {
    message: string;
    code?: string;
  };
};

export const youmeonApi = new YoumeonApi();
