/* eslint-disable no-underscore-dangle */
type SeverityLevel = 'fatal' | 'error' | 'warning' | 'log' | 'info' | 'debug';

export function isSeverityLevel(level?: string): level is SeverityLevel {
  if (!level) {
    return false;
  }
  return ['fatal', 'error', 'warning', 'log', 'info', 'debug'].includes(level);
}

export class Exception extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NetworkError';
  }

  // status
  private __status?: number;

  get status() {
    return this.__status;
  }

  setStatus(status: number) {
    this.__status = status;
    return this;
  }

  // level
  private __level: SeverityLevel = 'error';

  get level() {
    return this.__level;
  }

  setLevel(level: SeverityLevel) {
    this.__level = level;
    return this;
  }
}
