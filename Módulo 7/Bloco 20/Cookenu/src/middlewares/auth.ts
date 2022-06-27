import { NextFunction, Request, Response } from "express";

import { JwtAdapter } from "../adapters/jwt/Jwt-adapter";

const jwt = new JwtAdapter();

export const authMiddleware = ( req: Request, res: Response, next: NextFunction ) => {
  const { authorization } = req.headers;

  if ( !authorization ) throw new Error("Token de autenticação não encontrado.");

  const token = authorization.replace("Bearer", "").trim();

  try {
    const decoded = jwt.getTokenData({ token });

    const { id } = decoded;
    req.userId = id;

    next();
    } catch (error) {
    if ( error instanceof Error ) return res.status(401).json({ error: error.message});
  };
};