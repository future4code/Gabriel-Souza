export class CustomError extends Error {
  sqlMessage: string;
  constructor( public message: string, public statusCode: number){
    super(message);
  };
};