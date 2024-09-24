import { Request, Response, NextFunction } from "express";

export function Authenticated() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = async function (
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      console.log("Authenticated");
      if (!req.user) {
        logging.error("Not authenticated");
        return res.status(401).json({ error: "Not authenticated" });
      }
      return originalMethod.call(this, req, res, next);
    };
    return descriptor;
  };
}
