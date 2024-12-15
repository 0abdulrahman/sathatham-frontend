import AppError from './app-error';
import { validateSession } from './validate-session';

export default async function catchError<T, E extends new (message?: string) => AppError>(
  promise: Promise<APIResponse<T>>,
  errorsToCatch?: E[] | null,
  redirectOnFail: boolean = true,
): Promise<{ resolved: SuccessResponse<T>; rejected: null } | { resolved: null; rejected: InstanceType<E> }> {
  try {
    const data = await promise;

    if (!data.status) {
      throw new AppError(data.message, data.errors, data.statusCode);
    }

    return { resolved: data, rejected: null };
  } catch (error: any) {
    // Handle expired session error
    if (error.statusCode === 401) {
      // Validate the session if the error is 401
      await validateSession(null, null, redirectOnFail);
    }

    if (!errorsToCatch) {
      return { resolved: null, rejected: error as InstanceType<E> };
    }

    if (errorsToCatch.some((e) => error instanceof e)) {
      return { resolved: null, rejected: error as InstanceType<E> };
    }

    throw error;
  }
}
