declare interface SuccessfulResponse<T> {
  success: true;
  data: T;
}

declare interface ErrorResponse {
  success: false;
  message: string;
  errors?: ValidationError[];
}

declare type ValidationError = {
  property: string;
  message: string;
};

declare type APIResponse<T> = SuccessfulResponse<T> | ErrorResponse;
